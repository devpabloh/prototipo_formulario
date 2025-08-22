import { NavLink } from 'react-router-dom';

export default function Sidebar() {

  const baseLinkClasses = "block w-full text-left py-2 px-3 rounded-md no-underline transition-all duration-200";
  
  const activeLinkClasses = "bg-blue-700 text-white font-bold shadow-md";
  
  const inactiveLinkClasses = "text-blue-900 hover:bg-blue-400 hover:text-white";

  return (
    // O seu container de navegação já está com um fundo azul claro
    <nav className="sidebar h-screen w-[250px] bg-blue-300 p-5 shadow-lg overflow-y-auto overflow-x-hidden">
      <h2 className="text-center text-xl font-bold text-blue-900 mb-8">Menu</h2>
      <ul className="space-y-2">
        <li>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/detalhamentoDoObjeto"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Detalhamento do Objeto
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/termoDeReferencia"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Termo de Referência
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/VedacaoOuParticipacaoDeEmpresasSobFormaDeConsorcio"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            2.5 Vedação ou Participação De Empresas Sob Consorcio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/VedacaoOuParticipacaoDeProfissionaisOrganizadosEmCooperativa"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            2.6 Vedação ou Participação de Profissionais Organizados em Cooperativa
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ParticipacaoOuVedaçãoDePessoasFisicasNaLicitacao"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            2.7 participação ou vedação de pessoas físicas na licitação
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/DaExecucaoDosServicos"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            3.2 Da execução dos serviços
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/IndicacaoDeMarcasOuModelos"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            3.3 Indicação de marcas ou modelos (se for o caso)
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/DaVedacaoDeUtilizacaoDeMarcaOuProdutoNaExecucaoDoServico"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            3.4 Da vedação de utilização de marca / produto na execução do serviço
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ValorEstimadoDeContratacao"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            4.1 Valor estimado de contratação
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ClassificacaoOrcamentariaDaDespesa"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            4.2 Classificação orçamentária da despesa
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/JustificativaParaAplicacaoOuNaoDoBeneficioPrevistoLeiComplementarN123_2006"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            4.3 Justificativa para aplicação ou não do benefício previsto na Lei complementar nº 123/2006
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ModalidadeDeLicitacaoCriterioDeJulgamentoRegimeDeExecucaoEModoDeDisputa"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            5.1 Modalidade de licitação, critério de julgamento, regime de execução e modo de disputa
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Proposta"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            5.2 Proposta
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/RequisitosEspecificosDeHabilitacao"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            5.3 Requisitos específicos de habilitação
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/DoRegistroDePrecos"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            6 Do registro de preços
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/PrevisaoEJustificativaDaPossibilidadeDeAdesaoPorOrgaosEEntidadesNaoParticipantesECondicoesDeAdesao"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            6.7 Previsão e justificativa da possibilidade de adesão por orgãos e entidades não participantes e condições de adesão
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ObrigacoesEResponsabilidadesDaGerenciadoraDaATA"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            6.9 Obrigações e responsabilidades da gerenciadora da ATA
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ObrigaçõesEResponsabilidadesDaDentetoraDaATA"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            6.10 Obrigações e responsabilidades da dentetora da ATA
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/DoContrato"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            7 Do contrato
          </NavLink>
        </li>
        
        <hr className="my-4 border-blue-400" />
        
        <li>
          <NavLink 
            to="/"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Sair
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
}