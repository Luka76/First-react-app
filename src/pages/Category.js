import Slider from "react-slick";
import Banner from "../components/Banner";
import Categories from "../components/Header/Categories";
import Navbar from "../components/Header/Navbar";
import "./Category.css";
import Feed from "../components/Feed";
import MediumBanner from "../components/MediumBanner";
import Footer from "../components/Footer/Footer";

const Category = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Banner />
      <Slider />
      <div className="article-container">
        <div className="news-container">
          <h1>News</h1>
          <Feed />
          <div className="small-cut" />
          <Feed />
          <div className="small-cut" />
          <Feed />
          <div className="small-cut" />
          <Feed />
          <div className="small-cut" />
          <Feed />
          <div className="small-cut" />
          <Feed />
          <div className="small-cut" />
          <div className="page-numbers">
            <div className="page">1</div>
            <div className="page">2</div>
            <div className="page">3</div>
            <div className="page active">4</div>
            <div className="page">5</div>
            <div className="page">6</div>
            <div className="page">7</div>
            <div className="page">8</div>
            <div className="page">9</div>
            <div className="page">10</div>
          </div>
          <MediumBanner />
        </div>
        <div className="side-container">
          <h2>this part is for sidebar</h2>
          {/* <Trending />
          <Social />
          <Kenaztv />
          <SmallBanner />
          <Activity /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
