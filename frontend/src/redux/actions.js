import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
const userDeleted = () => ({
  type: types.DEL_USER,
});
const userAdded = () => ({
  type: types.ADD_USER,
});
const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});
const userUpdated = (user) => ({
  type: types.UPDATE_USER,
  payload: user,
});

const host = "http://localhost:4000";

export const loadUsers = () => {
  return function (dispacth) {
    axios
      .get(`${host}/api/users/get-user`)
      .then((res) => {
        console.log("res", res);
        dispacth(getUsers(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return function (dispacth) {
    axios
      .delete(`${host}/api/users/delete-user/${id}`)
      .then((res) => {
        console.log("res", res);
        dispacth(userDeleted());
        dispacth(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  return function (dispacth) {
    axios
      .post(`${host}/api/users/add-user`, user)
      .then((res) => {
        console.log("res", res);
        dispacth(userAdded());
        dispacth(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleUser = (id) => {
  return function (dispacth) {
    axios
      .get(`${host}/api/users/get-single-user/${id}`)
      .then((res) => {
        console.log("res", res);
        dispacth(getUser(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const updateUser = (user, id) => {
  return function (dispacth) {
    axios
      .put(`${host}/api/users/update-user/${id}`, user)
      .then((res) => {
        console.log("res", res);
        dispacth(userUpdated());
      })
      .catch((error) => console.log(error));
  };
};
