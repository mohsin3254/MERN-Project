import React from "react";
import "./service.css";
import Footer from "./Footer";
import Services from "./Services";
const Service = () => {
  return (
    <div>
      <div className="serv">
        <div className="container-fluid">
          <h1 className="heading">Our Services</h1>
          <hr style={{ height: "5px" }} />
          <p className="text">
            Our greatest expertise is in the regions we visit with our tours as
            well as most of Pakistan where we live. We often provide travel
            services to our customers for personal travel before and after tours
            witht he blue walk.
          </p>
        </div>
      </div>
      <div class="container" style={{ marginTop: "20px" }}>
        <div class="row">
          <div class="col-4">
            <Services
              title="Summer Travel"
              btntext="Avail Now"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quasi porro ea reprehenderit neque veniam quidem odit alias totam sit. Hic consequatur quasi natus totam debitis soluta officiis inventore a."
            />
          </div>
          <div class="col-4">
            <Services
              title="Active Tours"
              btntext="Avail Now"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quasi porro ea reprehenderit neque veniam quidem odit alias totam sit. Hic consequatur quasi natus totam debitis soluta officiis inventore a."
            />
          </div>
          <div class="col-4">
            <Services
              title="Flight Service"
              btntext="Avail Now"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quasi porro ea reprehenderit neque veniam quidem odit alias totam sit. Hic consequatur quasi natus totam debitis soluta officiis inventore a."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
