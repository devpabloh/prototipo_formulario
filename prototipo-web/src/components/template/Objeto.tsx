import { Botao } from "./Botao";
import { Select } from "./Select";
import { SimNao } from "./SimNao";

export function Objeto(){
  return(
    <section className="flex flex-col gap-1">
      <h1 className="text-center font-bold text-2xl">Seção: Objeto da Contratação</h1>
      <h2 className="font-bold text-xl">Objeto da contratação</h2>
      <form action="submit" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="objetoDetalhado" className="font-bold">Objeto Detalhado <span className="text-red-300">*</span></label>
          <input type="text" id="objetoDetalhado" className="border border-gray-300 p-2 rounded h-20 mt-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="objetoDetalhado" className="font-bold">Objeto Resumido<span className="text-red-300">*</span></label>
          <input type="text" id="objetoDetalhado" className="border border-gray-300 p-2 rounded h-10 mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Select identificador="fracionamento" textoLabel="Fracionamento" divClassName="flex flex-col gap-1">
              <option value="">Selecione uma Opção</option>
              <option value="">Por Lote</option>
              <option value="">Por Item</option>
              <option value="">Integral com Itens</option>
              <option value="">Integral sem Itens</option>
          </Select>
          <Select identificador="naturezaDoObjeto" textoLabel="Natureza do Objeto" divClassName="flex flex-col gap-1">
              <option value="">Selecione uma Opção</option>
              <option value="">Fornecimento</option>
              <option value="">Serviço por Escopo</option>
              <option value="">Serviço Continuado</option>
              <option value="">Serviço de Engenharia</option>
              <option value="">Obra</option>
              <option value="">Locação de Imóvel</option>
              <option value="">Locação de Bens Móveis</option>
              <option value="">Contratação de Artistas</option>
              <option value="">Alienação de Bens</option>
              <option value="">Concessão</option>
              <option value="">Permissão</option>
            </Select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Select identificador="modoDeFornecimento" textoLabel="Modo de Fornecimento" divClassName="flex flex-col gap-1">
              <option value="">Selecione uma Opção</option>
              <option value="">Integral</option>
              <option value="">Parcelado</option>
          </Select>
          <Select identificador="regimeDeExecucao" textoLabel="Regime de Execução" divClassName="flex flex-col gap-1">
              <option value="">Selecione uma Opção</option>
              <option value="">Empreitada Integral</option>
              <option value="">Empreitada por Preço Global</option>
              <option value="">Empreitada por Preço Unitário</option>
              <option value="">Contratação por Tarefa</option>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <SimNao label="Envolve terceirização de mão de obra?" name="objetoNovo"/>
          <SimNao label="Possuí Material ou Serviço de Tecnologia da informação?" name="objetoUsado"/>
          <SimNao label="Possuí Material ou Serviço de Engenharia?" name="objetoEngenharia"/>
        </div>
        <Botao texto="Próxima" className="w-28"/>
      </form>
    </section>
  )
}