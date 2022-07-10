import "./TwitterPost.css";
import twitterIcon from "../../assets/twitter-bird.svg";

const TwitterFeed = (props) => {
  return (
    <div className="tweet">
      <div className="twitter-author">
        <img src={twitterIcon} />
        <p>{props.author}</p>
      </div>
      <div className="twitter-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default TwitterFeed;
