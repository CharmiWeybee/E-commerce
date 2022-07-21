// import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { connect} from "react-redux";
import { getCart } from "../actions/productsAction";
// import { Header } from "../components/Header";

 const CartList = (props) => {
    // const cart = useSelector((state) => state.shop.cart);

     const { onAdd, onRemove, cart, getCart } = props;
    // const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
     console.log(cart, "cartItems");

     useEffect(()=>{
         getCart()
     },[])

     if(cart)
    {return (
        <div>
            
          
            <div className="container cart-container">
                <aside className="card cart-card">
                    <h3 className='card-cart-heading border-bottom'>Cart Items</h3>
                    <div>
                        {cart.length === 0 && <div>Cart is empty</div>}
                        {cart.map((item) => (

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

                        {cart.length !== 0 && (
                            <>
                                <hr></hr>
                                <div className='grand-total'>
                                    {/* <p>Grand Total: ₹{itemsPrice}</p> */}
                                </div>
                            </>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );}
    else{
       <h1>Loading.............</h1>
    }
};

const mapStateToProps=(state)=>{
    return {
       cart:state.products.cart.data
    }
}

const mapDispatchToProps={
    getCart: getCart
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartList)