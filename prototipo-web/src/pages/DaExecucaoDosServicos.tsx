import { Input } from "../components/template/Input";
import { Select } from "../components/template/Select";

export function DaExecucaoDosServicos(){
    return(
        <div>
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
        </div>
    )
}