import { SimNao } from "../components/template/SimNao";


export function ParticipacaoOuVedaçãoDePessoasFisicasNaLicitacao(){
    return(
        <div>
            <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                <legend className="font-bold"> 2.7 participação ou vedação de pessoas físicas na licitação </legend>
                <SimNao label="Permite Pessoas Físicas ?" name="permiteCooperativa" valorInicial="sim"/>
            </fieldset>
        </div>
    )
}