import { updateTodo } from "../redux/actions/index";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTodo } from "../redux/actions/index";
import { toggleTodo } from "../redux/actions/index";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(todo.data);
  const [done, setDone] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setDone((prevState) => !prevState);
    dispatch(updateTodo(todo._id, text));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  return (
    <div>
      <div>
        <li
          className="task"
          style={{
            textDecoration: todo.done ? "line-through" : "",
            backgroundColor: todo.done ? "darkorange" : "",
          }}
        >
          <span style={{ display: done ? "none" : "" }}>{todo.data}</span>

          <form onSubmit={onFormSubmit} style={{ display: done ? "inline" : "none" }}>
            <input type="text" value={text} className="edit-todo" onChange={(e) => setText(e.target.value)} />
          </form>

          <span className="icon" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
          <span className="icon" onClick={() => setDone((prevState) => !prevState)}>
            <i className="fas fa-pen " />
          </span>
          <span className="icon" onClick={() => dispatch(toggleTodo(todo._id))}>
            <i className="fas fa-check " />
          </span>
        </li>
      </div>
    </div>
  );
};

export default Todo;
