import TopBar from "./components/Home/TopBar";
import React from "react";
import "./App.css";
import {Route, Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verifikasi from "./pages/verifikasi";

export default function App(){
    return(
        <div className="wholePage">
        <Routes>
            <Route path="/" element={<TopBar/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/verifikasi' element={<Verifikasi />} />
        </Routes>
        </div>
    );
}