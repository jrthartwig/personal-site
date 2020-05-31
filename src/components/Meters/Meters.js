import React from "react";
import "./Meters.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

const Meters = () => {
  return (
    <div className="meters-group">
      <div>
        <label for="html"> 
        <FontAwesomeIcon icon={faHtml5} />
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
        <div>
          <label for="css">
          <img src={require('./css.png')} />
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
        <div>
          <label for="js">
          <img src={require('./javascript.png')} />
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
        <div>
          <label for="c#">
          <img src={require('./c#.png')} />
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
        <div>
          <label for="react">
          <img src={require('./react.png')} />
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
    </div>
  );
};

export default Meters;
