export default function Settings() {

    const logout = () => {

    }

    return (
        <div className="view settings-view">
           <div className="topBar">
                <div className="user-profile">
                    <div className="cover" style={{
                        // backgroundImage: `url(${backendHost}/${user.profile_picture})`
                    }}></div>
                    <div className="info">
                        <h1>John Doe</h1>
                        <p>johndoe@work.org</p>
                        {/* <h1>{`${user.firstName} ${user.lastName}`}</h1> */}
                        {/* <h2>{`${user.email}`}</h2> */}
                    </div>
                </div>
                <svg onClick={logout} className="logoutBtn" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path opacity="0.6" d="M15 2H14C11.1716 2 9.75736 2 8.87868 2.87868C8 3.75736 8 5.17157 8 8V16C8 18.8284 8 20.2426 8.87868 21.1213C9.75736 22 11.1716 22 14 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2Z" fill="currentColor"/> <path opacity="0.4" d="M8 8C8 6.46249 8 5.34287 8.14114 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5H8.14114C8 18.6571 8 17.5375 8 16V12.75V11.25V8Z" fill="currentColor"/> <path fillRule="evenodd" clipRule="evenodd" d="M4.46967 11.4697C4.17678 11.7626 4.17678 12.2374 4.46967 12.5303L6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303C7.82322 14.2374 7.82322 13.7626 7.53033 13.4697L6.81066 12.75L14 12.75C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25L6.81066 11.25L7.53033 10.5303C7.82322 10.2374 7.82322 9.76256 7.53033 9.46967C7.23744 9.17678 6.76256 9.17678 6.46967 9.46967L4.46967 11.4697Z" fill="currentColor"/> </svg>
            </div>
            <div className="content">
                {/* <h1 className="title">Settings</h1> */}

                <div className="settings">
                    <textarea id="bio"></textarea>
                    <ul>
                        <li>
                            <h1>Online Status</h1>
                            <p>Offline</p>
                        </li>
                        <li>
                            <h1>Edit Profile</h1>
                            <p>Change your email or username</p>
                        </li>
                        <li>
                            <h1>Change Password</h1>
                        </li>
                        <li>
                            <h1>About Me</h1>
                            <p>All information about your account.</p>
                        </li>
                        <li>
                            <h1>Log Out</h1>
                            <p>End current session</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h1>Freeze Account</h1>
                            <p>Your won't be able to login or have access to this account, but can be unfrozen later.</p>
                        </li>
                        <li>
                            <h1>Delete Account</h1>
                            <p>Your account won't exist after this action.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}