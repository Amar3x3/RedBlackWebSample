import React, { useState } from "react";
import "./ImageSlider3D.css"; // Include your styles here
import img from '../../assets/1.jpeg'
import i2 from '../../assets/2.jpeg';
import i3 from '../../assets/3.jpeg';
import i4 from '../../assets/4.jpeg';
import i5 from '../../assets/5.jpeg';


const ImageSlider3D = () => {
  const [angle, setAngle] = useState(0);

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

  const next = () => {
    setAngle(angle + 45);
   const  spinner = document.querySelector("#spinner");

    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
  
  }
  const prev = () =>{
    setAngle(angle - 45);
    const spinner = document.querySelector("#spinner");

    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
  
  }

  return (
    <div className="banner">


      <div className="relative">
      <div id="carousel">
        <figure id="spinner">
          <img src={img} ></img>
          <img src={i2} ></img>
          <img src={i3} ></img>
          <img src={i4} ></img>
          <img src={i5} ></img>
          <img src={img} ></img>
          <img src={i2} ></img>
          <img src={i3} ></img>
        </figure>
      
      </div>
      <span class="ss-icon absolute left-10 top-1/2  z-10" onClick={next}>&lt;</span>
      <span  class="ss-icon absolute right-10 top-1/2 z-10" onClick={prev}>&gt;</span>
      </div>
      
      
    </div>
  );
};

export default ImageSlider3D;
