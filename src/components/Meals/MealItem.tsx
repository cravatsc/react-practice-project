export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const MealItem: React.FC<Meal> = (props) => {
  return (
    <li>
      <div>
        <h3></h3>
      </div>
      <div></div>
    </li>
  );
};
