import React from "react";
import {
  faGithub,
  faCodepen,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialChannels.css";

const SocialChannels = () => {
  return (
      <div className="socials-wrapper">
        <a href="https://codepen.io/jhartwig" className="codepen-social">
          <FontAwesomeIcon icon={faCodepen} size="2x" />
        </a>
        <a href="https://github.com/jrthartwig" className="github-social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/jocelynn23/"
          className="linkedin-social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
  );
};

export default SocialChannels;
