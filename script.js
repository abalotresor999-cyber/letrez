// ---------- Navigation active au scroll ----------

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.dataset.target === id);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
);

sections.forEach((section) => observer.observe(section));

// ---------- Thème clair / sombre ----------

const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
}

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  applyTheme('light');
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ---------- Langue FR / EN ----------

const translations = {
  fr: {
    eyebrow: 'Portfolio',
    role: 'Développeur & entrepreneur digital',
    'nav-profil': 'Profil',
    'nav-parcours': 'Parcours',
    'nav-projets': 'Projets',
    'nav-competences': 'Compétences',
    'nav-contact': 'Contact',
    location: 'Bénin, Cotonou',
    'hero-eyebrow': 'Qui je suis',
    'hero-title': 'Je construis des choses utiles, et je les fais vivre.',
    'hero-text-1': "Étudiant en Système Informatique et Logiciel à l'ESM Bénin, je fabrique aussi bien du code que des stratégies de contenu. Fondateur de LeTrezDigi, une agence digitale où le marketing, la vente et le développement se rencontrent au quotidien.",
    'hero-text-2': "Ce qui me distingue : je ne me contente pas de coder une idée, je sais aussi la vendre, la faire connaître et la faire grandir.",
    'hero-cta': 'Voir mes projets',
    'parcours-eyebrow': 'Parcours',
    'tl-1-year': "Aujourd'hui",
    'tl-1-title': 'Étudiant SIL — ESM Bénin',
    'tl-1-text': 'Formation en Système Informatique et Logiciel, avec une pratique quotidienne du développement web et applicatif.',
    'tl-2-year': 'En parallèle',
    'tl-2-title': 'Fondateur — LeTrezDigi',
    'tl-2-text': 'Agence digitale couvrant le marketing, la création de contenu, le copywriting, la vente et le développement web/app.',
    'tl-3-year': 'Terrain',
    'tl-3-title': 'Créateur de contenu',
    'tl-3-text': 'Gestion de communautés sur Facebook et TikTok, avec une audience cumulée de plusieurs centaines de milliers d\'abonnés.',
    'projets-eyebrow': 'Projets',
    'proj-1-title': 'Trouve ton Stage',
    'proj-1-tag': 'Full-stack',
    'proj-1-text': 'Plateforme de mise en relation entre étudiants africains et entreprises pour des stages et premiers emplois. Firebase, Stripe et assistant IA intégré.',
    'proj-2-title': 'LeTrezDigi',
    'proj-2-tag': 'Agence',
    'proj-2-text': "Agence digitale que j'ai fondée : stratégie de contenu, gestion de communautés (plus de 400k abonnés cumulés) et développement web pour des clients.",
    'proj-3-title': 'Révision BEPC / BAC',
    'proj-3-tag': 'Web app',
    'proj-3-text': 'Application web de révision pour les examens du BEPC et du BAC, avec moteur de quiz et système de gamification.',
    'competences-eyebrow': 'Ce que je fais',
    'skill-1-title': 'Développement',
    'skill-1-text': "HTML, CSS, JavaScript, Python, SQL, Django, Firebase — de l'idée à la mise en ligne.",
    'skill-2-title': 'Marketing digital',
    'skill-2-text': "Stratégie de contenu, croissance d'audience, positionnement de marque sur les réseaux sociaux.",
    'skill-3-title': 'Copywriting & vente',
    'skill-3-text': 'Rédaction persuasive et structuration d\'offres qui convertissent.',
    'skill-4-title': 'Stratégie de marque',
    'skill-4-text': "Identité visuelle, positionnement et structuration de projets, du concept au produit.",
    'contact-eyebrow': 'Contact',
    'contact-title': 'Un projet, une collaboration ou une opportunité ? Échangeons.',
    'contact-cta': 'Me contacter',
    'footer-note': '© 2026 Trésor Abalo — Tous droits réservés.'
  },
  en: {
    eyebrow: 'Portfolio',
    role: 'Developer & digital entrepreneur',
    'nav-profil': 'Profile',
    'nav-parcours': 'Journey',
    'nav-projets': 'Projects',
    'nav-competences': 'Skills',
    'nav-contact': 'Contact',
    location: 'Benin, Cotonou',
    'hero-eyebrow': 'Who I am',
    'hero-title': 'I build useful things, and I bring them to life.',
    'hero-text-1': "A Computer Systems and Software student at ESM Benin, I build both code and content strategies. Founder of LeTrezDigi, a digital agency where marketing, sales, and development meet every day.",
    'hero-text-2': "What sets me apart: I don't just code an idea, I know how to sell it, promote it, and grow it.",
    'hero-cta': 'See my projects',
    'parcours-eyebrow': 'Journey',
    'tl-1-year': 'Today',
    'tl-1-title': 'SIL Student — ESM Benin',
    'tl-1-text': 'Training in Computer Systems and Software, with daily practice in web and app development.',
    'tl-2-year': 'In parallel',
    'tl-2-title': 'Founder — LeTrezDigi',
    'tl-2-text': 'Digital agency covering marketing, content creation, copywriting, sales, and web/app development.',
    'tl-3-year': 'On the ground',
    'tl-3-title': 'Content creator',
    'tl-3-text': 'Community management on Facebook and TikTok, with a combined audience of several hundred thousand followers.',
    'projets-eyebrow': 'Projects',
    'proj-1-title': 'Trouve ton Stage',
    'proj-1-tag': 'Full-stack',
    'proj-1-text': 'A platform connecting African students with companies for internships and first jobs. Built with Firebase, Stripe, and an integrated AI assistant.',
    'proj-2-title': 'LeTrezDigi',
    'proj-2-tag': 'Agency',
    'proj-2-text': "A digital agency I founded: content strategy, community management (400k+ combined followers), and web development for clients.",
    'proj-3-title': 'BEPC / BAC Revision',
    'proj-3-tag': 'Web app',
    'proj-3-text': 'A web app for exam revision (BEPC and BAC), featuring a quiz engine and a gamification system.',
    'competences-eyebrow': 'What I do',
    'skill-1-title': 'Development',
    'skill-1-text': 'HTML, CSS, JavaScript, Python, SQL, Django, Firebase — from idea to deployment.',
    'skill-2-title': 'Digital marketing',
    'skill-2-text': 'Content strategy, audience growth, brand positioning on social media.',
    'skill-3-title': 'Copywriting & sales',
    'skill-3-text': 'Persuasive writing and offer structuring that converts.',
    'skill-4-title': 'Brand strategy',
    'skill-4-text': 'Visual identity, positioning, and project structuring, from concept to product.',
    'contact-eyebrow': 'Contact',
    'contact-title': 'A project, a collaboration, or an opportunity? Let\'s talk.',
    'contact-cta': 'Contact me',
    'footer-note': '© 2026 Trésor Abalo — All rights reserved.'
  }
};

const langToggle = document.getElementById('lang-toggle');
const htmlEl = document.documentElement;

function applyLang(lang) {
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  htmlEl.setAttribute('lang', lang);
  langToggle.textContent = lang.toUpperCase();
  localStorage.setItem('portfolio-lang', lang);
}

const savedLang = localStorage.getItem('portfolio-lang') || 'fr';
applyLang(savedLang);

langToggle.addEventListener('click', () => {
  const current = htmlEl.getAttribute('lang');
  applyLang(current === 'fr' ? 'en' : 'fr');
});

// ---------- Menu mobile ----------

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function closeMenu() {
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
  menuToggle.setAttribute('aria-expanded', 'false');
}

function openMenu() {
  sidebar.classList.add('open');
  overlay.classList.add('visible');
  menuToggle.setAttribute('aria-expanded', 'true');
}

menuToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu);

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
