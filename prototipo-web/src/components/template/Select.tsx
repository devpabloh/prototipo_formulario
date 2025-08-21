interface SelectProps{
  identificador: string;
  textoLabel: string;
  children: React.ReactNode;
  divClassName?: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Select({ identificador, textoLabel, children, divClassName, className,onChange }: Readonly<SelectProps>){
  return(
    
    <div className={divClassName}>
      <label htmlFor={identificador} className={`font-bold`}>{textoLabel}   <span className="text-red-300" >*</span>
      </label>
      <select id={identificador} className={`border border-gray-300 p-1 rounded cursor-pointer ${className}`} name={identificador} onChange={onChange}>
          {children}
      </select>
    </div>
    
  )
}