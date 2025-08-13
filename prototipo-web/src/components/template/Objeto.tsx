
export function Objeto(){
  return(
    <section className="flex flex-col gap-4">
      <h1 className="text-center font-bold">Seção: Objeto da Contratação</h1>
      <h2 className="font-bold">Objeto da contratação</h2>
      <form action="submit" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="objetoDetalhado">Objeto Detalhado <span className="text-red-300">*</span></label>
          <input type="text" id="objetoDetalhado" className="border border-gray-300 p-2 rounded h-20 mt-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="objetoDetalhado">Objeto Resumido<span className="text-red-300">*</span></label>
          <input type="text" id="objetoDetalhado" className="border border-gray-300 p-2 rounded h-10 mt-2" />
        </div>
        <div className="flex items-center justify-start w-full gap-4">
          <div className="flex flex-col w-1/2 ">
            <label htmlFor="objetoDetalhado">Característica do Objeto <span className="text-red-300">*</span></label>
             <select id="objetoDetalhado" className="border border-gray-300 p-1 rounded cursor-pointer">
              <option value="">primeira opção</option>
              <option value="">segunda opção</option>
              <option value="">terceira opção</option>
            </select>
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="objetoDetalhado">Natureza do Objeto <span className="text-red-300">*</span></label>
            <select id="objetoDetalhado" className="border border-gray-300 p-1 rounded cursor-pointer">
              <option value="">primeira opção</option>
              <option value="">segunda opção</option>
              <option value="">terceira opção</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
            <label htmlFor="objetoDetalhado">Natureza do Objeto <span className="text-red-300">*</span></label>
            <select id="objetoDetalhado" className="border border-gray-300 p-1 rounded cursor-pointer">
              <option value="">primeira opção</option>
              <option value="">segunda opção</option>
              <option value="">terceira opção</option>
            </select>
        </div>
      </form>
    </section>
  )
}