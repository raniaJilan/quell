import React from "react";
import './uang.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import Logo1 from '../../assets/Logo1.svg';
import dash from '../../assets/dash.svg';
import tgs from '../../assets/dashboard/tgs.svg';
import jdwl from '../../assets/dashboard/jdwl.svg';
import uang from '../../assets/dashboard/uang.svg';
import uang1 from '../../assets/dashboard/uang1.svg';
import uang2 from '../../assets/dashboard/uang2.svg';
import uang3 from '../../assets/dashboard/uang3.svg';

const UangQu =()=>{
    return(
        <section className="uangSection">
            <div className="optionDash3">
            <div className="logoDash3">
                <img src={Logo1}></img>
            </div>
            <div className="sideBar3">
                <ul>
                    <li>
                        <a href="/mainDash" className="dash3">
                        <img src={dash}></img>
                        <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/tugasqu" className="tugas3">
                        <img src={tgs}></img>
                        <span>TugasQu</span>
                        </a>
                    </li>
                    <li>
                        <a href="/jadwalqu" className="jadwal3">
                        <img src={jdwl}></img>
                        <span>JadwalQu</span>
                        </a>
                    </li>
                    <li>
                        <a href="/uangqu" className="keuangan3">
                        <img src={uang}></img>
                        <span>KeuanganQu</span>
                        </a>
                    </li>
                </ul>
            </div>
            </div> 
           <div className="navDash3">
                <div className="menu3">
                    <i class='bx bx-menu'></i>
                </div>
                <button className="btnDash3">
                    <a href="a">Try Premium</a>
                </button>
           </div>
           <div className="titleDash3">
            <h1>KeuanganQu</h1> 
           </div>

           <div className="boxy1">
           <section id="opBox1" className="boxDash14">
            
                <div className="boxDash11">
                    <div className="rec13"><img src={uang1}></img></div>
                    <p className="boxid1">Sisa Uang kamu Bulan Ini</p>
                    <h6 className="boxname1">-</h6>
                </div>
                <div className="boxDash112">
                    <div className="rec13"><img src={uang2}></img></div>
                    <p className="boxid1">Pemasukan bulan Ini</p>
                    <h6 className="boxname1">-</h6>
                </div>
                <div className="boxDash113">
                    <div className="rec13"><img src={uang3}></img></div>
                    <p className="boxid1">Pengeluaran Bulan Ini</p>
                    <h6 className="boxname1">Rp -</h6>
                </div>
            
           </section>
           </div>
           <div className="contTop23">
                <h1>Filter</h1>
                <div className="datepick23">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                </LocalizationProvider>
                </div>
                <div className="search23"><input type="text" placeholder="Cari" required></input></div>
                <div className="buttcon23">
                    <Button variant="contained">Terapkan</Button>
                </div>
            </div>
            <div className="uangDash2">
                <div className="fillcont23">
                    <h1 className="teksCont23"> Riwayat Pengeluaran</h1>
                    <div className="butCon23">
                        <Button variant="contained">Tambah Jadwal +</Button>
                    </div>
                    <div className="tabelDaftar23">
                        <h1>Tanggal <span>Nama</span><span> Nominal</span>
                        <span>Deskripsi</span> <span>Kategori</span> <span>Attachment</span><span> Action</span></h1>
                        <div className="contable23"></div>
                    </div>
                </div>
                <div className="fillcont223">
                    <h1 className="teksCont23">Riwayat Pemasukan</h1>
                    <div className="tabelDaftar23">
                    <h1>Tanggal <span>Nama</span><span> Nominal</span>
                        <span>Deskripsi</span> <span>Kategori</span> <span>Attachment</span><span> Action</span></h1>
                        <div className="contable23"></div>
                    </div>
                </div>
           </div>
        </section>
    );
}
export default UangQu;