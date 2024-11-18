import principal from "../css/App.module.css";
import maintenance from "../css/maintenance.module.css";
import Aside from "./AsideMaintenance";

import Right from "./Right";

function Maintenance() {
  return (
    <div className={`${principal.containerBox}`}>
      <Aside />
      <main className={`${maintenance.containerBox__maintenance}`}>
        <h1 className={`${maintenance.h1__maintenance}`}>
          Estamos en Mantenimiento
        </h1>
        <p className={`${maintenance.p__maintenance}`}>
          Lamentablemente, nuestra página está en mantenimiento. Estamos
          trabajando para mejorar su experiencia. Por favor, vuelva a visitarnos
          más tarde.
        </p>
        <h2 className={`${maintenance.h2__maintenance}`}>
          Gracias por su paciencia.
        </h2>
      </main>
      <Right />
    </div>
  );
}

export default Maintenance;
