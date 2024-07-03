import React, { useState } from "react";

const TrafficLight = () => {
  const [currentColor, setCurrentColor] = useState("yellow");

  return (
    <div
      style={{ width: "200px", height: "400px" }}
      className="bg bg-dark rounded-3 m-auto mt-5 d-flex flex-column justify-content-center text-center"
    >
      <div
        onClick={() => setCurrentColor("green")}
        style={{ width: "120px", height: "120px" }}
        className={
          "bg bg-success rounded-circle m-auto " +
          (currentColor === "green" ? "active-light" : "")
        }
      ></div>
      <div
        onClick={() => setCurrentColor("yellow")}
        style={{ width: "120px", height: "120px" }}
        className={
          "bg bg-warning rounded-circle m-auto " +
          (currentColor === "yellow" ? "active-light" : "")
        }
      ></div>
      <div
        onClick={() => setCurrentColor("red")}
        style={{ width: "120px", height: "120px" }}
        className={
          "bg bg-danger rounded-circle m-auto " +
          (currentColor === "red" ? "active-light" : "")
        }
      ></div>
    </div>
  );
};

export default TrafficLight;