import React from "react";
import "./About.css";
import img from "../../images/photo.jpg";

const About = () => {
  return (
    <div className="container">
      <h1 className="heading text-dark">G M MAHABUB AHMED</h1>
      <h2 className="sub-heading">Junior Web Developer</h2>
      <div>
        <img className="my-img" src={img} alt="" />
      </div>
      <div>
        <p className="paragraph">
          Hi! I am Mahabub Ahmed. Working with HTML5, CSS3, JS, React JS,
          MongoDb. My goal is to be a successful frontend developer. Right now I
          am in Germany and I am planning to grab the opportunity to develop my
          skills and experience in this field by working in international
          companies.
        </p>
      </div>
      <div>
        <p className="paragraph">
          To be a capable developer I am working day and night. I believe in
          skill, so trying to grab all the opportunities to develop my skills.
          Now I am almost completing the resourceful web developing course by a
          very skilled and famous developer Jhanker Mahbub successfully. Besides
          that, I finished some basic programming courses from Coursera, and
          start a new course in freecodecomp on frontend developing. I also
          practice and learn from so many genius developers on youtube and other
          blogs. In the future, I want to work with more advanced frameworks and
          libraries like Mongoose and django.
        </p>
      </div>
    </div>
  );
};

export default About;
