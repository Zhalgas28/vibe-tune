"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

import { Database } from "@/types_db";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface ISupabaseProviderProps {
  children: React.ReactNode
}

const SupabaseProvider: React.FC<ISupabaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() => 
    createClientComponentClient<Database>()
  )
  
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  )
};

export default SupabaseProvider;
