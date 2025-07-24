import React from "react";
import "./about.scss";

const AboutUsPage = () => {
  return (
    <div className="about-wrapper">
      <h1>Nima uchun aynan MDH kilinikasi?</h1>
      <div className="about-us">
        <div className="about-card">
          <b>Biz haqimizda – MDH Clinic</b>
          <p>
            MDH Clinic – bu zamonaviy texnologiyalar va tibbiy xizmatlarni
            uyg‘unlashtirgan, sog‘liqni saqlash sohasida ishonchli yechimlarni
            taklif etuvchi klinikadir. Biz bemorlar ehtiyojini chuqur tushunamiz
            va ularning hayot sifatini yaxshilashga intilamiz.
          </p>
        </div>
        <div className="about-card">
          <b>🎯 Missiyamiz</b>
          <p>
            Bizning asosiy maqsadimiz – har bir bemorga qulay, tezkor va sifatli
            tibbiy xizmatlarni taqdim etish. MDH Clinic sog‘liqni saqlashning
            har bir bosqichida yuqori darajadagi g‘amxo‘rlikni ta’minlash uchun
            yaratilgan.
          </p>
        </div>
        <div className="about-card">
          <b>📈 Tariximiz</b>
          <p>
            MDH Clinic 2024-yilda bir guruh professional shifokorlar va ilg‘or
            texnologlar tomonidan asos solingan. Loyihamiz dastlab kichik
            klinikalarga zamonaviy onlayn tizim orqali yordam berish g‘oyasi
            bilan boshlangan. Bugun esa biz yuzlab bemorlar va shifokorlar uchun
            asosiy tanlovga aylanyapmiz.
          </p>
        </div>
        <div className="about-card">
          <b>🧑‍⚕️ Jamoamiz</b>
          <p>
            Jamoamiz tarkibida malakali shifokorlar, tajribali tibbiyot
            xodimlari va innovatsion yechimlarni ishlab chiquvchi dasturchilar
            bor. Har bir a’zo o‘z ishiga mas’uliyat bilan yondashadi va
            bemorlarning sog‘lig‘ini o‘z hayotidan ustun qo‘yadi.
          </p>
        </div>
        <div className="about-card">
          <b>🤝 Ishonchli xizmat</b>
          <p>Bugungi kunda MDH Clinic xizmatlaridan:</p>
          <ul>
            <li>20+ klinika,</li>
            <li>150+ shifokor,</li>
            <li>minglab bemorlar muntazam foydalanmoqda.</li>
          </ul>
        </div>

        <div className="about-card">
          <b>Hamkorlarimiz</b>
          <div className="hamkor">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJ9Me-16JOd4xB194F7AILrUdlogB951Nmw&s"
              alt=""
            />
            <p>Akfa Medline Clinics</p>
          </div>
          <div className="hamkor">
            <img
              src="https://media.licdn.com/dms/image/v2/C561BAQHodoS29waRHQ/company-background_10000/company-background_10000/0/1584850193600?e=2147483647&v=beta&t=Ep1gbdHYRIKqCfbb35pAdvx-FdWWOwPoF2RxEw9O_7s"
              alt=""
            />
            <p>Mediwell Clinics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
