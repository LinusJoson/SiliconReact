import React from 'react'

const Hero = () => {
  return (
<section id="hero" className="hero">
            <div className="container">
                <div className="first-column">
                    <h1>Manage all your Money in One App</h1>
                    <p>We offer a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                    <div className="download-apps">
                        <a href="#" className="btn download-app appstore">
                            <img src="images/Header/Applelogo.svg" alt=""/>
                            <div className="text">Download on the</div>
                            <h3>App Store</h3>
                        </a>
                        <a href="#" className="btn download-app googleplay">
                            <img src="images/Header/Googlelogo.svg" alt="Google play store"/>
                            <div className="text">GET IT ON</div>
                            <h3>Google Play</h3>
                        </a>
                    </div>
                    <a href="#features" className="btn btn-circle discover-more">
                        <i className="fa-solid fa-chevron-down"></i>
                           Discover more
                    </a>
                </div>
                <div className="second-column">
                    <img src="images/Header/hero-phones.svg" alt=""/>
                </div>
            </div>
        </section>
  )
}

export default Hero
