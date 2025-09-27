import { createLayout } from '../components/layout.js';
import { hideGlobalLoader } from '../components/loader.js';

// Иконки (оставляем те же)
const ICONS = {
  diamond: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12.45 2.27a1.5 1.5 0 0 0-0.9 0L2.71 7.33a1.5 1.5 0 0 0-.71 1.3V15.4a1.5 1.5 0 0 0 .71 1.3l8.84 5.06a1.5 1.5 0 0 0 .9 0l8.84-5.06a1.5 1.5 0 0 0 .71-1.3V8.63a1.5 1.5 0 0 0-.71-1.3L12.45 2.27Z"></path><path d="m7.66 8.63 9.67 5.49m-9.77 0 9.67-5.49M12 2.27v20.46"></path></svg>`, // Для Scarcity
  shieldCheck: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`, // Для Integrity
  banknote: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>`, // Для Liquidity
  landmark: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`, // Для Structure
  brainCircuit: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0-.34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.96.46 2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0-.34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5Z"/><path d="M16 11.5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1Z"/><path d="M12 15.5v-2"/><path d="M10.5 10.5v-1a1.5 1.5 0 0 1 3 0v1"/><path d="M12 4.5v2"/><path d="M10.5 18.5v-2"/><path d="M13.5 18.5v-2"/></svg>`, // Для Next Era / AI
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
};

