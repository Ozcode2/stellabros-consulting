import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const handleEnrollClick = () => {
    const phoneNumber = "2347080273774";
    const message = `Hello, I am interested in the services you render`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // Opens the WhatsApp link in a new tab
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <div className="home">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              className="home__image"
              alt=""
              src="https://plus.unsplash.com/premium_photo-1692241076210-9e696db67fce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <img
              className="home__imageOne"
              alt=""
              src="https://plus.unsplash.com/premium_photo-1663047237571-fec4456a40a2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <img
              className="home__imageTwo"
              alt=""
              src="https://images.unsplash.com/photo-1587050007609-d9686b217bd6?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <img
              className="home__imageThree"
              alt=""
              src="https://plus.unsplash.com/premium_photo-1736194029305-0679db1e368b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <img
              className="home__imageFour"
              alt=""
              src="https://images.unsplash.com/photo-1577648875929-894904f7b051?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <img
              className="home__imageFive"
              alt=""
              src="https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </Slider>
        <div className="hero-text">
          <h1 className="hero-title">
            We Are <span class="gradient-text">Stellabros</span>
          </h1>
          <h2 className="title-span">
            <Typewriter
              words={[
                "This is where innovation meets creativity. We turn visions into reality, delivering solutions that inspire and engage your audience.",
              ]}
              loop={1}
              cursor={false}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <span className="cursor-emoji">🖋</span>
          </h2>
        </div>
        <div className="social-group">
          <div className="social-wrap">
            <div className="social-icons">
              <a
                onClick={handleEnrollClick}
                href="https://twitter.com/Ozcode2"
                target="_blank"
              >
                <img
                  src="./whatsapp.png"
                  className="social-link"
                  height={20}
                  width={20}
                ></img>
              </a>
              <a
                href="https://www.instagram.com/stellabros_consulting1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                <img
                  src="./instagram.png"
                  className="social-link"
                  height={20}
                  width={20}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
