import React from 'react';

function About() {
    return (
      <div  className='container mx-auto'>
          <>
            <div className=" relative flex content-center items-center justify-center" style={{minHeight: '75vh'}}>
              <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")'}}>
                <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black" />
              </div>
              <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="pr-12">
                      <h1 className="text-white font-semibold text-5xl">
                        Your story starts with us.
                      </h1>
                      <p className="mt-4 text-lg text-gray-300">
                        This is a simple example of a Landing Page you can build using
                        Tailwind Starter Kit. It features multiple CSS components
                        based on the Tailwindcss design system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{height: '70px', transform: 'translateZ(0px)'}}>
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0}>
                  <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
                </svg>
              </div>
            </div>
            <section className="relative py-20">
              <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{height: '80px', transform: 'translateZ(0px)'}}>
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0}>
                  <polygon className="text-white fill-current" points="2560 0 2560 100 0 100" />
                </svg>
              </div>
              <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                  </div>
                  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">
                      <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                        <i className="fas fa-rocket text-xl" />
                      </div>
                      <h3 className="text-3xl font-semibold">A growing company</h3>
                      <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        The extension comes with three pre-built pages to help you get
                        started faster. You can change the text and images and you're
                        good to go.
                      </p>
                      <ul className="list-none mt-6">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fas fa-fingerprint" /></span>
                            </div>
                            <div>
                              <h4 className="text-gray-600">
                                Carefully crafted components
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fab fa-html5" /></span>
                            </div>
                            <div>
                              <h4 className="text-gray-600">Amazing page examples</h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="far fa-paper-plane" /></span>
                            </div>
                            <div>
                              <h4 className="text-gray-600">Dynamic components</h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
           
            <section className="pb-20 relative block bg-gray-900">
              <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{height: '80px', transform: 'translateZ(0px)'}}>
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0}>
                  <polygon className="text-gray-900 fill-current" points="2560 0 2560 100 0 100" />
                </svg>
              </div>
              <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                <div className="flex flex-wrap text-center justify-center">
                  <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-4xl font-semibold text-white">Build something</h2>
                    <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                      Put the potentially record low maximum sea ice extent tihs year
                      down to low ice. According to the National Oceanic and
                      Atmospheric Administration, Ted, Scambos.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap mt-12 justify-center">
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-medal text-xl" />
                    </div>
                    <h6 className="text-xl mt-5 font-semibold text-white">
                      Excelent Services
                    </h6>
                    <p className="mt-2 mb-4 text-gray-500">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-poll text-xl" />
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                      Grow your market
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-lightbulb text-xl" />
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">Launch time</h5>
                    <p className="mt-2 mb-4 text-gray-500">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
          <footer className="relative bg-gray-300 pt-8 pb-6">
            <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{height: '80px', transform: 'translateZ(0px)'}}>
              <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0}>
                <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
              </svg>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
                  <h5 className="text-lg mt-0 mb-2 text-gray-700">
                    Find us on any of these platforms, we respond 1-2 business days.
                  </h5>
                  <div className="mt-6">
                    <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                      <i className="fab fa-twitter" /></button><button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                      <i className="fab fa-facebook-square" /></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                      <i className="fab fa-dribbble" /></button><button className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                      <i className="fab fa-github" />
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="flex flex-wrap items-top mb-6">
                    <div className="w-full lg:w-4/12 px-4 ml-auto">
                      <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Useful Links</span>
                      <ul className="list-unstyled">
                        <li>
                          <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation">About Us</a>
                        </li>
                        <li>
                          <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com">Blog</a>
                        </li>
                        <li>
                          <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial">Github</a>
                        </li>
                        <li>
                          <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free">Free Products</a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Other Resources</span>
                      <ul className="list-unstyled">
                        <li>
                          <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md">MIT License</a>
                        </li>
                        <li>
                          <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms">Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy">Privacy Policy</a>
                        </li>
                        <li>
                          <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-gray-400" />
             
            </div>
          </footer>
        
      </div>
    );
  }
  
  export default About;

  
       
 


