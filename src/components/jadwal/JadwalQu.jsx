import React from "react";
import './jadwal.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import Logo1 from '../../assets/Logo1.svg';
import dash from '../../assets/dash.svg'; 
import tgs from '../../assets/dashboard/tgs.svg';
import jdwl from '../../assets/dashboard/jdwl.svg';
import uang from '../../assets/dashboard/uang.svg';
 
const JadwalQu =()=>{
    return(
        <section className="jadwalSection">
            <div className="optionDash2">
            <div className="logoDash2">
                <img src={Logo1}></img>
            </div>
            <div className="sideBar2">
                <ul>
                    <li>
                        <a href="/mainDash" className="dash2">
                        <img src={dash}></img>
                        <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/tugasqu" className="tugas2">
                        <img src={tgs}></img>
                        <span>TugasQu</span>
                        </a>
                    </li>
                    <li>
                        <a href="/jadwalqu" className="jadwal2">
                        <img src={jdwl}></img>
                        <span>JadwalQu</span>
                        </a>
                    </li>
                    <li>
                        <a href="/uangqu" className="keuangan2">
                        <img src={uang}></img>
                        <span>KeuanganQu</span>
                        </a>
                    </li>
                </ul>
            </div>
            </div>
           <div className="navDash2">
                <div className="menu2">
                    <i class='bx bx-menu'></i>
                </div>
                <button className="btnDash2">
                    <a href="a">Try Premium</a>
                </button>
           </div>
           <div className="titleDash2">
            <h1>JadwalQu</h1> 
           </div>
           <div className="jadwalCont">
            <div className="contTop2">
                <h1>Filter</h1>
                <div className="datepick2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                </LocalizationProvider>
                </div>
                <div className="search2"><input type="text" placeholder="Cari" required></input></div>
                <div className="buttcon2">
                    <Button variant="contained">Terapkan</Button>
                </div>
            </div>

            <div className="contentDash2">
                <div className="fillcont2">
                    <h1 className="teksCont2"> Daftar Jadwal</h1>
                    <div className="butCon2">
                        <Button variant="contained">Tambah Jadwal +</Button>
                    </div> 
                    <div className="tabelDaftar2">
                        <h1>Jam <span>Nama Kegiatan</span><span> Deskripsi</span>
                        <span>Kategori</span> <span>Attachment</span><span> Action</span></h1>
                        <div className="contable2"></div>
                    </div>
                </div>
                <div className="fillcont22">
                    <h1 className="teksCont2">Selesai</h1>
                    <div className="tabelDaftar2">
                    <h1>Jam <span>Nama Kegiatan</span><span> Deskripsi</span>
                        <span>Kategori</span> <span>Attachment</span><span> Action</span></h1>
                        <div className="contable2"></div>
                    </div>
                </div>
                <div className="fillcont32">
                    <h1 className="teksCont2">Terlewatkan</h1>
                    <div className="tabelDaftar2">
                    <h1>Jam <span>Nama Kegiatan</span><span> Deskripsi</span>
                        <span>Kategori</span> <span>Attachment</span><span> Action</span></h1>
                        <div className="contable2"></div>
                    </div>
                </div>
                
           </div>
           <div className="footTgs2">
            <p>Copyright © 2023 • Developed By <span>Quell | Kelompok 10 BCC</span></p>
           </div>
           </div>
        </section>
    );
}
export default JadwalQu;