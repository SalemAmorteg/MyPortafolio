import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  CheckCircle2,
  RefreshCw,
  ArrowUpRight,
  X,
  Code2,
  FlaskConical,
  Wrench,
  ArrowDown,
  Terminal,
} from "lucide-react";

// ─────────────────────────────────────────────────────────
// DATOS EDITABLES — reemplaza estos valores con los tuyos
// ─────────────────────────────────────────────────────────
const NAME = "Salem Amortegui";
const ROLE = "Software Testing Engineer";
const EMAIL = "salemamortegui@gmail.com";
const GITHUB_URL = "https://github.com/SalemAmorteg";
const LINKEDIN_URL = "https://www.linkedin.com/in/salem-amortegui-651191171/";
const CV_URL = "/CV_Salem_Amortegui_2026_EN.pdf"; // coloca tu CV en /public y ajusta esta ruta si es necesario

const FILTERS = [
  { key: "all", label: "All" },
  { key: "manual", label: "Manual Testing" },
  { key: "api", label: "API Testing" },
  { key: "e2e", label: "E2E Automated" },
  { key: "db", label: "Data Base Validation" },
  { key: "ui", label: "UX/UI Testing" },
  { key: "performance", label: "Perfomance & Load" },
];

const PROJECTS = [
  {
    id: "bitacora",
    title: "Couples Binnacle App",
    status: "pass",
    statusLabel: "In Production",
    category: ["manual", "db", "ui"],
    categoryLabel: "Manual & UX",
    command: "$ qa --project=cookies-and-mushrooms --suite=full-e2e",
    description:
      "Interactive Neo-Brutalist web application designed for couple milestone tracking. Features asynchronous CRUD synchronization with Supabase, custom responsive UI layouts, and automated background data migration.",
    stackDev: ["React (Vite)", "Custom CSS", "Supabase (PostgreSQL)", "Vercel"],
    qaTesting: [
      "Functional & Async CRUD Validation",
      "Database & Integration Validation",
      "Automated Expiration Logic Testing",
      "UI/UX Responsive Testing",
      "Manual Testing (Mobile & Web)",
    ],
    qaTools: ["Chrome DevTools", "Postman", "Supabase Dashboard", "React Developer Tools",],
  },
  {
    id: "cleancheck",
    title: "Home Quality App",
    status: "pass",
    statusLabel: "In Production",
    category: ["manual", "db", "performance", "ui", "api"],
    categoryLabel: "API Testing",
    command: "$ qa --project=cleancheck-app --suite=e2e-and-integration",
    description:
      "Operational management and control platform built to digitize property maintenance, cleaning checklists, and real-time inventory tracking. Rigorously tested to ensure data integrity and seamless cross-device performance for remote management.",
    stackDev: ["React (Vite)", "Tailwind CSS", "Supabase (PostgreSQL)", "Vercel"],
    qaTesting: [
      "UI/UX Responsive Testing",
      "Database & Integration Validation",
      "Role-Based Access Control (RBAC)",
      "Manual Testing (Mobile & Web)",
    ],
    qaTools: ["Postman", "React Developer Tools", "Chrome DevTools"],
  },
  {
    id: "pockets",
    title: "Pockets",
    status: "running",
    statusLabel: "In Building",
    category: ["e2e", "db"],
    categoryLabel: "E2E Automatizado",
    command: "$ qa --project=pockets-budget --suite=e2e",
    description:
      "Pockets transforms every paycheck into a clear financial plan, helping users understand where every unit of money should go before it is actually spent.",
    stackDev: ["React", "Tailwind CSS"],
    qaTesting: [
      "Automatización E2E de flujos principales (balances, formularios)",
      "Pruebas de regresión",
    ],
    qaTools: ["Playwright", "Jest"],
  },
];

const SKILL_GROUPS = [
  {
    title: "QA & Automation Core",
    icon: Code2,
    items: ["Playwright", "Cypress", "Selenium", "CI/CD", "Test Case Design", "Exploratory Testing", "E2E & Regression", "Jira"],
  },
  {
    title: "API, Performance & DB",
    icon: FlaskConical,
    items: [
      "Postman (REST APIs)", "JMeter (Performance)", "SQL & Database Validation", "PostgreSQL", "Supabase",
    ],
  },
  {
    title: "Languages & Ecosystem",
    icon: Wrench,
    items: ["Java", "Python", "C#", "JavaScript", "React", "Tailwind CSS", "Git / GitHub", "Azure DevOps", "AI-Oriented"],
  },
];

