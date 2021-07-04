import React from 'react';
// import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
// import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import {GoLocation} from "react-icons/go";
import {FaCalendarDay} from "react-icons/fa";

function Ics() {
    return (
        <div style={{paddingRight:"75px"}} className="Ics">
        <h2 style={{fontFamily:"'Bebas Neue', cursive",fontWeight:"900",fontSize:"40px"}}>ICS </h2>
        <h4 style={{color:"white"}}>ML Intern</h4>
        <br/>
        <ol style={{listStyle:"none",display:"flex"}}>
            <li className="cal1" style={{paddingRight:"75px"}}><FaCalendarDay/><span>March–April 2021</span></li>
            <li className="loc1"><GoLocation/><span>Bangalore, Karnataka</span></li>
        </ol>
            <p></p>
        <p style={{fontSize:"1rem",letterSpacing:"0.5",color:"$black",fontWeight:"700"}}>
            ICS is a digital service provider that aims to provide software,
designing and marketing solutions to individuals and businesses.
At ICS, we believe that service and quality is the key to success.
We provide all kinds of technological and designing solutions
from Billing Software toWeb Designs or any custom demand
that you may have. Experience the service like none other!
My task was to predict the price of the automobile from the
given raw data where these data has to be cleaned, assign the
unknowns with their appropriate value(all these are involved
in the cleaning of the data), and by using a different algorithm,
I had to predict which is the best algorithm that can be used
to predict the above mentioned, and I had to give a complete
report for the following.<br/>
Technologies: Python, Jupyter notebook
        </p>
        <a style={{color:"black",fontWeight:"400",textDecoration:"underline"}} href="https://drive.google.com/file/d/1L0vdOWM1Et5EYbkBSSje0XpKOsH8Klei/view?usp=sharing" target="_blank">Click Here to view the report</a>
        </div>
    )
}

export default Ics
