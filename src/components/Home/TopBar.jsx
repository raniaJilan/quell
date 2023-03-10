import styled from "styled-components";
import React from "react";
import "./TopBar.css"
import Layout from "../partials/Layout";
// assets
import Group from '../../assets/Group.svg';
import Logo1 from '../../assets/Logo1.svg';
import pic4 from '../../assets/pic4.svg';
import person from '../../assets/person.svg'

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
                    Manajemen waktu dan keuangan lebih mudah dan praktis
                    </h1>
                    <p className="subtitle">
                    Layanan yang menyediakan bantuan dalam manajemen waktu dan keuangan Anda agar dapat meningkatkan produktivitas Anda secara maksimal dalam 
                    aktivitas seharinya
                    </p>
                    
                    <button className="btn">
                        <a href="a">Gabung Sekarang!</a>
                    </button>
                    
                </div>
                <div className="desk">
                    <div className="secDesk">
                        <div className="picDesk">
                        <img src={Logo1}></img>
                        </div>
                        
                        <div className="titleDesk">
                            <h1 className="apa">Apa itu Quell?</h1>
                        </div>
                        <div className="teksDesk">
                            <p className="ket">Quell sendiri merupakan website yang memberikan layanan bantuan kepada mahasiswa untuk mengelola jadwal kegiatan, tugas kuliah ,dan keuangan dalam satu aplikasi. Quell memiliki keunikan dimana menggabungkan tiga hal utama bagi mahasiswa berupa tugas, waktu dan uang menjadi satu tempat sehingga pengaksesan mudah untuk mahasiswa dimana saja dan kapan saja. </p>
                        </div>
                    </div>
                </div>
                {/* <div className="three">
                    <div className="first">
                        <h1 className="kalFirst">Tersedia 4 fitur yang siap melayani Anda</h1>
                    </div>
                    <div className="sec">
                        <p className="kafSec">Fitur-fitur yang disediakan memiliki keunikan yang siap melayani mahasiswa dengan tujuan untuk meningkatkan produktivitas dan ketepatan waktu untuk mahasiswa</p>
                    </div>
                    <section id="feature" className="section-p1">
                        <div className="box1">
                            <h6 className="name">TugasQu</h6>
                            <p className="id">lorem ipsum</p>
                        </div>
                        <div className="box1">
                            <h6 className="name">JadwalQu</h6>
                            <p className="id">lorem ipsum</p>
                        </div>
                        <div className="box1">
                            <h6 className="name">KeuanganQu</h6>
                            <p className="id">lorem ipsum</p>
                        </div>
                    </section>
                </div> */}
                <div className="four">
                    <div className="first">
                        <center><h1>Tersedia 4 fitur yang siap melayani Anda</h1></center>
                    </div>
                    <div className="sec">
                        <p>Fitur-fitur yang disediakan memiliki keunikan yang siap melayani mahasiswa dengan tujuan untuk meningkatkan produktivitas dan ketepatan waktu untuk mahasiswa</p>
                    </div>
                    <section id="feature" className="section-p1">
                        <div className="box1">
                            <h6 className="name">TugasQu</h6>
                            <p className="id">lorem ipsum</p>
                        </div>
                        <div className="box1">
                            <h6 className="name">JadwalQu</h6>
                            <p className="id">lorem ipsum</p>
                        </div>
                        <div className="box1">
                            <h6 className="name">KeuanganQu</h6>
                            <p className="id">lorem ipsum</p>
                        </div>
                    </section>
                </div>
                <div className="frmae4">
                    <div className="tibar">
                        <div className="t4">
                            <center><h1>Kenapa Harus Quell ?</h1></center>
                        </div>
                        <div className="pic4">
                            <img src={pic4}/>
                        </div>
                        <div className="textBox">
                            
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
                    <div className="addres">
                        <h2 className="office">Quell Office</h2>
                        <p className="subOffice">Jl. Ring Road Utara No.17, RW.2, Candok, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283</p>
                    </div>
                    <div className="footRight">
                        <h1>Contact Us</h1>
                        <p>Telepon : 08177836298639 Email : quell@co.id</p>
                        <h1>Ikuti Kami</h1>
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