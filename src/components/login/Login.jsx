import React from 'react'
import styles from './Login.module.css'
import {Link} from "react-router-dom"
import InputControl from '../InputControl/InputControl';


const Login = () => {
  return (
    <div className={styles.container}>
    <div className={styles.innerBox}>
      <h1 className={styles.heading}>Login</h1>

      <InputControl label="Email" placeholder="Enter Email address"/>
      <InputControl label="Password" placeholder="Enter Your Password"/>
      
<div className={styles.footer}>
<button>Login</button>
<p>
  Aleady have an account?{""}
  <span>
    <Link to="/signup">Sign Up</Link>
  </span>
</p>

</div>
      </div>
      </div>
  );
}

export default Login