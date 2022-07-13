import React from "react";
import { Link } from "react-router-dom";
import { Ssearch } from "../components/Popularicons";
import { Tinput, Tspan } from "../components/Populartags";

function Nav() {
  return (
    <nav>
      {/* <Slogo clas="logo" /> */}
      <div className="nav_bowl">
        <Link to="/" className="nav_block">
          <Tspan title="Discover" />
          {/* <SarrowBot /> */}
        </Link>
        

        <Link to={{pathname:"google.com"}} className="nav_block">
          <Tspan title="Quests" />
        </Link>
        <Link to="/" className="nav_block">
          <Tspan title="Blog" />
        </Link>
      </div>

      <div className="bowl_Search">
        <Ssearch clas="search_svg" />
        <Tinput clas="input_Search" plc="search BUETpx" />
      </div>

      <div className="bowl_logged">
        <Link to="/" className="to_login ">
          <Tspan title="Log in" />
        </Link>
        <Link to="/" className="to_signup">
          <Tspan title="Sign up" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
