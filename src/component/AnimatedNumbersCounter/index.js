import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import "./index.css";
const AnimatedNumbersCounter = ({ counter, title, sign }) => {
  return (
    <div className="animated-numbers-countr">
      <div>
        <AnimatedNumbers
          includeComma
          transitions={(index) => ({
            type: "spring",
            duration: index + 0.3,
          })}
          animateToNumber={counter}
          fontStyle={{
            fontSize: 48,
            color: "#FEFEFE",
           fontFamily: "Atkinson Hyperlegible",
           fontWeight:700
          }}
        />
        <p>{sign}</p>
      </div>
      <p>{title}</p>
    </div>
  );
};
export default AnimatedNumbersCounter;
