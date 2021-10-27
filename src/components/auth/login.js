import React, { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";

function LogUser({ setToken }) {
    const [data, logUser] = useState({
        email: "",
        password: ""
    });
    const { email, password } = data;
    const onInputChange = e => {
        logUser({ ...data, [e.target.name]: e.target.value });
    };
    if (setToken == null)
        return 
        <main class="main">
        <div class="registerd-login">
            <h1>Already Logged In</h1>
            <hr/>
            <button class="btn-regis"><a href="/home">Return to the Home page</a></button>
        </div>
        </main>
        
    const onSubmit = async e => {
        e.preventDefault();
        try {
            const token = await axios.post("https://reqres.in/api/login", data);
            setToken(token.data.token);
            console.log(setToken);
        }
        catch (e) {
            alert(e.message);
        }
    };
    return (
        <div class="row justify-content-center bg-login">
        <div class="col-9 mt-5 mb-5 bg-white" style={{padding:'0px'}} >
            <div class="row " >
                <div class= "col-6" style={{padding:'0'}}>
                        <img src={'https://sv1.picz.in.th/images/2021/10/26/uErCyt.jpg'} 
                        width='100%' height='600vh'
                        />
                </div>

                    <div class=" col-6" style={{ padding: '4vh 8vh 4vh 8vh' }}>
                    <p class="txt-head">Don't you have an account? <button class="btn-regis">
                        <a href="/users/register">Sign up</a>
                        {/*<Link
                            to={`/users/register`}
                        >
                            Sign up
                        </Link>*/}
                    </button></p>

                    <h2>Welcome</h2>
                    <h6 class="sub-topic">Login your account</h6>
                    <br/>
                    <form onSubmit={e => onSubmit(e)}>

                        <div class="form-group mb-4">
                            <label>Username</label>
                            <input
                                type="email"
                                class="form-control"
                                placeholder="Your Email"
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
                                placeholder="Your Password"
                                name="password"
                                value={password}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        
                            <p style={{ color:'#a5a3a3'}}>forgot password ?</p>
                        <button class="btn-login mb-1" >Login</button>
                    </form>
                    <br/>
                    <p class="txt-foot">Login with 
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
export default LogUser;