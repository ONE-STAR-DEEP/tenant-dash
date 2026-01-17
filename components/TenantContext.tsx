'use client'
// context/TenantContext.tsx
import { createContext, useContext, useState } from 'react';

export type Tenant = 'A' | 'B';

const TenantContext = createContext<{
  tenant: Tenant;
  setTenant: (t: Tenant) => void;
} | null>(null);

export const TenantProvider = ({ children }: { children: React.ReactNode }) => {
  const [tenant, setTenant] = useState<Tenant>('A');

  return (
    <TenantContext.Provider value={{ tenant, setTenant }}>
      {children}
    </TenantContext.Provider>
  );
};

export const useTenant = () => {
  const ctx = useContext(TenantContext);
  if (!ctx) throw new Error('useTenant must be used inside TenantProvider');
  return ctx;
};
