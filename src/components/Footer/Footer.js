import Featured from "./Featured";
import "./Footer.css";
import Kenaz from "./Kenaz";
import Newsletter from "./Newsletter";
import Tags from "./Tags";

const Footer = () => {
    return (
    <div className="footer-container">
        <div className="heading-wrapper">
            <Kenaz />
            <Newsletter/>
            <Tags/>
        </div>
        <div className="lower-part">
            <Featured/>

        </div>
    </div>
    )
};

export default Footer;