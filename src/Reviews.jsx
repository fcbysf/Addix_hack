import { Star, Quote, MessageCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
    const navigate = useNavigate();

    const allReviews = [
        {
            name: "Sarah L.",
            role: "Parcours de rétablissement : 14 mois",
            content: "Addix a tout changé. L'outil de diagnostic était si précis qu'il m'a aidée à comprendre des schémas que je n'avais jamais remarqués auparavant. Le soutien de la communauté est inégalé.",
            rating: 5,
            date: "24 Oct 2023"
        },
        {
            name: "Marc D.",
            role: "Membre de soutien",
            content: "J'ai essayé beaucoup d'applications, mais celle-ci semble humaine. Elle ne juge pas ; elle guide. La feuille de route qu'elle a fournie était exactement ce dont j'avais besoin pour faire le premier pas.",
            rating: 5,
            date: "12 Nov 2023"
        },
        {
            name: "Elena G.",
            role: "Utilisatrice",
            content: "Propre, intuitif et vraiment solidaire. Le mode sombre est idéal pour les réflexions tardives. Je recommande vivement le test à tous ceux qui se sentent bloqués.",
            rating: 4,
            date: "05 Déc 2023"
        },
        {
            name: "David K.",
            role: "Mentor communautaire",
            content: "En tant que personne sobre depuis 5 ans, j'aurais aimé avoir cet outil quand j'ai commencé. La façon dont il catégorise les différentes dépendances est révolutionnaire.",
            rating: 5,
            date: "18 Jan 2024"
        },
        {
            name: "Sophie R.",
            role: "Nouveau membre",
            content: "J'étais sceptique au début, mais la page des résultats m'a apporté tellement de clarté. Ce n'est pas seulement un test ; c'est le début d'un plan.",
            rating: 5,
            date: "02 Fév 2024"
        },
        {
            name: "James T.",
            role: "Bêta-testeur",
            content: "L'interface est magnifique et l'expérience est fluide. Cela rend un sujet difficile beaucoup plus facile à aborder.",
            rating: 5,
            date: "10 Mar 2024"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <button 
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 font-black uppercase tracking-widest text-xs"
            >
                <ArrowLeft className="w-4 h-4" />
                Retour à l'accueil
            </button>

            <div className="text-center mb-20">
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">Impact Communautaire</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                    Des centaines de personnes utilisent Addix chaque jour pour comprendre leurs habitudes et commencer leur parcours de rétablissement.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allReviews.map((review, i) => (
                    <div key={i} className="bg-card p-10 rounded-[3rem] border border-border shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full group">
                        <div className="flex justify-between items-start mb-8">
                            <Quote className="w-10 h-10 text-primary/20 group-hover:text-primary/40 transition-colors" />
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-50">{review.date}</span>
                        </div>
                        
                        <p className="text-lg font-medium text-foreground/90 leading-relaxed italic mb-8 flex-grow">
                            "{review.content}"
                        </p>
                        
                        <div className="pt-8 border-t border-border/50 flex items-center justify-between">
                            <div>
                                <h4 className="font-black text-sm uppercase tracking-tight">{review.name}</h4>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1 opacity-70">{review.role}</p>
                            </div>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className={`w-3 h-3 ${j < review.rating ? 'fill-primary text-primary' : 'fill-muted text-muted'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 bg-muted/30 rounded-[4rem] p-12 md:p-20 text-center border border-border">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-8" />
                <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Vous souhaitez partager votre histoire ?</h2>
                <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-medium uppercase tracking-widest text-sm opacity-70">
                    Votre expérience pourrait être l'inspiration dont quelqu'un d'autre a besoin pour commencer son parcours.
                </p>
                <button className="px-12 py-5 bg-primary text-white text-sm font-black rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all uppercase tracking-widest">
                    Envoyer un avis
                </button>
            </div>
        </div>
    );
};

export default Reviews;
