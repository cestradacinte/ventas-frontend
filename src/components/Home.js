import { useState } from "react";
import "../assets/Home.css";
import Tacos from "./views/Tacos";
import Nevados from "./views/Nevados";
import ResumenVentas from "./views/ResumenVentas";
function Home() {
  const [view, setView] = useState(null);
  //   const [tacos, setTacos] = useState("");
  //   const [nevados, setNevados] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    window.location.href = "/";
  };


  const nombre = JSON.parse(localStorage.getItem("userData")).first_name;
  console.log(nombre);
  return (
    <div className="home">
      <div className="titulo_home">
        <h2>
          Bienvenido <span className="nombre">{nombre}</span> al autoservicio{" "}
        </h2>
        <button className="close_session" onClick={handleLogout}>Cerrar Sesión</button>
      </div>
      <div className="container2">
        <div className="boton_admin" onClick={() => setView("tacos")}>
          Tacos
        </div>
        <div className="boton_admin" onClick={() => setView("nevados")}>
          Nevados
        </div>
        <div className="boton_admin" onClick={() => setView("tacos")}>
          Ventas
        </div>
      </div>
      {view === "tacos" && <Tacos />}
      {view === "nevados" && <Nevados />}
      {view === "ventas" && <ResumenVentas />}
    </div>
  );
}

export default Home;
