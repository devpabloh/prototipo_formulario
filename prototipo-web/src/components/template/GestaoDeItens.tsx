import { useState } from 'react';

// Um pequeno ícone de lixeira para o botão de deletar (opcional)
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.144-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.057-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);


export default function GestaoDeItens() {
  // Estado para controlar o modo selecionado: 'unidade' ou 'grupo'
  const [modo, setModo] = useState('unidade');

  // --- ESTADOS PARA O MODO "POR UNIDADE" ---
  const [itemAtual, setItemAtual] = useState({ nome: '', qtd: '', valor: '' });
  const [itensPorUnidade, setItensPorUnidade] = useState([]);

  // --- ESTADOS PARA O MODO "POR GRUPO" ---
  const [nomeNovoGrupo, setNomeNovoGrupo] = useState('');
  const [grupos, setGrupos] = useState([]);

  // --- FUNÇÕES DO MODO "POR UNIDADE" ---
  const handleItemAtualChange = (e) => {
    const { name, value } = e.target;
    setItemAtual(prev => ({ ...prev, [name]: value }));
  };

  const handleAdicionarItemUnidade = () => {
    if (!itemAtual.nome || !itemAtual.qtd || !itemAtual.valor) {
      alert('Preencha todos os campos do item!');
      return;
    }
    const novoItem = { ...itemAtual, id: Date.now() };
    setItensPorUnidade(prev => [...prev, novoItem]);
    setItemAtual({ nome: '', qtd: '', valor: '' }); // Limpa os inputs
  };

  // --- FUNÇÕES DO MODO "POR GRUPO" ---
  const handleAdicionarGrupo = () => {
    if (!nomeNovoGrupo.trim()) {
      alert('Digite um nome para o grupo!');
      return;
    }
    const novoGrupo = {
      id: Date.now(),
      nome: nomeNovoGrupo,
      itens: [],
      itemAtualGrupo: { nome: '', qtd: '', valor: '' } // Cada grupo tem seu próprio formulário
    };
    setGrupos(prev => [...prev, novoGrupo]);
    setNomeNovoGrupo(''); // Limpa o input
  };

  const handleItemGrupoChange = (grupoId, e) => {
    const { name, value } = e.target;
    setGrupos(prevGrupos => prevGrupos.map(grupo => 
      grupo.id === grupoId 
        ? { ...grupo, itemAtualGrupo: { ...grupo.itemAtualGrupo, [name]: value } }
        : grupo
    ));
  };

  const handleAdicionarItemNoGrupo = (grupoId) => {
    const grupoAlvo = grupos.find(g => g.id === grupoId);
    const { nome, qtd, valor } = grupoAlvo.itemAtualGrupo;

    if (!nome || !qtd || !valor) {
      alert('Preencha todos os campos do item!');
      return;
    }
    
    const novoItem = { ...grupoAlvo.itemAtualGrupo, id: Date.now() };

    setGrupos(prevGrupos => prevGrupos.map(grupo =>
      grupo.id === grupoId
        ? { 
            ...grupo, 
            itens: [...grupo.itens, novoItem],
            itemAtualGrupo: { nome: '', qtd: '', valor: '' } // Limpa o formulário do grupo
          }
        : grupo
    ));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Adicionar Itens</h1>

        {/* SELEÇÃO DE MODO */}
        <div className="flex items-center space-x-6 mb-8 bg-white p-4 rounded-lg shadow-sm">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="radio" 
              name="modo" 
              value="unidade" 
              checked={modo === 'unidade'} 
              onChange={(e) => setModo(e.target.value)} 
              className="h-5 w-5 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-lg font-semibold text-gray-700">Por Unidade</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="radio" 
              name="modo" 
              value="grupo" 
              checked={modo === 'grupo'} 
              onChange={(e) => setModo(e.target.value)} 
              className="h-5 w-5 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-lg font-semibold text-gray-700">Por Grupo</span>
          </label>
        </div>

        {/* RENDERIZAÇÃO CONDICIONAL */}
        
        {/* MODO POR UNIDADE */}
        {modo === 'unidade' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Adicionar Novo Item</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="md:col-span-2">
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome do Item</label>
                  <input type="text" name="nome" value={itemAtual.nome} onChange={handleItemAtualChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                  <label htmlFor="qtd" className="block text-sm font-medium text-gray-700">Quantidade</label>
                  <input type="number" name="qtd" value={itemAtual.qtd} onChange={handleItemAtualChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                  <label htmlFor="valor" className="block text-sm font-medium text-gray-700">Valor Unitário</label>
                  <input type="number" name="valor" value={itemAtual.valor} onChange={handleItemAtualChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
              </div>
               <button onClick={handleAdicionarItemUnidade} className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">
                  Adicionar
                </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Itens Adicionados</h3>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qtd</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {itensPorUnidade.map(item => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{item.nome}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.qtd}</td>
                        <td className="px-6 py-4 whitespace-nowrap">R$ {parseFloat(item.valor).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </div>
        )}

        {/* MODO POR GRUPO */}
        {modo === 'grupo' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Criar Novo Grupo</h2>
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  value={nomeNovoGrupo} 
                  onChange={(e) => setNomeNovoGrupo(e.target.value)} 
                  placeholder="Nome do Grupo" 
                  className="flex-grow border border-gray-300 rounded-md shadow-sm p-2"
                />
                <button onClick={handleAdicionarGrupo} className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700">
                  Criar Grupo
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {grupos.map(grupo => (
                <div key={grupo.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{grupo.nome}</h3>
                  
                  {/* Formulário para adicionar item DENTRO do grupo */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end mb-4 p-4 bg-gray-50 rounded-md">
                     <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Nome do Item</label>
                      <input type="text" name="nome" value={grupo.itemAtualGrupo.nome} onChange={(e) => handleItemGrupoChange(grupo.id, e)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Quantidade</label>
                      <input type="number" name="qtd" value={grupo.itemAtualGrupo.qtd} onChange={(e) => handleItemGrupoChange(grupo.id, e)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Valor Unitário</label>
                      <input type="number" name="valor" value={grupo.itemAtualGrupo.valor} onChange={(e) => handleItemGrupoChange(grupo.id, e)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                  </div>
                  <button onClick={() => handleAdicionarItemNoGrupo(grupo.id)} className="mb-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">
                    Adicionar Item ao Grupo
                  </button>

                  {/* Tabela de itens do grupo */}
                   <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qtd</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {grupo.itens.map(item => (
                          <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{item.nome}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.qtd}</td>
                            <td className="px-6 py-4 whitespace-nowrap">R$ {parseFloat(item.valor).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}