import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Fruit Memory Game</h1>
        <h2>
          Click all the fruits without clicking one you've already chosen!
        </h2>
        <h5>Current Score: {props.currentScore} </h5>
        <h5>Best Score: {props.bestScore}</h5>
      </div>
      <div className={styles.instructions}></div>
    </div>
  );
};

export default Header;
