import React, { useState } from "react";
import JSON from "./data.json";

const PromiseMethod = () => {
  let [change, setChange] = useState(JSON.products);
  return (
    <div>
      {change.map(value => {
        return (
          <>
            <li>{value.id}</li>
          </>
        );
      })}
    </div>
  );
};

export default PromiseMethod;
