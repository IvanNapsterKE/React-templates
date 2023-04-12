import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-gray-900">
      <a href="/" className="text-xl font-bold text-white">
        Logo
      </a>
      <button
        className="block md:hidden text-white focus:outline-none"
        onClick={handleToggle}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.293 5.293a1 1 0 0 1 1.414-1.414L12 10.586l6.293-6.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z"
            />
          )}
        </svg>
      </button>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:w-auto`}
      >
        <ul className="pt-4 md:flex md:items-center">
          <li>
            <a
              href="/"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
