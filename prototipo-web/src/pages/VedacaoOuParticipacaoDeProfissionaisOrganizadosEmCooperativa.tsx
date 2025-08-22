import { SimNao } from "../components/template/SimNao";

export function VedacaoOuParticipacaoDeProfissionaisOrganizadosEmCooperativa(){
    return(
        <div>
            <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                <legend className="font-bold"> 2.6 vedação ou participação de profissionais organizados em cooperativa na licitação </legend>
                <SimNao label="Permite Cooperativa ?" name="permiteCooperativa" valorInicial="sim"/>
            </fieldset>
        </div>
    )
}