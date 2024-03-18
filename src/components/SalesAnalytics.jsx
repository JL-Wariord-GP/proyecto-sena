// SalesAnalytics.js

function SalesAnalytics() {
  return (
    <div className="sales-analytics">
      <h2>Sales Analytics</h2>
      <div className="item online">
        <div className="icon">
          <span className="material-icons-sharp">shopping_cart</span>
        </div>

        <div className="right">
          <div className="info">
            <h3>ONLINE ORDERS</h3>
            <small className="text-muted">Last 24 Horas</small>
          </div>
          <h5 className="success">+39%</h5>
          <h3>3849</h3>
        </div>
      </div>

      <div className="item offline">
        <div className="icon">
          <span className="material-icons-sharp">local_mall</span>
        </div>

        <div className="right">
          <div className="info">
            <h3>OFFLINE ORDERS</h3>
            <small className="text-muted">Last 24 Horas</small>
          </div>
          <h5 className="danger">-17%</h5>
          <h3>1100</h3>
        </div>
      </div>

      <div className="item customers">
        <div className="icon">
          <span className="material-icons-sharp">person</span>
        </div>

        <div className="right">
          <div className="info">
            <h3>NEW CUSTOMERS</h3>
            <small className="text-muted">Last 24 Horas</small>
          </div>
          <h5 className="success">+25%</h5>
          <h3>849</h3>
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
