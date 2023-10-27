import React from "react";
import "../styles/home.css";
import { ParticlesBg } from ".";
// import pdf from "/pdf/asgar.pdf";
import Typewriter from "typewriter-effect";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { pageIds } from "../utils/contants";

export const Home = () => {
  return (
    <div className="maincont" id={pageIds.home}>
      <ParticlesBg />
      <div className="dev"></div>
      <div className="name">
        <h2>
          Hello It's <span>me 🙋..</span>
        </h2>
        <h1 id="titleHead">
          hi! guy's i'm
          <span>
            {" "}
            <Typewriter
              options={{
                strings: [
                  "a Reactjs Developer",
                  "a frontend developer",
                  "a web Designer",
                  "a youTuber",
                ],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </span>
        </h1>
        <p id="text">
          <b id="p">
            {" "}
            I want to start my MERN stack developer career with a focus on
            frontend and backend skills. I want to upskills and become more
            productive while participating in designing, planning & developing
            complex applications{" "}
          </b>
          I am passionate about new technologies and always wish to know more
          about them. I have a keen interest in modern web technologies and I
          learn them by reading books & documentation and watching YouTube
          videos. I can speak Hindi, English.
        </p>
        <a
          href="/pdf/asgar.pdf"
          download="myResume"
          target="_blank"
          rel="noreferrer"
        >
          <button> hireMe </button>
        </a>
      </div>
    </div>
  );
};
