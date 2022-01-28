import classes from './MealItem.module.css';
import { MealItemForm } from './MealItemForm';

export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const MealItem: React.FC<Meal> = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <MealItemForm id={props.id} />
    </li>
  );
};
