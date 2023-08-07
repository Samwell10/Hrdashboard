import {FiSearch} from 'react-icons/fi'
import { HiOutlineBell } from 'react-icons/hi';
import {IoSettingsOutline} from 'react-icons/io5';
import profile from '../../../Assets/profile.png';
import './Navbar.css'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar-search">
                <FiSearch/>
                <input
                    type='text'
                    placeholder='Search for jobs, candidates and more...'
                >
                </input>
            </div>
            <div className="navbar-profile">
                <div className="navbar-icon">
                    <IoSettingsOutline/>
                </div>
                <div className="navbar-icon">
                    <HiOutlineBell/>
                    <div className="green-dot">

                    </div>
                </div>
                <div className="navbar-image">
                    <img src={profile}></img>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;