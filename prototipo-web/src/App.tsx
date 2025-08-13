import './App.css'
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
        <h3 className="font-bold">Vue.js</h3>
        <p>Um framework progressivo para a construção de interfaces de usuário.</p>
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
    <div className='h-screen max-w-xl mx-auto flex items-center'>
      <Tabs tabs={dadosDasMinhasAbas}/>
    </div>
  )
}

export default App
