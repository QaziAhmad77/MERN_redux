import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = inputData;
  const [error, setError] = useState("");
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    // e.preventDefault();
    // const fieldName = e.target.getAttribute("name");
    // const value = e.target.value;
    // console.log(fieldName, value);
    // const newObj = { ...inputData };
    // console.log(newObj);
    // newObj[fieldName] = value;
    // setInputData(newObj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please fill all input fields");
    } else {
      dispatch(addUser(inputData));
      navigate("/");
      setError("");
    }
  };
  return (
    <>
      <button style={{ backgroundColor: "	#DC143C" }} className="button3" variant="contained" type="submit" onClick={() => navigate("/")}>
        Go Back
      </button>
      <h1 style={{ textAlign: "center" }}>Add User</h1>
      {error && <h3 style={{ color: "red", textAlign: "center" }}>{error}</h3>}
      <form action="" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="input-main">
          <div className="textField">
            <TextField id="standard-basic" label="Name" variant="standard" value={name} name="name" type="text" onChange={handleOnChange} />
          </div>
          <div className="textField">
            <TextField id="standard-basic" label="Email" variant="standard" value={email} name="email" type="email" onChange={handleOnChange} />
          </div>
          <div className="textField">
            <TextField id="standard-basic" label="Contact" variant="standard" value={contact} name="contact" type="text" onChange={handleOnChange} />
          </div>
          <div className="textField">
            <TextField id="standard-basic" label="Address" variant="standard" value={address} name="address" type="text" onChange={handleOnChange} />
          </div>
          <button className="button3" variant="contained" type="submit">
            Add User
          </button>
        </div>
      </form>
    </>
  );
};

export default AddUser;
