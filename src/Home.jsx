import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, ChevronDown, ChevronUp, Quote, CheckCircle2, MessageCircle } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors group"
      >
        <span className="text-lg font-bold tracking-tight">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 animate-in slide-in-from-top-2 duration-300">
          <p className="text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Sarah L.",
      role: "Parcours de rétablissement : 14 mois",
      content: "Addix a tout changé. L'outil de diagnostic était si précis qu'il m'a aidée à comprendre des schémas que je n'avais jamais remarqués auparavant. Le soutien de la communauté est inégalé.",
      rating: 5
    },
    {
      name: "Marc D.",
      role: "Membre de soutien",
      content: "J'ai essayé beaucoup d'applications, mais celle-ci semble humaine. Elle ne juge pas ; elle guide. La feuille de route qu'elle a fournie était exactement ce dont j'avais besoin pour faire le premier pas.",
      rating: 5
    },
    {
      name: "Elena G.",
      role: "Utilisatrice",
      content: "Propre, intuitif et vraiment solidaire. Le mode sombre est idéal pour les réflexions tardives. Je recommande vivement le test à tous ceux qui se sentent bloqués.",
      rating: 4
    }
  ];

  const faqs = [
    {
      question: "Mes données sont-elles privées et anonymes ?",
      answer: "Absolument. Nous accordons une priorité absolue à votre vie privée. Vos résultats de diagnostic et vos réflexions personnelles sont cryptés et ne sont jamais partagés avec des tiers. Vous pouvez rester complètement anonyme."
    },
    {
      question: "Comment fonctionne l'outil de diagnostic ?",
      answer: "Notre outil utilise des schémas comportementaux fondés sur des données probantes pour identifier les dépendances potentielles. Il analyse vos habitudes, vos déclencheurs et vos réponses émotionnelles pour vous fournir une feuille de route de rétablissement personnalisée."
    },
    {
      question: "Puis-je utiliser Addix en complément d'une thérapie professionnelle ?",
      answer: "Oui, Addix est conçu pour compléter l'aide professionnelle. Beaucoup de nos utilisateurs partagent leurs feuilles de route avec leurs thérapeutes pour faciliter des conversations plus approfondies."
    },
    {
      question: "Y a-t-il un coût pour rejoindre la communauté ?",
      answer: "Nous proposons un niveau gratuit qui comprend l'outil de diagnostic et un accès de base à la communauté. Des fonctionnalités premium comme des feuilles de route avancées et des groupes de soutien dédiés sont disponibles avec un abonnement."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-6 overflow-hidden">
        {/* Stickers */}
        <div className="absolute top-20 left-[10%] w-32 h-32 opacity-20 lg:opacity-100 hover:opacity-100 transition-opacity duration-500 animate-in zoom-in spin-in-12 duration-1000 hidden lg:block animate-float">
            <img src="/stop.png" alt="" className="w-full h-full object-contain -rotate-12 hover:rotate-0 transition-transform duration-500 cursor-grab active:scale-95" />
        </div>
        <div className="absolute bottom-20 right-[15%] w-40 h-40 opacity-20 lg:opacity-100 hover:opacity-100 transition-opacity duration-500 animate-in zoom-in -spin-in-12 duration-1000 hidden lg:block animate-float" style={{ animationDuration: '8s' }}>
            <img src="/stop2.png" alt="" className="w-full h-full object-contain rotate-12 hover:rotate-0 transition-transform duration-500 cursor-grab active:scale-95" />
        </div>
        <div className="absolute top-1/3 right-[10%] w-24 h-24 opacity-20 lg:opacity-100 hover:opacity-100 transition-opacity duration-500 animate-in zoom-in spin-in-6 duration-1000 hidden lg:block animate-float" style={{ animationDuration: '5s' }}>
            <img src="/stop3.png" alt="" className="w-full h-full object-contain rotate-6 hover:rotate-0 transition-transform duration-500 cursor-grab active:scale-95" />
        </div>
        <div className="absolute bottom-10 left-[12%] w-36 h-36 opacity-20 lg:opacity-100 hover:opacity-100 transition-opacity duration-500 animate-in zoom-in -spin-in-6 duration-1000 hidden lg:block animate-float" style={{ animationDuration: '7s' }}>
            <img src="/stop4.png" alt="" className="w-full h-full object-contain -rotate-6 hover:rotate-0 transition-transform duration-500 cursor-grab active:scale-95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CheckCircle2 className="w-4 h-4" />
            Accompagner votre parcours de rétablissement
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
            Libérez-vous du <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">cycle</span>.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Comprenez vos schémas, trouvez votre communauté et reprenez votre vie en main grâce à nos outils de diagnostic scientifiquement prouvés.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/quiz")}
              className="px-10 py-4 bg-primary text-white text-sm font-black rounded-full hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all uppercase tracking-widest w-full sm:w-auto"
            >
              Démarrer le test de diagnostic
            </button>
            <button
                className="px-10 py-4 bg-card border border-border text-sm font-black rounded-full hover:bg-muted transition-all uppercase tracking-widest w-full sm:w-auto"
            >
                En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase">Voix de la Communauté</h2>
            <p className="text-muted-foreground font-medium text-lg uppercase tracking-widest opacity-60">Des histoires réelles de personnes qui reprennent leur vie en main</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card p-8 rounded-[2.5rem] border border-border shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                <Quote className="w-10 h-10 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors" />
                <p className="text-lg italic text-foreground/90 mb-8 flex-grow leading-relaxed">"{t.content}"</p>
                <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-tight">{t.name}</h4>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1 opacity-70">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button 
                onClick={() => navigate("/reviews")}
                className="text-sm font-black uppercase tracking-widest text-primary hover:opacity-80 flex items-center gap-2 mx-auto transition-all group"
            >
                <MessageCircle className="w-4 h-4" />
                Lire tous les avis
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase">Questions Fréquentes</h2>
          <p className="text-muted-foreground font-medium text-lg uppercase tracking-widest opacity-60">Tout ce que vous devez savoir sur Addix</p>
        </div>
        
        <div className="bg-card border border-border rounded-[3rem] p-8 md:p-12 shadow-2xl">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight relative z-10">Prêt à commencer votre <br />nouveau chapitre ?</h2>
            <button 
                onClick={() => navigate("/quiz")}
                className="relative z-10 px-12 py-5 bg-white text-primary text-sm font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl uppercase tracking-widest"
            >
                Démarrer mon évaluation
            </button>
        </div>
      </section>
    </div>
  );
};

export default Home;