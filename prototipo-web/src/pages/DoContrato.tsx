import { Input } from "../components/template/Input";

export function DoContrato(){
    return(
        <div>
            <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                <legend className="font-bold"> 7 Do contrato</legend>
                <div className="flex gap-4">
                    <Input identificador="" labelClassName="flex flex-col-reverse w-1/2 font-bold" type="number" texto="Prazo de Assinatura do Contrato (dias úteis)" value={5}/>
                    <Input identificador="" labelClassName="flex flex-col-reverse w-1/2 font-bold" type="number" texto="Prazo de Início da Execução Contratual" value={0}/>
                </div>
            </fieldset>
        </div>
    )
}