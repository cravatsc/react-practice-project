import { DUMMY_MEALS } from './dummy-meals';
import classes from './AvailableMeals.module.css';
import { Card } from '../UI/Card';

export const AvaiableMeals: React.FC = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
