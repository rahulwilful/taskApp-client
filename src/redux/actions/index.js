import axios from "axios";
import { ADDNEW_TODO } from "./type";
import { GETAll_TODO } from "./type";
import { TOGGLE_TODO } from "./type";
import { UPDATE_TODO } from "./type";
import { DELETE_TODO, TOGGLE_TAB } from "./type";

const API_URL = "http://localhost:5000";

export const addNewTodo2 = (formValue) => async (dispatch) => {
  console.log(formValue.userId);
  try {
    const response = await axios.post(`${API_URL}/todos/`, { formValue });
    //dispatch({ type: ADDNEW_TODO, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: ADDNEW_TODO, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const getAllTodos = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/todos?userId=${userId}`);
    dispatch({ type: GETAll_TODO, payload: response.data });
  } catch (error) {
    console.log("error while getting all Tasks", error);
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const getAllTodos2 = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/todos`, { userId });
    dispatch({ type: GETAll_TODO, payload: response.data });
  } catch (error) {
    console.log("error while getting all Tasks", error);
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/todos/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: response.data });
  } catch (error) {
    console.log("error while getting all Tasks", error);
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const updateTodo = (id, text) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/todos/${id}`, { text });
    dispatch({ type: UPDATE_TODO, payload: response.data });
  } catch (error) {
    console.log("error while getting all Tasks", error);
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${API_URL}/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: response.data });
  } catch (error) {
    console.log("error while getting all Tasks", error);
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab });
};
