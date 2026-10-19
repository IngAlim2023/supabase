import React, { useState } from "react";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
const Register: React.FC = () => {
  const [emailU, setEmailU] = useState<string>("");
  const [passwordU, setPasswordU] = useState<string>("");

  const navigate = useNavigate();

  const handlerRegistro = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      return alert("No se logro registrar al usuario, intentalo más tarde");
    }
    alert("Usuario registrado, revisa tu correo");

    return navigate("/");
  };

  return (
    <div className="flex">
      <div>Registrate en nuesta app</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlerRegistro(emailU, passwordU);
        }}
      >
        <input
          type="email"
          placeholder="correo"
          autoComplete="off"
          onChange={(e) => setEmailU(e.target.value)}
        />
        <input
          type="password"
          placeholder="contraseña"
          autoComplete="off"
          onChange={(e) => setPasswordU(e.target.value)}
        />

        <button>Registrarme</button>
      </form>
    </div>
  );
};

export default Register;
