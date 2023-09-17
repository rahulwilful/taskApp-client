import React, { useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBInput, MDBCardFooter, MDBValidation, MDBBtn, MDBIcon, MDBSpinner } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  //const [formValue, setFormValue] = useState(initialState);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  //const { email, password } = formValue;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("password did not matched");
    }
    try {
      const result = await axios.post("http://localhost:5000/users/signup", { firstName, lastName, email, password, confirmPassword });
      console.log(result);
      localStorage.setItem("taskUserName", JSON.stringify(result.data.result.name));
      localStorage.setItem("taskUserEmail", JSON.stringify(result.data.result.email));
      localStorage.setItem("taskUserId", JSON.stringify(result.data.result._id));
      localStorage.setItem("taskUserToken", JSON.stringify(result.data.token));
      alert("Registerd Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ margin: "auto", padding: "15px", maxWidth: "450px", alignContent: "center", marginTop: "120px" }}>
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>Sign In</h5>
        <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
          <div className="col-md-6">
            <MDBInput label="First Name" type="text" value={firstName} name="firstName" onChange={(e) => setFirstName(e.target.value)} required invalid validation="Pleae provide your first name" />
            <p id="12121"></p>
          </div>
          <div className="col-md-6">
            <MDBInput label="Last Name" type="text" value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} required invalid validation="Pleae provide your last name" />
            <p id="12121"></p>
          </div>
          <div className="col-md-12">
            <MDBInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required invalid validation="Pleae provide your email" />
            <p id="12121"></p>
          </div>

          <div className="col-md-12">
            <MDBInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required invalid validation="Pleae provide your password" />
            <p id="12122"></p>
          </div>

          <div className="col-md-12">
            <MDBInput label="Confirm Password " type="password" value={confirmPassword} name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} required invalid validation="Pleae provide your confirm password" />
            <p id="12122"></p>
          </div>
          <div className="col-12">
            <MDBBtn style={{ width: "100%" }} className="mt-2">
              Register
            </MDBBtn>
          </div>
        </MDBValidation>
        <MDBCardFooter>
          <Link to="/login">
            <p> Have an account ? Log In</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Register;
