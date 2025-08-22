import { SimNao } from "../components/template/SimNao";

export function DaVedacaoDeUtilizacaoDeMarcaOuProdutoNaExecucaoDoServico(){
    return(
        <div>
            <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                <legend className="font-bold"> 3.4 Da vedação de utilização de marca / produto na execução do serviço </legend>
                <SimNao label="Prevê vedação a marcas ou modelos ?" name="permiteCooperativa" valorInicial="nao"/>
            </fieldset>
        </div>
    )
}