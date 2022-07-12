import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

function CounterButton() {

  const [clickAmount, setClickAmount] = useState(0);
  const handleClick = (event) => {
    setClickAmount(clickAmount + 1);
  }
  return (
    <button className="CounterButton" onClick={handleClick}>
      You clicked me {clickAmount} times
    </button>
  );
}

export default CounterButton;