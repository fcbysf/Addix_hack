import { Link } from "react-router-dom";
import { Monitor, Mail, Phone, MapPin } from "lucide-react";

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
                            Empowering individuals on their journey to recovery. Our platform provides the tools, community, and support needed to overcome addiction and reclaim your life.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 group">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 group">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 group">
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest text-foreground mb-6">Resources</h3>
                        <ul className="space-y-4">
                            <li><Link to="/dashboard" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Dashboard</Link></li>
                            <li><Link to="/requests" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Support Requests</Link></li>
                            <li><Link to="/community" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Community Forum</Link></li>
                            <li><Link to="/blog" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Recovery Blog</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest text-foreground mb-6">Help & Support</h3>
                        <ul className="space-y-4">
                            <li><Link to="/contact" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Contact Us</Link></li>
                            <li><Link to="/faq" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">FAQs</Link></li>
                            <li><Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest text-foreground mb-6">Get in Touch</h3>
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
                        © {new Date().getFullYear()} ADDIX SOLUTIONS. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-widest opacity-80">
                        <span>Made with</span>
                        <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                        <span>for a better world</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
