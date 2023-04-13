import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/main/About.jsx";
import Cart from "./components/Shop/Cart.jsx";
import Clients from "./components/pages/Clients.jsx";
import Contacts from "./components/pages/Contacts.jsx";
import Errorpage from "./components/error/404.jsx";
import Feat from "./components/pages/Feat.jsx";
import Footer from "./components/main/Footer.jsx";
import Homepage from "./components/main/Homepage.jsx";
import Logodesigns from "./components/pages/Logodesigns.jsx";
import Navbar from "./components/main/Navbar.jsx";
import Products from "./components/Shop/Products.jsx";
import Productcard from "./components/Shop/Product card.jsx";
import Services from "./components/pages/Services.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Quoteform from "./components/pages/Quoteform.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

      <Routes>
      <Route path="/" element={<Homepage />} />
      
      <Route path="about" element={<About />} />
      <Route path="logos" element={<Logodesigns />} />
      <Route path="shop" element={<Shop />} />
      <Route path="products" element ={<Products /> } />
      <Route path="product" element ={<Productcard/>} />
      <Route path="cart" element ={<Cart />} />
      <Route path="feat" element ={<Feat />} />
      <Route path="services" element ={<Services />} />
      <Route path="quote" element ={<Quoteform />} />
      <Route path="contacts" element ={<Contacts />} />
      <Route path="clients" element ={<Clients />} />
      <Route path="footer" element ={<Footer />} />
      <Route path="404" element ={<Errorpage />} />
      </Routes>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
