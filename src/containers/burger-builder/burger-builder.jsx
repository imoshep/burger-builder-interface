import React, { Component } from "react";
import BuildControls from "../../components/burger/build-controls/build-controls";
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

  addIngredient = (type) => {
    const ingredients = { ...this.state.ingredients };
    ingredients[type] += 1;
    this.setState({ ingredients });
  };

  removeIngredient = (type) => {
    const ingredients = { ...this.state.ingredients };
    if (ingredients[type] > 0) ingredients[type] -= 1;
    this.setState({ ingredients });
  };

  render() {
    const { ingredients } = this.state;
    return (
      <React.Fragment>
        <Burger ingredients={ingredients} />
        <BuildControls
          addIng={this.addIngredient}
          remIng={this.removeIngredient}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
