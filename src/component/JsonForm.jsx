import React, { useState } from 'react'
import JSON from "../Country.json"
const JsonForm = () => {
    let [country, setCountry] = useState(JSON);
    let [state, setState] = useState('');
    let [gender, setGender] = useState('');
    let [photo, setPhoto] = useState();
    let handleSubmit = e => {
        e.preventDefault();
        console.log({ state, gender,photo });
    }
  return (
    <section id='json'>
      <article>
        <h2>Select country</h2>

        <form onSubmit={handleSubmit}>
          <select onChange={e => setState(e.target.value)}>
            {country.map(value => {
              return (
                <>
                  <option value={value.name}>{value.name}</option>
                </>
              );
            })}
          </select>
          <div onChange={e => setGender(e.target.value)}>
            <label htmlFor="gender" style={{ fontWeight: "bold" }}>
              Select gender:
            </label>
            <input type="radio" name="gender" id="gender" value="male" />
            male
            <input type="radio" name="gender" id="gender" value="male" />
            female
                  </div>
                  <div>
                      <input type="file" onChange={e=>setPhoto(e.target.files[0])} />
                  </div>
          <div>
            <button>submit</button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default JsonForm