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
            to="/ItemsDois"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Items 2.5 ao 2.7
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ItemsTres"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Items 3.2 ao 3.4
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ItemsQuatro"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Items 4.1 ao 4.3
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ItemsCinco"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Items 5.1 ao 5.3
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ItemsSeis"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Items 6 ao 6.10
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ItemsSete"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Items 7 ao 7.8
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ItemsOito"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Items 8
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ItemsDez"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Items 10.1
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ItemUltimaSecaoTermoDeReferencia"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Última seção do Termo de Referência
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/PageAnexos"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            Anexos
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