import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Login from "./Pages/login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Todos from "./component/Todos";
import Header from "./component/Header";
import TodoForm2 from "./component/TodoForm2";
import TodoForm from "./component/TodoForm";
import NavBar from "./component/NavBar";

function App() {
  const isLoggedIn = localStorage.getItem("taskUserId");

  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addtask" element={<TodoForm2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* <SideBar />
      {isLoggedIn ? (
        <>
          <Home />
        </>
      ) : (
        <>
          <h1>WELLCOME TO TASK MANAGEMENT</h1>
          <div>
            <button> <Link to="/">Login</Link> </button>
          </div>
        </>
      )}*/
