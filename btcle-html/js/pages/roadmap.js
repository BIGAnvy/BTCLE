/**
 * Страница "Roadmap"
 * @module pages/roadmap
 */
import { createLayout } from '../components/layout.js';
import { hideGlobalLoader } from '../components/loader.js';
import { navigate } from '../libs/router.js';

// SVG иконки (взяты из lucide-react, упрощены)
const ICONS = {
  Microscope: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>`,
  Rocket: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.09-3.1A5.78 5.78 0 0 0 5.6 10.4a5.78 5.78 0 0 0-1.1 6.1Z"/><path d="M12.5 11.5c1.26 1.5 5 2 5 2s-.5-3.74-2-5c-.84-.71-2.3-.7-3.1-.09A5.78 5.78 0 0 0 10.4 11a5.78 5.78 0 0 0 6.1 1.1Z"/><path d="M11.5 12.5a9.77 9.77 0 0 1-1.05 2.05L8.5 16.5l1.95-1.95c.5-.5.95-1.05 1.3-1.65"/><path d="M12.5 11.5a9.77 9.77 0 0 1 2.05-1.05L16.5 8.5l-1.95 1.95c-.5.5-1.05.95-1.65 1.3"/><path d="m16.5 16.5.95.95c.57.57 1.53.57 2.1 0L22 15l-1.5-1.5-.95-.95c-.57-.57-.57-1.53 0-2.1L18 8l-2.5 2.5z"/><path d="m7.5 7.5-.95-.95C6 6 5.04 6 4.46 6.54L2 9l1.5 1.5.95.95c.57.57.57 1.53 0 2.1L6 16l2.5-2.5z"/></svg>`,
  TrendingUp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  Megaphone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
  Landmark: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
  CheckCircle2: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  Hourglass: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>`,
  Clock: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  Calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
  Home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
  X: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
};

const roadmapItems = [
    {
      period: 'Phase 1',
      title: 'Foundation',
      description: 'Token launch, exchange listings, community growth. Strategic partnerships and advisory board setup.',
      icon: 'Microscope',
      status: 'completed',
      details: ` 
        <h2>Phase 1: Foundation</h2>
        <p><strong>Objective:</strong> Establish the foundational infrastructure for BTCLE ecosystem launch and community building.</p>
        <ul>
          <li><strong>Token launch:</strong> Initial release and distribution of BTCLE tokens to the community.</li>
          <li><strong>Exchange listings:</strong> Securing listings on major cryptocurrency exchanges for accessibility.</li>
          <li><strong>Community growth:</strong> Building an engaged community of supporters and early adopters.</li>
          <li><strong>Strategic partnerships:</strong> Forming key alliances with industry partners and stakeholders.</li>
          <li><strong>Advisory board setup:</strong> Assembling a team of experienced advisors to guide project development.</li>
        </ul>
        <p><strong>Strategic Impact:</strong> Establish market presence, build community trust, and create the foundation for future development phases.</p>
      `
    },
    {
      period: 'Phase 2',
      title: 'Layer-2 Testnet',
      description: 'Initial deployment of Bitcoin-anchored Layer-2. Onboarding RWA pilots.',
      icon: 'Rocket',
      status: 'in-progress',
      details: `
        <h2>Phase 2: Layer-2 Testnet</h2>
        <p><strong>Objective:</strong> Deploy and test the Bitcoin Layer-2 infrastructure with Real World Asset integration capabilities.</p>
        <ul>
          <li><strong>Initial deployment of Bitcoin-anchored Layer-2:</strong> Launch the testnet version of BTCLE's Bitcoin Layer-2 solution, ensuring security and scalability.</li>
          <li><strong>Onboarding RWA pilots:</strong> Begin pilot programs for tokenizing Real World Assets on the Bitcoin ecosystem.</li>
          <li><strong>Developer tools and documentation:</strong> Provide comprehensive resources for developers to build on the Layer-2.</li>
          <li><strong>Testing and optimization:</strong> Conduct thorough testing to ensure performance and security before mainnet launch.</li>
        </ul>
        <p><strong>Strategic Impact:</strong> Validate the Layer-2 technology, establish RWA tokenization capabilities, and prepare for full mainnet deployment.</p>
      `
    },
    {
      period: 'Phase 3',
      title: 'Mainnet & Governance',
      description: 'BTCLE governance activation. Full RWA bridge functionality. Ecosystem expansion with developers and institutions.',
      icon: 'Landmark',
      status: 'upcoming',
      details: `
        <h2>Phase 3: Mainnet & Governance</h2>
        <p><strong>Objective:</strong> Launch the full production environment with governance capabilities and comprehensive RWA integration.</p>
        <ul>
          <li><strong>BTCLE governance activation:</strong> Implement decentralized governance allowing BTCLE holders to participate in decision-making processes.</li>
          <li><strong>Full RWA bridge functionality:</strong> Deploy complete Real World Asset bridging capabilities for seamless tokenization.</li>
          <li><strong>Ecosystem expansion with developers:</strong> Attract and support developers building innovative applications on the BTCLE ecosystem.</li>
          <li><strong>Institutional partnerships:</strong> Establish relationships with institutions for large-scale RWA tokenization and adoption.</li>
          <li><strong>Cross-chain interoperability:</strong> Enable seamless interaction with other blockchain networks and protocols.</li>
        </ul>
        <p><strong>Strategic Impact:</strong> Achieve full ecosystem maturity, enable mass adoption of RWA tokenization, and establish BTCLE as a leading Bitcoin Layer-2 solution.</p>
      `
    }
  ];

function getStatusIcon(status) {
    if (status === 'completed') return ICONS.CheckCircle2;
    if (status === 'in-progress') return ICONS.Hourglass;
    return ICONS.Clock;
}

/**
 * Создает содержимое страницы "Roadmap"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createRoadmapPage(container) {
  const layout = createLayout();
  const roadmapContainer = document.createElement('div');
  roadmapContainer.className = 'roadmap-container';
  
  roadmapContainer.innerHTML = `
    <div class="roadmap-header">
      <h1>Roadmap (2025 & Beyond)</h1>
      <p>Our strategic development phases for building the Bitcoin Layer-2 ecosystem and RWA integration.</p>
    </div>
    
    <div class="roadmap-timeline">
      ${roadmapItems.map((item, index) => `
        <div class="timeline-item" data-index="${index}">
          <div class="timeline-content-wrapper">
             <div class="timeline-card" role="button" tabindex="0" aria-expanded="false" aria-controls="roadmap-details-${index}"> 
               <div class="timeline-card-header">
                 ${ICONS.Calendar}
                 <span class="timeline-period">${item.period}</span>
                 <span class="timeline-status-icon">${getStatusIcon(item.status)}</span>
               </div>
               <h3 class="timeline-title">${item.title}</h3>
               <p class="timeline-description">${item.description}</p>
            </div>
          </div>
          <div class="timeline-point-container status-${item.status}">
             <span class="timeline-point-icon">${ICONS[item.icon]}</span>
          </div>
          <div class="timeline-spacer"></div>
          <!-- Скрытый контейнер для деталей (можно не создавать сразу) -->
        </div>
      `).join('')}
    </div>
    
    <!-- Conclusion Section -->
    <section class="conclusion-section">
      <div class="roadmap-conclusion-header">
        <h2>Conclusion</h2>
        <div class="roadmap-conclusion-line"></div>
      </div>
      <div class="conclusion-content">
        <p>BTCLE is scarcity with purpose, a limited edition token that redefines Bitcoin utility for the real economy. By combining Bitcoin security, Layer-2 scalability, and RWA integration, BTCLE builds the path to mass adoption and a truly decentralized financial system.</p>
        <p class="conclusion-tagline"><strong>BTCLE : Where Scarcity Meets Innovation.</strong></p>
      </div>
    </section>
  `;
  
  const homeButton = createHomeButton();
  roadmapContainer.appendChild(homeButton);
  
  layout.mainContainer.appendChild(roadmapContainer);
  container.appendChild(layout.container);

  loadStyles();
  
  // Добавляем обработчики кликов на карточки
  setupTimelineCardClicks(roadmapContainer);

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
    
    animateTimeline();
    homeButton.classList.add('visible');
  }, 500);
  
  return container;
}

/** 
 * Добавляет обработчики кликов на карточки таймлайна 
 * @param {HTMLElement} parentContainer - Родительский контейнер, где искать карточки
 */
function setupTimelineCardClicks(parentContainer) {
  parentContainer.querySelectorAll('.timeline-card').forEach(card => {
    card.addEventListener('click', handleCardClick);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        handleCardClick(event);
      }
    });
  });
}

/**
 * Обработчик клика по карточке 
 * @param {Event} event
 */
function handleCardClick(event) {
  const card = event.currentTarget;
  const timelineItem = card.closest('.timeline-item');
  const index = parseInt(timelineItem.dataset.index, 10);
  const itemData = roadmapItems[index];

  if (itemData && itemData.details) {
    // Проверяем, не раскрыта ли уже эта карточка
    if (card.classList.contains('expanded')) {
      collapseCard(card);
    } else {
      // Сворачиваем другие открытые карточки, если они есть
      const expandedCard = document.querySelector('.timeline-card.expanded');
      if (expandedCard) {
        collapseCard(expandedCard);
        // Добавляем небольшую задержку перед открытием новой карточки
        setTimeout(() => {
          expandCard(card, itemData);
        }, 100);
        return;
      }
      
      expandCard(card, itemData);
    }
  }
}

/**
 * Разворачивает карточку на весь экран
 * @param {HTMLElement} card - Карточка
 * @param {Object} itemData - Данные карточки
 */
function expandCard(card, itemData) {
  // Сохраняем начальное положение карточки
  const cardRect = card.getBoundingClientRect();
  const scrollY = window.scrollY;
  
  // Создаем оверлей для фона
  const overlay = document.createElement('div');
  overlay.className = 'expanded-card-overlay';
  document.body.appendChild(overlay);
  
  // Создаем копию карточки для анимации
  const expandedCard = document.createElement('div');
  expandedCard.className = 'expanded-card';
  expandedCard.innerHTML = `
    <div class="expanded-card-header">
      <div class="expanded-card-status">
        <span class="timeline-status-icon">${getStatusIcon(itemData.status)}</span>
        <span class="timeline-period">${itemData.period}</span>
      </div>
      <button class="expanded-card-close" aria-label="Close">${ICONS.X}</button>
    </div>
    <h2 class="expanded-card-title">${itemData.title}</h2>
    <div class="expanded-card-content">
      ${itemData.details}
    </div>
  `;
  
  // Устанавливаем позицию и размеры копии точно как у оригинальной карточки
  expandedCard.style.position = 'fixed';
  expandedCard.style.top = `${cardRect.top - scrollY}px`;
  expandedCard.style.left = `${cardRect.left}px`;
  expandedCard.style.width = `${cardRect.width}px`;
  expandedCard.style.height = `${cardRect.height}px`;
  expandedCard.style.borderRadius = getComputedStyle(card).borderRadius;
  expandedCard.style.backgroundColor = getComputedStyle(card).backgroundColor;
  expandedCard.style.zIndex = '1000';
  
  // Скрываем содержимое копии до анимации расширения
  const content = expandedCard.querySelector('.expanded-card-content');
  content.style.opacity = '0';
  
  // Скрываем заголовок копии и показываем только после анимации
  const title = expandedCard.querySelector('.expanded-card-title');
  title.style.opacity = '0';
  
  // Скрываем header до анимации расширения
  const header = expandedCard.querySelector('.expanded-card-header');
  header.style.opacity = '0';
  
  document.body.appendChild(expandedCard);
  
  // Помечаем исходную карточку как развернутую
  card.classList.add('expanded');
  card.setAttribute('aria-expanded', 'true');
  
  // Блокируем скролл
  document.body.classList.add('noscroll');
  
  // Запускаем анимацию
  requestAnimationFrame(() => {
    // Начинаем анимировать оверлей
    overlay.classList.add('visible');
    
    // Анимируем расширение карточки
    expandedCard.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    expandedCard.style.top = '10vh';
    expandedCard.style.left = '10vw';
    expandedCard.style.width = '80vw';
    expandedCard.style.height = '80vh';
    expandedCard.style.borderRadius = '24px';
    expandedCard.style.overflowY = 'auto';
    
    expandedCard.addEventListener('transitionend', () => {
      // Показываем содержимое после завершения анимации размера
      content.style.transition = 'opacity 0.3s ease';
      content.style.opacity = '1';
      
      // Показываем заголовок
      title.style.transition = 'opacity 0.3s ease';
      title.style.opacity = '1';
      
      // Показываем header
      header.style.transition = 'opacity 0.3s ease';
      header.style.opacity = '1';
    }, { once: true });
  });
  
  // Добавляем обработчики закрытия
  const closeButton = expandedCard.querySelector('.expanded-card-close');
  closeButton.addEventListener('click', () => collapseCard(card));
  
  overlay.addEventListener('click', () => collapseCard(card));
  
  // Добавляем обработчик Escape
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      collapseCard(card);
    }
  };
  document.addEventListener('keydown', escHandler);
  
  // Сохраняем ссылки для удаления элементов при закрытии
  card._expandedElements = {
    overlay,
    expandedCard,
    escHandler
  };
}

/**
 * Сворачивает развернутую карточку обратно
 * @param {HTMLElement} card - Исходная карточка
 */
function collapseCard(card) {
  if (!card || !card._expandedElements) return;
  
  const { overlay, expandedCard, escHandler } = card._expandedElements;
  
  // Получаем позицию оригинальной карточки для анимации возврата
  const cardRect = card.getBoundingClientRect();
  const scrollY = window.scrollY;
  
  // Добавляем класс для запуска анимации закрытия
  expandedCard.classList.add('closing');
  
  // Сначала плавно скрываем контент
  const content = expandedCard.querySelector('.expanded-card-content');
  const title = expandedCard.querySelector('.expanded-card-title');
  const header = expandedCard.querySelector('.expanded-card-header');
  
  // Используем CSS-классы для анимации вместо прямого изменения стилей
  content.classList.add('fade-out');
  title.classList.add('fade-out');
  header.classList.add('fade-out');
  
  // Анимируем исчезновение оверлея синхронно с карточкой
  overlay.classList.remove('visible');
  
  // Флаг для отслеживания успешного завершения анимации
  let animationCompleted = false;
  
  // Функция для очистки и сброса состояния
  const cleanupAndReset = () => {
    if (animationCompleted) return; // Предотвращаем повторное выполнение
    animationCompleted = true;
    
    // Удаляем элементы
    if (document.body.contains(expandedCard)) {
      expandedCard.remove();
    }
    
    if (document.body.contains(overlay)) {
      overlay.remove();
    }
    
    // Гарантированно разблокируем скролл
    document.body.classList.remove('noscroll');
    
    // Сбрасываем состояние карточки
    card.classList.remove('expanded');
    card.setAttribute('aria-expanded', 'false');
    
    // Удаляем ссылки и обработчики
    document.removeEventListener('keydown', escHandler);
    delete card._expandedElements;
  };
  
  // Начинаем анимацию возврата карточки сразу после начала скрытия контента
  requestAnimationFrame(() => {
    // Анимируем возврат карточки к оригинальному размеру/позиции
    expandedCard.style.transition = 'all 0.45s cubic-bezier(0.3, 0, 0.2, 1), opacity 0.45s ease';
    expandedCard.style.top = `${cardRect.top - scrollY}px`;
    expandedCard.style.left = `${cardRect.left}px`;
    expandedCard.style.width = `${cardRect.width}px`;
    expandedCard.style.height = `${cardRect.height}px`;
    expandedCard.style.borderRadius = getComputedStyle(card).borderRadius;
    expandedCard.style.opacity = '0.6'; // Делаем карточку полупрозрачной при закрытии
    
    // Удаляем элементы после завершения анимации
    expandedCard.addEventListener('transitionend', (e) => {
      // Проверяем, что событие вызвано для самой карточки, а не для дочерних элементов
      if (e.target !== expandedCard) return;
      
      cleanupAndReset();
    }, { once: true });
    
    // Резервный таймер на случай, если событие transitionend не сработает
    setTimeout(cleanupAndReset, 500);
  });
}

/**
 * Функция для очистки всех элементов расширенной карточки
 */
function cleanupExpandedCardElements() {
  // Удаляем класс no-scroll с body
  document.body.classList.remove('noscroll');
  
  // Удаляем все оставшиеся элементы expanded-card и overlay
  document.querySelectorAll('.expanded-card').forEach(el => {
    if (document.body.contains(el)) {
      el.remove();
    }
  });
  
  document.querySelectorAll('.expanded-card-overlay').forEach(el => {
    if (document.body.contains(el)) {
      el.remove();
    }
  });
  
  // Сбрасываем состояние всех карточек
  document.querySelectorAll('.timeline-card.expanded').forEach(card => {
    card.classList.remove('expanded');
    card.setAttribute('aria-expanded', 'false');
    
    // Удаляем обработчики Escape
    if (card._expandedElements && card._expandedElements.escHandler) {
      document.removeEventListener('keydown', card._expandedElements.escHandler);
      delete card._expandedElements;
    }
  });
}

/**
 * Анимирует элементы таймлайна при скролле
 */
function animateTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timeline = document.querySelector('.roadmap-timeline');
  const conclusionContent = document.querySelector('.conclusion-content');

  if (!timeline || !timelineItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('conclusion-content')) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.add('visible');
        }
      } else {
        // entry.target.classList.remove('visible'); // Можно раскомментировать для повторной анимации
      }
    });
  }, {
    root: null,
    threshold: 0.1
  });

  timelineItems.forEach(item => {
    observer.observe(item);
  });

  // Добавляем наблюдение за заключением
  if (conclusionContent) {
    observer.observe(conclusionContent);
  }

  const handleScroll = () => {
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;

    timelineItems.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const distanceToCenter = Math.abs(viewportCenter - itemCenter);
        const maxDistance = viewportHeight * 0.5;
        const normalizedDistance = Math.min(distanceToCenter / maxDistance, 1);
        const scale = 1.05 - (normalizedDistance * 0.1); 
        const glowOpacity = (1 - normalizedDistance) * 0.5;

        const card = item.querySelector('.timeline-card');
        const point = item.querySelector('.timeline-point-container');

        if (card && point) {
            // Применяем scale только если элемент виден (для оптимизации)
            if (item.classList.contains('visible')) {
            card.style.transform = `scale(${scale})`;
            point.style.transform = `scale(${scale})`;
            } else {
                // Сбрасываем scale если не видно
                card.style.transform = `scale(1)`; 
                point.style.transform = `scale(1)`;
            }
            
            // Применяем subtle glow для карточки в черно-белом стиле
            if (normalizedDistance < 0.5 && item.classList.contains('visible')) {
                card.style.boxShadow = `0 8px 25px rgba(0, 0, 0, ${0.1 + glowOpacity * 0.1})`;
                card.style.borderColor = `rgba(0, 0, 0, ${0.3 + glowOpacity * 0.3})`;
                
                // Убираем применение box-shadow для point
                point.style.boxShadow = 'none';

            } else {
                card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                card.style.borderColor = '#e5e5e5';
                point.style.boxShadow = 'none';
            }
        }
    });
  };

  // Сохраняем ссылку на обработчик для удаления
  if (!window._roadmapScrollHandler) {
      window._roadmapScrollHandler = handleScroll;
      window.addEventListener('scroll', window._roadmapScrollHandler, { passive: true });
      // Вызываем один раз при инициализации
  handleScroll(); 
  }
  
  // Добавить логику удаления window._roadmapScrollHandler при смене страницы в роутере
  window._cleanupRoadmapHandlers = () => {
    if (window._roadmapScrollHandler) {
      window.removeEventListener('scroll', window._roadmapScrollHandler);
      delete window._roadmapScrollHandler;
    }
    
    // Очищаем все элементы для расширенной карточки
    cleanupExpandedCardElements();
  };
  
  // Очищаем обработчики при смене страницы
  window.addEventListener('navigate', window._cleanupRoadmapHandlers);
}

/**
 * Загружает стили для страницы
 */
function loadStyles() {
  if (!document.getElementById('roadmap-css')) {
    const linkElement = document.createElement('link');
    linkElement.id = 'roadmap-css';
    linkElement.rel = 'stylesheet';
    linkElement.href = '/css/roadmap.css'; 
    document.head.appendChild(linkElement);
  }
  if (!document.getElementById('base-styles')) {
      const baseLink = document.createElement('link');
      baseLink.id = 'base-styles';
      baseLink.rel = 'stylesheet';
      baseLink.href = '/css/styles.css'; 
      document.head.appendChild(baseLink);
  }
}

/**
 * Создает кнопку возврата на главную страницу
 * @returns {HTMLElement} Кнопка возврата
 */
function createHomeButton() {
  const button = document.createElement('a');
  button.href = '?';
  button.classList.add('home-button');
  button.setAttribute('data-navigate', '');
  button.innerHTML = ICONS.Home;
  button.title = 'Back to Home';
  return button;
}

// Добавляем обработчик для очистки при смене страницы
window.addEventListener('beforeunload', cleanupExpandedCardElements);

// Добавляем обработчик для очистки при нажатии на любое место страницы (для устранения застрявших карточек)
window.addEventListener('click', (e) => {
  // Проверяем, что клик не по карточке или её содержимому
  if (!e.target.closest('.expanded-card') && 
      !e.target.closest('.timeline-card') && 
      document.querySelector('.expanded-card-overlay')) {
    cleanupExpandedCardElements();
  }
});

export default createRoadmapPage; 