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
  
  chevronDown: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  
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
  
  file: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
    <polyline points="14 2 14 10 20 10"></polyline>
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
  
  // Краткое содержание Whitepaper
  const whitepaperSummaryHtml = `
    <div class="summary-section">
      <h3>Core Idea</h3>
      <p>BTCLE is a scarce (210k fixed supply), non-inflationary digital asset prioritizing purpose over hype. It embodies Bitcoin's original ethos: decentralized, secure, built to last, with a fair launch protected against bots and pre-mining.</p>
    </div>
    <div class="summary-section">
      <h3>Tokenomics</h3>
      <ul>
        <li><strong>Max Supply:</strong> 210,000 BTCLE (Fixed)</li>
        <li><strong>TGE Circulation:</strong> 21,000 BTCLE (10%) for trading liquidity.</li>
        <li><strong>Locked Supply:</strong> 189,000 BTCLE (90%) vested over 10 years (Jan 2026 - Dec 2035).</li>
        <li><strong>Release Mechanism:</strong> Monthly declining emission via audited, immutable smart contracts.</li>
      </ul>
    </div>
    <div class="summary-section">
      <h3>Year 1 Roadmap Highlights</h3>
      <ul class="roadmap-summary-list">
        <li><strong>Q1 (Jun-Aug '25):</strong> Strategic CEX/DEX Listings (MEXC, Bitget, OKX, Coinbase, etc.) & Liquidity Framework.</li>
        <li><strong>Q2 (Sep-Nov '25):</strong> Establish Global HQ & Community Hub in Dubai.</li>
        <li><strong>Q3 (Dec '25-Feb '26):</strong> Launch BTCLE Pay Wallet for crypto-to-fiat utility.</li>
        <li><strong>Q4 (Mar-May '26):</strong> Deploy proprietary, AI-enhanced BTCLE Chain.</li>
      </ul>
    </div>
    <div class="summary-section">
      <h3>Why BTCLE?</h3>
      <p>Ultra-scarce design, on-chain integrity, verifiable liquidity backing, and a structure built for long-term value and trust, moving beyond hype.</p>
    </div>
    <div class="summary-section">
      <h3>Team</h3>
      <p>Founding team remains anonymous initially (inspired by Bitcoin's ethos) to focus on the mission and technology. Full transparency in operations and audited contracts.</p>
    </div>
  `;

  // Основной HTML страницы
  whitepaperContainer.innerHTML = `
    <!-- Hero Section / Above-the-Fold - Обновленная секция -->
    <section class="hero-section">
      <div class="hero-content" id="whitepaper-hero-content">
        <h1 class="hero-title">Bitcoin Limited Edition (BTCLE)</h1>
        <p class="hero-subtitle">Rare by Design. Secured by Structure. Driven by Collective Belief.</p>
        
        <!-- УЛУЧШЕННАЯ КНОПКА -->
        <button id="view-wp-summary-btn" class="wp-summary-toggle-btn">
          <span class="btn-icon document-icon">${ICONS.file}</span>
          <span class="btn-text">View Whitepaper</span>
          <span class="chevron-icon">${ICONS.chevronDown}</span>
        </button>
        
        <!-- КОНТЕЙНЕР ДЛЯ АНИМАЦИИ РАСКРЫТИЯ -->
        <div id="wp-summary-container" class="wp-summary-container">
          <!-- ДЕКОРАТИВНЫЕ ЭЛЕМЕНТЫ -->
          <div class="wp-summary-decoration left-deco"></div>
          <div class="wp-summary-decoration right-deco"></div>
          
          <!-- СОДЕРЖИМОЕ -->
          <div class="wp-summary-content">
            ${whitepaperSummaryHtml}
            
            <!-- ДЕКОРАТИВНЫЕ ИКОНКИ -->
            <div class="wp-summary-icons">
              <div class="floating-icon icon-1">${ICONS.file}</div>
              <div class="floating-icon icon-2">${ICONS.file}</div>
              <div class="floating-icon icon-3">${ICONS.lock}</div>
              <div class="floating-icon icon-4">${ICONS.star}</div>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <!-- Остальные секции страницы (Core Principles, Key Features, etc.) -->
    <section class="core-tech-section"> 
      <div class="section-header">
        <h2>Core Principles</h2>
        <div class="header-line"></div>
      </div>
      <div class="tech-cards">
        <div class="tech-card">
          <div class="card-icon">${ICONS.brain}</div>
          <h3>Scarce, Fixed Supply</h3>
          <p>A strictly limited, non-inflationary total supply of 210,000 BTCLE, embodying the original ethos of Bitcoin.</p>
          <div class="card-glow"></div>
        </div>
        <div class="tech-card">
          <div class="card-icon">${ICONS.trophy}</div>
          <h3>Fair Community Launch</h3>
          <p>Built to block bots and eliminate pre-mined advantages, honoring trust and real decentralization.</p>
          <div class="card-glow"></div>
        </div>
      </div>
    </section>
    <section class="features-section">
      <div class="section-header">
        <h2>Key Features</h2>
        <div class="header-line"></div>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">${ICONS.code}</div>
          <h3>Immutable & Transparent</h3>
          <p>Audited smart contracts govern token release and vesting. All movements are visible on-chain.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">${ICONS.shield}</div>
          <h3>Launch Protection</h3>
          <p>Fairness-first smart contracts and protective mechanics guard the launch against manipulation.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">${ICONS.link}</div>
          <h3>Decentralized & Community-Driven</h3>
          <p>Focus on collective belief and building a system that respects long-term holders.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">${ICONS.wind}</div>
          <h3>Long-Term Vision</h3>
          <p>A deliberate, long-term asset designed for sustainable growth, beyond hype cycles.</p>
        </div>
      </div>
    </section>
    <section class="benefits-section"> 
      <div class="section-header">
        <h2>Tokenomics Highlights</h2>
        <div class="header-line"></div>
      </div>
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">${ICONS.zap}</div>
          <div class="benefit-counter" data-target="210000">0</div>
          <p>Fixed Max Supply (BTCLE)</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">${ICONS.gauge}</div>
          <div class="benefit-counter" data-target="21000">0</div>
          <p>Initial Circulating Supply (TGE)</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">${ICONS.shield}</div>
          <div class="benefit-counter" data-target="10">0</div>
          <p>Year Locked Supply Vesting Period</p>
        </div>
      </div>
    </section>
    <section class="market-section"> 
      <div class="section-header">
        <h2>Supply Distribution</h2>
        <div class="header-line"></div>
      </div>
      <div class="market-cards">
        <div class="market-card">
          <div class="market-icon">${ICONS.globe}</div>
          <h3>Max Supply</h3>
          <div class="market-value">210,000</div>
          <p>BTCLE (100%)</p>
          <svg class="circular-progress" viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="50"></circle><circle class="progress" cx="60" cy="60" r="50" data-value="100"></circle></svg>
        </div>
        <div class="market-card">
          <div class="market-icon">${ICONS.robot}</div>
          <h3>Locked Supply</h3>
          <div class="market-value">189,000</div>
          <p>BTCLE (90% - 10 Yr Vesting)</p>
          <svg class="circular-progress" viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="50"></circle><circle class="progress" cx="60" cy="60" r="50" data-value="90"></circle></svg>
        </div>
        <div class="market-card">
          <div class="market-icon">${ICONS.droplet}</div>
          <h3>TGE Supply</h3>
          <div class="market-value">21,000</div>
          <p>BTCLE (10% Circulating)</p>
          <svg class="circular-progress" viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="50"></circle><circle class="progress" cx="60" cy="60" r="50" data-value="10"></circle></svg>
        </div>
      </div>
    </section>
    <section class="roadmap-section"> 
      <div class="section-header">
        <h2>Roadmap Preview (Year 1: June 2025 – May 2026)</h2>
        <div class="header-line"></div>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-year">Q1 (Jun-Aug 2025)</div>
            <h3>Exchange Listings & Liquidity</h3>
            <p>Strategic rollout across CEX/DEX (MEXC, Bitget, OKX, Coinbase, Bybit, Binance) for global exposure.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-year">Q2 (Sep-Nov 2025)</div>
            <h3>Dubai Community Hub</h3>
            <p>Establish permanent HQ in Dubai for community initiatives, PR, partnerships, and ambassador programs.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-year">Q3 (Dec 2025-Feb 2026)</div>
            <h3>BTCLE Pay Wallet Launch</h3>
            <p>Dedicated wallet for seamless crypto-to-fiat conversion, rewards, and mobile/web integration.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-year">Q4 (Mar-May 2026)</div>
            <h3>Proprietary Blockchain Launch</h3>
            <p>Deployment of custom blockchain with smart contracts, potential AI modules, scalability, and efficiency.</p>
          </div>
        </div>
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
  initWhitepaperSummaryToggle();
  initCounters();
  initCircularProgress();
  initWhitepaperEvents(container);
  
  // Скрываем лоадер
  setTimeout(() => {
    hideGlobalLoader();
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
  const elementsToAnimate = document.querySelectorAll('.section-header, .tech-card, .feature-card, .benefit-card, .market-card, .timeline-item');
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
 * Инициализирует переключение видимости краткого содержания Whitepaper
 */
function initWhitepaperSummaryToggle() {
  const button = document.getElementById('view-wp-summary-btn');
  const container = document.getElementById('wp-summary-container');
  const content = document.querySelector('.wp-summary-content');
  const floatingIcons = document.querySelectorAll('.floating-icon');
  
  if (!button || !container || !content) {
    console.warn('Whitepaper summary toggle elements not found');
    return;
  }

  const chevron = button.querySelector('.chevron-icon svg');
  
  // Первоначально скрываем контейнер
  container.style.height = '0';
  container.style.overflow = 'hidden';
  
  // Отслеживаем состояние
  let isExpanded = false;
  
  // Анимируем иконки с разной задержкой
  const animateIcons = (show) => {
    floatingIcons.forEach((icon, index) => {
      setTimeout(() => {
        if (show) {
          icon.classList.add('visible');
          icon.style.animationDelay = `${index * 0.2}s`;
        } else {
          icon.classList.remove('visible');
        }
      }, index * 100);
    });
  };
  
  button.addEventListener('click', () => {
    isExpanded = !isExpanded;
    
    // Анимируем кнопку
    button.classList.toggle('active', isExpanded);
    
    // Плавно вращаем иконку
    if (chevron) {
      chevron.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      chevron.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
    }
    
    if (isExpanded) {
      // Показываем декоративные элементы с задержкой
      container.classList.add('expanded');
      
      // Устанавливаем высоту и прозрачность одновременно для плавной анимации
      const contentHeight = content.scrollHeight;
      container.style.height = `${contentHeight}px`;
      container.style.overflow = 'hidden';
      content.style.opacity = '1';
      
      // Запускаем анимацию декораций
      setTimeout(() => {
        const leftDeco = document.querySelector('.left-deco');
        const rightDeco = document.querySelector('.right-deco');
        if (leftDeco) leftDeco.classList.add('visible');
        if (rightDeco) rightDeco.classList.add('visible');
      }, 200);
      
      // Запускаем анимацию иконок
      setTimeout(() => animateIcons(true), 400);
      
      // Добавляем золотое свечение для кнопки
      button.classList.add('glow');
      
      // Меняем текст кнопки с эффектом затухания/появления
      const btnText = button.querySelector('.btn-text');
      if (btnText) {
        btnText.style.opacity = '0';
        setTimeout(() => {
          btnText.textContent = 'Hide Whitepaper';
          btnText.style.opacity = '1';
        }, 200);
      }
      
    } else {
      // Плавно изменяем прозрачность и высоту одновременно
      content.style.transition = 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      content.style.opacity = '0';
      container.style.height = '0';
      
      // Останавливаем анимации
      animateIcons(false);
      const leftDeco = document.querySelector('.left-deco');
      const rightDeco = document.querySelector('.right-deco');
      if (leftDeco) leftDeco.classList.remove('visible');
      if (rightDeco) rightDeco.classList.remove('visible');
      
      // Удаляем золотое свечение с кнопки
      button.classList.remove('glow');
      
      // Меняем текст кнопки обратно
      const btnText = button.querySelector('.btn-text');
      if (btnText) {
        btnText.style.opacity = '0';
        setTimeout(() => {
          btnText.textContent = 'View Whitepaper';
          btnText.style.opacity = '1';
        }, 200);
      }
      
      // Удаляем класс expanded после завершения анимации
      setTimeout(() => {
        container.classList.remove('expanded');
      }, 600); // Увеличиваем тайм-аут для соответствия длительности анимации
    }
  });
  
  // Обрабатываем изменение размера окна для корректной высоты
  window.addEventListener('resize', () => {
    if (isExpanded) {
      const contentHeight = content.scrollHeight;
      container.style.height = `${contentHeight}px`;
    }
  });
}

/**
 * Инициализирует анимированные счетчики
 */
function initCounters() {
  const counters = document.querySelectorAll('.benefit-counter');
  if (!counters.length) return;
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const targetValue = parseInt(counter.dataset.target, 10);
        if (isNaN(targetValue)) return; // Пропускаем, если не число

        let currentValue = 0;
        const duration = 1500; // Длительность анимации в мс
        const increment = targetValue / (duration / 16); // ~60fps

        const updateCounter = () => {
          currentValue += increment;
          if (currentValue < targetValue) {
            counter.textContent = Math.ceil(currentValue).toLocaleString(); // Округляем вверх и форматируем
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = targetValue.toLocaleString(); // Конечное значение
          }
        };

        requestAnimationFrame(updateCounter);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
}

/**
 * Инициализирует круговые индикаторы прогресса
 */
function initCircularProgress() {
  const progressCircles = document.querySelectorAll('.circular-progress .progress');
  if (!progressCircles.length) return;

  const radius = progressCircles[0].r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const circle = entry.target;
        const value = parseInt(circle.dataset.value, 10);
        if (!isNaN(value)) { // Проверяем, что значение - число
          const offset = circumference - (value / 100) * circumference;
          circle.style.strokeDashoffset = offset;
        }
        observer.unobserve(circle);
      }
    });
  }, { threshold: 0.5 });
  
  progressCircles.forEach(circle => {
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference; // Начинаем с 0
    observer.observe(circle);
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