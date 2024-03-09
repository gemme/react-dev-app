import { useDispatch } from "react-redux";
import { decrement } from "../redux/counterSlice";
import { Button } from "semantic-ui-react";

export const DigitalClock = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
      <Button onClick={() => dispatch(decrement())}>Decrease Counter</Button>
    </div>
  );
};
