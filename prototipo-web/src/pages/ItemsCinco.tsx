import { Input } from "../components/template/Input";
import { RangePorcentagem } from "../components/template/RangePorcentagem";
import { Select } from "../components/template/Select";
import { SimNao } from "../components/template/SimNao";

export function ItemsCinco(){
  return(
    <div>
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
    </div>
  )
}