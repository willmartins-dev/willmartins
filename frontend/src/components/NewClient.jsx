import React, { useState } from "react";

const NewClient = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState([]);

  const handleClick = (target) => {
    const newType = target.checked
      ? [...type, target.value]
      : [...type].filter((type) => type !== target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-2xl">Foto</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="adicione uma foto"
            className="rounded-full border border-gray-400 px-4 py-2 grow"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button className="bg-gray-200 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-300">
            Enviar Foto
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <label
            id="file"
            className="mt-2 flex gap-2 items-center justify-center aspect-square rounded-2xl border border-gray-300 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            Upload
            <input type="file" className="hidden" htmlFor="file" />
          </label>
        </div>
      </div>
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
            className="cursor-pointer flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-2xl"
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
            className="cursor-pointer flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-2xl"
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
    </form>
  );
};

export default NewClient;
