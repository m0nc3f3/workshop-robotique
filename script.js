/* ── RESET ─────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:       #05060f;
  --bg2:      #080c1a;
  --panel:    #0d1225;
  --border:   #1e2d4a;
  --blue:     #3b82f6;
  --blue-lt:  #60a5fa;
  --electric: #38bdf8;
  --purple:   #7c3aed;
  --purple-lt:#a78bfa;
  --text:     #e2e8f0;
  --text2:    #94a3b8;
  --muted:    #475569;
  --shadow-b: 0 4px 32px rgba(59,130,246,0.2);
  --shadow-p: 0 4px 32px rgba(124,58,237,0.2);
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  line-height: 1.65;
  overflow-x: hidden;
}

/* ── CANVAS ─────────────────────────────────────── */
#circuit-bg {
  position: fixed; inset: 0;
  width: 100%; height: 100%;
  z-index: 0; pointer-events: none;
}
nav, section, footer { position: relative; z-index: 1; }

/* ── BUTTONS ────────────────────────────────────── */
.btn-primary {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem; font-weight: 500;
  letter-spacing: 0.08em; text-transform: uppercase;
  text-decoration: none; padding: 0.9rem 2.2rem;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  color: #fff; border-radius: 4px;
  transition: box-shadow 0.25s, transform 0.2s;
}
.btn-primary:hover {
  box-shadow: 0 0 40px rgba(59,130,246,0.5), 0 0 80px rgba(124,58,237,0.2);
  transform: translateY(-2px);
}

.btn-ghost {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem; font-weight: 400;
  letter-spacing: 0.08em; text-transform: uppercase;
  text-decoration: none; padding: 0.9rem 2.2rem;
  border: 1px solid var(--border); color: var(--text2);
  border-radius: 4px; transition: border-color 0.2s, color 0.2s;
}
.btn-ghost:hover { border-color: var(--blue); color: var(--electric); }

/* ── NAV ────────────────────────────────────────── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 3rem;
  background: rgba(5,6,15,0.88);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}
nav.scrolled { border-bottom-color: var(--border); }

.nav-brand {
  display: flex; align-items: center; gap: 0.6rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem; font-weight: 500;
  letter-spacing: 0.14em; color: var(--electric);
}
.nav-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--electric);
  box-shadow: 0 0 10px var(--electric);
  animation: blink 2s ease-in-out infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

.nav-links { display: flex; gap: 2rem; list-style: none; }
.nav-links a {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem; text-decoration: none;
  color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em;
  transition: color 0.2s;
}
.nav-links a:hover, .nav-links a.active { color: var(--electric); }

.hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.hamburger span {
  display: block; width: 22px; height: 2px;
  background: var(--text); transition: transform 0.3s, opacity 0.3s;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── HERO ───────────────────────────────────────── */
#hero {
  min-height: 100vh;
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: center; gap: 2rem;
  padding: 9rem 3rem 3rem;
  max-width: 1280px; margin: 0 auto;
  position: relative;
}

/* purple glow top right */
#hero::before {
  content: '';
  position: absolute; top: 0; right: 0;
  width: 50%; height: 70%;
  background: radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.18) 0%, transparent 70%);
  pointer-events: none;
}
/* blue glow bottom left */
#hero::after {
  content: '';
  position: absolute; bottom: 0; left: 0;
  width: 40%; height: 50%;
  background: radial-gradient(ellipse at 20% 80%, rgba(59,130,246,0.15) 0%, transparent 70%);
  pointer-events: none;
}

.hero-eyebrow {
  display: flex; align-items: center; gap: 0.7rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--electric); margin-bottom: 1.2rem;
}
.pulse-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--electric); box-shadow: 0 0 10px var(--electric);
  animation: blink 1.8s ease-in-out infinite; flex-shrink: 0;
}

