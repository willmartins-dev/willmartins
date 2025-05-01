import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../context/UserContext.jsx";

export const Register = () => {
  const { user, setUser } = useUserContext();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password && name) {
      try {
        const { data: userDoc } = await axios.post("/users", {
          name,
          email,
          password,
        });

        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        alert(`Erro ao fazer o cadastro: ${JSON.stringify(error)}`);
      }
    } else {
      alert("Você precisa digitar todos os campos!");
    }
  };

  if (redirect || user) return <Navigate to="/" />;
  return (
    <section className="flex items-center">
      <div className="gap-4 flex flex-col items-center max-w-96 mx-auto w-full">
        <h2 className="text-3xl font-bold">Criar conta</h2>
        <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu Nome"
            className="rounded-full border border-gray-400 w-full p-3"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Digite seu Email"
            className="rounded-full border border-gray-400 w-full p-3"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Digite sua Senha"
            className="rounded-full border border-gray-400 w-full p-3"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="text-white bg-primary-600 cursor-pointer w-full rounded-full p-3">
            Entrar
          </button>
          <p className="justify-center">
            Já tem uma conta?{" "}
            <Link to="/login" className="font-bold underline">
              Faça login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
export default Register;
