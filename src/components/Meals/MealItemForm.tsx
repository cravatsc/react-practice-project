import { Input } from '../UI/Input';
import classes from './MealItemForm.module.css';

interface MealItemFormProps {
  id: string;
}
export const MealItemForm: React.FC<MealItemFormProps> = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
