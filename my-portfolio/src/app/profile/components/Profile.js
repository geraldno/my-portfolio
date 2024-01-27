"use client";

import Image from "next/image";
import React from "react";
import style from "./Profile.module.css";
import perfil from "../images/foto-perfil.jpg";
import git from "../images/icons/github.svg";
import X from "../images/icons/twitter.svg"
import linke from "../images/icons/linkedin.svg";

function Profile() {
    return (
        <div className={style.main}> 
            <figure className={style.perfilredondo}><Image className={style["img-perfil"]}  src={perfil}/></figure>
            <div className={style.perfil}>
                <h1>Gerald Chavez</h1>
                <p>Super Junior Front end</p>
                <div className={style["icon-perfil"]}>
                    <a href="https://github.com/geraldno"><Image src={git}/></a>
                    <a href="https://twitter.com/GeraldoNuba23"><Image src={X}/></a>
                    <a href="https://www.linkedin.com/in/gerald-luis-ch%C3%A1vez-pereira-8181912b0/"><Image src={linke}/></a>
                </div>
                </div>
        </div>
    );
}

export default Profile;