import React, { Component } from 'react';
import logo from './logo.svg';
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
          Si tienes información que aporte a la lista favor escribe un mensaje en el <a href="https://docs.google.com/spreadsheets/d/1fCFg-SziSYTBDKJ5cVYMtb-3HL2lVg7_4usV6iPhbRc/edit#gid=1122797035" target="_blank" >Google Drive</a>
        </p>
        <p className="ListaDonadores-intro">
          Si tienes dudas, sugerencías o comentariós te invitamos a hacerlos haciendo un Issue en el <a href="https://github.com/OSOM-MEXICO/donacionesFuerzaMexico" target="_blank" >Github</a>
        </p>
        <ListaDonadores/>
      </div>
    );
  }
}

export default App;
