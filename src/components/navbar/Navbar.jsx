import React from "react";
import styles from "./Navbar.module.css";
// import styles from './Navbar.module.scss'
import { MdSearch, MdFilterList } from "react-icons/md";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.logoItem}>
          <h1>LOGO</h1>
        </div>
      </div>
      <div className={styles.searchbar}>
        <div className={styles.searchbaritem}>
          <MdSearch
            style={{
              position: "relative",
              top: "8px",
              //   right: '20px',
            }}
            color="black"
            fontSize="1.5em"
          />
          <input type="text" placeholder="Search here..." />
        </div>
        <div className={styles.searchbaritems}>
          <MdFilterList
            style={{
              position: "relative",
              top: "4px",
              //   right: '20px',
            }}
            color="#cdcfd2"
            fontSize="4.5em"
          />
          <h2>Filters</h2>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.buttonitem}>
          <p>Become a Seller </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
