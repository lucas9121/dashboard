import "./User.css"
import { Link } from "react-router-dom"
import {MdPermIdentity, MdCalendarToday, MdOutlinePhoneIphone, MdMailOutline, MdLocationSearching, MdOutlinePublish} from 'react-icons/md'

export default function User() {
    return(
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://img.pokemondb.net/artwork/pikachu.jpg" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Pikachu Lightning</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <MdPermIdentity />
                            <span>pikalight99</span>
                        </div>
                        <div className="userShowInfo">
                            <MdCalendarToday />
                            <span>10/12/1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <MdOutlinePhoneIphone />
                            <span>+1 123 456 7890</span>
                        </div>
                        <div className="userShowInfo">
                            <MdMailOutline />
                            <span>pikalight99@email.com</span>
                        </div>
                        <div className="userShowInfo">
                            <MdLocationSearching />
                            <span>New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="pikalight99" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="pikalight99" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Pikachu Lightning" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="pikalight99@email.com" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+1 123 456 7890" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="New York | USA" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://img.pokemondb.net/artwork/pikachu.jpg" alt=""/>
                                <label htmlFor="file"><MdOutlinePublish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}