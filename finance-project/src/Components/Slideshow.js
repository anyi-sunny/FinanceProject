import React from 'react';
import './Slideshow.css'

function Slideshow() {
    const colors = ["#008FE", "#00C49F", "#FFBB28"];

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

export default Slideshow