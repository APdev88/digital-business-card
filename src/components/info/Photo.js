import React from "react";
import Image from "../../components/img/photo.jpg";

function Photo() {
  return (
    <div className="image-container">
      <img src={Image} alt="photo card" className="image-card" />
    </div>
  );
}

export default Photo;
