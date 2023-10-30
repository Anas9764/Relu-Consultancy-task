import React from 'react';
import styles from './Sidebar.module.css';
import {MdOutlineHome,MdNotificationsNone,MdMonitorHeart ,MdWallet,MdConnectWithoutContact,MdOutlineSubscriptions,MdAccountCircle,MdSettings,MdOutlineLogout} from "react-icons/md";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
   
      <ul className={styles.sidebarmenu}>
        <li><MdOutlineHome/>Home</li>
        <li><MdNotificationsNone/>Notification</li>
        <li><MdMonitorHeart/>Shop</li>
        <li><MdConnectWithoutContact/>Conversation</li>
        <li><MdWallet/>Wallet</li>
        <li><MdOutlineSubscriptions/>Subscription</li>
        <li><MdAccountCircle/>My Profile</li>
        <li><MdSettings/>Settings</li>
      </ul>
  <div className={styles.sidebarlogoutbtn}>
        <button><MdOutlineLogout/>Log Out</button>
      </div>

    </div>
  );
}

export default Sidebar;
