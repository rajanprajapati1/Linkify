import React, { useEffect, useState } from 'react'
import { UseAuth } from '../Contexts/CustomHook'

const DashBoard = () => {
    const { DataList, AnalyticsUrl, SingleAnalytics } = UseAuth()
    const [expandedRow, setExpandedRow] = useState(0);
    console.log(SingleAnalytics)
    let data = DataList;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const URLsGeneratedToday = data.filter(item => {
        const createdAt = new Date(item.createdAt);
        return createdAt >= today;
    });
    const totalURLsGeneratedToday = URLsGeneratedToday.length;
    const mostPopularURL = data.reduce((acc, curr) => {
        return curr.visitHistory.length > acc.visitHistory.length ? curr : acc;
    }, { visitHistory: [] });
    const mostPopularURLLength = mostPopularURL.visitHistory.length;
    const URLsNoVisits = data.filter(item => item.visitHistory.length === 0);
    const toggleAccordion = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
      };
    return (
        <div className='dashboard'>
            <div className="first_bar">
                <h1>DashBoard</h1>
            </div>
            <div className="flex_container">
                <div className="side1">
                    <div className="user_details">
                        <div className="first_u">
                            <div className="user_logo">
                                <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="" />
                            </div>
                            <div className="other_Details">
                                <h3>Name : {JSON.parse(localStorage.getItem('user'))}</h3>
                                <h3>Email : {JSON.parse(localStorage.getItem('email'))}</h3>
                                <h3>Status : LoggedIn <strong>&#9906;</strong> </h3>
                            </div>
                        </div>
                        <div className="second_u">
                            Not Ready Yet &#63;
                        </div>
                    </div>
                    <table id="urlDataTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Short ID</th>
                                <th>Redirect URL</th>
                                <th>Created By</th>
                                <th>Visit History</th>
                            </tr>
                        </thead>
                        {data.map((val, i) => {
                            return <>
                                <tbody key={i} onClick={() => AnalyticsUrl(val?.shortId)}>
                                    <td>{i + 1}</td>
                                    <td onClick={() => toggleAccordion(i)}>{val?.shortId}</td>
                                    <td>{val?.redirectUrl?.slice(0, 40)}</td>
                                    <td>{val?.CreatedBy && JSON.parse(localStorage.getItem('user'))}</td>
                                    <td>{val?.visitHistory?.length} views</td>
                                </tbody>
                               {expandedRow === i && (
                                 <tr className="accordion-content">
                                 <td colSpan="5">
                                     <h4> TotalClicks :
                                         {SingleAnalytics?.TotalClicks} </h4>
                                     <h4>
                                         Analytics :
                                         {SingleAnalytics?.Analytics?.length}
                                     </h4>
                                 </td>
                             </tr>
                               )}
                            </>

                        })}
                    </table>
                </div>
                <div className="side2">
                    <h2>Analytics</h2>
                    <div className="analytics_card">
                        <div className="a_card">
                            <h1>{DataList?.length}</h1>
                            <b>Total Number of Shortened URLs:</b>
                        </div>
                        <div className="a_card">
                            <h1>{mostPopularURLLength}</h1>
                            <b>Most Popular Redirect URLs</b>
                        </div>
                        <div className="a_card">
                            <h1>{mostPopularURLLength}</h1>
                            <b>Click-Through Rate (CTR)</b>
                        </div>
                        <div className="a_card">
                            <h1>{URLsNoVisits.length}</h1>
                            <b>URLs with No Visits</b>
                        </div>
                        <div className="a_card">
                            <h1>{totalURLsGeneratedToday}</h1>
                            <b>New Url Genrated Today</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
