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
      <div className="bg-[#0F172A] w-full max-w-md rounded-2xl border border-cyber/20 shadow-xl relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-cyber hover:text-cyber-muted transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-cyber/10 rounded-lg flex items-center justify-center border border-cyber/20 rotate-45">
              <div className="w-8 h-8 bg-cyber/20 rounded-sm -rotate-45" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center text-cyber mb-2 font-mono">Access Terminal</h2>
          <p className="text-center text-cyber/70 mb-8 font-mono text-sm">Initialize authentication sequence</p>
          
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#06B6D4',
                    brandAccent: '#0891B2',
                    brandButtonText: 'white',
                    defaultButtonBackground: '#0E7490',
                    defaultButtonBackgroundHover: '#0891B2',
                    inputBackground: '#1E293B',
                    inputText: '#06B6D4',
                    inputPlaceholder: '#0891B2',
                    inputBorder: '#06B6D4',
                    inputBorderHover: '#0891B2',
                    inputBorderFocus: '#0891B2',
                  },
                  borderWidths: {
                    buttonBorderWidth: '1px',
                    inputBorderWidth: '1px',
                  },
                  radii: {
                    borderRadiusButton: '8px',
                    buttonBorderRadius: '8px',
                    inputBorderRadius: '8px',
                  },
                },
              },
              className: {
                container: 'auth-container',
                button: 'font-mono uppercase tracking-wider text-sm hover:animate-glow',
                input: 'font-mono',
                label: 'font-mono text-cyber',
                anchor: 'text-cyber hover:text-cyber-muted',
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