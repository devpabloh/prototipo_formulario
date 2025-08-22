import { Select } from "../components/template/Select";
import { SimNao } from "../components/template/SimNao";

export function ModalidadeDeLicitacaoCriterioDeJulgamentoRegimeDeExecucaoEModoDeDisputa(){
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
        </div>
    )
}