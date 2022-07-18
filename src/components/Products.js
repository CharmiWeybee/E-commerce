import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Products(props) {
    const { onAdd, onView } = props;
    const [products, setProducts] = useState([])
    // console.log(products)
    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://kamaraapi.weybee.in/api/products',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data.data);
                setProducts(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <div> <div className='main-card d-flex mt-5'>
            {
                products.map(items =>
                    <div className="card d-flex" key={items.id} id="prod-cards">
                        <div className="card-body">
                            <div className='card-details' id="details">
                                <p className='card-name'>{items.name}</p>
                                <p className="card-price">₹{items.price}</p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className='add-to-card-btn btn btn-dark' id="add-to-cart" onClick={() => onAdd(items)}>+ Add To Cart</button>
                            <button className='add-to-card-btn btn btn-dark' id="add-to-cart" onClick={() => onView(items)}>View Details</button>
                        </div>
                    </div>
                )
            }
        </div></div>
    )
}

