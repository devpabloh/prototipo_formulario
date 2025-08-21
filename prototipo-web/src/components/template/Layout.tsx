import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar';

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-5 overflow-auto">
        
        <Outlet /> 
      </main>
    </div>
  );
}