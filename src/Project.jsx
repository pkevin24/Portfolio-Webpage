import React from 'react'
import Hp from './Hp'
import Fade from 'react-reveal/Fade';

import Homeauto from './Project/Homeauto';
import Car from './Project/Car';

function Project() {
    return (<>
        <Hp className="hc"/>
        <section style={{paddingTop:"100px", marginRight:"23px"}} className="container">
        <div className="row">
        <Fade left>
        <div  className="col-lg-6 col-md-12 col-sm-12 col-12 ">
        <Homeauto/>
        </div>
        </Fade>
        <Fade right>
            
        <div style={{paddingLeft:"100px"}}class="col-lg-6 col-md-12 col-sm-12 col-12">
        <a href="https://rainprediction-api.herokuapp.com/" target="_blank"><img src="/Images/frontend.png" id="pics" alt="ICs" width="470px" style={{marginLeft:"-50px", borderRadius:"30px"}} className="pro1"/></a></div>
        </Fade>
        </div>
        </section>
        <section>
            <div>
                <Car/>
            </div>
        </section>
        </>
        
    )
}

export default Project
