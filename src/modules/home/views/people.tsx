import Axios from "axios"
import { useContext, useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom"
import { addFriendRoute, backendHost, declineRequestRoute, getFriendRequestRoute, peopleRoute, acceptFriendRequest } from "../../../routers/routes";
import { UserContext } from "../app";


export default function People() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="view people-view">
            <div className="top-bar">
                <button className={location.pathname == "/justchat/people" ? "active" : ""} onClick={() => navigate("/justchat/people")}>
                    <svg fill="currentColor" width="24" height="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> <g> <circle cx="41.37" cy="26.44" r="6.32"/> <circle cx="58.63" cy="26.43" r="6.32"/> <circle cx="28.4" cy="41.16" r="8"/> <circle cx="71.81" cy="41.16" r="8"/> <circle cx="50.11" cy="45.73" r="8"/> <path d="m59.14 80a4.18 4.18 0 0 0 3.2-1.37 4.57 4.57 0 0 0 1.37-3.2v-10.28a6.88 6.88 0 0 0 -6.86-6.86h-13.7a6.88 6.88 0 0 0 -6.86 6.86v10.28a4.68 4.68 0 0 0 4.57 4.57z"/> <path d="m29.32 75.43v-10.28a13.41 13.41 0 0 1 3.89-9.48 1.18 1.18 0 0 0 0-1.67 1.15 1.15 0 0 0 -.77-.33h-11a6.88 6.88 0 0 0 -6.86 6.86v10.33a4.68 4.68 0 0 0 4.57 4.57z"/> <path d="m80.85 75.43a4.18 4.18 0 0 0 3.2-1.37 4.57 4.57 0 0 0 1.37-3.2v-10.28a6.88 6.88 0 0 0 -6.86-6.86h-11a1.14 1.14 0 0 0 -.8 2 13.68 13.68 0 0 1 3.89 9.48v10.23z"/> </g> </svg>
                    <p>People</p>
                </button>                
                <button className={location.pathname == "/justchat/people/friendrequests" ? "active" : ""} onClick={() => navigate("/justchat/people/friendrequests")}>
                    <svg fill="currentColor" height="24" width="24" version="1.1" id="_x31_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128" xml:space="preserve"> <circle id="_x32_" cx="79.2" cy="42.6" r="9.6"/> <path id="_x31__1_" d="M51.2,65.2l18.5,4.9c1.2,0.4,2.3,0.1,3.2-0.4l9.7-5.6v21.5H63.5c-1.4,0-3,0.6-4.2,1.8 c-1.2,1.1-1.8,2.6-1.8,4.2l0,0v25.4c0,3.4,2.6,6,6,6c3.4,0,6-2.6,6-6V97.7h13.2v19.3c0,1.4,0.6,3,1.8,4.2c1.1,1.2,2.6,1.8,4.2,1.8 l0,0H114c3.4,0,6-2.6,6-6s-2.6-6-6-6H94.8v-14c2.8-1.1,4.8-3.5,5.6-6.3c1.6-6.6,2.4-13.5,2.4-20.6c0-0.5,0-1.7,0-1.8 c0-8-5.7-14.6-13.4-15.9c-0.1,0-1-0.1-1.2-0.1c-1,0-1.8,0.2-2.6,0.7l0,0l-15.1,8.7l-16.9-4.5c-2.3-0.6-4.5,0.7-5.1,3 C47.8,62.2,49.2,64.6,51.2,65.2z"/> <g> <circle cx="20.6" cy="14.3" r="9.9"/> <path d="M17.5,26.6c0.2,0,1.2,0.1,1.2,0.1c7.8,1.4,13.8,8.2,13.8,16.4c0,0.1,0.1,1.4,0,1.9c0,7.3-0.9,14.5-2.5,21.3 c-0.5,2-1.7,3.8-3.3,5.1v45.5c0,3.5-2.7,6.2-6.2,6.2c-3.5,0-6.2-2.7-6.2-6.2v-41c0.6,0.1,1.2,0.2,1.9,0.2c2.2,0,4.1-1,5.3-2.5 c0.9-1.2,1.5-2.7,1.5-4.3V41.5c0-0.7-0.5-1.2-1.2-1.2c-0.7,0-1.2,0.5-1.2,1.2v27.8c0,2.3-2,4.3-4.3,4.3c-2.3,0-4.3-2-4.3-4.3 c0,0,0-37,0-37.1C11.9,29.1,14.4,26.6,17.5,26.6z"/> </g> </svg>
                    <p>Friend Requests</p>
                </button>                
            </div>
            <div className="tab">
                <Outlet />
            </div>
        </div>
    )
}


// export function PeopleTab() {
//     return (
//         <>
//             <h1>PEOPLE</h1>
//         </>
//     )
// }

// export function FriendRequestTab() {
//     return (
//         <>
//             <h1>FRIEND REQUEST</h1>
//         </>
//     )
// }


interface personType {
    userId: string,
    username: string,
    firstName: string,
    lastName: string,
    profile_picture: string
}

