import './App.css'
/* import { Anexos } from './components/template/Anexos';
import { DetalhamentoDoObjeto } from './components/template/DetalhamentoDoObjeto';
import { InformacoesContratuais } from './components/template/InformacoesContratuais';
import { InformacoesDoProcesso } from './components/template/InformacoesDoProcesso'; */
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
  }
  /* ,
  {
    label: 'Detalhamento do objeto',
    content: (
      <div>
        <DetalhamentoDoObjeto/>
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
        <InformacoesDoProcesso/>
      </div>
    )
  },
  
  {
    label: 'Anexos',
    content: (
      <div>
        <Anexos/>
      </div>
    )
  } */
];


function App() {
  return (
    <div className='flex items-center p-8'>
      <Tabs tabs={dadosDasMinhasAbas}/>
    </div>
  )
}

export default App
