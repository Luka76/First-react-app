import "./RandomPosts.css";
import TwitterPost from "./TwitterPost";

// import { TwitterTexts } from "./TwitterTexts";

const TwitterFeed = () => {
  return (
    <div className="twitter">
      <h2>Twitter Feed</h2>
      {/* {TwitterTexts.map((item) => (
        <TwitterPost key={item.length} text={item} />
      ))} */}
      <TwitterPost
        author="Envato @envato"
        text="Is this your typical million dollar day in the park? http://enva.to/150vxFC Happy @TrueThemes Day! #ThemeForest pic.twitter.com/EHz7awxOXy"
      />
      <TwitterPost
        author="Envato @envato"
        text="Happy TrueThemes Day http://enva.to/1dRzgLD"
      />
      <TwitterPost
        author="Envato @envato"
        text="@robscri I would really want to look into what's taking so long. Thank you ever so much! ^TC"
      />
    </div>
  );
};

export default TwitterFeed;
