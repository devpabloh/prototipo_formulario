import { AdicionarDocumentos } from "./AdicionarDocumentos";
import { ContadorMeses } from "./ContadorMeses";
import { Input } from "./Input";
import { SimNao } from "./SimNao";

export function InformacoesContratuais(){
  return(
    <div>
      <div className="grid grid-cols-2 gap-4">
        <SimNao label="Contrato ou Parceria será substituído por outro instrumento há..." name="contratoOuParceriaSeraSubstituido"/>
        <AdicionarDocumentos name="documento" />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h2>Regra de prazo</h2>
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
      </div>
      <div className="grid grid-cols-3">
        <ContadorMeses textoh2="Prazo do Contrato (em meses)" />
        <SimNao label="E registro de Preços?" name="clausulaRegistroPrecos" />
        <SimNao label="Prevê garantia de execução contratual?" name="clausulaRevisao" />
      </div>
      <div className="grid grid-cols-3 mt-2">
        <SimNao label="E registro de Preços?" name="clausulaRegistroPrecos" />
        <ContadorMeses textoh2="Percentual Limite de Subcontratação do Objeto"/>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h2>Dotação orçamentária</h2>
        <table >
          <thead>
            <tr>
              <th></th>
              <th className="border px-2">Órgão</th>
              <th className="border px-2">Unidade Orçamentária</th>
              <th className="border px-2">Projeto / Atividade</th>
              <th className="border px-2">Elemento de Despesa</th>
              <th className="border px-2">Fonte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <input type="radio" />
              <td className="border px-2"></td>
              <td className="border px-2"></td>
              <td className="border px-2"></td>
              <td className="border px-2"></td>
              <td className="border px-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}