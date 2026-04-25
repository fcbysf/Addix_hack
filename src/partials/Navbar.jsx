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
                    {user ? (
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <button 
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="flex items-center gap-2.5 p-1 pr-4 hover:bg-muted rounded-full transition-all border border-border/50 group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black text-xs uppercase shadow-md group-hover:scale-110 transition-transform">
                                        {user.first_name?.[0]}{user.last_name?.[0]}
                                    </div>
                                    <div className="flex flex-col items-start leading-none hidden sm:flex">
                                        <span className="text-[10px] font-black text-foreground uppercase tracking-wider">{user.first_name}</span>
                                        <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5 opacity-60">{user.role}</span>
                                    </div>
                                    <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isMenuOpen && (
                                    <>
                                        <div className="fixed inset-0 z-[-1]" onClick={() => setIsMenuOpen(false)}></div>
                                        <div className="absolute right-0 mt-4 w-64 bg-card/95 backdrop-blur-xl border border-border rounded-3xl shadow-2xl p-2 animate-in fade-in slide-in-from-top-4 duration-300">
                                            <div className="px-4 py-4 border-b border-border/50 mb-2">
                                                <p className="text-sm font-black truncate text-foreground">{user.first_name} {user.last_name}</p>
                                                <p className="text-[10px] text-muted-foreground truncate uppercase tracking-widest mt-0.5 opacity-70">{user.email}</p>
                                            </div>
                                            
                                            <div className="grid gap-1">
                                                <Link to="/profile" className="flex items-center gap-3 px-4 py-2.5 text-[10px] font-black text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-2xl transition-all uppercase tracking-widest">
                                                    <Settings className="w-4 h-4" />
                                                    Paramètres du Profil
                                                </Link>
                                                <Link to="/orders" className="flex items-center gap-3 px-4 py-2.5 text-[10px] font-black text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-2xl transition-all uppercase tracking-widest">
                                                    <Package className="w-4 h-4" />
                                                    Mes Demandes
                                                </Link>
                                                
                                                {user.role === 'admin' && (
                                                    <Link to="/admin" className="flex items-center gap-3 px-4 py-2.5 text-[10px] font-black text-primary bg-primary/5 border border-primary/10 rounded-2xl transition-all uppercase tracking-widest mt-1">
                                                        <Monitor className="w-4 h-4" />
                                                        Panneau d'administration
                                                    </Link>
                                                )}
                                            </div>
                                            
                                            <div className="h-px bg-border my-2 mx-2 opacity-50"></div>
                                            
                                            <button 
                                                onClick={handleLogout}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 text-[10px] font-black text-red-500 hover:bg-red-500 hover:text-white rounded-2xl transition-all uppercase tracking-widest"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Se déconnecter
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 ml-2">
                            <Link to="/login" className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 hover:text-primary transition-colors">Connexion</Link>
                            <Link to="/register" className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 shadow-md">Commencer</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
