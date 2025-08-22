import { Input } from "../components/template/Input";
import { Select } from "../components/template/Select";

export function ItemUltimaSecaoTermoDeReferencia(){
  return(
    <div>
      <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> Última seção do Termo de Referência</legend>
                    <div className="flex gap-4">
                        
                        <Select identificador="permiteSubcontratacao" textoLabel="Permite Subcontratação?" divClassName="flex flex-col w-1/2">
                            <option value="">Permitir ao usuário incluir novas opções dinamicamente</option>
                            <option value="nao">Não</option>
                            <option value="SimParcelasAcessorias">Sim, parcial</option>
                            <option value="SimAspectosTecnicosEspecificos">Sim, total</option>
                        </Select>
                        <Input identificador="descricao" type="text" texto="Descrição" labelClassName="flex flex-col-reverse w-1/2 font-bold"/>
                    </div>
                </fieldset>
    </div>
  )
}