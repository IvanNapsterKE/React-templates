import React from "react";
import errorGif from "../error/error.gif";

function Errorpage() {
  return (
    
 
<div class="h-screen w-screen bg-white flex items-center">
	<div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
   		<div class="max-w-md">
      		<div class="text-5xl font-dark font-bold">404</div>
            <p
              class="text-2xl md:text-3xl font-light leading-normal items-center"
            > Oops! Sorry we couldn't find this page. </p>
          <p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
          
          {/* <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-gray-900 active:bg-gray-900 hover:bg-red-500">back to homepage</button> */}
          <button class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-gray-900 text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">Take me Home!</button>
                        
    
    </div>
      <div class="max-w-lg">
        <img src={errorGif}/>
    </div>
    
  </div>
</div>
  );
}

export default Errorpage;
