import { Input } from "../components/template/Input";
import { SimNao } from "../components/template/SimNao";

export function ItemsQuatro(){
  return(
    <div>
      <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 4.1 Valor estimado de contratação </legend>
                    <SimNao label="Orçamento sigiloso ?" name="permiteCooperativa" valorInicial="nao"/>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 4.2 Classificação orçamentária da despesa </legend>
                    <Input identificador="" type="text" texto="Fonte" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                    <Input identificador="" type="text" texto="Unidade" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                    <Input identificador="" type="text" texto="Programa" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                    <Input identificador="" type="text" texto="Ação" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                    <Input identificador="" type="text" texto="Elemento de Despesa" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                    <Input identificador="" type="text" texto="Categoria Econômica" labelClassName="flex flex-col-reverse font-bold" placeholder="Até 50 caracteres"/>
                </fieldset>
                <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 4.3 Justificativa para aplicação ou não do benefício previsto na Lei complementar nº 123/2006 </legend>
                    <div className="flex justify-start gap-4">
                    <SimNao label="Aplicar cota Exclusiva (itens ou lotes até R$ 80.000,00) ?" name="cotaExclusica" valorInicial="nao" className="w-1/2"/>
                    <SimNao label="Cota Reservada (Aquisição de bens de natureza divisível) " name="cotaReserva" valorInicial="nao" className="w-1/2"/>
                    </div>
                </fieldset>
    </div>
  )
}