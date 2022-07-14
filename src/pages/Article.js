import Banner from "../components/Banner";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Header/Categories";
import Navbar from "../components/Header/Navbar";
import MediumBanner from "../components/MediumBanner";
import Comment from "../components/Comment";
import kidsPhoto from "../assets/Layer-65.png";
import screenshot from "../assets/Layer-67.png";
import likes from "../assets/Layer-69.png";
import author from "../assets/Layer-68.png";
import "./Article.css";
import Activity from "../components/Sidebar/Activity";
import Trending from "../components/Sidebar/Trending";
import Social from "../components/Sidebar/Social";
import Kenaztv from "../components/Sidebar/Kenaztv";
import SmallBanner from "../components/Sidebar/SmallBanner";

const Article = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Banner />
      <div className="headline">
        <img src={kidsPhoto} alt="" />
        {/* <div classname="title">
          <p>August 26,2013</p>
          <h1>'Margot' breathlessly reimagines Anne Frank's sister</h1>
        </div> */}
        <div className="fade" />
      </div>
      <div className="story-container">
        <div className="story-part">
          <div className="first-part">
            <p>
              Vestibulum id ligula porta felis euismod semper. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Aenean lacinia
              bibendum nulla sed consectetur.Sed posuere consectetur est at
              lobortis. Donec sed odio dui. Aenean lacinia bibendum nulla sed
              consectetur. Cras justo odio, dapibus ac facilisis in, egestas
              eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue
              laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Donec sed odio dui. Nulla vitae
              elit libero, a pharetra augue. Curabitur blandit tempus porttitor.
              Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
              urna mollis ornare vel eu leo.
            </p>
          </div>
          <div className="img-part">
            <img src={screenshot} alt="bookpage" />
          </div>
          <div className="second-part">
            <p>
              Molestias ultricies, ante quam urna ut volutpat, egestas dolor
              dui, nec hac ultrices nulla non netus. Placerat vehicula donec non
              suscipit egestas, augue vel suspendisse. Et felis venenatis
              blandit sed est ultrices, adipiscing urna, at aliquam nullam
              facilisis aliquet sapien, eget duis consectetuer tristique nunc
              vitae erat, mi purus nisl lorem. Ac magna lobortis non, vulputate
              vitae viverra. Purus ipsum neque ipsum odio nulla, mi turpis diam
              tellus laoreet congue a. Rhoncus maecenas, sit suspendisse,
              condimentum purus convallis dui hendrerit. Purus ipsum neque ipsum
              odio nulla, mi turpis diam tellus laoreet congue.{" "}
            </p>
            <div className="likes-shares">
              <img src={likes} alt="" />
            </div>
          </div>
          <MediumBanner />
          <div>
            <h2>About the Author</h2>
            <div className="about-author">
              <img src={author} alt="" />
              <p>
                Molestias ultricies, ante quam urna ut volutpat, egestas dolor
                dui, nec hac ultrices nulla non netus. Placerat vehicula donec
                non suscipit egestas, augue vel suspendisse. Et felis venenatis
                blandit sed est ultrices, adipiscing urna, at aliquam nullam
                facilisis aliquet sapien, eget duis consectetuer tristique nunc
                vitae erat, mi purus nisl lorem.{" "}
              </p>
            </div>
          </div>
          <div className="comments-container">
            <h2>Comments</h2>
            <Comment />
            <Comment />
            <Comment />
            <h2>Add Your Comment</h2>
            <p className="your-comment">
              Molestias ultricies, ante quam urna ut volutpat, egestas dolor
              dui, nec hac ultrices nulla non netus. Placerat vehicula donec non
              suscipit egestas, augue vel suspendisse. Et felis venenatis
              blandit sed est ultrices, adipiscing urna.
            </p>
            <div className="name-input">
              <label for="name" />
              <input id="name" placeholder="Name" type="text" />
            </div>
            <div className="email">
              <label for="email" />
              <input id="email" placeholder="Email Adress" type="text" />
            </div>
            <div className="input">
              <label for="input" />
              <input id="input" placeholder="Comment" type="text" />
            </div>
            <button>Submit</button>
          </div>
        </div>
        <div className="side-container">
          <Trending />
          <Social />
          <Kenaztv />
          <SmallBanner />
          <Activity />
        </div>
      </div>
      <div className="purple-line" />
      <Footer />
    </div>
  );
};

export default Article;
