import React from "react";
import Image from "react-bootstrap/Image";
import "./ProfileBadge.css";

const ProfileBadge = () => {
  return (
    <div>
      <div className="photo">
        <Image src={require("./profilepic.jpg")} roundedCircle />
      </div>
      <div>
        <h2>Jocelynn Hartwig</h2>
      </div>
      <div>
          <p>Hi, I'm Jocelynn. And here is some information about me that I'll update later. For now this is all just placeholder text!</p>
      </div>
    </div>
  );
};

export default ProfileBadge;
