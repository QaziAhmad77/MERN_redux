import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import Error from "./Error";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;
