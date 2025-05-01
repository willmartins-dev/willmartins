import React from "react";
import axios from "axios";

const PhotoUploader = ({ photolink, setPhotoLink, setPhoto, photo }) => {
  const uploadByLink = async (e) => {
    e.preventDefault();
    if (photolink) {
      const { data: filename } = await axios.post("clients/upload/link", {
        link: photolink,
      });

      setPhoto((prevValue) => [...prevValue, filename]);
      console.log("imagem enviada");
    } else {
      alert("Não existe nenhum link a ser enviado!");
    }
  };
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-2xl">Foto</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="adicione uma foto"
          className="rounded-full border border-gray-400 px-4 py-2 grow"
          value={photolink}
          onChange={(e) => setPhotoLink(e.target.value)}
        />
        <button
          onClick={uploadByLink}
          className="bg-gray-200 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-300"
        >
          Enviar Foto
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {photo.map((photos) => (
          <img
            key={photos}
            className="aspect-square object-cover rounded-2xl"
            src={`${axios.defaults.baseURL}/tmp/${photos}`}
            alt="Imagens de perfil"
          />
        ))}

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
  );
};

export default PhotoUploader;
