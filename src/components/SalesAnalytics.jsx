// SalesAnalytics.js

function SalesAnalytics() {
  return (
    <div className="sales-analytics">
      <h2>Mis Productos</h2>
      <div className="item online">
        <div className="icon">
          <span className="material-icons-sharp">shopping_cart</span>
        </div>

        <div className="right">
          <div className="info">
            <h3>Gestionar Trámites</h3>
          </div>
          <h3>Ver</h3>
        </div>
      </div>

      <div className="item offline">
        <div className="icon">
          <span className="material-icons-sharp">local_mall</span>
        </div>

        <div className="right">
          <div className="info">
            <h3>Reprogramación de Citas</h3>
          </div>
          <h3>Ver</h3>
        </div>
      </div>

      <div className="item customers">
        <div className="icon">
          <span className="material-icons-sharp">person</span>
        </div>

        <div className="right">
          <div className="info">
            <h3>Atención al Usuario</h3>
          </div>
          <h3>ver</h3>
        </div>
      </div>

      {/* <!--! ---------------- ADD PRODUCT NEW -----------------> */}
      <div className="item add-product">
        <div>
          <span className="material-symbols-outlined">medical_information</span>
          <h3>Agendar Cita</h3>
        </div>
      </div>
    </div>
  );
}

export default SalesAnalytics;
