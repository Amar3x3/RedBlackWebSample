import Marquee from "react-fast-marquee";
import './style.css'
const SlidingText = () => {
    return <>
        <div className="f text-8xl italic">
        <Marquee speed={150} className="text-8xl">
            I can be a React component, multiple React components, or just some text.
        </Marquee>
        </div>
    </>
}
export default SlidingText;