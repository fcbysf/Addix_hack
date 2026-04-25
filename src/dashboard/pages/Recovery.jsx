import { useState, useEffect, useRef } from "react";
import {
  AlertTriangle, Target, RefreshCw, Bell,
  Play, Pause, RotateCcw, Check, ChevronRight,
  Shield, Zap, X, Wind
} from "lucide-react";
import {
  distractionTasks, dailyMicroGoals, habitReplacements,
  smartAlerts, exposureReductions
} from "../mockData";
import { getQuizResult, categoryData } from "../../lib/userStore";

// ============================================================
// Composant d'exercice de respiration
// ============================================================
const BreathingExercise = ({ onClose }) => {
  const [phase, setPhase] = useState("idle"); // idle, inhale, hold, exhale
  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(false);
  const [breathPhaseTimer, setBreathPhaseTimer] = useState(0);
  const intervalRef = useRef(null);

  const breathCycle = { inhale: 4, hold: 7, exhale: 8 };

  useEffect(() => {
    if (running && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  useEffect(() => {
    if (seconds <= 0) {
      setRunning(false);
      setPhase("idle");
    }
  }, [seconds]);

  useEffect(() => {
    if (!running) return;

    let phaseTime = 0;
    const phases = ["inhale", "hold", "exhale"];
    let currentPhaseIndex = 0;

    const breathInterval = setInterval(() => {
      phaseTime++;
      const currentPhaseName = phases[currentPhaseIndex];
      setPhase(currentPhaseName);
      setBreathPhaseTimer(breathCycle[currentPhaseName] - phaseTime);

      if (phaseTime >= breathCycle[currentPhaseName]) {
        phaseTime = 0;
        currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
      }
    }, 1000);

    return () => clearInterval(breathInterval);
  }, [running]);

  const startExercise = () => {
    setRunning(true);
    setSeconds(60);
    setPhase("inhale");
  };

  const resetExercise = () => {
    setRunning(false);
    setSeconds(60);
    setPhase("idle");
  };

  const phaseLabels = {
    idle: "Prêt",
    inhale: "Inspirez",
    hold: "Maintenez",
    exhale: "Expirez"
  };

  return (
    <div className="breathing-exercise">
      <div className="breathing-header">
        <h3><Wind size={20} /> Exercice de respiration</h3>
        <button className="breathing-close" onClick={onClose}><X size={18} /></button>
      </div>

      <div className={`breathing-circle ${phase}`}>
        <div className="breathing-inner">
          {phase === "idle" ? (
            <span className="breathing-label">Prêt</span>
          ) : (
            <>
              <span className="breathing-phase">{phaseLabels[phase]}</span>
              <span className="breathing-timer">{breathPhaseTimer}s</span>
            </>
          )}
        </div>
      </div>

      <div className="breathing-countdown">
        <span>{seconds}s restants</span>
      </div>

      <div className="breathing-controls">
        {!running ? (
          <button className="breathing-btn start" onClick={startExercise}>
            <Play size={16} /> Démarrer
          </button>
        ) : (
          <button className="breathing-btn pause" onClick={() => setRunning(false)}>
            <Pause size={16} /> Pause
          </button>
        )}
        <button className="breathing-btn reset" onClick={resetExercise}>
          <RotateCcw size={16} /> Réinitialiser
        </button>
      </div>
    </div>
  );
};

// ============================================================
// Panneau d'urgence
// ============================================================
const EmergencyPanel = ({ onClose }) => {
  const [showBreathing, setShowBreathing] = useState(false);

  return (
    <div className="emergency-overlay" onClick={onClose}>
      <div className="emergency-panel" onClick={(e) => e.stopPropagation()}>
        <button className="emergency-close" onClick={onClose}><X size={20} /></button>

        <div className="emergency-header">
          <div className="emergency-icon-pulse">
            <Shield size={28} />
          </div>
          <h2>Vous n'êtes pas seul</h2>
          <p>Prenez un moment. Ces outils peuvent vous aider maintenant.</p>
        </div>

        {showBreathing ? (
          <BreathingExercise onClose={() => setShowBreathing(false)} />
        ) : (
          <>
            <button className="breathing-trigger" onClick={() => setShowBreathing(true)}>
              <Wind size={20} />
              <div>
                <strong>Exercice de respiration</strong>
                <span>Technique 4-7-8 — 60 secondes</span>
              </div>
              <ChevronRight size={16} />
            </button>

            <div className="distraction-section">
              <h3>Distractions rapides</h3>
              <div className="distraction-grid">
                {distractionTasks.map((task, i) => (
                  <button key={i} className="distraction-card">
                    <span className="distraction-icon">{task.icon}</span>
                    <span className="distraction-label">{task.label}</span>
                    <span className="distraction-duration">{task.duration}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
// ============================================================
// Page de récupération
// ============================================================
export default function Recovery() {
  const [showEmergency, setShowEmergency] = useState(false);
  const quizResult = getQuizResult();
  const categoryInfo = quizResult?.primary ? categoryData[quizResult.primary[0]] : null;

  // Add personalized goal to microgoals
  const initialGoals = categoryInfo 
    ? [{ id: 99, text: categoryInfo.recoveryTask, completed: false }, ...dailyMicroGoals]
    : dailyMicroGoals;

  const [goals, setGoals] = useState(initialGoals);
  const [expandedAlert, setExpandedAlert] = useState(null);

  const toggleGoal = (id) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, completed: !g.completed } : g))
    );
  };

  const completedGoals = goals.filter((g) => g.completed).length;
  const progressPercent = (completedGoals / goals.length) * 100;

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-text">
          <h1>Système de Récupération</h1>
          <p>Outils et stratégies actifs pour soutenir votre récupération chaque jour.</p>
        </div>
      </div>

      {/* Bouton d'urgence */}
      <button className="emergency-btn animate-float" onClick={() => setShowEmergency(true)}>
        <div className="emergency-btn-pulse" />
        <AlertTriangle size={22} />
        <div className="emergency-btn-text">
          <strong>Je ressens une envie</strong>
          <span>Obtenir une aide immédiate</span>
        </div>
      </button>

      {showEmergency && (
        <EmergencyPanel onClose={() => setShowEmergency(false)} />
      )}

      {/* Micro-objectifs quotidiens */}
      <div className="recovery-section">
        <div className="section-header">
          <h2><Target size={20} /> Micro-objectifs quotidiens</h2>
          <span className="goals-counter">{completedGoals}/{goals.length}</span>
        </div>

        <div className="goals-progress-bar">
          <div className="goals-progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>

        <div className="goals-list">
          {goals.map((goal) => (
            <button
              key={goal.id}
              className={`goal-item ${goal.completed ? "completed" : ""}`}
              onClick={() => toggleGoal(goal.id)}
            >
              <div className={`goal-check ${goal.completed ? "checked" : ""}`}>
                {goal.completed && <Check size={14} />}
              </div>
              <span>{goal.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Système de remplacement d'habitudes */}
      <div className="recovery-section">
        <div className="section-header">
          <h2><RefreshCw size={20} /> Remplacement d'habitudes</h2>
        </div>
        <p className="section-desc">Lorsqu'une envie apparaît, remplacez-la par une action plus saine.</p>

        <div className="habit-list">
          {habitReplacements.map((habit, i) => (
            <div key={i} className="habit-card">
              <div className="habit-trigger">
                <span className="habit-icon">{habit.icon}</span>
                <span>{habit.trigger}</span>
              </div>
              <div className="habit-arrow">
                <ChevronRight size={18} />
              </div>
              <div className="habit-replacement">
                <span className="habit-icon">{habit.replaceIcon}</span>
                <span>{habit.replacement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Réduire l'exposition */}
      <div className="recovery-section">
        <div className="section-header">
          <h2><Shield size={20} /> Réduire l'exposition</h2>
        </div>
        <p className="section-desc">De petits changements dans votre environnement peuvent faire une grande différence.</p>

        <div className="exposure-list">
          {exposureReductions.map((item, i) => (
            <div key={i} className="exposure-item">
              <div className="exposure-number">{i + 1}</div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Alertes intelligentes */}
      <div className="recovery-section">
        <div className="section-header">
          <h2><Bell size={20} /> Alertes Intelligentes</h2>
        </div>

        <div className="alerts-list">
          {smartAlerts.map((alert, i) => (
            <div key={i} className={`alert-card alert-${alert.type}`}>
              <div className="alert-icon-wrapper">
                {alert.type === "risk" && <AlertTriangle size={18} />}
                {alert.type === "reminder" && <Bell size={18} />}
                {alert.type === "positive" && <Zap size={18} />}
              </div>
              <div className="alert-content">
                <h4>{alert.title}</h4>
                <p>{alert.message}</p>
              </div>
              <span className="alert-time">{alert.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
