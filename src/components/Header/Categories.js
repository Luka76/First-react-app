import { CategoryItems } from "./CategoryItems";
import "./Categories.css";
import { useState } from "react";

const Categories = () => {
  const [isActive, setIsActive] = useState("");
  const isActiveHandler = (event) => {
    const activeState = event.currentTarget;
    setIsActive(activeState);
  };

  return (
    <div className="bar">
      <ul>
        {CategoryItems.map((item) => {
          return (
            <li
              className={isActive === item.category ? "" : `${item.category}`}
              onClick={isActiveHandler}
              title={item.title}
              key={item.title}
            >
              <a href="/">{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
