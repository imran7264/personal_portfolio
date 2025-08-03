import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Skills", href: "#skill", id: "skill" },
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#project", id: "project" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    document.body.className = darkMode
      ? "text-white dark-mode"
      : "text-black light-mode";
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <nav
        className={`navbar navbar-expand-md shadow-lg border-bottom border-2 border-opacity-75 border-success fs-6 position-fixed w-100 top-0 start-0 z-1 ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
        id="nav-scroll"
      >
        <div className="container-fluid">
          <a className="navbar-brand linear-text fw-bold fs-3" href="#home">
            S I
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-underline d-flex align-items-center justify-content-center">
              {navLinks.map((link) => (
                <li key={link.id} className="nav-item">
                  <a
                    className={`nav-link ${
                      activeLink === link.id ? "active" : ""
                    }`}
                    onClick={() => setActiveLink(link.id)}
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-5 mx-5 d-none d-md-block">
          <button
            className="btn border-primary btn-md fs-5"
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Theme"
          >
            {darkMode ? (
              <FaSun className="text-warning fs-4" />
            ) : (
              <FaMoon className="text-dark fs-4" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
