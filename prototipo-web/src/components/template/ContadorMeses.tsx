import { Botao } from "./Botao";
import { Input } from "./Input";
import { useState } from "react";

interface ContadorMeses{
  textoh2?: string;
  divClassName?: string;
}

export function ContadorMeses({ textoh2, divClassName }: ContadorMeses){
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return(
    <div className={`flex flex-col ${divClassName}`}>
      <h2 className="font-bold">{textoh2}</h2>
      <div className="flex items-center">
      <Botao texto="-" type="button" className="h-[38px] bg-gray-400 rounded font-bold text-lg -mr-6 z-10 flex items-center" onClick={decrementar}/>
      <Input identificador="contador-meses" value={contador} type="number" className="w-[100px] h-9 text-center border border-gray-400" readOnly />
      <Botao type="button" texto="+" className="h-[38px] bg-gray-400 rounded font-bold text-lg -ml-9 z-10 flex items-center" onClick={incrementar}/>
    </div>
    </div>
  )
}