/**
 * Создает содержимое страницы "Why BTCLE?"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createWhyBtclePage(container) {
  const layout = createLayout();
  const whyBtcleContainer = document.createElement('div');
  // Убираем section-container, т.к. стили теперь применяются к why-btcle-container напрямую
  whyBtcleContainer.classList.add('why-btcle-container');

  const content = `
    <div class="why-btcle-hero fade-in">
      <h1 class="section-title">Why <span class="highlight">BTCLE</span></h1>
    </div>

    <div class="why-btcle-points">

      <!-- Point 1 -->
      <div class="why-point fade-in-up" data-animation-delay="0.2">
        <div class="point-icon-wrapper">${ICONS.shieldCheck}</div>
        <div class="point-content">
          <h2>1. Security – Anchored on Bitcoin</h2>
          <p>BTCLE is built as a Layer 2 anchored to Bitcoin, leveraging the unmatched security and immutability of the Bitcoin blockchain.</p>
          <p>By inheriting Bitcoin's proof-of-work consensus and settlement layer, BTCLE ensures that every transaction and every asset bridged into the ecosystem is protected by the most decentralized and battle-tested network in the world.</p>
          <p>This foundation provides institutional-grade security for Real World Assets (RWA), financial instruments, and DeFi applications that demand trust at scale.</p>
          <p>Unlike many experimental L2s, BTCLE minimizes attack vectors by directly linking back to Bitcoin's base layer—making it not just a blockchain, but a fortress for value.</p>
        </div>
      </div>

      <!-- Point 2 -->
      <div class="why-point fade-in-up" data-animation-delay="0.3">
        <div class="point-icon-wrapper">${ICONS.diamond}</div>
        <div class="point-content">
          <h2>2. Ease of Accessibility & Use</h2>
          <p>BTCLE is designed to break down the complexity of blockchain, making it accessible to mainstream users, enterprises, and institutions alike.</p>
          <p>Through simplified interfaces, seamless wallet integration, and optimized transaction flows, users can interact with BTCLE with the same ease as traditional apps.</p>
          <p>Low-cost, high-speed transactions ensure scalability, while tools like fiat on/off ramps, multi-chain bridges, and plug-and-play APIs provide accessibility to developers, partners, and enterprises.</p>
          <p>The goal: make the BTCLE experience intuitive enough for a newcomer, yet powerful enough for sophisticated users and developers—removing barriers to adoption and scaling toward mass usage.</p>
        </div>
      </div>

      <!-- Point 3 -->
      <div class="why-point fade-in-up" data-animation-delay="0.4">
        <div class="point-icon-wrapper">${ICONS.brainCircuit}</div>
        <div class="point-content">
          <h2>3. Expert Team & Strategic Partnerships</h2>
          <p>BTCLE is powered by a team with deep blockchain expertise, financial acumen, and technical execution ability. The team's track record spans global exchanges, DeFi protocols, institutional advisory, and real-world finance.</p>
          <p>Beyond the core contributors, BTCLE leverages a broad network of partners across venture capital, market makers, liquidity providers, institutional investors, and blockchain infrastructure firms.</p>
          <p>This ensures that BTCLE is not just a technology project but an ecosystem play, supported by an interconnected web of advisors, developers, and enterprise collaborators.</p>
          <p>By combining knowledge, credibility, and execution capability, BTCLE positions itself as a trusted platform to lead the Bitcoin Layer 2 and RWA revolution.</p>
        </div>
      </div>

      <!-- Point 4 -->
      <div class="why-point fade-in-up" data-animation-delay="0.5">
        <div class="point-icon-wrapper">${ICONS.landmark}</div>
        <div class="point-content">
          <h2>4. Rooted in Real World Assets (RWA)</h2>
          <p>BTCLE's vision goes beyond speculation—it is bridging the physical and digital economies.</p>
          <p>By tokenizing and anchoring Real World Assets (commodities, real estate, bonds, and other financial instruments) onto Bitcoin's most secure blockchain layer, BTCLE transforms Bitcoin from a store of value into the backbone of a new financial system.</p>
          <p>Users, institutions, and enterprises will be able to access digitally native, blockchain-secured RWAs with global settlement, 24/7 accessibility, and instant liquidity.</p>
          <p>This pillar ensures that BTCLE is not just another Layer 2—it is the gateway where traditional finance and decentralized finance converge, unlocking trillions in global economic value.</p>
        </div>
      </div>

    </div>
  `;

  whyBtcleContainer.innerHTML = content;

  // Добавляем кнопку Домой
  const homeButton = createHomeButton();
  whyBtcleContainer.appendChild(homeButton);

  layout.mainContainer.appendChild(whyBtcleContainer);
  container.appendChild(layout.container);

  loadStyles();

  // Показываем футер
  const footer = document.getElementById('footer');
  if (footer) {
    footer.style.display = 'block';
    footer.classList.add('visible');
  }

  // Скрываем лоадер и анимируем контент
  requestAnimationFrame(() => {
    hideGlobalLoader();

    // Добавляем класс для белых страниц к body
    document.body.classList.add('white-page');

    // Показываем кнопку домой
    homeButton.classList.add('visible');

    // Инициализируем скролл-анимации для дочерних элементов
    initScrollAnimations(whyBtcleContainer);
  });

  return container;
}

/** Генерирует HTML для частиц */
function generateParticles(count = 10) {
  let particlesHtml = '';
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 4 + 1; // Smaller particles
    const delay = Math.random() * 10; // Longer, varied delays
    const xDrift = (Math.random() - 0.5) * 40; // Horizontal drift
    const yDrift = (Math.random() - 0.5) * 40; // Vertical drift
    particlesHtml += `<div class="particle" style="
      width: ${size}px; 
      height: ${size}px; 
      left: ${Math.random() * 100}%; 
      top: ${Math.random() * 100}%; 
      animation-delay: ${delay}s;
      --x-drift: ${xDrift};
      --y-drift: ${yDrift};
    "></div>`;
  }
  return particlesHtml;
}

/** Загружает стили для страницы */
function loadStyles() {
  if (!document.getElementById('why-btcle-css')) {
    const linkElement = document.createElement('link');
    linkElement.id = 'why-btcle-css';
    linkElement.rel = 'stylesheet';
    linkElement.href = '/css/pages/why-btcle.css';
    document.head.appendChild(linkElement);
  }
}

/** Инициализирует скролл-анимации */
function initScrollAnimations(parentElement) {
  const elementsToAnimate = parentElement.querySelectorAll('.fade-in, .fade-in-up');
  if (!elementsToAnimate.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.animationDelay || '0';
        entry.target.style.animationDelay = `${delay}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
}

/** Создает кнопку возврата на главную страницу */
function createHomeButton() {
  const button = document.createElement('a');
  button.href = '/';
  button.setAttribute('data-navigate', '');
  button.classList.add('home-button');
  button.innerHTML = ICONS.home;
  button.title = 'Back to Home';
  return button;
}

export default createWhyBtclePage; 
