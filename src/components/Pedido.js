
import "../assets/Home.css";
function Pedido() {


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
          Bienvenido <span className="nombre">{nombre}</span> a Pedidos{" "}
        </h2>
        <button className="close_session" onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default Pedido;
