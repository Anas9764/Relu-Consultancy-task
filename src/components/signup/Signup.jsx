import React from 'react'
import styles from './Signup.module.css'
import {Link} from "react-router-dom"
import InputControl from '../InputControl/InputControl';


const Signup = () => {
  return (
    <div className={styles.container}>
    <div className={styles.innerBox}>
      <h1 className={styles.heading}>Signup</h1>

      <InputControl label="Name" placeholder="Enter Your Name"/>
      <InputControl label="Email" placeholder="Enter Email address"/>
      <InputControl label="Password" placeholder="Enter Your Password"/>
      
<div className={styles.footer}>
<button>Signup</button>
<p>
  Aleady have an account?{""}
  <span>
    <Link to="/Login">Login</Link>
  </span>
</p>

</div>
      </div>
      </div>
  );
}

export default Signup