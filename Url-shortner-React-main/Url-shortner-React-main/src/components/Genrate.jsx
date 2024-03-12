import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { UseAuth } from '../Contexts/CustomHook';

const Genrate = () => {
    const {MakeUrl } = UseAuth()
    const InputRef = useRef()
    const [showModal, setShowModal] = useState(false);
    const [CopiedText, SetCopiedText] = useState(null)

    const HandleGnerateUrl = async () => {
        try {
            const InputVal = InputRef.current.value;
            const response = await fetch('http://localhost:8001/api/v1/url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer JwtAuth ${JSON.parse(localStorage.getItem('token'))}`

                },
                body: JSON.stringify({
                    url: InputVal
                }),
            })
            const data = await response?.json();
            setShowModal(true)
            SetCopiedText(data?.id)
            console.log(data?.id)
            InputRef.current.value = "";
        } catch (error) {
            console.log(error)
        }
    }
    const closeModal = () => {
        setShowModal(false);
    };
    const HandleCopied = async () => {
        await navigator.clipboard.writeText(CopiedText) 
    }
    useEffect(() => {
        MakeUrl()
    }, [HandleGnerateUrl])
    const Check = InputRef?.current?.value;
    return (
        <div className='Genrate'>
            <h3>
                "Effortlessly generate concise and shareable <b className="bold">short URLs</b> with our user-friendly link shortening service, providing a swift and efficient way to <b className="bold">simplify your links</b> for easy sharing."
            </h3>
            <br />
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>Your short URL has been generated!</p>
                        <div className="copied_board">
                            <h1>{CopiedText}</h1>
                            <button onClick={HandleCopied}>Copied</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="input">
                <input type="text" placeholder='Enter Your Url' ref={InputRef} />
                <button onClick={HandleGnerateUrl}>Genrate</button>
                {Check === "" ?
                    <small className='alert'> * Url is Required For Genrating Short Url</small>
                    : null}
                <div className="bar_link">
                    <NavLink to={"/dashboard"}>
                    <h3> &#9735; Click Here to See All Your Genrated Links !!</h3>
                    </NavLink>
                    <br />
                </div>
            </div>

        </div>
    )
}

export default Genrate