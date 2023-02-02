import React, { useState } from "react";
import styles from "./imagegrid.module.css";
import apple from "../images/apple.png";
import orange from "../images/orange.png";
import grape from "../images/grape.png";
import watermelon from "../images/watermelon.png";
import peach from "../images/peach.png";
import pineapple from "../images/pineapple.png";
import pear from "../images/pear.png";
import cherry from "../images/cherry.png";
import mango from "../images/mango.png";
import strawberry from "../images/strawberry.png";

const ImageGrid = (props) => {
  const [fruits, updateFruits] = useState([
    { name: "Apple", picture: apple },
    { name: "Orange", picture: orange },
    { name: "Grape", picture: grape },
    { name: "Watermelon", picture: watermelon },
    { name: "Peach", picture: peach },
    { name: "Pineapple", picture: pineapple },
    { name: "Pear", picture: pear },
    { name: "Cherry", picture: cherry },
    { name: "Mango", picture: mango },
    { name: "Strawberry", picture: strawberry },
  ]);

  const [clickedFruits, updateClickedFruits] = useState([]);

  const shuffleFruits = (fruitName) => {
    validateMatch(fruitName);
    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
    updateFruits(shuffle(fruits));
  };

  const validateMatch = (fruit) => {
    if (clickedFruits.includes(fruit)) {
      resetGame();
    } else {
      updateScore();
      updateClickedFruits((oldArray) => [...oldArray, fruit]);

      console.log(clickedFruits);
    }
  };

  const resetGame = () => {
    checkBestScore();
    updateClickedFruits([]);
    props.setCurrentScore(0);
    console.log(clickedFruits);
  };

  const checkGameOver = () => {
    if (props.currentScore === fruits.length) {
      resetGame();
    }
  };

  const checkBestScore = () => {
    if (props.currentScore > props.bestScore) {
      props.setBestScore(props.currentScore);
    }
  };

  const updateScore = () => {
    props.setCurrentScore(props.currentScore + 1);
    checkGameOver();
  };

  const renderFruitGrid = fruits.map((fruit) => {
    return (
      <div key={fruit.name} onClick={() => shuffleFruits(fruit.name)}>
        <div className={styles.card}>
          <img alt={fruit.name} src={fruit.picture}></img>
          <h1 style={{ padding: "0px" }}>{fruit.name}</h1>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className={styles.grid}>{renderFruitGrid}</div>
    </div>
  );
};

export default ImageGrid;
