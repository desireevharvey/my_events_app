import { Link } from 'react-router-dom';

export default function Nav(props) {


    return(
        
        <>
        {props.isLoggedIn ?
        <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
   
      <img className="navbar-item" src="https://i.postimg.cc/3NT9t3r5/events.png" width="75" height="80">
    </img>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">

            <Link to='/' className="navbar-item">Home</Link>
  
            <Link to='/newevent' className="navbar-item">New Event</Link>
          
            <Link to='/account' className="navbar-item">Account</Link>
      
            </div>
            </div>
        </nav>
        :
        <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
           
      <img className="navbar-item" src="https://i.postimg.cc/3NT9t3r5/events.png" width="75" height="80">
    </img>


              <div className="navbar-start">
            <Link to='/' className="navbar-item">Home</Link>
            <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
            <Link to='/signup' className="button has-background-danger-light">Sign Up</Link>
            <Link to='/login' className="button has-background-danger-light">Login</Link>  
        </div>
        </div>
      </div>
    </div>
  </div>

        </nav>}
        </>
    )
}