.hero-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight: 400; line-height: 0.9;
  letter-spacing: 0.02em; color: var(--text);
  margin-bottom: 0.8rem;
}
.hero-title em {
  font-style: normal;
  background: linear-gradient(135deg, var(--blue-lt), var(--purple-lt));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-tagline {
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem; font-weight: 600;
  letter-spacing: 0.08em; color: var(--text2);
  margin-bottom: 1rem;
}
.arrows { color: var(--electric); }

.hero-sub {
  font-size: 0.98rem; color: var(--text2);
  line-height: 1.78; font-weight: 300;
  max-width: 480px; margin-bottom: 1.8rem;
}

.hero-date-block {
  display: flex; align-items: center; gap: 1rem;
  padding: 1rem 1.4rem;
  border: 1px solid var(--border);
  background: rgba(59,130,246,0.06);
  border-radius: 6px; margin-bottom: 1rem;
  width: fit-content;
}
.date-icon { font-size: 1.5rem; }
.date-val {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem; color: var(--text); letter-spacing: 0.04em;
}
.date-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem; color: var(--text2); letter-spacing: 0.06em;
}

.hero-badges { display: flex; gap: 0.75rem; margin-bottom: 1.8rem; flex-wrap: wrap; }
.badge-free {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em;
  padding: 0.45rem 1.1rem;
  border: 1.5px solid var(--blue); color: var(--blue-lt);
  border-radius: 4px; background: rgba(59,130,246,0.08);
}
.badge-open {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem; letter-spacing: 0.08em;
  padding: 0.45rem 1.1rem;
  border: 1px solid var(--border); color: var(--text2);
  border-radius: 4px;
}

.hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }

/* robot arm */
.hero-right { display: flex; align-items: center; justify-content: center; }
.robot-wrap { animation: floatY 6s ease-in-out infinite; }
@keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
.robot-svg {
  width: 100%; max-width: 380px;
  filter: drop-shadow(0 0 30px rgba(59,130,246,0.3)) drop-shadow(0 0 60px rgba(124,58,237,0.15));
}

/* tech icons row */
#hero { grid-template-rows: auto auto; }
.hero-tech-row {
  grid-column: 1 / -1;
  display: flex; justify-content: center;
  gap: 2rem; flex-wrap: wrap;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}
.tech-icon {
  display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
  font-size: 1.4rem;
}
.tech-icon span {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--muted);
}

/* ── SECTIONS ───────────────────────────────────── */
section { padding: 7rem 3rem; }
.wrap { max-width: 1200px; margin: 0 auto; }

#intro     { background: rgba(8,12,26,0.97); border-top: 1px solid var(--border); }
#programme { background: rgba(5,6,15,0.97);  border-top: 1px solid var(--border); }
#team      { background: rgba(8,12,26,0.97); border-top: 1px solid var(--border); }
#downloads { background: rgba(5,6,15,0.97);  border-top: 1px solid var(--border); }
#closing   { background: rgba(8,12,26,0.99); border-top: 1px solid var(--border); }

.sec-head { display: flex; align-items: flex-start; gap: 2rem; margin-bottom: 3.5rem; }
.sec-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 5rem; line-height: 1; color: var(--border);
  flex-shrink: 0; margin-top: -0.6rem; user-select: none;
}
.sec-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 400; line-height: 0.95;
  letter-spacing: 0.02em; color: var(--text); margin-bottom: 0.8rem;
}
.sec-lead { font-size: 1rem; color: var(--text2); font-weight: 300; line-height: 1.7; max-width: 500px; }

/* ── INTRO CARDS ────────────────────────────────── */
.cards-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--border);
  border: 1px solid var(--border); margin-bottom: 2.5rem;
}
.card {
  background: var(--panel); padding: 1.8rem;
  display: flex; flex-direction: column; gap: 0.5rem;
  position: relative; overflow: hidden; transition: background 0.2s;
}
.card::after {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--blue), var(--purple));
  transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
}
.card:hover { background: rgba(59,130,246,0.05); }
.card:hover::after { transform: scaleX(1); }

