import React, { useState } from 'react';
import { Step1 } from './steps/Step1';
import { Step2 } from './steps/Step2';
import { Step3 } from './steps/Step3';
import { ProgressBar } from './ProgressBar';

// Interface para definir a estrutura dos dados do nosso formulário
interface FormData {
  nome: string;
  email: string;
  rua: string;
  cidade: string;
  aceitaTermos: boolean;
}

const TOTAL_STEPS = 3;

export function MultiStepForm() {
  // Estado para armazenar os dados de todas as etapas
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    rua: '',
    cidade: '',
    aceitaTermos: false,
  });

  // Estado para controlar a etapa atual
  const [currentStep, setCurrentStep] = useState(1);

  // Função para lidar com a mudança nos inputs
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Funções para navegar entre as etapas
  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você enviaria os dados para sua API
    console.log('Dados finais do formulário:', formData);
    alert('Formulário enviado com sucesso!');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
      <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
      
      <form onSubmit={handleSubmit} className="mt-8">
        {/* Renderização condicional da etapa atual */}
        {currentStep === 1 && <Step1 data={formData} updateData={handleInputChange} />}
        {currentStep === 2 && <Step2 data={formData} updateData={handleInputChange} />}
        {currentStep === 3 && <Step3 data={formData} updateData={handleInputChange} />}

        {/* Botões de Navegação */}
        <div className="mt-8 flex justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition"
            >
              Anterior
            </button>
          ) : (
            <div /> // Um div vazio para manter o alinhamento
          )}

          {currentStep < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Próximo
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
              Enviar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}