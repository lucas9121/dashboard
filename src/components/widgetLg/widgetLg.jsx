import './widgetLg.css'
import Button from '../Button/Button'
export default function WidgetLg(props){
    return(
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://img.pokemondb.net/sprites/trainers/heartgold-soulsilver/clair.png" alt="" />
                        <spam className="widgetLgName">Clair Blue</spam>
                    </td>
                    <td className="widgetLgDate">Jun 2, 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://img.pokemondb.net/sprites/trainers/heartgold-soulsilver/lance.png" alt="" />
                        <spam className="widgetLgName">Lance Draco</spam>
                    </td>
                    <td className="widgetLgDate">Jun 2, 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://img.pokemondb.net/sprites/trainers/ruby-sapphire/drake.png" alt="" />
                        <spam className="widgetLgName">Drake Ruby</spam>
                    </td>
                    <td className="widgetLgDate">Jun 2, 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://img.pokemondb.net/sprites/trainers/diamond-pearl/flint.png" alt="" />
                        <spam className="widgetLgName">Flint Connor</spam>
                    </td>
                    <td className="widgetLgDate">Jun 2, 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}