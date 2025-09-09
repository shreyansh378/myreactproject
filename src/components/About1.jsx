import React from 'react';

const About1 = () => {
  return (
    <div className="bg-sky-200 text-gray-800 px-6 md:px-20 py-12">
         

      {/* Header */}

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        About Us
      </h1>

      {/* Introduction */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-lg md:text-xl">
          Welcome to <span className="font-bold text-red-500">TastyBites</span> — your go-to destination for delicious, fresh, and affordable meals. Whether you're craving homestyle comfort food or something exciting, we deliver happiness to your plate!
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          Our mission is to bring joy through food by offering a variety of high-quality dishes made from the freshest ingredients. We believe food is more than just fuel — it's an experience that connects people.
        </p>
      </section>
<div>
  
</div>
      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>✅ Fresh ingredients sourced daily</li>
          <li>✅ Friendly and fast delivery</li>
          <li>✅ Affordable meals for everyone</li>
          <li>✅ Passionate chefs who love what they do</li>
        </ul>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <img
              src="public/download.jpeg"
              alt="Chef 1"
              className="w-24 h-24 mx-auto rounded-full mb-2"
            />

            <h3 className="font-bold">Chef yoyu</h3>
            <p className="text-sm text-gray-600">Head Chef</p>
          </div>
          <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <img
              src="public/photo-1552642986-ccb41e7059e7.jpeg"
              alt="Chef 2"
              className="w-24 h-24 mx-auto rounded-full mb-2"
            />
            <h3 className="font-bold">Chef Rohan</h3>
            <p className="text-sm text-gray-600">Grill Specialist</p>
          </div>
<div className="border p-4 rounded shadow hover:shadow-lg transition">
            <img
              src="public/download (1).jpeg"
              alt="Manager"
              className="w-24 h-24 mx-auto rounded-full mb-2"
            />
            <h3 className="font-bold">Neha Sharma</h3>
            <p className="text-sm text-gray-600"> Operations Manager </p>
          </div>

        </div>
       
      </section>
    </div>
  );
};

export default About1;
          