import axios from "axios";
import React, { useEffect, useState } from 'react';


function Neck() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("/neck")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="App">
      {data ? (
        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Typ</th>
            <th>Muskel</th>
            <th>Equipment</th>
            <th>Schwirigkeit</th>
            <th>Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.muscle}</td>
                <td>{item.equipment}</td>
                <td>{item.difficulty}</td>
                <td>{item.instructions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default Neck;