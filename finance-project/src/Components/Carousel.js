import React from 'react';
import { useState } from "react";
import '../Style/Carousel.css'

function Carousel({ images }) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })
    }

    return (
        <div style={{ position: "relative" }}>
            <div style={{
                display: "flex", 
                overflow: "hidden", 
            }}>
                {images.map((url, index) => (
                <img
                    key={index}
                    src={url.image}
                    className="img-slider-img"
                    style={{ translate: `${-100 * imageIndex}%` }}
                />
                ))}
            </div>
            
            <button onClick={showPrevImage} className="img-slider-btn" style={{ left: 0 }}>
                &lt;
            </button>
            <button onClick={showNextImage} className="img-slider-btn" style={{ right: 0 }}>
                &gt;
            </button>

            {/* <img src={images[imageIndex].image} className="img-slider-img" alt={images[imageIndex].title}/>
            <button onClick={showPrevImage} className="img-slider-btn" style={{ left: 0 }}>
                &lt;
            </button>
            <button onClick={showNextImage} className="img-slider-btn" style={{ right: 0 }}>
                &gt;
            </button> */}
        </div>
    )
}

export default Carousel