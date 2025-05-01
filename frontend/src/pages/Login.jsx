import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../context/UserContext";

export const Login = () => {
  const { user, setUser } = useUserContext();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { data: userDoc } = await axios.post("/users/login", {
          email,
          password,
        });
        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        alert(`Erro ao fazer login: ${JSON.stringify(error)}`);
      }
    } else {
      alert("Você precisa digitar o email e senha!");
    }
  };

  if (user) return <Navigate to="/account/profile" />;
  return (
    <section className="flex items-center">
      <div className="gap-4 flex flex-col items-center max-w-96 mx-auto w-full">
        <h2 className="text-3xl font-bold">Faça o login</h2>
        <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu Email"
            className="rounded-full border border-gray-400 w-full p-3"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Digite sua Senha"
            className="rounded-full border border-gray-400 w-full p-3"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="text-white bg-primary-600 cursor-pointer w-full rounded-full p-3">
            Entrar
          </button>
          <p className="justify-center">
            Ainda não tem conta?{" "}
            <Link to="/register" className="font-bold underline">
              Registrar-se
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
