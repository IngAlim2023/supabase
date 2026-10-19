import React, { useState } from "react";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [emailU, setEmailU] = useState<string>("");
  const [passwordU, setPasswordU] = useState<string>("");

  const navigate = useNavigate();

  const handlerLogin = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return alert("No se logro iniciar sesión, revisa tus credenciales");
    }

    alert("Sesión iniciada");

    return navigate("/");
  };

  return (
    <div className="flex">
      <div>Ingresa a nuestro aplicativo</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlerLogin(emailU, passwordU);
        }}
      >
        <input
          type="email"
          placeholder="Correo"
          autoComplete="off"
          onChange={(e) => setEmailU(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          autoComplete="off"
          onChange={(e) => setPasswordU(e.target.value)}
        />
        <button>Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
