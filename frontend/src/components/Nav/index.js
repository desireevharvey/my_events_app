import { Link } from 'react-router-dom';

export default function Nav(props) {


    return(
        
        <>
        {props.isLoggedIn ?
        <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="https://i.postimg.cc/3NT9t3r5/events.png" width="75" height="80">
    </img></a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
    
            <Link to='/' className="navbar-item">Home</Link>
            <Link to='/newevent' className="navbar-item">New Event</Link>
            <Link to='/account' className="navbar-item">Account</Link>
            
            </div>
            </div>
        </nav>
        :
        <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                <img src="https://i.postimg.cc/3NT9t3r5/events.png" width="75" height="80">
                </img>
                </a>

              <div class="navbar-start">
            
            <Link to='/' className="navbar-item">Home</Link>
            <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          
            
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