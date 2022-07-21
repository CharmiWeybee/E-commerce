// import React from "react";
// import "../App.css";
// import { Header } from "../components/Header";

// import Products from './Products'

// export const Main = () => {
  
//     return (
//         <>
//             <div className="App ">
//                 <Header ></Header>
//                 <Products ></Products>
//                 <div className="container mt-5">
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Main;





import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "./Products";
import '../App.css' ;
// import { Header } from "./Header";
// import {SideBar} from "./SideBar"
// import { ProductCard } from "./ProductCard"
import Registration from "./Registration";
// import { Features } from "./Features";
// import CartList from "./CartList";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import DetailView from "./DetailView";
import CartList from "./CartList";


class Main extends Component {

    render() {
        return (
<<<<<<< HEAD
            // <div>
            //     {/* <Header></Header> */}
            //     <div className="d-flex">
            //         {/* <SideBar></SideBar> */}
            //         {/* <ProductCard></ProductCard> */}
            //         {/* <Registration></Registration> */}
            //     </div>
            //         {/* <Features></Features> */}

                
            //     {/* <Products /> */}
            //     <Login></Login>
            //     {/* <CartList></CartList> */}
            // </div>


                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/Register" element={<Registration/>} ></Route> 
                    <Route path="/Home" element={<Home/>} ></Route> 
                    <Route path="/Products" element={<Products />} ></Route> 
                <Route path="/CartList" element={<CartList />} ></Route> 
                </Routes>

            // <DetailView></DetailView>
=======
            <div>
                <Header></Header>
                <SideBar></SideBar>
                
                {/* <Products /> */}
            </div>
>>>>>>> d2261186ffc2a3265acc291dbae87bbc57f82605
        );
    }
}

const mapStateToProps = state => ({
    item: state.products.item,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(Main);






