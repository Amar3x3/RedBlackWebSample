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
            <Lines />
            <div className="uni-up-margin"></div>
            <div className="mega-cont-flex-2 uni-up-margin">


                <div className="tagline-cont text-center -mt-40">
                    <h1 className=" font-bold share-tech title text-black">
                        Ishwari Designs llp

                    </h1>
                    <h3 className="share-tech sml-title">Interiors | Design | Event | Architecture | Spaces</h3>
                    <button class="bg-[#44cc98] text-[#fff5e1] font-bold py-3 px-5 rounded hover:bg-[#e65a4d] hover:text-[#ffebd0] transition-all duration-300 mt-3">
                        Explore Services
                    </button>

                </div>


            </div>
        </div>
    </>
}
export default Home;