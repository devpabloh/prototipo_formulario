import { Input } from "../components/template/Input";

export function ClassificacaoOrcamentariaDaDespesa(){
    return(
        <div>
            <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                <legend className="font-bold"> 4.2 Classificação orçamentária da despesa </legend>
                <Input identificador="" type="text" texto="Fonte" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                <Input identificador="" type="text" texto="Unidade" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                <Input identificador="" type="text" texto="Programa" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                <Input identificador="" type="text" texto="Ação" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                <Input identificador="" type="text" texto="Elemento de Despesa" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                <Input identificador="" type="text" texto="Categoria Econômica" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
            </fieldset>
        </div>
    )
}