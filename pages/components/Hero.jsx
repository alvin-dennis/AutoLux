import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const images = [
  'https://via.placeholder.com/1600x600?text=Banner+1', 
  'https://via.placeholder.com/1600x600?text=Banner+2', 
  'https://via.placeholder.com/1600x600?text=Banner+3'
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background my-14 md:my-10 w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full">
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto object-cover object-center" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
