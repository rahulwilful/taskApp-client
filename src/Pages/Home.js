import React from "react";
import TodoForm from "../component/TodoForm";
import Todos from "../component/Todos";
import { useNavigate } from "react-router-dom";

import Login from "./login";
const Home = () => {
  return (
    <div className="Home">
      <Todos />
    </div>
  );
};

export default Home;
