import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import React from "react";
import { useEffect, useState } from "react";
import { getUsers, editUser, deleteUser } from "../Service/api";
import { Link, Links } from "react-router-dom";
const Package = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  const editUser = async () => {
    await editUser(data, id);
    navigate("/packages");
  };
  const deleteuserdata = async (id) => {
    await deleteUser(id);
  };

  return (
    <div>
      <Table style={{ width: "70%", margin: "30px auto" }}>
        <TableHead>
          <TableRow style={{ backgroundColor: "#ff4757" }}>
            <TableCell>Name</TableCell>
            <TableCell>username</TableCell>
            <TableCell>email</TableCell>
            <TableCell>phone</TableCell>
            <TableCell>ID</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  style={{ margin: "4px" }}
                  component={Link}
                  to={`/edit/${user.id}`}
                  onClick={() => editUser()}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => deleteuserdata(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Package;
