import React, { useState } from "react";


// import logoImage from "../asserts/images/logoImage.jpg";

import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";






function Navbar() {
  const [menu, setMenu] = useState(false);
  // function to display menu
  const handleMenu = () => {
    setMenu(!menu);
  };

   // function to make the navLinks disappear when clicked on the small screen
   const handleNavLinkDisappear = () => {
    setMenu(false);
  };

  return (


    
      <div className="bg-black  sticky top-0 z-50">
        <nav className="relative px-4 py-4 flex justify-between items-center bg-black">
          <div>
            {/* <img src={logoImage} alt="logo" className="w-12 h-12" /> */}
          </div>

          <div className="text-2xl text-white md:hidden">
            {menu === false ? (
              <Bars3Icon class="h-6 w-6 text-gray-500" onClick={handleMenu} />
            ) : (
              <XCircleIcon class="h-6 w-6 text-gray-500" onClick={handleMenu} />
            )}
          </div>

          {/* large screen */}
          <nav className="hidden md:block md:container pl-10">
          <div className="flex justify-between text-xl">
              <div className="flex text-white space-x-4">
              <Link to="/">
                <a href="/" className= 'text-2xl font-bold leading-none'>Home</a>
                  
                </Link>

                <Link to="about">
                <a href="About" className= 'text-2xl font-bold leading-none'>Why Us</a>
                  
                </Link>

                <Link to="services">
                <a href="Services" className= 'text-2xl font-bold leading-none'>Services</a>
                  
                </Link>

                <Link to="contacts">
                <a href="Contacts" className= 'text-2xl font-bold leading-none'>Contacts</a>
                </Link>

                <Link to="shop">
                <a href="Shop" className= 'text-2xl font-bold leading-none'>Shop</a>
                </Link>
                <Link to="test">
                <a href="Test" className= 'text-2xl font-bold leading-none'>Test</a>
                </Link>
               
              </div>
              <div>
              <Link to="quote">
                  <p className=" capitalize bg-green-400 w-32 text-center rounded-md">
                    Get Quote
                  </p>
                </Link>
              </div>
            </div>
          </nav>
        </nav>




        {/* mobile screen */}
        <nav className='md:hidden'>
          {menu && (
            <div className="text-xl border-t text-white mx-5">
              <div className="space-y-6 py-4 ">
              <Link to="/">
                  <p className='' onClick={handleNavLinkDisappear} >Home</p>
                </Link>

                <Link to="about">
                  <p className='mt-2' onClick={handleNavLinkDisappear}>About us</p>
                </Link>
                <Link to="shop">
                  <p className='mt-2' onClick={handleNavLinkDisappear}>Shop</p>
                </Link>
                <Link to="services">
                  <p className='mt-2' onClick={handleNavLinkDisappear}>Services</p>
                </Link>
                <Link to="contacts">
                  <p className='mt-2'onClick={handleNavLinkDisappear} >Contacts</p>
                </Link>
                <Link to="quote">
                  <p className="mt-4 capitalize bg-green-400 w-32 text-center rounded-md" onClick={handleNavLinkDisappear}>
                    Get Quote
                  </p>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
   
  );
};

export default Navbar;