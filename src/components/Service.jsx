import React from "react";

const Service = () => {
  return (
    <div className="px-4 py-10 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      {/* Heading */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-stone-700 mb-4">
       Our Services
      </h3>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        We provide top-notch services to make your experience seamless and
        delightful. Explore our offerings below.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
          <img
            src="/foodd2.jpeg"
            alt="Fast Delivery"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h4 className="text-lg font-bold text-gray-800 mb-2">
            🚚 Fast Delivery
          </h4>
          <p className="text-gray-600 text-sm">
            Get your orders delivered quickly and safely at your doorstep.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
          <img
            src="/quality.jpeg"
            alt="Quality Food"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h4 className="text-lg font-bold text-gray-800 mb-2">
            🍲 Quality Food
          </h4>
          <p className="text-gray-600 text-sm">
            We ensure fresh, hygienic, and delicious food every time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
          <img
            src="/foodd1.jpeg"
            alt="24/7 Support"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h4 className="text-lg font-bold text-gray-800 mb-2">
            📞 24/7 Support
          </h4>
          <p className="text-gray-600 text-sm">
            Our customer support is always available to assist you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
