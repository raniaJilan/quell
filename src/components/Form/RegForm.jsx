import React from "react";
import "./regisForm.css"

const RegForm = ()=>{
    <div className="formReg">
                <div className="titleReg">Masuk</div>
                <form action="#">
                    <div className="userDetailReg">
                        <div className="inputBoxReg">
                            <span className="detailReg">Nama</span>
                            <input type="text" placeholder="Masukkan Nama" required></input>
                        </div>
                        <div className="inputBoxReg">
                            <span className="detailReg">Email</span>
                            <input type="text" placeholder="Masukkan Email" required></input>
                        </div>
                        <div className="inputBoxReg">
                            <span className="detailReg">Password</span>
                            <input type="text" placeholder="Masukkan Password" required></input>
                        </div>
                        <div className="buttonLogReg">
                            <div className="re">
                                <a href="a">Daftar</a>
                            </div>
                            <div className="gis">
                                <a href="a">Masuk</a>
                            </div>
                            
                            
                        </div>
                    </div>
                </form>
            </div>
}
export default RegForm;