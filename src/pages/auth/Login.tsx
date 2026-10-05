import React, { useState } from "react";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [emailS, setEmailS] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const navigate = useNavigate();

  const handlerRegistrarme = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert("La contraseña o el correo estan errados");
      return console.log(error);
    }

    alert("Ingresaste");

    return navigate("/dashboard");
  };
  return (
    <div className="flex">
      <div>Ingresa a nuesta app</div>
      <div className="flex">
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmailS(e.target.value)}
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="contraseña"
          autoComplete="off"
          onChange={(e) => setPw(e.target.value)}
        />

        <button onClick={() => handlerRegistrarme(emailS, pw)}>
          registrarme
        </button>
      </div>
    </div>
  );
};

export default Login;
