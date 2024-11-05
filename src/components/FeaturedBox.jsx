import React from "react";
import Logo from "../assets/img/Logo.png";


const FeaturedBox = () => {
  return (
    <section  id="home">
    <section className="featured-box">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>ร้านขายเครื่องเขียน</span>
        </div>
        <div className="featured-name">
          ร้านเราจำหน่าย <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
          ร้านDiary Dream จำหน่ายอุปกรณ์เครื่องเขียนหลากหลายชนิด ทั้งดินสอ ปากกา ยางลบ สมุดบันทึก อุปกรณ์ศิลปะ และวัสดุสำนักงาน สินค้ามีคุณภาพสูงจากแบรนด์ดัง.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            ซื้อเลย <i className="uil uil-shopping-cart-alt"></i>
          </button>
          <button className="btn">
            ดูเพิ่มเติม <i className="uil uil-info-circle"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/ft_0504">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/profile.php?id=100024504471796">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/Kasuya95">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={Logo} alt="avatar" />
        </div>
      </div>
    </section>
    <section className="section" >
    <div className="top-header">
      <h1>Contact</h1>
    </div>
    <div className="contacts-container">
      <div className="contacts-box">
      <i className="uil uil-truck"></i>
        <h3>ส่งไว</h3>
        <label>Lorem ipsum dolor sit, </label>
      </div>
      <div className="contacts-box">
      <i class="uil uil-headphones"></i>
          <h3>ตอบไว</h3>
          <label>99+ Finished projects</label>
        </div>
        <div className="contacts-box">
        <i class="uil uil-bitcoin-circle"></i>
          <h3>คุ้มค่า</h3>
          <label>99+ Finished projects</label>
        </div>
        <div className="contacts-box">
        <i class="uil uil-heart"></i>
          <h3>ไว้ใจได้</h3>
          <label>99+ Finished projects</label>
        </div>
    </div>
    
  </section>
    </section>
  );
};
export default FeaturedBox;
