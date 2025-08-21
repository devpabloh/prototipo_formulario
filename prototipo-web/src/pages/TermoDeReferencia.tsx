import { Input } from "../components/template/Input";
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
                    <div className="flex justify-start gap-4 mt-4">
                        <SimNao label="Objeto exige registro ou autorização para funcionamento" name="registroOuAutorizacaoParaFuncionamento" className="w-1/2"/>
                        <Input identificador="" type="number" texto="Percentual mínimo para atestado técnico" labelClassName="flex flex-col-reverse font-bold w-1/2" placeholder="1% a 50%"/>
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
            </form>
        </div>
    )
}