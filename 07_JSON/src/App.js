import React from 'react';
import './App.css';
import tareas from './resources/tareas.json';

class ClaseContenedor extends React.Component {

  constructor() {
    super();
    this.state = {
      tareas: tareas
    }
  }

  render() {
    return (
      <div className="row">

        {this.state.tareas.map(e =>
          <div className="column" key={e.id} >
            <div>
              <h1>
                {e.titulo}
              </h1>
            </div>
            <div>
              <h2>
                {e.subtitulo}
              </h2>
            </div>
            <div>
              <h3>
                {e.cuerpo}
              </h3>
            </div>
          </div>
        )}

      </div>
    );
  };

}

function App() {
  return (

    <div >
      <div className="header">
        <h1>JSON desde React js</h1>
      </div>
      <ClaseContenedor />
    </div>
  );
}

export default App;
