import React from 'react'
import Intro from './Intro';
import Project from './Project';
import Internships from './Internships';
import Certificate from './Certificate';
import Footer from './Footer';
import {Route,Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Navbar1 from './Navbar1';
import Aboutme from './Aboutme'
import './index';
import Contact from './Contact1'
import Burger from './Burger';
import 'bootstrap/dist/css/bootstrap.min.css';
import Internship from './Internship';
import Foot from './Foot';
function Home() {
    return (
        <div>
        {/* <Navbar/> */}
        <div><Navbar1/></div>
        <Switch>
        <Route exact path='/' component={Intro}>
            <section className="section one">
            
                <div className="container-one">
                
                    <Intro/>
                </div>
            </section>
            <section className="section zero" >
                <div className="container-zero"  >
                
                    <Aboutme/>
                </div>
            </section>
            </Route>
            <Route exact path='/project' component={Project}>
            <section className="section two">
                <div className="container-two" style={{width:"100vw"}}>
                
                    <Project/>
                </div>
            </section>
            
            </Route>
            <Route exact path='/internship' component={Internships}>
            <div className="Internship" style={{background:"#c95947"}}>
            <Internships/>
            </div>
            <section className="section four">
                <div className="container-four">
                
                <br></br>
                    <Certificate/>
                    
                </div>
            </section>
            </Route>
            <Route exact path='/certificates' component={Certificate}>
            <section className="section four">
                <div className="container-four" style={{width:"100vw"}}>
                
                <br></br>
                    <Certificate/>
                    
                </div>
            </section>
            
            </Route>
            <Route exact path='/contact' component={Footer}>
            <section className="section five">
                <div className="container-six">
                
                    <Footer/>
                </div>
            </section>
            </Route>
            <Route exact path='/contactfeedback' component={Contact}>
            <section className="section seven">
                <div className="container-seven">
                
                    <Contact/>
                </div>
            </section>
            </Route>
            <Route component={Error} />
      </Switch>
      {/* just a proxy for footer */}
      <Foot/>
      </div>
    )
}

export default Home
