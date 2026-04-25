import React from 'react';
import { 
  Footprints, Dumbbell, Droplets, Wind, Edit3, Music,
  Smartphone, Cigarette, Moon, Pizza, Frown,
  Smile, SmilePlus, Meh, Frown as Sad, Angry, HeartPulse, Activity
} from "lucide-react";

// ============================================================
// DONNÉES DE SUIVI DES PROGRÈS (TRACK PROGRESS)
// ============================================================

export const progressStats = {
  daysStreak: 47,
  totalCleanDays: 62,
  relapseCount: 3,
  timeSavedHours: 186,
  moneySaved: 423,
  longestStreak: 47,
};

export const streakData = [
  { day: "S1", streak: 5 },
  { day: "S2", streak: 12 },
  { day: "S3", streak: 8 },
  { day: "S4", streak: 18 },
  { day: "S5", streak: 25 },
  { day: "S6", streak: 22 },
  { day: "S7", streak: 33 },
  { day: "S8", streak: 40 },
  { day: "S9", streak: 47 },
];

export const cravingData = [
  { day: "Lun", cravings: 8 },
  { day: "Mar", cravings: 6 },
  { day: "Mer", cravings: 9 },
  { day: "Jeu", cravings: 4 },
  { day: "Ven", cravings: 7 },
  { day: "Sam", cravings: 5 },
  { day: "Dim", cravings: 3 },
];

export const moodRelapseData = [
  { day: "S1", mood: 3, relapse: 2 },
  { day: "S2", mood: 5, relapse: 1 },
  { day: "S3", mood: 4, relapse: 2 },
  { day: "S4", mood: 6, relapse: 0 },
  { day: "S5", mood: 7, relapse: 1 },
  { day: "S6", mood: 5, relapse: 0 },
  { day: "S7", mood: 8, relapse: 0 },
  { day: "S8", mood: 7, relapse: 0 },
  { day: "S9", mood: 9, relapse: 0 },
];

export const smartInsights = [
  {
    icon: "⚠️",
    title: "Période à risque détectée",
    text: "Votre période à risque se situe entre 22:00 et 01:00. Restez vigilant pendant ces heures.",
    type: "warning",
  },
  {
    icon: "📝",
    title: "Le journalisme aide",
    text: "Vous vous améliorez lorsque vous écrivez quotidiennement. Vous avez eu 40% d'envies en moins les jours de journalisme.",
    type: "positive",
  },
  {
    icon: "😰",
    title: "Corrélation avec le stress",
    text: "Le stress multiplie par 3 votre probabilité de rechute. Essayez les exercices de respiration.",
    type: "warning",
  },
];

export const personalizedTips = [
  "Essayez d'éviter les déclencheurs après 21h — vos données montrent une plus grande vulnérabilité.",
  "L'activité physique en soirée a réduit vos envies de 60%.",
  "Se connecter avec votre groupe de soutien le mercredi donne les meilleurs résultats.",
  "La qualité de votre sommeil s'améliore les jours sans écran après 22h.",
];

// ============================================================
// DONNÉES DE LA PAGE DE DISCUSSION (TALK PAGE)
// ============================================================

export const moodOptions = [
  { emoji: React.createElement(Smile, { size: 24 }), label: "Heureux", value: "happy", color: "#4ade80" },
  { emoji: React.createElement(SmilePlus, { size: 24 }), label: "Calme", value: "calm", color: "#60a5fa" },
  { emoji: React.createElement(Meh, { size: 24 }), label: "Neutre", value: "neutral", color: "#a1a1aa" },
  { emoji: React.createElement(Activity, { size: 24 }), label: "Anxieux", value: "anxious", color: "#fbbf24" },
  { emoji: React.createElement(HeartPulse, { size: 24 }), label: "Stressé", value: "stressed", color: "#f97316" },
  { emoji: React.createElement(Sad, { size: 24 }), label: "Triste", value: "sad", color: "#818cf8" },
  { emoji: React.createElement(Angry, { size: 24 }), label: "En colère", value: "angry", color: "#ef4444" },
  { emoji: React.createElement(Activity, { size: 24 }), label: "Souffrant", value: "unwell", color: "#94a3b8" },
];

export const guidedPrompts = [
  "Qu'est-ce qui a déclenché vos envies aujourd'hui ?",
  "Qu'est-ce qui vous a aidé à rester fort ?",
  "Que voulez-vous améliorer demain ?",
  "Décrivez une chose pour laquelle vous êtes reconnaissant aujourd'hui.",
  "Quel a été le moment le plus difficile aujourd'hui et comment l'avez-vous géré ?",
];

