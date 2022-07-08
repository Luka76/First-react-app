import "./Kenaz.css";
import kenaz from "../../assets/footer-logo.svg"
import { FooterArray } from "./FooterArray";

const Kenaz = () => {
    return(
        <div className="kenaz-wrapper">
            <div className="logo-name">
                <div className="logo">
                    <img src={kenaz} alt=""/>
                </div>   
                <div className="name">
                    <h2>Kenaz</h2>
                </div>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.</p>
            </div>
            <div className="icons" >
                {FooterArray.map((item) => (
                <img src={item.picture} alt={item.alt} />
                ))}
            </div>
        </div>
    )
}

export default Kenaz;