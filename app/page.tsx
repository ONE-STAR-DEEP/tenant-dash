'use client';

import CallLog from "@/components/callLog";
import LeadsList from "@/components/leadsList";
import { useRole } from "@/components/RoleContext";
import { useState } from "react";

export default function Home() {

  const [selected, setSelected] = useState('leads');
  const { role, setRole } = useRole();

  return (
    <main className="min-h-screen w-full flex flex-col p-8">
      <header className="my-4 space-y-4">
        <h1 className="text-4xl font-bold text-gray-700">Multi Tenant Sales Dashboard</h1>
        <p className="text-lg text-gray-500">A unified platform to monitor leads and sales interactions across organizations.</p>
      </header>

      <section className="mx-auto w-full p-4 max-w-6xl mt-10 rounded-2xl border-2 border-gray-200 h-full bg-white">
        <nav className="flex items-center justify-between border-b-2">
          <div className="flex">
            <div className={`${selected === 'leads' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'} py-4 px-8 text-lg font-semibold cursor-pointer hover:text-blue-500 hover:border-blue-500`}
              onClick={() => setSelected('leads')}>
              Leads list
            </div>
            <div className={`${selected === 'call' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'} py-4 px-8 text-lg font-semibold cursor-pointer hover:text-blue-500 hover:border-blue-500`}
              onClick={() => setSelected('call')}>
              Call logs
            </div>
          </div>
          <div className={`mr-10 border-2 rounded-lg px-4 py-1 text-xs font-semibold ${role === 'Admin' ? 'bg-green-100' : 'bg-blue-100'} hover:cursor-pointer`} onClick={()=>{setRole(role === 'Admin' ? 'Agent' : 'Admin')}}>Role: {role}</div>
        </nav>

        {selected === 'leads' ? <LeadsList /> : <CallLog />}                
      </section>
    </main>

  );
}
