
import { useState } from "react";
import './card.scss'
const Card = ({ title, description, img }) => {
    return <>
        <div className="card m-8">


            <div class="post shadow-lg shadow-cyan-500">
                <div class="post-container">
                    <div class="post-title">
                        <h1>{title}</h1>
                        <h3>Sonatas for piano and<br /> violin nos. 5, 8, & 9</h3>
                    </div>

                    <div class="post-meta">
                    <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  hover:bg-indigo-500"
              >
               Contact
              </a>
                    </div>
                </div>
            </div>

            
        </div>
    </>

}
export default Card;