export const moodHistory = [
  { date: "25 avr.", mood: "happy", emoji: React.createElement(Smile, { size: 18 }), note: "Je me suis senti fort aujourd'hui, j'ai fait une longue marche." },
  { date: "24 avr.", mood: "calm", emoji: React.createElement(SmilePlus, { size: 18 }), note: "J'ai médité le matin, bonne journée dans l'ensemble." },
  { date: "23 avr.", mood: "anxious", emoji: React.createElement(Activity, { size: 18 }), note: "J'ai eu quelques envies mais j'ai utilisé les exercices de respiration." },
  { date: "22 avr.", mood: "happy", emoji: React.createElement(Smile, { size: 18 }), note: "Super séance d'entraînement, je me suis senti accompli." },
  { date: "21 avr.", mood: "stressed", emoji: React.createElement(HeartPulse, { size: 18 }), note: "Le travail a été dur mais je suis resté concentré." },
  { date: "20 avr.", mood: "neutral", emoji: React.createElement(Meh, { size: 18 }), note: "Journée calme, rien de spécial." },
  { date: "19 avr.", mood: "calm", emoji: React.createElement(SmilePlus, { size: 18 }), note: "J'ai passé du temps avec ma famille, je me suis senti soutenu." },
  { date: "18 avr.", mood: "sad", emoji: React.createElement(Sad, { size: 18 }), note: "Soirée difficile mais j'ai demandé de l'aide." },
  { date: "17 avr.", mood: "happy", emoji: React.createElement(Smile, { size: 18 }), note: "J'ai terminé ma première semaine d'étape !" },
  { date: "16 avr.", mood: "anxious", emoji: React.createElement(Activity, { size: 18 }), note: "Nuit difficile mais le journalisme a beaucoup aidé." },
];

export const journalEntries = [
  {
    id: 1,
    date: "25 avr. 2026",
    title: "Une bonne journée",
    content: "Aujourd'hui a été vraiment positif. Je suis allé faire une marche matinale et j'ai senti l'air frais m'éclaircir l'esprit. Les envies sont apparues vers 15h mais j'ai fait les exercices de respiration et elles sont passées.",
    mood: React.createElement(Smile, { size: 20 }),
  },
  {
    id: 2,
    date: "23 avr. 2026",
    title: "Soirée difficile",
    content: "La soirée a été dure. J'ai ressenti l'attraction mais j'ai appelé mon partenaire de responsabilité à la place. Nous avons parlé pendant 30 minutes et l'envie est passée complètement.",
    mood: React.createElement(Activity, { size: 20 }),
  },
  {
    id: 3,
    date: "21 avr. 2026",
    title: "Stress au travail",
    content: "Le travail a été accablant aujourd'hui. J'ai remarqué que mes anciens schémas essayaient de refaire surface. Au lieu de cela, j'ai pris une pause de 10 minutes et j'ai fait des pompes. Ça a vraiment marché.",
    mood: React.createElement(HeartPulse, { size: 20 }),
  },
];

// ============================================================
// DONNÉES DE LA PAGE DES MÉDECINS (DOCTORS PAGE)
// ============================================================

export const doctors = [
  {
    id: 1,
    name: "Dr Sarah Chen",
    specialty: "Psychiatre spécialisée en addictions",
    bio: "Spécialisée dans les addictions comportementales et le traitement des doubles diagnostics avec plus de 15 ans d'expérience clinique.",
    experience: "15 ans",
    rating: 4.9,
    reviews: 128,
    avatar: "SC",
    color: "#6366f1",
    available: true,
    languages: ["Anglais", "Français"],
    nextAvailable: "Aujourd'hui, 15:00",
  },
  {
    id: 2,
    name: "Dr Ahmed Benali",
    specialty: "Psychologue clinicien",
    bio: "Expert en thérapie cognitivo-comportementale pour l'abus de substances et la récupération après une addiction numérique.",
    experience: "12 ans",
    rating: 4.8,
    reviews: 95,
    avatar: "AB",
    color: "#0ea5e9",
    available: true,
    languages: ["Français", "Arabe", "Anglais"],
    nextAvailable: "Demain, 10:00",
  },
  {
    id: 3,
    name: "Dr Maria Rodriguez",
    specialty: "Conseillère en addictions",
    bio: "Passionnée par l'aide aux jeunes adultes pour surmonter les addictions numériques et de substances par des approches holistiques.",
    experience: "8 ans",
    rating: 4.7,
    reviews: 67,
    avatar: "MR",
    color: "#10b981",
    available: false,
    languages: ["Espagnol", "Anglais"],
    nextAvailable: "28 avr., 09:00",
  },
  {
    id: 4,
    name: "Dr Jean-Pierre Moreau",
    specialty: "Neuropsychiatre",
    bio: "Psychiatre axé sur la recherche, spécialisé dans les neurosciences de l'addiction et les protocoles de traitement fondés sur des preuves.",
    experience: "20 ans",
    rating: 4.9,
    reviews: 203,
    avatar: "JM",
    color: "#8b5cf6",
    available: true,
    languages: ["Français", "Anglais"],
    nextAvailable: "Aujourd'hui, 17:00",
  },
  {
    id: 5,
    name: "Dr Fatima Zahra",
    specialty: "Thérapeute comportementale",
    bio: "Utilise des approches basées sur la pleine conscience et l'entretien motivationnel pour soutenir une récupération durable.",
    experience: "10 ans",
    rating: 4.6,
    reviews: 54,
    avatar: "FZ",
    color: "#ec4899",
    available: true,
    languages: ["Arabe", "Français", "Anglais"],
    nextAvailable: "Aujourd'hui, 16:30",
  },
  {
    id: 6,
    name: "Dr Thomas Weber",
    specialty: "Spécialiste de l'abus de substances",
    bio: "Se concentre sur le traitement assisté par médicaments et les programmes de récupération personnalisés pour les cas complexes.",
    experience: "18 ans",
    rating: 4.8,
    reviews: 142,
    avatar: "TW",
    color: "#f59e0b",
    available: false,
    languages: ["Allemand", "Anglais", "Français"],
    nextAvailable: "29 avr., 11:00",
  },
];

