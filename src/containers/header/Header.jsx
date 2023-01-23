import React from "react";
import "./header.css";
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something New</h1>
        <p>
          {" "}
          If you intend to use useState in a component, make sure that component
          starts with a capital letter and is a function component (not a class
          component). For custom hooks, make sure your hook starts with use in
          its name.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="" srcset="" />
          <p>1100 people are there</p>
        </div>
        </div>
        <div className="gpt3__header-image">
            <img src={ai} alt='ai' />
        </div>
      
    </div>
  );
};

export default Header;
