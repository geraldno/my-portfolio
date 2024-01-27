import React from "react";
import style from "./data.module.css";

function Data(){
    return(
        <div className={style.datos}>
        <section className={style["datos-cont"]}>
        <p>1 <br></br> Semester <br></br> of experience</p>
        <p>1 <br></br> Project <br></br> Completed</p>
        <p>No satisfied <br></br>customers <br></br> at the moment</p>
        </section>
        </div>
    );
}

export default Data;