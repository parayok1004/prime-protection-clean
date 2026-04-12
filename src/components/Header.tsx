import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Startseite" },
  { to: "/security", label: "Security" },
  { to: "/reinigung", label: "Reinigung" },
  { to: "/ueber-mich", label: "Über mich" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Prime Protection Service" className="h-10 w-auto brightness-0 invert" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${location.pathname === item.to ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-b border-border px-6 pb-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${location.pathname === item.to ? "nav-link-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
