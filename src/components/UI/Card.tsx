import classes from './Card.module.css';

export const Card: React.FC = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
