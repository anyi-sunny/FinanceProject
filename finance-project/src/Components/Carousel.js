import React from 'react';
import '../Style/Carousel.css'

function Carousel({ images }) {
    return (
        <div className="carousel">
            <div className="carousel_wrapper">
                {images.map((image, index)=> {
                    return(
                        <div key={index} className="carousel_card">
                            <img className="card_image" src={image.image} alt="" />
                            <div className="card_overlay">
                                <h2 className="card_title">{image.title}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel