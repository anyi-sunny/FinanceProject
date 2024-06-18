import React from 'react';
import './Slideshow.css'

const colors = ["blue", "red", "white"];

function Slideshow() {
    return (
        <div className="slideshow">
            <div className="slideshowSlider">
                {colors.map((backgroundColor, index) => (
                    <div classname="slide" key={index} style={{ backgroundColor }}></div>
                ))}
            </div>
            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div key={idx} className="slideshowDot"></div>
                ))}
            </div>
        </div>
    )
}

export default Slideshow;