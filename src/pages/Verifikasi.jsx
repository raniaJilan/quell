import React from "react";
import "./verifikasi.css"
import Vec3 from "../assets/Vec3.svg"
import Logo1 from "../assets/Logo1.svg"
import Vector2 from "../assets/Vector2.svg"
import Vector2R from "../assets/Vector2R.svg"

const Verifikasi = ()=>{
    return(
        <section className="verifPage">
            <div className="verifLogo">
                <img src={Logo1}></img>
            </div>
            <div className="verifText">
                <h1 className="verifTitle">Verifikasi Email Anda</h1>
                <p className="verifDes">Lakukan verifikasi email dengan link yang kami kirim ke Email Anda</p>
            </div>
            <div className="verifPic">
                <div className="vp1">
                    <img src={Vec3}></img>
                </div>
                <div className="vp2">
                    <img src={Vector2}></img>
                </div>
                <div className="vp3">
                    <img src={Vector2R}></img>
                </div>
            </div>
        </section>
    )
}
export default Verifikasi;