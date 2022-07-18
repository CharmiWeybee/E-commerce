import React, { useState } from "react";
import "../App.css";
import { Header } from "../components/Header";
import {Products} from '../components/Products'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/shopping/shopping-actions";
import { detailView } from "../redux/detailView/detail-view-actions";

export const Main = () => {
    const cartItemList = useSelector((state) => state.shop.cart);

    const dispatch = useDispatch();

    const { items } = Products;
    const [cartItems, setCartItems] = useState([]);
  

    console.log(cartItemList, "cartItemList 13");

    const onAdd = (items) => {
        const exist = cartItems.find((x) => x.id === items.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === items.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...items, qty: 1 }]);
        }
        dispatch(addToCart(items));
    };
    const onView = (items)=>{
        dispatch(detailView(items));
    }

   

    return (
        <>
            <div className="App ">
                <Header countCartItems={cartItems?.length}  ></Header>
                <Products onAdd={onAdd} product={items} onView={onView}></Products>
                <div className="container mt-5">
                </div>
            </div>
        </>
    );
};

export default Main;






