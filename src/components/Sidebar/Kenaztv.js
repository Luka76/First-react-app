import "./Kenaztv.css";
import video from "../../assets/Layer-27.png"


const Kenaztv = () =>{
    return(
    <div className="tv-wrapper">
        <h2>Kenaz tv</h2>
        <div>
            <img src={video} alt="" />
            {/* <img src={} alt=""/> */}
        </div>
        <div className="video-description">
            <p>August 26, 2013 
                <h2>NASA releases portrait of a planetwaving at Saturn</h2>
            </p>
        </div>

    </div>
    )
};

export default Kenaztv;