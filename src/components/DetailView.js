// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Header } from './Header';

// export const DetailView = (props) => {
//     console.log(props)
//     const { onAdd } = props;
//     const [product, setProduct] = useState([])
//     const { productId }=useParams();
//     useEffect(() => {
//         var config = {
//             method: 'get',
//             url: `https://kamaraapi.weybee.in/api/products/${productId}/?token=true`,
//             headers: {}
//         };

//         axios(config)
//             .then(function (response) {
//                 console.log(response.data.data)
//                 setProduct(response.data.data)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     })
//     console.log(product)
//   return (
//     <div>
//         <Header></Header>
//           <div className="card-body">
//               <div className='card-details' id="details">
//                   <p className='card-name'>{product.name}</p>
//                   <p className="card-price">₹{product.price}</p>

//                   <div className="col-2" id="cart-item-buttons">
//                       <button className='add-to-card-btn btn btn-dark' id="add-to-cart" onClick={() => onAdd(product)}> + Add To Cart </button>
//                     </div>
//               </div>
//             </div>
//     </div>
//   )
// }




import React, { Component } from "react";
import { connect } from "react-redux";
import { ViewDetails } from "../actions/productsAction";
import { faShoppingCart, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class DetailView extends Component {



  componentDidMount() {
    this.props.ViewDetails();
  }



  render() {
    const { details } = this.props;
   
    return (
      <>
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Products detail</span></h2>
          </div>

          <div className="row px-xl-5 pb-3">
            {/* {item.map((items) => (
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

                    <button className="btn btn-sm text-dark p-0" >{" "}<FontAwesomeIcon className="fas fa-shopping-cart text-primary mr-1" icon={faEye} /> View Details{" "}</button>
                    {!cart.cartCount ? (
                      <button className="btn btn-sm text-dark p-0" onClick={() => this.handleAddToCart(items.id)} >{" "}<FontAwesomeIcon className="fas fa-shopping-cart text-primary mr-1" icon={faShoppingCart} /> Add To Cart{" "}</button>
                    ) : (
                      <div className="number">
                        <button onClick={e => this.subtract(e, items.itemname)}>-</button>
                        <button>{items.cartCount}</button>
                        <button onClick={e => this.add(e, items.itemname)}>+</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))} */}

            
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
  console.log(state)
  return {
    details:state.products.item
  }
};

const mapDispatchToProps =
{
  ViewDetails: ViewDetails
  
};


export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
