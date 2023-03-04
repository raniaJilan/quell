// import register from "../components/Form/Register";

import React from "react";
import "./register.css";
import RegForm from "../components/Form/RegForm";
import Logo1 from "../assets/Logo1.svg";
import picReg from "../assets/picReg.svg"
import Vector1R from "../assets/Vector1R.svg"
import Vector2R from "../assets/Vector2R.svg"

const Register = ()=>{
    return(
        <section className="pageReg">
            <RegForm/>
           <div className="wholeReg">
            <div className="logoReg">
                <img src={Logo1}></img>
            </div>
            <div className="picReg">
                <div className="ill1">
                    <img src={picReg}></img>
                </div>
                <div className="ill2">
                    <img src={Vector1R}></img>
                </div>
                <div className="ill3">
                    <img src={Vector2R}></img>
                </div>
            </div>
           </div>
        </section>
    )
}
export default Register;