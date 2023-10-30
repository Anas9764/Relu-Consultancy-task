import React from "react";
import styles from "./Artists.module.css";
import Bgimg1 from "../../../assets/img/side1.png";
import Bgimg2 from "../../../assets/img/side2.png";
import Bgimg3 from "../../../assets/img/side3.png";
import Bgimg4 from "../../../assets/img/side4.png";

import useravatar1 from "../../../assets/img/user1.png";
import useravatar2 from "../../../assets/img/user2.png";
import useravatar3 from "../../../assets/img/user3.png";
import useravatar4 from "../../../assets/img/user4.png";


const Artists = () => {

  const cardsData = [{
    id: 1,
    useravatarImg:  useravatar1 ,
    bgimg:Bgimg1,

  },
  {
    id: 2,
    useravatarImg:  useravatar2 ,
    bgimg:Bgimg2,
 
  },

  {
    id: 3,
    useravatarImg:  useravatar3 ,
    bgimg:Bgimg3,

  },
  {
    id: 4,
    useravatarImg:  useravatar4 ,
    bgimg:Bgimg4,

  },
]

  return (
    <div className={styles.Artists}>
      <div className={styles.Artists_titles}>
        <h3 className={styles.heading}>Artists</h3>
        <h3 className={styles.heading}>Photographers</h3>
      </div>

{cardsData.map((card, index) => (
  <div  key={cardsData.id} className={styles.Artists_sidepost}>
      <div className={styles.Artists_sidepost_bag}>
      <img src={card.bgimg} alt="Background" />
      <div className={styles.content}>
          <img src={card.useravatarImg} alt="Avatar" className={styles.avatar} />
          <div className={styles.title}>
            <h3 className={styles.username}>Lara Leones</h3>
            <p className={styles.tagname}>@thewallart</p>
          </div>
        </div>
      </div>
      </div>
))}

      {/* <div className={styles.Artists_sidepost}>
      <div className={styles.Artists_sidepost_bag}>
      <img src={postimg} alt="Background" />
      <div className={styles.content}>
          <img src={useravatar} alt="Avatar" className={styles.avatar} />
          <div className={styles.title}>
            <h3 className={styles.username}>Lara Leones</h3>
            <p className={styles.tagname}>@thewallart</p>
          </div>
        </div>
      </div>
      </div> */}

    </div>
  );
};

export default Artists;
