// ═══════════════════════════════════════════════════
//  CIRCUIT CANVAS BACKGROUND
// ═══════════════════════════════════════════════════
(function () {
  const canvas = document.getElementById('circuit-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const BLUE    = '#3b82f6';
  const ELECTRIC= '#38bdf8';
  const PURPLE  = '#7c3aed';

  let W, H, nodes, signals;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    build();
  }

  function build() {
    nodes = [];
    const cols = Math.floor(W / 88) + 2;
    const rows = Math.floor(H / 88) + 2;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (Math.random() < 0.48) {
          nodes.push({
            x: c * 88 + (Math.random() * 26 - 13),
            y: r * 88 + (Math.random() * 26 - 13),
            isComp: Math.random() < 0.1,
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
        if (dist(n, m) < 195) n.edges.push(m);
      }
    }
    signals = [];
    for (let i = 0; i < 22; i++) spawnSignal();
  }

  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

  function spawnSignal() {
    const n = nodes[Math.floor(Math.random() * nodes.length)];
    if (!n || !n.edges.length) return;
    const roll = Math.random();
    signals.push({
      from: n,
      to: n.edges[Math.floor(Math.random() * n.edges.length)],
      t: 0,
      speed: 0.003 + Math.random() * 0.005,
      color: roll < 0.55 ? BLUE : roll < 0.85 ? ELECTRIC : PURPLE
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // traces
    for (const n of nodes) {
      for (const m of n.edges) {
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(m.x, n.y);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = 'rgba(30,45,74,0.55)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // nodes
    for (const n of nodes) {
      if (n.isComp) {
        ctx.strokeStyle = 'rgba(59,130,246,0.2)';
        ctx.lineWidth = 0.8;
        ctx.strokeRect(n.x - 5, n.y - 5, 10, 10);
      } else {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59,130,246,0.2)';
        ctx.fill();
      }
    }

    // signals
    for (const s of signals) {
      const x = s.from.x + (s.to.x - s.from.x) * s.t;
      const y = s.from.y + (s.to.y - s.from.y) * s.t;

      let r, g, b;
      if (s.color === BLUE)     { r=59;  g=130; b=246; }
      else if (s.color === ELECTRIC) { r=56; g=189; b=248; }
      else                      { r=124; g=58;  b=237; }

      const grad = ctx.createRadialGradient(x, y, 0, x, y, 10);
      grad.addColorStop(0, `rgba(${r},${g},${b},0.7)`);
      grad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fillStyle = grad;
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

// ═══════════════════════════════════════════════════
//  NAV
// ═══════════════════════════════════════════════════
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

// active link
document.querySelectorAll('section[id]').forEach(sec => {
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach(a =>
          a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)
        );
      }
    });
  }, { threshold: 0.3 }).observe(sec);
});

// ═══════════════════════════════════════════════════
//  SCROLL REVEAL
// ═══════════════════════════════════════════════════
new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 })
.observe
? document.querySelectorAll('.reveal, .stagger').forEach(el => {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 }).observe(el);
  })
: null;
