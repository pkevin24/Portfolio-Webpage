
import React from 'react'
import Ics from './Interns/Ics'
import InfiData from './Interns/InfiData'

function Internship() {
    return (
        <>
        <section style={{marginTop:"50px",marginRight:"80px"}} className="container">
        <div style={{marginTop:"50px",marginLeft:"80px"}} className="row">
        <div  className="col-lg-6 col-md-12 col-sm-12 col-12 ">
        <Ics/>
        </div>
        
        <div style={{paddingLeft:"150px",borderRadius:"15px"}} className="col-lg-6 col-md-12 col-sm-12 col-12">
        <a href="https://drive.google.com/file/d/1MV-72mhOd9gMWbZvMzr5Q6XYv0b2slSB/view?usp=sharing"><img src="/Images/Ics.jpg" alt="ICs" width="350px"/></a></div>
        </div>
        

        </section>
        <section  className="container" style={{paddingTop:"130px",marginRight:"80px"}}>
            <div style={{marginLeft:"80px"}}className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <InfiData/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Internship
