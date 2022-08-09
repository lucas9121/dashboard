import "./User.css"
import {MdPermIdentity, MdCalendarToday, MdOutlinePhoneIphone, MdMailOutline, MdLocationSearching} from 'react-icons/md'

export default function User() {
    return(
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userButton">Create</button>
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
                <div className="userUpdate"></div>
            </div>
        </div>
    )
}