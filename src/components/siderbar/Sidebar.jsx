import "./sidebar.css";
import {LineStyle,Timeline, TrendingUp,Person,
  Poll,Receipt,AttachMoney,WorkOutline,
    Mail,Feedback, Assessment,Message} 
from "@material-ui/icons";
 import { Link } from  "react-router-dom";   

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                      <Link to="/users" className="link">
                        <li className="sidebarListItem  active">
                          <LineStyle className="sidebarIcon" />
                          Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                          <Poll />
                          Analytics
                        </li>
                        <li className="sidebarListItem">
                          <AttachMoney/>
                          Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">

                      <Link to="/users" className="link">
                      <li className="sidebarListItem">
                          <Person/>
                          Users
                        </li>
                      </Link>
                        <Link to="/products"  className="link">
                        <li className="sidebarListItem">
                          <TrendingUp />
                          Products
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                          <Receipt/>
                          Transactions
                        </li>
                    </ul>
                </div> 
                <div>
                <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                          <Mail/>
                          Mail
                        </li>
                        <li className="sidebarListItem">
                          <Feedback />
                          Feedback
                        </li>
                        <li className="sidebarListItem">
                          <Message/>
                          Messages
                        </li>
                    </ul>
                </div>
                <div>
                <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                          <WorkOutline className="sidebarIcon" />
                          Manager
                        </li>
                        <li className="sidebarListItem">
                          <Timeline />
                          Analytics
                        </li>
                        <li className="sidebarListItem">
                          <Assessment className="sidebarIcon"/>
                          Reports
                        </li>
                    </ul>
                </div>                
                </div>           
                </div>           
    )
}

export default Sidebar
