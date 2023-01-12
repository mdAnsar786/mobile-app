import React from "react";
import "./About.css";
import image from "../../Assest/vector-smiling.png";

const About = () => {

  return (
    <div>
      <div className="bigContainer">
        <div className="firstContainer">
         <img src={image} className="div1"/>
        </div>
        <div className="SecContainer">
          <form className="from">
            <h1 className="frontLogin">Login</h1>
            <div className="inputContainer">
              <label for="Email" className="labelText">
               Email Id
              </label>
              <input type="email" className="InputBox" />
            </div>
            <div className="inputContainer">
              <label for="Password" className="labelText">
                Password
              </label><input type="Password" className="InputBox"/>
            </div>
            <div className="check">
        
          <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label for="rememberMe">Remember me</label>
            </div>
            <div style={{ width:"400px"}}>
            <button type="submit" className="LoginButton">Login</button>
            </div>
            
          </form>
<div  className="from2">
<div className="part">
            <p> I forgot My password</p>
            <p>Create New Account</p>
          </div>
   
<div style={{width:"380px",marginLift:"10px"}}>
<h4>
<span>Or Login With</span>
</h4>
</div>
          <div className="iconDiv">
     <div className="Icon-box"><span style={{fontSize:"25px"}}><i class="fa fa-google"></i></span></div>
     <div className="Icon-box"> <span style={{fontSize:"25px"}}><i class="fa fa-facebook"></i></span></div>
    <div className="Icon-box"> <span style={{fontSize:"25px"}}><i class="fa fa-linkedin"></i></span></div>
          </div>
</div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
