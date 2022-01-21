import  Chat   from  "../../chart/Chart";
import { Link } from "react-router-dom";
import "./product.css";
import {productData} from "../../../dummyData";
import { Publish } from "@material-ui/icons";

const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chat data={productData}  dataKey="Sales" 
                    title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="/assets/home.jpg" alt="" 
                        className="productInfoImg"/>
                        <span className="productName">Real Estates</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123:</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes:</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no:</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">requesting:</span>
                            <span className="productInfoValue">123:</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form  className="productForm">
                    <div className="productFormLeft">
                        <label >Product Name</label> 
                        <input type="text" placeholder="Real Estate"/>
                        <label >In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label >Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="/assets/home.jpg" alt="" className="productUploadImg"/>
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
