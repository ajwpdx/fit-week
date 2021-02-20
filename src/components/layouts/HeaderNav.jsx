import React from "react";
import UserIcon from "./UserIcon";

const HeaderNav = (props) => {
  if (props.view === "login") {
    return (
      <nav className="header-nav">
        <button>Sign Up</button>
      </nav>
    );
  } else if (props.view === "signup") {
    return (
      <nav className="header-nav">
        <button>Log In</button>
      </nav>
    );
  } else {
    return (
      <nav className="header-nav">
        <a href="/My-Plan">My Plan</a>
        <a href="/wo-library">W/O Library</a>
        <a href="/Workout-Plans">Programs</a>
        <a href="/Connect">Connect</a>
        <UserIcon />
      </nav>
    );
  }
};

export default HeaderNav;
