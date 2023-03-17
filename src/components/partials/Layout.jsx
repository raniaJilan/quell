import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
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
                    
                    <li><Link to="/register" className="regis">Daftar</Link></li>
                    {/* <a href="/register"  className="regis">Daftar</a> */}
                    
                    <li><Link to="/login" className="log">Masuk</Link></li>
                </ul>
            </div>
        </section>
    )
}
export default Layout;
