import React, { useState } from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';



const ImageSlider = ({slides}) => {
    const [cur,next]=useState(0);
    const length=slides.length;

    const nextSlide=()=>{
        next(cur==length-1?0:cur+1)
    }
    const prevSlide=()=>{
        next(cur===0?length-1:cur-1)
    }

    console.log(cur);
    if(!Array.isArray(slides)|| slides.length<=0){
        return null;
    }
    return (
        <section className="slider">
        
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide,index)=>{
            return(
                <div className={index===cur?'slide active':'slide'}key={index}>
                {index===cur && (<img src={slide.image} alt="" className='image'/>) }
                
                </div>
            )
        })}
        </section>
    )
}

export default ImageSlider
