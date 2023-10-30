import React from "react";
import styles from "./Post.module.css";
import postimg from "../../../assets/img/postimg.png";
import useravatar from "../../../assets/img/userprofile.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";

const Post = () => {
  return (
    <>
      <div className={styles.post}>
        <div className={styles.postheader}>
          <div className={styles.Avtar_title}>
            <img
              className={styles.useravatar}
              src={useravatar}
              alt="User Avatar"
            />
            <div className={styles.title}>
              <h3 className={styles.username}>Lara Leones</h3>
              <p className={styles.tagname}>@thewallart</p>
            </div>
          </div>
          <div className={styles.postheader_dots}>
            <h3>
              <BsThreeDotsVertical />
            </h3>
          </div>
        </div>

        <div className={styles.postcaption}>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
            <span className="styles.spantext">Read More</span>
          </p>
        </div>

        <div className={styles.postimage}>
          <img src={postimg} alt="Post" />
        </div>

        <div className={styles.postbuttons}>
          <h3 className={styles.likebutton}>
            <AiOutlineHeart />
            9.8k
          </h3>
          <h3 className={styles.commentbutton}>
            <FaRegComment />
            8.6k
          </h3>
          <h3 className={styles.sharebutton}>
            <PiShareFatBold />
            7.2k
          </h3>
        </div>
      </div>
    </>
  );
};

export default Post;
