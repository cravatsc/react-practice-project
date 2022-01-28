import classes from './Input.module.css';

interface InputProp {
  input: InputObject;
  label: string;
}

interface InputObject {
  id: string;
  type: string;
  [key: string]: any; //allows optional additional fields
}

export const Input: React.FC<InputProp> = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};
