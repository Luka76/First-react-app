import "./Newsletter.css";

const Newsletter = () => {
    return(
        <div className="Newsletter-wrapper">
            <h2>Newsletter</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante...</p>
            <div className="sign-up">
                <div className="mail">
                <label>Your mail</label>
                <input type="text" name="mail"/>
                    {/* <p> Your mail</p> */}
                </div>
                <div className="register">
                    <p >Subscribe</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;