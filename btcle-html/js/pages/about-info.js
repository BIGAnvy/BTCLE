/**
 * Страница "About Info"
 * @module pages/about-info
 */
import { createLayout } from '../components/layout.js';
import { hideGlobalLoader } from '../components/loader.js';

// Иконки (упрощенные SVG)
const ICONS = {
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/></svg>`,
  name: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zM1 4v8h13V4z"/><path d="M5 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/></svg>`,
  symbol: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M3 6.035a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/></svg>`,
  supply: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg>`,
  contract: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/><path d="M4.5 4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V5h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V5h1a.5.5 0 0 0 0-1zm-6 4a.5.5 0 0 0 0 1h1v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-.5h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5zm-6 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-.5h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z"/></svg>`,
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>` // Добавим иконку домой
};

// Бренд-иконки
ICONS.cmc = `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#000"/><path d="M24.5 14.6v2.8c0 3.2-2.6 5.8-5.8 5.8H13.3c-3.2 0-5.8-2.6-5.8-5.8v-2.8c0-3.2 2.6-5.8 5.8-5.8 1.8 0 3.3.8 4.4 2.1 1.1-1.3 2.6-2.1 4.4-2.1 1.1 0 2.1.3 3 .8l-1.1 2.1c-.6-.3-1.2-.5-1.9-.5-2.1 0-3.8 1.7-3.8 3.8v5.2h-2.4v-5.2c0-2.1-1.7-3.8-3.8-3.8S8.8 12.5 8.8 14.6v2.8c0 1.8 1.5 3.4 3.4 3.4h5.4c1.8 0 3.4-1.5 3.4-3.4v-2.8h3.5z" fill="#fff"/></svg>`;
ICONS.coingecko = `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#8BC34A"/><circle cx="12.5" cy="14.5" r="2.5" fill="#000"/><path d="M9 20c2.2 2.2 6 2.2 8.2 0 2.2-2.2 2.2-6 0-8.2 2.6.2 5.1 1.4 6.8 3.6 2.9 3.6 2.4 8.8-1.2 11.7-3.6 2.9-8.8 2.4-11.7-1.2C10.2 24 9.3 22.1 9 20z" fill="#F5F5F5"/></svg>`;
ICONS.pancakeswap = `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#F3BA2F"/><path d="M11 8c.7 0 1.3.6 1.3 1.3V12h7.4V9.3c0-.7.6-1.3 1.3-1.3s1.3.6 1.3 1.3V12c2 .8 3.4 2.7 3.4 4.9 0 3-2.9 5.5-6.4 5.5h-6.6C9 22.4 6 20 6 16.9 6 14.7 7.5 12.8 9.4 12V9.3C9.4 8.6 10 8 10.7 8H11z" fill="#5D4037"/></svg>`;
ICONS.dexscreener = `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#111"/><path d="M10 22l4-8 3 6 2-4 3 6H10z" fill="#fff"/></svg>`;
ICONS.bsc = `<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#F3BA2F"><path d="M12 2l3.5 3.5-1.7 1.7L12 5.4 10.2 7.2 8.5 5.5 12 2zm6.5 6.5L22 12l-3.5 3.5-1.7-1.7L18.6 12l-1.8-1.8 1.7-1.7zM12 18.6l1.8-1.8 1.7 1.7L12 22l-3.5-3.5 1.7-1.7L12 18.6zM5.4 12l1.8 1.8-1.7 1.7L2 12l3.5-3.5 1.7 1.7L5.4 12zm2.8 0L12 8.2 15.8 12 12 15.8 8.2 12z"/></svg>`;

