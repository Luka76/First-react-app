import TrendingPost from "../Sidebar/TrendingPost"
import "./Featured.css"
import Girl from "../../assets/Layer-63.png"

const Featured = () => {
    return (
    <div className="features-wrapper">
        <h2>Featured</h2>
        <TrendingPost  image={Girl}/>
        <TrendingPost image={Girl}/>
        <TrendingPost image={Girl}/>
    </div>
    )
};

export default Featured;