import React from "react";
import { useHistory } from "react-router";
import UserIcon from "./UserIcon";

const HeaderNav = (props) => {
  const history = useHistory()

  const toLogin = () => {
    history.push('/login')
  }

  const toSignup = () => {
    history.push('/signup')
  }

  if (props.view === "login") {
    return (
      <nav className="header-nav">
        <button onClick={toSignup}>Sign Up</button>
      </nav>
    );
  } else if (props.view === "signup") {
    return (
      <nav className="header-nav">
        <button onClick={toLogin}>Log In</button>
      </nav>
    );
  } else {
    return (

        <ul className="header-nav">
          <li className='nav-item'><a className='nav-link' href="/my-plan">My Plan</a></li>
          <li className='nav-item'><a className='nav-link' href="/wo-library">W/O Library</a></li>
          <li className='nav-item'><a className='nav-link' href="/Workout-Plans">Programs</a>
            <ul className='dropdown-links'>
                <li><a href="/Workout-Plans">Find Programs</a></li>
                <li><a href="/Workout-Plans">Program Builder</a></li>
              </ul>
            </li>
          <li className='nav-item'><a className='nav-link' href="/Connect">Connect</a></li>
          <UserIcon />
        </ul>
    );
  }
};

export default HeaderNav;
