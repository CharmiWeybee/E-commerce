import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../components/Header";

export const CartList = (props) => {
    const cartItems = useSelector((state) => state.shop.cart);

    const { onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    console.log(cartItems, "cartItems");



    return (
        <div>
            <Header countCartItems={cartItems?.length}></Header>
            <div className="container cart-container">
                <aside className="card cart-card">
                    <h3 className='card-cart-heading border-bottom'>Cart Items</h3>
                    <div>
                        {cartItems.length === 0 && <div>Cart is empty</div>}
                        {cartItems.map((item) => (

                            <div key={item.id} className="row">
                                <div className="col-2" id="cart-item-name">{item.name}</div>
                                <div className="col-2" id="cart-item-buttons">
                                    <button onClick={() => onRemove(item)} id="remove-btn" className="btn btn-danger remove">-</button>{' '}
                                    <button onClick={() => onAdd(item)} id="add-btn" className="btn btn-success add">+</button>
                                </div>

                                <div className="col-1 text-right" id="cart-item-price">
                                    {item.qty} x {item.price} =₹{item.price * item.qty}
                                </div>
                            </div>
                        ))}

                        {cartItems.length !== 0 && (
                            <>
                                <hr></hr>
                                <div className='grand-total'>
                                    <p>Grand Total: ₹{itemsPrice}</p>
                                </div>
                            </>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
};
