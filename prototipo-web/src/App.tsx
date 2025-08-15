import './App.css'
import { InformacoesContratuais } from './components/template/InformacoesContratuais';
import { Objeto } from './components/template/Objeto';
import { Tabs } from './components/template/Tabs';

const dadosDasMinhasAbas = [
  {
    label: 'Objeto',
    content: (
      <div>
        <Objeto/>
      </div>
    ),
  },
  {
    label: 'Detalhamento do objeto',
    content: (
      <div>
        <p>eita</p>
      </div>
    ),
  },
  {
    label: 'Aspectos Técnicos',
    content: (
      <div>
        <h3 className="font-bold text-gray-900">Angular</h3>
        <p>Uma plataforma e framework para criar aplicações de página única.</p>
      </div>
    ),
  },
  {
    label: 'Informações Contratuais',
    content: (
      <div>
        <InformacoesContratuais/>
      </div>
    )
  },
  {
    label: 'Informações do Processo',
    content: (
      <div>
        <h3 className="font-bold text-gray-900">Angular</h3>
        <p>Uma plataforma e framework para criar aplicações de página única.</p>
      </div>
    )
  },
  
  {
    label: 'Anexos',
    content: (
      <div>
        <h3 className="font-bold text-gray-900">Angular</h3>
        <p>Uma plataforma e framework para criar aplicações de página única.</p>
      </div>
    )
  },
  
  {
    label: 'Controles',
    content: (
      <div>
        <h3 className="font-bold text-gray-900">Angular</h3>
        <p>Uma plataforma e framework para criar aplicações de página única.</p>
      </div>
    )
  },
];


function App() {
  return (
    <div className='flex items-center p-8'>
      <Tabs tabs={dadosDasMinhasAbas}/>
    </div>
  )
}

export default App
