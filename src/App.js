import React, { Component } from "react";
import "./App.css";
import ListaDonadores from "./listaDonadores/listaDonadores";
import bqImage from "./img/fuerzaMexicoFotoNotimex.jpg";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="ListaDonadores-header">
          <h1 className="ListaDonadores-title">Donaciones Fuerza México</h1>
        </header>
        <div id="intro">
          <img src={bqImage} />
          <div id="bgOpacity"/>
          <div id="seguimiento-donativos">
            <div className="seguimiento-donativos-texto">
              <h2>Dale seguimiento a los donativos 19S</h2>
              <p>
                Empresas, organizaciones y países han mostrado su solidaridad
                con México al anunciar donativos para ayudar a nuestro país tras
                los sismos del 7S y 19S.
              </p>
              <p>
                Para poder darle seguimiento a esta ayuda, queremos recopilar
                los anuncios públicos sobre dichas donaciones.
              </p>

              <p className="ListaDonadores-intro">
                Ya empezamos una lista pero{" "}
                <strong>necesitamos tu ayuda.</strong> Si tienes información
                adicional escribe un mensaje en el{" "}
                <strong>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1fCFg-SziSYTBDKJ5cVYMtb-3HL2lVg7_4usV6iPhbRc/edit#gid=1122797035"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Drive
                  </a>
                </strong>
              </p>
              <p>
                Sugerimos encontrar un comunicado oficial (más allá de la nota o
                tweet), con el fin de identificar montos y destinatarios.
              </p>
              <p className="ListaDonadores-intro">
                Si tienes dudas, sugerencías o comentariós te invitamos a
                hacerlos haciendo un Issue en el{" "}
                <strong>
                  <a
                    href="https://github.com/OSOM-MEXICO/donacionesFuerzaMexico"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </strong>
                {". "} O escribenos a{" "}
                <a href="mailto:donacionesFuerzaMexico@gmail.com">
                  donacionesFuerzaMexico@gmail.com
                </a>
              </p>
            </div>
            <h2 className="subtitle">
              No hay donativos pequeños sólo grandes intenciones
            </h2>

            <p className="ListaDonadores-intro">
              Todos los donativos suman. Puedes contribuir registrando tu
              donativo en: {" "}
              <strong>
                <a
                  href="https://goo.gl/forms/kRQrKgiFZfbLqIEb2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Registrar donativo personal
                </a>
              </strong>
            </p>
          </div>
        </div>
        <br />
        <h2 className="subtitle">Lista de donadores</h2>
        <ListaDonadores />
        <div id="seguimiento-donativos" />
      </div>
    );
  }
}

export default App;
