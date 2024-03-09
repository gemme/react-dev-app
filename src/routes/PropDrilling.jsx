import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/counterSlice";
import { Button } from "semantic-ui-react";
import { useState } from "react";

const PropDrilling = () => {
  // Your component logic here
  const [localCounter, setLocalCounter] = useState(0);
  // state es el estado global
  // counter es el nombre del reducer
  // value es la propiedad del estado global
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Section>
      <Heading level={1}>Heading 1</Heading>
      <Button onClick={() => dispatch(increment())}>
        Increase Counter GLOBAL
      </Button>
      <Button onClick={() => setLocalCounter(localCounter + 1)}>
        Increase Counter Local
      </Button>
      <Section>
        <Heading level={2}>Heading 1</Heading>
        <Section>
          <Heading level={3}>Heading 1</Heading>
          <Section>
            <Heading level={4}>Heading 1</Heading>
            <div>Este es mi estado GLOBAL inicial {count}</div>
            <div>Este es mi estado LOCAL inicial {localCounter}</div>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export default PropDrilling;

// unit tests
// functional tests
// integration tests
