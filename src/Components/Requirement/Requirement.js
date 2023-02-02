import React from "react";
import Layer1 from "../../Assets/Layer 1.png";
import "./Requirement.css";

const Requirement = () => {
  return (
    <div>
      <div className="bigContainer">
        <div className="firstContainer">
          <img src={Layer1} alt="" className="img-div"/>
          <p style={{fontSize:"20px",color:"white",fontWeight:"600"}}>Client Requirement</p>
        </div>
        <div className="SecContainer">
          <h1 className="front-side">Requirement</h1>
          <div className="front-div">
          <div style={{textAlign:"left",color:"#E6E5A3",marginLeft:"35px"}}>
              Get extra trade-in credit, otherwise referred to as additional
              exchange savings or exchange bonus, when you trade in an eligible
              iPhone and purchase a new Apple device until 5 March 2023. Extra
              trade-in credit of ₹5000 is available while trading in iPhone 12,
              iPhone 11, iPhone XR or iPhone X and ₹4500 on iPhone 7.
          </div>
          <div>
            <ul className="List-item">
              <li style={{textAlign:"left"}}>Apple celebrate Black History Month</li>
              <li style={{textAlign:"left"}}>Apple Unveils Mac book pro featuring M2 pro and M2 Max</li>
              <li style={{textAlign:"left"}}>Apple introduces new mac mini with M2 and M2 pro</li>
              <li style={{textAlign:"left"}}>Apple Launches freeFrom a new apps for brainstorming</li>
            </ul>
          </div>
          <div className="Login-button">
            <button type="submit" className="LoginButton">
              Cancel
            </button>
            <button type="submit" className="LoginButton">
              Continue
            </button>
          </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Requirement;