/**
 * Создает содержимое страницы "About Info"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createAboutInfoPage(container) {
  const layout = createLayout();
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-info-container', 'section-container', 'white-page');

  const contractAddress = '0x9d2144328e1d618F54Cd38540F5eE50671f6A208';

  const content = `
    <div class="about-info-backdrop"></div> <!-- Элемент для сложного фона -->
    <div class="section-content about-info-content">
      <h1 class="section-title about-info-title fade-in" data-animation-delay="0.1">About <span class="highlight">BTCLE</span></h1>

       <div class="info-section description-section fade-in-up" data-animation-delay="0.7">
        <p class="description-text">Bitcoin Limited Edition (BTCLE) is more than just another token—it represents a bold redefinition of scarcity in a market oversaturated with speculative cryptocurrencies and. As part of a broader vision to launch Bitcoin Layer 2 Limited, BTCLE stands at the forefront of innovation, combining exclusivity, transparency, and decentralization with a long-term roadmap to reshape blockchain finance. At its core, BTCLE is not simply an investment; it is a vision for the future of finance, where scarcity meets innovation. With the upcoming Bitcoin Layer 2 Limited initiative, we are building a scalable, efficient, and secure second layer anchored to the Bitcoin blockchain— the most secure network in existence. With a clear goal to bridge Real World Assets (RWA) into crypto, we are providing a simplified and accessible pathway for the next billion users still tied to traditional finance. Through BTCLE governance, stakeholders will help shape a democratized financial system, empowering individuals and communities to participate in this new decentralized economy.</p>
      </div>
      
      <div class="info-section token-details-section fade-in-up" data-animation-delay="0.2">
        <div class="detail-item fade-in-up" data-animation-delay="0.2">
          <div class="detail-icon">${ICONS.name}</div>
          <div class="detail-text">
            <span class="detail-label">Name</span>
            <span class="detail-value">Bitcoin Limited Edition</span>
          </div>
        </div>
        <div class="detail-item fade-in-up" data-animation-delay="0.3">
          <div class="detail-icon">${ICONS.symbol}</div>
          <div class="detail-text">
            <span class="detail-label">Ticker</span>
            <span class="detail-value">BTCLE</span>
          </div>
        </div>
        <div class="detail-item fade-in-up" data-animation-delay="0.4">
          <div class="detail-icon">${ICONS.supply}</div>
          <div class="detail-text">
            <span class="detail-label">Max Supply</span>
            <span class="detail-value">210,000 BTCLE</span>
          </div>
        </div>
        <div class="detail-item fade-in-up" data-animation-delay="0.5">
          <div class="detail-icon">${ICONS.supply}</div>
          <div class="detail-text">
            <span class="detail-label">Total Supply</span>
            <span class="detail-value">210,000 BTCLE</span>
          </div>
        </div>
        <div class="detail-item fade-in-up" data-animation-delay="0.6">
          <div class="detail-icon">${ICONS.supply}</div>
          <div class="detail-text">
            <span class="detail-label">Circulating Supply</span>
            <span class="detail-value">21,000 BTCLE</span>
          </div>
        </div>
        <div class="detail-item fade-in-up" data-animation-delay="0.7">
          <div class="detail-icon">${ICONS.contract}</div>
          <div class="detail-text">
            <span class="detail-label">Contract Address</span>
            <span class="detail-value"><code>${contractAddress}</code></span>
          </div>
          <button class="copy-button" data-clipboard-text="${contractAddress}" aria-label="Copy contract address">${ICONS.copy}<span class="copy-tooltip">Copy</span></button>
        </div>
      </div>

     
    </div>
  `;

  aboutContainer.innerHTML = content;

  const contentRoot = aboutContainer.querySelector('.about-info-content');

  const oldContractItemButton = aboutContainer.querySelector('.token-details-section .copy-button');
  if (oldContractItemButton) {
    const oldItem = oldContractItemButton.closest('.detail-item');
    if (oldItem && oldItem.parentElement) oldItem.parentElement.removeChild(oldItem);
  }

  const shortAddress = `${contractAddress.slice(0, 10)}...${contractAddress.slice(-6)}`;

  const contractCard = document.createElement('div');
  contractCard.className = 'info-section contract-card fade-in-up';
  contractCard.setAttribute('data-animation-delay', '0.7');
  contractCard.innerHTML = `
    <div class="contract-left">
      <div class="chain-icon">${ICONS.bsc}</div>
      <div class="chain-text">
        <span class="contract-label">Contract Address</span>
        <span class="chain-name">Binance Smart Chain</span>
      </div>
    </div>
    <div class="contract-right">
      <a class="contract-address" href="https://bscscan.com/address/${contractAddress}" target="_blank" rel="noopener">${shortAddress}</a>
      <button class="copy-button" data-clipboard-text="${contractAddress}" aria-label="Copy contract address">${ICONS.copy}<span class="copy-tooltip">Copy</span></button>
    </div>
  `;

  const listingsSection = document.createElement('div');
  listingsSection.className = 'info-section listings-section fade-in-up';
  listingsSection.setAttribute('data-animation-delay', '0.8');
  listingsSection.innerHTML = `
    <h3 class="listings-title">Listed</h3>
    <div class="listings-grid">
      <a class="listing-item" href="https://coinmarketcap.com/currencies/bitcoin-limited-edition/" target="_blank" rel="noopener"><span class="listing-icon">${ICONS.cmc}</span><span class="listing-name">CoinMarketCap</span></a>
      <a class="listing-item" href="https://www.coingecko.com/en/coins/bitcoin-limited-edition" target="_blank" rel="noopener"><span class="listing-icon">${ICONS.coingecko}</span><span class="listing-name">CoinGecko</span></a>
    </div>
    <h3 class="listings-title">DEX Listed</h3>
    <div class="listings-grid">
      <a class="listing-item" href="https://pancakeswap.finance/swap?outputCurrency=0x55d398326f99059fF775485246999027B3197955&inputCurrency=${contractAddress}" target="_blank" rel="noopener"><span class="listing-icon">${ICONS.pancakeswap}</span><span class="listing-name">PancakeSwap</span></a>
      <a class="listing-item" href="https://dexscreener.com/search?q=${contractAddress}" target="_blank" rel="noopener"><span class="listing-icon">${ICONS.dexscreener}</span><span class="listing-name">DEX Screener</span></a>
    </div>
  `;

  if (contentRoot) {
    contentRoot.appendChild(contractCard);
    contentRoot.appendChild(listingsSection);
  }

  // Кнопка Домой (логика та же)
  const homeButton = createHomeButton();
  aboutContainer.appendChild(homeButton);

  layout.mainContainer.appendChild(aboutContainer);
  container.appendChild(layout.container);

  loadStyles();
  initClipboard(aboutContainer);
  // initScrollAnimations(aboutContainer); // Вызовем позже

  // --- Элементы для анимации появления ---
  const sectionContent = aboutContainer.querySelector('.about-info-content');
  // --------------------------------------

  // Скрываем лоадер и ПОТОМ показываем контент
  requestAnimationFrame(() => {
    hideGlobalLoader();
    
    // Добавляем класс для белых страниц к body
    document.body.classList.add('white-page');

    // Небольшая задержка перед показом контента для плавности
    setTimeout(() => {
      // Делаем видимым основной контейнер
      if (sectionContent) {
        sectionContent.classList.add('visible'); 
      }

      // Показываем кнопку домой
      homeButton.classList.add('visible');

      // Инициализируем скролл-анимации для дочерних элементов
      initScrollAnimations(aboutContainer);

      // Убираем overflow: hidden чтобы разрешить прокрутку и показать футер
      document.body.style.overflow = 'auto';

    }, 50); // Минимальная задержка 50ms
  });

  return container;
}

/**
 * Инициализирует копирование в буфер обмена
 * @param {HTMLElement} parentElement
 */
