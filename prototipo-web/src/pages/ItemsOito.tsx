import { Select } from "../components/template/Select";
import { SimNao } from "../components/template/SimNao";

export function ItemsOito(){
  return(
    <div>
      <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 8 Dos critérios e prazos para pagamento</legend>
                    <div className="flex gap-4">
                        <SimNao label="Usar redação padronizada?" name="" className="w-1/2"/>
                        <Select identificador="permiteSubcontratacao" textoLabel="Permite Subcontratação?" divClassName="flex flex-col w-1/2">
                            <option value="nao">Não</option>
                            <option value="SimParcelasAcessorias">Sim, parcial</option>
                            <option value="SimAspectosTecnicosEspecificos">Sim, total</option>
                        </Select>
                    </div>
                </fieldset>
    </div>
  )
}