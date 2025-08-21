import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar';

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-5">
        
        <Outlet /> 
      </main>
    </div>
  );
}