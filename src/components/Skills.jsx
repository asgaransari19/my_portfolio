import React, { useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../styles/skills.css";
import { Progress } from "rsuite";
import "../../node_modules/rsuite/dist/rsuite.min.css";
import { pageIds } from "../utils/contants";

export const Skills = () => {
  const skillsData = [
    {
      percent: 90,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "HTML5",
    },

    {
      percent: 80,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "CSS3",
    },

    {
      percent: 70,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "JAVASCRIPT",
    },

    {
      percent: 70,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "ReactJS",
    },

    {
      percent: 40,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "java",
    },

    {
      percent: 60,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "C",
    },

    {
      percent: 70,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "C++",
    },
    {
      percent: 60,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "MSword",
    },
    {
      percent: 50,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "Data Structure",
    },
    {
      percent: 40,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "Python",
    },
    {
      percent: 60,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "Github",
    },
  ];

  return (
    <div className="main" id={pageIds.skills}>
      <h1>
        <span>my</span>Skills
      </h1>
      <div className="circles">
        {skillsData.map((obj) => {
          return (
            <div className="circletext">
              <div className="circle">
                <Progress.Circle
                  percent={obj.percent}
                  status={obj.status}
                  trailColor={obj.trailColor}
                  strokeColor={obj.strokeColor}
                />
              </div>
              <p>{obj.name}</p>
            </div>
          );
        })}
      </div>

      <div className="barbox">
        <p>frontend Skills: &nbsp;&nbsp;</p>
        <div className="bar">
          <ProgressBar className="ProgressBar" now={80} label={`${"80"}%`} />
        </div>
      </div>

      <div className="barbox">
        <p>BackEnd Skills: &nbsp;&nbsp;</p>
        <div className="bar2">
          <ProgressBar className="ProgressBar2" now={30} label={`${"30"}%`} />
        </div>
      </div>
    </div>
  );
};
