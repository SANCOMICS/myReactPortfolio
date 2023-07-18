import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mbiybee Prince-Charles Berinyuy </span>
            from <span className="purple"> Kumba, Cameroon.</span>
            <br /> I am a Graduate of the University of Buea, College of Technology
            in Computer Engineering.
            <br />
            Additionally, I am currently employed as a software developer at
            Nexinch.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Lawn Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Research
            </li>
            <li className="about-activity">
              <ImPointRight /> UI/UX Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic Design
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!, Believe you can, and you're halfway there"{" "}
          </p>
          <footer className="blockquote-footer">Mbiybee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
