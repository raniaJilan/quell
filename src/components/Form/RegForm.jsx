import React from "react";
import "./regisForm.css"

const RegForm = ()=>{
    return(
    <div className="formReg">
                <div className="titleReg">Daftar</div>
                <form action="#"> 
                    <div className="userDetailReg">
                        <div className="inputBoxReg">
                            <span className="detailReg">Nama</span>
                            <input type="text" placeholder="Masukkan Nama" required></input>
                        </div>
                        <div className="inputBoxReg">
                            <span className="detailReg">Nomor Telepon</span>
                            <input type="text" placeholder="Masukkan Nomor Telepon" required></input>
                        </div>
                        <div className="inputBoxReg">
                            <span className="detailReg">Email</span>
                            <input type="text" placeholder="Masukkan Email" required></input>
                        </div>
                        <div className="inputBoxReg">
                            <span className="detailReg">Password</span>
                            <input type="password" placeholder="Masukkan Kata Sandi" required></input>
                        </div>
                        <div className="SQ">
                            <input type="checkbox" id="check"></input>
                            <label for="check">Saya setuju dengan</label>
                            <a href="#"> syarat dan ketentuan</a>
                            
                        </div>
                        <div className="buttonLogReg">
                            <div className="re">
                                <a href="/verifikasi">Daftar</a>
                            </div>
                        </div>
                        <div className="gotologin">
                            <center><p>Sudah Punya Akun?<a href="/login"> Masuk Akun</a></p></center>
                        </div>
                    </div>
                </form>
            </div>
    )        
}
export default RegForm;