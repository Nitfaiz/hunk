import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      login: ""
    };
    this.handleusernameC = this.handleusernameC.bind(this);
    this.handleusernameB = this.handleusernameB.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handleusernameC(e) {
    const em = e.target.value;
    this.setState({
      email: e.target.value,
    });
    console.log(this.state.email);
  }
  handleusernameB(e) {
    this.setState({
      password: e.target.value,
    });
    console.log(this.state.password);
  }
  signin = async (formData) => {
    await fetch(
      `http://localhost:3000/users?email=${formData.email}&password=${formData.password}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.length) {
          this.setState({
            login: "success",
          
          })
          alert("Loged in Succesfully")
        } else {
          alert("invalid user credentials.");
        }
      })
      .catch((e) => {
        alert("invalid user credentials.");
      });
  };
  handlesubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const formData = {
      email,
      password,
    };
    this.signin(formData);
    // if (email == "admin@gmail.com" && password == "admin@123") {
    //   alert("Thanks! Your form Submitted successfully ");
    //   return;//break
    // }
    // alert("Invalid credentials");
  }
  render() {
    return (
      <div className="firstpage">
        {!this.state.login ? <div className="form-container">
          <h1 className="heading">Login</h1>
          <form className="registor-form" onSubmit={this.handlesubmit}>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={this.state.email}
              onChange={this.handleusernameC}
              className="form-field"
            />

            <input
              type="password"
              placeholder="Enter Your Password"
              value={this.state.password}
              onChange={this.handleusernameB}
              required
              className="form-field"
            />
            <br></br>
            <br></br>

            <button>Sign in</button>
            <div className="sign-up">
              <span className="first">
                Not a member? <Link to="/register" className="sign_up_link">Sign up</Link>
              </span>
              {/* <Link to="/Dashboard">Dashboards</Link> */}
            </div>
          </form>
        </div>: <Navigate to="/dashboard" />}
      </div>
    );
  }
}
// const LoginPageWithRouter = withRouter(Forms)
export default Forms;