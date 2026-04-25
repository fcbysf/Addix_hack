import { Link, useNavigate } from "react-router-dom";
import { Monitor, User as UserIcon, LogOut, Package, Settings, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const [user, setUser] = useState({
        first_name: "Jean",
        last_name: "Dupont",
        email: "jean@example.com",
        role: "admin"
    });

    const handleLogout = () => {
        setUser(null);
        navigate('/');
    };

    return (
        <div className="fixed left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-[100] transition-all duration-300 top-6">
            <div className="bg-card/90 backdrop-blur-xl border border-border rounded-full px-6 py-2 flex items-center justify-between shadow-2xl ring-1 ring-primary/5">
                <div className="flex items-center gap-8">
                    <Link to="/" className="font-black text-2xl tracking-tighter text-primary flex items-center gap-2 hover:scale-105 transition-all uppercase group">
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Addix</span>
                    </Link>
                    
                    <nav className="hidden md:flex items-center gap-6 text-[10px] font-black tracking-[0.2em] text-muted-foreground uppercase">
                        <Link to="/" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">Accueil</Link>
                        {user && <Link to="/requests" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">Demandes</Link>}
                        <Link to="/community" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">Communauté</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-2">
                
                        <div className="flex items-center gap-2 ml-2">
                            <Link to="/" className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 hover:text-primary transition-colors">Connexion</Link>
                            <Link to="/quiz" className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 shadow-md">Commencer</Link>
                        </div>
               
                </div>
            </div>
        </div>
    );
}
