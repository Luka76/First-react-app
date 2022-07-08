import commentIcon from "../../assets/comment-icon.svg";


import "./TrendingPost.css";

const TrendingPost = (props) => {
    return (
        <div className="trending-posts">
            <div className="trend">
                <div className="date-title">
                    <p>August 26,2013 
                    <img className="icon" src={commentIcon} alt=""/>
                    <h4>Palestinians call off peace talks after clash</h4>
                    </p>    
                </div>       
                <img src={props.image} alt=""/>
            </div>
        </div>
)
}

export default TrendingPost;