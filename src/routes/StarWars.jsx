import { useState, useEffect } from "react";
// mocks data
const initialState = [
  { name: "Obi wan kenobi" },
  { name: "Darth Vader" },
  { name: "Look skywalker" },
  { name: "R2D2" },
  { name: "R2D3" },
];

export const StarWars = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function callPeople() {
      const values = [];
      const arrayPromises = [1, 2, 3, 4, 5].map((v) => {
        return fetch("https://swapi.dev/api/people/" + v);
      });
      // [p1, p2, p3, p4, p5]
      const response = await Promise.all(arrayPromises);
      // [data1, data2, data3, data4, data5]
      for await (const data of response) {
        const dataPeople = await data.json();
        values.push(dataPeople);
      }
      setPeople(values);
    }
    callPeople();
    console.log("fetch");

    // [] => componentDidMount
  }, []);

  // render
  console.log("render");
  return (
    <div>
      <li>
        {people.map((p, i) => {
          return <ul key={i}> {p.name}</ul>;
        })}
      </li>
    </div>
  );
};

/**
 *  [
    { name: 'Obi wan kenobi' },
    { name: 'Darth Vader' },
    { name: 'Look skywalker' },
    { name: 'R2D2' },
    { name: 'R2D3' },
]
 */
