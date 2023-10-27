import React from "react";
import "../styles/projects.css";
// import { Link } from "react-router-dom";
import { pageIds } from "../utils/contants";
// import { Navigate } from "react-router-dom";

export const Projects = () => {
  const projectList = [
    {
      para: "unit Converter Web",
      image: "/images/sc3.png",
      tech: "html css javascript",
      githublink: "https://github.com/asgaransari19/codeClause_unitConverter",
      liveLink: "https://unitconverterweb.netlify.app/",
    },
    {
      para: "Simple Portfolio web",
      image: "/images/sc1.png",
      tech: "html css javascript",
      githublink: "https://github.com/asgaransari19/SIMBT_Portfolio",
      liveLink: "https://myfirstportfolioasgar.netlify.app",
    },
    {
      para: "Weather Web",
      image: "/images/sc2.png",
      tech: "html css javascript",
      githublink: "https://github.com/asgaransari19/SIMBT_weather",
      liveLink: "https://weatherwebasgar.netlify.app/",
    },
    {
      para: "Todo Web",
      image: "/images/sc4.png",
      tech: " html5 javascript Reactjs and MaterialUI ",
      githublink: "https://github.com/asgaransari19/toodo-app",
      liveLink: "https://toodoappas.netlify.app/adduser",
    },
    {
      para: "coinBased Web (gaming Earning Coin)",
      image: "/images/sc5.png",
      tech: "Reactjs and MaterialUI ",
      githublink: "https://github.com/asgaransari19/CoinBasedApp",
      liveLink: "https://coinbased.netlify.app/overview",
    },
    {
      para: "Food's Restaurant",
      image: "/images/sc7.png",
      tech: "html5 javascript Reactjs and MaterialUI ",
      githublink: "https://github.com/asgaransari19/restaurentapp",
      liveLink: "https://restuarentappas.netlify.app/foodmenu",
    },
    {
      para: "Calculator",
      image: "/images/cal.png",
      tech: "html css javascript",
      githublink: "https://github.com/asgaransari19/SimpleCalculator",
      liveLink: "https://unitconverterweb.netlify.app/",
    },
    {
      para: "PhoneWeb Feature",
      image: "/images/sc8.png",
      tech: "html css javascript",
      githublink: "https://github.com/asgaransari19/phoneWeb",
      liveLink: "https://phonewebfeature.netlify.app/",
    },
    {
      para: "signIn SignUp",
      image: "/images/sc6.png",
      tech: "Reactjs Validations Form",
      githublink: "https://github.com/asgaransari19/phoneWeb",
      liveLink: "https://phonewebfeature.netlify.app/",
    },
    {
      para: "timerandStopWatch",
      image: "/images/sc9.png",
      tech: "html css javascript",
      githublink:
        "https://github.com/asgaransari19/codeClause_TimerandStopwatch",
      liveLink: "https://timerandstopwatchas.netlify.app/",
    },
    {
      para: "temperatureConverter web",
      image: "/images/sc10.png",
      tech: "html css javascript",
      githublink: "https://github.com/asgaransari19/OIBSIP_level1_task3",
      liveLink: "https://tempconverterasgr.netlify.app/",
    },
  ];

  return (
    <>
      <h3 id="h3">PROJECTS</h3>
      <div className="containerdiv" id={pageIds.projects}>
        {projectList.map((obj) => {
          return (
            <div className="projectsBox">
              <img src={obj.image} />
              <h4>{obj.para}</h4>
              <p>{obj.tech}</p>
              <div className="buttons">
                <button className="optionbtns">
                  {" "}
                  {/* <Navigate to = {obj.githublink} /> */}
                  <a href={obj.githublink}>View on Github</a>
                  {/* <Link to={obj.githublink}>View on Github</Link> */}
                </button>
                <button className="optionbtns">
                  {" "}
                  <a href={obj.liveLink}>Live</a>
                  {/* <Link to={obj.liveLink}>Live</Link> */}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
