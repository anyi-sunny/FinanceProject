import React from 'react';
import '../Style/Carousel.css'

//next thing to do - add description or just an overall sort of welcome
//instead of dots, change the logic so that we have two buttons on the side that overlap the slides

// const colors = ["#59C9A5", "#EF6F6C", "#FFEE93"]
const colors = ["#59C9A5", "#59C9A5", "#59C9A5"]
const text = ["Student", "Finance", "Simplified"]
const delay = 5000;

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
                        <div className="slide" key={index} style={{ backgroundColor }}>
                            <h1 className='headers'>{text[index]}</h1>
                        </div>
                        
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
}

export default Carousel