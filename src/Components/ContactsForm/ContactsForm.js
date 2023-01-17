import React from 'react';
import image from '../../Assets/vector-smiling.png';
import './ContactsForm.css';

const ContactsForm = () => {
    return (
        <div>
           <div className="bigContainer">
           <div className="firstContainer">
          <img src={image} alt="" className="div1" />
        </div>
     <div className="SecContainer">
     <h1 className="frontLogin">Contacts Form</h1>
        <form  className="from">
    
              <div className="inputContainer">
                <label  className="labelText">
                  First Name
                </label>
                <input
                  type="text"
                 placeholder="your name"
                  className="InputBox"
                />
              </div>
              <br/>
              <div className="inputContainer">
                <label  className="labelText">
                  Last Name
                </label>
                <input type="text" 
                placeholder="your last name"
                 className="InputBox" />
              </div>
              <div className="inputContainer">
                <label  className="labelText">
                  Country
                </label>
                <input type="text" 
                placeholder="Australia"
                 className="InputBox" />
              </div>
              <div className="inputContainer">
                <label  className="labelText">
                  Phone Number
                </label>
                <input type="text" 
                placeholder="91xxxxxx5"
                 className="InputBox" />
              </div>
              <div className="inputContainer">
                <label  className="labelText">
                  Subject
                </label>
                <textarea id="write something" 
                  className="subBox" />
              </div>
        <div className="submitBox">
            <button type="submit" className="LoginButton">Submit</button>
        </div>
        </form>
     </div>
            </div> 
        </div>
    );
};

export default ContactsForm;