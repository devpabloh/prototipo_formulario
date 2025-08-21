import { Select } from "../components/template/Select";

export function VedacaoOuParticipacaoDeEmpresasSobFormaDeConsorcio(){
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
    </div>
  )
}