import axios from 'axios';
import { createContext, useContext, useEffect, useState } from "react";


const AuthHook = createContext();
const CustomHook = ({ children }) => {
    const [User, SetUser] = useState(false)
    const [Loading, SetLoading] = useState(false);
    const [DataList, SetDataList] = useState([]);
    const [SingleAnalytics,SetSingleAnalytics] =useState([]);

    const HandleLogout = async () => {
        try {
            SetLoading(true)
            const response = await axios.post(
                'http://localhost:8001/api/v1/user/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer JwtAuth ${JSON.parse(localStorage.getItem('token'))}`,
                    },
                }
            );
            setTimeout(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            console.warn(response?.data)
            window.location.href = '/login'
            SetLoading(false)
        }, 2000);
        }
        catch (err) {
            console.log(err)
        }
    }
    const MakeUrl = async () => {
        try {
            const response = await fetch('http://localhost:8001/api/v1/url',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer JwtAuth ${JSON.parse(localStorage.getItem('token'))}`
                    }
                },);
            const data = await response.json();
            SetDataList(data?.Url)
        }
        catch (err) {
        }
    }
    const AnalyticsUrl = async (ShortId) => {
        try {
            const response = await fetch(`http://localhost:8001/api/v1/url/analytics/${ShortId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer JwtAuth ${JSON.parse(localStorage.getItem('token'))}`
                    }
                },);
            const data = await response.json();
            SetSingleAnalytics(data)
        }
        catch (err) {
        }
    }
    useEffect(()=>{
        MakeUrl()
    },[])
    return (
        <AuthHook.Provider value={{
            User,
            SetUser,
            HandleLogout,
            Loading,
            SetLoading ,
            MakeUrl,DataList
           , SetDataList ,
           AnalyticsUrl ,
           SingleAnalytics
        }}>
            {children}
        </AuthHook.Provider>
    )
}
const UseAuth = () => {
    const authContext = useContext(AuthHook);
    if (!authContext) {
        throw new Error("useAuth must be used within a CustomHookProvider");
    }

    return authContext;
}


export {
    CustomHook,
    UseAuth
}