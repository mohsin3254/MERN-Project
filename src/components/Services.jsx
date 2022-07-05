import React from "react";
const Services = (props) => {
  return (
    <div>
      <div
        style={{
          height: "400px",
          backgroundColor: "#dfe4ea",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "10px 10px 13px 0px rgba(0,0,0,0.65)",
        }}
      >
        <h2
          style={{
            color: "#ff4757",
            marginBottom: "20px",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          {props.title}
        </h2>
        <p
          style={{
            textAlign: "center",
            marginRight: "3px",
            wordSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          {props.description}
        </p>
        <button
          type="button"
          class="btn btn-outline-info"
          style={{ marginLeft: "100px" }}
        >
          {props.btntext}
        </button>
      </div>
    </div>
  );
};

export default Services;
