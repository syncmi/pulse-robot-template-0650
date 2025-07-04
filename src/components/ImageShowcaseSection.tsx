
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Global Trade Excellence
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our comprehensive trading and export solutions are designed to connect 
            businesses with international markets seamlessly.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/global-trade.jpg" 
              alt="Global trading and export business operations" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Your Global Trade Partner</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              With 15+ years of experience and presence in 50+ markets, ZZEBTORZ provides 
              comprehensive trading and export solutions, helping businesses expand their 
              global reach with confidence and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
