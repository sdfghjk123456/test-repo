// import { clear } from '@testing-library/user-event/dist/clear'
import './signup.css'
import React, { Component } from "react"
// import {useRef } from "react";
import { Link } from "react-router-dom"


export default class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: ""
        }
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    handlesubmit(e) {
        e.preventDefault()
        const { fname, lname, email, password } = this.state;
        console.log(fname, lname, email, password);
        fetch("http://localhost:5000/signup", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fname,
                lname,
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                // alert("user exits");
                alert("registration done successfully!")
                this.setState({
                    fname: '',
                    lname: '',
                    email: '',
                    password: ''
                });
            });
    }
    render() {
        return (
            <div>

                <div className="registration-form-container">
                   
                    <div className="signup">

                        <Link to="/home"><button className='by'>Documents</button></Link>
                        <h2 className='me'>SIGNUP</h2>
                        <form onSubmit={this.handlesubmit}>
                            <input
                                type="text"
                                name="fname"
                                placeholder="firstName"
                                onChange={(e) => this.setState({ fname: e.target.value })} required
                            />
                            <input
                                type="text"
                                name="lname"
                                placeholder="LastName"
                                onChange={(e) => this.setState({ lname: e.target.value })} required
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => this.setState({ email: e.target.value })} required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => this.setState({ password: e.target.value })} required
                            />
                            <button type="submit" className='me3'>Register</button>
                        </form>
                        <h4 className='me2'>Already have an account?</h4>
                        <Link to="/login" className="btn btn-success me1">Login</Link>

                    </div>
                </div>
            </div>
        )
    }
}
