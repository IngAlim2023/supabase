import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      Bienvenida a nuestra aplicacion
      <div>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Registrarme
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default Home;
