import {MdLineStyle, MdTimeline, MdTrendingUp, MdStorefront, MdAttachMoney, MdOutlineBarChart, MdMailOutline, MdDynamicFeed, MdOutlineMessage} from 'react-icons/md'
import {FaRegUser} from 'react-icons/fa'
import {FiBriefcase} from 'react-icons/fi'
import {BsFillExclamationOctagonFill} from 'react-icons/bs'
export default function Sidebar(props){
    return(
        <div className="Sidebar">
            <div className="sidebarWrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-item active">
                            <MdLineStyle />
                            Home
                        </li>
                        <li className="sidebar-item">
                            <MdTimeline />
                            Analytics
                        </li>
                        <li className="sidebar-item">
                            <MdTrendingUp />
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebarWrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-item">
                            <FaRegUser />
                            Users
                        </li>
                        <li className="sidebar-item">
                            <MdStorefront />
                            Products
                        </li>
                        <li className="sidebar-item">
                            <MdAttachMoney />
                            Transactions
                        </li>
                        <li className="sidebar-item">
                            <MdOutlineBarChart />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebarWrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-item">
                            <MdMailOutline />
                            Mail
                        </li>
                        <li className="sidebar-item">
                            <MdDynamicFeed />
                            Feedback
                        </li>
                        <li className="sidebar-item">
                            <MdOutlineMessage />
                            Messages
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebarWrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-item">
                            <FiBriefcase />
                            Manage
                        </li>
                        <li className="sidebar-item">
                            <MdTimeline />
                            Analytics
                        </li>
                        <li className="sidebar-item">
                            <BsFillExclamationOctagonFill />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}