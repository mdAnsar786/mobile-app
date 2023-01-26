import React from "react";
import "./Login.css";
import Photo from "../../Assets/vector-smiling.png";

const Login = () => {
  return (
    <div>
      <div className="bigContainer">
        <div className="firstContainer">
          <img src={Photo} alt="" />
        </div>
        <div className="SecContainer">
        <h1 className="frontLogin">Login</h1>
          <form className="from">
          <div className="inputContainer">
              <label  className="labelText"> Email Id </label>
              <input type="email" className="InputBox" />
            </div>
            <div className="inputContainer">
              <label  className="labelText">
                Password
              </label>
              <input type="Password" className="InputBox" />
            </div>
            <div className="check">
              <input type="checkbox" value="lsRememberMe" id="rememberMe" />{" "}
              <label >Remember me</label>
            </div>
            <div className="loginContain">
              <button type="submit" className="LoginButton">
                Login
              </button>
            </div>
          </form>
          <div className="from2">
            <div className="part">
              <p> I forgot My password</p>
              <p>Create New Account</p>
            </div>

            <div className="border-text">
              <h4 style={{width:"360px"}}>
                <span>Or Login With</span>
              </h4>
            </div>
            <div className="iconDiv">
              <div className="Icon-box">
                <span style={{ fontSize: "25px" }}>
                  <i className="fa fa-google"></i>
                </span>
              </div>
              <div className="Icon-box">
                {" "}
                <span style={{ fontSize: "25px" }}>
                  <i className="fa fa-facebook"></i>
                </span>
              </div>
              <div className="Icon-box">
                {" "}
                <span style={{ fontSize: "25px" }}>
                  <i className="fa fa-linkedin"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
