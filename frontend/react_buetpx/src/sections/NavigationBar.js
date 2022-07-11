import React from "react";
import { Link } from "react-router-dom";
import { Ssearch } from "../components/Popularicons";
import { Tinput, Tspan } from "../components/Populartags";

function Nav() {
  return (
    <nav>
      {/* <Slogo clas="logo" /> */}
      <div className="bowl_menu">
        <Link to="/" className="block_menu">
          <Tspan title="Discover" />
          {/* <SarrowBot /> */}
        </Link>
        

        <Link to="/" className="block_menu">
          <Tspan title="Quests" />
        </Link>
        <Link to="/" className="block_menu">
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
