import React from "react";
import Main from "../Main.js";

const Footer = (props) => {
    const {who,sensei} = props;
    return (
        
         <div className ="container-fluid"> 
            <hr />
            <div className="text-center title text-uppercase">
            <big>
            <span className="text-danger">จัดทำโดย : {who}</span> | <span className="text-danger">เสนอ : {sensei}</span>
            </big>
            </div>
        </div>
    )
}

export default Footer;