import {MdLineStyle, MdTimeline, MdTrendingUp, MdStorefront, MdAttachMoney, MdOutlineBarChart, MdMailOutline, MdDynamicFeed, MdOutlineMessage} from 'react-icons/md'
import {FaRegUser} from 'react-icons/fa'
import {FiBriefcase} from 'react-icons/fi'
import {BsFillExclamationOctagonFill} from 'react-icons/bs'
import './Sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar(props){
    const handleClick = (title) => {
        const li = document.querySelectorAll('.sidebar-item')
        for(let i = 0; i < li.length; i++){
            li[i].style.backgroundColor = 'rgb(251, 251, 255)'
        }
        title.target.style.backgroundColor = "rgb(240 240 250)"
    }

    return(
        <div className="Sidebar">
            <div className="sidebarWrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-list">
                        <Link to='/' >
                            <li onClick={(evt) => {handleClick(evt)}} className="sidebar-item active">
                                <MdLineStyle />
                                Home
                            </li>
                        </Link>
                        <li onClick={(evt) => {handleClick(evt)}} className="sidebar-item">
                            <MdTimeline />
                            Analytics
                        </li>
                        <li onClick={(evt) => {handleClick(evt)}} className="sidebar-item">
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
                        <Link to="/users" >
                            <li onClick={(evt) => {handleClick(evt)}} className="sidebar-item">
                                <FaRegUser />
                                Users
                            </li>
                        </Link>
                        <Link to="/products">
                            <li onClick={(evt) => {handleClick(evt)}} className="sidebar-item">
                                <MdStorefront />
                                Products
                            </li>
                        </Link>
                        <li onClick={(evt) => {handleClick(evt)}} className="sidebar-item">
                            <MdAttachMoney />
                            Transactions
                        </li>
                        <li onClick={(evt) => {handleClick(evt)}} className="sidebar-item">
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
                        <li onClick={(evt) => {handleClick(evt)}} className="sidebar-item">
                            <MdMailOutline />
                            Mail
                        </li>
                        <li onClick={(evt) => {handleClick(evt)}} className="sidebar-item">
                            <MdDynamicFeed />
                            Feedback
                        </li>
                        <li onClick={(evt) => {handleClick(evt)}} className="sidebar-item">
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
                        <li onClick={(evt) => {handleClick(evt)}} className="sidebar-item">
                            <FiBriefcase />
                            Manage
                        </li>
                        <li onClick={(evt) => {handleClick(evt)}} className="sidebar-item">
                            <MdTimeline />
                            Analytics
                        </li>
                        <li onClick={(evt) => {handleClick(evt)}} className="sidebar-item">
                            <BsFillExclamationOctagonFill />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}