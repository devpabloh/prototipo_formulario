import { SimNao } from "../components/template/SimNao";

export function JustificativaParaAplicacaoOuNaoDoBeneficioPrevistoLeiComplementarN123_2006(){
    return(
        <div>
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