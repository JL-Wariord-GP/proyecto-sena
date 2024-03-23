// RecentOrders.js

function RecentOrders() {
  return (
    <div className="recent-orders">
      <div className="recent-orders">
        <h2>Recordatorio de Cita</h2>

        <table>
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Número de Documento</th>
              <th>Copago</th>
              <th>Estado</th>
              <th>Ver</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Pedro Pepito Pérez</td>
              <td>85631</td>
              <td>$4.500</td>
              <td className="warning">Pendiente</td>
              <td className="primary">Detalles</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Pedro Pepito Pérez</td>
              <td>85631</td>
              <td>$4.500</td>
              <td className="success">Cumplida</td>
              <td className="primary">Detalles</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Pedro Pepito Pérez</td>
              <td>85631</td>
              <td>$4.500</td>
              <td className="danger">Cancelada</td>
              <td className="primary">Detalles</td>
            </tr>
          </tbody>
        </table>
        {/*  <!--! ---------------- COLOCAR UNA PAGINACION -----------------> */}
        <a href="">Mostrar Todo</a>
      </div>
    </div>
  );
}

export default RecentOrders;
