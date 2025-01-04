import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        onClose();
        navigate('/dashboard');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0F172A] w-full max-w-md rounded-lg border border-accent/20 shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <img src="/lovable-uploads/13f02a91-501a-4f0f-bace-f1616f107ed5.png" alt="Access Terminal" className="w-16 h-16" />
          </div>
          <h2 className="text-2xl font-bold text-center text-accent mb-2">Access Terminal</h2>
          <p className="text-center text-gray-400 mb-6">Initialize authentication sequence</p>
          
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#06B6D4',
                    brandAccent: '#0891B2',
                    inputBackground: '#1E293B',
                    inputText: '#fff',
                    inputPlaceholder: '#94A3B8',
                    inputBorder: '#06B6D4',
                    inputBorderHover: '#0891B2',
                    inputBorderFocus: '#0891B2',
                  },
                },
              },
              className: {
                container: 'auth-container',
                button: 'auth-button',
                input: 'auth-input',
              },
            }}
            providers={['github', 'google']}
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};