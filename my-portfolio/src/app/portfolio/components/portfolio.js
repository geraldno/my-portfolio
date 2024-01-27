import React from "react";
import style from "./portfolio.module.css";

function Portfolio(){
    return(
        <div className={style.ficha}>
            <button class={style.port}>Portfolio</button>
            <button class={style.skills}>Skills</button>
        </div>
    );
}

export default Portfolio;