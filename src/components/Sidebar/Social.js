import "./Social.css"
import fb from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import yt from "../../assets/youtube.svg"


const Social = () =>{
return(
    <div className="social-wrapper">
        <h2>Social</h2>
        <div className="sub-frame">
            <div><img src={fb} alt="" /></div>
            <div className="sub">Like</div>
            <div className="fans">25041 Fans</div>
        </div>
        <div className="sub-frame">
            <div><img src={twitter} alt="" /></div>
            <div className="sub">Follow</div>
            <div className="fans">25041 Followers</div>
        </div>
        <div className="sub-frame">
            <div><img src={yt} alt="" /></div>
            <div className="sub">Subscribe</div>
            <div className="fans">941 Subscribers</div>
        </div>
    </div>
    )

};

export default Social;