import { Input } from "../components/template/Input";
import { RangePorcentagem } from "../components/template/RangePorcentagem";
import { Select } from "../components/template/Select";
import { SimNao } from "../components/template/SimNao";

export function TermoDeReferencia(){
    return(
        <div>
            <form className="flex flex-col gap-4">
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 2.5 vedação ou participação de empresas sob forma de consórcio </legend>
                    <Select identificador="" textoLabel="Permite consórcios?" divClassName="flex flex-col w-1/2">
                        <option value="sim">Sim</option>
                        <option value="simComNumeroLimitadoDeFornecedores">Sim, com número limitado de fornecedores</option>
                        <option value="nao">Não</option>
                    </Select>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 2.6 vedação ou participação de profissionais organizados em cooperativa na licitação </legend>
                    <SimNao label="Permite Cooperativa ?" name="permiteCooperativa" valorInicial="sim"/>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 2.7 participação ou vedação de pessoas físicas na licitação </legend>
                    <SimNao label="Permite Pessoas Físicas ?" name="permiteCooperativa" valorInicial="sim"/>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3 ">
                    <legend className="font-bold">3.2 Da execução dos serviços</legend>
                    <div className="flex justify-between gap-4 flex-row">
                        <Input identificador="" texto="Prazo de Início da Execução Contratual" type="number" labelClassName="flex flex-col-reverse font-bold w-1/2"/>
                        <Select identificador="" textoLabel="Contar prazo a partir de ?" divClassName="flex flex-col w-1/2" >
                            <option value="assinaturaDoContrato">Assinatura do Contrato</option>
                            <option value="emissaoDeOs">Emissão de OS</option>
                        </Select>
                    </div>
                    <div className="flex justify-between gap-4 flex-row mt-4">
                        <Input identificador="" texto="Prazo para recebimento provisório (em dias corridos)" type="number" labelClassName="flex flex-col-reverse font-bold w-1/2"/>
                        <Input identificador="" texto="Prazo para recebimento definitivo (em dias corridos)" type="number" labelClassName="flex flex-col-reverse font-bold w-1/2"/>
                    </div>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 3.3 Indicação de marcas ou modelos (se for o caso) </legend>
                    <SimNao label="Prevê indicação de marcas ou modelos ?" name="permiteCooperativa" valorInicial="nao"/>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 3.4 Da vedação de utilização de marca / produto na execução do serviço </legend>
                    <SimNao label="Prevê vedação a marcas ou modelos ?" name="permiteCooperativa" valorInicial="nao"/>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 4.1 Valor estimado de contratação </legend>
                    <SimNao label="Orçamento sigiloso ?" name="permiteCooperativa" valorInicial="nao"/>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 4.2 Classificação orçamentária da despesa </legend>
                    <Input identificador="" type="text" texto="Fonte" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                    <Input identificador="" type="text" texto="Unidade" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                    <Input identificador="" type="text" texto="Programa" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                    <Input identificador="" type="text" texto="Ação" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                    <Input identificador="" type="text" texto="Elemento de Despesa" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                    <Input identificador="" type="text" texto="Categoria Econômica" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 4.3 Justificativa para aplicação ou não do benefício previsto na Lei complementar nº 123/2006 </legend>
                    <div className="flex justify-start gap-4">
                    <SimNao label="Aplicar cota Exclusiva (itens ou lotes até R$ 80.000,00) ?" name="cotaExclusica" valorInicial="nao" className="w-1/2"/>
                    <SimNao label="Cota Reservada (Aquisição de bens de natureza divisível) " name="cotaReserva" valorInicial="nao" className="w-1/2"/>
                    </div>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 5.1 Modalidade de licitação, critério de julgamento, regime de execução e modo de disputa </legend>
                    <div className="flex justify-start gap-4">
                        <Select identificador="" textoLabel="Critério de Aceitabilidade de Preços" divClassName="flex flex-col w-1/2">
                            <option value="unitario">Unitário</option>
                            <option value="global">Global</option>
                        </Select>
                        <Select identificador="" textoLabel="Modo de Disputa" divClassName="flex flex-col w-1/2">
                            <option value="aberto">Aberto</option>
                            <option value="abertoEFechado">Aberto e Fechado</option>
                        </Select>
                    </div>
                    <div className="flex justify-start gap-4 mt-4">
                        <SimNao label="Inversão de Fases" valorInicial="sim" name="" className="w-1/2"/>
                        <Select identificador="" textoLabel="Modo de Disputa" divClassName="flex flex-col w-1/2">
                            <option value="aberto">Aberto</option>
                            <option value="abertoEFechado">Aberto e Fechado</option>
                        </Select>
                    </div>

                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 5.2 Proposta </legend>
                    <div  className="flex justify-start gap-4 mt-4">
                        <Input identificador="" type="text" texto="Prazo de Validade da Proposta (em dias)" labelClassName="flex flex-col-reverse font-bold w-1/2" placeholder=""/>
                        <SimNao label="Requer garantia de proposta?" name="garantiaDeProposta" className="w-1/2"/>
                    </div>
                    <div className="flex justify-start gap-4 mt-4">
                        <Input identificador="" type="number" texto="Percentual de Garantia" labelClassName="flex flex-col-reverse font-bold w-1/2" placeholder="0,00 a 1,00%"/>
                        <SimNao label="Requer amostra, teste de conformidade ou prova de conceito (em dias úteis)" name="garantiaDeProposta" className="w-1/2"/>
                    </div>
                    <div className="flex justify-start gap-4 mt-4">
                        <Input identificador="" type="number" texto="Prazo para amostra, teste de conformidade ou prova de conceito (em dias)" labelClassName="flex flex-col-reverse font-bold w-1/2" placeholder=""/>
                        <Select identificador="" textoLabel="Fase para apresentação da amostra, teste de conformidade ou prova de conceito" divClassName="flex flex-col">
                            <option value="julgamentoDaProposta">Julgamento da Proposta</option>
                            <option value="habilitacaoPreviamenteVerificada">Habilitação previamente verificada</option>
                            <option value="aposHomologacao">Após homologação</option>
                            <option value="aposAssinaturaDoContrato">Após assinatura do contrato</option>
                        </Select>
                    </div>
                    
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 5.3 Requisitos específicos de habilitação </legend>
                    <div  className="flex justify-start gap-4 mt-4">
                        <Input identificador="" type="text" texto="Prazo de Validade da Proposta (em dias)" labelClassName="flex flex-col-reverse font-bold w-1/2" placeholder=""/>
                        <SimNao label="Habilitação jurídica requer atendimento de lei especial?" name="atendimentoLeiEspecial" className="w-1/2"/>
                    </div>
                    <div className="flex  gap-4 mt-4">
                        <SimNao label="Objeto exige registro ou autorização para funcionamento" name="registroOuAutorizacaoParaFuncionamento" className="w-1/2"/>
                        {/* <Input identificador="" type="number" texto="Percentual mínimo para atestado técnico" labelClassName="flex flex-col-reverse font-bold w-1/2" placeholder="1% a 50%"/> */}
                        <RangePorcentagem htmlFor="percentualMinimoAtestadoTecnico" idInput="percentualMinimoAtestadoTecnico" maxRange="5" minRange="0" textoLabel="Percentual mínimo para atestado técnico" classNameDiv="w-1/2" isPorcentagem="nao"/>
                    </div>
                    <div className="flex justify-start gap-4 mt-4">
                        <SimNao label="Prevê vistoria prêvia ?" name="preveVistoriaPrevia" className="w-1/2"/>
                        <SimNao label="Requer Registro em entidade profissional" name="registroEntidadeProfissional" className="w-1/2"/>
                    </div>
                    <div  className="flex justify-start gap-4 mt-4">
                        <Input identificador="" type="text" texto="Nome completo da entidade profissional" labelClassName="flex flex-col-reverse font-bold w-1/2" placeholder="Até 100 caracteres"/>
                        <Select identificador="" textoLabel="Habilitação Econômica financeira por:" divClassName="flex flex-col w-1/2">
                            <option value="patrimonioLiquido">Patrimônio Líquido</option>
                            <option value="capitalSocial">Capital Social</option>
                        </Select>
                    </div>
                    <Input identificador="" type="number" texto="Percentual do valor da contratação para habilitação econômico financeiro" labelClassName="flex flex-col-reverse mt-1 font-bold"/>
                    
                </fieldset>
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
                    <div className="flex gap-4">
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
                    </div>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 8 Dos critérios e prazos para pagamento</legend>
                    <div className="flex gap-4">
                        <SimNao label="Usar redação padronizada?" name="" className="w-1/2"/>
                        <Select identificador="permiteSubcontratacao" textoLabel="Permite Subcontratação?" divClassName="flex flex-col w-1/2">
                            <option value="nao">Não</option>
                            <option value="SimParcelasAcessorias">Sim, parcial</option>
                            <option value="SimAspectosTecnicosEspecificos">Sim, total</option>
                        </Select>
                    </div>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 10.1 Sanções a serem aplicadas na fase de licitação</legend>
                    <div className="flex gap-4">
                        <SimNao label="Usar redação padronizada?" name="" className="w-1/2"/>
                        <SimNao label="Inclur sanções além das padronizadas?" name="" className="w-1/2"/>
                    </div>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> Última seção do Termo de Referência</legend>
                    <div className="flex gap-4">
                        
                        <Select identificador="permiteSubcontratacao" textoLabel="Permite Subcontratação?" divClassName="flex flex-col w-1/2">
                            <option value="">Permitir ao usuário incluir novas opções dinamicamente</option>
                            <option value="nao">Não</option>
                            <option value="SimParcelasAcessorias">Sim, parcial</option>
                            <option value="SimAspectosTecnicosEspecificos">Sim, total</option>
                        </Select>
                        <Input identificador="descricao" type="text" texto="Descrição" labelClassName="flex flex-col-reverse w-1/2 font-bold"/>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}