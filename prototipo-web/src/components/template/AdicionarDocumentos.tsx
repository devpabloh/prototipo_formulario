interface AdicionarDocumentosProps {
  name: string;
}

export function AdicionarDocumentos({name}: Readonly<AdicionarDocumentosProps>){

  return(
    <div className="w-120 h-20 border-2 border-dashed border-gray-400 rounded flex items-center justify-center cursor-pointer" >
      <span className="text-4xl text-gray-400 font-bold select-none">+</span>
      <input
        type="file"
        name={name}
        className="hidden"
      />
    </div>
  )
}