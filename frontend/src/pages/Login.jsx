import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section className="flex items-center">
      <div className="gap-4 flex flex-col items-center max-w-96 mx-auto w-full">
        <h2 className="text-3xl font-bold">Faça o login</h2>
        <form className="flex flex-col gap-2 w-full">
          <input
            type="email"
            placeholder="Digite seu Email"
            className="rounded-full border border-gray-400 w-full p-3"
          />
          <input
            type="password"
            placeholder="Digite sua Senha"
            className="rounded-full border border-gray-400 w-full p-3"
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
