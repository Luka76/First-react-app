import "./Navbar.css";
import searchIcon from "../../assets/search-icon.svg";

const clickHandler = (event) => {
  console.log("hehe");
};

const Navbar = () => {
  return (
    <div className="containter">
      <div className="nav">
        <a href="/" className="site-title">
          Kenaz
        </a>
        <ul>
          <li>
            <a href="/Media">Media</a>
          </li>
          <li>
            <a href="/Marketing">Marketing</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <img src={searchIcon} alt="search img" onClick={clickHandler}></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
