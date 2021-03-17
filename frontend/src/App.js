import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {

  const openSidebar = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeSidebar = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>


      <div className="ctr-grid">
        <header className="header">
          <div className="brand">
            <button id="trg-sidebar" onClick={openSidebar}>
              &#9776;
            </button>
            <Link to="/" >
              JOYY WITHIN 
            </Link>
          </div>
          <div className="header-links">

            <a href="cart.html">Cart</a>
            <a href="signin.html">SignIn</a>
          </div>
        </header>

        <aside className="sidebar">
          <h4>Shopping Categories</h4>
          <button id="trg-sidebar-close" onClick={closeSidebar}>x</button>
          <ul>
            <li><a href="index.html">Pants</a></li>
            <li><a href="index.html">Shirts</a></li>
          </ul>
        </aside>
        <main className="main">
          <div className="ctr-products">
            
            <Route path="/" component={HomeScreen} exact={true} />
            <Route path="/products/:id" component={ProductScreen} exact={true} />

     
          </div>
        </main>

        <footer className="footer">
          &copy; JOYY WITHIN | All rights reserved
    </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
