import React from "react";
import "./loginForm.css"
import { Link } from "react-router-dom";

const LoginForm =()=>{
    return (
        <div className="formLog">
                <div className="titleLog">Masuk</div>
                <form action="#">
                    <div className="userDetail">
                        <div className="inputBox">
                            <span className="detail">Email</span>
                            <input type="text" placeholder="Masukkan Email" required></input>
                        </div>
                        <div className="inputBox">
                            <span className="detail">Password</span>
                            <input type="password" placeholder="Masukkan Password" required></input>
                        </div>
                        <div className="forget">
                            <input type="checkbox" id="check"></input>
                            <label for="check">Ingat Saya</label>
                            <a href="#">Lupa kata sandi?</a>
                            {/* <p className="deks">Lupa kata sandi?</p> */}
                        </div>
                        
                        <div className="buttonLog">
                            {/* <div className="lo">
                                <a href="a">Daftar</a>
                            </div> */}
                            <div className="gin">
                                <Link to="/mainDash">Masuk</Link>
                            </div>
                        </div>
                        <div className="gotosign">
                            <center><p>Belum Punya Akun?<a href="/register"> Daftar Akun</a></p></center>
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default LoginForm;