import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Menu,
  X,
  ChevronDown,
  FileText,
} from "lucide-react";
import {
  profile,
  projects,
  stack,
  achievements,
  certifications,
  type Project,
} from "@/lib/portfolio-data";
import { Motif } from "@/components/portfolio/Motif";
import portraitAsset from "@/assets/akash-portrait.webp";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akash Mahapatra — AI/ML Engineer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Akash Mahapatra, B.Tech CSE (AI & ML) engineer building intelligent systems across ML, computer vision, remote sensing and full-stack engineering.",
      },
      { property: "og:title", content: "Akash Mahapatra — AI/ML Engineering Portfolio" },
      {
        property: "og:description",
        content:
          "Intelligent systems from models to deployment: SatQuery AI, Stratify.AI, MediGuide AI, JanSetu and a Spring Boot payroll system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "preload", as: "image", href: portraitAsset, fetchPriority: "high" }],
  }),
  component: Index,
});

const nav = [
  ["About", "#about"],
  ["Expertise", "#expertise"],
  ["Stack", "#stack"],
  ["Projects", "#work"],
  ["Achievements", "#achievements"],
  ["Contact", "#connect"],
];

function Ext({
  href,
  children,
  className,
  label,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function SectionHead({
  n,
  label,
  title,
  sub,
}: {
  n: string;
  label: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow">
        {n} / {label}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const els = nav
      .map(([, h]) => document.querySelector(h as string))
      .filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

function IstClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <p
      className="hidden font-mono text-[0.66rem] uppercase tracking-widest text-muted-foreground lg:block"
      aria-label="Local time in Kolkata, India"
    >
      Kolkata, IN · <span className="text-primary tabular-nums">{time || "--:--:--"}</span> IST
    </p>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm tracking-widest">
          AKASH<span className="text-primary">.</span>M
        </a>
        <nav aria-label="Primary" className="hidden gap-8 md:flex">
          {nav.map(([l, h]) => (
            <a
              key={h}
              href={h}
              aria-current={active === h ? "true" : undefined}
              className={`relative py-1 font-mono text-xs uppercase tracking-wider transition-colors hover:text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-primary after:transition-transform ${active === h ? "text-primary after:scale-x-100" : "text-muted-foreground after:scale-x-0"}`}
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <IstClock />
          <button
            className="-mr-2 p-2 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-border px-6 py-4 md:hidden">
          {nav.map(([l, h]) => (
            <a
              key={h}
              href={h}
              onClick={() => setOpen(false)}
              aria-current={active === h ? "true" : undefined}
              className={`block py-3 font-mono text-sm uppercase tracking-wider hover:text-primary ${active === h ? "text-primary" : "text-muted-foreground"}`}
            >
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function PortraitFrame() {
  return (
    <figure className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[360px]">
      <div className="relative p-3">
        <div className="relative aspect-square overflow-hidden rounded-full border border-primary/45">
          <img
            src={portraitAsset}
            alt="Akash Mahapatra"
            width={900}
            height={900}
            fetchPriority="high"
            className="h-full w-full scale-[1.12] object-cover brightness-[1.07]"
          />
        </div>
        <span
          aria-hidden
          className="pointer-events-none absolute right-1 top-1 h-3 w-3 border-r border-t border-primary/45"
        />
      </div>
      <figcaption className="mx-3 mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-primary/15 pt-4 font-mono text-[0.66rem] text-muted-foreground">
        <span className="text-foreground/85">Akash Mahapatra</span>
        <span>Kolkata, India</span>
      </figcaption>
    </figure>
  );
}

function ProjectVideo({
  id,
  sources,
  title,
}: {
  id?: string | undefined;
  sources?: { src: string; type: string }[] | undefined;
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (e) => {
        if (e[0]?.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const yt = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1&modestbranding=1&rel=0&disablekb=1`;
  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden={!show}
    >
      {show &&
        (sources ? (
          <video
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            tabIndex={-1}
            ref={(el) => {
              if (el) el.muted = true;
            }}
            className="absolute inset-0 h-full w-full object-cover animate-rise"
          >
            {sources.map((s) => (
              <source key={s.src} src={s.src} type={s.type} />
            ))}
          </video>
        ) : (
          <iframe
            src={yt}
            title={title}
            tabIndex={-1}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute left-1/2 top-1/2 h-[104%] w-[120%] -translate-x-1/2 -translate-y-1/2 border-0 animate-rise"
          />
        ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-background/40" />
    </div>
  );
}

function ProjectBlock({ p, i }: { p: Project; i: number }) {
  const [open, setOpen] = useState(false);
  const flip = i % 2 === 1;
  return (
    <article
      className="group scroll-mt-20 border-t border-border py-14"
      id={`project-${p.id}`}
      aria-labelledby={`${p.id}-t`}
    >
      <div
        className={`grid items-start gap-10 lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div className="relative aspect-[400/260] overflow-hidden border border-border bg-surface transition-colors duration-300 group-hover:border-primary/40">
          <div className="absolute inset-0 grid-bg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
            <Motif kind={p.motif} />
          </div>
          {(p.videoSources || p.videoId) && (
            <ProjectVideo id={p.videoId} sources={p.videoSources} title={`${p.name} demo video`} />
          )}
          <span className="absolute left-4 top-3 font-mono text-xs text-muted-foreground">
            {String(i + 1).padStart(2, "0")} / {p.id}
          </span>
        </div>
        <div>
          <p className="eyebrow">
            {String(i + 1).padStart(2, "0")} — {p.category}
          </p>
          <h3
            id={`${p.id}-t`}
            className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl"
          >
            {p.name}
          </h3>
          <p className="mt-4 text-muted-foreground">{p.summary}</p>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-accent">Problem</dt>
              <dd className="mt-1 text-foreground/85">{p.problem}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-accent">
                My contribution
              </dt>
              <dd className="mt-1 text-foreground/85">{p.built}</dd>
            </div>
          </dl>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-accent">
            Key features
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-foreground/85">
            {p.capabilities.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-primary">▸</span>
                {c}
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {p.tech.map((t) => (
              <li
                key={t}
                className="chip group-hover:border-primary/40 group-hover:text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
          {p.note && (
            <p className="mt-5 border-l-2 border-primary pl-3 text-xs text-muted-foreground">
              {p.note}
            </p>
          )}
          <div className="mt-7 flex flex-wrap gap-3">
            {p.liveUrl && (
              <Ext
                href={p.liveUrl}
                label={`${p.name} live demo (opens in new tab)`}
                className="inline-flex items-center gap-2 bg-primary px-4 py-2 font-mono text-xs uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
              >
                {p.liveLabel ?? "Live Demo"} <ArrowUpRight className="h-4 w-4" />
              </Ext>
            )}
            {p.repoUrl && (
              <Ext
                href={p.repoUrl}
                label={`${p.name} GitHub repository (opens in new tab)`}
                className="inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </Ext>
            )}
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls={`${p.id}-cs`}
              className="inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
            >
              Project Details{" "}
              <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div
          id={`${p.id}-cs`}
          className="mt-10 grid gap-8 border border-border bg-surface p-6 animate-rise md:grid-cols-2 md:p-8"
        >
          <div>
            <p className="eyebrow">My approach</p>
            <p className="mt-3 text-sm text-foreground/85">{p.caseStudy.approach}</p>
          </div>
          <div>
            <p className="eyebrow">Architecture</p>
            <ol className="mt-3 space-y-2">
              {p.caseStudy.architecture.map((a, k) => (
                <li
                  key={a}
                  className="flex items-center gap-3 font-mono text-xs text-foreground/85"
                >
                  <span className="text-muted-foreground">{String(k + 1).padStart(2, "0")}</span>
                  <span className="flex-1 border border-border px-3 py-2">{a}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </article>
  );
}

const marqueeTech = [
  "Python",
  "PyTorch",
  "Scikit-learn",
  "SegFormer",
  "Grounding DINO",
  "GeoTIFF",
  "FastAPI",
  "Spring Boot",
  "JWT",
  "React",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "MySQL",
  "Supabase",
  "n8n",
];

function StackMarquee() {
  const row = [...marqueeTech, ...marqueeTech];
  return (
    <div aria-hidden className="overflow-hidden border-y border-border bg-surface/40 py-3.5">
      <div className="flex w-max animate-marquee gap-10">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            {t} <span className="text-primary">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function StartHere() {
  const paths = [
    ["Recruiters", "Milestones, live demos and how to reach me", "#achievements"],
    ["Engineers", "Architecture, case studies and the stack behind each build", "#work"],
    ["Collaborators", "What I'm building now and where I'm heading", "#direction"],
  ];
  return (
    <section aria-label="Start here" className="mx-auto max-w-6xl px-6 pt-16">
      <p className="eyebrow">01 / Start here</p>
      <ul className="mt-6 grid gap-px border border-border bg-border md:grid-cols-3">
        {paths.map(([t, d, h]) => (
          <li key={t}>
            <a
              href={h}
              className="group flex h-full items-center justify-between gap-4 bg-background p-6 transition-colors hover:bg-surface"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Index() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "LinkedIn", sub: "Professional profile", href: profile.linkedin, Icon: Linkedin },
    { label: "GitHub", sub: "Projects & source code", href: profile.github, Icon: Github },
    { label: "Email", sub: "Let's talk", href: `mailto:${profile.email}`, Icon: Mail },
    { label: "Instagram", sub: "Beyond the terminal", href: profile.instagram, Icon: Instagram },
  ];
  return (
    <div id="top" className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        {/* HERO */}
        <section aria-label="Introduction" className="hero-backdrop relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-18">
            <div className="grid items-center gap-12 animate-rise lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div className="min-w-0">
                <p className="hero-eyebrow">
                  AI/ML Engineer · Applied AI · Computer Vision · Intelligent Systems
                </p>
                <h1 className="mt-6 font-display text-[2.75rem] font-bold leading-[0.88] tracking-normal sm:text-[3.5rem] md:text-[4rem] lg:text-[4.8rem]">
                  AKASH
                  <br />
                  <span className="text-primary">MAHAPATRA</span>
                </h1>
                <p className="mt-8 max-w-lg font-display text-2xl font-medium leading-snug md:text-[1.75rem]">
                  Building intelligent systems from models to deployment.
                </p>
                <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground md:max-w-lg">
                  I develop machine learning solutions, AI-powered applications, computer vision
                  systems, and reliable backend services that solve real-world problems.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Button
                    asChild
                    className="h-12 rounded-sm px-5 font-mono text-xs tracking-normal shadow-none transition duration-200 hover:-translate-y-0.5 sm:px-6"
                  >
                    <a href="#work">
                      Explore My Work <ArrowUpRight aria-hidden className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-sm border-border bg-transparent px-5 font-mono text-xs tracking-normal shadow-none transition duration-200 hover:border-primary/60 hover:bg-primary/5 hover:text-primary sm:px-6"
                  >
                    <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                      Resume <FileText aria-hidden className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-sm border-border bg-transparent px-5 font-mono text-xs tracking-normal shadow-none transition duration-200 hover:border-primary/60 hover:bg-primary/5 hover:text-primary sm:px-6"
                  >
                    <a href="#connect">Let's Connect</a>
                  </Button>
                </div>
                <p className="mt-5 flex items-center gap-2 font-mono text-[0.68rem] leading-relaxed text-muted-foreground">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Open to internship opportunities
                </p>
              </div>
              <PortraitFrame />
            </div>
            <div className="mt-12 border border-border bg-surface/40 backdrop-blur">
              <dl className="grid grid-cols-2 gap-px bg-border/60 md:grid-cols-4">
                {[
                  [String(projects.length), "Shipped projects"],
                  [String(projects.filter((x) => x.liveUrl).length), "Live deployments"],
                  ["3", "Hackathon podiums"],
                  ["8", "Technology domains"],
                ].map(([v, k]) => (
                  <div key={k} className="bg-background/80 p-5">
                    <dd className="font-display text-3xl font-semibold text-primary md:text-4xl">
                      {v}
                    </dd>
                    <dt className="mt-1 font-mono text-[0.68rem] uppercase tracking-widest text-muted-foreground">
                      {k}
                    </dt>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap items-center gap-2 border-t border-border/60 px-5 py-3">
                <span className="mr-1 font-mono text-[0.62rem] uppercase tracking-widest text-muted-foreground">
                  In the stack
                </span>
                {[
                  "Python",
                  "PyTorch",
                  "Scikit-learn",
                  "SegFormer",
                  "GeoTIFF",
                  "FastAPI",
                  "Spring Boot",
                  "React",
                  "PostgreSQL",
                  "n8n",
                ].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
                <a
                  href="#stack"
                  className="ml-auto flex items-center gap-1.5 font-mono text-[0.66rem] uppercase tracking-widest text-accent transition-colors hover:text-primary"
                >
                  Full stack
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <StackMarquee />
        <StartHere />

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <SectionHead n="02" label="About" title="Engineering profile" />
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 text-lg text-foreground/85">
              <p>
                I'm a B.Tech Computer Science &amp; Engineering (AI &amp; ML) engineer-in-training
                at Techno Bengal Institute of Technology, building production-minded software around
                intelligent systems.
              </p>
              <p className="text-muted-foreground">
                I enjoy building systems where AI is connected to an actual problem rather than
                existing only as a model or notebook. My work spans satellite-image analysis,
                machine learning, AI-assisted platforms, backend systems, databases, automation and
                full-stack applications.
              </p>
              <p className="text-muted-foreground">
                I'm increasingly interested in how AI, computer vision, sensing, software and
                automation connect with physical systems such as UAVs and autonomous platforms.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-px self-start border border-border bg-border">
              {[
                ["Degree", "B.Tech CSE (AI & ML)"],
                ["Institution", "Techno Bengal Institute of Technology"],
                ["Batch", "2024–2028"],
                ["Location", "Kolkata, India"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-5">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-widest text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-2 text-sm">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-24">
          <SectionHead
            n="03"
            label="Core Expertise"
            title="What I bring to a team"
            sub="Four engineering capabilities, each backed by a shipped project below."
          />
          <ul className="grid gap-px border border-border bg-border md:grid-cols-2">
            {[
              [
                "Machine Learning & Deep Learning",
                "Classifiers, CNNs, transformers and sentence embeddings — chosen per task, not by default.",
                "Stratify.AI · SatQuery AI",
              ],
              [
                "Computer Vision & Remote Sensing",
                "Segmentation, open-vocabulary detection, change detection and spectral evidence on GeoTIFF imagery.",
                "SatQuery AI",
              ],
              [
                "Backend & System Design",
                "Layered REST APIs with JWT security, JPA/SQL persistence and automated tests.",
                "Payroll System · JanSetu",
              ],
              [
                "Applied AI Products",
                "LLM reasoning grounded in deterministic analytics, retrieval and responsible-AI guardrails.",
                "Stratify.AI · MediGuide AI",
              ],
            ].map(([t, d, e], i) => (
              <li key={t} className="bg-background p-7 transition-colors hover:bg-surface">
                <p className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-widest text-accent">
                  Proof → {e}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* STACK */}
        <section id="stack" className="scroll-mt-20 border-y border-border bg-surface/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <SectionHead
              n="04"
              label="Technology"
              title="Engineering stack"
              sub="Grouped by engineering discipline. Everything is used in my projects, except the final group — domains I'm currently learning."
            />
            <div className="divide-y divide-border border-y border-border">
              {stack.map((g) => (
                <div key={g.group} className="grid gap-4 py-6 md:grid-cols-[220px_1fr]">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                      {g.group}
                    </h3>
                    <p className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-widest text-muted-foreground">
                      {g.learning ? "Learning · exploring" : "Applied in projects"}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <li
                        key={t}
                        className={`chip ${g.learning ? "border-dashed" : "text-foreground/85"}`}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <SectionHead
            n="05"
            label="Selected Work"
            title="Systems I've designed and built"
            sub="Across AI, remote sensing, health technology, public accessibility and enterprise backend engineering."
          />
          {projects.map((p, i) => (
            <ProjectBlock key={p.id} p={p} i={i} />
          ))}
        </section>

        {/* DIRECTION */}
        <section id="direction" className="scroll-mt-20 border-y border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <SectionHead
              n="06"
              label="Engineering Direction"
              title="Where I'm heading"
              sub="My foundation is AI/ML, computer vision, remote sensing, full-stack systems and automation. These are areas I'm exploring next — interests, not claimed expertise."
            />
            <ul className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {[
                "UAV / UAS Systems",
                "Autonomous Systems",
                "Sensor-driven Intelligence",
                "Edge AI",
                "Hardware / IoT",
                "Robotics",
              ].map((t, i) => (
                <li key={t} className="flex items-center justify-between bg-background p-6">
                  <span className="font-display text-lg">{t}</span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                    Exploring · {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-12 max-w-3xl border-l-2 border-primary pl-6 font-display text-xl text-foreground/90 md:text-2xl">
              "I want to understand not only how an AI model works, but how sensing, software,
              decision-making and physical systems work together."
            </blockquote>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <SectionHead n="07" label="Achievements" title="Milestones" />
          <ol className="grid gap-6 md:grid-cols-3">
            {achievements.map((a) => (
              <li key={a.title} className="border-t-2 border-primary pt-6">
                <p className="font-display text-5xl font-bold text-primary">{a.place}</p>
                <h3 className="mt-3 font-display text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            + Active participation in inter-college and external hackathons
          </p>
        </section>

        {certifications.length > 0 && (
          <section id="certifications" className="mx-auto max-w-6xl px-6 pb-24">
            <SectionHead n="08" label="Certifications" title="Certifications" />
            <ul className="grid gap-4 md:grid-cols-2">
              {certifications.map((c) => (
                <li key={c.title} className="border border-border p-5">
                  <p className="font-display font-semibold">{c.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {c.issuer}
                    {c.date ? ` · ${c.date}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CONNECT */}
        <section id="connect" className="scroll-mt-20 border-t border-border bg-surface/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="eyebrow">09 / Let's Connect</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Have an engineering problem?
              <br />
              <span className="text-primary">Let's build something useful.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Ext
                href={`mailto:${profile.email}`}
                label="Send email to Akash"
                className="bg-primary px-6 py-3 font-mono text-xs uppercase tracking-wider text-primary-foreground hover:opacity-90"
              >
                Email Me
              </Ext>
              <Ext
                href={profile.linkedin}
                label="LinkedIn (opens in new tab)"
                className="border border-border px-6 py-3 font-mono text-xs uppercase tracking-wider hover:border-primary hover:text-primary"
              >
                LinkedIn
              </Ext>
            </div>
            <p className="mt-16 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Find me across the web
            </p>
            <ul className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {socials.map(({ label, sub, href, Icon }) => (
                <li key={label}>
                  <Ext
                    href={href}
                    label={`${label}: ${sub}${href.startsWith("http") ? " (opens in new tab)" : ""}`}
                    className="group flex h-full flex-col gap-6 bg-background p-6 transition-colors hover:bg-surface"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-5 w-5 text-primary" />
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest">{label}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
                    </div>
                  </Ext>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display font-semibold">Akash Mahapatra</p>
            <p className="mt-1 text-sm text-muted-foreground">
              AI/ML • Computer Vision • Intelligent Systems — Kolkata, India
            </p>
          </div>
          <div className="text-left md:text-right">
            <div className="flex gap-5 font-mono text-xs uppercase tracking-wider text-muted-foreground md:justify-end">
              <Ext href={profile.linkedin} className="hover:text-primary">
                LinkedIn
              </Ext>
              <Ext href={profile.github} className="hover:text-primary">
                GitHub
              </Ext>
              <Ext href={profile.instagram} className="hover:text-primary">
                Instagram
              </Ext>
              <Ext href={`mailto:${profile.email}`} className="hover:text-primary">
                Email
              </Ext>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              © {year} · Designed &amp; built by Akash Mahapatra.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
