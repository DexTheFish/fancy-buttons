import { useState, useSyncExternalStore } from "react";

function LightSwitchButton(props) {

  
  const [light, setLight] = useState("off");
  const handleClick = (event) => {
    if (light==="off") {
      setLight("on");
    } else {
      setLight("off");
    }
  };

  return (
    <button className="LightSwitchButton" onClick={handleClick}>
    {light === "on" && <span><i>💡</i> I'm on!</span>}
    {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
  </button>
  );
}

export default LightSwitchButton;