import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

// componentes con estado
// Stateful components
// Smart components

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //lifecycle hooks
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

// hooks

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increment = () => {
    console.log("clicked !");
    setCount(count + 1);
    setName("action: increase");
  };

  const decrement = () => {
    console.log("clicked !");
    setCount(count - 1);
    setName("action: decrease");
  };

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={increment}>Increase +</button>
        <button onClick={decrement}>Decrease -</button>
      </div>
      <div>{name}</div>
    </>
  );
};

// componente de presentacion
// Stateless components
// Dumb Components

export const MyComponent = (props) => {
  return (
    <div>
      <p>{"My name is " + props.name}</p>
      <p>{"Lastname " + props.lastname}</p>
    </div>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

MyComponent.defaultProps = {
  name: "Ernesto",
  lastname: "Escobar",
};

export const LegacyComponent = () => {
  return (
    <div>
      <h1>Class Component: Counter</h1>
      <ClassCounter />
      <h1>Functional Component: Counter</h1>
      <FunctionalCounter />
      <h1>Dumb / Presentational Component</h1>
      <MyComponent name="Ernesto" lastname="Escobar" />
    </div>
  );
};
