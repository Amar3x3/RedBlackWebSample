import profileImg from '../assets/image1.jpeg'
import logo from '../assets/logo_ishu.jpg'
import { Link } from 'react-router-dom'



const AboutMe = () => {
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
            Designing Dreams, Building Realities
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl share-tech">
            Blending creativity and precision to craft spaces that inspire and endure.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to='/contact'
                className=" relative share-tech bg-[#fff5e1] text-[#458661] border-solid border-2 border-[#458661] standard-btn hover:border-[#e2904c] hover:text-[#e2904c] py-3 px-11 pr-14 transition-all duration-300 mt-3 rounded-[2rem]" >

                Contact Us

                <div className="absolute top-[44%] right-8 w-[0.5rem] h-[0.5rem] btn-circle rounded-[50%]"></div>

              </Link>

            </div>
          </div>
        </div>
        {/* Bottom gradient */}

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl max-w-420:top-[calc(100%-30rem)]"
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

    <div className="relative z-20 w-[70%] max-w-420:w-[90%] max-w-420:flex-col m-auto p-[1.2rem] flex items-start justify-between  flex-wrap bg-[#458661] rounded-[1.5rem]">
      <div className="img-cont-abt bg-white m-[1rem] w-[18rem] h-[18rem] rounded-[2rem]"></div>
      <div className="w-[0.3rem] h-[20rem] bg-[#fff5e1] max-w-420:h-[0.2rem] max-w-420:w-[100%]"></div>
      <div className="info-cont-abt text-[#fff5e1] share-tech p-[1rem] w-[calc(100%-28rem)] max-w-420:w-[100%] text-[1.3rem] max-w-420:text-[1.1rem]">
      IDEAS by Ishwari Designs LLP is an independent design firm based in Navi Mumbai, established in 2024. Led by Principal Architect and Designer Ishwari Salunkhe, the firm specializes in creating exceptional interiors, architecture, and events. With a passion for curating beautiful, functional spaces, Ishwari brings a personal touch to every project. Each design reflects not only her creative vision but also the unique personality and preferences of her clients, crafting spaces that tell a meaningful and distinct story.
      </div>
    </div>

    <div className="relative mt-[5.5rem] z-20 w-[70%] max-w-420:w-[90%] max-w-420:flex-col m-auto p-[1.2rem] flex items-start justify-between  flex-wrap bg-[#eed7ab] rounded-[1.5rem]">
      <div className="img-cont-abt bg-white m-[1rem] w-[18rem] h-[18rem] rounded-[2rem]"></div>
      <div className="w-[0.3rem] h-[20rem] bg-[#458661] max-w-420:h-[0.2rem] max-w-420:w-[100%]"></div>
      <div className="info-cont-abt text-[#458661] share-tech p-[1rem] w-[calc(100%-28rem)] max-w-420:w-[100%] text-[1.3rem] max-w-420:text-[1.1rem]">
      IDEAS by Ishwari Designs LLP is an independent design firm based in Navi Mumbai, established in 2024. Led by Principal Architect and Designer Ishwari Salunkhe, the firm specializes in creating exceptional interiors, architecture, and events. With a passion for curating beautiful, functional spaces, Ishwari brings a personal touch to every project. Each design reflects not only her creative vision but also the unique personality and preferences of her clients, crafting spaces that tell a meaningful and distinct story.
      </div>
    </div>

    <div className="relative mt-[5.5rem] z-20 w-[70%] max-w-420:w-[90%] max-w-420:flex-col m-auto p-[1.2rem] flex items-start justify-between  flex-wrap bg-[#458661] rounded-[1.5rem]">
      <div className="img-cont-abt bg-white m-[1rem] w-[18rem] h-[18rem] rounded-[2rem]"></div>
      <div className="w-[0.3rem] h-[20rem] bg-[#fff5e1] max-w-420:h-[0.2rem] max-w-420:w-[100%]"></div>
      <div className="info-cont-abt text-[#fff5e1] share-tech p-[1rem] w-[calc(100%-28rem)] max-w-420:w-[100%] text-[1.3rem] max-w-420:text-[1.1rem]">
      IDEAS by Ishwari Designs LLP is an independent design firm based in Navi Mumbai, established in 2024. Led by Principal Architect and Designer Ishwari Salunkhe, the firm specializes in creating exceptional interiors, architecture, and events. With a passion for curating beautiful, functional spaces, Ishwari brings a personal touch to every project. Each design reflects not only her creative vision but also the unique personality and preferences of her clients, crafting spaces that tell a meaningful and distinct story.
      </div>
    </div>

    <div className="relative mt-[5.5rem] mb-[6rem] z-20 w-[70%] max-w-420:w-[90%] max-w-420:flex-col m-auto p-[1.2rem] flex items-start justify-between  flex-wrap bg-[#eed7ab] rounded-[1.5rem]">
      <div className="img-cont-abt bg-white m-[1rem] w-[18rem] h-[18rem] rounded-[2rem]"></div>
      <div className="w-[0.3rem] h-[20rem] bg-[#458661] max-w-420:h-[0.2rem] max-w-420:w-[100%]"></div>
      <div className="info-cont-abt text-[#458661] share-tech p-[1rem] w-[calc(100%-28rem)] max-w-420:w-[100%] text-[1.3rem] max-w-420:text-[1.1rem]">
      IDEAS by Ishwari Designs LLP is an independent design firm based in Navi Mumbai, established in 2024. Led by Principal Architect and Designer Ishwari Salunkhe, the firm specializes in creating exceptional interiors, architecture, and events. With a passion for curating beautiful, functional spaces, Ishwari brings a personal touch to every project. Each design reflects not only her creative vision but also the unique personality and preferences of her clients, crafting spaces that tell a meaningful and distinct story.
      </div>
    </div>

  

  </>
}
export default AboutMe;