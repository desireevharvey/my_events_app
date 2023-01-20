import { Link } from 'react-router-dom';

export default function Nav(props) {


    return(
        <>
        {props.isLoggedIn ?
        <nav>
            <Link to='/' className="nav-item btn">Home</Link>
            <Link to='/newevent' className="nav-item btn">New Event</Link>
            <Link to='/account' className="nav-item btn">Account</Link>
        </nav>
        :
        <nav>
            <Link to='/' className="nav-item btn">Home</Link>
            <Link to='/signup' className="nav-item btn">Sign Up</Link>
            <Link to='/login' className="nav-item btn">Login</Link>
        </nav>}
        </>
    )
}