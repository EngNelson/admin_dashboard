import Topbar from "./components/topbar/Topbar";
import Sidebar from  "./components/siderbar/Sidebar";
import "./app.css";
import Home from "./components/pages/home/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";


function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
            <Home/>
            </Route>

            <Route  path="/users">
            <UserList/>
            </Route>
            <Route  path="/user/:userId">
            <User/>
            </Route>

            <Route  path="/newUser">
            <NewUser/>
            </Route>
            <Route  path="/products">
            <ProductList/>
            </Route>
            <Route  path="/product/:productId">
            <Product/>
            </Route>

            <Route  path="/newproduct">
            <NewProduct/>
            </Route>
          </Switch>
        </div>
        </Router>
    </div>
  );
}

export default App;