.card-icon { font-size: 1.6rem; }
.card-tag {
  font-family: 'JetBrains Mono', monospace; font-size: 0.62rem;
  letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted);
  border: 1px solid var(--border); padding: 0.15rem 0.5rem;
  width: fit-content; border-radius: 2px;
}
.card h3 { font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 1rem; color: var(--text); margin-top: 0.3rem; }
.card p { font-size: 0.88rem; color: var(--text2); line-height: 1.7; font-weight: 300; }

.quote-block {
  border-left: 3px solid var(--blue); padding: 1.2rem 1.8rem;
  background: rgba(59,130,246,0.05); max-width: 760px;
}
.quote-block p { font-size: 0.98rem; color: var(--text2); line-height: 1.85; font-weight: 300; }
.quote-block strong { color: var(--electric); font-weight: 500; }

/* ── PROGRAMME ──────────────────────────────────── */
.prog-list { display: flex; flex-direction: column; }
.prog-row { display: grid; grid-template-columns: 28px 1fr; gap: 1.8rem; }
.prog-dot-col { display: flex; flex-direction: column; align-items: center; padding-top: 0.35rem; }
.pdot {
  width: 12px; height: 12px; border-radius: 50%;
  border: 2px solid var(--border); background: var(--panel);
  flex-shrink: 0; z-index: 1;
  transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.pdot--blue   { border-color: var(--blue); }
.pdot--purple { border-color: var(--purple); }
.pdot--electric { border-color: var(--electric); background: rgba(56,189,248,0.1); }

.prog-row:hover .pdot         { background: var(--text2); border-color: var(--text2); }
.prog-row:hover .pdot--blue   { background: var(--blue); border-color: var(--blue); box-shadow: 0 0 12px rgba(59,130,246,0.6); }
.prog-row:hover .pdot--purple { background: var(--purple); border-color: var(--purple); box-shadow: 0 0 12px rgba(124,58,237,0.6); }
.prog-row:hover .pdot--electric { background: var(--electric); border-color: var(--electric); box-shadow: 0 0 12px rgba(56,189,248,0.6); }

.pline { width: 1px; flex: 1; background: var(--border); margin-top: 5px; }
.prog-body { padding-bottom: 2.8rem; }
.prog-row:last-child .prog-body { padding-bottom: 0; }

.prog-badge {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace; font-size: 0.62rem;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted);
  border: 1px solid var(--border); padding: 0.2rem 0.6rem;
  border-radius: 2px; margin-bottom: 0.6rem;
}
.prog-badge--blue    { color: var(--blue-lt);   border-color: var(--blue);   background: rgba(59,130,246,0.08); }
.prog-badge--purple  { color: var(--purple-lt); border-color: var(--purple); background: rgba(124,58,237,0.08); }
.prog-badge--electric{ color: var(--electric);  border-color: var(--electric); background: rgba(56,189,248,0.08); }

.prog-body h3 {
  font-family: 'Bebas Neue', sans-serif; font-weight: 400;
  font-size: 1.8rem; letter-spacing: 0.04em; color: var(--text);
  margin-bottom: 0.65rem; line-height: 1; transition: color 0.2s;
}
.prog-row:hover .prog-body h3 { color: var(--electric); }
.prog-body p { font-size: 0.92rem; color: var(--text2); line-height: 1.8; font-weight: 300; max-width: 680px; margin-bottom: 1rem; }
.prog-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.prog-tags span {
  font-family: 'JetBrains Mono', monospace; font-size: 0.62rem;
  letter-spacing: 0.06em; text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  background: rgba(59,130,246,0.07); border: 1px solid var(--border);
  color: var(--blue-lt); border-radius: 2px;
}

