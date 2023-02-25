import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  updateUser } from "../redux/actions";
import { getSingleUser } from "../redux/actions";

const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.data);
  const { name, email, contact, address } = state;

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please input all input fields");
    } else {
      dispatch(updateUser(state, id));
      navigate("/");
      setError("");
    }
  };
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);
  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);
  return (
    <>
      <button style={{ backgroundColor: "	#DC143C" }} className="button3" variant="contained" type="submit" onClick={() => navigate("/")}>
        Go Back
      </button>
      <h1 style={{ textAlign: "center" }}>Edit User</h1>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form action="" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="input-main">
          <div className="textField">
            <TextField id="standard-basic" label="Name" variant="standard" value={name || ""} name="name" type="text" onChange={handleOnChange} />
          </div>
          <div className="textField">
            <TextField id="standard-basic" label="Email" variant="standard" value={email || ""} name="email" type="email" onChange={handleOnChange} />
          </div>
          <div className="textField">
            <TextField id="standard-basic" label="Contact" variant="standard" value={contact || ""} name="contact" type="text" onChange={handleOnChange} />
          </div>
          <div className="textField">
            <TextField id="standard-basic" label="Address" variant="standard" value={address || ""} name="address" type="text" onChange={handleOnChange} />
          </div>
          <button className="button3" variant="contained" type="submit">
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default EditUser;