export function PeopleTab() {

    const [response, setResponse] = useState([])

    const userContext = useContext(UserContext);

    if (userContext == null)
        throw new Error("Chat must be wrapped in User Context")

    const {user, changeUser} = userContext;

    useEffect(() => {
        Axios.post(peopleRoute,{
            userId: user.id
        }).then((response) => {
            setResponse(response.data)
        })
    }, [])

    const addAsFriend = (id: string | number) => {
        Axios.post(addFriendRoute, {
            to: id,
            from: user.id
        }).then((response) => {
            if (response.data.msg) {
                alert(response.data.msg)
            }
        })
    }

    return (
        <div className="content">
            <div className="people-container">
                {
                    response.map((person: personType, index) => {
                        return <>                        
                            <div className="person">
                                <section>
                                    <div className="profile" style={{
                                        backgroundImage: `url(${backendHost}/${person.profile_picture})`
                                    }}></div>
                                    <div className="info">
                                        <h1>{`${person.firstName} ${person.lastName}`}</h1>
                                        <p>@{person.username}</p>
                                    </div>
                                </section>
                                <svg onClick={() => addAsFriend(person.userId)} className="addFriendBtn" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="6" r="4" fill="currentColor"/> <path fillRule="evenodd" clipRule="evenodd" d="M16.5 22C14.8501 22 14.0251 22 13.5126 21.4874C13 20.9749 13 20.1499 13 18.5C13 16.8501 13 16.0251 13.5126 15.5126C14.0251 15 14.8501 15 16.5 15C18.1499 15 18.9749 15 19.4874 15.5126C20 16.0251 20 16.8501 20 18.5C20 20.1499 20 20.9749 19.4874 21.4874C18.9749 22 18.1499 22 16.5 22ZM17.0833 16.9444C17.0833 16.6223 16.8222 16.3611 16.5 16.3611C16.1778 16.3611 15.9167 16.6223 15.9167 16.9444V17.9167H14.9444C14.6223 17.9167 14.3611 18.1778 14.3611 18.5C14.3611 18.8222 14.6223 19.0833 14.9444 19.0833H15.9167V20.0556C15.9167 20.3777 16.1778 20.6389 16.5 20.6389C16.8222 20.6389 17.0833 20.3777 17.0833 20.0556V19.0833H18.0556C18.3777 19.0833 18.6389 18.8222 18.6389 18.5C18.6389 18.1778 18.3777 17.9167 18.0556 17.9167H17.0833V16.9444Z" fill="currentColor"/> <path d="M15.4147 13.5074C14.4046 13.1842 13.24 13 12 13C8.13401 13 5 14.7909 5 17C5 19.1406 7.94244 20.8884 11.6421 20.9949C11.615 20.8686 11.594 20.7432 11.5775 20.6201C11.4998 20.0424 11.4999 19.3365 11.5 18.586V18.414C11.4999 17.6635 11.4998 16.9576 11.5775 16.3799C11.6639 15.737 11.8705 15.0333 12.4519 14.4519C13.0334 13.8705 13.737 13.6639 14.3799 13.5774C14.6919 13.5355 15.0412 13.5162 15.4147 13.5074Z" fill="currentColor"/> </svg>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    )
}



export function FriendRequestTab() {

    const [response, setResponse] = useState([]);
    const [updater, setUpdater] = useState(false)
    const userContext = useContext(UserContext);

    if (userContext == null)
        throw new Error("Chat must be wrapped in User Context")

    const {user, changeUser} = userContext;

    useEffect(() => {
        Axios.post(getFriendRequestRoute, {
            userId: user.id
        }).then((response) => {
            setResponse(response.data)
        })
    }, [updater])


    const declineRequest = (id: string | number) => {
        Axios.post(declineRequestRoute, {
            userId: user.id,
            friendId: id
        }).then((response) => {
            if (response.data.acknowledged) {
                alert(response.data.msg)
                setUpdater(!updater)
            } else {
                alert(response.data.msg)
            }
        })
    }

    const acceptRequest = (id: string | number) => {
        Axios.post(acceptFriendRequest, {
            userId: user.id,
            friendId: id
        }).then((response) => {
            if (response.data.acknowledged) {
                alert(response.data.msg)
                setUpdater(!updater)
            } else {
                alert(response.data.msg)
            }
        })
    }


    return (
        <div className="content">
            <div className="requests-container">
                {
                    response.map((data: personType, key) => {
                        return <>
                            <div key={key} className="request">
                                <section>
                                    <div className="profile" style={{
                                        backgroundImage: `url(${backendHost}/${data.profile_picture})`
                                    }}></div>
                                    <div className="info">
                                        <h1>{`${data.firstName} ${data.lastName}`}</h1>
                                        <p>@{data.username}</p>
                                    </div>
                                </section>
                                <section>
                                    <svg onClick={() => declineRequest(data.id)}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth="1.5"/> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round"/> </svg>
                                    <svg onClick={() => acceptRequest(data.id)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth="1.5"/> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                                </section>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    )
}