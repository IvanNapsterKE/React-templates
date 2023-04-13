import React from "react";
import products from "./db/data.js";
import Cards from "./Card.jsx";
import {
  Bars3Icon,
  ShoppingBagIcon,
  UserIcon,
  ShoppingCartIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

function Shop({ handleClick }) {
  return (
    

    <div>
       {/* shop header begins */}
      <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer md:hidden block"
          >
            <Bars3Icon class="stroke-2 h-6 w-6 text-gray-900" />
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div
            className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li>
                  {" "}
                  <a
                    className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                    href="#"
                  >
                    {" "}
                    Shop{" "}
                  </a>{" "}
                </li>

                <li>
                  {" "}
                  <a
                    className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>{" "}
                </li>
              </ul>
            </nav>
          </div>
          <div className="order-1 md:order-2">
            <a
              className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              href="#"
            >
              <ShoppingBagIcon class="stroke-2 h-6 w-6 text-gray-900" />
              OUR STORE
            </a>
          </div>
          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            <a className="inline-block no-underline hover:text-black" href="#">
              <UserIcon class="stroke-2 font-bold h-6 w-6 text-gray-900" />
            </a>
            <a
              className="pl-3 inline-block no-underline hover:text-black"
              href="#"
            >
              <ShoppingCartIcon class="stroke-2 h-6 w-6 text-gray-900" />
            </a>
          </div>
        </div>
      </nav>
       {/* shop header ends */}

       {/* product grid begins */}
       
      <section className=" bg-white text-gray-900 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Cards product={product} key={product.id} handleClick={handleClick} />
        ))}
      </section>
      {/* product grid ends */}
    </div>
  );
}

export default Shop;
