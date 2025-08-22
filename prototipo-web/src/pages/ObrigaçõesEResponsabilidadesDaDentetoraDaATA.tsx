import { SimNao } from "../components/template/SimNao";

export function ObrigaçõesEResponsabilidadesDaDentetoraDaATA(){
    return(
        <div>
            <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                <legend className="font-bold"> 6.10 Obrigações e responsabilidades da dentetora da ATA</legend>
                <div className="flex">
                    <SimNao label="Usar redação padronizada?" name="usarRedacaoPadronizadaDetentora" className="w-1/2"/>
                    <SimNao label="Incluir Obrigações além das padronizadas?" name="incluirObrigacoesAlemDasPadronizadasDetentora" className="w-1/2"/>
                </div>
            </fieldset>
        </div>
    )
}