// import React from 'react'
// // import Styles from "./style.module.css"
// import {container} from "./Style"
// const Styling = () => {
//   return (
//     // adding css in module way
//     // <div className={Styles.container}>Styling</div>

//     // adding css through javasript
//     <div style={{ background: container.background, color:container.color,fontSize:container.fontSize,fontWeight:container.fontWeight}}>Styling through javascript</div>
//   )
// }

// export default Styling

// adding css based on conditional rendering
import React, { useState } from 'react'
import Styles from "./Style"
import { btnSuccess,btnDanger } from './Style'
const Styling = () => {
  let [state, setState] = useState([
    {
      name: "harish",
      company: "tyss",
      salary: 50000,
    },
    {
      name: "abhi",
      company: "jsp",
      salary: 20000,
    },
    {
      name: "rajesh",
      company: "qsp",
      salary: 10000,
    },
    {
      name: "lakshmi",
      company: "React master",
      salary: 40000,
    },
  ]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>company</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>
          {state.map((x, index) => {
            return (
              <tr key={index}>
                <td>{x.name}</td>
                <td>{x.company}</td>
                <td>{x.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Styling