import React, { Component } from "react";
import Burger from "../../components/burger/burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };
  render() {
    const { ingredients } = this.state;
    return (
      <React.Fragment>
        <Burger ingredients={ingredients} />
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
