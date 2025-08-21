import { useState } from "react";
import type { ChangeEvent } from "react";
import { Botao } from "./Botao";
import { Select } from "./Select";
/* import { Input } from "./Input"; */



export function Objeto(){
  const [formData, setFormData] = useState({
  objetoDetalhado: '',
  fracionamento: '',
  naturezaDoObjeto: '',
  modoDeFornecimento: '',
  regimeDeExecucao: '',
  regraPrazo: '',
  prazoVigencia: '',
  registroDePrecos: '',
  procedimento: '',
  modalidade: '',
  criterioDeJulgamento: '',
});

  const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
  
};

  return(
    <section className="flex flex-col gap-1">
      <form action="submit" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="objetoDetalhado" className="font-bold">Objeto <span className="text-red-300">*</span></label>
          <input type="text" id="objetoDetalhado" name="objetoDetalhado" className="border border-gray-300 rounded h-20 p-1 mt-2" onChange={handleChange} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Select identificador="fracionamento" textoLabel="Fracionamento do objeto" divClassName="flex flex-col gap-1" onChange={handleChange}>
              <option value="">Selecione uma Opção</option>
              <option value="porLote">Por Lote</option>
              <option value="porItem">Por Item</option>
              <option value="integralComItens">Integral com Itens</option>
              <option value="integralSemItens">Integral sem Itens</option>
          </Select>
          <Select identificador="naturezaDoObjeto" textoLabel="Natureza do Objeto" divClassName="flex flex-col gap-1" onChange={handleChange} >
              <option value="">Selecione uma Opção</option>
              <option value="fornecimento">Fornecimento</option>
              <option value="servicoPorEscopo">Serviço por Escopo</option>
              <option value="servicoContinuado">Serviço Continuado</option>
              <option value="servicoDeEngenharia">Serviço de Engenharia</option>
              <option value="obra">Obra</option>
              <option value="locacaoDeImovel">Locação de Imóvel</option>
              <option value="locacaoDeBensMoveis">Locação de Bens Móveis</option>
              <option value="contratacaoDeArtistas">Contratação de Artistas</option>
              <option value="alienacaoDeBens">Alienação de Bens</option>
              <option value="concessao">Concessão</option>
              <option value="permissao">Permissão</option>
            </Select>
        </div>
        {formData.naturezaDoObjeto === "obra" && (
          <Select identificador="regimeDeExecucao" textoLabel="Regime de Execução" divClassName="flex flex-col gap-1" onChange={handleChange} >
              <option value="">Selecione uma Opção</option>
              <option value="empreitadaIntegral">Empreitada Integral</option>
              <option value="empreitadaPorPrecoGlobal">Empreitada por Preço Global</option>
              <option value="empreitadaPorPrecoUnitario">Empreitada por Preço Unitário</option>
              <option value="ContratacaoPorTarefa">Contratação por Tarefa</option>
          </Select>
        )}
        {formData.naturezaDoObjeto === "servicoDeEngenharia" && (
          <Select identificador="regimeDeExecucao" textoLabel="Regime de Execução" divClassName="flex flex-col gap-1" onChange={handleChange} >
              <option value="">Selecione uma Opção</option>
              <option value="empreitadaIntegral">Empreitada Integral</option>
              <option value="empreitadaPorPrecoGlobal">Empreitada por Preço Global</option>
              <option value="empreitadaPorPrecoUnitario">Empreitada por Preço Unitário</option>
              <option value="ContratacaoPorTarefa">Contratação por Tarefa</option>
          </Select>
        )}
        { formData.naturezaDoObjeto &&
        !(formData.naturezaDoObjeto === "obra" || formData.naturezaDoObjeto === "servicoDeEngenharia") && (
          <Select identificador="modoDeFornecimento" textoLabel="Modo de Fornecimento" divClassName="flex flex-col gap-1" onChange={handleChange} >
              <option value="">Selecione uma Opção</option>
              <option value="integral">Integral</option>
              <option value="parcelado">Parcelado</option>
          </Select>
        )}
              <div>
                <Select textoLabel="Regra de Prazo" identificador="regraPrazo" className="w-full" divClassName="flex flex-col gap-1" onChange={handleChange} >
                  <option value="art105">Art. 105: Duração Adstrita à Vigência dos Créditos Orçamentários ou por escopo pré-definido.</option>
                  <option value="art106">
                    Art. 106: Contratos de Serviços e Fornecimentos Contínuos (até 5 anos).
                  </option>
                  <option value="art108">
                    Art. 108: Contratos previstos nas alíneas “f” e “g” do inciso IV e nos incisos V, VI, XII e XVI do caput do art. 75 da Lei 14.133/21 (até 10 anos).
                  </option>
                  <option value="art109">
                    Art. 109: Contrato de serviço público oferecido em regime de monopólio (prazo indeterminado)
                  </option>
                  <option value="art110I">
                    Art. 110 - I: Contratos que gere receita e no contrato de eficiência que gere economia para a Administração, sem investimento (até 10 anos).
                  </option>
                  <option value="art110II">
                    Art. 110 - II: Contratos que gere receita e no contrato de eficiência que gere economia para a Administração, com investimento (até 35 anos).
                  </option>
                  <option value="art113">
                    Art. 113: Contratos de Fornecimento e Prestação de Serviço Associado (até 5 anos contados da data de recebimento do objeto inicial).
                  </option>
                  <option value="art114">
                    Art. 114: Operação continuada de sistemas estruturantes (até 15 anos)
                  </option>
                  <option value="art75">
                    Art. 75, VIII: Contratação Emergencial (até 1 ano).
                  </option>
                  <option value="contratosDeLocacaoDeImoveis">
                    Contratos de Locação de Imóveis.
                  </option>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="prazoVigencia" className="font-bold">Prazo de vigência do Contrato (em meses)</label>
                <input type="number" min={1} max={120} placeholder="ex: 120"id="prazoVigencia" className="border border-gray-300 p-1 rounded" name="prazoVigencia" onChange={handleChange}/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                      <Select identificador="registroDePrecos" textoLabel="Registro de Preços" divClassName="flex flex-col gap-1" onChange={handleChange} >
                        <option value="nao">Não</option>
                        <option value="sim">Sim</option>
                        <option value="simCorporativo">Sim (corporativo)</option>
                        <option value="simCorporativoComEscopoReduzido">Sim (corporativo com escopo reduzido)</option>
                      </Select>
                      <Select identificador="procedimento" textoLabel="Procedimento" divClassName="flex flex-col gap-1" onChange={handleChange} >
                        <option value="">Selecione uma opção</option>
                        <option value="licitacao">Licitação</option>
                        <option value="dispensa">Dispensa</option>
                        <option value="inexigibilidade">inexigibilidade</option>
                        <option value="adesaoAAta">Adesão a Ata de Registro de Preços</option>
                        <option value="credenciamento">Credenciamento</option>
                        <option value="preQualificacao">Pré-Qualificação</option>
                        <option value="procedimentoDeManifestacao">Procedimento de Manifestação de interesse</option>
                      </Select>
                      {
                        formData.procedimento === "licitacao" && (
                        <Select textoLabel="Modalidade" identificador="modalidade" divClassName="flex flex-col gap-1" onChange={handleChange} >
                          <option value="">Selecione uma opção</option>
                          <option value="pregao">Pregão</option>
                          <option value="concorrencia">Concorrência</option>
                          <option value="concurso">Concurso</option>
                          <option value="leilao">Leilão</option>
                          <option value="dialogoCompetitivo">Diálogo Competitivo</option>
                        </Select>
                        )
                      }
                      
                      <Select textoLabel="Critério de Julgamento" identificador="criterioDeJulgamento" divClassName="flex flex-col gap-1" onChange={handleChange} >
                        <option value="">Selecione uma opção</option>
                        <option value="menorPreço">
                          Menor Preço
                        </option>
                        <option value="maiorLanceOuOferta">
                          Maior Lance ou Oferta
                        </option>
                        <option value="melhorTecnicaOuConteúdoArtistico">
                          Melhor Técnica ou Conteúdo Artístico
                        </option>
                        <option value="tecnicaEPreco">
                          Técnica e Preço
                        </option>
                        <option value="maiorDesconto">
                          Maior Desconto
                        </option>
                        <option value="maiorRetornoEconomico">
                          Maior Retorno Econômico
                        </option>
                      </Select>
              </div>
        <Botao texto="Próxima" className="w-28"/>
      </form>
    </section>
  )
}