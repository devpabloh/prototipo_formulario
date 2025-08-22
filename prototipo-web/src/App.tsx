import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

// Importando nossos componentes
import {Home} from './pages/Home';
import Layout from './components/template/Layout'; // O layout principal
import { PageDetalhamentoDoObjeto } from './pages/PageDetalhamentoDoObjeto';
import { TermoDeReferencia } from './pages/TermoDeReferencia';
import { VedacaoOuParticipacaoDeEmpresasSobFormaDeConsorcio } from './pages/VedacaoOuParticipacaoDeEmpresasSobFormaDeConsorcio';
import { VedacaoOuParticipacaoDeProfissionaisOrganizadosEmCooperativa } from './pages/VedacaoOuParticipacaoDeProfissionaisOrganizadosEmCooperativa';
import { ParticipacaoOuVedaçãoDePessoasFisicasNaLicitacao } from './pages/ParticipacaoOuVedaçãoDePessoasFisicasNaLicitacao';
import { DaExecucaoDosServicos } from './pages/DaExecucaoDosServicos';
import { IndicacaoDeMarcasOuModelos } from './pages/IndicacaoDeMarcasOuModelos';
import { DaVedacaoDeUtilizacaoDeMarcaOuProdutoNaExecucaoDoServico } from './pages/DaVedacaoDeUtilizacaoDeMarcaProdutoNaExecucaoDoServico';
import { ValorEstimadoDeContratacao } from './pages/ValorEstimadoDeContratacao';
import { ClassificacaoOrcamentariaDaDespesa } from './pages/ClassificacaoOrcamentariaDaDespesa';
import { JustificativaParaAplicacaoOuNaoDoBeneficioPrevistoLeiComplementarN123_2006 } from './pages/JustificativaParaAplicacaoOuNaoDoBeneficioPrevistoLeiComplementarN123_2006';
import { ModalidadeDeLicitacaoCriterioDeJulgamentoRegimeDeExecucaoEModoDeDisputa } from './pages/ModalidadeDeLicitacaoCriterioDeJulgamentoRegimeDeExecucaoEModoDeDisputa';
import { Proposta } from './pages/Proposta';
import { RequisitosEspecificosDeHabilitacao } from './pages/RequisitosEspecificosDeHabilitacao';
import { DoRegistroDePrecos } from './pages/DoRegistroDePrecos';
import { PrevisaoEJustificativaDaPossibilidadeDeAdesaoPorOrgaosEEntidadesNaoParticipantesECondicoesDeAdesao } from './pages/PrevisaoEJustificativaDaPossibilidadeDeAdesaoPorOrgaosEEntidadesNaoParticipantesECondicoesDeAdesao';
import { ObrigacoesEResponsabilidadesDaGerenciadoraDaATA } from './pages/ObrigacoesEResponsabilidadesDaGerenciadoraDaATA';
import { ObrigaçõesEResponsabilidadesDaDentetoraDaATA } from './pages/ObrigaçõesEResponsabilidadesDaDentetoraDaATA';
import { DoContrato } from './pages/DoContrato';

// Criando o roteador
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // O elemento pai é o nosso Layout com o menu
    children: [ // Aqui definimos as rotas aninhadas (filhas)
      {
        index: true, // A rota padrão para /painel
        element: <Home />,
      },
      {
        path: '/detalhamentoDoObjeto', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <PageDetalhamentoDoObjeto />,
      },
      {
        path: '/termoDeReferencia', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <TermoDeReferencia />,
      },
      {
        path: '/vedacaoOuParticipacaoDeEmpresasSobFormaDeConsorcio', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <VedacaoOuParticipacaoDeEmpresasSobFormaDeConsorcio/>,
      },
      {
        path: '/VedacaoOuParticipacaoDeProfissionaisOrganizadosEmCooperativa', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <VedacaoOuParticipacaoDeProfissionaisOrganizadosEmCooperativa/>,
      },
      {
        path: '/ParticipacaoOuVedaçãoDePessoasFisicasNaLicitacao', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <ParticipacaoOuVedaçãoDePessoasFisicasNaLicitacao/>,
      },
      {
        path: '/DaExecucaoDosServicos', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <DaExecucaoDosServicos/>,
      },
      {
        path: '/IndicacaoDeMarcasOuModelos', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <IndicacaoDeMarcasOuModelos/>,
      },
      {
        path: '/DaVedacaoDeUtilizacaoDeMarcaOuProdutoNaExecucaoDoServico', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <DaVedacaoDeUtilizacaoDeMarcaOuProdutoNaExecucaoDoServico/>,
      },
      {
        path: '/ValorEstimadoDeContratacao', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <ValorEstimadoDeContratacao/>,
      },
      {
        path: '/ClassificacaoOrcamentariaDaDespesa', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <ClassificacaoOrcamentariaDaDespesa/>,
      },
      {
        path: '/JustificativaParaAplicacaoOuNaoDoBeneficioPrevistoLeiComplementarN123_2006', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <JustificativaParaAplicacaoOuNaoDoBeneficioPrevistoLeiComplementarN123_2006/>,
      },
      {
        path: '/ModalidadeDeLicitacaoCriterioDeJulgamentoRegimeDeExecucaoEModoDeDisputa', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <ModalidadeDeLicitacaoCriterioDeJulgamentoRegimeDeExecucaoEModoDeDisputa/>,
      },
      {
        path: '/Proposta', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <Proposta/>,
      },
      {
        path: '/RequisitosEspecificosDeHabilitacao', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <RequisitosEspecificosDeHabilitacao/>,
      },
      {
        path: '/DoRegistroDePrecos', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <DoRegistroDePrecos/>,
      },
      {
        path: '/PrevisaoEJustificativaDaPossibilidadeDeAdesaoPorOrgaosEEntidadesNaoParticipantesECondicoesDeAdesao', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <PrevisaoEJustificativaDaPossibilidadeDeAdesaoPorOrgaosEEntidadesNaoParticipantesECondicoesDeAdesao/>,
      },
      {
        path: '/ObrigacoesEResponsabilidadesDaGerenciadoraDaATA', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <ObrigacoesEResponsabilidadesDaGerenciadoraDaATA/>,
      },
      {
        path: '/ObrigaçõesEResponsabilidadesDaDentetoraDaATA', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <ObrigaçõesEResponsabilidadesDaDentetoraDaATA/>,
      },
      {
        path: '/DoContrato', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <DoContrato/>,
      }
      
      
      
      
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
