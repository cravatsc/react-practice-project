import image from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import { HeaderCartButton } from './HeaderCartButton';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={image} alt="A Table full of food" />
      </div>
    </>
  );
};
