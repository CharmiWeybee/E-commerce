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
import { Header } from "./Header";
import {SideBar} from "./SideBar"
import { ProductCard } from "./ProductCard"


class Main extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                <SideBar></SideBar>
                <ProductCard></ProductCard>
                {/* <Products /> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.products.item,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(Main);






