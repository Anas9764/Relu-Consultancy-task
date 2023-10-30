import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/maincontent/Main";


function Home(props) {
  return (
    <div>
    <Navbar/>
    <Main/>
      {/* <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
    </div>
  );
}

export default Home;