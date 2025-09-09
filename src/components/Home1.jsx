import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home1 = () => {
  
  const handleCLick=()=>{
    console.log("click me")
  }

  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-800">
    
      {/* Hero Section */}
     <section
  className="bg-yellow-100 py-12 px-6 md:px-20 text-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
"url('https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D')"  }}
>
  <div className="bg-yellow-100/70 p-6 rounded-xl inline-block">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Welcome to LALA Resturant 🍽️
    </h1>
    <p className="text-lg md:text-xl mb-6">
      Discover delicious meals, recipes, and food tips every day.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button  onClick={()=>{
        navigate('/explore')
      }}
  className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md"
>
  Explore More 
</button>

      <button
        className="w-full sm:w-auto bg-white text-red-500 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition duration-300"
        onClick={() => {
          navigate('/order')
        }}
      >
        Order Now
      </button>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-12  px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl bg-amber-300 font-semibold mb-2">Fresh Ingredients</h3>
            <p>
              We use only the freshest ingredients to ensure your meals are healthy and tasty.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl bg-emerald-600  font-semibold mb-2">Quick Delivery</h3>
            <p>
              Your food delivered hot and fast right to your doorstep.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl bg-indigo-400 font-semibold mb-2">Affordable Prices</h3>
            <p>
              Tasty meals that won’t break your wallet.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-red-500 text-white py-10 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to taste the difference?</h2>
        <p className="mb-6">
          Join thousands of happy food lovers today.
        </p>
        <button onClick={handleCLick} className="bg-white text-red-500 font-semibold px-6 py-2 rounded hover:bg-gray-100">
          Order Now
        </button>
      </section>
    </div>
  );
};

export default Home1;
