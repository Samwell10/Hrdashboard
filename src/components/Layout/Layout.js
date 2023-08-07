import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import './Layout.css'
import { Outlet } from "react-router-dom";
const Layout = () => {
    return ( 
        <div className="layout">
            <div className="layout-left">
                <Sidebar/>
            </div>
            <div className="layout-right">
                <Navbar/>
                <div className="layout-main">
                    <Outlet/>
                </div>
            </div>
        </div>
     );
}
 
export default Layout;