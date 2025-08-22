import { SimNao } from "../components/template/SimNao";

export function PrevisaoEJustificativaDaPossibilidadeDeAdesaoPorOrgaosEEntidadesNaoParticipantesECondicoesDeAdesao(){
    return(
        <div>
            <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 6.7 Previsão e justificativa da possibilidade de adesão por orgãos e entidades não participantes e condições de adesão</legend>
                    <div className="flex">
                        <SimNao label="Permite adesão de Órgãos não participantes?" name="permiteAdesaoDeOrgaosNaoParticipantes" className="w-1/2"/>
                        <SimNao label="Usar limites de adesão padronizados?" name="LimitesDeAdesaoPadronizados" className="w-1/2"/>
                    </div>
            </fieldset>
        </div>
    )
}