import { Line } from "./Line";
import { useState, useEffect } from "react";


export const MovingLines = () => {
  const [count, setCount] = useState(0);
  const [outernLine, setOuternLine] = useState("left");
  const [innerLine, setInnerLine] = useState("right");

  useEffect(() => {
    const timeout = setTimeout(() => {
       setCount(count + 1);
     }, 5000);
 
    if (outernLine === "left") {
      setOuternLine("right");
    } else {
      setOuternLine("left");
    }

    if (innerLine === "left") {
      setInnerLine("right");
    } else {
      setInnerLine("left");
    }
    return () => clearTimeout(timeout);
   },[count]);

  return (
    <>
      <Line turnSpeed={0.25} direction={outernLine}/>
      <Line turnSpeed={0.1} direction={innerLine} color={"--dark"} />
      <Line turnSpeed={0.05} direction={outernLine}/>
    </>
  );
};
