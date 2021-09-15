import { Fragment } from "react";

import MealsSummary from "./MealSummary";
import AvaiableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaiableMeals />
    </Fragment>
  );
};

export default Meals;
