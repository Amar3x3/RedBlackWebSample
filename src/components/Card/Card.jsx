import { useState } from "react";
import './card.scss';
import { motion } from "framer-motion";

import { Link, useLocation } from 'react-router-dom';

const Card = ({ title, subpoints }) => {
   

    return (
        <div className="ml-[1rem] mr-[1rem] m-8">
            <div className="post shadow-lg shadow-cyan-500">
                <div className="post-container">
                    <div className="share-tech">
                        <h1 className="share-tech text-[#fff5e1] font-bold text-[2.3rem]" >{title}</h1>
                    </div>

                    {subpoints && subpoints.length > 0 && (
                        <ul className="post-subpoints mt-4 list-disc pl-6">
                            {subpoints.map((point, index) => (
                                <li key={index} className="text-lg share-tech text-[#fff5e1]">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="post-meta mt-4">
                        <Link to='/'
                            className="relative share-tech bg-[#fff5e1] text-[#458661] border-solid border-2 border-[#458661] py-3 px-11 pr-14 transition-all duration-300 mt-3 rounded-[2rem]" >

                            Contact

                            <div className="absolute top-[44%] right-8 w-[0.5rem] h-[0.5rem] btn-circle rounded-[50%]"></div>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
