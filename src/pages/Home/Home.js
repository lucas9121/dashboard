import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import userData from '../../dummyData'
import './Home.css'

export default function Home(props){
    return(
        <div className="Home">
            <FeaturedInfo />
            <Chart  data={userData} title="User Analyitcs" grid dataKey="ActiveUser" />
        </div>
    )
}