import React from "react";
import "./home.css";
import { ParticlesBg } from "../Componants/particlesBg";
import asgar from "../../src/asgar.pdf";
import Typewriter from "typewriter-effect";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Header } from "../Componants/header";
const Home = () => {
  return (
    <div className="maincont">
      {/* <div className="headbox"> <Header /></div> */}
      <ParticlesBg />
      <div className="name">
        <h2>
          Hello It's <span>me</span>
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
        <a href={asgar} download="myResume" target="_blank" rel="noreferrer">
          <button> hireMe </button>
        </a>
      </div>

      <div className="dev"></div>
    </div>
  );
};

export default Home;
