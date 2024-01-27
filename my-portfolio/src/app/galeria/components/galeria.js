import React from "react";
import style from "./galeria.module.css";
import Image from "next/image";
import pry from "../images/proyect.png"

function Galeria(){
    return(
        <div className={style.galeria}>
            <Image className={style.mimage} src={pry}/>
        </div>
    );
}

export default Galeria;