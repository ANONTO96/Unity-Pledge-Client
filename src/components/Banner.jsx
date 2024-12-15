import bnr2 from "../assets/DALL·E 2024-12-04 19.37.22 - A banner image for a crowdfunding website. The first banner should depict a community coming together to support a new innovative product, with divers.webp"
import bnr1 from "../assets/DALL·E 2024-12-04 19.37.36 - A banner image for a crowdfunding website focused on unity and pledges for donations. The scene shows a diverse group of people holding hands in a lar.webp"
import bnr3 from "../assets/DALL·E 2024-11-18 12.24.41 - A banner image for a clothing donation website with a winter theme. The design features a cozy, snowy background with gently falling snowflakes. In th.webp"
import bnr4 from "../assets/online-charity-donation-with-smartphone_24877-54474.avif"

const Banner = () => (
    <div className="carousel w-full md:h-[60vh] lg:h-[75vh]">
    <div id="slide1" className="carousel-item relative w-full">
      <img
        src={bnr1}
        className="w-full" />
      <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform justify-between">
        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <img
        src={bnr2}
        className="w-full" />
      <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <img
        src={bnr3}
        className="w-full" />
      <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform justify-between">
        <a href="#slide2" className="btn btn-circle">❮</a>
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
      <img
        src={bnr4}
        className="w-full" />
      <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
);

export default Banner;
