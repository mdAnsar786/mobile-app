import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactsForm from "./Components/ContactsForm/ContactsForm";
import CreateAccount from "./Components/createAccount/CreateAccount";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/contactsForm" element={<ContactsForm />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
