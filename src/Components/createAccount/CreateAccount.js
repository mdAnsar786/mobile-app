import React from "react";
import image from "../../Assets/vector-smiling.png";
import "./CreateAccount.css";

const CreateAccount = () => {
  return (
    <div>
      <div className="bigContainer">
        <div className="firstContainer">
          <img src={image} alt="" className="div1" />
        </div>
        <div className="SecContainer">
          <h1 className="frontLogin">Create New Account</h1>
          <form className="from">
            <div className="mainDiv">
              <div className="inputContainer">
                <label  className="labelText">
                  Title
                </label>
                <input
                  type="text"
                 placeholder="Dr. Mr. Mrs"
                  className="InputBox"
                />
              </div>
              <div className="inputContainer">
                <label  className="labelText">
                  First Name
                </label>
                <input type="text" className="InputBox" />
              </div>
            </div>
            <div className="mainDiv">
              <div className="inputContainer">
                <label className="labelText">
                  Middle name (if applicable)
                </label>
                <input type="text" className="InputBox" />
              </div>
              <div className="inputContainer">
                <label  className="labelText">
                  Last Name
                </label>
                <input type="text" className="InputBox" />
              </div>
            </div>
            <div className="paragraph">
              <p>The name used above must match your license.</p>
            </div>
            <div className="mainDiv">
              <div className="inputContainer">
                <label  className="labelText">
                  preferred name
                </label>
                <input type="email" className="InputBox" />
              </div>
              <div className="inputContainer">
                <label  className="labelText">
                  Additional name (if applicable)
                </label>
                <input type="text" className="InputBox" />
              </div>
            </div>
            <div className="mainDiv">
              <div className="inputContainer">
                <label  className="labelText">
                  Npi
                </label>
                <input type="text" className="InputBox" />
              </div>
              <div className="inputContainer">
                <label  className="labelText">
                  Mobile Phone
                </label>
                <input
                  type="number"
                  placeholder="09xxxxxxxx1"
                  className="InputBox"
                />
              </div>
            </div>
       
          <div className="toggleButton">
            <button type="submit" className="LoginButton">
              Cancel
            </button>
            <button type="submit" className="LoginButton">
              Continue
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
