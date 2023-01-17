import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
             <div className="head-Section">
                <ul className="List">
                    <Link to={"/"} relative="path"> <li  className="ListName"> Home</li></Link>
                    <Link to={"/login"} relative="path"> <li  className="ListName"> Login</li></Link>
                    <Link to={"/createAccount"} relative="path"> <li  className="ListName">CreateAccount</li></Link>
                    <Link to={"/contactsForm"} relative="path"><li  className="ListName">Contacts</li></Link>
                </ul>
              </div>
          
        </div>
    );
};

export default Navbar;