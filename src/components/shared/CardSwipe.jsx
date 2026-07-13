import HeroCard from './HeroCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef,useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

function CardSwipe() {
  return (
   <Swiper
  effect="cards"
  grabCursor={true}
  modules={[EffectCards]}
  className="md:w-[300px] md:h-[400px] w-[250px] h-[350px]"
>
  <SwiperSlide className='rounded-2xl overflow-hidden'>
    <HeroCard bg="bg-main" src="/profile/cartoon.png" />
  </SwiperSlide>

  <SwiperSlide>
    <HeroCard bg="bg-secondary" src="/profile/mypicture.png" />
  </SwiperSlide>
</Swiper>
  )
}

export default CardSwipe