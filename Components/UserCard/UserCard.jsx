import React from "react";
import Style from "../styles/UserCard.module.css";
import images from "../../assets";
import Image from "next/image";
const UserCard = (el, i, addFriends) => {
    return (
        <div className={Style.UserCard}>
            <div className={Style.UserCard_box}>
                <Image src={images[`image${i + 1}`]} width={100} height={100}/>
            </div>
            <div className={Style.UserCard_box_info}>
                <h3>{el.name}</h3>
                <p>{el.accountAddress}</p>
            </div>
        </div>
    )
}



export default UserCard;