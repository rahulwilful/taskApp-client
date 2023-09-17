import "./Todos.css";
import React, { useEffect, useState } from "react";
import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from "../redux/actions/type";
import Todo from "./Todo";
import Tabs from "./Tabs";
import { deleteTodo } from "../redux/actions/index";
import { useNavigate } from "react-router-dom";

export const Todos = () => {
  const userId = JSON.parse(localStorage.getItem("taskUserId"));
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);
  const navigate = useNavigate();

  // State for the search input
  const [searchInput, setSearchInput] = useState("");

  const getTodos = () => {
    return todos.filter((todo) => {
      // Filter based on search input and current tab
      return (
        (currentTab === ALL_TODOS || (currentTab === ACTIVE_TODOS && !todo.done) || (currentTab === DONE_TODOS && todo.done)) && (searchInput === "" || todo.name.toLowerCase().includes(searchInput.toLowerCase())) // Filter based on search input
      );
    });
  };

  useEffect(() => {
    dispatch(getAllTodos(userId));
  }, []);

  const removeDoneTodos = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };

  const addTask = () => {
    navigate("/addtask");
  };

  const logOut = () => {
    localStorage.removeItem("taskUserName");
    localStorage.removeItem("taskUserEmail");
    localStorage.removeItem("taskUserId");
    localStorage.removeItem("taskUserToken");
    navigate("/login");
  };

  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />
        <button onClick={addTask} className="addTask">
          <i className="fas fa-add" />
        </button>

        {todos.some((todo) => todo.done) ? (
          <button onClick={removeDoneTodos} className="buttonClear">
            Clear All Tasks
          </button>
        ) : null}

        <button onClick={logOut} className="addTask">
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>

      <input type="text" placeholder="Search by name" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="search-input" />

      <ul>
        {getTodos().map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};

export default Todos;
