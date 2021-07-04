import React from 'react'
import ImageSlider from './components/ImageSlider'
import { SliderData } from './components/SliderData'
import "./App.css";
import Headcert from './Headcert';

const App = () => {
  return (
    <>
        <Headcert className="hc"/>
        <ImageSlider slides={SliderData}/>
    </>
  )
}

export default App
