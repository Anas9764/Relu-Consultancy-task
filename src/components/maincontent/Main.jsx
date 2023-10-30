import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Post from './post/Post'
import Artists from './artistsSidebar/Artists'
import styles from './Main.module.css'

const Main = () => {
  return (
    // <div>Main
    <div className={styles.Main}>
  <div className={styles.box1}><Sidebar/></div>
  <div className={styles.box2}><Post/></div>
  <div className={styles.box3}><Artists/></div>




    </div>
    // </div>
  )
}

export default Main