import "./Card.css";
import somePic from "../../assets/slider-image.png"

const Card = (props) => {
  return (
    <div className="card">
      <div className="colored-bar"></div>
      {/* <div className={text== sport ? 'colored-bar-sport': 'colored-bar-news'}></div> */}
      <div className="articles-container">
        <h2>News</h2>
        <a href="/">See all</a>
        <div className="articles">
            <div>
              <img src={somePic} alt="" />
              <div className="articles-date">
                <p>August 26, 2013</p>
                <h4>
                For Obama, MLK's shadow looms large ahead of speech
                </h4>
              </div>
            </div>
            <div>
              <img src={somePic} alt="" />
              <div className="articles-date">
                <p>August 26, 2013</p>
                <h4>
                NASA releases portrait of a planet waving at Saturn 
                </h4>
              </div>
            </div>
            <div>
              <img src={somePic} alt="" />
              <div className="articles-date">
                <p>August 26, 2013</p>
                <h4>
                Patriotsvv make cuts ... and Tim Tebow survives (so far)
                </h4>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
