import React from 'react';
// import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
// import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import {GoLocation} from "react-icons/go";
import {FaCalendarDay} from "react-icons/fa";

function Homeauto() {
    return (
        <div style={{paddingRight:"75px"}} className="Ics">
        <h2 style={{fontFamily:"'Bebas Neue', cursive",fontWeight:"900",fontSize:"40px"}}>IOT based Home automation</h2>
        {/* <h4 style={{color:"white"}}>ML Intern</h4> */}
        <br/>
        <ol style={{listStyle:"none",display:"flex"}}>
            <li className="cal1" style={{paddingRight:"75px"}}><FaCalendarDay/><span>March 2021–</span></li>
            {/* <li className="loc1"><GoLocation/><span>Bangalore, Karnataka</span></li> */}
        </ol>
            <p></p>
        <p style={{fontSize:"1rem",letterSpacing:"0.5",color:"$black",fontWeight:"700"}}>
        • To ease the life of any being, by helping them
to save energy and money, we implemented a
project whereby using various sensors we get
data and control environments like home.
• As a part of the group project, my role was to
predict the rainfall using different ML models
and was focused more on deployment which
was done through Heroku.

        </p>
        <a style={{color:"black",fontWeight:"400",textDecoration:"underline"}} href="https://rainprediction-api.herokuapp.com/" target="_blank">• Click here to get the deployed webpage:</a>
        </div>
    )
}

export default Homeauto
