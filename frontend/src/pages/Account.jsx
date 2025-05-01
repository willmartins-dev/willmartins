import React, { useContext } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import AccProfile from "../components/AccProfile";
import AccClients from "../components/AccClients";
import { useUserContext } from "../context/UserContext";

export const Account = () => {
  const { subpage } = useParams();
  const { user, ready } = useUserContext();

  const buttonClass = (button) => {
    let finalClass =
      "rounded-full px-4 py-2 cursor-pointer hover:text-white hover:bg-primary-600 transition";
    if (button === subpage) finalClass += " text-white bg-primary-600 ";
    return finalClass;
  };

  if (!user && ready) return <Navigate to="/login/" />;
  return (
    <section className="p-8">
      <div className=" max-w-7xl mx-auto flex flex-col gap-4 items-center">
        <div className="flex gap-4">
          <Link to="/account/profile" className={buttonClass("profile")}>
            Perfil
          </Link>
          <Link to="/account/clients/new" className={buttonClass("clients")}>
            Alunos
          </Link>
          <Link to="/account/settings" className={buttonClass("settings")}>
            Configurações
          </Link>
        </div>
        <div className="w-full">
          {subpage === "profile" && <AccProfile />}
          {subpage === "clients" && <AccClients />}
        </div>
      </div>
    </section>
  );
};

export default Account;
