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
    <a class="navbar-item">
            <Link to='/'>Home</Link>
            </a>
            <a class="navbar-item">
            <Link to='/newevent'>New Event</Link>
            </a>
            <a class="navbar-item">
            <Link to='/account'>Account</Link>
            </a>
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
            <a class="navbar-item">
            <Link to='/'>Home</Link></a>
            <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button has-background-danger-light">
            <strong>
            <Link to='/signup'>Sign Up</Link>
            </strong>
            </a>
            <a class="button has-background-danger-light">
            <Link to='/login'>Login</Link>
            </a>
        </div>
        </div>
      </div>
    </div>
  </div>

        </nav>}
        </>
    )
}