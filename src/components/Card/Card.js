import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="colored-bar"></div>
      <div className="articles-container">
        <h2>News</h2>
        <a href="/">See all</a>
        <ul>
          <li>
            <a href="/">For Obama</a>
          </li>
          <li>
            <a href="/">For Obama</a>
          </li>
          <li>
            <a href="/">For Obama</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
