interface InputProps {
  identificador: string;
  texto?: string;
  type?: string;
  className?: string;
  value?: string | number;
  readOnly?: boolean;
  placeholder?: string;
  labelClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ identificador, texto, type, className, value, readOnly, placeholder, labelClassName, onChange }: Readonly<InputProps>){
  return(
    <label htmlFor={identificador} className={labelClassName}>
      <input 
        id={identificador} 
        type={type} 
        className={`border border-gray-300 p-1 rounded ${className}`} 
        value={value} 
        readOnly={readOnly} 
        placeholder={placeholder}
        onChange={onChange}
      />
      {texto}
    </label>
  )
}