import React from 'react'
// import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
// import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import {GoLocation} from "react-icons/go";
import {FaCalendarDay} from "react-icons/fa";
function InfiData() {
    return (
        
        <div className="infi">
            <div className="InfiData">
        <h2 style={{fontFamily:"'Bebas Neue', cursive",fontWeight:"900",fontSize:"40px"}}>InfiData </h2>
        <h4 style={{color:"	white"}}>Web development Intern and Trainee</h4>
        <br/>
        <ol style={{listStyle:"none",display:"flex", width:"80vw",paddingRight:"80px"}}>
            <li className="cal1" style={{paddingRight:"75px"}}><FaCalendarDay/>March–April 2021</li>
            <li className="loc1"><GoLocation/>Bangalore, Karnataka</li>
        </ol>
            <p style={{fontSize:"1rem",letterSpacing:"0.5",color:"$black",fontWeight:"700"}}>
            
             Infidata is an dynamic startup organization whose key focus area of domain expertise in industry verticals, customer focus by quickly aligning to client needs and company’s unique delivery model is well executed through collaborative network of partners.
 I worked there as a web development intern and Trainee,
where my basics of HTML, CSS were refreshed, and was introduced
to bootstrap,jquery and JavaScript, created few design
templates using the above tools during the internship.
 My task was to develop templates(Blood bank details),
mainly focusing on the designing part using CSS, bootstrap,
HTML.
        
         <br/>
 Technologies:
HTML, CSS, Bootstrap, mySQL
    </p>
        </div>
        </div>
    )
}

export default InfiData
