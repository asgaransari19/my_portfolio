import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="root">
      <input type="checkbox" name="checkbox" id="check" />
      <label for="check" className="checkBtn">
        <FontAwesomeIcon icon={faBars} size="xl" />
      </label>

      <label className="logo">iAsgar</label>
      <ul>
        <li>
          {" "}
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="/about">aboutUs</a>
        </li>
        <li>
          {" "}
          <a href="/projects">projects</a>
        </li>
        <li>
          {" "}
          <a href="/skills">Skills</a>
        </li>
        <li>
          {" "}
          <a href="/team">team</a>
        </li>
        <li>
          {" "}
          <a href="/contact">contact</a>
        </li>
      </ul>
    </div>
  );
};
