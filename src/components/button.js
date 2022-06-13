
import "../css/button.css";
import Arrow from "./arrow";

const Button = ({ content }) => {
  return (
    <>
      <button className="trans">{content} {<Arrow />}</button>
    </>
  );
};


export default Button;
