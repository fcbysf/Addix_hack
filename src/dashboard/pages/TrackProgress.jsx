import { useState } from "react";
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import {
  Flame, RotateCcw, Clock, DollarSign, TrendingUp,
  Brain, Lightbulb, ChevronRight, Trophy
} from "lucide-react";
import {
  progressStats, streakData, cravingData,
  moodRelapseData, smartInsights, personalizedTips
} from "../mockData";
import { getQuizResult, categoryData } from "../../lib/userStore";

const StatCard = ({ icon: Icon, label, value, sub, color, bg }) => (
  <div className="stat-card" style={{ "--accent": color, "--accent-bg": bg }}>
    <div className="stat-card-icon" style={{ background: bg, color: color }}>
      <Icon size={20} />
    </div>
    <div className="stat-card-info">
      <span className="stat-card-value">{value}</span>
      <span className="stat-card-label">{label}</span>
      {sub && <span className="stat-card-sub">{sub}</span>}
    </div>
  </div>
);

const InsightCard = ({ insight }) => (
  <div className={`insight-card insight-${insight.type}`}>
    <span className="insight-icon">{insight.icon}</span>
    <div className="insight-content">
      <h4>{insight.title}</h4>
      <p>{insight.text}</p>
    </div>
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="chart-tooltip-label">{label}</p>
        {payload.map((item, i) => (
          <p key={i} style={{ color: item.color }}>
            {item.name}: <strong>{item.value}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function TrackProgress() {
  const [activeChart, setActiveChart] = useState("streak");
  const quizResult = getQuizResult();
  
  const categoryInfo = quizResult?.primary ? categoryData[quizResult.primary[0]] : null;

  // Add personalized insight if available
  const displayInsights = categoryInfo 
    ? [{ icon: "🎯", title: "Analyse Personnalisée", text: categoryInfo.insight, type: "positive" }, ...smartInsights]
    : smartInsights;

  const displayTips = categoryInfo
    ? [categoryInfo.tip, ...personalizedTips]
    : personalizedTips;

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-text">
          <h1>Tableau de Bord {categoryInfo ? `: ${quizResult.primary[0].charAt(0).toUpperCase() + quizResult.primary[0].slice(1)}` : ""}</h1>
          <p>
            {categoryInfo 
              ? `Analyse de votre progression spécifique pour l'addiction : ${quizResult.primary[0]}.`
              : "Suivez votre parcours de rétablissement et célébrez chaque étape."}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <StatCard
          icon={Flame}
          label="Jours de Série"
          value={progressStats.daysStreak}
          sub="Série actuelle"
          color="#f97316"
          bg="rgba(249,115,22,0.1)"
        />
        <StatCard
          icon={RotateCcw}
          label="Rechutes"
          value={progressStats.relapseCount}
          sub="Total ce parcours"
          color="#ef4444"
          bg="rgba(239,68,68,0.1)"
        />
        <StatCard
          icon={Clock}
          label={categoryInfo?.statLabel || "Temps Sauvé"}
          value={`${progressStats.timeSavedHours}${categoryInfo?.unit === 'h' ? 'h' : ''}`}
          sub={categoryInfo?.savingsLabel || "Productivité gagnée"}
          color="#3b82f6"
          bg="rgba(59,130,246,0.1)"
        />
        <StatCard
          icon={DollarSign}
          label={categoryInfo?.savingsLabel || "Argent Sauvé"}
          value={`${progressStats.moneySaved}${categoryInfo?.unit === '€' ? '€' : '$'}`}
          sub="Économies estimées"
          color="#10b981"
          bg="rgba(16,185,129,0.1)"
        />
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="charts-header">
          <h2>
            <TrendingUp size={20} />
            Analyses
          </h2>
          <div className="chart-tabs">
            <button
              className={`chart-tab ${activeChart === "streak" ? "active" : ""}`}
              onClick={() => setActiveChart("streak")}
            >
              Série
            </button>
            <button
              className={`chart-tab ${activeChart === "cravings" ? "active" : ""}`}
              onClick={() => setActiveChart("cravings")}
            >
              Envies
            </button>
            <button
              className={`chart-tab ${activeChart === "mood" ? "active" : ""}`}
              onClick={() => setActiveChart("mood")}
            >
              Humeur vs Rechute
            </button>
          </div>
        </div>

        <div className="chart-container">
          {activeChart === "streak" && (
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={streakData}>
                <defs>
                  <linearGradient id="streakGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: "var(--muted-text)" }} />
                <YAxis tick={{ fontSize: 12, fill: "var(--muted-text)" }} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone" dataKey="streak" name="Jours de Série"
                  stroke="#3b82f6" fill="url(#streakGrad)" strokeWidth={2.5}
                  dot={{ r: 4, fill: "#3b82f6" }}
                  activeDot={{ r: 6, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          )}

          {activeChart === "cravings" && (
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={cravingData} barSize={32}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: "var(--muted-text)" }} />
                <YAxis tick={{ fontSize: 12, fill: "var(--muted-text)" }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="cravings" name="Envies" fill="#f97316" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}

          {activeChart === "mood" && (
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={moodRelapseData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: "var(--muted-text)" }} />
                <YAxis tick={{ fontSize: 12, fill: "var(--muted-text)" }} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone" dataKey="mood" name="Score d'Humeur"
                  stroke="#10b981" strokeWidth={2.5}
                  dot={{ r: 4, fill: "#10b981" }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone" dataKey="relapse" name="Rechutes"
                  stroke="#ef4444" strokeWidth={2.5} strokeDasharray="5 5"
                  dot={{ r: 4, fill: "#ef4444" }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Smart Insights */}
      <div className="insights-section">
        <h2>
          <Brain size={20} />
          Analyses Intelligentes
        </h2>
        <div className="insights-list">
          {displayInsights.map((insight, i) => (
            <InsightCard key={i} insight={insight} />
          ))}
        </div>
      </div>

      {/* Personalized Tips */}
      <div className="tips-section">
        <h2>
          <Lightbulb size={20} />
          Suggestions Personnalisées
        </h2>
        <div className="tips-list">
          {displayTips.map((tip, i) => (
            <div key={i} className="tip-card">
              <ChevronRight size={16} className="tip-icon" />
              <p>{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
