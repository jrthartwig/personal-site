import React from "react";
import "./Meters.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faWindows, faReact } from "@fortawesome/free-brands-svg-icons";

const Meters = () => {
  return (
    <div className="meters-group">
      <div className="html">
        <label for="html">
          <FontAwesomeIcon icon={faHtml5}/>
        </label>
        <meter
          className="meter"
          id="html"
          min="0"
          max="100"
          low="25"
          high="65"
          optimum="80"
          value="65"
        ></meter>
        </div>
        <div className="css">
          <label for="css">
          <FontAwesomeIcon icon={faCss3} />
          </label>
          <meter
            className="meter"
            id="css"
            min="0"
            max="100"
            low="25"
            high="65"
            optimum="80"
            value="65"
          ></meter>
        </div>
        <div className="js">
          <label for="js">
            <FontAwesomeIcon icon={faJs}/>
          </label>
          <meter
            className="meter"
            id="js"
            min="0"
            max="100"
            low="25"
            high="50"
            optimum="80"
            value="60"
          ></meter>
        </div>
        <div className="csharp">
          <label for="csharp">
            <FontAwesomeIcon icon={faWindows} />
          </label>
          <meter
            className="meter"
            id="c#"
            min="0"
            max="100"
            low="25"
            high="65"
            optimum="50"
            value="50"
          ></meter>
        </div>
        <div className="react">
          <label for="react">
            <FontAwesomeIcon icon={faReact}/>
          </label>
          <meter
            className="meter"
            id="react"
            min="0"
            max="100"
            low="25"
            high="65"
            optimum="80"
            value="65"
          ></meter>
        </div>
      </div>
  );
};

export default Meters;
