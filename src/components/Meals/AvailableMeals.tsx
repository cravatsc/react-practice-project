import { DUMMY_MEALS } from './dummy-meals';
import classes from './AvailableMeals.module.css';
import { Card } from '../UI/Card';
import { MealItem } from './MealItem';

export const AvaiableMeals: React.FC = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
