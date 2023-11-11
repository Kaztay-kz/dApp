import React from 'react, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import link from "link/image";

//Internal import
import Style from "./NavBar.module.css";
import { ChatAppContect } from "../../Context/ChatAppContext";
import { Model, Error } from "../index";
import images from "../../assets";
 
const NavBar = () => {
    const menuItems = [
        {
            menu: "All Users",
            link: "alluser"
        },
                {
            menu: "CHAT",
            link: "alluser"
        },
                {
            menu: "CONTACT",
            link: "alluser"
        },
                {
            menu: "SETTING",
            link: "alluser"
        },
                {
            menu: "FAQS",
            link: "alluser"
        },
                {
            menu: "TERM OF USE",
            link: "alluser"
        },
        ];

    //USESTATE
    const [active, setActive] = useState(2);
    const [open, setOpen] = useState(false);
    const [openModel, setOpenModel] = useState(false);

    const { account, userName, connectWallet } = useContext(ChatAppContect);
    return (
        <div className={Style.Navbar}>
            <div className={Style.Navbar_box}>
            <div className={Style.Navbar_box_left}>
                <Image src={images.logo} alt="logo" width={50} height={50}}/>
                </div>
            <div className={Style.Navbar_box_right}>
                <div className={Style.Navbar_box_right_menu}>
                    {menuItems.map((el, i)=> ( 
                    <div onClick={()=> setActive(i+1) key={1+1} 
                        class{Style.Navbar_box_right_menu_item} ${active ==i+1 ? Style.
                        active_btn : ""}></div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
