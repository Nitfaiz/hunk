import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { createBrowserHistory } from "history";

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            register: ""
        }
        this.handleusernameA = this.handleusernameA.bind(this)
        this.handleusernameB = this.handleusernameB.bind(this)

        this.handleusernameC = this.handleusernameC.bind(this)
        this.handleusernameD = this.handleusernameD.bind(this)
        this.history = createBrowserHistory();
    }
    handleusernameA(e) {
        this.setState({
            firstname: e.target.value,
        })
        console.log(this.state.firstname)
    }
    handleusernameB(e) {
        this.setState({
            lastname: e.target.value
        })
        console.log(this.state.lastname)
    }
    handleusernameC(e) {
        this.setState({
            email: e.target.value
        })
        console.log(this.state.email)
    }
    handleusernameD(e) {
        this.setState({
            password: e.target.value
        })
        console.log(this.state.lastname)
    }
    resetform = () => {
        this.setState({
            email: "",
            password: "",
            firstname: "",
            lastname: ""
        });
    }
    // calling api using fetch method of javascript
    addUser = async (formData) => {
        await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(() => {
            this.resetform()
            this.setState({
                register: "Registered Successfully"
            })
            alert("Registered successfully.")
        }).catch((e) => {
            alert("something went wrong.")
        })
    }
    handlesubmit = (e) => {
        e.preventDefault();
        const { email, password, firstname, lastname } = this.state;
        const formData = {
            email, password, firstname, lastname
        }
        this.addUser(formData);
    }
    render() {
        return (
            <div className='secondpage'>
                {!this.state.register ? <div className='form-container4'>
                    <h1 className='heading'>Registration Form</h1>
                    <form className='registor-form' onSubmit={this.handlesubmit}>
                        <label>Firstname:</label>
                        <input type="text" placeholder='Enter Your First Name' value={this.state.firstname} onChange={this.handleusernameA} required className="form-field form-field-signup" />

                        <label>Lastname:</label>
                        <input type="text" placeholder='Enter Your Last Name' value={this.state.lastname} onChange={this.handleusernameB} required className="form-field form-field-signup" />

                        <label> Email-id:</label>
                        <input type="email" placeholder='Enter Your Email' value={this.state.email} onChange={this.handleusernameC} required className="form-field form-field-signup" />

                        <label> Password:</label>
                        <input type="password" placeholder='Enter Your Password' value={this.state.password} onChange={this.handleusernameD} required className="form-field form-field-signup" />

                        <br></br>
                        <br></br>

                        <button className='signupbutton'>Submit</button>
                        <div className='sign-up'>
                            <Link to="/login" className='sign_up_link'>Login</Link>
                        </div>
                    </form>

                </div > :
                    <Navigate to="/login" />
                }
            </div>
        )
    }
}

export default Signup;