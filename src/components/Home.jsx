import React, { useRef, useEffect } from "react";
import Lines from './WavyLines/AWaves';
import ImageSlider from "./ImageSlider/ImageSlider";
import { Link, useLocation } from 'react-router-dom';
import SlidingText from "./SlidingText/SlidingText";
import arrow from '../assets/arrowRight.png';
import leaf from '../assets/leaf.png';
import profileImg from '../assets/image1.jpeg'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
    const images = [
        'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=Slide+1',
        'https://via.placeholder.com/800x600/00FF00/FFFFFF?text=Slide+2',
        'https://via.placeholder.com/800x600/0000FF/FFFFFF?text=Slide+3',
        'https://via.placeholder.com/800x600/FFFF00/FFFFFF?text=Slide+4',
    ];
    const timeline = gsap.timeline();
    const svgPathRef = useRef(null);
    const svgContainerRef = useRef(null);
    const width = window.innerWidth;

    // Adjust the control point dynamically
    var path = `M 0 100 Q 500 100 ${width} 100`;

    const finalPath = `M 10 100 Q 500 100 ${width} 100`;


    const handleMouseMove = (event) => {
        var { clientX, clientY } = event;
        var x = clientX - 240;
        var y = clientY - 240;
        path = `M 10 100 Q ${x} ${y} ${width} 100`;

        gsap.to(svgPathRef.current, {
            attr: { d: path },
            duration: 0.3,
            ease: "power3.out",
        });
    };
    const handleMouseLeave = () => {
        gsap.to(svgPathRef.current, {
            attr: { d: finalPath },
            duration: 1.5,
            ease: "elastic.out(1, 0.3)",
        });
    };



    return <>
        <div className="outer-container">

            <Lines />
            <div className="uni-up-margin"></div>
            <div className="mega-cont-flex-2 uni-up-margin">


                <div className="tagline-cont text-center ">
                    <h1 className=" font-bold  text-[10rem] max-w-420:text-[4rem] max-w-420:font-semibold  text-[#458661] homemade-apple-regular birthstone-regular">
                        Ishwari Designs LLP

                    </h1>
                    <h3 className=" text-red-500 text-4xl max-w-420:text-2xl mt-6 share-tech">Interiors | Design | Event | Architecture | Spaces</h3>

                    <div className="mt-8 relative">

                        <Link to='/services'
                            className="relative share-tech bg-[#fff5e1] text-[#458661] border-solid border-2 border-[#458661] standard-btn hover:border-[#e2904c] hover:text-[#e2904c] py-3 px-11 pr-14 transition-all duration-300 mt-3 rounded-[2rem]" >

                            Explore Services

                            <div className="absolute top-[44%] right-8 w-[0.5rem] h-[0.5rem] btn-circle rounded-[50%]"></div>

                        </Link>



                    </div>

                </div>


            </div>


            <section id="Why Chooose Us share-tech" className="mt-24  overflow-clip">
                <div className="mega-grid-2-home">
                    <div className="min-grid-2-home cl1_main-home">
                        <div className="col1-home reveal-from-left">
                            <p className="text-home col1_title-home share-tech "><span>Welcome to Ishwari Designs</span>
                            </p>
                            <div className="mt-8 relative">

                                <Link to='/'
                                    className="standard-btn hover:border-[#e2904c] hover:text-[#e2904c] relative share-tech bg-[#fff5e1] text-[#458661] border-solid border-2 border-[#458661] py-3 px-11 pr-14 transition-all duration-300 mt-3 rounded-[2rem]" >

                                    Explore

                                    <div className="absolute top-[44%] right-8 w-[0.5rem] h-[0.5rem] btn-circle rounded-[50%]"></div>

                                </Link>


                            </div>
                        </div>
                        <hr />
                        <div className="col2-home reveal-from-left">
                            <div className="slider-home">
                                <div className="content_1-home">
                                </div>
                            </div>
                            <img className="overlay_home_slider" />
                        </div>
                    </div>

                    <div className="min-grid-2-home cl2_main-home">
                        <div className="col1-home col1_title-home reveal-from-right share-tech">
                            Why Choose us
                        </div>
                        <div>
                            <hr />
                        </div>
                        <div className="col2-info-home reveal share-tech">
                            <div className="text-home flex-info-2 reveal-from-right">
                                <div className="mr-2 text-[#458661] text-[3rem] share-tech font-bold">
                                    1
                                </div>
                                <p> Understanding Your Vision  <br />
                                    We take the time to deeply understand your requirements, ensuring every design reflects your unique personality and needs.</p>
                            </div>
                            <div className="text-home flex-info-2 reveal-from-right mt-5">
                                <div className="mr-2 text-[#458661] text-[3rem] share-tech font-bold">
                                    2
                                </div>
                                <p> Innovative Designs<br />
                                    Our team combines creativity and modern trends to craft timeless and functional spaces tailored to your lifestyle.</p>
                            </div>
                            <div className="text-home flex-info-2 reveal-from-right mt-5">
                                <div className="mr-2 text-[#458661] text-[3rem] share-tech font-bold">
                                    3
                                </div>
                                <p> Quality Execution<br />
                                    From concept to completion, we ensure every detail is executed with precision and care.</p>
                            </div>
                            <div className="text-home flex-info-2 reveal-from-right mt-5">
                                <div className="mr-2 text-[#458661] text-[3rem] share-tech font-bold">
                                    4
                                </div>
                                Client-Centric Approach<br />
                                Your satisfaction is our priority, and we work collaboratively to exceed your expectations at every step.
                            </div>
                            <div className="text-home flex-info-2 reveal-from-right mt-5">
                                <div className="mr-2 text-[#458661] text-[3rem] share-tech font-bold">
                                    5
                                </div>
                                Personalized Touch<br />
                                We ensure every project is a unique reflection of the client’s personality and aspirations, turning their vision into reality.
                            </div>




                        </div>
                    </div>
                </div>

            </section>



            <div id="string" ref={svgContainerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="relative">
                <svg viewBox={`0 0 ${window.innerWidth} 200`}
                    preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
                    <path ref={svgPathRef} d={`M 10 100 Q 500 100 ${window.innerWidth} 100`} stroke="#458661" strokeWidth="2" fill="transparent" />
                </svg>
            </div>



            <section id="About share-tech" className="AboutUs overflow-clip">
            <p className="share-tech text-center text-6xl text-[#458661] max-w-420:text-5xl"><span>About Us</span>
            </p>
                <div className="mega-grid-2-home">




                    <div className="min-grid-2-home cl1_main-home">

                        <div className="col2-home reveal-from-left">
                            <div className="photo-cont max-w-420:mb-[1.5rem] relative z-0 overflow-visible cl2_main-home">
                                <div className="abs absolute -top-[3rem] -right-[4rem] -z-10 leaf-animation">
                                    <img className="w-[1rem]" src={leaf} alt="" />
                                </div>
                                <div className="abs absolute  -bottom-[3rem] -left-[4rem] -z-10 leaf-animation">
                                    <img className="w-[1rem]" src={leaf} alt="" />
                                </div>
                                <div className="absolute"></div>
                                <img src={profileImg} alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="min-grid-2-home cl2_main-home">

                        <div className="col2-info-home reveal share-tech">

                            <p className="share-tech text-home max-w-420:text-lg">
                                An architect with a passion for interior design and event planning. I graduated from Bharati Vidyapeeth College of Architecture, Mumbai University, and bring creativity and precision to every project I work on.

                                <p className='share-tech text-home mr-5 mt-3 max-w-420:text-lg'> My design process starts by understanding the client’s vision and needs. Whether it's architecture, interior design, or event planning, I focus on blending functionality with aesthetic appeal to create spaces that reflect the client’s personality and style. I enjoy experimenting with materials, colors, and layouts to produce innovative, timeless designs.
                                </p>
                                <div className="mt-8 relative">

                                    <Link to='/about'
                                        className="standard-btn hover:border-[#e2904c] hover:text-[#e2904c] relative share-tech bg-[#fff5e1] text-[#458661] border-solid border-2 border-[#458661] py-3 px-11 pr-14 transition-all duration-300 mt-3 rounded-[2rem]" >

                                        Explore

                                        <div className="absolute top-[44%] right-8 w-[0.5rem] h-[0.5rem] btn-circle rounded-[50%]"></div>

                                    </Link>


                                </div>
                            </p>
                        </div>
                    </div>


                </div>

            </section>








        </div>

    </>
}
export default Home;