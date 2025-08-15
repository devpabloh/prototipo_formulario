interface BotaoProps{
  texto: string
  className?: string
  icon?: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset";
}


export function Botao({texto, className, icon, type}: Readonly<BotaoProps>){
  return(
    <button type={type} className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200 cursor-pointer ${className}`}>
      {icon}
      {texto}
    </button>
  )
}