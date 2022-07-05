import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { getUsers, editUser, deleteUser } from "../Service/api";

import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditReview = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    loadUserDetails();
  }, []);
  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const editUserDetails = async () => {
    await editUser();
    navigate("/packages");
  };

  return (
    <div style={{ width: "50%", margin: "50px auto" }}>
      <h1 style={{ color: "#ff4757", textAlign: "center" }}>Edit Review</h1>
      <FormGroup>
        <FormControl style={{ margin: "10px" }}>
          <InputLabel htmlFor="my-input">Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="name"
            value={name}
            id="my-input"
          />
        </FormControl>
        <FormControl style={{ margin: "10px" }}>
          <InputLabel htmlFor="my-input">username</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            value={username}
            id="my-input"
          />
        </FormControl>
        <FormControl style={{ margin: "10px" }}>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={email}
            id="my-input"
          />
        </FormControl>
        <FormControl style={{ margin: "10px" }}>
          <InputLabel htmlFor="my-input">phone</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={phone}
            id="my-input"
          />
        </FormControl>
        <Button
          style={{ backgroundColor: "#ff4757", marginBottom: "80px" }}
          variant="contained"
          onClick={() => editUserDetails()}
        >
          Edit
        </Button>
      </FormGroup>
      <Footer />
    </div>
  );
};

export default EditReview;
