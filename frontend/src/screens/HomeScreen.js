import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props) {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/api/products");
            setProduct(data);
        }

        fetchData();
        return () => {
            
        }
    }, []);
    
    return (
        <ul className="list-products">
            {
                products.map(product =>

                    <li key={product._id}>
                        <div className="item-product">
                        <Link to={'/products/' + product._id}>

                        <img src={product.imagePath} className="item-product-img" alt="product-pic"></img>    
                        </Link>
                            
                            <div className="item-product-name">
                                <Link to={'/products/' + product._id}>
                                    {product.name}
                                </Link>
                            </div>
                            <div className="item-product-brand">{product.brand}</div>
                            <div className="item-product-price">₹ {product.price}</div>
                            <div className="item-product-rating">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>


                        </div>
                    </li>
                )
            }
        </ul>
    )
}

export default HomeScreen;