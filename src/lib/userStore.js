export const saveQuizResult = (result) => {
    localStorage.setItem('addix_quiz_result', JSON.stringify(result));
};

export const getQuizResult = () => {
    const result = localStorage.getItem('addix_quiz_result');
    return result ? JSON.parse(result) : null;
};

export const clearQuizResult = () => {
    localStorage.removeItem('addix_quiz_result');
};

export const categoryData = {
    social: {
        insight: "Votre usage des réseaux sociaux augmente significativement le soir.",
        tip: "Désactivez les notifications après 20h pour réduire l'envie de scroller.",
        recoveryTask: "Limiter l'écran à 1h/jour",
        unit: "h",
        statLabel: "Temps d'écran réduit",
        savingsLabel: "Productivité gagnée",
        journalPrompt: "Qu'avez-vous ressenti aujourd'hui en étant déconnecté plus longtemps ?"
    },
    gaming: {
        insight: "Le jeu vidéo est devenu votre principal mécanisme d'évasion face au stress.",
        tip: "Remplacez la première heure de jeu par une activité physique intense.",
        recoveryTask: "Désinstaller un jeu compétitif",
        unit: "h",
        statLabel: "Heures hors-jeu",
        savingsLabel: "Sommeil récupéré",
        journalPrompt: "Quelle émotion avez-vous essayé d'apaiser aujourd'hui sans les jeux ?"
    },
    smoking: {
        insight: "Vos déclencheurs sont fortement liés aux moments de pause et au café.",
        tip: "Essayez de boire du thé vert à la place du café pendant une semaine.",
        recoveryTask: "Utiliser un substitut nicotinique",
        unit: "€",
        statLabel: "Argent économisé",
        savingsLabel: "Santé pulmonaire",
        journalPrompt: "Quel a été votre déclencheur le plus fort aujourd'hui et comment l'avez-vous géré ?"
    },
    alcohol: {
        insight: "Les environnements sociaux festifs représentent votre plus grand risque.",
        tip: "Prévoyez toujours une boisson non-alcoolisée que vous aimez avant d'arriver.",
        recoveryTask: "Assister à une réunion de soutien",
        unit: "€",
        statLabel: "Budget économisé",
        savingsLabel: "Clarté mentale",
        journalPrompt: "Dans quelle situation sociale vous êtes-vous senti le plus fier de vous aujourd'hui ?"
    },
    food: {
        insight: "L'alimentation émotionnelle survient surtout lors de moments de solitude.",
        tip: "Préparez des snacks sains à l'avance pour éviter les choix impulsifs.",
        recoveryTask: "Planifier ses repas 24h à l'avance",
        unit: "kcal",
        statLabel: "Apport régulé",
        savingsLabel: "Énergie vitale",
        journalPrompt: "Étiez-vous vraiment affamé aujourd'hui ou était-ce une faim émotionnelle ?"
    },
    drugs: {
        insight: "Le stress professionnel semble être votre déclencheur majeur.",
        tip: "Pratiquez la cohérence cardiaque 3 fois par jour pour réguler votre système nerveux.",
        recoveryTask: "Consulter un addictologue",
        unit: "€",
        statLabel: "Économies santé",
        savingsLabel: "Stabilité émotionnelle",
        journalPrompt: "Comment avez-vous géré votre stress professionnel aujourd'hui ?"
    },
    porn: {
        insight: "L'accès facile via mobile est votre principale source de rechute.",
        tip: "Utilisez un bloqueur de contenu et ne prenez pas votre téléphone dans la chambre.",
        recoveryTask: "Activer le contrôle parental",
        unit: "h",
        statLabel: "Temps libéré",
        savingsLabel: "Concentration retrouvée",
        journalPrompt: "Quelles activités constructives avez-vous faites avec le temps que vous avez libéré ?"
    }
};
