import React, { useState } from 'react'

const Form = () => {
    let [lang, setLang] = useState('');
    let handleSubmit = e => {
        e.preventDefault();
        console.log(lang);
    }
  return (
    <section id="spotifyBlock">
      <article>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="list">Languages</label>
            <select name="languages" id="lang" onChange={e=>setLang(e.target.value)}>
              <option value="Html">Html</option>
              <option value="Css">Css</option>
              <option value="Javascript">Javascript</option>
              <option value="React">React</option>
              <option value="Node js">Node js</option>
                      </select>
                      <div>
                          <button>submit</button>
                      </div>
          </div>
        </form>
      </article>
    </section>
  );
}

export default Form