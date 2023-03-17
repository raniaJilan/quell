import React from "react";
import './tugas.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import Logo1 from '../../assets/Logo1.svg';
import dash from '../../assets/dash.svg';
import tgs from '../../assets/dashboard/tgs.svg';
import jdwl from '../../assets/dashboard/jdwl.svg';
import uang from '../../assets/dashboard/uang.svg';

const Tugas =()=>{
    return(
        <section className="tugasSection">
            <div className="optionDash1">
            <div className="logoDash1">
                <img src={Logo1}></img>
            </div>
            <div className="sideBar1">
                <ul>
                    <li>
                        <a href="/mainDash" className="dash1">
                        <img src={dash}></img>
                        <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/tugasqu" className="tugas1">
                        <img src={tgs}></img>
                        <span>TugasQu</span>
                        </a>
                    </li>
                    <li>
                        <a href="/jadwalqu" className="jadwal1">
                        <img src={jdwl}></img>
                        <span>JadwalQu</span>
                        </a>
                    </li>
                    <li>
                        <a href="/uangqu" className="keuangan1">
                        <img src={uang}></img>
                        <span>KeuanganQu</span>
                        </a>
                    </li>
                </ul>
            </div>
            </div>
           <div className="navDash1">
                <div className="menu1">
                    <i class='bx bx-menu'></i>
                </div>
                <button className="btnDash1">
                    <a href="a">Try Premium</a>
                </button>
           </div>
           <div className="titleDash1">
            <h1>TugasQu</h1> 
           </div>
           <div className="tugasCont">
            <div className="contTop">
                <h1>Filter</h1>
                <div className="datepick">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                </LocalizationProvider>
                </div>
                <div className="search"><input type="text" placeholder="Cari" required></input></div>
                <div className="buttcon">
                    <Button variant="contained">Terapkan</Button>
                </div>
            </div>

            <div className="contentDash1">
                <div className="fillcont1">
                    <h1 className="teksCont1"> Daftar Tugas</h1>
                    <div className="butCon1">
                        <Button variant="contained">Tambah Tugas +</Button>
                    </div>
                    <div className="tabelDaftar1">
                        <h1>Deadline <span>Nama Tugas</span><span> Deskripsi</span>
                        <span>Kategori</span> <span>Attachment</span><span> Action</span></h1>
                        <div className="contable1"></div>
                    </div>
                </div>
                <div className="fillcont21">
                    <h1 className="teksCont1">Selesai</h1>
                    <div className="tabelDaftar1">
                        <h1>Deadline <span>Nama Tugas</span><span> Deskripsi</span>
                        <span>Kategori</span> <span>Attachment</span><span> Action</span></h1>
                        <div className="contable1"></div>
                    </div>
                </div>
                <div className="fillcont31">
                    <h1 className="teksCont1">Terlewatkan</h1>
                    <div className="tabelDaftar1">
                        <h1>Deadline <span>Nama Tugas</span><span> Deskripsi</span>
                        <span>Kategori</span> <span>Attachment</span><span> Action</span></h1>
                        <div className="contable1"></div>
                    </div>
                </div>
                
           </div>
           <div className="footTgs">
            <p>Copyright © 2023 • Developed By <span>Quell | Kelompok 10 BCC</span></p>
           </div>
           </div>
        </section>
    );
}
export default Tugas;