import { useState } from "react";
import './card.scss';

const Card = ({ title, subpoints }) => {
    return (
        <div className="ml-[1rem] mr-[1rem] m-8">
            <div className="post shadow-lg shadow-cyan-500">
                <div className="post-container">
                    <div className="post-title">
                        <h1>{title}</h1>
                    </div>

                    {subpoints && subpoints.length > 0 && (
                        <ul className="post-subpoints mt-4 list-disc pl-6">
                            {subpoints.map((point, index) => (
                                <li key={index} className="text-gray-600 text-lg">
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
        </div>
    );
};

export default Card;
