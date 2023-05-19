import {
    faBed,          //icons that are imported
   
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./header.css";
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { Link } from "react-router-dom"
  
  const Header = ({ type }) => {

  
    return (
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Home</span>
            </div>
         
        
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Hotels</span>
            </div>
            
          </div>
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
               Plan Your Journey
              </h1>
              <p className="headerDesc">
               Travo Hotels | Travo Cabs | Trip Planner
              </p>
              <Link to="/user/login" >
              <button className="headerBtn">Sign in </button> </Link>
              <Link to="/user/customer/register" >
              <button className="headerBtn2">Register </button></Link>
              
          
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Header;
  