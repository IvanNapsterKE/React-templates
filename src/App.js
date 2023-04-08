import React from "react";
import About from "./components/main/About.jsx";
import Clients from "./components/pages/Clients.jsx";
import Contacts from "./components/pages/Contacts.jsx";
import Errorpage from "./components/main/404.jsx";
import Feat from "./components/pages/Feat.jsx";
import Footer from "./components/main/Footer.jsx";
import Homepage from "./components/main/Homepage.jsx";
import Logodesigns from "./components/pages/Logodesigns.jsx";
import Navbar from "./components/main/Navbar.jsx";
import Products from "./components/pages/Products.jsx";
import Services from "./components/pages/Services.jsx";
import Shop from "./components/main/Shop.jsx";
import Quoteform from "./components/pages/Quoteform.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Logodesigns />
      <Shop />
      <Products />
      <Feat />
      <Services />
      <Quoteform />
      <Contacts />
      <Clients />
      <Footer />
      <Errorpage />
    </div>
  );
}

export default App;
