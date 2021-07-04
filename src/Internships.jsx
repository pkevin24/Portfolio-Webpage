import React from 'react'
import Ics from './Interns/Ics'
import InfiData from './Interns/InfiData'
import './index'
import Fade from 'react-reveal/Fade';
import Hi from "./Hi"
function Internships() {
    return (
        <>
        {/* <section className="container">
            <div className="det1"><Ics/></div>
            <div className="pic1"><a href="https://drive.google.com/file/d/1MV-72mhOd9gMWbZvMzr5Q6XYv0b2slSB/view?usp=sharing"><img src="/Images/Ics.jpeg" alt="ICs"/></a></div>
            <div className="det2"><InfiData/></div>
            
            
        </section> */}
        <Hi className="hc" style={{marginTop:"32px"}}/>
        <section style={{paddingTop:"100px", marginRight:"23px"}} className="container">
        <div className="row">
        <Fade left>
        <div  className="col-lg-6 col-md-12 col-sm-12 col-12 ">
        <Ics/>
        </div>
        </Fade>
        <Fade right>
            
        <div style={{paddingLeft:"100px"}}class="col-lg-6 col-md-12 col-sm-12 col-12">
        <a href="https://drive.google.com/file/d/1MV-72mhOd9gMWbZvMzr5Q6XYv0b2slSB/view?usp=sharing" target="_blank"><img src="/Images/Ics.jpg" id="pics" alt="ICs" width="350px"/></a></div>
        </Fade>
        </div>
        

        </section>
        {/* <section style={{marginRight:"23px"}} className="container">
            <div className="row" style={{marginTop:"0px"}}>
                <Fade>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <InfiData/>
                </div>
                </Fade>
            </div>
        </section> */}
        <section style={{paddingTop:"100px", marginRight:"23px"}} className="container">
        <div className="row">
        <Fade right>
        <div  className="col-lg-6 col-md-12 col-sm-12 col-12 ">
        <InfiData/>
        </div>
        </Fade>
        <Fade left>
            
        <div style={{paddingLeft:"100px"}} className="col-lg-6 col-md-12 col-sm-12 col-12" >
        <div class="p21">
        <a href="https://drive.google.com/file/d/18q5Rl6rkLXOiN8Uwn6zhUhGmkr1uSWKM/view?usp=sharing" target="_blank"><img src="/Images/Infidata1.jpg" id="pics" alt="Infi" width="350px"/></a></div>
        </div></Fade>
        </div>
        

        </section>
        </>

    )
    }

export default Internships;
