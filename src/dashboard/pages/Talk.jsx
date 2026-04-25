import { useState } from "react";
import {
  MessageCircle, Pencil, Mic, ChevronRight,
  Send, Clock, Sparkles, BookOpen
} from "lucide-react";
import {
  moodOptions, guidedPrompts, moodHistory, journalEntries
} from "../mockData";

import { getQuizResult, categoryData } from "../../lib/userStore";

const MoodSelector = ({ selected, onSelect }) => (
  <div className="mood-selector">
    {moodOptions.map((mood) => (
      <button
        key={mood.value}
        className={`mood-btn ${selected === mood.value ? "active" : ""}`}
        onClick={() => onSelect(mood.value)}
        style={{
          "--mood-color": mood.color,
          borderColor: selected === mood.value ? mood.color : "transparent",
          background: selected === mood.value ? `${mood.color}15` : "transparent",
        }}
      >
        <span className="mood-emoji">{mood.emoji}</span>
        <span className="mood-label">{mood.label}</span>
      </button>
    ))}
  </div>
);

export default function Talk() {
  const quizResult = getQuizResult();
  const categoryInfo = quizResult?.primary ? categoryData[quizResult.primary[0]] : null;
  const [selectedMood, setSelectedMood] = useState(null);
  const [feeling, setFeeling] = useState("");
  const [activeTab, setActiveTab] = useState("checkin");
  const [journalText, setJournalText] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [checkedIn, setCheckedIn] = useState(false);

  const displayPrompts = categoryInfo 
    ? [categoryInfo.journalPrompt, ...guidedPrompts]
    : guidedPrompts;

  const handleCheckIn = () => {
    if (selectedMood) {
      setCheckedIn(true);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-text">
          <h1>Parler {categoryInfo ? `(${quizResult.primary[0]})` : ""}</h1>
          <p>Exprimez-vous librement. Vos sentiments sont valables et importants.</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="talk-tabs">
        <button
          className={`talk-tab ${activeTab === "checkin" ? "active" : ""}`}
          onClick={() => setActiveTab("checkin")}
        >
          <MessageCircle size={16} />
          Check-in Quotidien
        </button>
        <button
          className={`talk-tab ${activeTab === "journal" ? "active" : ""}`}
          onClick={() => setActiveTab("journal")}
        >
          <Pencil size={16} />
          Journal
        </button>
        <button
          className={`talk-tab ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          <Clock size={16} />
          Historique d'Humeur
        </button>
      </div>

      {/* Daily Check-in Tab */}
      {activeTab === "checkin" && (
        <div className="talk-content fade-in">
          {!checkedIn ? (
            <>
              <div className="checkin-card">
                <h2>Comment vous sentez-vous aujourd'hui ?</h2>
                <p className="checkin-subtitle">Sélectionnez l'humeur qui décrit le mieux ce que vous ressentez maintenant</p>
                <MoodSelector selected={selectedMood} onSelect={setSelectedMood} />

                <div className="feeling-input-group">
                  <label>Envie d'en dire plus ? (facultatif)</label>
                  <textarea
                    className="feeling-input"
                    placeholder="Comment vous sentez-vous aujourd'hui ? Qu'avez-vous à l'esprit..."
                    value={feeling}
                    onChange={(e) => setFeeling(e.target.value)}
                    rows={3}
                  />
                </div>

                <button
                  className="checkin-submit"
                  onClick={handleCheckIn}
                  disabled={!selectedMood}
                >
                  <Send size={16} />
                  Envoyer le Check-in
                </button>
              </div>

              {/* Guided Prompts */}
              <div className="prompts-section">
                <h3>
                  <Sparkles size={18} />
                  Suggestions Guidées {categoryInfo ? "pour vous" : ""}
                </h3>
                <p className="prompts-desc">Besoin d'aide pour commencer ? Essayez l'une de celles-ci :</p>
                <div className="prompts-list">
                  {displayPrompts.map((prompt, i) => (
                    <button
                      key={i}
                      className={`prompt-card ${selectedPrompt === i ? "active" : ""}`}
                      style={i === 0 && categoryInfo ? { border: '1px solid var(--primary)', background: 'var(--primary-light)' } : {}}
                      onClick={() => {
                        setSelectedPrompt(i);
                        setFeeling(prompt);
                      }}
                    >
                      <ChevronRight size={14} />
                      <span>{prompt}</span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="checkin-success fade-in">
              <div className="success-icon">✅</div>
              <h2>Check-in enregistré !</h2>
              <p>
                Vous vous sentez{" "}
                <strong>{moodOptions.find((m) => m.value === selectedMood)?.label}</strong>{" "}
                {moodOptions.find((m) => m.value === selectedMood)?.emoji} aujourd'hui
              </p>
              <p className="success-sub">Continuez à suivre vos émotions — la conscience est la première étape du changement.</p>
              <button
                className="checkin-submit secondary"
                onClick={() => {
                  setCheckedIn(false);
                  setSelectedMood(null);
                  setFeeling("");
                }}
              >
                Enregistrer une autre humeur
              </button>
            </div>
          )}
        </div>
      )}

      {/* Journal Tab */}
      {activeTab === "journal" && (
        <div className="talk-content fade-in">
          <div className="journal-write-card">
            <h2>
              <BookOpen size={20} />
              Écrire dans votre journal
            </h2>
            <textarea
              className="journal-textarea"
              placeholder="Qu'avez-vous à l'esprit ? Écrivez librement — c'est votre espace sécurisé..."
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              rows={6}
            />
            <div className="journal-actions">
              <button className="voice-note-btn">
                <Mic size={16} />
                Note Vocale
              </button>
              <button className="journal-save-btn" disabled={!journalText.trim()}>
                <Send size={16} />
                Enregistrer l'Entrée
              </button>
            </div>
          </div>

          <div className="journal-entries">
            <h3>Entrées Récentes</h3>
            {journalEntries.map((entry) => (
              <div key={entry.id} className="journal-entry-card">
                <div className="journal-entry-header">
                  <span className="journal-entry-mood">{entry.mood}</span>
                  <h4>{entry.title}</h4>
                  <span className="journal-entry-date">{entry.date}</span>
                </div>
                <p>{entry.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mood History Tab */}
      {activeTab === "history" && (
        <div className="talk-content fade-in">
          <div className="mood-history-section">
            <h2>Votre Chronologie d'Humeur</h2>
            <p className="mood-history-desc">Suivez l'évolution de votre bien-être émotionnel au fil du temps</p>
            <div className="mood-timeline">
              {moodHistory.map((entry, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot-wrapper">
                    <div
                      className="timeline-dot"
                      style={{
                        background: moodOptions.find((m) => m.value === entry.mood)?.color || "#a1a1aa",
                      }}
                    >
                      {entry.emoji}
                    </div>
                    {i < moodHistory.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-date">{entry.date}</span>
                      <span
                        className="timeline-mood-badge"
                        style={{
                          background: `${moodOptions.find((m) => m.value === entry.mood)?.color || "#a1a1aa"}18`,
                          color: moodOptions.find((m) => m.value === entry.mood)?.color || "#a1a1aa",
                        }}
                      >
                        {moodOptions.find((m) => m.value === entry.mood)?.label}
                      </span>
                    </div>
                    <p className="timeline-note">{entry.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
