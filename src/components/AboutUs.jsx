import React from "react";
import "../styles/about.css";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { pageIds } from "../utils/contants";
import { Navigate } from "react-router-dom";

export const Aboutus = () => {
  const btnlogo = [
    {
      logo: <FaFacebook />,
    },
    {
      logo: <FaYoutube />,
    },
    {
      logo: <FaGithub />,
    },
    {
      logo: <FaInstagram />,
    },
    {
      logo: <FaLinkedin />,
    },
  ];
  return (
    <div className="about" id={pageIds.about}>
      <h1>
        about<span>Us</span>
      </h1>
      <div className="imgbox"></div>
      <div className="textbox">
        <p>
          hi! i'm &nbsp;<b> Asgar Ansari </b>&nbsp; student of bechlor of
          technology in computer science and engineering from &nbsp;{" "}
          <b>IES university Bhopal</b>
          &nbsp; currently i'm in 5th sem and my last sem agreegate was &nbsp;
          <b>8.45 SGPA</b>&nbsp;I want to start my MERN stack developer career
          with a focus on frontend and backend skills. I want to upskills and
          become more productive while participating in designing, planning &
          developing complex applications.I am passionate about new technologies
          and always wish to know more about them. I have a keen interest in
          modern web technologies and I learn them by reading books &
          documentation and watching YouTube videos. I can speak Hindi, English.
        </p>
        <div className="btns">
          {btnlogo.map((obj) => {
            return <button>{obj.logo}</button>;
          })}
        </div>
      </div>
      <h2>Thanks for visit my profile....</h2>
    </div>
  );
};
