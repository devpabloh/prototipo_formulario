import { SimNao } from "../components/template/SimNao";

export function ItemsDez(){
  return(
    <div>
      <fieldset className="border-2 border-gray-400 rounded-xl p-3">
                    <legend className="font-bold"> 10.1 Sanções a serem aplicadas na fase de licitação</legend>
                    <div className="flex gap-4">
                        <SimNao label="Usar redação padronizada?" name="" className="w-1/2"/>
                        <SimNao label="Inclur sanções além das padronizadas?" name="" className="w-1/2"/>
                    </div>
                </fieldset>
    </div>
  )
}