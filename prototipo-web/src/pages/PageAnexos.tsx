// src/pages/PageAnexos.tsx

import { useState } from 'react';
import { CardAnexo } from '../components/template/CardAnexo';
import { ModalAdicionarCard } from '../components/template/ModalAdicionarCard';
import { Plus } from 'lucide-react';

export interface CardState {
  id: number;
  title: string;
  file: File | null;
  isMandatory: boolean;
}

// Cards obrigatórios que aparecerão por padrão
const MANDATORY_CARDS: Omit<CardState, 'file'>[] = [
  { id: 1, title: 'Mapa de Riscos (ou Justificativa de não enquadramento', isMandatory: true },
  { id: 2, title: 'Tratativa com a GPCOM/GEFRO/GEPAC ou ATI (se for o caso)', isMandatory: true },
  { id: 3, title: 'Mapa de Preços (ou Planilha de Custos) com Declaração de Compatibilidade', isMandatory: true },
  
];


export function PageAnexos() {
  const [cards, setCards] = useState<CardState[]>(
    MANDATORY_CARDS.map(card => ({...card, file: null }))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (id: number, file: File | null) => {
    setCards(prevCards =>
      prevCards.map(card => (card.id === id ? { ...card, file } : card))
    );
  };

  const handleAddCards = (titles: string[]) => {
    const newCards: CardState[] = titles.map(title => ({
      id: Date.now() + Math.random(),
      title,
      file: null,
      isMandatory: false,
    }));
    setCards(prevCards => [...prevCards, ...newCards]);
  };



  const handleRemoveCard = (id: number) => {
    setCards(prevCards => {
      const cardToRemove = prevCards.find(card => card.id === id);
      
      if (cardToRemove?.isMandatory) {
        const sameTypeCards = prevCards.filter(card => 
          card.title === cardToRemove.title && card.isMandatory
        );
        
        if (sameTypeCards.length <= 1) {
          alert("Não é possível remover o último card obrigatório deste tipo.");
          return prevCards;
        }
      }
      
      return prevCards.filter(card => card.id !== id);
    });
  }

  return (
    <div>
      <fieldset className="border-2 border-gray-400 rounded-xl p-3">
        <legend className="font-bold px-2">Anexos</legend>
        <div className="flex flex-col p-1">
          <div>
            <h2 className="text-2xl font-bold">Documentos do Processo</h2>
            <span className="text-red-600 font-semibold">
              Observação: Todos os documentos devem estar assinados.
            </span>
          </div>
          <div className="mt-6 flex justify-center flex-wrap gap-4">
            {/* Renderiza os cards existentes */}
            {cards.map(card => (
              <CardAnexo
                key={card.id}
                id={card.id}
                title={card.title}
                isMandatory={card.isMandatory}
                onFileChange={handleFileChange}
                onRemoveCard={handleRemoveCard}
              />
            ))}

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex flex-col items-center justify-center lg:w-70 lg:h-80 md:w-60 md:h-70 h-50 w-60 border-2 border-dashed border-gray-400 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="font-bold text-gray-600">Adicionar cards</h3>
              <Plus size={40} className="text-gray-400 mt-2" />
            </button>
          </div>
        </div>
      </fieldset>

      <ModalAdicionarCard
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCards={handleAddCards}
        existingCardTitles={cards.map(c => c.title)}
      />
    </div>
  );
}