export const doctorReviews = [
  { author: "Anonyme", rating: 5, text: "Le Dr Chen a changé ma vie. Son approche est compatissante et efficace.", date: "Il y a 2 semaines" },
  { author: "M.K.", rating: 5, text: "J'ai enfin trouvé quelqu'un qui comprend vraiment l'addiction numérique. Je recommande vivement.", date: "Il y a 1 mois" },
  { author: "Anonyme", rating: 4, text: "Excellente écoute, conseils pratiques. Les séances m'ont vraiment aidé à construire des habitudes saines.", date: "Il y a 3 semaines" },
  { author: "S.T.", rating: 5, text: "Professionnel et gentil. M'a fait me sentir en sécurité pour m'ouvrir sur mes difficultés.", date: "Il y a 1 mois" },
];

// ============================================================
// DONNÉES DU SYSTÈME DE RÉCUPÉRATION (RECOVERY SYSTEM)
// ============================================================

export const distractionTasks = [
  { icon: React.createElement(Footprints, { size: 20 }), label: "Faire une marche de 5 min", duration: "5 min" },
  { icon: React.createElement(Dumbbell, { size: 20 }), label: "Faire 20 pompes", duration: "3 min" },
  { icon: React.createElement(Droplets, { size: 20 }), label: "Boire un grand verre d'eau", duration: "1 min" },
  { icon: React.createElement(Wind, { size: 20 }), label: "Minuteur de respiration", duration: "3 min" },
  { icon: React.createElement(Edit3, { size: 20 }), label: "Écrire 3 gratitudes", duration: "2 min" },
  { icon: React.createElement(Music, { size: 20 }), label: "Écouter une chanson calme", duration: "4 min" },
];

export const dailyMicroGoals = [
  { id: 1, text: "Compléter le check-in matinal", completed: true },
  { id: 2, text: "Pratiquer 5 min de pleine conscience", completed: true },
  { id: 3, text: "Enregistrer vos repas aujourd'hui", completed: false },
  { id: 4, text: "Faire une marche de 15 min dehors", completed: false },
  { id: 5, text: "Écrire dans votre journal avant de dormir", completed: false },
  { id: 6, text: "Contacter votre personne de soutien", completed: false },
];

export const habitReplacements = [
  {
    trigger: "Envie de scroller",
    replacement: "Faire une marche de 5 minutes dehors",
    icon: React.createElement(Smartphone, { size: 20 }),
    replaceIcon: React.createElement(Footprints, { size: 20 }),
  },
  {
    trigger: "Envie de fumer",
    replacement: "Faire un exercice de respiration (4-7-8)",
    icon: React.createElement(Cigarette, { size: 20 }),
    replaceIcon: React.createElement(Wind, { size: 20 }),
  },
  {
    trigger: "Envie tardive",
    replacement: "Boire une camomille et lire 10 pages",
    icon: React.createElement(Moon, { size: 20 }),
    replaceIcon: React.createElement(Edit3, { size: 20 }),
  },
  {
    trigger: "Alimentation émotionnelle",
    replacement: "Faire 15 pompes ou un étirement rapide",
    icon: React.createElement(Pizza, { size: 20 }),
    replaceIcon: React.createElement(Dumbbell, { size: 20 }),
  },
  {
    trigger: "Déclencheur d'ennui",
    replacement: "Appeler un ami ou écrire 5 min",
    icon: React.createElement(Frown, { size: 20 }),
    replaceIcon: React.createElement(Edit3, { size: 20 }),
  },
];

export const smartAlerts = [
  {
    type: "risk",
    title: "Période à haut risque proche",
    message: "Il est presque 22h — votre fenêtre de vulnérabilité. Pensez à décompresser.",
    time: "21:45",
  },
  {
    type: "reminder",
    title: "Rappel du journal du soir",
    message: "Vous n'avez pas écrit aujourd'hui. Le journalisme réduit l'intensité de vos envies de 40%.",
    time: "20:00",
  },
  {
    type: "positive",
    title: "Étape de série !",
    message: "Vous approchez des 50 jours de sobriété. Continuez ainsi, vous êtes incroyable !",
    time: "Maintenant",
  },
];

export const exposureReductions = [
  "Supprimez les applications de réseaux sociaux de votre écran d'accueil",
  "Fixez des limites de temps d'écran à 30 min/jour",
  "Évitez d'être seul avec votre téléphone après 21h",
  "Ne suivez plus les comptes et contenus déclencheurs",
  "Laissez votre téléphone dans une autre pièce pendant votre sommeil",
];
