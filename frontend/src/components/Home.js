import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import './Home.css';

function Home() {
    const [slideIndex, setSlideIndex] = useState(1);
    let slideTimer;

    useEffect(() => {
        showSlides(slideIndex);
        startSlideTimer();
        return () => clearTimeout(slideTimer);
    }, [slideIndex]);

    function plusSlides(n) {
        setSlideIndex(prevIndex => prevIndex + n);
        resetSlideTimer();
    };

    function currentSlide(n) {
        setSlideIndex(n);
        resetSlideTimer();
    };

    function showSlides(n) {
        const slides = document.getElementsByClassName("fact-slide");
        const dots = document.getElementsByClassName("dot");
        let i;
        if (slides.length === 0 || dots.length === 0) return;

        if (n > slides.length) { setSlideIndex(1); return; }
        if (n < 1) { setSlideIndex(slides.length); return; }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    };

    function startSlideTimer() {
        slideTimer = setTimeout(() => {
            plusSlides(1);
        }, 15000);
    };

    function resetSlideTimer() {
        clearTimeout(slideTimer);
        startSlideTimer();
    };

    return (
        <div className="home-container">
            <div className="container-left">
                <p className="contact-div-title">
                    Contact Me:
                </p>
                <div className="contact-div">
                    <p className="contact-div-p">Cassandra Bryan</p>
                    <p className="contact-div-p">ccbmnre@gmail.com</p>
                    <div className="social-fa-div">
                        <Link to="http://www.instagram.com/seeseebe7" className="social-fa-link">
                            <FaInstagram className="social-fa" />
                        </Link>
                        <Link to="http://www.twitter.com/seeseebe7" className="social-fa-link">
                            <FaTwitter className="social-fa" /></Link>
                    </div>
                    <p className="contact-div-p">@seeseebe7</p>
                </div>
                <p className="fun-fact-div-title">Fun Facts:</p>
                <div className="slideshow-container">
                    <div className="fun-fact-div">
                        <div className="fact-slide">
                            <div className="quote-div">
                                <p className="quote-p">
                                    Ibn al-Haytham, known as the "father of modern optics," demonstrated the first known pinhole camera over 1000 years ago.<sup><Link to="https://vimeo.com/212900054">[1]</Link></sup></p>

                                <p className="quote-p">
                                    In his <span className="home-bold-title">Book of Optics</span> (كتاب المناظر), written from 1011 to 1021, he also described a camera obscura, refraction, light and color theory, and the first accurate theory of vision.<sup><Link to="https://en.wikipedia.org/wiki/Book_of_Optics">[2]</Link></sup>
                                </p>
                            </div>
                        </div>
                        <div className="fact-slide">
                            <div className="quote-div">
                                <p className="quote-p">
                                    The oldest surviving photograph is <span className="home-bold-title">View from the Window at Le Gras</span> (<span className="home-bold-title">Point de vue du Gras</span>), taken in 1826 by French inventor Nicéphore Niépce.<sup><Link to="https://en.wikipedia.org/wiki/View_from_the_Window_at_Le_Gras">[1]</Link></sup></p>

                                <p className="quote-p">
                                    It is a heliographic image made using a camera obscura projecting the scene onto a pewter plate thinly coated with bitumen of Judea, with a mixture of oil of lavender and white petroleum as a developer.
                                </p>
                            </div>
                        </div>
                        <div className="fact-slide">
                            <div className="quote-div">
                                <p className="quote-p">
                                    Scholarly debate exists as to whether the Shroud of Turin is a camera obscura photograph.</p>

                                <p className="quote-p">
                                    In his paper <span className="home-bold-title">Verification of the Nature and Causes for the Photo-negative Images on the Shroud of Lirey-Chambéry-Turin</span>,<sup><Link to="https://www.academia.edu/26329307/Verification_of_the_Nature_and_Causes_for_the_Photo_negative_Images_on_the_Shroud_of_Lirey_Chamb%C3%A9ry_Turin">[1]</Link></sup> Prof. Nicholas Allen demonstrates, in precise mathematical terms, that the image could have been formed using technology and materials easily available in the Middle Ages, the time period within which carbon dating places its creation.
                                </p>
                            </div>
                        </div>
                        <div className="fact-slide">
                            <div className="quote-div">
                                <p className="quote-p">
                                    The "kamra-e-feoree," also known as an "instant camera" or Afghan box camera, is a homemade photographic method dating back to the 19th century.<sup><Link to="https://www.afghanboxcamera.com/abcp_about_bcp.htm">[1]</Link></sup></p>

                                <p className="quote-p">
                                    The wooden box build is completely manual, using no electricity and no film. With only water used as a developer, the resulting images are often referred to as 'water photographs.''
                                </p>
                            </div>
                        </div>
                        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                    </div>
                    <div className="dot-container">
                        <span className="dot" onClick={() => currentSlide(1)}></span>
                        <span className="dot" onClick={() => currentSlide(2)}></span>
                        <span className="dot" onClick={() => currentSlide(3)}></span>
                        <span className="dot" onClick={() => currentSlide(4)}></span>
                    </div>
                </div>
            </div>
            <div className="container-right">
                <h2 className="home-h2-top">Camera Calculators</h2>
                <h2 className="home-h2-bottom">Camera Calculators</h2>
                <p className="home-link-buttons-p">Calculators:</p>
                <div className="home-link-buttons">
                    <Link to="/pinhole" className="home-link-button">Pinhole</Link>
                    <Link to="/simplelens" className="home-link-button">Simple Lens</Link>
                    <Link to="/cameraobscura" className="home-link-button">Camera Obscura</Link>
                </div>
                <p className="project-welcome-p">
                    Welcome to my camera calculation tool!
                </p>
                <div className="project-intro-div">
                    <p className="project-intro-p">
                        Have you ever looked at a random object and thought "I could make a camera out of that"? I have, and it sparked a deep dive into homemade camera builds and photographic materials inspired by a range of things from the simplicity of the construction paper bleaching those of us who grew up under the hot desert sun used to do, to the more complex principles of archaeological and modern optics.
                    </p>
                    <p className="project-intro-p">
                        My goal with this project is to facilitate the construction and testing of primitive and other homemade camera builds using various easily-obtained materials, and to substantiate results in a concrete way. When everything is precisely quantifiable, "trial and error" alone as an approach is simply not enough.
                    </p>
                    <p className="project-intro-p">
                        That said, this is an ever-evolving project, and adjustments will be made to the formulas as needed. Some of these are highly customized for my own personal experimentation (for example, with water as a lens).
                    </p>
                    <p className="project-intro-p">
                        Other things I will be tinkering with as the project evolves include:
                    </p>
                    <ul>
                        <li>Increased specificity as to ISO, types of photoreactive chemicals and surfaces, and the processes and materials used to make them, including equations geared toward identifying suitable materials;</li>
                        <li>More complex equations and, potentially, optical modeling to incorporate material thickness, refraction, and number of reflections, in order to experiment with things like cylinder seals in pinhole and camera obscura builds;</li>
                        <li>Similarly, pinpointing optimal placement and angles of internal mirrors and other reflective surfaces for certain camera builds, taking material reflectivity into account, in an effort toward light amplification;</li>
                        <li>Adding a separate calculator page for adaptation and experimentation with anthotyping and similar processes;</li>
                        <li>Slider inputs for exposure triangle calculation;</li>
                        <li>A calculator tool for modern photography &ndash; not a huge priority since these are so widely available and tend not to vary much, but, for the sake of being thorough, I'll add one down the line;</li>
                        <li>Backend database connection to save custom camera builds; and</li>
                        <li>Minor visual adjustments, like customizing radio buttons and displaying the formula used in a given calculation, along with the logic behind it and any updates thereto.</li>
                    </ul>
                    <p className="project-intro-p">
                        If you have any questions, comments, or corrections, or would like to contribute to or collaborate on this project, please feel free to contact me at <span className="home-intro-email">ccbmnre@gmail.com</span>.
                    </p>
                    <p className="project-intro-p">
                        Thank you!
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Home
