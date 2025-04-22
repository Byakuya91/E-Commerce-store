import "./App.css";

// ? Component imports
import Header from "./containers/Header";
import ProductComponent from "./containers/ProductComponent";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import WishListPage from "./Pages/WishListPage";
// ?rrd imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ?Other third party imports
import bootstrap from "bootstrap";

function App() {
  // TODOS;
  // 1) Improve the routing
  // 2) Look up documentation about Routing specifically with paths

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route>404 not found</Route>
      </Routes>
    </div>
  );
}

export default App;
