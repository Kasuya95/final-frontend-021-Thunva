import React from "react";

const Footer = () => {
  return (<footer className="footer">
    <div className="top-footer">
    <div className="row" >

        <div className="form-control">
          <p>กรอกอีเมลเพื่อรับข่าวสาร</p>
          <div className="form-inputs">
            <input type="text" className="text input-field" placeholder="Youe Email Address" />
            
            <button className="btn">
            Subscribe <i className="uil uil-message"></i>
            </button>
          </div>
        </div>

      </div>
      <p>--------------------------------------------------</p>
    </div>
    <div className="middle-footer">
      <div className="footer-menu">
        <div className="footer_menu_list">
          <div className="footer-menu">
          <div>
            <a >Quick Link</a>
            <ul>ดินสอ</ul>
            <ul>ยางลบ</ul>
            <ul>ไม้บรรทัด</ul>
            <ul>สีไม้</ul>
          </div>
          <div>
            <a >Popilar Services</a>
            <ul>ทำรายงาน</ul>
            <ul>ปริ้นเอกสาร</ul>
          </div>
          <div>
            <a >Contact Us</a>
            <ul>+66 23793 883</ul>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="footer-social-icons">
      <div className="icon">
        <a href="https://www.instagram.com/ft_0504">
          <i className="uil uil-instagram"></i>
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



  </footer>
  )
};
export default Footer;
