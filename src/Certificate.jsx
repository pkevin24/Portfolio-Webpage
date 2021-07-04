import React from 'react'
import Headcert from './certi/Headcert'
import ImageSlider from './certi/ImageSlider'
import Internship from './Internship'
import { SliderData } from './certi/SliderData'
import Zoom from 'react-reveal/Zoom';

function Certificate() {
    return (
        <div className="cer">
        <Headcert className="hc"/>
        <Zoom>
            <section>
            <ImageSlider slides={SliderData}/>
            </section>
        </Zoom>
        
            
        </div>
        
        
    )
}

export default Certificate
