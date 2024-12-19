import React from "react";
import Lines from './WavyLines/AWaves';
import ImageSlider from "./ImageSlider/ImageSlider";


const Home = () => {
    const images = [
        'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=Slide+1',
        'https://via.placeholder.com/800x600/00FF00/FFFFFF?text=Slide+2',
        'https://via.placeholder.com/800x600/0000FF/FFFFFF?text=Slide+3',
        'https://via.placeholder.com/800x600/FFFF00/FFFFFF?text=Slide+4',
      ];
    return <>
        <div className="outer-container">
        <Lines/>
        
            <div className="mega-cont-flex-2 uni-up-margin">

                <div className="tagline-cont">
                    <h1 className=" font-bold share-tech title">
                        Architecture Tailored to Your Story.
                    </h1>
                    <h3 className="share-tech sml-title">Amar Gaikwads Porfolio</h3>
                </div>
                <div className="image-slider-cont">
                    <ImageSlider images={images}></ImageSlider>
                </div>
            </div>
        </div>
    </>
}
export default Home;