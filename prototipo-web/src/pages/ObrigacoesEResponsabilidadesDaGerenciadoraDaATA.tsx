import { SimNao } from "../components/template/SimNao";

export function ObrigacoesEResponsabilidadesDaGerenciadoraDaATA(){
    return(
        <div>
            <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                <legend className="font-bold"> 6.9 Obrigações e responsabilidades da gerenciadora da ATA</legend>
                <div className="flex">
                    <SimNao label="Usar redação padronizada?" name="redacaoPadronizadaGerenciadora" className="w-1/2"/>
                    <SimNao label="Incluir Obrigações além das padronizadas?" name="incluirObrigacoesAlemDasPadronizadasGerenciadora" className="w-1/2"/>
                </div>
            </fieldset>
        </div>
    )
}