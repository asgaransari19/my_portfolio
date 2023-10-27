import React, { useState } from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";
import { navMenus } from "../utils/navMenus";
import { isPathActive } from "../utils/util";

export const Header = () => {
  const [activePath, setActivePath] = useState(window.location.hash || "");

  return (
    <div className="root">
      <input type="checkbox" name="checkbox" id="check" />
      <label for="check" className="checkBtn">
        <FontAwesomeIcon icon={faBars} size="xl" />
      </label>

      <label className="logo">iAsgar</label>
      <ul>
        {navMenus.map(({ text, link }) => {
          return (
            <li key={link}>
              <a
                href={link}
                onClick={() => setActivePath(link)}
                className={activePath === link ? "active" : ""}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
