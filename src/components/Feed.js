import "./Feed.css";
import calendar from "../assets/calendar.png";
import newsImg from "../assets/slider-image.png";

const Feed = () => {
  const clickHandler = () => {
    console.log("hehe");
  };

  return (
    <div className="feed">
      <h1>Patriotsvv make cuts ... and Tim Tebow survives (so far)</h1>
      <div className="feed-about">
        <div className="calendar">
          <img src={calendar} alt="date" />
          <p>August 26,2013</p>
        </div>
        <div className="author">Matej Sudar</div>
        <div className="comments">12 Comments</div>
      </div>
      <div className="description">
        <img src={newsImg} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo.{" "}
        </p>
      </div>
      <button className="button" onClick={clickHandler}>
        Read article
      </button>
      <div className="empty-space" />
    </div>
  );
};

export default Feed;
