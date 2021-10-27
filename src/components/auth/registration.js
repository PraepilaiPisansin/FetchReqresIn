import React, { useState } from "react";
import axios from "axios";

function RegUser({ setToken }) {
    const [data, regUser] = useState({
        email: "",
        password: ""
    });
    const {email, password } = data;
    const onInputChange = e => {
        regUser({ ...data, [e.target.name]: e.target.value });
    };
    if (setToken == null)
        return 
        <main class="main">
        <div class="registerd-login">
            <h1>Already Logged In</h1>
            <hr />
            <button class="btn-regis"><a href="/">Return to the Home page</a></button>
        </div>
        </main>
    const onSubmit = async e => {
        e.preventDefault();
        try {
            console.log(data);
            const token = await axios.post("https://reqres.in/api/register", data);
            setToken(token.data.token);
        }
        catch (e) {
            alert(e.message);
        }
    };


    return (
        <div class="row justify-content-center bg-login">
            <div class="col-8 mt-5 mb-5 bg-white" style={{padding:'0'}} >
            <div class="row " >
                                    <div class= "col-6" style={{padding:'0'}}>

                        <img src={'https://sv1.picz.in.th/images/2021/10/26/uE8jtn.jpg'} 
                    width='100%' height='600vh'/>
                </div>

                                <div class=" col-6" style={{padding:'4vh 8vh 4vh 8vh'}}>

                    <p class="txt-head text-right">Already have an account? <button class="btn-regis">
                        <a href="/users/login">Sign in</a>
                    </button></p>
                    <br/>
                <h2 className="text-left">Registration</h2>
                        <h6 class="sub-topic mb-4">Register your account</h6>
                    <form onSubmit={e => onSubmit(e)}>

                        
                        <div class="form-group mb-4">
                            <label>Email</label>
                            <input
                                type="email"
                                class="form-control"
                                placeholder="focus001@gmail.com"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter Password"
                                name="password"
                                value={password}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <button className="btn-login mb-1" >Register</button>
                    </form>
                    <br/>
                        <p class="txt-foot">Create account with
                            <button><i class="text-primary bi bi-facebook"></i></button>
                            <button><i class="text-danger bi bi-google"></i></button>
                            <button><i class="text-primary bi bi-twitter"></i></button>
                        </p>
                </div>
                </div>
            </div>
        </div>
    );

};
export default RegUser;