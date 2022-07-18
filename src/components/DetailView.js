import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DetailView = (items) => {
    console.log(items)
    const [products, setProducts] = useState([])
    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://kamaraapi.weybee.in/api/products',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setProducts(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
  return (
    <div>
        
    </div>
  )
}
