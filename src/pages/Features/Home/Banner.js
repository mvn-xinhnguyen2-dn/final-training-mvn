import { Carousel } from "antd";
import { Link } from "react-router-dom";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.png";

export default function Banner() {
  return (
    <Carousel autoplay className="section-banner">
      <div>
        <div className="banner-content">
          <img className="banner-img" src={banner1} alt="banner" />
          <div className="banner-wrap-text">
            <h3 className="banner-title pb-20">ĐĂNG KÝ TÌM GIA SƯ</h3>
            <h4 className="banner-text">
              Phụ huynh có nhu cầu tìm gia sư? Hãy tin tưởng và đến với trung
              tâm chúng tôi.
            </h4>
            <Link className="primary-btn" to="/auth/login">
              Đăng ký ngay
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="banner-content">
          <img className="banner-img" src={banner2} alt="banner" />
          <div className="banner-wrap-text">
            <h3 className="banner-title">TÌM SUẤT DẠY MỚI</h3>
            <h4 className="banner-text">
              Trung tâm chúng tôi luôn luôn cập nhật các suất dạy được phụ huynh
              đăng ký một cách nhanh nhất, chính xác nhất.
            </h4>
            <Link className="primary-btn" to="/auth/login">
              Xem suất dạy
            </Link>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
