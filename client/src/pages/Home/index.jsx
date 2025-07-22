import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import blade from '../../assets/images/baledDoctor.png'
import cardiolog from '../../assets/images/cardiolog.jpg'
import gangster from '../../assets/images/gangster.jpg'
import howard from '../../assets/images/howard.jpg'
import realDoctor from '../../assets/images/realDoctor.jpg'
import './Home.styles.scss'

const HomePage = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    window.ymaps.ready(() => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const myMap = new window.ymaps.Map(mapRef.current, {
        center: [41.311081, 69.240562],
        zoom: 10,
      });

      const myPlacemark = new window.ymaps.Placemark(
        [41.311081, 69.240562],
        {
          hintContent: 'Toshkent',
          balloonContent: 'Bizning Manzilimiz',
        }
      );

      myMap.geoObjects.add(myPlacemark);
      mapInstanceRef.current = myMap;
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, []);


  return (
    <div className='container'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        spaceBetween={50}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
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
                  <h2>Dr. John Cena</h2>
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
            Bu web sahifada bepul administratsiyadan konsultatsiya ololasiz.
          </p>
        </div>
        <div>
          <h3>24/7 Tez yordam</h3>
          <p>Bizning tez yordam xizmati yilning barcha kunlari 24 soat faoliyat ko‘rsatadi.</p>
        </div>

        <div>
          <h3>Malakali shifokorlar</h3>
          <p>Markazimizda yuqori malakaga ega shifokorlar faoliyat yuritadi.</p>
        </div>

        <div>
          <h3>Diagnostika xizmatlari</h3>
          <p>So‘nggi texnologiyalar yordamida tez va aniq diagnostika.</p>
        </div>

        <div>
          <h3>Shifokor bilan oldindan uchrashuv</h3>
          <p>Online tarzda shifokor bilan uchrashuvni oldindan belgilashingiz mumkin.</p>
        </div>

        <div>
          <h3>Kasalliklarni oldini olish</h3>
          <p>Profilaktika dasturlari va sog‘lom turmush tarzi bo‘yicha maslahatlar.</p>
        </div>

        <div>
          <h3>Reabilitatsiya</h3>
          <p>Jarrohlikdan keyingi va boshqa kasalliklardan so‘ng reabilitatsiya xizmatlari.</p>
        </div>

        <div>
          <h3>Shoshilinch yordam</h3>
          <p>Favqulodda vaziyatlarda tezkor va samarali tibbiy yordam.</p>
        </div>

        <div>
          <h3>Labaratoriya tekshiruvlari</h3>
          <p>Har xil tahlillarni yuqori sifatli laboratoriyalarda bajarish.</p>
        </div>

        <div>
          <h3>Konsultatsiyalar</h3>
          <p>Turli yo‘nalishdagi mutaxassislar bilan maslahatlashuv imkoniyati.</p>
        </div>

        <div>
          <h3>Shaxsiy yondashuv</h3>
          <p>Har bir bemorga individual yondashuv va parvarish.</p>
        </div>
      </div>
      <div style={{ marginBottom: '70px' }}>
        <h2 style={{ color: '#105e99', textAlign: 'center', marginBottom: '25px' }}>Bizning shifokorlarimiz</h2>
        <p style={{ color: '#454545', textAlign: 'center', marginBottom: '35px' }}>Bizning shifokorlarimiz o'z sohalarida ixtisoslashgan va 10 yildan ortiq tajribaga ega.</p>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          className='swiper'
        >
          {[...Array(2)].map((_, i) => (
            <>
              <SwiperSlide className='slide'>
                <div className="doctorsSlide">
                  <img src={cardiolog} alt="cardiolog" />
                  <h3>Dr.Milia Sins</h3>
                  <p style={{ fontSize: '12px', marginTop: '-20px' }}>Cardiolog</p>
                  <p>Veranda was born and raised in Jakarta, Indonesia...</p>
                </div>
              </SwiperSlide>

              <SwiperSlide className='slide'>
                <div className="doctorsSlide">
                  <img src={howard} alt="howard" />
                  <h3>Dr.Peter Parker</h3>
                  <p style={{ fontSize: '12px', marginTop: '-20px' }}>Neurologist</p>
                  <p>Parker was born and raised in UK...</p>
                </div>
              </SwiperSlide>

              <SwiperSlide className='slide'>
                <div className="doctorsSlide">
                  <img src={gangster} alt="gangster" />
                  <h3>Dr.John Fury</h3>
                  <p style={{ fontSize: '12px', marginTop: '-20px' }}>Psixologist</p>
                  <p>John was born and raised in Indonesia...</p>
                </div>
              </SwiperSlide>

              <SwiperSlide className='slide'>
                <div className="doctorsSlide">
                  <img src={realDoctor} alt="realDoctor" />
                  <h3>Dr. Hooman Azmi</h3>
                  <p style={{ fontSize: '12px', marginTop: '-20px' }}>Dental</p>
                  <p>Hooman was born and raised in Indonesia...</p>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>

      </div>
      <div>
        <h2 style={{ color: '#105e99' }}>Bizning Manzilimiz</h2>
        <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
      </div>
    </div>
  )
}

export default HomePage
