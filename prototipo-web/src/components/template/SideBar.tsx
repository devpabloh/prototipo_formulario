import { NavLink } from 'react-router-dom';

export default function Sidebar() {

  const baseLinkClasses = "block w-full text-left py-2 px-3 rounded-md no-underline transition-all duration-200";
  
  const activeLinkClasses = "bg-blue-700 text-white font-bold shadow-md";
  
  const inactiveLinkClasses = "text-blue-900 hover:bg-blue-400 hover:text-white";

  return (
    // O seu container de navegação já está com um fundo azul claro
    <nav className="h-screen w-[250px] bg-blue-300 p-5 shadow-lg">
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
        
        <hr className="my-4 border-blue-400" />
        
        <li>
          <NavLink 
            to="/sair"
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