import React from 'react'; 


const Meters = () => {
    return (
        <div>
        <label for="html">HTML: </label>
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
          <label for="html">CSS: </label>
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
        <div>
          <label for="html">JavaScript: </label>
          <meter
            className="meter"
            id="html"
            min="0"
            max="100"
            low="25"
            high="50"
            optimum="80"
            value="60"
          ></meter>
        </div>
        <div>
        <label for="html">C#: </label>
        <meter
          className="meter"
          id="html"
          min="0"
          max="100"
          low="25"
          high="65"
          optimum="50"
          value="50"
        ></meter>
      </div>
      <div>
        <label for="html">React JS: </label>
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
      </div>
    )}

export default Meters; 