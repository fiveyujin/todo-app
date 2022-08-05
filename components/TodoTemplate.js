import React from 'react';
import './TodoTemplate.css';
import mImg from '../images/time.jpg';
import { FaTwitter,FaFacebook,FaInstagram } from "react-icons/fa";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Daily Schedule
      <img className='imwidth' src={mImg} alt='time'/>
      </div>
      <div className="content">{children}</div>
      
      <div className='app-footer'>Daily Schedule v1.0-yujin 
        <span>&nbsp;</span>
        <FaInstagram/> <FaTwitter/> <FaFacebook/>
      </div>
      
    </div>
  );
};
export default TodoTemplate;
