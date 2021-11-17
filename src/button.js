const Button = (props) => (
  <button onClick={() => props.onClick()} className={props.style}>
    {props.text}
  </button>
);

export default Button;
