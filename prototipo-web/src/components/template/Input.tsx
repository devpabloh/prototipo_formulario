interface InputProps {
  identificador: string;
  texto?: string;
  type?: string;
  className?: string;
  value?: string | number;
  readOnly?: boolean;
}

export function Input({ identificador, texto, type, className, value, readOnly }: Readonly<InputProps>){
  return(
    <label htmlFor={identificador}>
      <input id={identificador} type={type} className={`border border-gray-300 p-1 rounded ${className}`} value={value} readOnly={readOnly} />
      {texto}
    </label>
  )
}