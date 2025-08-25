import { Cards } from "../components/template/Cards";
import { Input } from "../components/template/Input";
import { RangePorcentagem } from "../components/template/RangePorcentagem";
import { Select } from "../components/template/Select";
import { SimNao } from "../components/template/SimNao";

export function ItemsSete(){
  return(
    <div className="w-full overflow-x-hidden">
                      <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 7 Do contrato</legend>
                    <div className="flex gap-4">
                        <Input identificador="" labelClassName="flex flex-col-reverse w-1/2 font-bold" type="number" texto="Prazo de Assinatura do Contrato (dias úteis)" value={5}/>
                        <Input identificador="" labelClassName="flex flex-col-reverse w-1/2 font-bold" type="number" texto="Prazo de Início da Execução Contratual" value={0}/>
                    </div>
                </fieldset>
                 <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 7.4 Obrigações e responsabilidades da contratante</legend>
                    <div className="flex">
                        <SimNao label="Usar redação padronizada?" name="usarRedacaoPadronizadaContratante" className="w-1/2"/>
                        <SimNao label="Incluir Obrigações além das padronizadas?" name="incluirObrigacoesAlemDasPadronizadasContratante" className="w-1/2"/>
                    </div>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 7.5 Obrigações e responsabilidades da contratada</legend>
                    <div className="flex">
                        <SimNao label="Usar redação padronizada?" name="usarRedacaoPadronizadaContratada" className="w-1/2"/>
                        <SimNao label="Incluir Obrigações além das padronizadas?" name="incluirObrigacoesAlemDasPadronizadasContratada" className="w-1/2"/>
                    </div>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 7.6 Previsão e condições de prestação da garantia contratual</legend>
                    <div className="flex">
                        <SimNao label="Prevê garantia?" name="prevêGarantia" className="w-1/2"/>
                        <RangePorcentagem htmlFor="percentualLimiteDeSubcontratacao" idInput="percentualLimiteDeSubcontratacao" maxRange="10" minRange="1"
                        textoLabel="Percentual limite de subcontratação" classNameDiv="w-1/2"/>
                    </div>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 7.7 Da permissão ou vedação da subcontratação</legend>
                    <div className="flex gap-4">
                        <Select identificador="permiteSubcontratacao" textoLabel="Permite Subcontratação?" divClassName="flex flex-col w-1/2">
                            <option value="nao">Não</option>
                            <option value="SimParcelasAcessorias">Sim, parcelas Acessórias</option>
                            <option value="SimAspectosTecnicosEspecificos">Sim, de aspectos técnicos específicos</option>
                        </Select>
                        <RangePorcentagem htmlFor="percentualLimiteDeSubcontratacao" idInput="percentualLimiteDeSubcontratacao" maxRange="100" minRange="1"
                        textoLabel="Percentual limite de subcontratação" classNameDiv="w-1/2"/>
                    </div>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 7.8 Modelo de gestão do contrato</legend>
                   {/*  <div className="flex gap-4">
                        <Select identificador="permiteSubcontratacao" textoLabel="Permite Subcontratação?" divClassName="flex flex-col w-1/2">
                            <option value="nao">Não</option>
                            <option value="SimParcelasAcessorias">Sim, parcelas Acessórias</option>
                            <option value="SimAspectosTecnicosEspecificos">Sim, de aspectos técnicos específicos</option>
                        </Select>
                        <Input identificador="nome" type="text" texto="Nome" labelClassName="flex flex-col-reverse w-1/2 font-bold"/>
                        
                    </div>
                    <div className="flex gap-4">
                        <Input identificador="matricula" type="text" texto="Matrícula" labelClassName="flex flex-col-reverse w-1/2 font-bold"/>
                        <Input identificador="busca" type="search" texto="Busca" labelClassName="flex flex-col-reverse w-1/2 font-bold"/>
                    </div> */}
                    <Cards/>
                </fieldset>
    </div>
  )
}