function initClipboard(parentElement) {
  const copyButtons = parentElement.querySelectorAll('.copy-button');
  if (!copyButtons.length) return;
  
  copyButtons.forEach(copyButton => {
    const tooltip = copyButton.querySelector('.copy-tooltip');
    copyButton.addEventListener('click', () => {
      const textToCopy = copyButton.getAttribute('data-clipboard-text');
      navigator.clipboard.writeText(textToCopy).then(() => {
        if (tooltip) tooltip.textContent = 'Copied!';
        copyButton.classList.add('copied');
        setTimeout(() => {
          if (tooltip) tooltip.textContent = 'Copy';
          copyButton.classList.remove('copied');
        }, 1500);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        if (tooltip) {
          tooltip.textContent = 'Error!';
          setTimeout(() => { tooltip.textContent = 'Copy'; }, 1500);
        }
      });
    });
  });
}

/**
 * Загружает стили для страницы
 */
function loadStyles() {
  if (!document.getElementById('about-info-css')) {
    const linkElement = document.createElement('link');
    linkElement.id = 'about-info-css';
    linkElement.rel = 'stylesheet';
    linkElement.href = '/css/pages/about-info.css';
    document.head.appendChild(linkElement);
  }
}

/**
 * Инициализирует скролл-анимации для элементов страницы
 * @param {HTMLElement} parentElement - Родительский элемент для поиска
 */
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
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

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

export default createAboutInfoPage; 
