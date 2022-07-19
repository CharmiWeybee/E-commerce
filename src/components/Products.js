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
import { fetchProducts } from "../actions/fetchData";



class Products extends Component {
     
   componentDidMount() {
        this.props.fetchProducts();
    }
    
    
    render() {
        const { item, itemLoading } = this.props;
        if(itemLoading){
            return <img className="loading-img" src="https://c.tenor.com/wfEN4Vd_GYsAAAAM/loading.gif" alt="loading..."></img>
        }

        return (
        <div> <div className='d-flex mt-5 all-cards'>
            {
                    item.map(items =>
                    <div className="product-cards" key={items.id} >
                        <div className="card-body">
                            <div className='card-details' id="details">
                                    <img id="product-image" src="https://m.media-amazon.com/images/I/61u62BYSdUL._UX500_.jpg" alt="jewellery"></img>
                                    <p className='product-name'>{items.name}</p>
                                <p className="card-price">₹{items.price}</p>
                            </div>
                        </div>
                        {/* <div className=""> */}
                            <button className='add-to-card-btn btn btn-dark' id="add-to-cart" > + Add To Cart </button>
                        {/* </div> */}
                    </div>
                )
            }
        </div></div>
    )
       


}
}

        // return <div>
        //         {itemList}
        //     </div>;

const mapStateToProps = state => {
    return {
        item: state.products.item,
        itemLoading: state.products.loading,
}};

const mapDispatchToProps = 
 {
      fetchProducts:fetchProducts
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



