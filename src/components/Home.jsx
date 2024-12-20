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
        <div className="uni-up-margin"></div>
            <div className="mega-cont-flex-2 uni-up-margin">
                

                <div className="tagline-cont text-center">
                    <h1 className=" font-bold share-tech title">
                    Ishwari Designs llp
                        
                    </h1>
                    <h3 className="share-tech sml-title">Interiors | Design | Event | Architecture | Spaces</h3>
                    <button class="bg-[#ff6f61] text-[#fff5e1] font-bold py-2 px-4 rounded hover:bg-[#e65a4d] hover:text-[#ffebd0] transition-all duration-300 mt-1">
                Explore
              </button>
                    
                </div>

                
            </div>
        </div>
    </>
}
export default Home;