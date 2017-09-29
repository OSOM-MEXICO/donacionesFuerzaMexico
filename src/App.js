import React, { Component } from 'react';
import './App.css';
import ListaDonadores  from './listaDonadores/listaDonadores';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="ListaDonadores-header">
          <h1 className="ListaDonadores-title">Donaciones Fuerza México</h1>
        </header>
        <p className="">
          Recopilación de los anunciós públicos sobre donacionas para
          ayudar a las personas afectadas por los sismos del 7 de
          septiembre y 19 de septiembre.
        </p>
        <p className="ListaDonadores-intro">
          Si tienes información que aporte a la lista favor escribe un mensaje en el <strong><a href="https://docs.google.com/spreadsheets/d/1fCFg-SziSYTBDKJ5cVYMtb-3HL2lVg7_4usV6iPhbRc/edit#gid=1122797035" target="_blank" rel="noopener noreferrer" >Google Drive</a></strong>
        </p>
        <p className="ListaDonadores-intro">
          Si tienes dudas, sugerencías o comentariós te invitamos a hacerlos haciendo un Issue en el <strong><a href="https://github.com/OSOM-MEXICO/donacionesFuerzaMexico" target="_blank" rel="noopener noreferrer" >Github</a></strong>
        </p>
        <h2>No hay donativos pequeños sólo grandes intenciones</h2>
        <p className="ListaDonadores-intro">
          Puedes contribuir registrando tu donativo en: <strong><a href="https://goo.gl/forms/kRQrKgiFZfbLqIEb2" target="_blank" rel="noopener noreferrer" >Registrar donativo personal</a></strong>
        </p>
        <br/>
        <h2>Lista de donadores </h2>
        <ListaDonadores/>
      </div>
    );
  }
}

export default App;
