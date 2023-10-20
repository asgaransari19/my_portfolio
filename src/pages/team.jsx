import React, { useEffect } from "react";
import "./team.css";
import VanillaTilt from "vanilla-tilt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Teams = () => {
  const menbers = [
    {
      name: "asagar",
      role: "front-End developer",
      img: "#",
      dec: " I am a front-end-developer. I can provide clean code and pixel  perfect design. I alse make a website more and more interactive with web animation. A responsive design makes your website accesible to all users, regardless of their device",
    },

    {
      name: "asagar",
      role: "front-End developer",
      img: "#",
      dec: " I am a front-end-developer. I can provide clean code and pixel  perfect design. I alse make a website more and more interactive with web animation. A responsive design makes your website accesible to all users, regardless of their device",
    },

    {
      name: "asagar",
      role: "front-End developer",
      img: "#",
      dec: " I am a front-end-developer. I can provide clean code and pixel  perfect design. I alse make a website more and more interactive with web animation. A responsive design makes your website accesible to all users, regardless of their device",
    },

    {
      name: "asagar",
      role: "front-End developer",
      img: "#",
      dec: " I am a front-end-developer. I can provide clean code and pixel  perfect design. I alse make a website more and more interactive with web animation. A responsive design makes your website accesible to all users, regardless of their device",
    },
  ];

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h1>Teams</h1>

      <div className="cards">
        <Slider {...settings}>
          <div className="card">
            <div className="profileDp"> dsjdsj </div>
            <p>name</p> <p>role</p>
            <button>readMore</button>
          </div>

          <div className="card">
            <div className="profileDp"> dsjdsj </div>
            <p>name</p> <p>role</p>
            <button>readMore</button>
          </div>

          <div className="card">
            <div className="profileDp"> dsjdsj </div>
            <p>name</p> <p>role</p>
            <button>readMore</button>
          </div>

          <div className="card">
            <div className="profileDp"> dsjdsj </div>
            <p>name</p> <p>role</p>
            <button>readMore</button>
          </div>

          <div className="card">
            <div className="profileDp"> dsjdsj </div>
            <p>name</p> <p>role</p>
            <button>readMore</button>
          </div>

          <div className="card">
            <div className="profileDp"> dsjdsj </div>
            <p>name</p> <p>role</p>
            <button>readMore</button>
          </div>

          <div className="card">
            <div className="profileDp"> dsjdsj </div>
            <p>name</p> <p>role</p>
            <button>readMore</button>
          </div>

          <div className="card">
            <div className="profileDp"> dsjdsj </div>
            <p>name</p> <p>role</p>
            <button>readMore</button>
          </div>

          <div className="card">
            <div className="profileDp"> dsjdsj </div>
            <p>name</p> <p>role</p>
            <button>readMore</button>
          </div>
        </Slider>
      </div>
    </div>
  );
};
