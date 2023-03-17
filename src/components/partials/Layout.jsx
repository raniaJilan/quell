import styled from "styled-components";
import React from "react";

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
                    <li><a href="/register"  className="regis">Daftar</a></li>
                    
                    <li><a href="/login" className="log">Masuk</a></li>
                </ul>
            </div>
        </section>
    )
}
export default Layout;
