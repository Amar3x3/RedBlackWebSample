import Card from "../Card/Card";
import './services.css'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const Services = () => {
  const cardVariants = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.2, type: "spring", stiffness: 50 },
    }),
  };
  const cardsData = [

    {
      title: "Interiors Design",
      subpoints: ["Residential", "Commercial", "Home styling & decor"],
      description:"We create personalized and inspiring interiors that reflect your style and meet your needs, focusing on comfort, functionality, and visual harmony"
    },
    {
      title: "Architecture Design",
      subpoints: ["New Builds: Designing residential and commercial structures.", "Renovations & Extensions", "Conceptual Architecture"],
      description:"We offer comprehensive architectural services that combine aesthetic vision with structural integrity, ensuring each project aligns with your needs and environment."
    },
    {
      title: "Architecture",
      subpoints: ["Modern designs", "Residential", "Commercial"],
      description:"We specialize in curating unforgettable events, from corporate gatherings to weddings, ensuring every detail is aligned with your vision and purpose."
    },
    {
      title: "Event Design & Curation",
      description: "We specialize in curating unforgettable events, from corporate gatherings to weddings, ensuring every detail is aligned with your vision and purpose.",
      subpoints: ["Event Planning & Design", "Venue Styling", "Corporate Events", "Weddings & Special Occasions", "Holiday Events"],
    },
    {
      title: "Project Management & Consultation",
      subpoints: ["End-to-End Project Management", "Design Consultation", "Vendor & Contractor Coordination", "Budget & Timeline Management"],
      description:"We provide end-to-end project management and expert consultation to ensure seamless execution, within budget and on time."
    },
    {
      title: "Custom Design Solutions",
      subpoints: ["Bespoke Furniture Design", "Art & Decor Curation", "Lighting Design"],
      description:"Every space is unique, and we offer tailored design solutions to meet your specific needs."
    },
    {
      title: "Trading of Materials",
      subpoints: ["Building Materials", "Interior Furnishings", "Premium Materials"],
      description:"We source and supply high-quality materials for your design and construction needs."
    }

  ];
  return <>
    <div className="full-screen-service  w-screen text-center">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Gradient background */}
        <div
          className="absolute inset-x-0 -top-40 max-w-420:-top-6 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fa70aa] to-[#06e6da] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>

        </div>
        {/* Main content */}
        <div className="mx-auto max-w-2xl py-32 ">

          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-[#458661] sm:text-7xl share-tech">
              Your Story Inspires Your Space
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl share-tech">
              We Believe that Spaces should tell a Story - Your Story
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to='/'
                className=" relative share-tech bg-[#fff5e1] text-[#458661] border-solid border-2 border-[#458661] standard-btn hover:border-[#e2904c] hover:text-[#e2904c] py-3 px-11 pr-14 transition-all duration-300 mt-3 rounded-[2rem]" >

                Blogs

                <div className="absolute top-[44%] right-8 w-[0.5rem] h-[0.5rem] btn-circle rounded-[50%]"></div>

              </Link>

            </div>
          </div>
        </div>
        {/* Bottom gradient */}

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </div>
    <div className="cards-container flex justify-center align-middle m-2 flex-wrap ">
      {cardsData.map((card, index) => (
        <div

        >
          <Card
            key={index}
            title={card.title}
            description={card.description}
            subpoints={card.subpoints}
          />
        </div>
      ))}

    </div>
  </>
}
export default Services;