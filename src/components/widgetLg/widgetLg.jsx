import './widgetLg.css'
import Button from '../Button/Button'
export default function WidgetLg(props){
    return(
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <thead className="widgetLgTr">
                    <tr>
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://img.pokemondb.net/sprites/trainers/heartgold-soulsilver/clair.png" alt="user image" />
                            <span className="widgetLgName">Clair Blue</span>
                        </td>
                        <td className="widgetLgDate">Jul 10, 2022</td>
                        <td className="widgetLgAmount">$1,432.00</td>
                        <td className="widgetLgStatus"><Button type="Approved" /></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://img.pokemondb.net/sprites/trainers/heartgold-soulsilver/lance.png" alt="user image" />
                            <span className="widgetLgName">Lance Draco</span>
                        </td>
                        <td className="widgetLgDate">Jul 10, 2022</td>
                        <td className="widgetLgAmount">$103,528.00</td>
                        <td className="widgetLgStatus"><Button type="Declined" /></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://img.pokemondb.net/sprites/trainers/ruby-sapphire/drake.png" alt="user image" />
                            <span className="widgetLgName">Drake Ruby</span>
                        </td>
                        <td className="widgetLgDate">Jul 10, 2022</td>
                        <td className="widgetLgAmount">$824.00</td>
                        <td className="widgetLgStatus"><Button type="Pending" /></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://img.pokemondb.net/sprites/trainers/diamond-pearl/flint.png" alt="user image" />
                            <span className="widgetLgName">Flint Connor</span>
                        </td>
                        <td className="widgetLgDate">Jul 10, 2022</td>
                        <td className="widgetLgAmount">$50.00</td>
                        <td className="widgetLgStatus"><Button type="Approved" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}