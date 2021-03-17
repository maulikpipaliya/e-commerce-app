import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductScreen(props) {
    console.log(props.match.params.id);
    const productId = props.match.params.id;
    const product = data.products.find(x => x._id === productId);
    return (
        <div className="ctr-product-details">
            <div className="ln-back">
                <Link to="/" >
                    Back to results
                </Link>
            </div>
            <div className="product-details">
                <div className="product-img">
                    <img src={product.imagePath} alt={product.name}></img>
                </div>
                <div className="product-info">
                    <ul>
                        <li>
                            {product.name}
                        </li>
                        <li>
                            <div className="product-brand">{product.brand}</div>
                        </li>
                        <li>
                            <div className="product-price">₹ {product.price}</div>
                        </li>
                        <li>
                        <div className="item-product-rating">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>


                        </li>
                    </ul>
                </div>
                <div className="product-action">
                    <ul>
                        <li>Price : {product.price }</li>
                        <li>Status : { [product.status]}</li>
                        <li>
                            <label htmlFor="qty">Quantity</label>
                            <input type="text" id="qty"></input>
                        </li>
                        <li>
                            <button> Add to Cart</button>
                        </li>
                     </ul>

                </div>
            </div>
        
        </div>
    )
}

export default ProductScreen;