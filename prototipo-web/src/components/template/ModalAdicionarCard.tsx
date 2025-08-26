import { useState } from 'react';
import { X } from 'lucide-react';

// Opções de cards pré-definidos
const PREDEFINED_CARDS = [
  'Mapa de Riscos (ou Justificativa de não enquadramento',
  'Tratativa com a GPCOM/GEFRO/GEPAC ou ATI (se for o caso)',
  'Mapa de Preços (ou Planilha de Custos)com Declaração de Compatibilidade',
  'Termo de Referência',
  'Autorização para Despesa no Plano PluriAnual (se for o caso)'
];

interface ModalAdicionarCardProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onAddCards: (titles: string[]) => void;
  readonly existingCardTitles: string[];
}

export function ModalAdicionarCard({ isOpen, onClose, onAddCards, existingCardTitles }: ModalAdicionarCardProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [showCustom, setShowCustom] = useState(false);
  const [customTitle, setCustomTitle] = useState('');

  if (!isOpen) return null;

  const handleToggleSelect = (title: string) => {
    setSelected(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  const handleAddCustom = () => {
    if (customTitle.trim() && !existingCardTitles.includes(customTitle.trim()) && !selected.includes(customTitle.trim())) {
      setSelected(prev => [...prev, customTitle.trim()]);
      setCustomTitle('');
      setShowCustom(false);
    } else {
        alert("Este nome de card já existe ou é inválido.")
    }
  };

  const handleSubmit = () => {
    onAddCards(selected);
    onClose();
    setSelected([]);
  };

  const availablePredefinedCards = PREDEFINED_CARDS;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold mb-4">Adicionar Novos Cards</h2>
        
        <div className="space-y-3 mb-4">
            <h3 className="font-semibold">Opções Disponíveis</h3>
            <div className='max-h-40 overflow-y-auto border border-gray-200 rounded-md p-3'>
              <div className='flex flex-wrap gap-2'>
                   {availablePredefinedCards.map(title => (
                      <button
                          key={title}
                          onClick={() => handleToggleSelect(title)}
                          className={`px-3 py-2 rounded-md transition-colors text-sm ${
                          selected.includes(title)
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                      >
                          {title}
                      </button>
                   ))}
                   {availablePredefinedCards.length === 0 && <p className='text-sm text-gray-500'>Todos os cards pré-definidos já foram adicionados.</p>}
              </div>
            </div>
           
            <hr/>

            <div>
                <button 
                    onClick={() => setShowCustom(!showCustom)} 
                    className="font-semibold text-blue-600 hover:underline"
                >
                    Outros (Criar personalizado)
                </button>
                {showCustom && (
                    <div className="mt-2 flex gap-2">
                        <input
                            type="text"
                            value={customTitle}
                            onChange={(e) => setCustomTitle(e.target.value)}
                            placeholder="Digite o título do card"
                            className="border border-gray-300 rounded-md px-2 py-1 w-full"
                        />
                        <button onClick={handleAddCustom} className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
                            Adicionar
                        </button>
                    </div>
                )}
            </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={selected.length === 0}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Adicionar {selected.length > 0 ? selected.length : ''} card(s) selecionado(s)
          </button>
        </div>
      </div>
    </div>
  );
}