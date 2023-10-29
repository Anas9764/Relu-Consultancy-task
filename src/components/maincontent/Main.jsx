import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Post from './post/Post'
import Artists from './artistsSidebar/Artists'
import styles from './Main.module.css'

const Main = () => {
  return (
    <div>Main
    <div className={styles.Main}>
<Sidebar/>
<Post/>
<Artists/>
    </div>
    </div>
  )
}

export default Main