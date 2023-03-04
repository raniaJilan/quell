import React from "react";
import "./loginForm.css"

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
                            <input type="text" placeholder="Masukkan Password" required></input>
                        </div>
                        <p className="deks">Lupa kata sandi?</p>
                        <div className="buttonLog">
                            <div className="lo">
                                <a href="a">Daftar</a>
                            </div>
                            <div className="gin">
                                <a href="a">Masuk</a>
                            </div>
                            
                            
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default LoginForm;