/* ── TEAM ───────────────────────────────────────── */
.prof-block { display: flex; justify-content: center; margin-bottom: 2.5rem; }
.prof-card {
  display: flex; align-items: center; gap: 2rem;
  padding: 2rem 3rem;
  border: 1px solid var(--blue);
  background: rgba(59,130,246,0.06);
  position: relative; overflow: hidden;
}
.prof-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, var(--electric), var(--purple), transparent);
}
.prof-avatar {
  width: 76px; height: 76px; border-radius: 50%;
  background: var(--panel); border: 2px solid var(--electric);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; color: var(--electric);
  box-shadow: 0 0 0 4px rgba(56,189,248,0.1), 0 0 28px rgba(56,189,248,0.25);
  animation: pulseRing 3s ease-in-out infinite;
}
@keyframes pulseRing {
  0%,100% { box-shadow: 0 0 0 4px rgba(56,189,248,0.1), 0 0 28px rgba(56,189,248,0.25); }
  50%      { box-shadow: 0 0 0 8px rgba(56,189,248,0.05), 0 0 44px rgba(56,189,248,0.35); }
}
.prof-role {
  display: block; font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--electric); margin-bottom: 0.3rem;
}
.prof-name {
  font-family: 'Bebas Neue', sans-serif; font-size: 2.2rem;
  font-weight: 400; letter-spacing: 0.04em; color: var(--text); line-height: 1;
}

.team-sep { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.8rem; }
.sep-line { flex: 1; height: 1px; background: var(--border); }
.team-sep span {
  font-family: 'JetBrains Mono', monospace; font-size: 0.65rem;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); white-space: nowrap;
}

.team-row { display: flex; gap: 1.2rem; justify-content: center; flex-wrap: wrap; }
.team-card {
  display: flex; flex-direction: column; align-items: center; gap: 0.6rem;
  padding: 1.8rem 2.4rem; border: 1px solid var(--border);
  background: var(--panel); min-width: 190px; text-align: center;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}
.team-card:hover { border-color: var(--blue); transform: translateY(-3px); box-shadow: var(--shadow-b); }
.team-avatar {
  width: 50px; height: 50px; border-radius: 50%;
  background: var(--bg2); border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Bebas Neue', sans-serif; font-size: 1rem; color: var(--blue-lt);
}
.team-card h4 { font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 1rem; color: var(--text); }
.team-card span { font-family: 'JetBrains Mono', monospace; font-size: 0.66rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }

/* ── DOWNLOADS ──────────────────────────────────── */
.dl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.dl-card {
  display: flex; flex-direction: column; gap: 1rem; padding: 2rem;
  border: 1px solid var(--border); background: var(--panel);
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  position: relative; overflow: hidden;
}
.dl-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--blue), var(--purple));
  transform: scaleX(0); transform-origin: left; transition: transform 0.35s;
}
.dl-card:hover { border-color: var(--blue); transform: translateY(-3px); box-shadow: var(--shadow-b); }
.dl-card:hover::before { transform: scaleX(1); }

