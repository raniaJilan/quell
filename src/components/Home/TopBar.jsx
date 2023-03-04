import styled from "styled-components";
import React from "react";
import "./TopBar.css"
import Layout from "../partials/Layout";
// assets
import Group from '../../assets/Group.svg';
import Logo1 from '../../assets/Logo1.svg';

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
                <div className="three">
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
                </div>
                <div className="four">
                    <div className="tibar">
                        <div className="t4">
                            <h1>Kenapa Harus Quell ?</h1>
                        </div>
                    </div>
                    <div className="textBox">
                        
                    </div>
                </div>
                <div className="frame5">
                    <div className="title5">
                        <h2 className="teks5">Pendapat Mereka Tentang Quell</h2>
                    </div>
                </div>
                <div className="footer">
                    <div className="addres">
                        <h2 className="office">Quell Office</h2>
                        <p className="subOffice">Jl. Ring Road Utara No.17, RW.2, Candok, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283</p>
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