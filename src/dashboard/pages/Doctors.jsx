import { useState } from "react";
import {
  Star, Mail, Phone, Calendar, MessageCircle,
  Search, Filter, Globe, Clock, ChevronDown, ChevronUp, X
} from "lucide-react";
import { doctors, doctorReviews } from "../mockData";

const StarRating = ({ rating }) => (
  <div className="star-rating">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={14}
        className={star <= Math.round(rating) ? "star-filled" : "star-empty"}
      />
    ))}
    <span className="rating-value">{rating}</span>
  </div>
);

const DoctorCard = ({ doctor, onViewDetails }) => (
  <div className="doctor-card">
    <div className="doctor-card-top">
      <div
        className="doctor-avatar"
        style={{ background: `${doctor.color}20`, color: doctor.color }}
      >
        {doctor.avatar}
      </div>
      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <span className="doctor-specialty">{doctor.specialty}</span>
        <StarRating rating={doctor.rating} />
      </div>
      <div className={`availability-badge ${doctor.available ? "available" : "unavailable"}`}>
        <span className="avail-dot" />
        {doctor.available ? "Disponible" : "Indisponible"}
      </div>
    </div>

    <p className="doctor-bio">{doctor.bio}</p>

    <div className="doctor-meta">
      <div className="meta-item">
        <Clock size={14} />
        <span>{doctor.experience}</span>
      </div>
      <div className="meta-item">
        <Globe size={14} />
        <span>{doctor.languages.join(", ")}</span>
      </div>
      <div className="meta-item">
        <Star size={14} />
        <span>{doctor.reviews} avis</span>
      </div>
    </div>

    <div className="doctor-next-available">
      <Calendar size={14} />
      <span>Prochaine disponibilité : <strong>{doctor.nextAvailable}</strong></span>
    </div>

    <div className="doctor-actions">
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="doc-btn whatsapp">
        <MessageCircle size={15} />
        WhatsApp
      </a>
      <a href="mailto:doctor@addix.com" className="doc-btn email">
        <Mail size={15} />
        Email
      </a>
      <button className="doc-btn consult" onClick={() => onViewDetails(doctor)}>
        <Calendar size={15} />
        Réserver
      </button>
    </div>
  </div>
);

export default function Doctors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterAvailable, setFilterAvailable] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = !filterAvailable || doc.available;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-text">
          <h1>Médecins & Experts</h1>
          <p>Connectez-vous avec des professionnels certifiés qui comprennent votre parcours.</p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="search-filter-bar">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Rechercher par nom ou spécialité..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          className={`filter-btn ${filterAvailable ? "active" : ""}`}
          onClick={() => setFilterAvailable(!filterAvailable)}
        >
          <Filter size={16} />
          Disponible maintenant
        </button>
      </div>

      {/* Doctor Grid */}
      <div className="doctors-grid">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onViewDetails={setSelectedDoctor}
          />
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="empty-state">
          <p>Aucun médecin ne correspond à votre recherche. Essayez d'ajuster vos filtres.</p>
        </div>
      )}

      {/* Doctor Detail Modal */}
      {selectedDoctor && (
        <div className="modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedDoctor(null)}>
              <X size={20} />
            </button>

            <div className="modal-doctor-header">
              <div
                className="doctor-avatar large"
                style={{ background: `${selectedDoctor.color}20`, color: selectedDoctor.color }}
              >
                {selectedDoctor.avatar}
              </div>
              <div>
                <h2>{selectedDoctor.name}</h2>
                <span className="doctor-specialty">{selectedDoctor.specialty}</span>
                <StarRating rating={selectedDoctor.rating} />
              </div>
            </div>

            <p className="modal-bio">{selectedDoctor.bio}</p>

            <div className="modal-details">
              <div className="detail-row">
                <Clock size={16} /> <span>Expérience : {selectedDoctor.experience}</span>
              </div>
              <div className="detail-row">
                <Globe size={16} /> <span>Langues : {selectedDoctor.languages.join(", ")}</span>
              </div>
              <div className="detail-row">
                <Calendar size={16} /> <span>Prochaine disponibilité : {selectedDoctor.nextAvailable}</span>
              </div>
            </div>

            <div className="modal-reviews">
              <h3>Avis des patients</h3>
              {doctorReviews.map((review, i) => (
                <div key={i} className="review-card">
                  <div className="review-header">
                    <strong>{review.author}</strong>
                    <StarRating rating={review.rating} />
                    <span className="review-date">{review.date}</span>
                  </div>
                  <p>{review.text}</p>
                </div>
              ))}
            </div>

            <div className="modal-actions">
              <button className="doc-btn consult full">
                <Calendar size={16} />
                Demander une consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
