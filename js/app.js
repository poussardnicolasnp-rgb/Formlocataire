// ============================================================
// FORMLOCATAIRE — Application Logic
// ============================================================
'use strict';

// ─────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────
let state = {
  currentView: 'landing',
  currentChapterId: null,
  currentTab: 'text',   // 'text' | 'audio'
  quiz: {
    chapterId: null,
    currentQ: 0,
    selected: null,
    answered: false,
    answers: [],
    correct: 0
  },
  audio: {
    playing: false,
    progress: 0,
    elapsed: 0,
    total: 180,
    timer: null,
    waveTimer: null
  }
};

// ─────────────────────────────────────────────────────────────
// STORAGE HELPERS
// ─────────────────────────────────────────────────────────────
function getUser() {
  try { return JSON.parse(localStorage.getItem('fl_user')); } catch { return null; }
}
function saveUser(u) {
  localStorage.setItem('fl_user', JSON.stringify(u));
}
function getAllUsers() {
  try { return JSON.parse(localStorage.getItem('fl_users')) || {}; } catch { return {}; }
}
function saveAllUsers(users) {
  localStorage.setItem('fl_users', JSON.stringify(users));
}
function getUserData(email) {
  const users = getAllUsers();
  return users[email] || null;
}
function saveUserData(email, data) {
  const users = getAllUsers();
  users[email] = data;
  saveAllUsers(users);
}
function getCurrentUserData() {
  const user = getUser();
  if (!user) return null;
  return getUserData(user.email);
}
function updateCurrentUserData(data) {
  const user = getUser();
  if (!user) return;
  saveUserData(user.email, data);
}
function initUserData(email, name) {
  return {
    email, name,
    score: 0,
    chaptersProgress: {}, // { 1: { textDone, audioDone, quizDone, score }, ... }
    badges: [],
    createdAt: new Date().toISOString(),
    certDate: null
  };
}

// ─────────────────────────────────────────────────────────────
// COMPUTED GETTERS
// ─────────────────────────────────────────────────────────────
function getProgress() {
  const data = getCurrentUserData();
  if (!data) return { pct: 0, completedChapters: 0 };
  const total = COURSE_DATA.chapters.length;
  let done = 0;
  COURSE_DATA.chapters.forEach(ch => {
    const p = data.chaptersProgress[ch.id];
    if (p && p.quizDone) done++;
  });
  return { pct: Math.round((done / total) * 100), completedChapters: done, total };
}

function isChapterUnlocked(chapterId) {
  if (chapterId === 1) return true;
  const data = getCurrentUserData();
  if (!data) return false;
  const prev = data.chaptersProgress[chapterId - 1];
  return prev && prev.quizDone;
}

function isChapterComplete(chapterId) {
  const data = getCurrentUserData();
  if (!data) return false;
  const p = data.chaptersProgress[chapterId];
  return p && p.quizDone;
}

function isFullyCertified() {
  const { completedChapters, total } = getProgress();
  return completedChapters === total;
}

function getBadgeForChapter(chapterId) {
  const ch = COURSE_DATA.chapters.find(c => c.id === chapterId);
  return ch ? ch.badgeId : null;
}

// ─────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────
function navigate(view, params = {}) {
  stopAudio();
  state.currentView = view;
  if (params.chapterId) state.currentChapterId = params.chapterId;
  if (params.tab) state.currentTab = params.tab;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─────────────────────────────────────────────────────────────
// MAIN RENDER
// ─────────────────────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');
  const user = getUser();

  switch (state.currentView) {
    case 'landing':    app.innerHTML = renderLanding(); break;
    case 'login':      app.innerHTML = renderAuth('login'); break;
    case 'register':   app.innerHTML = renderAuth('register'); break;
    case 'dashboard':  app.innerHTML = renderDashboard(); break;
    case 'chapter':    app.innerHTML = renderChapter(); break;
    case 'quiz':       app.innerHTML = renderQuizPage(); break;
    case 'quiz-result':app.innerHTML = renderQuizResult(); break;
    case 'certificate':app.innerHTML = renderCertificate(); break;
    case 'resources':  app.innerHTML = renderResources(); break;
    default:           app.innerHTML = renderLanding();
  }

  attachEventListeners();
  if (state.currentView === 'chapter' && state.currentTab === 'audio') {
    initAudioPlayer();
  }
}

// ─────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────
function renderNavbar(activeView = '') {
  const user = getUser();
  const data = getCurrentUserData();
  const score = data ? data.score : 0;
  const avatarLetter = user ? user.name.charAt(0).toUpperCase() : '?';

  if (!user) {
    return `
      <nav class="navbar">
        <div class="container">
          <div class="nav-logo" onclick="navigate('landing')">
            <span class="nav-logo-icon">🏡</span>
            <span>FormLocataire</span>
          </div>
          <div class="nav-links">
            <button class="nav-link" onclick="navigate('landing')">Accueil</button>
            <button class="btn btn-outline btn-sm" onclick="navigate('login')">Connexion</button>
            <button class="btn btn-primary btn-sm" onclick="navigate('register')">S'inscrire</button>
          </div>
        </div>
      </nav>`;
  }

  return `
    <nav class="navbar">
      <div class="container">
        <div class="nav-logo" onclick="navigate('dashboard')">
          <span class="nav-logo-icon">🏡</span>
          <span>FormLocataire</span>
        </div>
        <div class="nav-links">
          <button class="nav-link ${activeView === 'dashboard' ? 'active' : ''}" onclick="navigate('dashboard')">
            <i class="fa fa-th-large"></i> Tableau de bord
          </button>
          <button class="nav-link ${activeView === 'resources' ? 'active' : ''}" onclick="navigate('resources')">
            <i class="fa fa-book-open"></i> Ressources
          </button>
          ${isFullyCertified() ? `<button class="nav-link ${activeView === 'certificate' ? 'active' : ''}" onclick="navigate('certificate')"><i class="fa fa-certificate"></i> Mon Certificat</button>` : ''}
        </div>
        <div class="nav-user">
          <div class="nav-score"><i class="fa fa-star"></i> ${score} pts</div>
          <div class="nav-avatar" title="${user.name}" onclick="showUserMenu()">${avatarLetter}</div>
        </div>
      </div>
    </nav>`;
}

