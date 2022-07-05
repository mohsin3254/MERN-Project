import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { addUser, editUser } from "../Service/api";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const Reviews = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  let navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/packages");
  };

  return (
    <div style={{ width: "50%", margin: "50px auto" }}>
      <h1 style={{ color: "#ff4757", textAlign: "center" }}>Reviews Form</h1>
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
          <InputLabel htmlFor="my-input">Username</InputLabel>
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
          onClick={() => addUserDetails(user)}
        >
          Add
        </Button>
      </FormGroup>
      <Footer />
    </div>
  );
};

export default Reviews;
