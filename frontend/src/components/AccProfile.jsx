import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../context/UserContext";

const AccProfile = () => {
  const { user, setUser } = useUserContext();
  const [redirect, setRedirect] = useState(false);

  const logout = async () => {
    try {
      const { data } = await axios.post("/users/logout");

      setUser(null);
      setRedirect(true);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  if (redirect) return <Navigate to="/" />;

  if (!user) return <></>;
  return (
    <div className="flex flex-col items-center gap-2">
      <p>
        Logado como{" "}
        <span className="font-semibold">
          {user.name} ({user.email})
        </span>
      </p>
      <button
        onClick={logout}
        className="w-full bg-secondary-400 rounded-full px-4 py-2 cursor-pointer hover:text-white hover:bg-primary-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default AccProfile;
