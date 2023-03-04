import React from "react";
import "./login.css"
import LoginForm from "../components/Form/LoginForm";
import Vector1 from "../assets/Vector1.svg"
import Vector2 from "../assets/Vector2.svg"
import Vector3 from "../assets/Vector3.svg"
import Logo1 from "../assets/Logo1.svg"

const Login = ()=>{
    return(
        <section className="pageLog">
            <div className="logoLog">
                    <img src={Logo1}></img>
                </div>
            <LoginForm/>
            <div className="picLogin">
                
                {/* <div className="pic1">
                    <img src={Vector1}></img>
                </div> */}
                <div className="pic2">
                    <img src={Vector2}></img>
                </div>
                <div className="pic3">
                    <img src={Vector3}></img>
                </div>
            </div>
        </section>
    )
}
export default Login;