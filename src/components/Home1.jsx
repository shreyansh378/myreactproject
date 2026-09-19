import React from "react";
import { useNavigate } from "react-router-dom";

const Home1 = () => {
  const handleCLick = () => {
    console.log("click me");
  };

  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden bg-white text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section
        className="w-full bg-yellow-100 bg-cover bg-center bg-no-repeat
                   py-10 sm:py-12 md:py-20
                   px-4 sm:px-6 md:px-20
                   text-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <div className="w-full max-w-4xl mx-auto bg-yellow-100/70
                        p-5 sm:p-6 md:p-8
                        rounded-xl">

          <h1 className="text-3xl sm:text-4xl md:text-5xl
                         font-bold mb-4 leading-tight">
            Welcome to LALA Restaurant 🍽️
          </h1>

          <p className="text-base sm:text-lg md:text-xl
                        mb-6 leading-relaxed">
            Discover delicious meals, recipes, and food tips every day.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row
                          gap-3 sm:gap-4
                          justify-center items-stretch sm:items-center">

            <button
              onClick={() => navigate("/explore")}
              className="w-full sm:w-auto
                         bg-red-500 hover:bg-red-600
                         text-white font-semibold
                         px-6 py-3
                         rounded-lg
                         transition-all duration-300
                         shadow-md"
            >
              Explore More
            </button>

            <button
              onClick={() => navigate("/order")}
              className="w-full sm:w-auto
                         bg-white text-red-500
                         font-semibold
                         px-6 py-3
                         rounded-lg
                         hover:bg-gray-100
                         transition duration-300"
            >
              Order Now
            </button>

          </div>
        </div>
      </section>


      {/* ================= FEATURES SECTION ================= */}
      <section className="w-full py-10 sm:py-12 md:py-16
                          px-4 sm:px-6 md:px-20">

        <h2 className="text-2xl sm:text-3xl
                       font-bold text-center
                       mb-8 sm:mb-10">
          Why Choose Us?
        </h2>

        <div className="max-w-7xl mx-auto
                        grid grid-cols-1 md:grid-cols-3
                        gap-5 sm:gap-6 md:gap-8">

          {/* Card 1 */}
          <div className="p-5 sm:p-6
                          border rounded-lg shadow
                          hover:shadow-lg
                          transition duration-300">

            <h3 className="text-lg sm:text-xl
                           bg-amber-300
                           font-semibold
                           mb-3
                           p-1 rounded">
              Fresh Ingredients
            </h3>

            <p className="text-sm sm:text-base leading-relaxed">
              We use only the freshest ingredients to ensure your meals
              are healthy and tasty.
            </p>
          </div>


          {/* Card 2 */}
          <div className="p-5 sm:p-6
                          border rounded-lg shadow
                          hover:shadow-lg
                          transition duration-300">

            <h3 className="text-lg sm:text-xl
                           bg-emerald-600
                           font-semibold
                           mb-3
                           p-1 rounded">
              Quick Delivery
            </h3>

            <p className="text-sm sm:text-base leading-relaxed">
              Your food delivered hot and fast right to your doorstep.
            </p>
          </div>


          {/* Card 3 */}
          <div className="p-5 sm:p-6
                          border rounded-lg shadow
                          hover:shadow-lg
                          transition duration-300">

            <h3 className="text-lg sm:text-xl
                           bg-indigo-400
                           font-semibold
                           mb-3
                           p-1 rounded">
              Affordable Prices
            </h3>

            <p className="text-sm sm:text-base leading-relaxed">
              Tasty meals that won’t break your wallet.
            </p>
          </div>

        </div>
      </section>


      {/* ================= CALL TO ACTION ================= */}
      <section className="w-full
                          bg-red-500 text-white
                          py-10 sm:py-12
                          px-4 sm:px-6 md:px-20
                          text-center">

        <h2 className="text-2xl sm:text-3xl
                       font-bold mb-4
                       leading-tight">
          Ready to taste the difference?
        </h2>

        <p className="text-sm sm:text-base
                      mb-6 leading-relaxed">
          Join thousands of happy food lovers today.
        </p>

        <button
          onClick={handleCLick}
          className="w-full sm:w-auto
                     bg-white text-red-500
                     font-semibold
                     px-6 py-3
                     rounded-lg
                     hover:bg-gray-100
                     transition duration-300"
        >
          Order Now
        </button>

      </section>

    </div>
  );
};

export default Home1;