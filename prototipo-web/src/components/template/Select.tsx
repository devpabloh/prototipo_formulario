interface SelectProps{
  identificador: string;
  textoLabel: string;
  children: React.ReactNode;
  divClassName?: string
}

export function Select({ identificador, textoLabel, children, divClassName }: Readonly<SelectProps>){
  return(
    
    <div className={divClassName}>
      <label htmlFor={identificador} className="font-bold">{textoLabel}   <span className="text-red-300" >*</span>
      </label>
      <select id={identificador} className="border border-gray-300 p-1 rounded cursor-pointer">
          {children}
      </select>
    </div>
    
  )
}