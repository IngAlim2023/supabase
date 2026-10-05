import React, { useState } from "react";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [emailS, setEmailS] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const navigate = useNavigate();
  const handlerRegistrarme = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert("No se logro hacer el registro");
      return console.log(error);
    }

    alert("Verifica tu correo");

    return navigate("/");
  };
  return (
    <div className="flex">
      <div>Registrate en nuesta app</div>
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

export default Register;
