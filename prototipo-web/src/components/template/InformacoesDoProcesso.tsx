import { AdicionarDocumentos } from "./AdicionarDocumentos";
import { ContadorMeses } from "./ContadorMeses";
import { Input } from "./Input";
import { Select } from "./Select";
import { SimNao } from "./SimNao";


export function InformacoesDoProcesso() {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="text-2xl">Informações Preliminares do Processo</h2>
            <div className="grid grid-cols-2 gap-4">
                <Select textoLabel="Procedimento" identificador="procedimento" divClassName="flex flex-col gap-1">
                        <option value="">Selecione o Tipo de Procedimento</option>
                </Select>
                <Select textoLabel="Modalidade" identificador="modalidade" divClassName="flex flex-col gap-1">
                        <option value="">Selecione o Tipo de Modalidade</option>
                </Select>
                <Select textoLabel="Critério de Julgamento" identificador="criterioDeJulgamento" divClassName="flex flex-col gap-1">
                        <option value="">Selecione o critério de Julgamento</option>
                </Select>
                <Select textoLabel="Critério de Aceitabilidade de preços" identificador="criterioDeAcessibilidadeDePrecos" divClassName="flex flex-col gap-1">
                        <option value="">Selecione o critério de Aceitabilidade</option>
                </Select>
                <div className="flex flex-col">
                    <Input identificador="" texto="Percentual minímo para atestado técnico" placeholder="0%" labelClassName="flex flex-col-reverse font-bold"/>
                    <span className="text-gray-500">Percentual mínimo do objeto a ser exigido na habilitação técnica do processo</span>
                </div>
                <SimNao label="Possuí Material ou Serviço de Tecnologia da Informação?" name="possuiMaterial"/>
            </div>
            <div className="flex justify-start items-center gap-6">
                    <SimNao label="Habilitação Técnica Requer experiência por tempo?" name="experienciaPorTempo"/>
                    <ContadorMeses textoh2="Tempo de experiência"/>
                    
                    <div>
                        <h2 className="font-bold">Unidade de Tempo<span className="text-red-500">*</span></h2>
                        <input type="radio" id="unidadeDeTempo" className=""/>
                        <label htmlFor="unidadeDeTempo" className="mx-2">Meses</label>
                        <input type="radio" id="unidadeDeTempo"/>
                        <label htmlFor="unidadeDeTempo" className="mx-2">Anos</label>
                    </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <SimNao label="Possuí registro em entidade profissional?" name="possuiMaterial" className="mt-1"/>
                <span className="text-gray-500">CREA, CAU, CRC, etc.</span>
                </div>
                <div className="flex flex-col">
                    <Input identificador="" texto="Nome completo da entidade profissional" labelClassName="flex  flex-col-reverse"/>
                </div>
                <SimNao label="Requer amostra ou prova de conceito?" name="possuiMaterial" className="mt-1"/>
                <div className="flex flex-col">
                    <Input identificador="" texto="Prazo para amostra / prova de conceito (em dias)" labelClassName="flex flex-col-reverse"/>
                </div>
                <SimNao label="Permite Consórcios?" name="permiteConsorcios" className="mt-1"/>
                <div className="flex flex-col">
                    <Input identificador="" texto="Justificativa para permissão ou não de consórcios" labelClassName="flex flex-col-reverse" className="h-20"/>
                </div>
                <SimNao label="Permite Cooperativas?" name="permiteConsorcios" className="mt-1"/>
                <div className="flex flex-col">
                    <Input identificador="" texto="Justificativa para permissão ou não de cooperativas" labelClassName="flex flex-col-reverse" className="h-20"/>
                </div>
            </div>
            <h2 className="text-2xl mt-4">Bloqueios e Empenhos Orçamentários</h2>
            <div className="border-2 border-dashed border-gray-300 flex flex-col p-4 mb-4" >
                <div className="flex justify-start w-full mb-4">
                    <Input 
                    type="radio" 
                    texto="Nota de Bloqueio / Empenho 1" 
                    identificador="notaDeBloqueio" 
                    labelClassName="flex items-center font-bold" 
                    className="mr-2"
                    />
                </div>

                <div className="grid grid-cols-4 gap-x-4 mb-4">
                    <Input 
                    type="text" 
                    texto="Numero / código" 
                    identificador="numeroCodigo" 
                    className="w-full" 
                    labelClassName="flex flex-col-reverse"
                    />
                    <Input 
                    type="text" 
                    texto="Valor" 
                    identificador="valor" 
                    className="w-full" 
                    labelClassName="flex flex-col-reverse"
                    />
                    <Input 
                    type="date" 
                    texto="Data de Emissão" 
                    identificador="dataEmissao" 
                    className="w-full" 
                    labelClassName="flex flex-col-reverse"
                    />
                    <Input 
                    type="file" 
                    texto="Arquivo da nota" 
                    identificador="arquivo" 
                    className="w-full file:px-4 file:py-2 file:rounded file:bg-gray-200 file:text-gray-700 file:font-semibold hover:file:bg-gray-300 cursor-pointer" 
                    labelClassName="flex flex-col-reverse"
                    />
                </div>
                <AdicionarDocumentos name=""/>
                <span className="text-gray-500">+ Adicionar Nota de Bloqueio / Empenho</span>
            </div>
            <div className="flex items-center justify-between">
                <SimNao label="Informar Pesquisa de Preços" name="pesquisaDePrecos"/>
                <AdicionarDocumentos name="" />
            </div>
            <h2 className="text-2xl mt-4">Pesquisa de Preços</h2>
            <div className="border-2 border-dashed border-gray-300 flex flex-col p-4 mb-4" >
                <div className="flex justify-start w-full mb-4">
                    <Input 
                    type="radio" 
                    texto="Preço 1" 
                    identificador="preco1" 
                    labelClassName="font-bold" 
                    className="mr-2"
                    />
                </div>
                <div className="grid grid-cols-3 gap-x-4">
                    <Input 
                    type="text" 
                    texto="Fonte" 
                    identificador="fonte" 
                    className="w-full" 
                    labelClassName="flex flex-col-reverse font-bold"
                    />
                    <Input 
                    type="text" 
                    texto="Descrição" 
                    identificador="descricao" 
                    className="w-full" 
                    labelClassName="flex flex-col-reverse font-bold"
                    />
                    <Input 
                    type="file" 
                    texto="Arquivo" 
                    identificador="arquivo2" 
                    className="w-full file:px-4 file:py-2 file:rounded file:bg-gray-200 file:text-gray-700 file:font-semibold hover:file:bg-gray-300 cursor-pointer" 
                    labelClassName="flex flex-col-reverse font-bold"
                    />
                </div>
            </div>
        </div>
    )
}