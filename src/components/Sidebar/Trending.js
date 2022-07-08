import Palestenians from "../../assets/Layer-5.png"
import "./Trending.css";
import TrendingPost from "./TrendingPost";

const Trending = () =>{
    return(
        <div className="trending-wrapper">
            <div className="trending-bar"> 
                <div className="active">Popular</div>
                <div >Top Rated</div>
                <div>Comments</div>        
            </div>
            <TrendingPost image={Palestenians}/>
            <TrendingPost image={Palestenians}/>
            <TrendingPost image={Palestenians}/>
            <TrendingPost image={Palestenians}/>
            <TrendingPost image={Palestenians}/>
            <div className="trending-footer"/>
        
        </div>)
    };
    

export default Trending;