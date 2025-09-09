import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Order = () => {
  return (
    <div className="mt-6 px-4">
      {/* Order Info */}
      <div className="text-center mb-6">
        <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl">
          Order Now : <span className="text-red-500">+91-9415988098</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-normal mt-2">
          (Time - 9:00 A.M. to 11:00 P.M.)
        </p>

        {/* Responsive Button */}
        <a
          href="tel:+91 9415988098"
          className="inline-block mt-4 bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          📞 Call to Order
        </a>
      </div>

      {/* Image Slider */}
      <div className="w-full max-w-4xl mx-auto mb-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
          className="rounded-xl shadow-lg"
        >
          <SwiperSlide>
            <img
              src="/food1.jpeg"
              alt="Food 1"
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/food2.jpeg"
              alt="Food 2"
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/food3.jpeg"
              alt="Food 3"
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/food4.jpeg"
              alt="Food 4"
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Order;
