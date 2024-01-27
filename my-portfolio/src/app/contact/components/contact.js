import React from "react";
import style from "./contact.module.css";
import Image from "next/image";
import dow from "../images/Bottom Alignment.svg";

function Contact(){
    return(
        <div className={style["buttons-contact"]}>
            <button className={style["first-b"]}> Download CV <Image src={dow}/></button>
            <button className={style["second-b"]}>Contact me</button>
        </div>
    );
}

export default Contact;