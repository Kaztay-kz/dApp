import React, { useState, useContext } from "react";
import Image from "next/image";

import Style from ".Model.module.css";
import images from "../../assets";
import {ChatAppContect} from "../../Context/ChatAppContext";
import {Loader} from "../../Components/index"


const Model = ({ openBox, title, info, smallInfo, image, functionName, address}) => {
    const [name, setName] = useState('');
    const [accountAddress, setAccountAddress] = useState('');
    const {loading} = useContext(ChatAppContect)
    return (
        <div className={Style.Model}>
            <div className={Style.Model_box}>
                <div className={Style.Model_box_left}>
                    <Image src={image} alt='image' width={700} height={700} />
                </div>
                <div className={Style.Model_box_right}>
                    <h1>
                        {title} <span>{head}</span>
                    </h1>
                    <p>{info}</p>
                    <small>{smallInfo}</small>
                    {
                        loading == true ? (
                            <Loader/>
                        ) : (
                        <div className={Style.Model_box_right_name}>
                            <div className={Style.Model_box_right_name_info}>
                                <Image src={images.username} alt='user' width={30} height={30} />
                                <input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className={Style.Model_box_right_name_info}>
                                <Image src={images.account} alt='acc' width={30} height={30} />
                                <input type="text" placeholder={address || "Enter Address"} onChange={(e) => setAccountAddress(e.target.value)}/>
                            </div>
                            <div className={Style.Model_box_right_name_btn}>
                                <button onClick={() => functionName({name, accountAddress})}></button>
                                {""}
                                <Image src={images.send} alt="Send" width={30} height={30} />
                                {""}
                                Submit
                                <button onClick={() => openBox(false)}></button>
                                {""}
                                <Image src={images.close} alt="Cancel" width={30} height={30} />
                                {""}
                                Cancel
                            </div>
                        </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
}

export default Model;