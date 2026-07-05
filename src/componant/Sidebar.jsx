import React from "react";
import image from "../assets/sideimg.jpg";
import Percentage from "./percenatge";

function Sidebar(){
    return(
        <>
        <div className="side-sec">
        <div className="first-top">
            <img  className="main-img" src={image} alt="sideimage"/>
        </div>
        <div className="second-buttom"><Percentage gpa={7.5} /></div>
        </div>
        </>
    )
}
export default Sidebar