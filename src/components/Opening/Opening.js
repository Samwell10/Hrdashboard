import './Opening.css'
import { IoLocationOutline } from "react-icons/io5";
import { PiArrowLineUpRightBold } from "react-icons/pi";
import {LuGraduationCap} from 'react-icons/lu'
import figma from '../../Assets/figma.png'
const Opening = ({image, title, time, location, experience, application, number, border, background}) => {
    return ( 
        <div className="opening" style={{borderLeft:`3px solid ${border}`}}>
            <div className="opening-color" style={{backgroundColor:`${background}`}}>

            </div>
            <div className="opening-top">
                <div className="opening-top-left">
                    <img src={image}></img>
                    <div className="opening-details">
                        <p className="opening-title">{title}</p>
                        <p className="opening-time">Posted {time} days ago</p>
                    </div>
                </div>
                <div className="opening-top-right">
                    <PiArrowLineUpRightBold/>
                </div>
            </div>
            <div className="opening-middle">
                <div className="opening-bubble">
                    <IoLocationOutline/>
                    <p>{location}</p>
                </div>
                <div className="opening-bubble">
                    <LuGraduationCap/>
                    <p>{experience} years exp.</p>
                </div>
            </div>
            <div className="opening-bottom">
                <div className="opening-bottom-left">
                    <p><span>{application}</span>applications</p>
                </div>
                <div className="opening-bottom-right">
                    <p>{number} in last week</p>
                </div>
            </div>
        </div>
    );
}
 
export default Opening;