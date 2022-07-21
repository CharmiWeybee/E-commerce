// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'

// export function Products(props) {
//     console.log(props)
//     const { onAdd, onView } = props;
//     const [products, setProducts] = useState([])
//     useEffect(() => {
//         var config = {
//             method: 'get',
//             url: 'https://kamaraapi.weybee.in/api/products',
//             headers: {}
//         };

//         axios(config)
//             .then(function (response) {
//                 console.log(response.data.data);
//                 setProducts(response.data.data)

//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }, [])
//     return (
//         <div> <div className='main-card d-flex mt-5'>
//             {
//                 products.map(items =>
//                     <div className="card d-flex" key={items.id} id="prod-cards">
//                         <div className="card-body">
//                             <div className='card-details' id="details">
//                                 <p className='card-name'>{items.name}</p>
//                                 <p className="card-price">₹{items.price}</p>
//                             </div>
//                         </div>
//                         <div className="card-footer">
//                             <button className='add-to-card-btn btn btn-dark' id="add-to-cart" onClick={() => onAdd(items)}> + Add To Cart </button>
//                             <button className='add-to-card-btn btn btn-dark' id="add-to-cart" onClick={() => onView(items)}><Link to={`/DetailView/${items.id}`}>View Details</Link> </button>
//                         </div>
//                     </div>
//                 )
//             }
//         </div></div>
//     )
// }




import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, addToCart, ViewDetails } from "../actions/productsAction";
import { faShoppingCart, faEye} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class Products extends Component {
   
//   constructor(props) {
//     super(props)
  
//     this.state = {
//         quantity: 1,
//        is_configurable:false

//     }
//   }
    

    handleAddToCart = (productId) => {
        this.props.addToCart({ productId, quantity:1, is_configurable: false });
    };

    handleViewDetails = (productId) => {
        this.props.viewDetails({productId});
    };

     
   componentDidMount() {
        this.props.fetchProducts();
    }
    
    incrementCart = (productId) => {
        console.log("qty", this.props.productID)
        // eslint-disable-next-line no-lone-blocks
        { this.props.productID?.find(attr => attr.product.id === productId)
            this.props.addToCart({ productId, quantity: this.quantity + 1, is_configurable: false });
        }
    };
   
    decreamentCart = (productId) => {
        console.log("qty", this.props.productID)
        // eslint-disable-next-line no-lone-blocks
        { this.props.productID?.find(attr => attr.product.id === productId )
            this.props.addToCart({ productId, quantity: this.quantity - 1, is_configurable: false });
        }
    };
   
    
    render() {
        const { item, itemLoading,productID} = this.props;
        console.log(productID, "asd")
       
        if(itemLoading){
            return <img className="loading-img" src="https://c.tenor.com/wfEN4Vd_GYsAAAAM/loading.gif" alt="loading..."></img>
        }
        return (
            <>
                <div className="container-fluid pt-5">
                    <div className="text-center mb-4">
                        <h2 className="section-title px-5"><span className="px-2">Products</span></h2>
                    </div>

                    <div className="row px-xl-5 pb-3">
                        {item.map((items) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={items.id}>
                                <div className="card product-item border-0 mb-4">
                                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                        <img className="img-fluid w-100" src="https://m.media-amazon.com/images/I/61u62BYSdUL._UX500_.jpg" alt="" />
                                    </div>
                                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                        <h6 className="text-truncate mb-3">{items.name}</h6>
                                        <div className="d-flex justify-content-center">
                                            <h6>{items.formated_price}</h6><h6 class="text-muted ml-2"><del>₹{items.price}</del></h6>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <h6 className="text-muted ml-2">{items.reviews.average_rating}</h6>
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between bg-light border">
                                        <button className="btn btn-sm text-dark p-0" onClick={() => this.handleViewDetails(items.id) }>{" "}<FontAwesomeIcon className="fas fa-shopping-cart text-primary mr-1" icon={faEye} /> View Details{" "}</button>
                                        {/* {this.state.quantity === 0 ? (
                                            <button className="btn btn-sm text-dark p-0" onClick={() => this.handleAddToCart(items.id)} >{" "}<FontAwesomeIcon className="fas fa-shopping-cart text-primary mr-1" icon={faShoppingCart} /> Add To Cart{" "}</button>
                                        ) : (
                                            <div className="number">
                                                    <button onClick={() => this.decreamentCart(items.id)}>-</button>
                                                <button>{this.state.quantity}</button>
                                                    <button onClick={() => this.incrementCart(items.id)}>+</button>
                                            </div>
                                        )} */}
                                        {productID?.find(attr=>attr.product.id===items.id) ? (
                                            <div className="number">
                                                <button onClick={() => this.decreamentCart(items.id)}>-</button>
                                                <button>{this.quantity}</button>
                                                <button onClick={() => this.incrementCart(items.id)}>+</button>
                                            </div>
                                        ) : (
                                                <button className="btn btn-sm text-dark p-0" onClick={() => this.handleAddToCart(items.id)} >{" "}<FontAwesomeIcon className="fas fa-shopping-cart text-primary mr-1" icon={faShoppingCart} /> Add To Cart{" "}</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

        // return <div>
        //         {itemList}
        //     </div>;

const mapStateToProps = state => {
    
    return {
        item: state.products.item,
        cart: state.products.cart,
        total: state.products.total,
        itemLoading: state.products.loading,
        productID: state.products.cartList
}};

const mapDispatchToProps = 
 {
      fetchProducts:fetchProducts,
      addToCart: addToCart,
      viewDetails:ViewDetails,

  };


export default connect(mapStateToProps,mapDispatchToProps)(Products);



// const itemList = item.map((i) => {
//     return (
//         <div className="col-xs-4 col-md-3" key={i.id}>

//             <div className="caption">
//                 <img src="https://m.media-amazon.com/images/I/61u62BYSdUL._UX500_.jpg" alt="jewellery"></img>
//                 <h3>{i.name}</h3>
//                 <p>₹{i.price}</p>
//                 <button>Add to Cart</button>
//             </div>
//         </div>
//     );
// });

















// -----------------------------------------------------------------------
// { " " }
// <div className="d-flex mt-5 all-cards">
//     {item.map((items) => (
//         <div className="product-cards" key={items.id}>
//             <div className="card-body">
//                 <div className="card-details" id="details">
//                     <img
//                         id="product-image"
//                         src="https://m.media-amazon.com/images/I/61u62BYSdUL._UX500_.jpg"
//                         alt="jewellery"
//                     ></img>
//                     <p className="product-name">{items.name}</p>
//                     <p className="card-price">₹{items.price}</p>
//                 </div>
//             </div>
//             <button className="add-to-card-btn btn btn-dark" id="add-to-cart">
//                 {" "}
//                 + Add To Cart{" "}
//             </button>
//         </div>
//     ))}
// </div>
// -----------------------------------------------------------------------



