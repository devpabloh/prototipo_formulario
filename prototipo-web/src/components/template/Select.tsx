interface SelectProps{
  identificador: string;
  textoLabel: string;
  children: React.ReactNode;
}

export function Select({ identificador, textoLabel, children }: Readonly<SelectProps>){
  return(
    
    <>
      <label htmlFor={identificador}>{textoLabel}      <span className="text-red-300">*</span>
      </label>
      <select id={identificador} className="border border-gray-300 p-1 rounded cursor-pointer">
          {children}
      </select>
    </>
    
  )
}