import { useState } from "react";

interface CardsProps{
  id: number;
  tipo: string;
  nome: string;
  matricula: number;
  setor: string;
  unidade: string;
}

export function Cards(){
  const [formData, setFormData] = useState({
    id: '',
    tipo: '',
    nome: '',
    matricula: '',
    setor: '',
    unidade: ''
  })
  const [registros, setRegistros] = useState<CardsProps[]>([])
  const [termoPesquisa, setTermoPesquisa] = useState('')

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target
    setFormData( prev => ({...prev, [name]:value}))
  }

  const adicionarCard = () =>{
    if(!formData.tipo || !formData.nome || !formData.matricula || !formData.setor || !formData.unidade){
      alert('Por favor, preencher todos os campos')
      return;
    }

    const novoRegistro: CardsProps = {
      id: registros.length > 0 ? Math.max(...registros.map(r => r.id)) + 1:1,
      tipo: formData.tipo,
      nome: formData.nome,
      matricula: Number(formData.matricula),
      setor: formData.setor,
      unidade: formData.unidade,
    }

    setRegistros([...registros, novoRegistro])
    setFormData({id: '', tipo: '', nome:'', matricula:'', setor: '', unidade: ''})
  }

  const deletarCard = (id: number) => {
    if (confirm('Tem certeza que deseja excluir este card?')) {
      setRegistros(registros.filter(registro => registro.id !== id))
    }
  }

  const registrosFiltrados = registros.filter(registro => 
    registro.id.toString().includes(termoPesquisa) || 
    registro.tipo.toString().includes(termoPesquisa.toLowerCase()) ||
    registro.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
    registro.matricula.toString().includes(termoPesquisa) ||
    registro.setor.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
    registro.unidade.toLowerCase().includes(termoPesquisa.toLowerCase())
  )

  return(
    <div className="mb-6 p-4 bg-gray-100 rounded-lg w-full overflow-hidden">
      <div>
        <div className="flex flex-col space-y-2 mb-4">
          <label htmlFor="name">Tipo</label>
          <input 
          type="text" 
          id="tipo"
          name="tipo"
          value={formData.tipo}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          required 
          />

          <label htmlFor="name">Nome</label>
          <input 
          type="text" 
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          required 
          />

          <label htmlFor="name">Matricula</label>
          <input 
          type="text" 
          id="matricula"
          name="matricula"
          value={formData.matricula}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          required 
          />

          <label htmlFor="name">Setor</label>
          <input 
          type="text" 
          id="setor"
          name="setor"
          value={formData.setor}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          required 
          />

          <label htmlFor="name">Unidade</label>
          <input 
          type="text" 
          id="unidade"
          name="unidade"
          value={formData.unidade}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          required 
          />
        </div>
        <button
          onClick={adicionarCard}
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Adicionar Card
        </button>
      </div>
      <hr className="my-6"/>
      
      {registros.length === 0 ? (
        <div className="text-center p-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p className="font-bold">Nenhum card adicionado ainda.</p>
          <p>Por favor, preencha as informações acima e aperte no botão para adicionar o primeiro card.</p>
        </div>
      ) : (
        // Se houver registros, mostra a pesquisa e os cards
        <div className="w-full overflow-hidden">
          <div className="mb-4">
            <label htmlFor="pesquisa" className="font-medium">Pesquisar Cards:</label>
            <input
              type="text"
              id="pesquisa"
              value={termoPesquisa}
              onChange={(e) => setTermoPesquisa(e.target.value)}
              placeholder="Digite para filtrar por qualquer campo..."
              className="border p-2 rounded w-full mt-1"
            />
          </div>

          {registrosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {registrosFiltrados.map((registro) => (
                <div key={registro.id} className="p-4 bg-white border rounded-lg shadow relative min-w-0">
                  {/* Botão X para deletar */}
                  <button
                    onClick={() => deletarCard(registro.id)}
                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-sm text-center hover:bg-red-600 transition-colors text-sm font-bold"
                    title="Excluir card"
                  >
                    X
                  </button>
                  
                  <h3 className="font-bold text-lg mb-2 pr-8 break-words">{registro.nome}</h3>
                  <p className="break-words"><strong>ID:</strong> {registro.id}</p>
                  <p className="break-words"><strong>Matrícula:</strong> {registro.matricula}</p>
                  <p className="break-words"><strong>Tipo:</strong> {registro.tipo}</p>
                  <p className="break-words"><strong>Setor:</strong> {registro.setor}</p>
                  <p className="break-words"><strong>Unidade:</strong> {registro.unidade}</p>
                </div>
              ))}
            </div>
          ) : (
             // Mensagem para quando a pesquisa não retorna resultados
            <div className="text-center p-4 bg-gray-100 rounded-lg">
                <p className="font-semibold">Nenhum resultado encontrado para "{termoPesquisa}".</p>
                <p>Tente um termo de pesquisa diferente.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}