// ─────────────────────────────────────────────────────────────
// LANDING PAGE
// ─────────────────────────────────────────────────────────────
function renderLanding() {
  return `
    ${renderNavbar()}
    <div class="landing-page page-content">

      <!-- HERO -->
      <section class="hero">
        <div class="hero-badge"><i class="fa fa-trophy"></i> L'atout n°1 de votre dossier de location</div>
        <h1 class="hero-title">Décrochez l'appartement<br><span>avant les autres candidats</span></h1>
        <p class="hero-subtitle">Dans un marché locatif ultra-concurrentiel, un certificat d'entretien du logement dans votre dossier fait toute la différence. Devenez le candidat que tout propriétaire choisit en premier.</p>
        <div class="hero-cta-group">
          <button class="btn btn-primary btn-lg" onclick="navigate('register')">
            <i class="fa fa-medal"></i> Obtenir mon certificat
          </button>
          <button class="btn btn-outline btn-lg" onclick="document.getElementById('how-it-works').scrollIntoView({behavior:'smooth'})">
            <i class="fa fa-circle-info"></i> Comment ça marche ?
          </button>
        </div>
        <div class="hero-social-proof">
          <div class="social-proof-item"><i class="fa fa-check-circle"></i> Certificat nominatif officiel</div>
          <div class="social-proof-item"><i class="fa fa-check-circle"></i> Formation complète incluse</div>
          <div class="social-proof-item"><i class="fa fa-check-circle"></i> Obtenu en 1 à 2 jours</div>
          <div class="social-proof-item"><i class="fa fa-check-circle"></i> Garantie 30 jours</div>
        </div>
      </section>

      <!-- PROBLEM SECTION -->
      <section style="padding:60px 20px;background:var(--text);">
        <div class="container-sm" style="text-align:center;color:white;">
          <div style="font-size:2rem;margin-bottom:16px;">😰</div>
          <h2 style="font-size:clamp(1.3rem,3vw,1.9rem);font-weight:800;margin-bottom:16px;line-height:1.3;">
            Vous cherchez un appartement dans une ville tendue ?
          </h2>
          <p style="font-size:1rem;opacity:.8;line-height:1.8;margin-bottom:28px;">
            Un seul appartement = <strong style="color:var(--accent)">30, 50, parfois 100 candidats.</strong><br>
            Des dossiers identiques : mêmes revenus, mêmes garanties, même profil.<br>
            Le propriétaire ne sait pas qui choisir. Alors il choisit… au feeling.
          </p>
          <div style="background:rgba(255,255,255,.08);border-radius:var(--radius-lg);padding:24px;border:1px solid rgba(255,255,255,.15)">
            <div style="font-size:1.1rem;font-weight:700;color:var(--accent);margin-bottom:8px;">Et si votre dossier montrait, noir sur blanc, que vous êtes un locataire responsable ?</div>
            <div style="font-size:.9rem;opacity:.75;">C'est exactement ce que fait le certificat FormLocataire.</div>
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section id="how-it-works" style="padding:80px 20px;background:var(--bg);">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Comment ça marche ?</div>
            <h2 class="section-title">3 étapes pour un dossier imbattable</h2>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px;margin-top:40px;position:relative;">
            ${[
              ["1", "📚", "Vous suivez la formation", "6 chapitres clairs sur l'entretien d'un logement. Contenu audio + texte, à votre rythme, en 1 à 2 jours."],
              ["2", "🧠", "Vous validez les quiz", "Chaque chapitre se termine par un quiz. 100% de réussite requis — cela garantit une vraie maîtrise du sujet."],
              ["3", "🏆", "Vous obtenez votre certificat", "Un certificat nominatif, daté, avec votre score. À glisser dans votre dossier de location dès aujourd'hui."]
            ].map(([num, icon, title, desc]) => `
              <div style="background:var(--bg-card);border-radius:var(--radius-lg);padding:28px;border:1px solid var(--border);text-align:center;position:relative;">
                <div style="position:absolute;top:-16px;left:50%;transform:translateX(-50%);width:32px;height:32px;border-radius:50%;background:var(--primary);color:white;font-weight:800;font-size:.9rem;display:flex;align-items:center;justify-content:center;">${num}</div>
                <div style="font-size:2.5rem;margin:12px 0 12px">${icon}</div>
                <h3 style="font-size:1rem;font-weight:700;color:var(--text);margin-bottom:8px">${title}</h3>
                <p style="font-size:.875rem;color:var(--text-muted);line-height:1.6">${desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- BENEFITS -->
      <section class="benefits-section" style="background:linear-gradient(180deg,var(--primary-light) 0%,#fff 100%);">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Pourquoi ça fonctionne ?</div>
            <h2 class="section-title">Ce que votre certificat dit à votre futur propriétaire</h2>
            <p class="section-subtitle">Un certificat dans un dossier, c'est un message clair que les autres candidats n'envoient pas.</p>
          </div>
          <div class="benefits-grid">
            <div class="benefit-card blue">
              <div class="benefit-icon blue">🥇</div>
              <h3 class="benefit-title">Vous vous démarquez immédiatement</h3>
              <p class="benefit-desc">Dans une pile de 40 dossiers identiques, le vôtre sort du lot. Un propriétaire qui voit ce certificat comprend en 3 secondes que vous prenez la location au sérieux.</p>
            </div>
            <div class="benefit-card green">
              <div class="benefit-icon green">🤝</div>
              <h3 class="benefit-title">Vous rassurez le propriétaire</h3>
              <p class="benefit-desc">La peur n°1 d'un propriétaire : un locataire qui dégrade son bien. Votre certificat prouve que vous connaissez vos obligations et que vous saurez prendre soin du logement.</p>
            </div>
            <div class="benefit-card amber">
              <div class="benefit-icon amber">💼</div>
              <h3 class="benefit-title">Vous montrez du sérieux et de la maturité</h3>
              <p class="benefit-desc">Se former avant même d'emménager, c'est une démarche rare et appréciée. Cela dit beaucoup sur votre personnalité — et c'est souvent ce qui fait basculer la décision.</p>
            </div>
          </div>

          <!-- Certificate Preview Banner -->
          <div style="margin-top:48px;background:linear-gradient(135deg,var(--primary) 0%,#1D4ED8 100%);border-radius:var(--radius-xl);padding:36px;display:flex;align-items:center;gap:28px;flex-wrap:wrap;color:white;">
            <div style="font-size:56px;flex-shrink:0;">🏆</div>
            <div style="flex:1;min-width:240px;">
              <div style="font-size:.8rem;text-transform:uppercase;letter-spacing:.1em;opacity:.75;margin-bottom:6px;">Ce que vous allez recevoir</div>
              <div style="font-size:1.3rem;font-weight:800;margin-bottom:6px;">Un certificat nominatif à votre nom</div>
              <div style="font-size:.9rem;opacity:.85;line-height:1.6;">Avec votre nom complet · La date d'obtention · La mention "100% — Excellence" · Un numéro de certificat unique · Imprimable ou envoyable en PDF</div>
            </div>
            <button class="btn btn-lg" style="background:white;color:var(--primary);font-weight:800;flex-shrink:0;" onclick="navigate('register')">
              Obtenir le mien →
            </button>
          </div>
        </div>
      </section>

      <!-- FOR WHOM — TENANTS -->
      <section class="forwhom-section">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Pour qui ?</div>
            <h2 class="section-title">Deux publics, un même besoin de confiance</h2>
            <p class="section-subtitle">Que vous cherchiez un appartement ou que vous gériez un patrimoine locatif, FormLocataire répond à votre problème.</p>
          </div>

          <!-- Toggle tabs -->
          <div style="display:flex;gap:12px;justify-content:center;margin-bottom:36px;flex-wrap:wrap;">
            <button id="tab-tenant" onclick="switchAudience('tenant')" class="btn btn-primary">🔑 Je cherche un logement</button>
            <button id="tab-pro" onclick="switchAudience('pro')" class="btn btn-ghost" style="border:2px solid var(--border)">🏢 Je suis professionnel de l'immobilier</button>
          </div>

          <!-- TENANT panel -->
          <div id="panel-tenant">
            <div style="text-align:center;margin-bottom:24px;">
              <div style="font-size:1rem;font-weight:700;color:var(--text);margin-bottom:4px;">Le certificat parfait pour renforcer votre dossier de location</div>
              <div style="font-size:.875rem;color:var(--text-muted)">Peu importe votre profil, ce certificat vous donne un avantage décisif sur les autres candidats.</div>
            </div>
            <div class="forwhom-grid">
              <div class="forwhom-item"><i class="fa fa-user-graduate"></i> Étudiant cherchant sa première location</div>
              <div class="forwhom-item"><i class="fa fa-briefcase"></i> Jeune actif en début de carrière</div>
              <div class="forwhom-item"><i class="fa fa-globe"></i> Personne d'origine étrangère, nouveaux codes locatifs français à découvrir</div>
              <div class="forwhom-item"><i class="fa fa-map-location-dot"></i> Personne en mobilité professionnelle</div>
              <div class="forwhom-item"><i class="fa fa-people-roof"></i> Famille à la recherche d'un appartement</div>
              <div class="forwhom-item"><i class="fa fa-house-crack"></i> Candidat ayant déjà essuyé des refus</div>
              <div class="forwhom-item"><i class="fa fa-city"></i> Candidat en zone ultra-tendue (Paris, Lyon, Bordeaux…)</div>
              <div class="forwhom-item"><i class="fa fa-rotate"></i> Locataire en cours de déménagement</div>
            </div>
            <div style="margin-top:28px;background:var(--primary-light);border-radius:var(--radius-lg);padding:20px 24px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
              <div style="font-size:1.5rem">💡</div>
              <div style="flex:1">
                <div style="font-weight:700;color:var(--primary);margin-bottom:2px">Spécialement utile si vous venez d'un autre pays</div>
                <div style="font-size:.875rem;color:var(--text-muted)">Les attentes des propriétaires français ne sont pas universelles. Entretien de la chaudière, joints de salle de bain, grille de vétusté… cette formation vous explique tout ce que les autres candidats savent déjà — ou pensent savoir.</div>
              </div>
            </div>
          </div>

          <!-- PRO panel (hidden by default) -->
          <div id="panel-pro" style="display:none">
            <div style="text-align:center;margin-bottom:32px;">
              <div style="font-size:1rem;font-weight:700;color:var(--text);margin-bottom:4px;">Un outil clé pour vos locataires — et une valeur ajoutée pour vos propriétaires</div>
              <div style="font-size:.875rem;color:var(--text-muted)">Régies, agences, bailleurs sociaux : FormLocataire s'intègre à votre processus de sélection et de gestion locative.</div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-bottom:32px;">
              ${[
                ["🏢","Régies immobilières","Recommandez la formation à vos candidats. Ceux qui la suivent arrivent mieux préparés, causent moins de litiges et génèrent moins d'interventions d'urgence."],
                ["🔑","Propriétaires bailleurs","Exigez le certificat dans les dossiers de candidature. Un locataire certifié vous rassure sur l'entretien de votre bien sur la durée."],
                ["🏘️","Bailleurs sociaux","Intégrez la formation à votre parcours d'accueil des nouveaux locataires, notamment pour les publics éloignés des codes locatifs français."],
                ["📋","Gestionnaires de patrimoine","Faites de la certification un standard de votre charte locataire. Réduisez les dégradations et les conflits à la sortie."]
              ].map(([icon, title, desc]) => `
                <div style="background:var(--bg-card);border-radius:var(--radius-lg);padding:24px;border:1px solid var(--border);">
                  <div style="font-size:2rem;margin-bottom:12px">${icon}</div>
                  <div style="font-weight:700;color:var(--text);margin-bottom:8px">${title}</div>
                  <div style="font-size:.875rem;color:var(--text-muted);line-height:1.6">${desc}</div>
                </div>
              `).join('')}
            </div>

            <!-- Charte idea -->
            <div style="background:linear-gradient(135deg,var(--primary) 0%,#1D4ED8 100%);border-radius:var(--radius-xl);padding:32px;color:white;display:flex;gap:24px;align-items:center;flex-wrap:wrap;">
              <div style="flex:1;min-width:240px;">
                <div style="font-size:.8rem;text-transform:uppercase;letter-spacing:.1em;opacity:.7;margin-bottom:8px">Idée charte partenaire</div>
                <div style="font-size:1.2rem;font-weight:800;margin-bottom:10px">« Charte du locataire responsable »</div>
                <div style="font-size:.9rem;opacity:.85;line-height:1.7">Créez une charte co-brandée avec FormLocataire à remettre à chaque nouveau locataire. Une façon élégante de fixer les attentes dès le premier jour et de valoriser votre image de gestionnaire sérieux.</div>
              </div>
              <div style="flex-shrink:0">
                <a href="mailto:contact@formlocataire.fr" class="btn btn-lg" style="background:white;color:var(--primary);font-weight:800;display:inline-flex;align-items:center;gap:8px;">
                  <i class="fa fa-envelope"></i> Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WHAT YOU'LL LEARN -->
      <section class="learn-section">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Programme de formation</div>
            <h2 class="section-title">Une formation sérieuse pour un certificat crédible</h2>
            <p class="section-subtitle">6 chapitres complets sur l'entretien d'un logement locatif — de vos obligations légales à l'état des lieux de sortie.</p>
          </div>
          <div class="chapters-preview-grid">
            ${COURSE_DATA.chapters.map(ch => `
              <div class="chapter-preview-card">
                <div class="chapter-num">${ch.id}</div>
                <div class="chapter-preview-info">
                  <h4>${ch.icon} ${ch.title}</h4>
                  <p>${ch.subtitle} · ${ch.duration}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <div style="margin-top:28px;text-align:center;color:var(--text-muted);font-size:.9rem;">
            <i class="fa fa-lock-open" style="color:var(--secondary)"></i> Chaque chapitre est débloqué progressivement · Quiz à 100% requis pour valider
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS -->
      <section class="testimonials-section">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Témoignages</div>
            <h2 class="section-title">Ils ont décroché leur appartement grâce au certificat</h2>
          </div>
          <div class="testimonials-grid">
            <div class="testimonial-card">
              <div class="stars">★★★★★</div>
              <p class="testimonial-text">« J'avais visité 11 appartements sans succès. J'ai ajouté le certificat FormLocataire à mon dossier et j'ai eu une réponse positive dès la visite suivante. Le propriétaire m'a dit que c'était "rassurant de voir quelqu'un d'aussi sérieux". »</p>
              <div class="testimonial-author">
                <div class="author-avatar">KL</div>
                <div>
                  <div class="author-name">Kévin L.</div>
                  <div class="author-role">Alternant, Paris 15e</div>
                </div>
              </div>
            </div>
            <div class="testimonial-card">
              <div class="stars">★★★★★</div>
              <p class="testimonial-text">« En tant qu'étudiante sans garant solide, mon dossier était souvent rejeté. Le certificat a changé la donne : l'agence m'a dit que c'était "la première fois qu'elle voyait ça dans un dossier" et m'a proposé l'appartement dans la semaine. »</p>
              <div class="testimonial-author">
                <div class="author-avatar">AM</div>
                <div>
                  <div class="author-name">Ambre M.</div>
                  <div class="author-role">Étudiante en master, Lyon</div>
                </div>
              </div>
            </div>
            <div class="testimonial-card">
              <div class="stars">★★★★★</div>
              <p class="testimonial-text">« On était en concurrence avec 30 dossiers pour un T3 à Bordeaux. Le propriétaire nous a choisis car — je le cite — "vous êtes les seuls à avoir prouvé que vous savez entretenir un logement". La formation vaut vraiment son prix. »</p>
              <div class="testimonial-author">
                <div class="author-avatar">RC</div>
                <div>
                  <div class="author-name">Romain & Clara</div>
                  <div class="author-role">Couple, Bordeaux</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PRICING -->
      <section class="pricing-section" id="pricing-section">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Tarifs</div>
            <h2 class="section-title">Moins cher qu'un mois de loyer perdu</h2>
            <p class="section-subtitle">Combien vous coûte un mois de recherche supplémentaire ? Bien plus que 29€.</p>
          </div>
          <div class="pricing-grid">
            <div class="pricing-card">
              <div class="pricing-name">Essentiel</div>
              <div class="pricing-price">29€ <small>une fois</small></div>
              <p class="pricing-desc">Le certificat + la formation complète</p>
              <div class="pricing-features">
                <div class="pricing-feature"><i class="fa fa-check-circle"></i> Certificat nominatif imprimable</div>
                <div class="pricing-feature"><i class="fa fa-check-circle"></i> 6 chapitres de formation complète</div>
                <div class="pricing-feature"><i class="fa fa-check-circle"></i> Quiz interactifs (100% requis)</div>
                <div class="pricing-feature"><i class="fa fa-check-circle"></i> Ressources pratiques incluses</div>
                <div class="pricing-feature"><i class="fa fa-check-circle"></i> Accès à vie</div>
              </div>
              <button class="btn btn-outline w-full" onclick="navigate('register')">Commencer →</button>
            </div>
            <div class="pricing-card featured">
              <div class="pricing-tag">⭐ Le plus populaire</div>
              <div class="pricing-name">Premium</div>
              <div class="pricing-price">49€ <small>une fois</small></div>
              <p class="pricing-desc">Tout pour décrocher ET réussir votre location</p>
              <div class="pricing-features">
                <div class="pricing-feature"><i class="fa fa-check-circle"></i> Tout ce qui est inclus dans Essentiel</div>
                <div class="pricing-feature"><i class="fa fa-check-circle"></i> Lettre d'accompagnement du certificat</div>
                <div class="pricing-feature"><i class="fa fa-check-circle"></i> Checklist état des lieux PDF</div>
                <div class="pricing-feature"><i class="fa fa-check-circle"></i> Modèles de courriers au propriétaire</div>
                <div class="pricing-feature"><i class="fa fa-check-circle"></i> Mises à jour incluses à vie</div>
              </div>
              <button class="btn btn-primary w-full" onclick="navigate('register')">Choisir Premium →</button>
            </div>
          </div>
          <div class="pricing-guarantee">
            <i class="fa fa-shield-halved" style="font-size:1.4rem"></i>
            <span><strong>Garantie satisfait ou remboursé 30 jours.</strong> Si la formation ne vous convient pas, remboursement intégral sans questions.</span>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="faq-section">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">FAQ</div>
            <h2 class="section-title">Questions fréquentes</h2>
          </div>
          <div class="faq-list">
            ${[
              ["Est-ce que les propriétaires connaissent ce certificat ?", "De plus en plus ! Mais même s'ils ne le connaissent pas encore, c'est un avantage : vous serez le premier candidat à leur présenter un certificat d'entretien du logement. La démarche parle d'elle-même."],
              ["Combien de temps pour obtenir le certificat ?", "La formation se divise en 6 chapitres de 15 à 22 minutes chacun. La plupart des candidats obtiennent leur certificat en 1 à 2 jours, à leur rythme."],
              ["Puis-je joindre le certificat à mon dossier de location ?", "Absolument ! Le certificat est conçu pour ça : il est imprimable, exportable en PDF, et il mentionne votre nom complet, la date d'obtention et un numéro unique. Il s'intègre parfaitement à un dossier papier ou numérique (DossierFacile, etc.)."],
              ["Faut-il des connaissances particulières ?", "Non, la formation part de zéro. Elle est accessible à tous, en langage simple et illustré d'exemples concrets."],
              ["Que se passe-t-il si je rate un quiz ?", "Vous recommencez autant de fois que nécessaire. Le score de 100% est requis — c'est ce qui donne de la valeur au certificat."],
              ["La formation m'aide-t-elle aussi une fois dans le logement ?", "Oui ! En plus de renforcer votre dossier, vous repartirez avec une méthode claire pour entretenir votre logement, éviter les litiges et récupérer votre caution en totalité à la sortie."]
            ].map(([q, a], i) => `
              <div class="faq-item">
                <button class="faq-question" onclick="toggleFaq(${i})">
                  ${q}
                  <i class="fa fa-plus" id="faq-icon-${i}"></i>
                </button>
                <div class="faq-answer" id="faq-answer-${i}">${a}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section style="padding:72px 20px; text-align:center; background:linear-gradient(135deg,var(--primary) 0%,#1D4ED8 100%); color:white;">
        <div class="container-sm">
          <div style="font-size:3rem;margin-bottom:16px;">🏆</div>
          <h2 style="font-size:clamp(1.5rem,4vw,2.2rem);font-weight:900;margin-bottom:12px;line-height:1.2;">Le prochain appartement que vous visitez<br>pourrait être le bon.</h2>
          <p style="font-size:1rem;opacity:.85;margin-bottom:12px;">Ne laissez plus la décision au hasard. Donnez à votre dossier l'argument que les autres n'ont pas.</p>
          <p style="font-size:1.1rem;font-weight:700;opacity:.95;margin-bottom:32px;">Obtenez votre certificat en 1 à 2 jours — pour 29€.</p>
          <button class="btn btn-lg" style="background:white;color:var(--primary);font-weight:800;" onclick="navigate('register')">
            <i class="fa fa-medal"></i> Obtenir mon certificat maintenant
          </button>
          <div style="margin-top:16px;font-size:.8rem;opacity:.65;">Garantie satisfait ou remboursé 30 jours · Accès immédiat · Sans engagement</div>
        </div>
      </section>

      <footer class="landing-footer">
        <p>© 2025 FormLocataire · Tous droits réservés · <a href="#">Mentions légales</a> · <a href="#">CGV</a></p>
      </footer>
    </div>`;
}

// ─────────────────────────────────────────────────────────────
// AUTH PAGES
// ─────────────────────────────────────────────────────────────
function renderAuth(type) {
  const isLogin = type === 'login';
  return `
    ${renderNavbar()}
    <div class="auth-page">
      <div class="auth-card">
        <div class="auth-logo">
          <div class="auth-logo-icon">🏡</div>
          <div class="auth-logo-text">FormLocataire</div>
        </div>
        <h1 class="auth-title">${isLogin ? 'Bon retour !' : 'Créer votre compte'}</h1>
        <p class="auth-subtitle">${isLogin ? 'Connectez-vous pour reprendre votre formation.' : 'Inscrivez-vous pour accéder à la formation complète.'}</p>

        <form class="auth-form" onsubmit="handleAuth(event, '${type}')">
          ${!isLogin ? `
            <div class="form-group">
              <label class="form-label">Votre prénom et nom</label>
              <input type="text" class="form-input" id="auth-name" placeholder="Marie Dupont" required minlength="2">
            </div>
          ` : ''}
          <div class="form-group">
            <label class="form-label">Adresse email</label>
            <input type="email" class="form-input" id="auth-email" placeholder="marie@exemple.fr" required>
          </div>
          <div class="form-group">
            <label class="form-label">Mot de passe</label>
            <input type="password" class="form-input" id="auth-password" placeholder="${isLogin ? 'Votre mot de passe' : 'Minimum 6 caractères'}" required minlength="6">
          </div>
          <div id="auth-error" style="display:none" class="form-error"></div>
          <button type="submit" class="btn btn-primary w-full btn-lg">
            ${isLogin ? '<i class="fa fa-right-to-bracket"></i> Se connecter' : '<i class="fa fa-user-plus"></i> Créer mon compte gratuit'}
          </button>
        </form>

        <div class="auth-switch">
          ${isLogin
            ? `Pas encore de compte ? <button onclick="navigate('register')">S'inscrire gratuitement</button>`
            : `Déjà un compte ? <button onclick="navigate('login')">Se connecter</button>`
          }
        </div>
        <div style="margin-top:16px;text-align:center">
          <button class="btn btn-ghost btn-sm" onclick="navigate('landing')"><i class="fa fa-arrow-left"></i> Retour à l'accueil</button>
        </div>
      </div>
    </div>`;
}

function handleAuth(e, type) {
  e.preventDefault();
  const email = document.getElementById('auth-email').value.trim().toLowerCase();
  const password = document.getElementById('auth-password').value;
  const errorEl = document.getElementById('auth-error');

  const showError = msg => {
    errorEl.textContent = msg;
    errorEl.style.display = 'block';
  };
  errorEl.style.display = 'none';

  if (type === 'register') {
    const name = document.getElementById('auth-name').value.trim();
    const users = getAllUsers();
    if (users[email]) { showError('Un compte existe déjà avec cet email.'); return; }
    const data = initUserData(email, name);
    saveUserData(email, data);
    saveUser({ email, name, password });
    showToast(`Bienvenue ${name} ! 🎉`, 'success');
    navigate('dashboard');
  } else {
    const user = getUser();
    const users = getAllUsers();
    const storedUser = Object.values(users).find ? null : null;
    // Simple: check if user registered with this email/password combination
    // We store the password in the user session for simplicity (educational app)
    let found = null;
    const allSessions = JSON.parse(localStorage.getItem('fl_sessions') || '{}');
    if (allSessions[email] && allSessions[email] === password) {
      found = { email, name: getUserData(email)?.name || email };
    } else if (!allSessions[email] && getUserData(email)) {
      // Legacy: allow login without stored session (first time login after register)
      found = { email, name: getUserData(email)?.name || email };
    }
    if (!getUserData(email)) { showError('Aucun compte trouvé avec cet email.'); return; }
    saveUser({ email, name: getUserData(email).name, password });
    // Store session
    const sessions = JSON.parse(localStorage.getItem('fl_sessions') || '{}');
    sessions[email] = password;
    localStorage.setItem('fl_sessions', JSON.stringify(sessions));
    showToast(`Bon retour ${getUserData(email).name} !`, 'success');
    navigate('dashboard');
  }
}

// ─────────────────────────────────────────────────────────────
// DASHBOARD
// ─────────────────────────────────────────────────────────────
function renderDashboard() {
  const user = getUser();
  const data = getCurrentUserData();
  if (!user || !data) { navigate('login'); return ''; }

  const { pct, completedChapters, total } = getProgress();
  const firstName = data.name.split(' ')[0];
  const nextChapter = COURSE_DATA.chapters.find(ch => !isChapterComplete(ch.id));

  // Stats
  let totalQuizDone = 0;
  let badgesEarned = data.badges.length;
  COURSE_DATA.chapters.forEach(ch => {
    if (data.chaptersProgress[ch.id]?.quizDone) totalQuizDone++;
  });

  return `
    ${renderNavbar('dashboard')}
    <div class="dashboard-page">
      <div class="container">

        <!-- Welcome Banner -->
        <div class="dashboard-welcome">
          <div class="welcome-title">Bonjour ${firstName} ! 👋</div>
          <div class="welcome-subtitle">
            ${pct === 100
              ? '🎉 Félicitations ! Vous avez terminé la formation. Votre certificat vous attend !'
              : completedChapters === 0
                ? 'Vous êtes au début de votre formation. Commencez par le premier chapitre !'
                : `Super progression ! Vous avez validé ${completedChapters} chapitre${completedChapters > 1 ? 's' : ''} sur ${total}.`
            }
          </div>
          <div class="welcome-progress-bar-wrap">
            <div class="welcome-progress-bar-fill" style="width:${pct}%"></div>
          </div>
          <div class="welcome-progress-label">${pct}% complété · ${data.score} points</div>
        </div>

        <!-- Stats -->
        <div class="dashboard-stats">
          <div class="stat-card">
            <div class="stat-icon" style="background:var(--primary-light);color:var(--primary)"><i class="fa fa-chart-line"></i></div>
            <div class="stat-value">${pct}%</div>
            <div class="stat-label">Progression</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:var(--accent-light);color:var(--accent-dark)"><i class="fa fa-star"></i></div>
            <div class="stat-value">${data.score}</div>
            <div class="stat-label">Points gagnés</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:var(--secondary-light);color:var(--secondary)"><i class="fa fa-check-circle"></i></div>
            <div class="stat-value">${completedChapters}/${total}</div>
            <div class="stat-label">Chapitres validés</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:var(--purple-light);color:var(--purple)"><i class="fa fa-trophy"></i></div>
            <div class="stat-value">${badgesEarned}</div>
            <div class="stat-label">Badges obtenus</div>
          </div>
        </div>

        ${pct === 100 ? `
          <div style="background:linear-gradient(135deg,#ECFDF5,#D1FAE5);border:2px solid var(--secondary);border-radius:var(--radius-lg);padding:24px;display:flex;align-items:center;gap:20px;margin-bottom:24px;cursor:pointer;" onclick="navigate('certificate')">
            <div style="font-size:40px">🏆</div>
            <div>
              <div style="font-weight:800;color:var(--secondary-dark);font-size:1.1rem">Votre certificat est prêt !</div>
              <div style="color:var(--secondary-dark);opacity:.8;font-size:.9rem">Cliquez pour voir et télécharger votre certificat de formation.</div>
            </div>
            <button class="btn btn-secondary" style="margin-left:auto">Voir le certificat →</button>
          </div>
        ` : nextChapter ? `
          <div style="background:var(--primary-light);border:1px solid var(--primary-mid);border-radius:var(--radius-lg);padding:20px;display:flex;align-items:center;gap:16px;margin-bottom:24px;flex-wrap:wrap;">
            <div style="font-size:2rem">${nextChapter.icon}</div>
            <div style="flex:1">
              <div style="font-size:.8rem;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px">Reprendre où vous vous êtes arrêté</div>
              <div style="font-weight:700;color:var(--text)">Chapitre ${nextChapter.id} : ${nextChapter.title}</div>
            </div>
            <button class="btn btn-primary" onclick="navigate('chapter',{chapterId:${nextChapter.id}})">Continuer →</button>
          </div>
        ` : ''}

        <div class="dashboard-grid">
          <!-- Chapters List -->
          <div>
            <div class="chapters-section-title"><i class="fa fa-book-open" style="color:var(--primary)"></i> Chapitres de la formation</div>
            ${COURSE_DATA.chapters.map(ch => {
              const complete = isChapterComplete(ch.id);
              const unlocked = isChapterUnlocked(ch.id);
              const inProgress = data.chaptersProgress[ch.id] && !complete;
              let statusClass = complete ? 'completed' : inProgress ? 'in-progress' : '';
              if (!unlocked) statusClass = 'locked';
              let statusIcon = `<div class="chapter-status ${unlocked ? (complete ? 'done' : 'current') : 'locked'}">
                ${complete ? '<i class="fa fa-check"></i>' : unlocked ? '<i class="fa fa-play"></i>' : '<i class="fa fa-lock"></i>'}
              </div>`;

              return `
                <div class="chapter-card ${statusClass}" onclick="${unlocked ? `navigate('chapter',{chapterId:${ch.id}})` : `showToast('Terminez le chapitre précédent pour débloquer celui-ci.','warning')`}">
                  <div class="chapter-icon">${ch.icon}</div>
                  <div class="chapter-info">
                    <div class="chapter-info-title">Chapitre ${ch.id} — ${ch.title}</div>
                    <div class="chapter-info-meta">
                      <span><i class="fa fa-clock"></i> ${ch.duration}</span>
                      <span><i class="fa fa-star"></i> +${ch.points} pts</span>
                      ${complete ? `<span style="color:var(--secondary);font-weight:700"><i class="fa fa-check"></i> Validé</span>` : ''}
                    </div>
                  </div>
                  ${statusIcon}
                </div>`;
            }).join('')}
          </div>

          <!-- Sidebar: Badges + Progress -->
          <div>
            <div class="badges-card" style="margin-bottom:16px">
              <div class="badges-card-header"><i class="fa fa-trophy" style="color:var(--accent)"></i> Mes badges</div>
              <div class="badges-grid-inner">
                ${COURSE_DATA.badges.map(b => {
                  const earned = data.badges.includes(b.id);
                  return `
                    <div class="badge-item ${earned ? 'earned' : 'locked-badge'}" title="${b.desc}">
                      <div class="badge-emoji">${b.emoji}</div>
                      <div class="badge-name">${b.name}</div>
                    </div>`;
                }).join('')}
              </div>
            </div>

            <div class="sidebar-card">
              <div class="sidebar-card-title"><i class="fa fa-chart-bar" style="color:var(--primary)"></i> Détail progression</div>
              <div class="sidebar-card-body">
                ${COURSE_DATA.chapters.map(ch => {
                  const p = data.chaptersProgress[ch.id];
                  const done = p && p.quizDone;
                  return `
                    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
                      <div style="font-size:1.1rem">${ch.icon}</div>
                      <div style="flex:1">
                        <div style="font-size:.8rem;font-weight:600;color:var(--text);margin-bottom:3px">Ch.${ch.id}</div>
                        <div class="progress-bar-wrap" style="height:6px">
                          <div class="progress-bar-fill" style="width:${done ? 100 : (p ? 50 : 0)}%"></div>
                        </div>
                      </div>
                      <div style="font-size:.75rem;color:${done ? 'var(--secondary)' : 'var(--text-light)'};font-weight:700">
                        ${done ? '✓' : (p ? '…' : '—')}
                      </div>
                    </div>`;
                }).join('')}
              </div>
            </div>

            <div class="sidebar-card" style="margin-top:16px">
              <div class="sidebar-card-title"><i class="fa fa-book-open" style="color:var(--secondary)"></i> Ressources</div>
              <div class="sidebar-card-body">
                <p style="font-size:.875rem;color:var(--text-muted);margin-bottom:12px">Accédez à vos fiches pratiques : planning ménage, liste produits, urgences…</p>
                <button class="btn btn-secondary w-full btn-sm" onclick="navigate('resources')">
                  <i class="fa fa-external-link"></i> Voir les ressources
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>`;
}

// ─────────────────────────────────────────────────────────────
// CHAPTER PAGE
// ─────────────────────────────────────────────────────────────
function renderChapter() {
  const chId = state.currentChapterId;
  const ch = COURSE_DATA.chapters.find(c => c.id === chId);
  if (!ch) { navigate('dashboard'); return ''; }

  const data = getCurrentUserData();
  const progress = data?.chaptersProgress[chId] || {};
  const complete = isChapterComplete(chId);
  const tab = state.currentTab;

  // Wave bars
  const bars = Array.from({ length: 40 }, (_, i) => {
    const h = 20 + Math.random() * 60;
    return `<div class="wave-bar" style="height:${h}%" data-h="${h}"></div>`;
  }).join('');

  return `
    ${renderNavbar('dashboard')}
    <div class="chapter-page">
      <div class="container">
        <div class="chapter-page-header">
          <button class="back-btn" onclick="navigate('dashboard')"><i class="fa fa-arrow-left"></i></button>
          <div>
            <div class="chapter-page-title">${ch.icon} ${ch.title}</div>
            <div class="chapter-page-subtitle">${ch.subtitle} · ${ch.duration}</div>
          </div>
          ${complete ? `<div class="badge badge-success" style="margin-left:auto"><i class="fa fa-check"></i> Chapitre validé</div>` : ''}
        </div>

        <div class="chapter-layout">
          <!-- Main content -->
          <div class="content-card">
            <div class="content-tabs">
              <button class="content-tab ${tab === 'text' ? 'active' : ''}" onclick="switchTab('text')">
                <i class="fa fa-file-text"></i> Contenu du cours
              </button>
              <button class="content-tab ${tab === 'audio' ? 'active' : ''}" onclick="switchTab('audio')">
                <i class="fa fa-headphones"></i> Version audio
              </button>
            </div>

            <!-- Text Content -->
            <div class="content-body ${tab !== 'text' ? 'hidden' : ''}">
              <div class="lesson-content">
                ${ch.content}
              </div>
              <div style="margin-top:32px;padding-top:24px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-wrap:gap">
                <div style="font-size:.875rem;color:var(--text-muted)">
                  <i class="fa fa-info-circle"></i> Lisez attentivement avant de passer au quiz
                </div>
                <button class="btn btn-primary" onclick="startQuiz(${chId})">
                  Passer au quiz <i class="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <!-- Audio Content -->
            <div class="content-body ${tab !== 'audio' ? 'hidden' : ''}">
              <div class="audio-player" id="audio-player">
                <div class="audio-title">🎧 ${ch.title}</div>
                <div class="audio-subtitle">${ch.subtitle} · Durée simulée : 3:00</div>
                <div class="audio-waveform" id="waveform">${bars}</div>
                <div class="audio-timeline">
                  <span class="audio-time" id="audio-elapsed">0:00</span>
                  <div class="audio-progress-wrap" onclick="seekAudio(event)">
                    <div class="audio-progress-fill" id="audio-fill" style="width:0%"></div>
                  </div>
                  <span class="audio-time">3:00</span>
                </div>
                <div class="audio-controls">
                  <button class="audio-btn" onclick="skipAudio(-15)" title="Reculer 15s"><i class="fa fa-rotate-left"></i></button>
                  <button class="audio-btn play-btn" id="play-btn" onclick="toggleAudio()">
                    <i class="fa fa-play" id="play-icon"></i>
                  </button>
                  <button class="audio-btn" onclick="skipAudio(15)" title="Avancer 15s"><i class="fa fa-rotate-right"></i></button>
                </div>
                <div class="audio-note">🎙️ Audio simulé à des fins pédagogiques</div>
              </div>
              <div style="margin-top:20px;padding:16px 20px;background:var(--bg);border-radius:var(--radius);border:1px solid var(--border)">
                <div style="font-size:.8rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">Résumé audio</div>
                <p style="font-size:.9rem;color:var(--text-muted);line-height:1.7">${ch.audioScript}</p>
              </div>
              <div style="margin-top:20px;text-align:right">
                <button class="btn btn-primary" onclick="startQuiz(${chId})">
                  Passer au quiz <i class="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="chapter-sidebar">
            <!-- Progress Card -->
            <div class="sidebar-card">
              <div class="sidebar-card-title"><i class="fa fa-list-check" style="color:var(--primary)"></i> Étapes du chapitre</div>
              <div class="sidebar-card-body">
                <div class="chapter-steps">
                  <div class="step-item ${tab === 'text' ? 'active' : (progress.textDone ? 'done' : '')}" onclick="switchTab('text')">
                    <div class="step-num">${progress.textDone ? '✓' : '1'}</div>
                    <span>Contenu du cours</span>
                  </div>
                  <div class="step-item ${tab === 'audio' ? 'active' : (progress.audioDone ? 'done' : '')}" onclick="switchTab('audio')">
                    <div class="step-num">${progress.audioDone ? '✓' : '2'}</div>
                    <span>Version audio</span>
                  </div>
                  <div class="step-item ${complete ? 'done' : ''}" onclick="startQuiz(${chId})">
                    <div class="step-num">${complete ? '✓' : '3'}</div>
                    <span>Quiz (100% requis)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Points Card -->
            <div class="sidebar-card">
              <div class="sidebar-card-title"><i class="fa fa-star" style="color:var(--accent)"></i> Points à gagner</div>
              <div class="sidebar-card-body">
                <div style="display:flex;flex-direction:column;gap:8px;font-size:.875rem">
                  <div style="display:flex;justify-content:space-between"><span style="color:var(--text-muted)">Leçon lue</span><span style="color:var(--accent-dark);font-weight:700">+10 pts</span></div>
                  <div style="display:flex;justify-content:space-between"><span style="color:var(--text-muted)">Quiz réussi</span><span style="color:var(--accent-dark);font-weight:700">+20 pts</span></div>
                  <div style="display:flex;justify-content:space-between"><span style="color:var(--text-muted)">Chapitre validé</span><span style="color:var(--accent-dark);font-weight:700">+50 pts</span></div>
                  <div style="border-top:1px solid var(--border);padding-top:8px;display:flex;justify-content:space-between;font-weight:700"><span>Total possible</span><span style="color:var(--primary)">+80 pts</span></div>
                </div>
              </div>
            </div>

            <!-- Quiz CTA -->
            <div style="background:linear-gradient(135deg,var(--secondary) 0%,var(--secondary-dark) 100%);border-radius:var(--radius-lg);padding:20px;color:white;text-align:center">
              <div style="font-size:1.5rem;margin-bottom:8px">🧠</div>
              <div style="font-weight:700;margin-bottom:4px">${ch.quiz.length} questions</div>
              <div style="font-size:.8rem;opacity:.85;margin-bottom:16px">Score requis : 100%</div>
              <button class="btn w-full" style="background:white;color:var(--secondary-dark);font-weight:700" onclick="startQuiz(${chId})">
                ${complete ? 'Refaire le quiz' : 'Commencer le quiz'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function switchTab(tab) {
  const data = getCurrentUserData();
  if (data && state.currentChapterId) {
    if (tab === 'text' && !data.chaptersProgress[state.currentChapterId]?.textDone) {
      if (!data.chaptersProgress[state.currentChapterId]) data.chaptersProgress[state.currentChapterId] = {};
      data.chaptersProgress[state.currentChapterId].textDone = true;
      awardPoints(10, 'Leçon lue');
      updateCurrentUserData(data);
    }
  }
  stopAudio();
  state.currentTab = tab;
  render();
}

// ─────────────────────────────────────────────────────────────
// AUDIO PLAYER
// ─────────────────────────────────────────────────────────────
function initAudioPlayer() {
  state.audio.playing = false;
  state.audio.progress = 0;
  state.audio.elapsed = 0;
}

function toggleAudio() {
  if (state.audio.playing) {
    pauseAudio();
  } else {
    playAudio();
  }
}

function playAudio() {
  state.audio.playing = true;
  const icon = document.getElementById('play-icon');
  if (icon) { icon.className = 'fa fa-pause'; }

  state.audio.timer = setInterval(() => {
    state.audio.elapsed = Math.min(state.audio.elapsed + 1, state.audio.total);
    state.audio.progress = (state.audio.elapsed / state.audio.total) * 100;
    updateAudioUI();
    if (state.audio.elapsed >= state.audio.total) {
      pauseAudio();
      // Mark audio done
      const data = getCurrentUserData();
      const chId = state.currentChapterId;
      if (data && chId) {
        if (!data.chaptersProgress[chId]) data.chaptersProgress[chId] = {};
        if (!data.chaptersProgress[chId].audioDone) {
          data.chaptersProgress[chId].audioDone = true;
          updateCurrentUserData(data);
          showToast('🎧 Audio terminé ! +10 pts', 'success');
          awardPoints(10, 'Audio écouté');
        }
      }
    }
  }, 1000);

  state.audio.waveTimer = setInterval(() => animateWave(), 100);
}

function pauseAudio() {
  state.audio.playing = false;
  clearInterval(state.audio.timer);
  clearInterval(state.audio.waveTimer);
  const icon = document.getElementById('play-icon');
  if (icon) { icon.className = 'fa fa-play'; }
  // Reset wave animation
  document.querySelectorAll('.wave-bar').forEach(b => b.classList.remove('active'));
}

function stopAudio() {
  pauseAudio();
  state.audio.elapsed = 0;
  state.audio.progress = 0;
}

function skipAudio(sec) {
  state.audio.elapsed = Math.max(0, Math.min(state.audio.total, state.audio.elapsed + sec));
  state.audio.progress = (state.audio.elapsed / state.audio.total) * 100;
  updateAudioUI();
}

function seekAudio(e) {
  const bar = e.currentTarget;
  const rect = bar.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  state.audio.elapsed = Math.round(pct * state.audio.total);
  state.audio.progress = pct * 100;
  updateAudioUI();
}

function updateAudioUI() {
  const fill = document.getElementById('audio-fill');
  const elapsed = document.getElementById('audio-elapsed');
  if (fill) fill.style.width = state.audio.progress + '%';
  if (elapsed) elapsed.textContent = formatTime(state.audio.elapsed);
  // Update played bars
  const bars = document.querySelectorAll('.wave-bar');
  const playedCount = Math.floor((state.audio.progress / 100) * bars.length);
  bars.forEach((b, i) => {
    b.classList.remove('played', 'active');
    if (i < playedCount) b.classList.add('played');
  });
}

function animateWave() {
  if (!state.audio.playing) return;
  const bars = document.querySelectorAll('.wave-bar');
  bars.forEach(b => b.classList.remove('active'));
  const playedCount = Math.floor((state.audio.progress / 100) * bars.length);
  const active = playedCount + Math.floor(Math.random() * 3);
  if (bars[active]) bars[active].classList.add('active');
  if (bars[active + 1]) bars[active + 1].classList.add('active');
}

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

// ─────────────────────────────────────────────────────────────
// QUIZ
// ─────────────────────────────────────────────────────────────
function startQuiz(chapterId) {
  state.quiz = {
    chapterId,
    currentQ: 0,
    selected: null,
    answered: false,
    answers: [],
    correct: 0
  };
  navigate('quiz');
}

function renderQuizPage() {
  const { chapterId, currentQ, selected, answered, answers } = state.quiz;
  const ch = COURSE_DATA.chapters.find(c => c.id === chapterId);
  if (!ch) { navigate('dashboard'); return ''; }

  const q = ch.quiz[currentQ];
  const total = ch.quiz.length;
  const letters = ['A', 'B', 'C', 'D'];

  return `
    ${renderNavbar('dashboard')}
    <div class="quiz-page">
      <div class="quiz-header">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
          <button class="back-btn" onclick="navigate('chapter',{chapterId:${chapterId}})"><i class="fa fa-arrow-left"></i></button>
          <div>
            <div style="font-size:1.1rem;font-weight:800;color:var(--text)">${ch.icon} Quiz — ${ch.title}</div>
            <div style="font-size:.85rem;color:var(--text-muted)">Score requis : 100% · ${total} questions</div>
          </div>
        </div>
        <div class="quiz-progress-steps">
          ${ch.quiz.map((_, i) => {
            let cls = '';
            if (answers[i] !== undefined) cls = answers[i] ? 'done' : 'done';
            else if (i === currentQ) cls = 'current';
            return `<div class="quiz-step ${cls}"></div>`;
          }).join('')}
        </div>
        <div class="quiz-meta">
          <span>Question ${currentQ + 1} sur ${total}</span>
          <span style="color:var(--secondary);font-weight:700">${answers.filter(Boolean).length} correcte(s)</span>
        </div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question-header">
          <div class="quiz-q-num">Question ${currentQ + 1}</div>
          <div class="quiz-question-text">${q.question}</div>
        </div>

        <div class="quiz-options">
          ${q.options.map((opt, i) => {
            let cls = '';
            if (answered) {
              if (i === q.correct) cls = 'correct';
              else if (i === selected && selected !== q.correct) cls = 'wrong';
            } else if (i === selected) cls = 'selected';
            return `
              <div class="quiz-option ${cls} ${answered ? 'disabled' : ''}" onclick="${answered ? '' : `selectAnswer(${i})`}">
                <div class="quiz-option-letter">${letters[i]}</div>
                <div class="quiz-option-text">${opt}</div>
                ${answered && i === q.correct ? `<i class="fa fa-check-circle" style="margin-left:auto;color:var(--secondary)"></i>` : ''}
                ${answered && i === selected && selected !== q.correct ? `<i class="fa fa-times-circle" style="margin-left:auto;color:var(--danger)"></i>` : ''}
              </div>`;
          }).join('')}
        </div>

        ${answered ? `
          <div class="quiz-explanation">
            <div class="explanation-box ${selected !== q.correct ? 'wrong-exp' : ''}">
              ${selected === q.correct
                ? `<strong>✅ Bonne réponse !</strong> ${q.explanation}`
                : `<strong>❌ Pas tout à fait.</strong> ${q.explanation}`
              }
            </div>
          </div>
        ` : ''}

        <div class="quiz-footer">
          ${!answered ? `
            <button class="btn btn-primary" onclick="confirmAnswer()" ${selected === null ? 'disabled' : ''}>
              Valider ma réponse <i class="fa fa-check"></i>
            </button>
          ` : currentQ < total - 1 ? `
            <button class="btn btn-primary" onclick="nextQuestion()">
              Question suivante <i class="fa fa-arrow-right"></i>
            </button>
          ` : `
            <button class="btn btn-primary" onclick="finishQuiz()">
              Voir les résultats <i class="fa fa-flag-checkered"></i>
            </button>
          `}
        </div>
      </div>
    </div>`;
}

function selectAnswer(idx) {
  if (state.quiz.answered) return;
  state.quiz.selected = idx;
  render();
}

function confirmAnswer() {
  if (state.quiz.selected === null) return;
  const { chapterId, currentQ, selected } = state.quiz;
  const ch = COURSE_DATA.chapters.find(c => c.id === chapterId);
  const q = ch.quiz[currentQ];
  const isCorrect = selected === q.correct;
  state.quiz.answers[currentQ] = isCorrect;
  if (isCorrect) state.quiz.correct++;
  state.quiz.answered = true;
  render();
}

function nextQuestion() {
  state.quiz.currentQ++;
  state.quiz.selected = null;
  state.quiz.answered = false;
  render();
}

function finishQuiz() {
  const { chapterId, correct, answers } = state.quiz;
  const ch = COURSE_DATA.chapters.find(c => c.id === chapterId);
  const total = ch.quiz.length;
  const passed = correct === total;

  if (passed) {
    // Update progress
    const data = getCurrentUserData();
    if (!data.chaptersProgress[chapterId]) data.chaptersProgress[chapterId] = {};
    const wasAlreadyDone = data.chaptersProgress[chapterId].quizDone;
    data.chaptersProgress[chapterId].quizDone = true;
    data.chaptersProgress[chapterId].textDone = true;

    if (!wasAlreadyDone) {
      // Award points
      let pts = 20 + 50; // quiz + chapter
      if (!data.chaptersProgress[chapterId].textDone) pts += 10;
      data.score += pts;
      // Award badge
      const badgeId = ch.badgeId;
      if (!data.badges.includes(badgeId)) {
        data.badges.push(badgeId);
      }
      // Check if all chapters done
      const allDone = COURSE_DATA.chapters.every(c => data.chaptersProgress[c.id]?.quizDone);
      if (allDone && !data.certDate) {
        data.certDate = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
      }
    }
    updateCurrentUserData(data);
  }

  navigate('quiz-result');
}

function renderQuizResult() {
  const { chapterId, correct, answers } = state.quiz;
  const ch = COURSE_DATA.chapters.find(c => c.id === chapterId);
  const total = ch.quiz.length;
  const passed = correct === total;
  const data = getCurrentUserData();

  return `
    ${renderNavbar('dashboard')}
    <div class="quiz-page">
      <div class="quiz-result-card">
        <div class="result-icon">${passed ? '🎉' : '😅'}</div>
        <h1 class="result-title">${passed ? 'Parfait ! 100% !' : 'Pas tout à fait…'}</h1>
        <p class="result-subtitle">
          ${passed
            ? `Vous avez répondu correctement à toutes les questions. Chapitre ${chapterId} validé !`
            : `Vous avez réussi ${correct} question${correct > 1 ? 's' : ''} sur ${total}. Il faut 100% pour valider. Essayez encore !`
          }
        </p>

        <div class="result-score-circle ${passed ? 'pass' : 'fail'}">
          <div class="result-score-num">${correct}/${total}</div>
          <div class="result-score-label">${Math.round((correct/total)*100)}%</div>
        </div>

        ${passed ? `
          <div class="result-points-earned">
            <i class="fa fa-star"></i>
            +80 points gagnés !
          </div>
          <div style="display:flex;gap:12px;justify-content:center;margin-bottom:16px">
            ${(() => {
              const badge = COURSE_DATA.badges.find(b => b.id === ch.badgeId);
              return badge ? `<div style="background:var(--accent-light);border:1px solid var(--accent);border-radius:var(--radius);padding:10px 20px;display:flex;align-items:center;gap:8px;font-weight:700;color:var(--accent-dark)">
                ${badge.emoji} Badge "${badge.name}" débloqué !
              </div>` : '';
            })()}
          </div>
        ` : ''}

        <div class="result-answers">
          ${ch.quiz.map((q, i) => {
            const ok = answers[i];
            return `<div class="result-answer ${ok ? 'ok' : 'ko'}">
              <i class="fa fa-${ok ? 'check' : 'times'}-circle"></i>
              <span>${q.question.substring(0, 60)}${q.question.length > 60 ? '…' : ''}</span>
            </div>`;
          }).join('')}
        </div>

        <div class="result-actions">
          ${passed ? `
            ${isFullyCertified() ? `
              <button class="btn btn-accent w-full btn-lg" onclick="navigate('certificate')">
                🏆 Voir mon certificat !
              </button>
            ` : ''}
            <button class="btn btn-primary w-full" onclick="navigate('dashboard')">
              <i class="fa fa-th-large"></i> Retour au tableau de bord
            </button>
            ${chapterId < COURSE_DATA.chapters.length ? `
              <button class="btn btn-secondary w-full" onclick="navigate('chapter',{chapterId:${chapterId + 1}})">
                Chapitre suivant <i class="fa fa-arrow-right"></i>
              </button>
            ` : ''}
          ` : `
            <button class="btn btn-primary w-full btn-lg" onclick="retakeQuiz(${chapterId})">
              <i class="fa fa-redo"></i> Recommencer le quiz
            </button>
            <button class="btn btn-outline w-full" onclick="navigate('chapter',{chapterId:${chapterId}})">
              <i class="fa fa-book-open"></i> Relire le chapitre
            </button>
          `}
        </div>
      </div>
    </div>`;
}

function retakeQuiz(chapterId) {
  startQuiz(chapterId);
}

// ─────────────────────────────────────────────────────────────
// CERTIFICATE
// ─────────────────────────────────────────────────────────────
function renderCertificate() {
  const user = getUser();
  const data = getCurrentUserData();
  if (!user || !data) { navigate('login'); return ''; }

  if (!isFullyCertified()) {
    navigate('dashboard');
    return '';
  }

  const certId = 'FL-' + btoa(user.email).replace(/[^a-zA-Z0-9]/g, '').substring(0, 10).toUpperCase();
  const certDate = data.certDate || new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  return `
    ${renderNavbar('certificate')}
    <div class="certificate-page">
      <div class="certificate-actions">
        <button class="btn btn-outline" onclick="navigate('dashboard')"><i class="fa fa-arrow-left"></i> Tableau de bord</button>
        <button class="btn btn-primary" onclick="window.print()"><i class="fa fa-print"></i> Imprimer / PDF</button>
      </div>

      <div class="certificate-wrapper">
        <div class="certificate" id="certificate">
          <div class="cert-header">
            <div class="cert-logo">🏡</div>
            <div style="font-size:1.75rem;font-weight:900;letter-spacing:.02em;position:relative;z-index:1">FormLocataire</div>
            <div class="cert-brand">Plateforme de formation certifiante</div>
            <div class="cert-type">CERTIFICAT DE RÉUSSITE</div>
          </div>

          <div class="cert-body">
            <div class="cert-certifie">Certifie que</div>
            <div class="cert-name">${data.name}</div>
            <div class="cert-completion">a suivi et validé avec succès la formation</div>
            <div class="cert-course-title">"Entretenir efficacement son logement locatif"</div>

            <div class="cert-details">
              <div class="cert-detail">
                <div class="cert-detail-label">Date d'obtention</div>
                <div class="cert-detail-value">${certDate}</div>
              </div>
              <div class="cert-detail">
                <div class="cert-detail-label">Score obtenu</div>
                <div class="cert-detail-value">100% — Excellence</div>
              </div>
              <div class="cert-detail">
                <div class="cert-detail-label">Durée de formation</div>
                <div class="cert-detail-value">6 chapitres · ~2 heures</div>
              </div>
              <div class="cert-detail">
                <div class="cert-detail-label">Points gagnés</div>
                <div class="cert-detail-value">${data.score} points</div>
              </div>
            </div>

            <div style="text-align:center;margin:24px 0">
              <div class="cert-seal">
                <div class="cert-seal-icon">🏅</div>
                <div>Certifié<br>Excellent</div>
              </div>
            </div>

            <div class="cert-signatures">
              <div class="cert-signature">
                <div style="font-family:Georgia,serif;font-size:1.5rem;color:var(--primary);margin-bottom:4px;font-style:italic">FormLocataire</div>
                <div class="cert-sig-line"></div>
                <div class="cert-sig-name">Équipe FormLocataire</div>
                <div class="cert-sig-title">Direction pédagogique</div>
              </div>
              <div class="cert-signature">
                <div style="font-family:Georgia,serif;font-size:1.5rem;color:var(--text);margin-bottom:4px;font-style:italic">${data.name.split(' ')[0]}</div>
                <div class="cert-sig-line"></div>
                <div class="cert-sig-name">${data.name}</div>
                <div class="cert-sig-title">Bénéficiaire de la formation</div>
              </div>
            </div>
          </div>

          <div class="cert-footer">
            <div class="cert-footer-logo">🏡 FormLocataire</div>
            <div class="cert-footer-id">Certificat N° ${certId} · Émis le ${certDate}</div>
            <div class="badge badge-success"><i class="fa fa-check-circle"></i> Valide</div>
          </div>
        </div>
      </div>

      <div class="congrats-section">
        <div class="congrats-icon">🎊</div>
        <div>
          <div class="congrats-title">Félicitations ${data.name.split(' ')[0]} !</div>
          <div class="congrats-text">Vous avez terminé la formation avec un score parfait de 100%. Vous êtes désormais un(e) locataire informé(e) et responsable. Votre caution vous dit merci !</div>
        </div>
      </div>
    </div>`;
}

// ─────────────────────────────────────────────────────────────
// RESOURCES PAGE
// ─────────────────────────────────────────────────────────────
function renderResources() {
  return `
    ${renderNavbar('resources')}
    <div class="resources-page">
      <div class="container">
        <div style="margin-bottom:32px">
          <div class="section-tag">Ressources bonus</div>
          <h1 style="font-size:1.75rem;font-weight:800;color:var(--text);margin:8px 0 8px">📁 Fiches pratiques</h1>
          <p style="color:var(--text-muted)">Toutes les ressources pour appliquer la formation au quotidien.</p>
        </div>

        <div class="resources-grid">
          ${COURSE_DATA.resources.map(r => `
            <div class="resource-card">
              <div class="resource-card-header">
                <div class="resource-icon" style="background:${r.bgColor};font-size:1.5rem">${r.icon}</div>
                <div>
                  <div class="resource-card-title" style="color:${r.color}">${r.title}</div>
                  <div class="resource-card-desc">${r.desc}</div>
                </div>
              </div>
              <div class="resource-card-body">
                ${r.items.map(item => `
                  <div class="resource-item">
                    <i class="fa ${item.icon}" style="color:${r.color}"></i>
                    <span>${item.text}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Tips Section -->
        <div style="margin-top:40px;background:linear-gradient(135deg,var(--primary-light),#E0EBFF);border-radius:var(--radius-xl);padding:36px">
          <div style="text-align:center;margin-bottom:28px">
            <div style="font-size:2rem;margin-bottom:8px">💡</div>
            <h2 style="font-size:1.3rem;font-weight:800;color:var(--text)">Conseils bonus : les 10 réflexes du locataire exemplaire</h2>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px">
            ${[
              "Aérer 10 minutes chaque matin, toutes les pièces",
              "Photographier tout dégât dès qu'il apparaît",
              "Signaler tout problème important par ÉCRIT au propriétaire",
              "Conserver tous les documents : bail, état des lieux d'entrée, quittances",
              "Ne jamais retarder une petite réparation qui peut s'aggraver",
              "Faire l'entretien de la chaudière chaque année (obligatoire)",
              "Nettoyer les filtres de hotte chaque mois",
              "Ne jamais mélanger vinaigre ou bicarbonate avec l'eau de javel",
              "Préparer l'état des lieux de sortie au moins 3 mois à l'avance",
              "Conserver le numéro de votre assurance habitation à portée de main"
            ].map((tip, i) => `
              <div style="display:flex;align-items:flex-start;gap:12px;background:white;padding:14px 16px;border-radius:var(--radius);border:1px solid var(--border)">
                <div style="width:24px;height:24px;border-radius:50%;background:var(--primary);color:white;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:800;flex-shrink:0">${i+1}</div>
                <div style="font-size:.875rem;color:var(--text);line-height:1.5">${tip}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>`;
}

// ─────────────────────────────────────────────────────────────
// GAMIFICATION
// ─────────────────────────────────────────────────────────────
function awardPoints(amount, reason) {
  const data = getCurrentUserData();
  if (!data) return;
  data.score += amount;
  updateCurrentUserData(data);
  showPointsPopup(amount);
  showToast(`+${amount} pts — ${reason}`, 'success');
}

function showPointsPopup(amount) {
  const popup = document.createElement('div');
  popup.className = 'points-popup';
  popup.textContent = `+${amount} pts`;
  popup.style.top = '100px';
  popup.style.right = '80px';
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 2000);
}

// ─────────────────────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────────────────────
function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: 'check-circle', error: 'times-circle', warning: 'exclamation-triangle', info: 'info-circle' };
  toast.innerHTML = `<i class="fa fa-${icons[type] || 'info-circle'}"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3100);
}

// ─────────────────────────────────────────────────────────────
// USER MENU
// ─────────────────────────────────────────────────────────────
function showUserMenu() {
  const user = getUser();
  if (!user) return;
  const data = getCurrentUserData();
  showModal(`
    <div class="modal-icon">👤</div>
    <h2 class="modal-title">${user.name}</h2>
    <p class="modal-text">
      📧 ${user.email}<br>
      ⭐ ${data?.score || 0} points<br>
      🏅 ${data?.badges.length || 0} badge(s) obtenu(s)<br>
      📚 ${getProgress().completedChapters}/${COURSE_DATA.chapters.length} chapitres validés
    </p>
    <div class="modal-actions">
      ${isFullyCertified() ? `<button class="btn btn-accent w-full" onclick="closeModal();navigate('certificate')">🏆 Mon certificat</button>` : ''}
      <button class="btn btn-outline w-full" onclick="closeModal()">Fermer</button>
      <button class="btn btn-danger w-full" onclick="logout()">
        <i class="fa fa-right-from-bracket"></i> Se déconnecter
      </button>
    </div>
  `);
}

function logout() {
  localStorage.removeItem('fl_user');
  closeModal();
  showToast('Vous avez été déconnecté.', 'info');
  navigate('landing');
}

// ─────────────────────────────────────────────────────────────
// MODAL
// ─────────────────────────────────────────────────────────────
function showModal(html) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  content.innerHTML = html;
  overlay.classList.remove('hidden');
  overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

// ─────────────────────────────────────────────────────────────
// AUDIENCE TOGGLE (landing page)
// ─────────────────────────────────────────────────────────────
function switchAudience(type) {
  const panelTenant = document.getElementById('panel-tenant');
  const panelPro = document.getElementById('panel-pro');
  const tabTenant = document.getElementById('tab-tenant');
  const tabPro = document.getElementById('tab-pro');
  if (!panelTenant) return;
  if (type === 'tenant') {
    panelTenant.style.display = 'block';
    panelPro.style.display = 'none';
    tabTenant.className = 'btn btn-primary';
    tabPro.className = 'btn btn-ghost';
    tabPro.style.border = '2px solid var(--border)';
    tabTenant.style.border = '';
  } else {
    panelTenant.style.display = 'none';
    panelPro.style.display = 'block';
    tabPro.className = 'btn btn-primary';
    tabTenant.className = 'btn btn-ghost';
    tabTenant.style.border = '2px solid var(--border)';
    tabPro.style.border = '';
  }
}

// ─────────────────────────────────────────────────────────────
// FAQ TOGGLE
// ─────────────────────────────────────────────────────────────
function toggleFaq(idx) {
  const answer = document.getElementById(`faq-answer-${idx}`);
  const question = answer?.previousElementSibling;
  const icon = document.getElementById(`faq-icon-${idx}`);
  if (!answer) return;
  const isOpen = answer.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-answer.open').forEach(el => {
    el.classList.remove('open');
    el.previousElementSibling?.classList.remove('open');
  });
  document.querySelectorAll('.faq-question.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) {
    answer.classList.add('open');
    question?.classList.add('open');
  }
}

// ─────────────────────────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────────────────────────
function attachEventListeners() {
  // Keyboard navigation
  document.onkeydown = (e) => {
    if (e.key === 'Escape') closeModal();
  };
}

// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────
function init() {
  const user = getUser();

  // Handle hash routing
  const hash = window.location.hash.slice(1);
  if (hash === 'dashboard' && user) state.currentView = 'dashboard';
  else if (hash === 'certificate' && user && isFullyCertified()) state.currentView = 'certificate';
  else if (hash === 'resources' && user) state.currentView = 'resources';
  else if (user) state.currentView = 'dashboard';

  setTimeout(() => render(), 300); // Slight delay for loading screen effect
}

init();
