import { useState } from 'react';
import './Quiz.css';

const questions = [
  "À quoi passes-tu le plus de temps chaque jour ?",
  "Qu’est-ce que tu fais le plus quand tu t’ennuies ?",
  "Qu’est-ce qui est le plus difficile à arrêter pendant 24 heures ?",
  "Qu’est-ce qui affecte le plus ton sommeil ?",
  "Qu’est-ce que tu utilises quand tu es stressé(e) ?",
  "Où perds-tu le plus de temps ?",
  "Qu’est-ce que tu fais sans réfléchir, automatiquement ?",
  "Qu’est-ce qui te provoque les plus fortes envies (cravings) ?",
  "Qu’est-ce qui te fait ressentir du regret après l’avoir fait ?",
  "Qu’est-ce qui serait le plus difficile à arrêter maintenant ?"
];

// Each question has its own indirect, behavior-based answers that map to a category
const questionOptions = [
  // Q1 – À quoi passes-tu le plus de temps chaque jour ?
  [
    { id: 'social',  label: "Je scrolle sans vraiment m'en rendre compte" },
    { id: 'gaming',  label: "Je joue pour me vider la tête" },
    { id: 'porn',    label: "Je regarde du contenu pour me stimuler seul(e)" },
    { id: 'smoking', label: "Je fume ou vapote régulièrement tout au long de la journée" },
    { id: 'alcohol', label: "Je bois pour décompresser ou passer le temps" },
    { id: 'food',    label: "Je mange ou grignote même sans avoir faim" },
    { id: 'drugs',   label: "Je consomme quelque chose pour me sentir normal(e)" },
  ],
  // Q2 – Qu'est-ce que tu fais le plus quand tu t'ennuies ?
  [
    { id: 'social',  label: "Je check mes notifs et like des posts sans but précis" },
    { id: 'gaming',  label: "Je lance une partie rapide qui finit par durer des heures" },
    { id: 'porn',    label: "Je tombe sur des contenus intimes et j'y reste" },
    { id: 'smoking', label: "J'allume une cigarette ou j'attrape ma vape" },
    { id: 'alcohol', label: "Je me sers un verre juste pour occuper le temps" },
    { id: 'food',    label: "Je vais fouiller dans le frigo ou les placards" },
    { id: 'drugs',   label: "Je prends quelque chose pour rendre le moment plus supportable" },
  ],
  // Q3 – Qu'est-ce qui est le plus difficile à arrêter pendant 24 heures ?
  [
    { id: 'social',  label: "Rester sans consulter mon téléphone ou mes applis" },
    { id: 'gaming',  label: "M'empêcher de me connecter pour jouer" },
    { id: 'porn',    label: "Éviter ce type de contenu toute une journée" },
    { id: 'smoking', label: "Ne pas fumer ou vapoter ne serait-ce qu'une heure de plus" },
    { id: 'alcohol', label: "Passer une soirée complète sans prendre de verre" },
    { id: 'food',    label: "Résister à l'envie de grignoter entre les repas" },
    { id: 'drugs',   label: "Rester sobre sans rien prendre pour compenser" },
  ],
  // Q4 – Qu'est-ce qui affecte le plus ton sommeil ?
  [
    { id: 'social',  label: "Je reste sur mon téléphone jusqu'à très tard le soir" },
    { id: 'gaming',  label: "Je finis toujours une dernière partie avant de dormir" },
    { id: 'porn',    label: "Je regarde des contenus intimes avant de me coucher" },
    { id: 'smoking', label: "L'envie de fumer me réveille ou m'empêche de dormir" },
    { id: 'alcohol', label: "Je bois pour m'endormir mais je me réveille épuisé(e)" },
    { id: 'food',    label: "Je mange tard le soir ou je me lève pour grignoter" },
    { id: 'drugs',   label: "Ce que je consomme perturbe mes nuits" },
  ],
  // Q5 – Qu'est-ce que tu utilises quand tu es stressé(e) ?
  [
    { id: 'social',  label: "Je scroll pour me changer les idées et oublier" },
    { id: 'gaming',  label: "Je me connecte pour fuir la pression dans le jeu" },
    { id: 'porn',    label: "Je cherche une sensation forte pour évacuer la tension" },
    { id: 'smoking', label: "J'ai besoin d'une cigarette ou d'une bouffée pour me calmer" },
    { id: 'alcohol', label: "Je prends un verre pour me détendre rapidement" },
    { id: 'food',    label: "Je mange pour me réconforter quand ça ne va pas" },
    { id: 'drugs',   label: "Je consomme pour éteindre la pression ou l'anxiété" },
  ],
  // Q6 – Où perds-tu le plus de temps ?
  [
    { id: 'social',  label: "À regarder des vidéos ou des stories en boucle" },
    { id: 'gaming',  label: "Dans des sessions de jeu qui durent bien plus que prévu" },
    { id: 'porn',    label: "À chercher et regarder des contenus pour adultes" },
    { id: 'smoking', label: "Dans des pauses cigarettes/vape répétées tout au long du jour" },
    { id: 'alcohol', label: "Dans des soirées ou des moments autour d'un verre" },
    { id: 'food',    label: "À grignoter ou à penser à ce que je vais manger ensuite" },
    { id: 'drugs',   label: "À chercher, consommer ou récupérer de ce que je prends" },
  ],
  // Q7 – Qu'est-ce que tu fais sans réfléchir, automatiquement ?
  [
    { id: 'social',  label: "J'ouvre une appli sans même avoir décidé de le faire" },
    { id: 'gaming',  label: "Je lance le jeu par réflexe dès que j'ai un moment libre" },
    { id: 'porn',    label: "Je me retrouve à regarder ce type de contenu sans l'avoir prévu" },
    { id: 'smoking', label: "J'attrape ma cigarette ou ma vape machinalement" },
    { id: 'alcohol', label: "Je me sers à boire sans vraiment y penser" },
    { id: 'food',    label: "Je mange ou picore sans m'en apercevoir" },
    { id: 'drugs',   label: "Je consomme par habitude, presque sans y réfléchir" },
  ],
  // Q8 – Qu'est-ce qui te provoque les plus fortes envies (cravings) ?
  [
    { id: 'social',  label: "Voir une notification ou ne pas savoir ce qui se passe en ligne" },
    { id: 'gaming',  label: "Entendre parler d'un jeu ou voir d'autres jouer" },
    { id: 'porn',    label: "Me retrouver seul(e) avec mon téléphone ou mon ordi" },
    { id: 'smoking', label: "Sentir une odeur de tabac ou voir quelqu'un fumer" },
    { id: 'alcohol', label: "Une atmosphère festive ou simplement une journée difficile" },
    { id: 'food',    label: "Voir de la nourriture ou sentir une bonne odeur" },
    { id: 'drugs',   label: "Un certain groupe, endroit ou moment de la journée" },
  ],
  // Q9 – Qu'est-ce qui te fait ressentir du regret après l'avoir fait ?
  [
    { id: 'social',  label: "Avoir passé des heures sur mon téléphone sans rien produire" },
    { id: 'gaming',  label: "Avoir joué jusqu'à 3h du mat et raté ma journée" },
    { id: 'porn',    label: "Me sentir vide ou honteux(se) après avoir regardé ce contenu" },
    { id: 'smoking', label: "Avoir encore cédé alors que je voulais arrêter" },
    { id: 'alcohol', label: "M'être comporté(e) différemment ou avoir trop bu" },
    { id: 'food',    label: "Avoir mangé sans raison et me sentir mal ensuite" },
    { id: 'drugs',   label: "La descente, la honte ou les conséquences du lendemain" },
  ],
  // Q10 – Qu'est-ce qui serait le plus difficile à arrêter maintenant ?
  [
    { id: 'social',  label: "Supprimer mes applis et ne plus consulter mon feed" },
    { id: 'gaming',  label: "Désinstaller tous mes jeux et arrêter complètement" },
    { id: 'porn',    label: "Bloquer tout accès à ce type de contenu définitivement" },
    { id: 'smoking', label: "Ne plus jamais toucher une cigarette ou une vape" },
    { id: 'alcohol', label: "Être sobre en toutes circonstances, même en soirée" },
    { id: 'food',    label: "Ne manger que par vraie faim, sans jamais craquer" },
    { id: 'drugs',   label: "Arrêter totalement de consommer quoi que ce soit" },
  ],
];

