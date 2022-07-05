import axios from "axios";
const url = "http://localhost:3003/users";

export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};
export const addUser = async (user) => {
  return await axios.post(url, user);
};
export const editUser = async (user) => {
  return await axios.put(`${(url, user)}/${data}`);
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${(url, user)}/${data}`);
  } catch (error) {
    console.log("Error", error.message);
  }
};
