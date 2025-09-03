"use client";
import { useState } from 'react';
import Sidebar from './GlobalComp/Sidebar';
import ProfileMenu from './GlobalComp/ProfileMenu';


export default function LangLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeRoute, setActiveRoute] = useState('Main');
  const [activeSubRoute, setActiveSubRoute] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar}
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
        activeSubRoute={activeSubRoute}
        setActiveSubRoute={setActiveSubRoute}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button 
                onClick={toggleSidebar}
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="ml-4 text-xl font-semibold text-gray-800">Dashboard</h1>
            </div>
            
            {/* Profile Menu */}
            <ProfileMenu />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}