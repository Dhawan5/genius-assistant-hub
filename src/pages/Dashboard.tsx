import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/');
      }
    };
    
    checkAuth();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p>Welcome to your AI assistant dashboard!</p>
      <button 
        onClick={() => supabase.auth.signOut()}
        className="mt-4 px-4 py-2 bg-accent rounded hover:bg-accent/90"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;