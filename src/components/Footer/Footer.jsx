import './footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return <>



        <footer class="section footer">
            <div class="footer__header">
                <a href="/" class="footer__logo">
                    <span class="logo primary"></span>
                </a>
                <ul class="social">
                    <li class="social__item">
                        <a href="#" target="_blank" class="btn social">
                            <span class="icon twitter"></span>
                        </a>
                    </li>
                    <li class="social__item">
                        <a href="#" target="_blank" class="btn social">
                            <span class="icon youtube"></span>
                        </a>
                    </li>
                    <li class="social__item">
                        <a href="#" target="_blank" class="btn social">
                            <span class="icon telegram"></span>
                        </a>
                    </li>
                    <li class="social__item">
                        <a href="#" target="_blank" class="btn social">
                            <span class="icon whatsapp"></span>
                        </a>
                    </li>
                </ul>
                <button type="button" onClick={scrollToTop} class="btn icon">
                    <span class="icon drop-up"></span>
                </button>
            </div>
            <ul class="footer__list">
                <li class="footer__item">
                    <Link to='/' class="footer__link">Home</Link>
                </li>
                <li class="footer__item">
                    <Link to='blogs' class="footer__link">Blogs</Link>
                </li>
                <li class="footer__item">
                    <Link to='services' class="footer__link">Services</Link>
                </li>
                <li class="footer__item">
                    <Link to='about' class="footer__link">About Me</Link>
                </li>
                <li class="footer__item">
                    <Link to='contact' class="footer__link">Contact Me</Link>
                </li>
                <li class="footer__item">
                    <Link to='projects' class="footer__link">Projects</Link>
                </li>
            </ul>
            <div class="footer__copyright">
                <p class="desc copyright">All rights reserved.</p>
            </div>
        </footer>


    </>

}
export default Footer;