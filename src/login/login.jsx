import './login.css';
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import image from "../images/fd.jpeg";


function Login() {

    var propertyEmailRef = useRef();
    var propertyPasswordRef = useRef();

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(email, password);

        if (email === 'lakkuntlanaveen03@gmail.com' && password === '12345678') {

            console.log('Credentials are valid. Navigating...');
            alert("Login success");
            navigate('/home');
        } else {

            alert('Invalid email or password. Please try again.');
            ClearData();
        }
        // fetch("http://localhost:5000/login", {
        // method: "POST",
        // crossDomain: true,
        // headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //     "Access-Control-Allow-Origin": "*",
        // },
        // body: JSON.stringify({

        //     email,
        //     password,
        // }),
        // })
        // .then((res) => res.json())
        // .then((data) => {


        // });
    }
    function ClearData() {
        propertyEmailRef.current.value = "";
        propertyPasswordRef.current.value = "";

    }
    return (
        <div>
            {/* <h1 className='L1'>DIAL DUBAI</h1> */}
            <img src={image} className='im' width='200' />
            <div className="login-page">

                <div className="login-form">
                    <h2 className='L2'>LOGIN</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Email" ref={propertyEmailRef} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" ref={propertyPasswordRef} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" >Login</button>
                        <h5 className='f1'>New to this site please signup?</h5>
                        <Link to="/signup"><button className="btn btn-success f2">Signup</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )

};
export default Login;





