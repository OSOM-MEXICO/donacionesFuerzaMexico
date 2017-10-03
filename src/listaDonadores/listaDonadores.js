import React, {Component} from 'react';
import './listaDonadores.css';
import {lista} from '../data/datosDonacionesFuerzaMexico.js'
class ListaDonadores extends Component {
  render() {
    //const headersFull = Object.keys(lista[0]);
    const headers = ["Empresa Donadora/ Donador", "Tipo", "Monto ", "Moneda", "Donación no monetaría ", "Destinatarios", "Referencias"];
    console.log(headers, lista);
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
                  <tr key={donador.Id}>
                    {headers.map(celda => {
                      let c = celda === "Monto " && donador[celda]
                        ? donador[celda].toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
                        : donador[celda];

                      if( celda ==="Referencias" && donador[celda]){
                        c = (<a href={donador[celda]} target="_blank" rel="noopener noreferrer">Referencia</a>)
                      }
                      if( celda ==="Empresa Donadora/ Donador" && donador[celda]&& donador["Twitter"]){
                        c =  (<div><span>{donador[celda]} (</span><a href={donador["Twitter"]} target="_blank" rel="noopener noreferrer">Twitter</a><span>)</span></div>)
                      }
                      return (
                        <td key={donador.id + '_' + celda+'_'+c}>{c}</td>
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
