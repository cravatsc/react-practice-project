import { AvaiableMeals } from './AvailableMeals';
import { MealsSummary } from './MealsSummary';

export const Meals: React.FC = () => {
  return (
    <>
      <MealsSummary />
      <AvaiableMeals />
    </>
  );
};
