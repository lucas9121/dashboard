import "./Product.css"
import { Link } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"

export default function Product(){
    return(
        <div className="product">
            <div className="productContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://assets3.cbsnewsstatic.com/hub/i/2022/07/11/ca1ba957-09ce-4ac3-a554-95404edf9e51/gettyimages-1211718389.jpg" alt="apple air pods"/>
                        <span>Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span>id:</span>
                            <span>123</span>
                        </div>
                        <div className="productInfoItem">
                            <span>sales:</span>
                            <span>5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span>active:</span>
                            <span>yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span>in stock:</span>
                            <span>no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productTop">
                <div className="">

                </div>
            </div>
        </div>
    )
}