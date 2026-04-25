import { Link } from "react-router-dom";
import { Monitor, Mail, Phone, MapPin, Send, Share2, Code, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="font-black text-2xl tracking-tighter text-foreground flex items-center gap-2 uppercase mb-6">
                            <Monitor className="w-8 h-8 text-primary" />
                            <span>Addix</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium">
                            Accompagner chaque personne dans son parcours de rétablissement. Notre plateforme fournit les outils, la communauté et le soutien nécessaires pour surmonter l'addiction et reprendre sa vie en main.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 group">
                                <Send className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 group">
                                <Share2 className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 group">
                                <Code className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest text-foreground mb-6">Ressources</h3>
                        <ul className="space-y-4">
                            <li><Link to="/dashboard" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Tableau de bord</Link></li>
                            <li><Link to="/requests" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Demandes de soutien</Link></li>
                            <li><Link to="/community" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Forum communautaire</Link></li>
                            <li><Link to="/reviews" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Histoires de succès</Link></li>
                            <li><Link to="/blog" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Blog de rétablissement</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest text-foreground mb-6">Aide & Soutien</h3>
                        <ul className="space-y-4">
                            <li><Link to="/contact" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Contactez-nous</Link></li>
                            <li><Link to="/#faq" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">FAQs</Link></li>
                            <li><Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Politique de confidentialité</Link></li>
                            <li><Link to="/terms" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Conditions d'utilisation</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest text-foreground mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm font-bold">123 Recovery Way, Wellness City, WC 45678</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm font-bold">+1 (555) 000-RECOVERY</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm font-bold">support@addix.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest opacity-60">
                        © {new Date().getFullYear()} ADDIX SOLUTIONS. TOUS DROITS RÉSERVÉS.
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-widest opacity-80">
                        <span>Fait avec</span>
                        <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                        <span>pour un monde meilleur</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
