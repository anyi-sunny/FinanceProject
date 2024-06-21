import React from 'react';
import '../Style/Carousel.css'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const colors = ["#59C9A5", "#EF6F6C", "#FFEE93"]
const delay = 2500;

function Carousel({ images }) {
    const [index, setIndex] = React.useState(0)
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = 
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ), 
        delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div>
            <div className="slideshow">
                <div 
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {colors.map((backgroundColor, index) => (
                        <div className="slide" key={index} style={{ backgroundColor }}/>
                    ))}
                </div>
            </div>
            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
        
    )

    // const settings = {
    //     dots: true, 
    //     infinite: true, 
    //     autoplay: true,
    //     autoplaySpeed: 3500, 
    //     pauseOnHover: true, 
    //     slidesToShow: 1, 
    //     slidesToScroll: 1, 
    // }

    // return (
    //     <div className="shellCarousel">
    //         <Slider {...settings} className="slider">
    //             {images.map((image, index) => (
    //                 <div key={index} className="slideCarousel">
    //                     <div className="roundedCarousel">
    //                         <img src={image.image} alt="" className="imageCarousel" />
    //                     </div>
    //                 </div>
    //             ))}
    //         </Slider>
    //     </div>
    // )
    // const [imageIndex, setImageIndex] = useState(0)

    // function showNextImage() {
    //     setImageIndex(index => {
    //         if (index === images.length - 1) return 0
    //         return index + 1
    //     })
    // }

    // function showPrevImage() {
    //     setImageIndex(index => {
    //         if (index === 0) return images.length - 1
    //         return index - 1
    //     })
    // }

    // return (
    //     <div style={{ width: "100%", height: "100%", position: "relative" }}>
    //         <div style={{
    //             display: "flex", 
    //             overflow: "hidden", 
    //         }}>
    //             {images.map((url, index) => (
    //             <img
    //                 key={index}
    //                 src={url.image}
    //                 className="img-slider-img"
    //                 style={{ translate: `${-100 * imageIndex}%` }}
    //             />
    //             ))}
    //         </div>
            
    //         <button onClick={showPrevImage} className="img-slider-btn" style={{ left: 0 }}>
    //             &lt;
    //         </button>
    //         <button onClick={showNextImage} className="img-slider-btn" style={{ right: 0 }}>
    //             &gt;
    //         </button>

    //         {/* <img src={images[imageIndex].image} className="img-slider-img" alt={images[imageIndex].title}/>
    //         <button onClick={showPrevImage} className="img-slider-btn" style={{ left: 0 }}>
    //             &lt;
    //         </button>
    //         <button onClick={showNextImage} className="img-slider-btn" style={{ right: 0 }}>
    //             &gt;
    //         </button> */}
    //     </div>
    // )
}

export default Carousel