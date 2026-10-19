import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";

const Home: React.FC = () => {
  const [authU, setAuthU] = useState<boolean>(false);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session);

      if (session) {
        setAuthU(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

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
          Login
        </button>

        {authU && (
          <div>
            Ingresaste con supabase felicidades
            <div>
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  setAuthU(false);
                }}
              >
                Salir
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
