import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <section className="head ">
        <h1 className="mian-text container">
          Go where you find yourself most Alive
        </h1>
        <div className="row">
          <div className="col-md-6 col-sm-12 ">
            <a href="#" className="btn-one btn">
              Book Now
            </a>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="#" className="btn">
              Add Review
            </a>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <h1 className="nletter">Subscribe To NewsLetter</h1>
          <hr />
          <p>
            If you want to keep yourself updated with the latest packages then
            subscribe to our Newsletter.
          </p>
        </div>
        <div class="input-group mb-3 container">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon2">
            @example.com
          </span>
        </div>
        <button type="button" class="btn btn-primary">
          Subscribe
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
