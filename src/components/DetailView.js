import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Header } from './Header';

export const DetailView = (props) => {
    console.log(props)
    const { onAdd } = props;
    const [product, setProduct] = useState([])
    const { productId }=useParams();
    useEffect(() => {
        var config = {
            method: 'get',
            url: `https://kamaraapi.weybee.in/api/products/${productId}/?token=true`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(response.data.data)
                setProduct(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    })
    console.log(product)
  return (
    <div>
        <Header></Header>
          <div className="card-body">
              <div className='card-details' id="details">
                  <p className='card-name'>{product.name}</p>
                  <p className="card-price">₹{product.price}</p>

                  <div className="col-2" id="cart-item-buttons">
                      <button className='add-to-card-btn btn btn-dark' id="add-to-cart" onClick={() => onAdd(product)}> + Add To Cart </button>
                    </div>
              </div>
            </div>
    </div>
  )
}
