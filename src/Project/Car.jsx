import React from 'react';
import Fade from 'react-reveal/Fade';

function Car() {
    return (
        <div style={{paddingRight:"75px"}} className="Car">
        <h2 style={{fontFamily:"'Bebas Neue', cursive",fontWeight:"900",fontSize:"40px",marginLeft:"50px"}}>Car price prediction</h2>
        {/* <h4 style={{color:"white"}}>ML Intern</h4> */}
        <br/>
        {/* <ol style={{listStyle:"none",display:"flex"}}> */}
            {/* <li className="cal1" style={{paddingRight:"75px"}}><FaCalendarDay/><span>March 2021–</span></li> */}
            {/* <li className="loc1"><GoLocation/><span>Bangalore, Karnataka</span></li> */}
        {/* </ol> */}
        <Fade right>
        <p style={{fontSize:"1rem",letterSpacing:"0.5",color:"$black",fontWeight:"700",marginLeft:"50px"}}>
        • I was introduced to Machine learning and did brainstorming of python was done. Linear regression, logistics regression, and their types were also introduced. In the end, we had to build a project where we had to predict the price of the automobile. 
        <br/>
• The main focus was on data cleaning, where they were many missing values. Until these values are filled, these parameters cannot be used for training the algorithm. Also, by plotting graphs, we had to conclude from the dataset. 
<br/>
• Using different regression methods, we had to choose the appropriate algorithm based on their accuracy score to predict the price of the automobile. 
<br/>
• A detailed report had to be prepared where I had to draw conclusions based on my findings and why the following algorithm is should be chosen, and the format of the report was based on the corporate level.
<br/>
{/* <iframe src="https://drive.google.com/file/d/1L0vdOWM1Et5EYbkBSSje0XpKOsH8Klei/view?usp=sharing" style="width:100%; height:600px; border:0;"></iframe> */}


        </p>
        </Fade>
        <Fade left>
        <iframe src="https://drive.google.com/file/d/1L0vdOWM1Et5EYbkBSSje0XpKOsH8Klei/preview"  allow="autoplay" className="embedpdf"></iframe>
        </Fade>
        
        {/* <iframe src="https://drive.google.com/file/d/1L0vdOWM1Et5EYbkBSSje0XpKOsH8Klei/view?usp=sharing" height="200" width="300" title="Iframe Example"></iframe> */}
        {/* <a style={{color:"black",fontWeight:"400",textDecoration:"underline"}} href="https://rainprediction-api.herokuapp.com/" target="_blank">• Click here to get the deployed webpage:</a> */}
        </div>
    )
}

export default Car
