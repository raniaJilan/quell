import React from "react";
import './mainDash.css'
import { Link } from "react-router-dom";
import Logo1 from '../../assets/Logo1.svg';
import dash from '../../assets/dash.svg';
import tgs from '../../assets/dashboard/tgs.svg';
import jdwl from '../../assets/dashboard/jdwl.svg';
import uang from '../../assets/dashboard/uang.svg';
import iconbox1 from '../../assets/dashboard/iconbox1.svg';
import iconbox2 from '../../assets/dashboard/iconbox2.svg';
import iconbox3 from '../../assets/dashboard/iconbox3.svg';
// import { Card } from "antd";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Button from '@mui/material/Button';

const mainDash = ()=>{
    return (
        <section className="dashSection">
            <div className="optionDash">
            <div className="logoDash">
                <img src={Logo1}></img>
            </div>
            <div className="sideBar">
                <ul>
                    <li>
                    <Link to="/mainDash">
                        <img src={dash}></img>
                        <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tugasqu">
                        <img src={tgs}></img>
                        <span>TugasQu</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/jadwalqu">
                        <img src={jdwl}></img>
                        <span>JadwalQu</span>
                        </Link> 
                    </li>
                    <li>
                        <Link to="/uangqu">
                        <img src={uang}></img>
                        <span>KeuanganQu</span>
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
           <div className="navDash">
                <div className="menu">
                    <i class='bx bx-menu'></i>
                </div>
                <button className="btnDash">
                    <a href="a">Try Premium</a>
                </button>
           </div>
           <div className="titleDash">
            <h1>Dashboard</h1> 
           </div>
           <div className="boxy"> 
           <section id="opBox" className="boxDash">
            
                <div className="boxDash1">
                    <div className="rec"><img src={iconbox1}></img></div>
                    <p className="boxid">Total Jadwal hari Ini</p>
                    <h6 className="boxname">10</h6>
                </div>
                <div className="boxDash2">
                    <div className="rec"><img src={iconbox2}></img></div>
                    <p className="boxid">Total Sisa Tugas Hari Ini</p>
                    <h6 className="boxname">10</h6>
                </div>
                <div className="boxDash3">
                    <div className="rec"><img src={iconbox3}></img></div>
                    <p className="boxid">Total Pengeluaran Hari Ini</p>
                    <h6 className="boxname">Rp 10.000</h6>
                </div>
            
           </section>
           </div>
           <div className="calenderDash">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                </LocalizationProvider>
                <div className="borBut"></div>
                <div className="butOut">
                    <Button variant="outlined">Cek Jadwal Kosong</Button>
                </div>
                <div className="butCon">
                    <Button variant="contained">Tambah Jadwal +</Button>
                </div>
           </div>
           <div className="contentDash">
                <div className="fillcont">
                    <h1 className="teksCont"> Daftar Tugas</h1>
                    <div className="butCon">
                        <Button variant="contained">Tambah Tugas +</Button>
                    </div>
                    <div className="tabelDaftar">
                        <h1>Deadline <span>Nama Tugas</span><span> Kategori</span><span>Action</span></h1>
                        <div className="contable"></div>
                    </div>
                </div>
                <div className="fillcont2">
                    <h1 className="teksCont">Selesai</h1>
                    <div className="tabelDaftar">
                        <h1>Deadline <span>Nama Tugas</span><span> Kategori</span><span>Action</span></h1>
                        <div className="contable"></div>
                    </div>
                </div>
                <div className="fillcont3">
                    <h1 className="teksCont">Terlewatkan</h1>
                    <div className="tabelDaftar">
                        <h1>Deadline <span>Nama Tugas</span><span> Kategori</span><span>Action</span></h1>
                        <div className="contable"></div>
                    </div>
                </div>
                
           </div>
           <div className="footTgs1">
            <p>Copyright © 2023 • Developed By <span>Quell | Kelompok 10 BCC</span></p>
           </div>
        </section>
    )
}
export default mainDash;
