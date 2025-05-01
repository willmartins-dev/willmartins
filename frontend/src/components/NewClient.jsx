import React, { useState } from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
import PhotoUploader from "./PhotoUploader";

const NewClient = () => {
  const { user } = useUserContext();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState([]);
  const [photolink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const handleClick = (target) => {
    const newType = target.checked
      ? [...type, target.value]
      : [...type].filter((type) => type !== target.value);
    setType(newType);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && city && type) {
      try {
        const newClient = await axios.post("/clients", {
          personal: user._id,
          name,
          city,
          photo,
          description,
          type,
        });
        setRedirect(true);
        console.log(newClient);
      } catch (error) {
        console.error(error);
        alert("Deu erro ao tentar criar rum novo usuário!");
      }
    } else {
      console.log("preencha todas as informações do formulário");
    }
  };

  if (redirect) return <Navigate to="/account/client/" />;
  return (
    <form onSubmit={handleSubmit} className="w-full px-6 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-2xl">Nome completo</h2>
        <input
          type="text"
          placeholder="Digite o Nome do cliente"
          className="rounded-full border border-gray-400 px-4 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-2xl">Cidade/País</h2>
        <input
          type="text"
          placeholder="Digite o Nome do cliente"
          className="rounded-full border border-gray-400 px-4 py-2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <PhotoUploader {...{ photolink, setPhotoLink, setPhoto, photo }} />
      <div className="flex flex-col gap-1">
        <label className="text-2xl font-bold">Observação</label>
        <textarea
          placeholder="Digite uma observação sobree o cliente"
          className="rounded-2xl  border border-gray-300 px-4 py-2 resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">Atendimento</h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          <label
            htmlFor="presencial"
            className="hover:bg-gray-100 cursor-pointer flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-2xl"
          >
            <input
              type="checkbox"
              id="presencial"
              value={"presencial"}
              onChange={(e) => handleClick(e.target)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            Presencial
          </label>
          <label
            htmlFor="online"
            className="hover:bg-gray-100 cursor-pointer flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-2xl"
          >
            <input
              type="checkbox"
              id="online"
              value={"online"}
              onChange={(e) => handleClick(e.target)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                clipRule="evenodd"
              />
            </svg>
            Online
          </label>
        </div>
      </div>
      <button className="flex items-center justify-center gap-3 cursor-pointer px-4 py-2 bg-black text-white rounded-full hover:bg-primary-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Salvar
      </button>
    </form>
  );
};

export default NewClient;