function StatusBadge({ status, label }) {
  const isPass = status === "pass";
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium " +
        (isPass
          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
          : "border-indigo-400/30 bg-indigo-400/10 text-indigo-300")
      }
    >
      {isPass ? (
        <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
      ) : (
        <RefreshCw className="h-3.5 w-3.5" strokeWidth={2.5} />
      )}
      <span className="font-mono-ui">{label}</span>
    </span>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="font-mono-ui mb-3 text-sm text-emerald-400/80">{children}</p>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setSelectedProject(null);
    }
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedProject]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const visibleProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) =>
        Array.isArray(p.category)
          ? p.category.includes(activeFilter)
          : p.category === activeFilter
      );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .font-display { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .font-mono-ui { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: -0.01em; }

        * { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }

        ::selection { background-color: rgba(52, 211, 153, 0.25); color: #ecfdf5; }

        @keyframes blink-cursor {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .blink-cursor { animation: blink-cursor 1.1s step-start infinite; }

        @media (prefers-reduced-motion: reduce) {
          .blink-cursor { animation: none; }
          * { scroll-behavior: auto !important; }
        }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <button
            onClick={() => scrollTo("inicio")}
            className="font-mono-ui flex items-center gap-2 text-sm text-slate-200 hover:text-emerald-400 transition-colors"
          >
            <Terminal className="h-4 w-4 text-emerald-400" strokeWidth={2.5} />
            {NAME}
          </button>

          <nav className="hidden items-center gap-8 sm:flex">
            {[
              ["sobre-mi", "About me"],
              ["skills", "Skills"],
              ["proyectos", "Projects"],
              ["contacto", "Contact"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-slate-400 transition-colors hover:text-slate-100"
              >
                {label}
              </button>
            ))}
          </nav>

          <a
            href={CV_URL}
            download="CV_Salem_Amortegui_2026.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">CV</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              <span className="font-mono-ui text-xs text-slate-300">
                Available for new opportunities
              </span>
            </div>

            <Eyebrow>$ whoami</Eyebrow>

            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-5xl">
              {NAME}
            </h1>
            <p className="mt-3 text-lg font-semibold text-emerald-400 sm:text-xl">
              {ROLE}
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400">
              I design robust test strategies and automated suites to ensure applications work
              flawlessly before hitting production. Are we building the right product and the product right?
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("proyectos")}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03] hover:bg-emerald-300"
              >
                View Projects
                <ArrowDown className="h-4 w-4" />
              </button>
              <a
                href={CV_URL}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-white/20 hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 transition-colors hover:text-slate-100"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 transition-colors hover:text-slate-100"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Correo"
                className="text-slate-400 transition-colors hover:text-slate-100"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Terminal mock — signature element */}
          <div className="rounded-xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              <span className="font-mono-ui ml-3 text-xs text-slate-500">
                zsh — portfolio
              </span>
            </div>
            <div className="font-mono-ui space-y-2 p-5 text-sm leading-relaxed">
              <p className="text-slate-400">
                <span className="text-emerald-400">$</span> npm run test:portfolio
              </p>
              <p className="text-slate-500 pt-1">running 3 tests...</p>
              <p className="text-emerald-400">
                ✓ renders hero section{" "}
                <span className="text-slate-600">(12ms)</span>
              </p>
              <p className="text-emerald-400">
                ✓ loads 3 case studies{" "}
                <span className="text-slate-600">(8ms)</span>
              </p>
              <p className="text-emerald-400">
                ✓ QA engineer available{" "}
                <span className="text-slate-600">(∞)</span>
              </p>
              <p className="pt-2 text-slate-300">
                Tests:{" "}
                <span className="text-emerald-400 font-semibold">
                  3 passed
                </span>
                , 3 total
              </p>
              <p className="pt-1 text-slate-500">
                <span className="text-emerald-400">$</span>{" "}
                <span className="blink-cursor text-slate-300">▍</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="border-t border-white/10 bg-zinc-950/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>$ cat about.md</Eyebrow>
          <h2 className="font-display text-2xl font-bold text-slate-50 sm:text-3xl">
            About me
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            3 years of experience combining <span className="text-slate-200">meticulous manual testing</span> for
            complex edge cases with <span className="text-slate-200">scalable automation</span> for fast regression.
            I engineer end-to-end test strategies—covering web UI, REST APIs, and databases—ensuring{" "}
            <span className="text-emerald-400">total software quality</span> from every angle.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>$ skills --list</Eyebrow>
          <h2 className="font-display text-2xl font-bold text-slate-50 sm:text-3xl">
            Technical Skills
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SKILL_GROUPS.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="rounded-xl border border-white/10 bg-zinc-900 p-6 transition-colors hover:border-emerald-400/30"
                >
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="rounded-lg bg-emerald-400/10 p-2">
                      <Icon className="h-4 w-4 text-emerald-400" />
                    </div>
                    <h3 className="font-semibold text-slate-100">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="border-t border-white/10 bg-zinc-950/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>$ ls ./projects --status</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-bold text-slate-50 sm:text-3xl">
              Projects
            </h2>
          </div>

          {/* Filtros */}
          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={
                  "font-mono-ui rounded-full border px-4 py-1.5 text-xs font-medium transition-colors " +
                  (activeFilter === f.key
                    ? "border-emerald-400 bg-emerald-400 text-slate-950"
                    : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-100")
                }
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid de proyectos */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-xl border border-white/10 bg-zinc-900 p-6 transition-all hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-xl hover:shadow-emerald-950/20"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-100">
                    {project.title}
                  </h3>
                </div>

                <StatusBadge status={project.status} label={project.statusLabel} />

                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {[...project.stackDev, ...project.qaTools]
                    .slice(0, 5)
                    .map((tech) => (
                      <span
                        key={tech}
                        className="font-mono-ui rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  View Details
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>$ contact --new</Eyebrow>
          <div className="rounded-xl border border-white/10 bg-zinc-900 p-8 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-50 sm:text-3xl">
                  Are you ready to build software you can trust?
                </h2>
                <p className="mt-3 max-w-md text-slate-400">
                  Available for QA Engineering, Software Testing Automation, API Testing, and Quality Assurance roles. Let's connect!
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:items-end">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03] hover:bg-emerald-300"
                >
                  <Mail className="h-4 w-4" />
                  {EMAIL}
                </a>
                <div className="flex items-center gap-4">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-100"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-100"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href={CV_URL}
                    download
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-100"
                  >
                    <Download className="h-4 w-4" />
                    CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="font-mono-ui text-xs text-slate-600">
            $ echo "Thanks for stopping by" — © {new Date().getFullYear()}{" "}
            {NAME}
          </p>
        </div>
      </footer>

      {/* MODAL — CASO DE ESTUDIO */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border border-white/10 bg-zinc-900 p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Cerrar"
              className="absolute right-5 top-5 rounded-lg border border-white/10 bg-white/5 p-1.5 text-slate-400 transition-colors hover:text-slate-100"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="font-mono-ui text-xs text-slate-500">
              {selectedProject.command}
            </p>

            <h3
              id="modal-title"
              className="mt-2 font-display text-2xl font-bold text-slate-50"
            >
              {selectedProject.title}
            </h3>

            <div className="mt-3">
              <StatusBadge
                status={selectedProject.status}
                label={selectedProject.statusLabel}
              />
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              {selectedProject.description}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-slate-500" />
                  <h4 className="font-mono-ui text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Dev Stack
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.stackDev.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-ui rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-slate-500" />
                  <h4 className="font-mono-ui text-xs font-semibold uppercase tracking-wide text-slate-500">
                    QA Tools
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.qaTools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono-ui rounded-full border border-indigo-400/20 bg-indigo-400/10 px-2.5 py-1 text-xs text-indigo-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-3 flex items-center gap-2">
                <FlaskConical className="h-4 w-4 text-emerald-400" />
                <h4 className="font-mono-ui text-xs font-semibold uppercase tracking-wide text-slate-500">
                  QA & Testing
                </h4>
              </div>
              <ul className="space-y-2.5">
                {selectedProject.qaTesting.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
