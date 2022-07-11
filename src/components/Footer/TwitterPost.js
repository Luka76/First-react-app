import "./TwitterPost.css";
import twitterIcon from "../../assets/twitter-bird.svg";

const TwitterPost = (props) => {
  return (
    <div className="tweet">
      <div className="twitter-author">
        <img src={twitterIcon} alt="twitter post" />
        <p>{props.author}</p>
      </div>
      <div className="twitter-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default TwitterPost;
