import React from 'react';

import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';
import Errorpage from './components/404.jsx';
import Feat from './components/Feat.jsx';
import Footer from './components/Footer.jsx';
import Homepage from './components/Homepage.jsx';
import Logodesigns from './components/Logodesigns.jsx';
import Navbar from './components/Navbar.jsx';
import Products from './components/Products.jsx';
import Services from './components/Services.jsx';
import Quote from './components/Quote.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Logodesigns />
      <Products />
      <Feat />
      <Services />
      <Quote/>
      <Contacts />
      <Footer />
      <Errorpage />
    </div>

  );
}

export default App;
