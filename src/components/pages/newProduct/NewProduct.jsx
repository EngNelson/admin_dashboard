import "./newProduct.css";

const NewProduct = () => {
    return (
        <div className="newProduct">
                <h1 className="addProductTitle">New Product</h1>
                <form  className="addProductForm">
                    <div className="addProductItem">
                        <label >Image</label> 
                        <input type="file" id= "file"/>
                        </div>    
                        <div className="addProductItem">
                            <label >Name</label>
                         <input type="text" placeholder= "Real Estate"/>
                         </div>
                          
                         <div className="addProductItem">
                            <label >Stock</label>
                            <input type="text" placeholder= "123"/>
                        </div>

                        <div className="addProductItem">
                        <label >Active</label>

                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                        <button className="productButton">Create</button>
                </form>
                </div>
        
         

    )
}

export default NewProduct
