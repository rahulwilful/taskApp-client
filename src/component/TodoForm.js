import { useState } from "react";
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input type="text" value={text} placeholder="Enter task" className="input" onChange={onInputChange} />
    </form>
  );
};

export default TodoForm;
