const Square = (props) => {
  return <button onClick={props.onClick}>{props.value}</button>;
};

export default Square;
