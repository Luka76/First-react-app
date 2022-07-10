import TrendingPost from "../Sidebar/TrendingPost";
import "./RandomPosts.css";
import Girl from "../../assets/Layer-63.png";

const RandomPosts = () => {
  return (
    <div className="randoms-wrapper">
      <h2>Random Posts</h2>
      <TrendingPost image={Girl} />
      <TrendingPost image={Girl} />
      <TrendingPost image={Girl} />
    </div>
  );
};

export default RandomPosts;
