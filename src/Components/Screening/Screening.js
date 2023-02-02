import React from 'react';
import Layer2 from '../../Assets/Layer 1.png'
import './Screening.css';

const Screening = () => {
    return (
        <div>
            <div className="bigContainer">
            <div className="firstContainer">
          <img src={Layer2} alt="" className="img-div"/>
          <p style={{fontSize:"20px",color:"white",fontWeight:"600"}}>Screening Question</p>
        </div>
        <div className="SecContainer" >
            <div className="ScreenDiv">
            <div style={{textAlign:"left",color:"#E6E5A3",marginLeft:"35px"}}>
              Get extra trade-in credit, otherwise referred to as additional
              exchange savings or exchange bonus, when you trade in an eligible
              iPhone and purchase a new Apple device until 5 March 2023. Extra
              trade-in credit of ₹5000 is available while trading in iPhone 12,
              iPhone 11, iPhone XR or iPhone X and ₹4500 on iPhone 7.
          </div>
          <div>
          <p style={{color:"#E6E5A3"}}>iPhone 11, iPhone XR or iPhone X and ₹4500 on iPhone 7.</p>
            <div className="Box">
         <label>
              <input type="checkbox"></input>Yes
              </label>
            <label>
              <input type="checkbox"></input>No
              </label>
            </div>
          <p style={{color:"#E6E5A3"}}>iPhone 11, iPhone XR or iPhone X and ₹4500 on iPhone 7.</p>
            <div className="Box">
         <label>
              <input type="checkbox"></input>Yes
              </label>
            <label>
              <input type="checkbox"></input>No
              </label>
            </div>
          <p style={{color:"#E6E5A3"}}>iPhone 11, iPhone XR or iPhone X and ₹4500 on iPhone 7.</p>
            <div className="Box">
         <label>
              <input type="checkbox"></input>Yes
              </label>
            <label>
              <input type="checkbox"></input>No
              </label>
            </div>
          <p style={{color:"#E6E5A3"}}>iPhone 11, iPhone XR or iPhone X and ₹4500 on iPhone 7.</p>
            <div className="Box">
         <label>
              <input type="checkbox"></input>Yes
              </label>
            <label>
              <input type="checkbox"></input>No
              </label>
            </div>
          <p style={{color:"#E6E5A3"}}>iPhone 11, iPhone XR or iPhone X and ₹4500 on iPhone 7.</p>
            <div className="Box">
         <label>
              <input type="checkbox"></input>Yes
              </label>
            <label>
              <input type="checkbox"></input>No
              </label>
            </div>
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

export default Screening;