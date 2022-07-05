import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import tour from "./images/tour.avif";

import "./contact.css";
import Footer from "./Footer";
import { useState } from "react";
const About = () => {
  return (
    <div style={{ backgroundColor: "#f1f2f6" }}>
      <div className="contact container-fluid">
        <h1 className="contact-us">About Us</h1>
        <hr style={{ height: "4px", opacity: "1" }} />
        <p className="text">
          Our mission is to provide our customers with a great experience and
          hospitality to make it convenient for them to explore the new places{" "}
        </p>
      </div>
      <div className="container c-2">
        <div className="expone">
          <h2>Tours</h2>
          <p>
            Our company has been providing the tour booikng options to our
            valuable customers and the customization option to make it more
            convenient for them.
          </p>
          <img
            src={tour}
            alt="Tours"
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              marginLeft: "130px",
            }}
          />
        </div>
      </div>

      <div className="container c-2">
        <div className="expone">
          <h2>Our Mission</h2>
          <p>
            Our company has been providing the tour booikng options to our
            valuable customers and the customization option to make it more
            convenient for them.
          </p>
          <img
            src={tour}
            alt="Tours"
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              marginLeft: "130px",
            }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
