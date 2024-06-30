import React from 'react';
import '../Style/About.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function About (){


    const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 0,
    
  };
    
    return ( 
        <div>
            <NavBar/>
            <div className="shell">
                <div className='innershell'>
                <Slider {...settings}className='slider' />
            <div className="shell"> Our Mission
                <div className='mission'>Our Mission is to help students with as accessible source to answer all your student finance related questions. </div> 
                <div className='innershell' > Our Team
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
            </div>
            </div>
            <Footer/>
        </div>
    )

}

const data = [
    { name: "Anyi",
        img:`${process.env.PUBLIC_URL}/images/Anyi.png`,
        text: "It all started when I was on may way into college and worried about building credit. Now, I'm excited to share what I've learned and help other students who were in a place just like mine. ",
    },
    {
        name: "Kyle",
        img: `${process.env.PUBLIC_URL}/images/Kyle.jpg`,
        text: "thats me",
    }

]


export default About