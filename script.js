/* ═══════════════════════════════════════════
   CIRCUIT CANVAS BACKGROUND
═══════════════════════════════════════════ */
(function () {
  const canvas = document.getElementById('circuit-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const GREEN = '#39d353';
  const AMBER = '#f0a500';

  let W, H, nodes, signals;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    build();
  }

  function build() {
    nodes = [];
    const cols = Math.floor(W / 85) + 2;
    const rows = Math.floor(H / 85) + 2;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (Math.random() < 0.5) {
          nodes.push({
            x: c * 85 + (Math.random() * 24 - 12),
            y: r * 85 + (Math.random() * 24 - 12),
            isComp: Math.random() < 0.12,
            edges: []
          });
        }
      }
    }
    for (const n of nodes) {
      const sorted = nodes
        .filter(m => m !== n)
        .sort((a, b) => dist(n, a) - dist(n, b))
        .slice(0, 2 + Math.floor(Math.random() * 2));
      for (const m of sorted) {
        if (dist(n, m) < 190) n.edges.push(m);
      }
    }
    signals = [];
    for (let i = 0; i < 20; i++) spawnSignal();
  }

  function dist(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function spawnSignal() {
    const n = nodes[Math.floor(Math.random() * nodes.length)];
    if (!n || !n.edges.length) return;
    signals.push({
      from: n,
      to: n.edges[Math.floor(Math.random() * n.edges.length)],
      t: 0,
      speed: 0.004 + Math.random() * 0.005,
      color: Math.random() < 0.82 ? GREEN : AMBER
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // draw traces
    for (const n of nodes) {
      for (const m of n.edges) {
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(m.x, n.y);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = 'rgba(57,211,83,0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // draw nodes
    for (const n of nodes) {
      if (n.isComp) {
        ctx.strokeStyle = 'rgba(57,211,83,0.22)';
        ctx.lineWidth = 1;
        ctx.strokeRect(n.x - 5, n.y - 5, 10, 10);
      } else {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(57,211,83,0.2)';
        ctx.fill();
      }
    }

    // draw signals
    for (const s of signals) {
      const x = s.from.x + (s.to.x - s.from.x) * s.t;
      const y = s.from.y + (s.to.y - s.from.y) * s.t;

      const g = ctx.createRadialGradient(x, y, 0, x, y, 9);
      g.addColorStop(0, s.color === GREEN ? 'rgba(57,211,83,0.65)' : 'rgba(240,165,0,0.65)');
      g.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.fill();

      s.t += s.speed;
      if (s.t >= 1) {
        s.from = s.to;
        const nexts = s.to.edges.filter(e => e !== s.from);
        s.to = nexts.length
          ? nexts[Math.floor(Math.random() * nexts.length)]
          : nodes[Math.floor(Math.random() * nodes.length)];
        s.t = 0;
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();

/* ═══════════════════════════════════════════
   NAV
═══════════════════════════════════════════ */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* active link */
document.querySelectorAll('section[id]').forEach(sec => {
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { threshold: 0.3 }).observe(sec);
});

/* ═══════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .stagger').forEach(el => revealObs.observe(el));
