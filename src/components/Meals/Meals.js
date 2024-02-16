import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";
import React from "react";

const Meals = () => {
  return (
    <React.Fragment>
      <MealSummary></MealSummary>
      <AvailableMeals></AvailableMeals>
    </React.Fragment>
  );
};

export default Meals;
