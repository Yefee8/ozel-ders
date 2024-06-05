"use client";
import { useState } from "react";
import Dropdown from "./Dropdown";
import OutlinedInput from "./Input";
import OutlinedTextarea from "./Textarea";

export default function Contact() {
  const [selected, setSelected] = useState("Seçilmedi");

  return (
    <div
      id="iletisim"
      className="container flex xl:py-32 py-16 items-center gap-8 max-md:gap-4  max-md:px-6 flex-col"
    >
      <h1 className="text-2xl font-medium text-secondary">İletişime Geçin</h1>

      <div className="max-md:gap-3 items-center w-full flex-col flex gap-4">
        <Dropdown
          selected={selected}
          setSelected={setSelected}
          items={["Erdem Hoca", "Zeynep Hoca"]}
        />

        <OutlinedInput placeholder="İsminiz" />

        <OutlinedTextarea placeholder="Amacınız" />
      </div>

      <div className="w-full md:w-1/2 mx-auto mt-4">
        <button
        //   onClick={onClick}
          className="w-full bg-indigo-500 duration-100 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Gönder
        </button>
      </div>
    </div>
  );
}
