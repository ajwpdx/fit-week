import React from "react";
import { useHistory } from "react-router";
import UserIcon from "./UserIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


const athleteId = 2345

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
        <button className='header-btn signup' onClick={toSignup}>Sign Up</button>
      </nav>
    );
  } else if (props.view === "signup") {
    return (
      <nav className="header-nav">
        <button className='header-btn login' onClick={toLogin}>Log In</button>
      </nav>
    );
  } else {
    return (

      <ul className="header-nav">
        <li className='nav-item'><a className='nav-link' href="/my-plan">My Plan</a></li>
        <li className='nav-item'><a className='nav-link' href="/wo-library">W/O Library</a></li>
        <li className='nav-item'><a className='nav-link' href="/Workout-Plans">Programs
          <FontAwesomeIcon icon={faChevronDown} className='icon dropdown-arrow' />
        </a>
          <ul className='dropdown-links'>
            <li><a href="/Workout-Plans">Find Programs</a></li>
            <li><a href="/Workout-Plans">Build Program</a></li>
          </ul>
        </li>
        <li className='nav-item'><a className='nav-link' href="/Connect">Connect</a></li>
        <li className='nav-item'><a className='user-icon' href={`/athlete/${athleteId}`}><h3 className='user-icon'>A</h3> <FontAwesomeIcon icon={faChevronDown} className='icon dropdown-arrow' />
        </a>
          <ul className='dropdown-links'>
            <li><a href={`/athlete/${athleteId}`}>Profile</a></li>
            <li><a href={`/athlete/${athleteId}/settings`}>Settings</a></li>
            <li><a href={`/login`}>Logout</a></li>
          </ul>
        </li>
      </ul>
    );
  }
};

export default HeaderNav;
