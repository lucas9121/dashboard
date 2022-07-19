import './widgetSm.css'
import {MdVisibility} from 'react-icons/md'

export default function WidgetSm(props){
    return(
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://img.pokemondb.net/artwork/pikachu.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ash Ketchum</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <MdVisibility />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://img.pokemondb.net/artwork/staryu.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Misty Aqua</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <MdVisibility />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://img.pokemondb.net/artwork/onix.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Brock Mason</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <MdVisibility />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://img.pokemondb.net/artwork/meowth.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jessie Red</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <MdVisibility />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://img.pokemondb.net/artwork/eevee.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Gary Blue</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <MdVisibility />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}