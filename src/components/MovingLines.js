import { Line } from "./Line";

export const MovingLines = () => {
  return (
    <>
      <Line turnSpeed={0.25} direction={'left'}/>
      <Line turnSpeed={0.1} color={"--dark"} />
      <Line turnSpeed={0.15} direction={'left'}/>
    </>
  );
};
