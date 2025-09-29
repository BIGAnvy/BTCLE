/**
 * Страница "About Info"
 * @module pages/about-info
 */
import { createLayout } from '../components/layout.js';
import { hideGlobalLoader } from '../components/loader.js';

// Иконки (качественные SVG)
const ICONS = {
  copy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
  name: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
  symbol: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path></svg>`,
  maxSupply: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8m-4-4v8"></path></svg>`,
  totalSupply: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4"></path></svg>`,
  circulatingSupply: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>`,
  contract: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10,9 9,9 8,9"></polyline></svg>`,
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
};

// Бренд-иконки
ICONS.cmc = `<img src="/images/cmarketcap.png" alt="CoinMarketCap" width="28" height="28" style="object-fit: contain;">`;
ICONS.coingecko = `<img src="/images/coingeko.png" alt="CoinGecko" width="28" height="28" style="object-fit: contain;">`;
ICONS.pancakeswap = `<img src="/images/pancakeswap.png" alt="PancakeSwap" width="28" height="28" style="object-fit: contain;">`;
ICONS.dexscreener = `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#111"/><path d="M10 22l4-8 3 6 2-4 3 6H10z" fill="#fff"/></svg>`;
ICONS.bsc = `<img src="/images/bnsmartchain.png" alt="BNB Chain" width="24" height="24" style="object-fit: contain;">`;
ICONS.uncx = `<img src="/images/uncx.png" alt="UNCX Network" width="28" height="28" style="object-fit: contain;">`;
ICONS.locked = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><circle cx="12" cy="16" r="1"></circle><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;

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
        <p class="description-text">Bitcoin Limited Edition (BTCLE) is more than just another token, it represents a bold redefinition of scarcity in a market oversaturated with speculative cryptocurrencies and. As part of a broader vision to launch Bitcoin Layer 2 Limited, BTCLE stands at the forefront of innovation, combining exclusivity, transparency, and decentralization with a long-term roadmap to reshape blockchain finance. At its core, BTCLE is not simply an investment; it is a vision for the future of finance, where scarcity meets innovation. With the upcoming Bitcoin Layer 2 Limited initiative, we are building a scalable, efficient, and secure second layer anchored to the Bitcoin blockchain, the most secure network in existence. With a clear goal to bridge Real World Assets (RWA) into crypto, we are providing a simplified and accessible pathway for the next billion users still tied to traditional finance. Through BTCLE governance, stakeholders will help shape a democratized financial system, empowering individuals and communities to participate in this new decentralized economy.</p>
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
          <div class="detail-icon">${ICONS.maxSupply}</div>
          <div class="detail-text">
            <span class="detail-label">Max Supply</span>
            <span class="detail-value">210,000 BTCLE</span>
          </div>
        </div>
        <div class="detail-item fade-in-up" data-animation-delay="0.5">
          <div class="detail-icon">${ICONS.totalSupply}</div>
          <div class="detail-text">
            <span class="detail-label">Total Supply</span>
            <span class="detail-value">210,000 BTCLE</span>
          </div>
        </div>
        <div class="detail-item fade-in-up" data-animation-delay="0.6">
          <div class="detail-icon">${ICONS.circulatingSupply}</div>
          <div class="detail-text">
            <span class="detail-label">Circulating Supply</span>
            <span class="detail-value">21,000 BTCLE</span>
          </div>
        </div>
        <div class="detail-item fade-in-up" data-animation-delay="0.7">
          <div class="detail-icon">${ICONS.locked}</div>
          <div class="detail-text">
            <span class="detail-label">10 year Locked & Vested</span>
            <span class="detail-value">189,000 BTCLE</span>
          </div>
        </div>
        <div class="detail-item fade-in-up" data-animation-delay="0.8">
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

  const vestingSection = document.createElement('div');
  vestingSection.className = 'info-section vesting-section fade-in-up';
  vestingSection.setAttribute('data-animation-delay', '0.7');
  vestingSection.innerHTML = `
    <h3 class="listings-title">Vesting Timeline 10 year</h3>
    <div class="listings-grid">
      <a class="listing-item" href="https://app.uncx.network/vesting-v2/token/chain/56/address/0x9d2144328e1d618f54cd38540f5ee50671f6a208" target="_blank" rel="noopener"><span class="listing-icon">${ICONS.uncx}</span><span class="listing-name">UNCX Network</span></a>
    </div>
  `;

  const contractCard = document.createElement('div');
  contractCard.className = 'info-section contract-card fade-in-up';
  contractCard.setAttribute('data-animation-delay', '0.8');
  contractCard.innerHTML = `
    <div class="contract-left">
      <div class="chain-icon">${ICONS.bsc}</div>
      <div class="chain-text">
        <span class="contract-label">Contract Address</span>
        <span class="chain-name">BNB Chain</span>
      </div>
    </div>
    <div class="contract-right">
      <a class="contract-address" href="https://bscscan.com/address/${contractAddress}" target="_blank" rel="noopener">${contractAddress}</a>
      <button class="copy-button" data-clipboard-text="${contractAddress}" aria-label="Copy contract address">${ICONS.copy}<span class="copy-tooltip">Copy</span></button>
    </div>
  `;

  const listingsSection = document.createElement('div');
  listingsSection.className = 'info-section listings-section fade-in-up';
  listingsSection.setAttribute('data-animation-delay', '0.9');
  listingsSection.innerHTML = `
    <h3 class="listings-title">Listed</h3>
    <div class="listings-grid">
      <a class="listing-item" href="https://coinmarketcap.com/currencies/bitcoin-limited-edition/" target="_blank" rel="noopener"><span class="listing-icon">${ICONS.cmc}</span><span class="listing-name">CoinMarketCap</span></a>
      <a class="listing-item" href="https://www.coingecko.com/en/coins/bitcoin-limited-edition" target="_blank" rel="noopener"><span class="listing-icon" style="border-radius: 50%;">${ICONS.coingecko}</span><span class="listing-name">CoinGecko</span></a>
    </div>
    <h3 class="listings-title">DEX Listed</h3>
    <div class="listings-grid">
      <a class="listing-item" href="https://pancakeswap.finance/swap?outputCurrency=0x55d398326f99059fF775485246999027B3197955&inputCurrency=${contractAddress}" target="_blank" rel="noopener"><span class="listing-icon">${ICONS.pancakeswap}</span><span class="listing-name">PancakeSwap</span></a>
      <a class="listing-item" href="https://dexscreener.com/search?q=${contractAddress}" target="_blank" rel="noopener"><span class="listing-icon"><img src="/images/dexscreener.png" alt="DEX Screener" width="24" height="24" /></span><span class="listing-name">DEX Screener</span></a>
    </div>
  `;

  if (contentRoot) {
    contentRoot.appendChild(vestingSection);
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

  // Показываем футер
  const footer = document.getElementById('footer');
  if (footer) {
    footer.style.display = 'block';
    footer.classList.add('visible');
  }

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
