import React from 'react';
import { Input } from '../../ui/Input';

interface StepProps {
  data: { rua: string; cidade: string };
  updateData: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Step2({ data, updateData }: StepProps) {
  return (
    <div className="space-y-4 animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-800">Endereço</h2>
      <Input
        label="Rua e Número"
        name="rua"
        value={data.rua}
        onChange={updateData}
        placeholder="Ex: Rua das Flores, 123"
        required
      />
      <Input
        label="Cidade"
        name="cidade"
        value={data.cidade}
        onChange={updateData}
        placeholder="Sua cidade"
        required
      />
    </div>
  );
}