// components/Main.js

import useAuth from "../contexts/useAuth";
import RecentOrders from "./RecentOrders";
import "material-symbols";

function Main() {
  const { firstName } = useAuth();

  return (
    <main>
      <h1>
        Hola, <span className="span-h1">{firstName}</span>
      </h1>
      <h2 className="text-style-h2">Nuestra recomendación para ti:</h2>

      {/* <!--! ---------------- INSIGHTS -----------------> */}

      <div className="insights">
        <div className="sales center">
          <a href="#">
            <span className="material-symbols-outlined">stethoscope</span>
          </a>
          <div className="middle">
            <div className="left">
              <h3>Atención Virtual en Salud</h3>
            </div>
          </div>
        </div>

        {/* <!--! ---------------- EXPENSES -----------------> */}

        <div className="expenses center">
          <a href="#">
            <span className="material-symbols-outlined">
              medical_information
            </span>
          </a>
          <div className="middle">
            <div className="left">
              <h3>Citas en Salud</h3>
            </div>
          </div>
        </div>

        {/* <!--! ---------------- INCOME -----------------> */}

        <div className="income center">
          <a href="#">
            <span className="material-symbols-outlined">diagnosis</span>
          </a>
          <div className="middle">
            <div className="left">
              <h3>Resultados Exámenes Médicos</h3>
            </div>
          </div>
        </div>
      </div>

      {/* <!--! ---------------- RECENT ORDERS -----------------> */}

      <RecentOrders />
    </main>
  );
}

export default Main;
