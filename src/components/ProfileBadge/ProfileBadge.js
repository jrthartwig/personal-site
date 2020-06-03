import React from "react";
import Image from "react-bootstrap/Image";
import "./ProfileBadge.css";
import SocialChannels from '../SocialChannels/SocialChannels';

const ProfileBadge = () => {
  return (
    <div>
      <div className="photo">
        <Image src={require("./profilepic.jpg")} roundedCircle />
      </div>
      <div>
        <h2 className="name">Jocelynn Hartwig</h2><SocialChannels /> 
      </div>
      <div>
          <p className="description">Hi, I'm Jocelynn. And here is some information about me that I'll update later. For now this is all just placeholder text!</p>
      </div>
    </div>
  );
};

export default ProfileBadge;
