import Featured from "./Featured";
import "./Footer.css";
import Kenaz from "./Kenaz";
import Newsletter from "./Newsletter";
import Tags from "./Tags";
import RandomPosts from "./RandomPosts";
import TwitterFeed from "./TwitterFeed";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="heading-wrapper">
        <Kenaz />
        <Newsletter />
        <Tags />
      </div>
      <div className="lower-part">
        <Featured />
        <RandomPosts />
        <TwitterFeed />
      </div>
      <div className="small-line" />
      <div className="copyright">
        <p id="p1">
          © 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia
        </p>
        <p id="p2">Typography - Templates - Contact Form - 404 Page</p>
      </div>
    </div>
  );
};

export default Footer;
