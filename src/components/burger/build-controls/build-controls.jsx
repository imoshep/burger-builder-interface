import React from "react";
import BuildControl from "./build-control/build-control";
import styles from "./build-controls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className={styles.buildControls}>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        addIng={props.addIng}
        remIng={props.remIng}
      />
    ))}
  </div>
);

export default BuildControls;
