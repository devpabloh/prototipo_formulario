import React from 'react';
import { Input } from '../../ui/Input'; // Reutilizando nosso componente Input!

interface StepProps {
  data: { nome: string; email: string };
  updateData: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Step1({ data, updateData }: StepProps) {
  return (
    <div className="space-y-4 animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-800">Informações Pessoais</h2>
      <Input
        label="Nome Completo"
        name="nome"
        value={data.nome}
        onChange={updateData}
        placeholder="Seu nome"
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={data.email}
        onChange={updateData}
        placeholder="seu@email.com"
        required
      />
    </div>
  );
}