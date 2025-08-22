import { Select } from "../components/template/Select";
import { SimNao } from "../components/template/SimNao";

export function ItemsDois(){
  return(
    <div>
      <fieldset className="border-2 border-gray-400 rounded-xl p-3">
        <legend className="font-bold"> 2.5 vedação ou participação de empresas sob forma de consórcio </legend>
        <Select identificador="" textoLabel="Permite consórcios?" divClassName="flex flex-col w-1/2">
          <option value="sim">Sim</option>
          <option value="simComNumeroLimitadoDeFornecedores">Sim, com número limitado de fornecedores</option>
          <option value="nao">Não</option>
        </Select>
      </fieldset>
      <fieldset className="border-2 border-gray-400 rounded-xl p-3">
        <legend className="font-bold"> 2.6 vedação ou participação de profissionais organizados em cooperativa na licitação </legend>
                    <SimNao label="Permite Cooperativa ?" name="permiteCooperativa" valorInicial="sim"/>
      </fieldset>
      <fieldset className="border-2 border-gray-400 rounded-xl p-3">
        <legend className="font-bold"> 2.7 participação ou vedação de pessoas físicas na licitação </legend>
        <SimNao label="Permite Pessoas Físicas ?" name="permiteCooperativa" valorInicial="sim"/>
      </fieldset>
    </div>
  )
}