const resultExplanations = {
  social: "Les réseaux sociaux sont conçus pour capter ton attention et t'y retenir. Il est important de fixer des limites de temps et de se déconnecter pour retrouver un équilibre.",
  gaming: "Le jeu vidéo stimule fortement la dopamine et peut devenir un refuge. Pense à intégrer d'autres activités et loisirs hors écran dans ta routine quotidienne.",
  porn: "La pornographie peut altérer ta perception de la réalité, de l'intimité et impacter tes relations. Des ressources et professionnels existent pour t'aider à t'en libérer.",
  smoking: "La nicotine crée une forte dépendance physique et psychologique. Réduire progressivement et se faire accompagner augmente considérablement les chances d'arrêter.",
  alcohol: "L'alcool est souvent utilisé comme béquille pour gérer le stress, mais c'est un dépresseur. Cherche des alternatives plus saines pour te détendre et faire face aux défis.",
  food: "L'alimentation émotionnelle est courante mais nocive. Essaye d'identifier tes déclencheurs et de différencier la vraie faim de l'envie de manger liée au stress ou à l'ennui.",
  drugs: "L'usage de substances a un impact majeur et rapide sur ta santé physique et mentale. N'hésite surtout pas à demander de l'aide rapidement à un professionnel de santé."
};

const resultTitles = {
  social: "Addiction aux Réseaux Sociaux",
  gaming: "Addiction aux Jeux Vidéo",
  porn: "Addiction à la Pornographie",
  smoking: "Addiction au Tabac / Vapotage",
  alcohol: "Addiction à l'Alcool",
  food: "Addiction Alimentaire",
  drugs: "Addiction aux Substances"
};

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({
        social: 0, gaming: 0, porn: 0, smoking: 0, alcohol: 0, food: 0, drugs: 0
    });
    const [isFinished, setIsFinished] = useState(false);
    const [transitioning, setTransitioning] = useState(false);

    const handleAnswer = (categoryId) => {
        setScores(prev => ({ ...prev, [categoryId]: prev[categoryId] + 1 }));
        
        setTransitioning(true);
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(prev => prev + 1);
            } else {
                setIsFinished(true);
            }
            setTransitioning(false);
        }, 300); // match css transition duration
    };

    const handleBack = () => {
        if (currentQuestion > 0 && !transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentQuestion(prev => prev - 1);
                setTransitioning(false);
            }, 300);
        }
    };

    const getResults = () => {
        const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const primary = sorted[0];
        const secondary = sorted[1];
        
        return {
            primary: primary,
            // Show secondary if it has a score and is close to primary (e.g. difference <= 2)
            secondary: (secondary[1] > 0 && primary[1] - secondary[1] <= 2) ? secondary : null
        };
    };

    if (isFinished) {
        const { primary, secondary } = getResults();
        
        return (
            <div className="quiz-container result-screen fade-in">
                <div className="result-header">
                    <h2>🧠 Résultat du Test</h2>
                    <p>Voici l'analyse personnalisée de tes réponses</p>
                </div>
                
                <div className="result-card primary-result">
                    <h3>Addiction Principale Détectée</h3>
                    <div className="result-title">{resultTitles[primary[0]]}</div>
                    <p className="result-explanation">{resultExplanations[primary[0]]}</p>
                </div>

                {secondary && (
                    <div className="result-card secondary-result">
                        <h3>Addiction Secondaire (Score Proche)</h3>
                        <div className="result-title">{resultTitles[secondary[0]]}</div>
                    </div>
                )}

                <button className="primary-button cta-button">
                    Commencer le plan de récupération
                </button>
                <button 
                    className="secondary-button" 
                    onClick={() => {
                        setScores({social: 0, gaming: 0, porn: 0, smoking: 0, alcohol: 0, food: 0, drugs: 0});
                        setCurrentQuestion(0);
                        setIsFinished(false);
                    }}
                >
                    Refaire le test
                </button>
            </div>
        );
    }

    const progress = ((currentQuestion) / questions.length) * 100;

    return (
        <div className="quiz-container">
            <header className="quiz-header">
                <div className="header-top">
                    {currentQuestion > 0 ? (
                        <button className="back-button" onClick={handleBack} disabled={transitioning}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7"/>
                            </svg>
                            Retour
                        </button>
                    ) : (
                        <div className="back-placeholder"></div>
                    )}
                    <span className="question-counter">Question {currentQuestion + 1} / {questions.length}</span>
                </div>
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
            </header>

            <main className={`quiz-main ${transitioning ? 'fade-out' : 'fade-in'}`}>
                <h1 className="question-text">{questions[currentQuestion]}</h1>
                
                <div className="options-container">
                    {questionOptions[currentQuestion].map((option) => (
                        <button 
                            key={option.id}
                            className="option-button"
                            onClick={() => handleAnswer(option.id)}
                            disabled={transitioning}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
}
