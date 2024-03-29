import TopBar from "./components/Home/TopBar";
import React from "react";
import "./App.css";
import {Route, Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Verifikasi from "./pages/verifikasi";
import MainDash from "./components/Dashboard/MainDash";
import Tugas from "./components/tugasQu/Tugas";
import JadwalQu from "./components/jadwal/JadwalQu";
import UangQu from "./components/keuangan/UangQu";
// import "antd/dist/antd.css";
// import {DatePicker} from 'antd';

export default function App(){
    return(
        <div className="wholePage">
        {/*  */}
        <Routes>
            <Route path="/" element={<TopBar/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* <Route path='/verifikasi' element={<Verifikasi />} /> */}
            <Route path="/mainDash" element={<MainDash/>}/>
            <Route path="/tugasqu" element={<Tugas/>}/>
            <Route path="/jadwalqu" element={<JadwalQu/>}/>
            <Route path="/uangqu" element={<UangQu/>}/>
        </Routes>
        </div>
    );
}