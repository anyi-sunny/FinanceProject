import React from 'react';
import '../Style/About.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About (){


    const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
    
    return ( 
            <div className="shell">
                <div className='innershell'>
                <Slider {...settings}className='slider'>
                    {data.map((d, index)=> (
                        <div key={index} className='slideAbout'>
                            <div className='rounded'>
                                <img src ={d.img} alt ="" className='image' />
                            </div>

                            <div className='text'>
                                <p className='name'>  {d.name}</p>
                                <p>{d.text}</p>
                                <button className="button">  Contact Me </button>
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>
            </div>
    )

}

const data = [
    { name: "Anyi",
        img: "finance-project/public/images/Anyi.png",
        text: "thats you",
    },
    {
        name: "Kyle",
        img: "data:image/jpeg;base64,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",
        text: "thats me",
    }

]


export default About