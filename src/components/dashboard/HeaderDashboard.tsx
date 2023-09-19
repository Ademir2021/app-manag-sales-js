import './HeaderDashboard.css'

type PropsHeaderDashboard = {
    user: number;
    username: number;
    handleLogout: any;
}

export function HeaderDashboard(props: PropsHeaderDashboard) {
    return (
        <>
            <div className='header-dashboard'>
                <strong className='header-dashboard-text' >Panel.</strong>
                <span className='header-dashboard-user'><strong>Login:</strong>{props.user}</span>
                <span className='header-dashboard-username'><strong>User logado:</strong>{props.username}</span>
                <button className='header-dashboard-btn-handle-logout' onClick={props.handleLogout}>Logout</button>
            </div>
        </>
    )
}