import React, {Component} from 'react';
import './listaDonadores.css';
import {lista} from '../data/datosDonacionesFuerzaMexico.js'
class ListaDonadores extends Component {
  render() {
    console.log(lista);
    const headers = Object.keys(lista[0]);
    return (
      <div className="ListaDonadores">
        <div className="cuerpo-tabla">
          <table>
            <thead>
              <tr>
                {headers.map(k => (
                  <th key={k}>{k}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lista.map(donador => {
                return (
                  <tr key={donador.id}>
                    {headers.map(celda => {
                      const c = celda === "Monto " && donador[celda]
                        ? donador[celda].toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
                        : donador[celda];

                      return (
                        <td key={donador.id + '_' + c}>{c}</td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListaDonadores;
