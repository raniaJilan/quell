import styled from "styled-components";
import React from "react";
import "./TopBar.css"
import Layout from "../partials/Layout";
import { Link } from "react-router-dom";
// assets
import Group from '../../assets/Group.svg';
import Logo1 from '../../assets/Logo1.svg';
import pic4 from '../../assets/pic4.svg';
import person from '../../assets/person.svg';
import box1 from '../../assets/box1.svg';
import box2 from '../../assets/box2.svg';
import box3 from '../../assets/box3.svg';
import petik from '../../assets/petik.svg';
import logoup from '../../assets/logoup.svg';
import ellips from '../../assets/ellips.svg';
import ellips2 from '../../assets/ellips2.svg';
import logfoot from '../../assets/logfoot.svg';
import yt from '../../assets/yt.svg';
import ig from '../../assets/ig.svg';
import fb from '../../assets/fb.svg';

const TopBar =()=>{
    return (
        <section className="TopBar">
            <div className="setContainer">
                <Layout/>
                <div className="picHome">
                        <img src={Group}></img>
                </div>
                <div className="homeText">
                    <h1 className="title">
                    Manajemen waktu dan keuangan lebih <span>mudah</span> dan <span>praktis</span>
                    </h1>
                    <p className="subtitle">
                    Layanan yang menyediakan bantuan dalam manajemen waktu dan keuangan Anda agar dapat meningkatkan produktivitas Anda secara maksimal dalam 
                    aktivitas seharinya
                    </p>
                    
                    <button className="btn">
                        <Link to="/register">Gabung Sekarang!</Link>
                    </button>
                    
                </div>
                <div className="desk">
                    <div className="secDesk">
                        <div className="picDesk">
                        <img src={logoup}></img>
                        </div>
                        <img className="elips" src={ellips}></img>
                        <img className="elips2" src={ellips2}></img>
                        <div className="titleDesk">
                            <h1 className="apa">Apa itu <span>Quell?</span></h1>
                        </div>
                        <div className="teksDesk">
                            <p className="ket">Quell sendiri merupakan website yang memberikan layanan bantuan kepada mahasiswa untuk mengelola jadwal kegiatan, tugas kuliah ,dan keuangan dalam satu aplikasi. Quell memiliki keunikan dimana menggabungkan tiga hal utama bagi mahasiswa berupa tugas, waktu dan uang menjadi satu tempat sehingga pengaksesan mudah untuk mahasiswa dimana saja dan kapan saja. </p>
                        </div>
                    </div>
                </div>
                <div className="four">
                    <div className="first">
                        <center><h1>Tersedia 4 fitur yang siap melayani Anda</h1></center>
                    </div>
                    <div className="sec">
                        <p>Fitur-fitur yang disediakan memiliki keunikan yang siap melayani mahasiswa dengan tujuan untuk meningkatkan produktivitas dan ketepatan waktu untuk mahasiswa</p>
                    </div>
                    <section id="feature" className="section-p1">
                        <div className="box1">
                            <h1 className="name">TugasQu</h1>
                            <p className="id">lorem ipsum</p>
                            <img className="picbox" src={box1}></img>
                        </div>
                        <div className="box1">
                            <h1 className="name">JadwalQu</h1>
                            <p className="id">lorem ipsum</p>
                            <img className="picbox" src={box2}></img>
                        </div>
                        <div className="box1">
                            <h1 className="name">KeuanganQu</h1>
                            <p className="id">lorem ipsum</p>
                            <img className="picbox" src={box3}></img>
                        </div>
                    </section>
                </div>
                <div className="frmae4">
                    <div className="tibar">
                        <div className="t4">
                            <center><h1>Kenapa Harus <span>Quell</span> ?</h1></center>
                        </div>
                        <div className="pic4">
                            <img src={pic4}/>
                            
                        </div>
                        <div className="create">
                            <h1>01</h1>
                            <h3>User Friendly</h3>
                            <p>Quell memberikan opsi yang mudah dalam memahami penggunaannya untuk mahasiswa </p>
                        </div>
                        <div className="create">
                            <h1>02</h1>
                            <h3>Free Access</h3>
                            <p>Quell memberikan akses yang dapat dengan mudah diakses dimana saja dan kapan saja untuk mahasiswa</p>
                        </div>
                        <div className="create">
                            <h1>03</h1>
                            <h3>Sesuai Kebutuhan</h3>
                            <p>Quell memberikan layanan sesuai kebutuhan mahasiswa dalam kehidupan perkuliahan</p>
                        </div>
                    </div>
                    
                
                </div>
                <div className="frame5">
                    <div className="title5">
                        <center><h2>Pendapat Mereka Tentang Quell</h2></center>
                    </div>
                    <div className="cardWrapper swiper">
                        <div className="slideContent">
                            <div className="imgContent">
                                <img src={person}></img>
                            </div>
                            <div className="cardSlide">
                                <img className="petik" src={petik}></img>
                                <p className="subContent">The tour is cool, good facilities.  The team is very professional.  We are satisfied with the intourlatch service.The tour is cool, good facilities.  The team is very professional.  We are satisfied with the intourlatch service.</p>
                                <h1 className="titleContent">Nama</h1>
                                <p className="catContent">Mahasiswa Sistem informasi UB 22</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-pagnation"></div>
                </div>
                <div className="footer">
                    <div className="logfoot">
                        <img src={logfoot}></img>
                        <p>Sistem Management Mahasiswa</p>
                        <div className="line"></div>
                    </div>
                    <div className="addres">
                        <h2 className="office">Quell Office</h2>
                        <p className="subOffice">Jl. Ring Road Utara No.17, RW.2, Candok, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283</p>
                    </div>
                    <div className="footRight">
                        <h1>Contact Us</h1>
                        <p>Telepon : 08177836298639 </p>
                        <p>Email : quell@co.id</p>
                        <h1>Ikuti Kami</h1>
                        <img src={yt}></img>
                        <img src={ig}></img>
                        <img src={fb}></img>
                    </div>
                </div>
                <div className="end">
                    <p className="teksEnd">@2023 Quell | Developed by Kelompok 10</p>
                </div>
            </div>
        </section>
    );
}
export default TopBar;