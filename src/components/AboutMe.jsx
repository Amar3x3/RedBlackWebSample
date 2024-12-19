import profileImg from '../assets/profile.png'


const AboutMe = () =>{
    return<>
        <div className="mega-cont-flex-2-no-margin">
            <div className="left-top-overlay"></div>

            <div className="profile-content-cont">
                <h1 className="share-tech big-title">Hello</h1>
                <h1 className="share-tech big-title">i'm Amar Gaikwad</h1>
                <p className="share-tech text"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum culpa rem nulla temporibus dolorem ex, quos ad! Earum iste eius odit dolorum rem fugiat. Eos nobis sit quas ut!
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