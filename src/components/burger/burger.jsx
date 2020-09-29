import React from "react";
import BurgerIngredient from "./burger-ingredient/burger-ingredient";
import styles from "./burger.module.css";

const Burger = ({ ingredients }) => {
  let ingredientLayers = Object.keys(ingredients)
    .map((ingKey) => {
      if (ingredients[ingKey] >= 0) {
        return [...Array(ingredients[ingKey])].map((_, i) => {
          return <BurgerIngredient key={ingKey + i} type={ingKey} />;
        });
      } else {
        console.warn(
          `User shouldn't be able to register negative number for ingredients @${ingKey}`
        );
        return null;
      }
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (ingredientLayers.length === 0)
    ingredientLayers = <p>What do you want inside your burger?</p>;
  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientLayers}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
