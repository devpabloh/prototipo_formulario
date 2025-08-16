import { AdicionarDocumentos } from "./AdicionarDocumentos";
import { Input } from "./Input";
import { Select } from "./Select";

export function Anexos(){
    return(
        <div className="flex flex-col gap-1">
            <h2 className="text-2xl mt-4">Anexos</h2>
            <div className="border-2 border-dashed border-gray-300 flex flex-col p-4 mb-4" >
                <div className="flex justify-start w-full mb-4">
                                <Input 
                                type="radio" 
                                texto="Anexo 1" 
                                identificador="anexo1" 
                                labelClassName="font-bold" 
                                className="mr-2"
                                />
                </div>
                <div className="flex items-baseline justify-between gap-4 mb-8 h-10">
                                <Input 
                                type="text" 
                                texto="Descrição" 
                                identificador="descricao" 
                                labelClassName="flex flex-col-reverse font-bold"
                                className="w-80"
                                />
                                <Select identificador="tipo" textoLabel="Tipo" divClassName="flex flex-col w-80">
                                    <option>Selecione um tipo</option>
                                </Select>
                                <Input 
                                type="file" 
                                texto="Arquivo(s)" 
                                identificador="arquivo2" 
                                className=" file:px-4 file:py-2 file:rounded file:bg-gray-200 file:text-gray-700 file:font-semibold hover:file:bg-gray-300 cursor-pointer" 
                                labelClassName="flex flex-col-reverse font-bold"
                                />
                </div>
                <AdicionarDocumentos name=""/>
                <span className="text-gray-500">+ Adicionar Anexo</span>
            </div>
        </div>
    )
}