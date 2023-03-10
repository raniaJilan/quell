import React from "react";
import './mainDash.css'

const mainDash = ()=>{
    return (
        <section className="dashSection">
            <div className="optionDash"></div>
           <div className="navDash">
                <button className="btnDash">
                    <a href="a">Try Premium</a>
                </button>
           </div>
           <div className="titleDash">
            <h1>Dashboard</h1>
           </div>
           <div className="boxDash">
                <div className="boxDash1">
                    <p className="id">Total Jadwal hari Ini</p>
                    <h6 className="name">10</h6>
                </div>
                {/* <div className="boxDash2">
                    <p className="id">Total Sisa Tugas Hari Ini</p>
                    <h6 className="name">10</h6>
                </div>
                <div className="boxDash3">
                    <p className="id">Total Pengeluaran Hari Ini</p>
                    <h6 className="name">Rp 10.000</h6>
                </div> */}
           </div>
           <div className="calenderDash"></div>
           <div className="contentDash"></div>
        </section>
    )
}
export default mainDash;
