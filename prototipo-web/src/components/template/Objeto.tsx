import { Botao } from "./Botao";
import { Select } from "./Select";
/* import { Input } from "./Input"; */



export function Objeto(){

  return(
    <section className="flex flex-col gap-1">
      <h1 className="text-center font-bold text-2xl">Seção: Objeto da Contratação</h1>
      <h2 className="font-bold text-xl">Objeto da contratação</h2>
      <form action="submit" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="objeto" className="font-bold">Objeto <span className="text-red-300">*</span></label>
          <input type="text" id="objetoDetalhado" className="border border-gray-300 p-2 rounded h-20 mt-2" />
        </div>
     {/*    <div className="flex flex-col">
          <label htmlFor="objetoDetalhado" className="font-bold">Objeto Resumido<span className="text-red-300">*</span></label>
          <input type="text" id="objetoDetalhado" className="border border-gray-300 p-2 rounded h-10 mt-2" />
        </div> */}
        <div className="grid grid-cols-2 gap-4">
          <Select identificador="fracionamento" textoLabel="Fracionamento do objeto" divClassName="flex flex-col gap-1">
              <option value="">Selecione uma Opção</option>
              <option value="">Por Lote</option>
              <option value="">Por Item</option>
              <option value="">Integral com Itens</option>
              <option value="">Integral sem Itens</option>
          </Select>
          <Select identificador="naturezaDoObjeto" textoLabel="Natureza do Objeto" divClassName="flex flex-col gap-1">
              <option value="">Selecione uma Opção</option>
              <option value="">Fornecimento</option>
              <option value="">Serviço por Escopo</option>
              <option value="">Serviço Continuado</option>
              <option value="">Serviço de Engenharia</option>
              <option value="">Obra</option>
              <option value="">Locação de Imóvel</option>
              <option value="">Locação de Bens Móveis</option>
              <option value="">Contratação de Artistas</option>
              <option value="">Alienação de Bens</option>
              <option value="">Concessão</option>
              <option value="">Permissão</option>
            </Select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Select identificador="modoDeFornecimento" textoLabel="Modo de Fornecimento" divClassName="flex flex-col gap-1">
              <option value="">Selecione uma Opção</option>
              <option value="">Integral</option>
              <option value="">Parcelado</option>
          </Select>
          <Select identificador="regimeDeExecucao" textoLabel="Regime de Execução" divClassName="flex flex-col gap-1">
              <option value="">Selecione uma Opção</option>
              <option value="">Empreitada Integral</option>
              <option value="">Empreitada por Preço Global</option>
              <option value="">Empreitada por Preço Unitário</option>
              <option value="">Contratação por Tarefa</option>
          </Select>
        </div>
        {/* <div className="flex flex-col gap-2 mt-2">
                <h2 className="font-bold ">Regra de prazo</h2>
                <Input identificador="regra-prazo" texto="Art. 105: Duração Adstrita à Vigência dos Créditos Orçamentários ou por escopo pré-definido." type="radio" className="col-span-2" />
                <Input identificador="regra-prazo-justificativa" texto="Art. 106: Contratos de Serviços e Fornecimentos Contínuos (até 5 anos)." type="radio" className="col-span-2" />
                <Input identificador="regra-prazo" texto="Art. 108: Contratos previstos nas alíneas “f” e “g” do inciso IV e nos incisos V, VI, XII e XVI do caput do art. 75 da Lei 14.133/21 (até 10 anos)." type="radio" className="col-span-2" />
                <Input identificador="regra-prazo-justificativa" texto="Art. 109: Contrato de serviço público oferecido em regime de monopólio (prazo indeterminado)" type="radio" className="col-span-2" />
                <Input identificador="regra-prazo" texto="Art. 110 - I: Contratos que gere receita e no contrato de eficiência que gere economia para a Administração, sem investimento (até 10 anos)." type="radio" className="col-span-2" />
                <Input identificador="regra-prazo-justificativa" texto="Justificativa" type="radio" className="col-span-2" />
                <Input identificador="regra-prazo" texto="Art. 110 - II: Contratos que gere receita e no contrato de eficiência que gere economia para a Administração, com investimento (até 35 anos)." type="radio" className="col-span-2" />
                <Input identificador="regra-prazo-justificativa" texto="Art. 113: Contratos de Fornecimento e Prestação de Serviço Associado (até 5 anos contados da data de recebimento do objeto inicial)" type="radio" className="col-span-2" />
                <Input identificador="regra-prazo" texto="Art. 114: Operação continuada de sistemas estruturantes (até 15 anos)" type="radio" className="col-span-2" />
                <Input identificador="regra-prazo-justificativa" texto="Art. 75, VIII: Contratação Emergencial (até 1 ano)." type="radio" className="col-span-2" />
                <Input identificador="regra-prazo-justificativa" texto="Contratos de Locação de Imóveis." type="radio" className="col-span-2" />
              </div> */}
              <div>
                <Select textoLabel="Regra de Prazo" identificador="regraPrazo" className="w-full" divClassName="flex flex-col gap-1">
                  <option value="regra-prazo">Art. 105: Duração Adstrita à Vigência dos Créditos Orçamentários ou por escopo pré-definido.</option>
                  <option value="regra-prazo-justificativa">
                    Art. 106: Contratos de Serviços e Fornecimentos Contínuos (até 5 anos).
                  </option>
                  <option value="">
                    Art. 108: Contratos previstos nas alíneas “f” e “g” do inciso IV e nos incisos V, VI, XII e XVI do caput do art. 75 da Lei 14.133/21 (até 10 anos).
                  </option>
                  <option value="">
                    Art. 109: Contrato de serviço público oferecido em regime de monopólio (prazo indeterminado)
                  </option>
                  <option value="">
                    Art. 110 - I: Contratos que gere receita e no contrato de eficiência que gere economia para a Administração, sem investimento (até 10 anos).
                  </option>
                  <option value="">
                    Art. 110 - II: Contratos que gere receita e no contrato de eficiência que gere economia para a Administração, com investimento (até 35 anos).
                  </option>
                  <option value="">
                    Art. 113: Contratos de Fornecimento e Prestação de Serviço Associado (até 5 anos contados da data de recebimento do objeto inicial).
                  </option>
                  <option value="">
                    Art. 114: Operação continuada de sistemas estruturantes (até 15 anos)
                  </option>
                  <option value="">
                    Art. 75, VIII: Contratação Emergencial (até 1 ano).
                  </option>
                  <option value="">
                    Contratos de Locação de Imóveis.
                  </option>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="prazoVigencia" className="font-bold">Prazo de vigência do Contrato (em meses)</label>
                <input type="number" min={1} max={120} placeholder="ex: 120"id="prazoVigencia" className="border border-gray-300 p-1 rounded"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                      <Select identificador="registroDePrecos" textoLabel="Registro de Preços" divClassName="flex flex-col gap-1">
                        <option value="nao">Não</option>
                        <option value="sim">Sim</option>
                        <option value="simCorporativo">Sim (corporativo)</option>
                        <option value="">Sim (corporativo com escopo reduzido)</option>
                      </Select>
                      <Select identificador="procedimento" textoLabel="Procedimento" divClassName="flex flex-col gap-1">
                        <option value="">Selecione uma opção</option>
                        <option value="licitacao">Licitação</option>
                        <option value="dispensa">Dispensa</option>
                        <option value="inexigibilidade">inexigibilidade</option>
                        <option value="adesaoAAta">Adesão a Ata de Registro de Preços</option>
                        <option value="credenciamento">Credenciamento</option>
                        <option value="preQualificacao">Pré-Qualificação</option>
                        <option value="procedimentoDeManifestacao">Procedimento de Manifestação de interesse</option>
                      </Select>
                      <Select textoLabel="Modalidade" identificador="modalidade" divClassName="flex flex-col gap-1">
                        <option value="">Selecione uma opção</option>
                        <option value="pregao">Pregão</option>
                        <option value="concorrencia">Concorrência</option>
                        <option value="concurso">Concurso</option>
                        <option value="leilao">Leilão</option>
                        <option value="dialogoCompetitivo">Diálogo Competitivo</option>
                      </Select>
                      <Select textoLabel="Critério de Julgamento" identificador="criterioDeJulgamento" divClassName="flex flex-col gap-1">
                        <option value="">Selecione uma opção</option>
                        <option value="Menor Preço">
                          Menor Preço
                        </option>
                        <option value="Maior Lance ou Oferta">
                          Maior Lance ou Oferta
                        </option>
                        <option value="Melhor Técnica ou Conteúdo Artístico">
                          Melhor Técnica ou Conteúdo Artístico
                        </option>
                        <option value="Técnica e Preço">
                          Técnica e Preço
                        </option>
                        <option value="Maior Desconto">
                          Maior Desconto
                        </option>
                        <option value="Maior Retorno Econômico">
                          Maior Retorno Econômico
                        </option>
                      </Select>
              </div>
        {/* <div className="grid grid-cols-2 gap-1">
          <SimNao label="Envolve terceirização de mão de obra?" name="objetoNovo"/>
          <SimNao label="Possuí Material ou Serviço de Tecnologia da informação?" name="objetoUsado"/>
          <SimNao label="Possuí Material ou Serviço de Engenharia?" name="objetoEngenharia"/>
        </div> */}
        
        <Botao texto="Próxima" className="w-28"/>
      </form>
    </section>
  )
}