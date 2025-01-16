import React from "react";
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
    useGSAP(()=>{
           // GSAP ScrollTrigger animation setup
    gsap.utils.toArray('.reveal-from-right').forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element, // The element that triggers the animation
            start: 'top 0%', // Trigger when the top of the element reaches 80% of the viewport
            end: 'bottom 20%', // End when the bottom of the element reaches 20% of the viewport
            scrub: true, // Optional: makes the animation scrub based on scroll position
            markers: true, // Optional: shows markers for triggers and end
          },
          x: 200, // Start off-screen to the right
          opacity: 0, // Start invisible
          duration: 1, // Duration of animation
          ease: 'power3.out', // Smooth easing
        });
      });
    },[])
    return <>
        <div className="outer-container">

            <Lines />
            <div className="uni-up-margin"></div>
            <div className="mega-cont-flex-2 uni-up-margin">


                <div className="tagline-cont text-center ">
                    <h1 className=" font-bold  text-[10rem] max-w-420:text-[2.5rem] text-[#458661] homemade-apple-regular birthstone-regular">
                        Ishwari Designs LLP

                    </h1>
                    <h3 className=" text-red-500 text-4xl max-w-420:text-2xl mt-6 share-tech">Interiors | Design | Event | Architecture | Spaces</h3>

                    <div className="mt-8 relative">

                        <Link to='/services'
                            className="relative share-tech bg-[#fff5e1] text-[#458661] border-solid border-2 border-[#458661] py-3 px-11 pr-14 transition-all duration-300 mt-3 rounded-[2rem]" >

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
                                    className="relative share-tech bg-[#fff5e1] text-[#458661] border-solid border-2 border-[#458661] py-3 px-11 pr-14 transition-all duration-300 mt-3 rounded-[2rem]" >

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





            <section id="About Us" className="mt-24">

                <h1 className="text-[#458661] text-center  font-medium text-[4rem] max-w-420:text-[3.2rem] max-w-420:mb-[2rem]">About Us</h1>
                <div className="mega-grid-2-home justify-end flex-wrap-reverse">
                   

                    <div className="info-about-cont w-[30rem]  max-w-420:w-[90%] justify-around max-w-420:mr-[0rem] max-w-420:mb-[1.5rem]">
                        <p className="share-tech text-home max-w-420:text-lg">
                            An architect with a passion for interior design and event planning. I graduated from Bharati Vidyapeeth College of Architecture, Mumbai University, and bring creativity and precision to every project I work on.

                            <p className='share-tech text-home mr-5 mt-3 max-w-420:text-lg'> My design process starts by understanding the client’s vision and needs. Whether it's architecture, interior design, or event planning, I focus on blending functionality with aesthetic appeal to create spaces that reflect the client’s personality and style. I enjoy experimenting with materials, colors, and layouts to produce innovative, timeless designs.
                            </p>
                        </p>
                    </div>
                    <div className="photo-cont max-w-420:mb-[1.5rem] relative z-0 overflow-visible">
                    <div className="abs absolute -top-[3rem] -right-[4rem] -z-10">
                        <img className="w-[1rem]"src={leaf} alt="" />
                    </div>
                    <div className="abs absolute  -bottom-[3rem] -left-[4rem] -z-10">
                        <img className="w-[1rem]"src={leaf} alt="" />
                    </div>
                    <div className="absolute"></div>
                        <img src={profileImg} alt="" />
                    </div>
                </div>

            </section>



        </div>

    </>
}
export default Home;