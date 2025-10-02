import React from "react";
import style from './Heading.module.css'
const Heading = () => {
  return (
    <>
      <div className="flex flex-row justify-around text-lg">
        <nav className={style.nav}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Experience</a>
          <a href="#">Contact Me</a>
        </nav>
        <div>
          <img src="https://in.pinterest.com/pin/4292562139077305/" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Heading;
