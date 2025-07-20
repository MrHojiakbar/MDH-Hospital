import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import blade from '../../assets/images/baledDoctor.png'
import './Home.styles.scss'

const HomePage = () => {
  return (
    <div className='container'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={50}
        pagination={{ clickable: true }}
        navigation
        className='swiper'
      >
        {[...Array(6)].map((_, i) => (
          <SwiperSlide className='slide' key={i}>
            <div
              className="doctor-slide"
              style={{ backgroundImage: `url(${blade})` }}
            >
              <div className="overlay">
                <div className="text">
                  <h2>Dr. Muhammad Ali</h2>
                  <p>Surgeon | 10 yillik tajriba</p>
                  <button>Batafsil</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="about">
        <div>
          <h2>Bizning klinikamiz ko'rsatadigan xizmatlar</h2>
          <p>
            MDH universalniy markaz biz sizga hohlagan turdagi shifokoringizni oldindan band qilib vaqtingizni tejashingiz mumkin.
            Bizni markazda tez yordam mashinasini ham sizga taklif etolamiz va sizni mahalangizda hohlagan doktoringizni ishlash vaqtini ham taqdim etamiz.
            bu web sahifada bepul administratsiyadan konsultatsiya ololasiz
          </p>
        </div>
      </div>

    </div>
  )
}

export default HomePage