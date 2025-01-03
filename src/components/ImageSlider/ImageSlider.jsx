import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './ImageSlider.scss'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}


const slideImages = [
  {
    url: 'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735904892/IshuArchitect/4_vm1at6.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735904892/IshuArchitect/1_svrjj7.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735904892/IshuArchitect/3_dwyect.jpg',
    caption: 'Slide 3'
  },
  {
    url: 'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735904892/IshuArchitect/2_ijp2jk.jpg',
    caption: 'Slide 4'
  },
  {
    url: 'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735904892/IshuArchitect/5_kju7vd.jpg',
    caption: 'Slide 5'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container relative w-full h-full">
        <Slide pauseOnHover={false}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <img className='img' src={`${slideImage.url}`}>
                
              </img>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow