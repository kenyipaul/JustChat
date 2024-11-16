export const backendHost = `http://localhost:3303`

export const loginRoute = `${backendHost}/api/login`;
export const signupRoute = `${backendHost}/api/signup`;

export const signupUserInfo = `${backendHost}/api/signup/userinfo`;
export const signupUserPass = `${backendHost}/api/signup/userpass`;

export const validateUserRoute = `${backendHost}/api/login/validate`;


export const peopleRoute = `${backendHost}/api/people`
export const getFriendsRoute = `${backendHost}/api/people/get/friends`
export const addFriendRoute = `${backendHost}/api/people/add/friend`
export const getFriendRequestRoute = `${backendHost}/api/people/get/friendRequests`

export const acceptFriendRequest = `${backendHost}/api/people/accept/friendRequest`
export const declineRequestRoute = `${backendHost}/api/people/decline/friendRequest`