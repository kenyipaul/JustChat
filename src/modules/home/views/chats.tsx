export default function Chats() {
    return (
        <div className="view chat-view">
            <div className="top-bar">
                <div>
                    <h1>JUSTCHAT</h1>
                    <svg width="24" height="24" className="menuBtn" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Menu / Menu_Alt_05"> <path id="Vector" d="M5 17H13M5 12H19M11 7H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg>
                </div>
                <input type="text" name="search" id="search" placeholder="Search chats here..." />
            </div>

            <div className="chat-list">
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </div>
        </div>
    )
}

function Chat() {
    return (
        <div className="chat">
            <div className="profile">
                <div className="cover"></div>
            </div>
            <div className="info">
                <h1>John Doe</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum fugiat sequi, iure cupiditate inventore saepe.</p>
            </div>
            <p className="time">4:12 pm</p>
        </div>
    )
}