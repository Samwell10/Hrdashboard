import './Sidebar.css'
import logo from '../../../Assets/logo.png';
import classNames from 'classnames';
import { mainsidebar, organisation, recruitment } from './SidebarDetails';
import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {
    const location = useLocation();
    console.log(location.pathname)
    return ( 
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={logo}></img>
            </div>
            <div className="sidebar-links">
                <nav>
                    {mainsidebar.map((val, index)=>{
                        return(
                            <li 
                                key={index}
                            >
                                <Link to={val.link}
                                className={ classNames('link', { ['active2']: location.pathname === val.link})}
                                >
                                    {val.icon}
                                    <p>{val.title}</p>
                                </Link>
                            </li>
                        )
                    })}
                </nav>
                <p className='sidebar-category'>RECRUITMENT</p>
                <nav>
                    {recruitment.map((val, index)=>{
                        return(
                            <li 
                                key={index}
                            >
                                <Link to={val.link}
                                className={ classNames('link', { ['active2']: location.pathname === val.link})}
                                >
                                    {val.icon}
                                    <p>{val.title}</p>
                                </Link>
                            </li>
                        )
                    })}
                </nav>
                <p className='sidebar-category'>ORGANIZATION</p>
                <nav>
                    {organisation.map((val, index)=>{
                        return(
                            <li 
                                key={index}
                                
                            >
                                <Link to={val.link}
                                className={ classNames('link', { ['active2']: location.pathname === val.link})}
                                >
                                    {val.icon}
                                    <p>{val.title}</p>
                                </Link>
                            </li>
                        )
                    })}
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;