import React from "react";
import "./contacts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const ContactsPage = () => {
  return (
    <div className="contacts">
      <div className="contactWidthAdmin">
        <img
          src="https://www.gazeta.uz/media/img/2017/01/mTQ1S114847157544978_b.jpg"
          alt=""
        />
        <button>
          <a href="tel:+998998890524">Bizga aloqaga chiqing!</a>
          <FontAwesomeIcon icon={faPhoneVolume} className="call" />
        </button>
      </div>
      <div className="contactInfo">
        <div className="c">
          <b>📞 Bog‘lanish – MDH Clinic</b>
          <ul>
            <li>
              Biz sizning sog‘lig‘ingiz haqida qayg‘uramiz va har doim siz bilan
              aloqada bo‘lishga tayyormiz. Quyidagi ma’lumotlar orqali biz bilan
              tez va qulay tarzda bog‘lanishingiz mumkin. Biz sizning
              sog‘lig‘ingiz haqida qayg‘uramiz va har doim siz bilan aloqada
              bo‘lishga tayyormiz. Quyidagi ma’lumotlar orqali biz bilan tez va
              qulay tarzda bog‘lanishingiz mumkin.
            </li>
          </ul>
        </div>
        <div className="c">
          <b>📍 Manzil:</b>
          <ul>
            <p>MDH Clinic</p>
            <li>Toshkent sh., Mustaqillik ko'chasi 10</li>
          </ul>
        </div>
        <div className="c">
          <b>☎️ Telefon:</b>
          <ul>
            <p>Ish vaqti davomida qo‘ng‘iroq qiling:</p>
            <li>
              <a href="tel:+998991234567">+998 99 123 45 67</a>
            </li>
            <li>
              <a href="tel:+998712345678">+998 71 234 56 78</a>
            </li>
          </ul>
        </div>
        <div className="c">
          <b>🕒 Ish vaqti:</b>
          <ul>
            <li>Dushanba – Juma: 09:00 – 18:00</li>
            <li>Shanba: 10:00 – 14:00</li>
            <li>Yakshanba: Dam olish kuni</li>
          </ul>
        </div>
        <div className="c">
          <b>📧 Email:</b>
          <ul>
            <li>
              Umumiy savollar:{" "}
              <a href="mailto:info@mdhclinic.uz">info@mdhclinic.uz</a>
            </li>
            <li>
              Qabul bo‘yicha:{" "}
              <a href="mailto:appointment@mdhclinic.uz">
                appointment@mdhclinic.uz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
