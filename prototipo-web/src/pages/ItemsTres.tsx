import { Input } from "../components/template/Input";
import { Select } from "../components/template/Select";
import { SimNao } from "../components/template/SimNao";

export function ItemsTres(){
  return(
    <div>
      <fieldset className="border-2 border-gray-400 rounded-xl p-3 ">
                    <legend className="font-bold">3.2 Da execução dos serviços</legend>
                    <div className="flex justify-between gap-4 flex-row">
                        <Input identificador="" texto="Prazo de Início da Execução Contratual" type="number" labelClassName="flex flex-col-reverse font-bold w-1/2"/>
                        <Select identificador="" textoLabel="Contar prazo a partir de ?" divClassName="flex flex-col w-1/2" >
                            <option value="assinaturaDoContrato">Assinatura do Contrato</option>
                            <option value="emissaoDeOs">Emissão de OS</option>
                        </Select>
                    </div>
                    <div className="flex justify-between gap-4 flex-row mt-4">
                        <Input identificador="" texto="Prazo para recebimento provisório (em dias corridos)" type="number" labelClassName="flex flex-col-reverse font-bold w-1/2"/>
                        <Input identificador="" texto="Prazo para recebimento definitivo (em dias corridos)" type="number" labelClassName="flex flex-col-reverse font-bold w-1/2"/>
                    </div>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 3.3 Indicação de marcas ou modelos (se for o caso) </legend>
                    <SimNao label="Prevê indicação de marcas ou modelos ?" name="permiteCooperativa" valorInicial="nao"/>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 3.4 Da vedação de utilização de marca / produto na execução do serviço </legend>
                    <SimNao label="Prevê vedação a marcas ou modelos ?" name="permiteCooperativa" valorInicial="nao"/>
                </fieldset>
    </div>
  )
}