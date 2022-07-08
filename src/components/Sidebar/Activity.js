import "./Activity.css";
import notifications from "../../assets/Layer-34.png"

const Activity = () =>{
    return(
    <div className="activity-wrapper">
        <div className="notifications">
            {/* <div>liked</div>
            <div>status</div>
            <div>new post</div>
            <div>others liked</div> */}
            <img src={notifications} alt="" />
        </div>
    </div>
    )
};

export default Activity;