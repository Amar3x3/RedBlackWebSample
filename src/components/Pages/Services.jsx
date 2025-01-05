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
      title: "Interiors",
      subpoints: ["Residential", "Commercial", "Home styling & decor"],
    },
    {
      title: "Design",
      subpoints: ["Graphic Design", "Web Design", "Advertising Design"]
    },
    {
      title: "Architecture",
      subpoints: ["Modern designs", "Residential", "Commercial"],
    },
    {
      title: "Events",
      description: "Crafting memorable experiences.",
      subpoints: ["Corporate events", "Social Events", "Cultural Events", "Pop up Events", "Holiday Events"],
    },
    {
      title: "Materials",
      subpoints: ["Construction", "Flooring", "Door & Windows", "Wall Paints", "Electrical"]
    },
    {
      title: "Spaces",
      subpoints: ["Outdoor living spaces", "Offices", "Resturant", "Cafe / Coffee Shop", "Creative Space", "Photo Zones"]
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
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl share-tech">
              Your Story Inspires Your Space
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
              We Believe that Spaces should tell a Story - Your Story
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to='/blogs'
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 share-tech"
              >
                View Blogs
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