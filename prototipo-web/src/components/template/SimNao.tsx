import { useState } from "react";

interface SimNaoProps {
  label: string;
  name: string;
  className?: string;
}

export function SimNao({ label, name, className }: Readonly<SimNaoProps>) {
  const [valor, setValor] = useState<"sim" | "nao">("nao");

  return (
    <div className={`flex flex-col ${className}`}>
      <span className="font-bold">{label}</span>
      <div
        className="w-28 h-10 flex items-center bg-gray-200 rounded-md cursor-pointer relative select-none"
        onClick={() => setValor(valor === "sim" ? "nao" : "sim")}
      >
        <span
          className={`absolute left-2 text-gray-700 font-semibold transition-opacity duration-200 ${
            valor === "sim" ? "opacity-100" : "opacity-50"
          }`}
        >
          Sim
        </span>
        <span
          className={`absolute right-[11px] text-gray-700 font-semibold transition-opacity duration-200 ${
            valor === "nao" ? "opacity-100" : "opacity-50"
          }`}
        >
          Não
        </span>
        <div
          className={`absolute top-1 left-[6px] w-12 h-8 rounded-md bg-white shadow transition-all duration-300
            ${valor === "sim" ? "translate-x-12" : ""}
          `}
        />
      </div>
      <input type="hidden" name={name} value={valor} />
    </div>
  );
}