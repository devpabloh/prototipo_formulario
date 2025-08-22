import { Input } from "../components/template/Input";
import { Select } from "../components/template/Select";
import { SimNao } from "../components/template/SimNao";

export function Proposta(){
    return(
        <div>
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
        </div>
    )
}