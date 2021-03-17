import logo from './logo.svg';
import './App.css';
import data from './data';

function App() {

const openSidebar = () => {
    document.querySelector(".sidebar").classList.add("open");
}

const closeSidebar = () => {
    document.querySelector(".sidebar").classList.remove("open");
} 
  return (
    <div className="ctr-grid">
    <header className="header">
        <div className="brand">
          <button id="trg-sidebar" onClick={ openSidebar }>
                &#9776;
            </button>
            <a href="index.html">JOYY WITHIN</a>
        </div>
        <div className="header-links">

            <a href="cart.html">Cart</a>
            <a href="signin.html">SignIn</a> 
        </div>
    </header>
    
    <aside className="sidebar">
        <h4>Shopping Categories</h4>
        <button id="trg-sidebar-close" onClick={ closeSidebar }>x</button>
        <ul>
            <li><a href="index.html">Pants</a></li>
            <li><a href="index.html">Shirts</a></li>
        </ul>
    </aside>
    <main className="main">
        <div className="ctr-products">
            <ul className="list-products">
              {
              data.products.map(product => 
                  
                <li>
                    <div className="item-product">
                        <img src={product.imagePath} className="item-product-img" alt="product-pic"></img>
                        <div className="item-product-name">
                            <a href="product.html">
                                {product.name}
                            </a>   
                        </div>
                        <div className="item-product-brand">{product.brand}</div>
                    <div className="item-product-price">₹ { product.price}</div>
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
        </div>
    </main>

    <footer className="footer">
        &copy; JOYY WITHIN | All rights reserved
    </footer>
</div>
  );
}

export default App;
