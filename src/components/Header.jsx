import {RiSettings5Fill} from 'react-icons/ri'
import {MdLanguage, MdNotificationsNone} from 'react-icons/md'
export default function Header(props) {
    return(
        <div className="Header">
            <div className="HeaderWrapper">
                <div className="top-left">
                    <span className="logo">Lucas Carlos</span>
                </div>
                <div className="top-right">
                    <div className="Header-icons">
                        <MdNotificationsNone style={{fontSize: '2.2rem'}}/>
                        <span className="iconBadge">2</span>
                    </div>
                    <div className="Header-icons">
                        <MdLanguage style={{fontSize: '2.1rem'}}/>
                        <span className="iconBadge">2</span>
                    </div>
                    <div className="Header-icons">
                        <RiSettings5Fill style={{fontSize: '2.3rem'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}