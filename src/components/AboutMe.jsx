import profileImg from '../assets/image0.jpeg'
import logo from '../assets/logo_ishu.jpg'


const AboutMe = () => {
  return <>
    <div className="mega-cont-flex-2-no-margin mt-24 max-w-420:mb-16 overflow-clip">

      <div className="absolute top-[7.5rem] -left-20 -rotate-90 max-w-420:opacity-0 ">
        <h1 className="share-tech text-6xl text-[#149262] opacity-[0.4]">
          I | D E A S
        </h1>
      </div>
      <div
        className="absolute bottom-0 -left-10 max-w-420:-left-48 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative aspect-[2/3] w-[30rem] max-w-420:h-screen bg-gradient-to-tr from-[#006400] via-[#32CD32] to-[#90EE90] opacity-80"
          style={{
            clipPath:
              "polygon(50% 0%, 60% 20%, 75% 35%, 65% 50%, 75% 70%, 50% 100%, 35% 70%, 45% 50%, 25% 35%, 40% 20%)",
          }}
        ></div>
      </div>


      <div className="profile-content-cont pl-5">
        <h1 className="share-tech big-title">Hello</h1>
        <h1 className="share-tech big-title text-[#149262]">i'm Ishwari Salunkhe</h1>
        <p className="share-tech text mr-5 max-w-420:text-lg">
          An architect with a passion for interior design and event planning. I graduated from Bharati Vidyapeeth College of Architecture, Mumbai University, and bring creativity and precision to every project I work on.

          <p className='share-tech text mr-5 mt-3 max-w-420:text-lg'> My design process starts by understanding the client’s vision and needs. Whether it's architecture, interior design, or event planning, I focus on blending functionality with aesthetic appeal to create spaces that reflect the client’s personality and style. I enjoy experimenting with materials, colors, and layouts to produce innovative, timeless designs.
          </p>
        </p>
      </div>
      <div className="profile-photo-cont">
        <img src={profileImg} alt="" />
      </div>


      <div className="right-bottom-overlay"></div>
    </div>

    

  </>
}
export default AboutMe;