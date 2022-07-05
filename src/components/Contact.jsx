import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./contact.css";
import Footer from "./Footer";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  message: "",
  id: "",
};

const Contact = () => {
  return (
    <div style={{ backgroundColor: "#f1f2f6" }}>
      <div className="contact container-fluid">
        <h1 className="contact-us">We'd love to hear from you.</h1>
        <hr style={{ height: "4px", opacity: "1" }} />
        <p className="text">
          Whether yoy have a question about features, price plans and upcoming
          tours, our co-opeerative staff is <strong>24/7</strong> available to
          assist you.{" "}
        </p>
      </div>
      <div className="container c-2">
        <h2>Leave us a Message</h2>
        <hr
          style={{
            height: "5px",
            color: "#ff4757",
            opacity: "1",
            marginBottom: "25px",
          }}
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="tfield"
          style={{ width: "60%", marginTop: "40px", marginLeft: "20%" }}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="tfield"
          style={{ width: "60%", marginTop: "40px", marginLeft: "20%" }}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Messsage"
          variant="outlined"
          className="tfield"
          style={{
            width: "60%",
            marginTop: "40px",
            marginLeft: "20%",
          }}
        />
        <TextField
          id="outlined-basic"
          label="ID"
          variant="outlined"
          className="tfield"
          style={{
            width: "60%",
            marginTop: "40px",
            marginLeft: "20%",
          }}
        />
        <br />
        <Button
          variant="contained"
          style={{
            width: "60%",
            marginTop: "40px",
            marginLeft: "20%",
            backgroundColor: "#ff4757",
          }}
        >
          Submit
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
