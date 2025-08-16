interface AdicionarDocumentosProps {
  name: string;
  placeholder?: string;
}

export function AdicionarDocumentos({name, placeholder}: Readonly<AdicionarDocumentosProps>){

  return(
    <div className="w-120 h-20 border-2 border-dashed border-gray-400 rounded flex items-center justify-center cursor-pointer" >
      <span className="text-4xl text-gray-400 font-bold select-none">+</span>
      <input
        type="file"
        name={name}
        className="hidden"
        placeholder={placeholder}
      />
    </div>
  )
}