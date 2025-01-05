import React from "react";
import Lines from './WavyLines/AWaves';
import ImageSlider from "./ImageSlider/ImageSlider";
import { Link, useLocation } from 'react-router-dom';
import SlidingText from "./SlidingText/SlidingText";

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


                <div className="tagline-cont text-center -mt-">
                    <h1 className=" font-bold share-tech title text-[#149262]">
                        Ishwari Designs LLP

                    </h1>
                    <h3 className="share-tech sml-title">Interiors | Design | Event | Architecture | Spaces</h3>

                    <div className="mt-6">
                        <Link to='/services'
                            className="share-tech bg-[#44cc98] text-[#fff5e1] font-bold py-3 px-5 hover:bg-[#e65a4d] hover:text-[#ffebd0] transition-all duration-300 mt-3 rounded-md" >
                            Explore Services
                        </Link>
                    </div>

                </div>


            </div>
        </div>
        {/* <SlidingText />
        <div className="vision-mission-section share-tech">
            <div className="vision">
                <h2 className="title">My Vision</h2>
                <p>To craft spaces that inspire, nurture, and elevate the human experience.</p>
            </div>
            <div className="mission">
                <h2 className="title">My Mission</h2>
                <p>Transforming ideas into functional and beautiful realities through creativity, precision, and collaboration.</p>
            </div>
        </div>

        <div className="idol-section">
            <h2 className="title">My Idol Architect</h2>
            <p className="sml-title"><strong>Frank Lloyd Wright</strong> — for his seamless integration of architecture with nature.</p>
            <blockquote>
                "The mother art is architecture. Without an architecture of our own, we have no soul."
            </blockquote>
        </div> */}
    </>
}
export default Home;