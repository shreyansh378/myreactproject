import React from "react";

const MenuPage = () => {
  return (
    <div className=" px-4 py-8 bg-gradient-to-b from-white to-gray-100">
      {/* Heading */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-emerald-600 mb-6">
        🍽️ This is our Menu Page 🍽️ 
      </h3>

      {/* Banner Image */}
      <div className=" relative w-full max-w-8xl mx-auto mb-8">
        <img
          src="/banner1.jpg"
          alt="Menu"
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-xl"
        />
        {/* Overlay text on image */}
        {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
          <p className="text-white text-lg sm:text-2xl md:text-3xl font-bold">
            Delicious Dishes Await You
          </p>
        </div> */}
      </div>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition">
          <img
            src="/food1.jpeg"
            alt="Food 1"
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
          <h4 className="text-lg font-bold text-gray-800">Veg Thali</h4>
          <p className="text-gray-600 text-sm">A healthy & tasty veg meal</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition">
          <img
            src="/imageeee.jpg"
            alt="Food 2"
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
          <h4 className="text-lg font-bold text-gray-800">Paneer Butter Masala</h4>
          <p className="text-gray-600 text-sm">Rich and creamy paneer curry</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition">
          <img
            src="/food3.jpeg"
            alt="Food 3"
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
          <h4 className="text-lg font-bold text-gray-800">Biryani</h4>
          <p className="text-gray-600 text-sm">Spiced rice with flavors of India</p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
