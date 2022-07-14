import './FeaturedInfo.css'
import {MdArrowDownward, MdArrowUpward} from 'react-icons/md'

export default function featuredInfo(props){
    return(
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyCont">
                    <span className="featuredMoney">$2,402</span>
                    <span className="featuredMoneyRate">-11.4 <MdArrowDownward className='featuredIcon negative' /></span>
                </div>
                <sapn className="featuredSub">Compared to last month</sapn>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyCont">
                    <span className="featuredMoney">$2,902</span>
                    <span className="featuredMoneyRate">-11.4 <MdArrowDownward className='featuredIcon negative'/></span>
                </div>
                <sapn className="featuredSub">Compared to last month</sapn>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyCont">
                    <span className="featuredMoney">$1,722</span>
                    <span className="featuredMoneyRate">+2.4 <MdArrowUpward className='featuredIcon'/></span>
                </div>
                <sapn className="featuredSub">Compared to last month</sapn>
            </div>
        </div>
    )
}