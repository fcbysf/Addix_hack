import { NavLink, Outlet } from "react-router-dom";
import {
  MessageCircle, Stethoscope, Brain, Menu, X, ShieldAlert
} from "lucide-react";
import { useState } from "react";
import DotGrid from "../components/DotGrid";
import "./dashboard.css";
import "./pages.css";

const navItems = [
  { to: "/dashboard", icon: Brain, label: "Ma Journée" },
  { to: "/dashboard/talk", icon: MessageCircle, label: "Journal" },
  { to: "/dashboard/doctors", icon: Stethoscope, label: "Aide Pro" },
  { to: "/dashboard/recovery", icon: ShieldAlert, label: "SOS Outils" },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background DotGrid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <DotGrid
          dotSize={6}
          gap={35}
          baseColor="#e0e0e0"
          activeColor="#462C7D"
          proximity={200}
          shockRadius={300}
          shockStrength={4}
          resistance={600}
          returnDuration={1.2}
        />
      </div>
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <NavLink to="/" className="sidebar-logo">
            <span className="logo-text">Addix</span>
          </NavLink>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-user-avatar">JD</div>
            <div className="sidebar-user-info">
              <span className="sidebar-user-name">John Doe</span>
              <span className="sidebar-user-status">Série de 47 jours 🔥</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="mobile-header">
        <button className="mobile-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <span className="mobile-logo">Addix</span>
        <div className="mobile-avatar">JD</div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="mobile-sidebar-overlay" onClick={() => setSidebarOpen(false)}>
          <aside className="mobile-sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="sidebar-brand">
              <span className="logo-text">Addix</span>
            </div>
            <nav className="sidebar-nav">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? "active" : ""}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="dashboard-main">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="bottom-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `bottom-nav-link ${isActive ? "active" : ""}`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
