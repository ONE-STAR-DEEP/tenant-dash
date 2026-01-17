'use client';
import { createContext, useContext, useState } from 'react';

type Role = 'Admin' | 'Agent';

const RoleContext = createContext<{
  role: Role;
  setRole: (r: Role) => void;
} | null>(null);

export const RoleProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<Role>('Admin');

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used inside RoleProvider');
  return ctx;
};
