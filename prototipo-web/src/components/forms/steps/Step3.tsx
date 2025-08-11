import React from 'react';

interface StepProps {
  data: { aceitaTermos: boolean };
  updateData: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Step3({ data, updateData }: StepProps) {
  return (
    <div className="space-y-4 animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-800">Confirmação</h2>
      <p>Revise suas informações antes de enviar. Ao continuar, você concorda com nossos Termos de Serviço.</p>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="aceitaTermos"
          name="aceitaTermos"
          checked={data.aceitaTermos}
          onChange={updateData}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          required
        />
        <label htmlFor="aceitaTermos" className="ml-2 block text-sm text-gray-900">
          Eu li e aceito os termos.
        </label>
      </div>
    </div>
  );
}