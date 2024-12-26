import React, { useState } from "react";
import "./ImageSlider3D.css"; // Include your styles here


const ImageSlider3D = () => {

  const images = [
   'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
   'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
   'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
   'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
   'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
   'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
   'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
   'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
   'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
   'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg'
  ];

  const [rotation, setRotation] = useState(0);

  const rotateLeft = () => {
    setRotation((prev) => prev - 360 / images.length);
  };

  const rotateRight = () => {
    setRotation((prev) => prev + 360 / images.length);
  };

  return (
    <div className="banner">
        
      <div
        className="slider"
        style={{
          "--quantity": images.length,
          transform: `perspective(1000px) rotateX(-16deg) rotateY(${rotation}deg)`
        }}
      >
        {images.map((src, index) => (
          <div
            className="item"
            style={{ "--position": index + 1 }}
            key={index}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={rotateLeft}>Previous</button>
        <button onClick={rotateRight}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider3D;
