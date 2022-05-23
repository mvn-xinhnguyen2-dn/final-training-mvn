import { Carousel } from "antd";

export default function Banner() {
  return (
    <Carousel autoplay className="section-banner">
      <div>
        <div className="banner-content">
          <img
            className="banner-img"
            src="https://images.hdqwalls.com/download/chicago-united-states-5k-zz-2560x1440.jpg"
            alt="banner"
          />
          <div className="banner-wrap-text">
            <h3 className="banner-title pb-20">ĐĂNG KÝ TÌM GIA SƯ</h3>
            <h4 className="banner-text">
              Phụ huynh có nhu cầu tìm gia sư? Hãy tin tưởng và đến với trung
              tâm chúng tôi.
            </h4>
          </div>
        </div>
      </div>
      <div>
        <div className="banner-content">
          <img
            className="banner-img"
            src="https://wallpapersmug.com/download/1920x1080/1f2f27/chicago-city-skycrapers-buildings.jpg"
            alt="banner"
          />
          <div className="banner-wrap-text">
            <h3 className="banner-title">TÌM SUẤT DẠY MỚI</h3>
            <h4 className="banner-text">
              Trung tâm chúng tôi luôn luôn cập nhật các suất dạy được phụ huynh
              đăng ký một cách nhanh nhất, chính xác nhất.
            </h4>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