.dl-icon { font-size: 1.8rem; }
.dl-info { flex: 1; }
.dl-format {
  display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.62rem;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.5rem;
}
.dl-info h3 {
  font-family: 'Bebas Neue', sans-serif; font-weight: 400;
  font-size: 1.55rem; letter-spacing: 0.04em; color: var(--text); margin-bottom: 0.45rem; line-height: 1;
}
.dl-info p { font-size: 0.88rem; color: var(--text2); line-height: 1.7; font-weight: 300; }
.dl-btn {
  display: inline-block; align-self: flex-start;
  font-family: 'JetBrains Mono', monospace; font-size: 0.72rem;
  letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none;
  padding: 0.55rem 1.2rem;
  border: 1px solid var(--blue); color: var(--blue-lt);
  background: rgba(59,130,246,0.08); border-radius: 2px;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
}
.dl-btn:hover { background: var(--blue); color: #fff; box-shadow: 0 0 20px rgba(59,130,246,0.4); }

/* ── CLOSING ────────────────────────────────────── */
#closing { padding: 9rem 3rem; text-align: center; }
.closing-wrap {
  max-width: 680px; margin: 0 auto;
  display: flex; flex-direction: column; align-items: center; gap: 1.4rem;
}
.closing-eyebrow {
  font-family: 'JetBrains Mono', monospace; font-size: 0.72rem;
  letter-spacing: 0.18em; text-transform: uppercase; color: var(--electric);
}
.closing-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(5rem, 14vw, 10rem); font-weight: 400; line-height: 0.88;
  background: linear-gradient(135deg, var(--blue-lt), var(--purple-lt));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.closing-body { font-size: 1rem; color: var(--text2); line-height: 1.8; font-weight: 300; max-width: 520px; }

/* ── FOOTER ─────────────────────────────────────── */
footer { background: rgba(4,5,12,0.99); border-top: 1px solid var(--border); padding: 2rem 3rem; }
.footer-wrap {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
}
.footer-brand { font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; letter-spacing: 0.14em; color: var(--electric); }
.footer-copy { font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: var(--muted); letter-spacing: 0.06em; }
.footer-nav { display: flex; gap: 2rem; }
.footer-nav a {
  font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: var(--muted);
  text-decoration: none; text-transform: uppercase; letter-spacing: 0.1em; transition: color 0.2s;
}
.footer-nav a:hover { color: var(--electric); }

/* ── REVEAL ─────────────────────────────────────── */
.reveal { opacity: 0; transform: translateY(26px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
.stagger > * { opacity: 0; transform: translateY(18px); transition: opacity 0.5s ease, transform 0.5s ease; }
.stagger.visible > * { opacity: 1; transform: translateY(0); }
.stagger.visible > *:nth-child(1) { transition-delay: 0.04s; }
.stagger.visible > *:nth-child(2) { transition-delay: 0.11s; }
.stagger.visible > *:nth-child(3) { transition-delay: 0.18s; }
.stagger.visible > *:nth-child(4) { transition-delay: 0.25s; }
.stagger.visible > *:nth-child(5) { transition-delay: 0.32s; }
.stagger.visible > *:nth-child(6) { transition-delay: 0.39s; }

/* ── RESPONSIVE ─────────────────────────────────── */
@media (max-width: 960px) {
  nav { padding: 1rem 1.5rem; }
  .nav-links {
    display: none; flex-direction: column;
    position: fixed; top: 58px; left: 0; right: 0;
    background: rgba(5,6,15,0.97); border-bottom: 1px solid var(--border);
    padding: 1.5rem 2rem; gap: 1.2rem; z-index: 99;
  }
  .nav-links.open { display: flex; }
  .nav-links a { font-size: 0.9rem; }
  .hamburger { display: flex; }
  section { padding: 5rem 1.5rem; }
  #hero { grid-template-columns: 1fr; padding: 8rem 1.5rem 3rem; max-width: 100%; gap: 2rem; }
  .hero-right { order: -1; }
  .robot-svg { max-width: 260px; }
  .hero-tech-row { gap: 1.2rem; }
  .cards-grid { grid-template-columns: 1fr 1fr; }
  .dl-grid { grid-template-columns: 1fr; }
  .footer-wrap { flex-direction: column; text-align: center; }
  .footer-nav { justify-content: center; }
}
@media (max-width: 580px) {
  .hero-title { font-size: 3.2rem; }
  .hero-ctas { flex-direction: column; }
  .btn-primary, .btn-ghost { text-align: center; }
  .cards-grid { grid-template-columns: 1fr; }
  .sec-head { flex-direction: column; gap: 0.4rem; }
  .sec-num { font-size: 3rem; }
  .prog-row { grid-template-columns: 20px 1fr; gap: 1rem; }
  .prof-card { flex-direction: column; text-align: center; padding: 2rem 1.5rem; }
  .prof-name { font-size: 1.7rem; }
  .closing-title { font-size: 5rem; }
}
