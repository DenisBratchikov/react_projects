import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const URL =
  "https://react-course-app-ae14e-default-rtdb.firebaseio.com/meals.json";

export default function AvailableMeals() {
  const [isLoading, setIsLoading] = useState(true);
  const [mealsList, setMealsList] = useState([]);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => {
        const meals = [];
        for (let key in data) {
          meals.push(
            <MealItem
              key={key}
              id={key}
              name={data[key].name}
              description={data[key].description}
              price={data[key].price}
            />
          );
        }
        setMealsList(meals);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  let content = "";

  if (isLoading) {
    content = <p className={classes.text}>Loading...</p>;
  } else if (errorMsg) {
    content = <p className={classes.error}>{errorMsg}</p>;
  } else if (mealsList.length < 1) {
    content = <p className={classes.text}>No food available!</p>;
  } else {
    content = (
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    );
  }

  return <section className={classes.meals}>{content}</section>;
}
