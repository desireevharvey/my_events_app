import { Link } from 'react-router-dom';

export default function Nav() {


    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <Link to='/' className="nav-item btn">Home</Link>
            <Link to='/newevent' className="nav-item btn">New Event</Link>
            <Link to='/account' className="nav-item btn">Account</Link>
        </nav>
    )
}