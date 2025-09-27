/**
 * Страница "Whitepaper"
 * @module pages/whitepaper
 */
import { createLayout } from '../components/layout.js';
import { hideGlobalLoader } from '../components/loader.js';

// SVG иконки
const ICONS = {
  download: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" x2="12" y1="15" y2="3"></line>
  </svg>`,
  
  
  brain: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
  </svg>`,
  
  trophy: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>`,
  
  code: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>`,
  
  shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>`,
  
  link: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>`,
  
  wind: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
  </svg>`,
  
  zap: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>`,
  
  gauge: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m12 14 4-4"></path>
    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
  </svg>`,
  
  globe: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" x2="22" y1="12" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>`,
  
  robot: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="16" height="16" x="4" y="6" rx="2"></rect>
    <path d="M12 2v4"></path>
    <path d="M10 16v.01"></path>
    <path d="M14 16v.01"></path>
    <path d="M8 22h8"></path>
    <path d="M12 18v4"></path>
  </svg>`,
  
  droplet: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </svg>`,
  
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>`,
  
  discord: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 10a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
    <path d="M15 10a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
    <path d="M9.5 15.5c1.5 1 3.5 1 5 0"></path>
    <path d="M18.5 8c.5 1.5 1 3.5 .5 6.5c-2 2 -4 3 -7 3s-5 -1 -7 -3c-.5 -3 0 -5 .5 -6.5c2 -3 6 -4 6.5 -4c.5 0 4.5 1 6.5 4"></path>
    <path d="M9 15l-1 5l5 -3l5 3l-1 -5"></path>
  </svg>`,
  
  telegram: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 12.2c0-3.2-4.4-5.2-7-3-2.5-2.2-6.8-.2-6.8 3v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5zm-7 1.7L10 12.2m1.8 1.7L14 12.2"></path>
  </svg>`,
  
  
  lock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 17v4"></path>
    <path d="M12 17a5 5 0 0 0-5-5"></path>
    <path d="M12 12a5 5 0 0 0-5-5"></path>
    <path d="M12 12a5 5 0 0 1 5-5"></path>
    <path d="M12 12a5 5 0 0 1 5 5"></path>
  </svg>`,
  
  star: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>`
};

/**
 * Создает содержимое страницы "Whitepaper"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createWhitepaperPage(container) {
  // Создаем основной layout с шапкой и футером
  const layout = createLayout();
  
  // Создаем контейнер для контента
  const whitepaperContainer = document.createElement('div');
  whitepaperContainer.classList.add('section-container');
  whitepaperContainer.classList.add('whitepaper-container');
  

  // Основной HTML страницы
  whitepaperContainer.innerHTML = `
    <!-- Hero Section / Above-the-Fold - Обновленная секция -->
    <section class="hero-section">
      <div class="hero-content" id="whitepaper-hero-content">
        <h1 class="hero-title">BTCLE Light Paper</h1>
        <p class="hero-subtitle">Where Scarcity Meets Innovation.</p>
        
        
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="introduction-section">
      <div class="section-header">
        <h2>Introduction</h2>
        <div class="header-line"></div>
      </div>
      <div class="introduction-content">
        <p>Bitcoin Limited Edition (BTCLE) is not just another digital token, it is the foundation of a new Bitcoin Layer-2 ecosystem designed to unlock global adoption of Real World Assets (RWA) on the most secure and decentralized blockchain: Bitcoin.</p>
        <p>BTCLE establishes scarcity, utility, and governance for a Layer-2 network that enhances speed, scalability, and usability, while staying true to Bitcoin's original ethos of decentralization and trust.</p>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision-section">
      <div class="section-header">
        <h2>Vision</h2>
        <div class="header-line"></div>
      </div>
      <div class="vision-content">
        <p>In a digital world crowded with inflationary tokens and speculative projects, scarcity is power. BTCLE's vision is to:</p>
        <ul class="vision-list">
          <li>Anchor a Bitcoin Layer-2 that is scalable, fast, and secure.</li>
          <li>Enable RWA integration into the Bitcoin ecosystem.</li>
          <li>Democratize access for the next billion users skeptical of blockchain complexity.</li>
          <li>Provide community-driven governance through BTCLE token holders.</li>
        </ul>
      </div>
    </section>
    <!-- Core Features Section -->
    <section class="features-section">
      <div class="section-header">
        <h2>Core Features</h2>
        <div class="header-line"></div>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">${ICONS.code}</div>
          <h3>Layer-2 Infrastructure</h3>
          <p>High-throughput, low-cost transactions anchored to Bitcoin security.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">${ICONS.link}</div>
          <h3>RWA Bridge</h3>
          <p>Tokenization of traditional valuable assets on Bitcoin.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">${ICONS.trophy}</div>
          <h3>BTCLE Token Utility</h3>
          <p>Governance: vote on upgrades, policies, and network direction. Incentives: rewards for participation and ecosystem growth. Access: unlock exclusive features, staking, and early opportunities.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">${ICONS.shield}</div>
          <h3>Compliance & Trust</h3>
          <p>Operated under a U.S.-registered entity for regulatory transparency.</p>
        </div>
      </div>
    </section>
    <!-- Tokenomics Section -->
    <section class="tokenomics-section">
      <div class="section-header">
        <h2>Tokenomics (High-Level)</h2>
        <div class="header-line"></div>
      </div>
      <div class="tokenomics-content">
        <div class="tokenomics-item">
          <div class="tokenomics-icon">${ICONS.zap}</div>
          <h3>Supply</h3>
          <p>Fixed, limited edition – ensuring scarcity.</p>
        </div>
        <div class="tokenomics-item">
          <div class="tokenomics-icon">${ICONS.gauge}</div>
          <h3>Allocation</h3>
          <p>Balanced distribution across community, governance, ecosystem growth, and strategic investors.</p>
        </div>
        <div class="tokenomics-item">
          <div class="tokenomics-icon">${ICONS.shield}</div>
          <h3>Mechanics</h3>
          <p>Built-in incentive structures for sustainable ecosystem growth.</p>
        </div>
      </div>
    </section>
    <!-- Roadmap Section -->
    <section class="roadmap-section">
      <div class="section-header">
        <h2>Roadmap (2025 & Beyond)</h2>
        <div class="header-line"></div>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-year">Phase 1</div>
            <h3>Foundation</h3>
            <p>Token launch, exchange listings, community growth. Strategic partnerships and advisory board setup.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-year">Phase 2</div>
            <h3>Layer-2 Testnet</h3>
            <p>Initial deployment of Bitcoin-anchored Layer-2. Onboarding RWA pilots.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-year">Phase 3</div>
            <h3>Mainnet & Governance</h3>
            <p>BTCLE governance activation. Full RWA bridge functionality. Ecosystem expansion with developers and institutions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Conclusion Section -->
    <section class="conclusion-section">
      <div class="section-header">
        <h2>Conclusion</h2>
        <div class="header-line"></div>
      </div>
      <div class="conclusion-content">
        <p>BTCLE is scarcity with purpose, a limited edition token that redefines Bitcoin utility for the real economy. By combining Bitcoin security, Layer-2 scalability, and RWA integration, BTCLE builds the path to mass adoption and a truly decentralized financial system.</p>
        <p class="conclusion-tagline"><strong>BTCLE : Where Scarcity Meets Innovation.</strong></p>
      </div>
    </section>

    <!-- Home Button -->
    <a href="/" class="home-button" data-navigate>${ICONS.home}</a>
  `;
  
  // Добавляем контент в layout
  layout.mainContainer.appendChild(whitepaperContainer);
  
  // Добавляем layout в контейнер страницы
  container.appendChild(layout.container);
  
  // Инициализация интерактивных элементов
  loadStyles();
  initHeroAppearAnimation();
  initScrollAnimations();
  initWhitepaperEvents(container);

  // Показываем футер
  const footer = document.getElementById('footer');
  if (footer) {
    footer.style.display = 'block';
    footer.classList.add('visible');
  }
  
  // Скрываем лоадер
  setTimeout(() => {
    hideGlobalLoader();
    
    // Добавляем класс для белых страниц к body
    document.body.classList.add('white-page');
    
    // Обновляем логотип для белой страницы
    if (window.app && window.app.updateLogo) {
      setTimeout(() => window.app.updateLogo(), 100);
    }
    
    // Показываем футер
    const footer = document.getElementById('footer');
    if (footer) {
      footer.style.display = 'block';
      footer.classList.add('visible');
    }
    
    // Показываем кнопку "Домой"
    const homeButton = container.querySelector('.home-button'); // Ищем кнопку внутри container
    if(homeButton) homeButton.classList.add('visible');
  }, 500);
  
  return container;
}

/**
 * Загружает стили для страницы
 */
function loadStyles() {
  if (!document.getElementById('whitepaper-css')) {
    const linkElement = document.createElement('link');
    linkElement.id = 'whitepaper-css';
    linkElement.rel = 'stylesheet';
    linkElement.href = '/css/pages/whitepaper.css'; // Используем новый CSS файл
    document.head.appendChild(linkElement);
  }
}

/**
 * Инициализирует анимацию появления Hero Section
 */
function initHeroAppearAnimation() {
  const heroContent = document.getElementById('whitepaper-hero-content');
  if (heroContent) {
    // Добавляем класс с небольшой задержкой для плавности
    setTimeout(() => {
      heroContent.classList.add('hero-appear-active');
    }, 100);
  }
}

/**
 * Инициализирует анимации при скролле
 */
function initScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll('.section-header, .feature-card, .tokenomics-item, .timeline-item, .introduction-content, .vision-content, .conclusion-content');
  if (!elementsToAnimate.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.animationDelay || '0';
        entry.target.style.transitionDelay = `${delay}s`;
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
}



/**
 * Создает кнопку возврата на главную страницу
 * @returns {HTMLElement} Кнопка возврата
 */
function createHomeButton() {
  const button = document.createElement('a');
  button.href = '/';
  button.setAttribute('data-navigate', '');
  button.classList.add('home-button'); // Стили применяются из CSS
  button.innerHTML = ICONS.home; // Используем иконку из констант
  button.title = 'Back to Home';
  return button;
}

/**
 * Инициализирует обработчики событий на странице Whitepaper
 * @param {HTMLElement} container - Контейнер страницы
 */
function initWhitepaperEvents(container) {
  // Можно добавить другие обработчики, если нужно
}

// Экспорт функции по умолчанию
export default createWhitepaperPage; 