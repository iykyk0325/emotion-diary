import "./Button.css";

const Button = ({ type, text, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
