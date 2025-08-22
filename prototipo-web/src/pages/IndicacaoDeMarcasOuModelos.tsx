import { SimNao } from "../components/template/SimNao";

export function IndicacaoDeMarcasOuModelos(){
    return(
        <div>
            <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                <legend className="font-bold"> 3.3 Indicação de marcas ou modelos (se for o caso) </legend>
                <SimNao label="Prevê indicação de marcas ou modelos ?" name="permiteCooperativa" valorInicial="nao"/>
            </fieldset>
        </div>
    )
}