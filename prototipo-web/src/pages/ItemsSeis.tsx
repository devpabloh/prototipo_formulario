import { SimNao } from "../components/template/SimNao";

export function ItemsSeis(){
  return(
    <div>
      <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 6 Do registro de preços </legend>
                    
                    
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 6.7 Previsão e justificativa da possibilidade de adesão por orgãos e entidades não participantes e condições de adesão</legend>
                    <div className="flex">
                        <SimNao label="Permite adesão de Órgãos não participantes?" name="permiteAdesaoDeOrgaosNaoParticipantes" className="w-1/2"/>
                        <SimNao label="Usar limites de adesão padronizados?" name="LimitesDeAdesaoPadronizados" className="w-1/2"/>
                    </div>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 6.9 Obrigações e responsabilidades da gerenciadora da ATA</legend>
                    <div className="flex">
                        <SimNao label="Usar redação padronizada?" name="redacaoPadronizadaGerenciadora" className="w-1/2"/>
                        <SimNao label="Incluir Obrigações além das padronizadas?" name="incluirObrigacoesAlemDasPadronizadasGerenciadora" className="w-1/2"/>
                    </div>
                </fieldset>
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