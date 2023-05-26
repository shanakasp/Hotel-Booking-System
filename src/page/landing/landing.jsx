import React from "react";
import { Link } from "react-router-dom";
import MailList from "./mailList/mailList";
import Navbar from "./navbar/Navbar";
import HeaderL from "./headerL/HeaderL";
import HostItem from "./hostItem/HostItem";
import TripPlanner from "./TripPlanner_Banner/Tripplanner";
import FeaturedProperties from "./featuredProperties/featuredProperties";
import Featured from "./featured/featured";
import PropertyList from "./propertyList/propertyList";
import Footer from "../Footer";
import "./landing.css"



const home = () => {
  
  return (
    <div>
     
     <div>
      <Navbar/>
        <HeaderL/>
        <div className="homeContainer">
        <h1 className="homeTitle">Browse by Property Location</h1>
        <Featured/>
       
        <div className="placeLoad"> <Link to="/home" ><button className="loadBtn" >Load more</button></Link></div>

        <h1 className="homeTitle">Browse by Property Type</h1>
        <PropertyList/>

        <div className="typeLoad"> <Link to="/home" > <button className="loadBtn" >Load more</button></Link></div>

        <h1 className="homeTitle">Browse by Reviews</h1>
        <FeaturedProperties/>
        
        <div className="reveiwLoad">  <Link to="/home" >
        <button className="loadBtn"  >Load more</button></Link></div>
              
        <MailList/>
        <TripPlanner/>
        <HostItem/>
        <Footer/>
       
   
        </div>
    </div>
    </div>
  );
}

export default home;
