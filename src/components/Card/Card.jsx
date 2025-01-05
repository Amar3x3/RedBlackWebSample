import { useState } from "react";
import './card.scss';
import { motion } from "framer-motion";


 
const Card = ({ title, subpoints }) => {
    const cardVariants = {
        hidden: { x: "-100vw", opacity: 0 },
        visible: (i) => ({
          x: 0,
          opacity: 1,
          transition: { delay: i * 0.2, type: "spring", stiffness: 50 },
        }),
      };
    
    return (
        <motion.div className="ml-[1rem] mr-[1rem] m-8">
            <div className="post shadow-lg shadow-cyan-500">
                <div className="post-container">
                    <div className="post-title share-tech">
                        <h1 className="share-tech">{title}</h1>
                    </div>

                    {subpoints && subpoints.length > 0 && (
                        <ul className="post-subpoints mt-4 list-disc pl-6">
                            {subpoints.map((point, index) => (
                                <li key={index} className="text-gray-600 text-lg share-tech">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="post-meta mt-4">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
