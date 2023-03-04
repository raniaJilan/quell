import styled from "styled-components";
import React from "react";
;
import "./layout.css";
import Logo1 from "../../assets/Logo1.svg"; 

const Layout = ()=>{
    return (
        <section className="navSection">
            <div className="header">
                <div className="logo">
                    <img src={Logo1}></img>
                </div>
                <ul className="listBut">
                <div className="headerBtn">
                    <button className="regis">
                        <input type="submit" value="Daftar"></input>
                    </button>
                    <button className="login">
                        <input type="submit" value="Masuk"></input>
                    </button>
                </div>
                </ul>
            </div>
        </section>
    )
}
export default Layout;
