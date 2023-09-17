import "./todoForm2.css";
import { useState } from "react";
import { addNewTodo2 } from "../redux/actions";
import { useDispatch } from "react-redux";

const initialState = {
  name: "",
  data: "",
  userId: JSON.parse(localStorage.getItem("taskUserId")),
};

const TodoForm2 = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { name, data, userId } = formValue;

  const dispatch = useDispatch();
  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo2(formValue));
    setFormValue({ ...formValue, name: "", data: "" });
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={onFormSubmit}>
          <div className="classForm">
            <div className="classInput">
              <input type="text" value={name} name="name" placeholder="Enter Task Name" className="input" onChange={onInputChange} />
              <textarea value={data} name="data" placeholder="Enter Task" className="input" onChange={onInputChange} />
            </div>
            <div className="classButton">
              <button type="submit" className="button">
                Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm2;
