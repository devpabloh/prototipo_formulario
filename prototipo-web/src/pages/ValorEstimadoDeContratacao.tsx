import { SimNao } from "../components/template/SimNao";

export function ValorEstimadoDeContratacao(){
    return(
        <div>
            <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                <legend className="font-bold"> 4.1 Valor estimado de contratação </legend>
                <SimNao label="Orçamento sigiloso ?" name="permiteCooperativa" valorInicial="nao"/>
            </fieldset>
        </div>
    )
}