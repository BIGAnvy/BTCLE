/**
 * Страница "Tokenomics"
 * @module pages/tokenomics
 */
import { createLayout } from '../components/layout.js';
import { hideGlobalLoader } from '../components/loader.js';

// SVG иконки (более описательные)
const ICONS = {
  idCard: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 8h7"/><path d="M7 12h10"/><circle cx="17" cy="16" r="0"/></svg>`,
  tag: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82Z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>`,
  plusCircle: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>`,
  arrows: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 15-4 4-4-4"/><path d="M17 19V6a2 2 0 0 0-2-2H3"/><path d="m3 9 4-4 4 4"/><path d="M7 5v13a2 2 0 0 0 2 2h12"/></svg>`,
  shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>`,
  calendar: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>`,
  chevronDown: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>`,
  clock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>`,
  uncx: `<img src="/images/uncx.png" alt="UNCX Network" width="20" height="20" style="object-fit: contain;">`,
  landmark: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="3" x2="21" y1="22" y2="22" />
    <line x1="6" x2="6" y1="18" y2="11" />
    <line x1="10" x2="10" y1="18" y2="11" />
    <line x1="14" x2="14" y1="18" y2="11" />
    <line x1="18" x2="18" y1="18" y2="11" />
    <rect width="18" height="7" x="3" y="11" rx="2" />
    <path d="m12 7-3-2-3 2v4h18V7l-3-2-3 2" />
  </svg>`,
  copy: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>`,
  check: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>`,
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>`,
  info: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="16" y2="12" />
    <line x1="12" x2="12.01" y1="8" y2="8" />
  </svg>`,
  lock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>`,
  // Иконки для принципов распределения
  maxSupply: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>`,
  circulating: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 15-4 4-4-4"/><path d="M17 19V6a2 2 0 0 0-2-2H3"/><path d="m3 9 4-4 4 4"/><path d="M7 5v13a2 2 0 0 0 2 2h12"/></svg>`,
  locked: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  mechanism: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.5 3.5-1.7 1.7L12 5.4 10.2 7.2 8.5 5.5 12 2zm6.5 6.5L22 12l-3.5 3.5-1.7-1.7L18.6 12l-1.8-1.8 1.7-1.7zM12 18.6l1.8-1.8 1.7 1.7L12 22l-3.5-3.5 1.7-1.7L12 18.6zM5.4 12l1.8 1.8-1.7 1.7L2 12l3.5-3.5 1.7 1.7L5.4 12zm2.8 0L12 8.2 15.8 12 12 15.8 8.2 12z"/></svg>`
};

// Данные для страницы
const contractAddress = '0x9d2144328e1d618F54Cd38540F5eE50671f6A208';

const tokenCardData = [
  {
    title: 'NAME',
    value: 'Bitcoin Limited Edition',
    icon: ICONS.idCard,
  },
  {
    title: 'TICKER',
    value: 'BTCLE',
    icon: ICONS.tag,
  },
  {
    title: 'MAX SUPPLY',
    value: '210,000',
    icon: ICONS.plusCircle,
    highlight: true,
  },
  {
    title: 'CIRCULATING SUPPLY',
    value: '21,000',
    icon: ICONS.arrows,
  },
//   {
//     title: 'CONTRACT',
//     isContract: true,
//     icon: ICONS.shield,
//     value: contractAddress,
//   }
];

const distributionData = [
  { name: 'Circulating Supply (Trading)', value: 10, color: '#000000' },
  { name: 'Locked (10-Year Vesting)', value: 90, color: '#666666' },
];

const monthlyBreakdown2026 = [
  { month: 'March', released: 2795, cumulative: 2795 },
  { month: 'April', released: 2795, cumulative: 5590 },
  { month: 'May', released: 2795, cumulative: 8385 },
  { month: 'June', released: 2795, cumulative: 11180 },
  { month: 'July', released: 2795, cumulative: 13975 },
  { month: 'August', released: 2795, cumulative: 16770 },
  { month: 'September', released: 2795, cumulative: 19565 },
  { month: 'October', released: 2795, cumulative: 22360 },
  { month: 'November', released: 2795, cumulative: 25155 },
  { month: 'December', released: 2795, cumulative: 27950 }
];

const annualVesting = [
  { year: '2026', monthRange: '3,800 → 2,700', annual: 39000, remaining: 150000 },
  { year: '2027', monthRange: '2,650 → 2,100', annual: 28500, remaining: 121500 },
  { year: '2028', monthRange: '2,075 → 1,800', annual: 23250, remaining: 98250 },
  { year: '2029', monthRange: '1,785 → 1,620', annual: 20430, remaining: 77820 },
  { year: '2030', monthRange: '1,610 → 1,500', annual: 18660, remaining: 59160 },
  { year: '2031', monthRange: '1,495 → 1,440', annual: 17610, remaining: 41550 },
  { year: '2032', monthRange: '1,420 → 1,200', annual: 15720, remaining: 25830 },
  { year: '2033', monthRange: '1,000 → 835', annual: 11010, remaining: 14820 },
  { year: '2034', monthRange: '700 → 645', annual: 8070, remaining: 6750 },
  { year: '2035', monthRange: '600 → 425', annual: 6750, remaining: 0 }
];

/**
 * Создает содержимое страницы "Tokenomics"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createTokenomicsPage(container) {
  // Лоадер уже показан роутером
  // showGlobalLoader();
  
  // Создаем основной layout с шапкой и футером
  const layout = createLayout();
  
  // Создаем контейнер для контента
  const tokenomicsContainer = document.createElement('div');
  tokenomicsContainer.classList.add('section-container');
  tokenomicsContainer.classList.add('tokenomics-container');
  
  // Создаем содержимое заголовка секции
  const headerContent = `
    <div class="tokenomics-header fade-in">
      <h1 class="section-title">BTCLE Tokenomics</h1>
      <p class="section-subtitle">Fixed Supply. Transparent. Fair. Non-Inflationary.</p>
      
    </div>
  `;
  
  tokenomicsContainer.innerHTML = headerContent;
  
  // Добавляем блок с обзором максимального предложения
  const supplyOverviewSection = document.createElement('div');
  supplyOverviewSection.classList.add('overview-section', 'fade-in-up');
  supplyOverviewSection.innerHTML = `
    <div class="overview-content">
      <h2 class="overview-title">Max Supply Overview</h2>
      <div class="overview-text">
        <p>Bitcoin Limited Edition (BTCLE) is a <strong>fixed-supply crypto asset</strong> with a max supply of <span class="highlight-text">210,000 BTCLE</span>.</p> 
        <p>This non-inflationary model reinforces BTCLE's mission of sustainable growth, transparent governance, and alignment with long-term holders.</p>
        
        <p>At the time of launch, <span class="percent">10%</span> of the total supply (21,000 BTCLE) will be released to the public as circulating supply to support trading liquidity and early adoption.</p>
        
        <p>The remaining <span class="percent">90%</span> (189,000 BTCLE) is locked and allocated for a long-term vesting plan governed by a smart contract. BTCLE's vesting does not include a cliff unlock period, and does not follow a linear vesting model. Instead, it employs a <span class="highlight-text">monthly declining unlock mechanism</span>, where tokens are gradually released in decreasing amounts over a 10-year period, starting March 2026 and concluding December 2035.</p>
      </div>
    </div>
  `;
  
  tokenomicsContainer.appendChild(supplyOverviewSection);
  
  // Добавляем токен-карточки
  const tokensGrid = document.createElement('div');
  tokensGrid.classList.add('tokens-grid', 'fade-in-up');
  
  tokenCardData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('token-card', 'fade-in-up');
    
    if (card.highlight) {
      cardElement.classList.add('highlighted');
    }
    
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('card-icon-container');
    iconContainer.innerHTML = card.icon;
    
    const titleElement = document.createElement('div');
    titleElement.classList.add('card-title');
    titleElement.textContent = card.title;
    
    const valueContainer = document.createElement('div');
    valueContainer.classList.add('card-value-container');
    
    if (card.isContract) {
      const addressCode = document.createElement('code');
      addressCode.classList.add('contract-address');
      addressCode.textContent = card.value;
      
      const copyButton = document.createElement('button');
      copyButton.classList.add('copy-button');
      copyButton.innerHTML = ICONS.copy;
      copyButton.title = 'Copy contract address';
      
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(card.value);
        copyButton.innerHTML = ICONS.check;
        setTimeout(() => {
          copyButton.innerHTML = ICONS.copy;
        }, 2000);
      });
      
      valueContainer.appendChild(addressCode);
      valueContainer.appendChild(copyButton);
    } else {
      const valueElement = document.createElement('div');
      valueElement.classList.add('card-value');
      valueElement.textContent = card.value;
      valueContainer.appendChild(valueElement);
    }
    
    cardElement.appendChild(iconContainer);
    cardElement.appendChild(titleElement);
    cardElement.appendChild(valueContainer);
    
    tokensGrid.appendChild(cardElement);
  });
  
  tokenomicsContainer.appendChild(tokensGrid);
  
  // Создаем блок с целью распределения
  const purposeSection = document.createElement('div');
  purposeSection.classList.add('purpose-section', 'fade-in-up');
  purposeSection.innerHTML = `
    <h2 class="purpose-title">Purpose of Distribution</h2>
    <p class="purpose-text">To support responsible circulation, sustainable growth, and long-term value alignment, BTCLE's token distribution is structured as follows:</p>
    
    <div class="distribution-table-container">
      <h3 class="table-subtitle">Distribution Breakdown</h3> 
      <table class="distribution-table">
        <thead>
          <tr>
            <th>Allocation</th>
            <th>BTCLE</th>
            <th>% of Total Supply</th>
          </tr>
        </thead>
        <tbody>
          <tr class="total-row">
            <td>Max Supply</td>
            <td class="amount-cell">210,000</td>
            <td class="percent-cell">100%</td>
          </tr>
          <tr>
            <td>Circulating Supply</td>
            <td class="amount-cell">21,000</td>
            <td class="percent-cell">10%</td>
          </tr>
          <tr>
            <td class="vesting-cell">
              <div class="vesting-content">
                <span class="vesting-text">Locked vesting allocation (10-Year Vesting)</span>
                <a href="https://app.uncx.network/vesting-v2/token/chain/56/address/0x9d2144328e1d618f54cd38540f5ee50671f6a208" target="_blank" rel="noopener" class="vesting-link">
                  <span class="vesting-icon">${ICONS.uncx}</span>
                  <span class="vesting-link-text">UNCX Network</span>
                </a>
              </div>
            </td>
            <td class="amount-cell">189,000</td>
            <td class="percent-cell">90%</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="liquidity-strategy">
      <h3 class="strategy-title">Liquidity & Unlock Strategy</h3>
      <p class="strategy-intro">Driven by our commitment to absolute transparency and safeguarding the community from sudden sell-offs, BTCLE has implemented a gradual monthly unlock schedule in small, controlled amounts.</p>
      
      <p class="strategy-highlight">To guarantee strong and sustainable liquidity, <span class="percent">85%</span> of the monthly unlocked tokens are deposited into PancakeSwap V3 and permanently locked and publicly verifiable.</p>
      
      <p class="strategy-approach">This approach secures two key objectives:</p>
      
      <ul class="strategy-objectives">
        <li><span class="objective-icon">●</span> <span class="objective-text"><strong>Price Protection:</strong> Mitigating violent market fluctuations and shielding the community from instability.</span></li>
        <li><span class="objective-icon">●</span> <span class="objective-text"><strong>Healthy Market Growth:</strong> Creating a sustainable trading environment that supports long-term stability, organic adoption, and steady growth.</span></li>
      </ul>
    </div>
  `;
  
  tokenomicsContainer.appendChild(purposeSection);
  
  // Создаем секцию распределения токенов
  const distributionSection = document.createElement('div');
  distributionSection.classList.add('distribution-section', 'fade-in-up');

  distributionSection.innerHTML = `
    <h2 class="distribution-title">BTCLE Distribution</h2>

    <div class="vesting-mechanics">
      <h3 class="mechanics-title">Vesting Mechanics</h3>
      <ul class="mechanics-list">
        <li><span class="mechanics-label">Vesting Start:</span> <span class="mechanics-value">March 2026</span></li>
        <li><span class="mechanics-label">Vesting End:</span> <span class="mechanics-value">December 2035</span></li>
        <li><span class="mechanics-label">Mechanism:</span> <span class="mechanics-value">Monthly token release via smart contract, following a gradually decreasing emission schedule</span></li>
        <li><span class="mechanics-label">Governance:</span> <span class="mechanics-value">Fully transparent and on-chain</span></li>
      </ul>
      <p class="mechanics-summary">This structure is designed to reduce short-term sell pressure and reward holders with a progressively deflationary release curve.</p>
    </div>

    <div class="monthly-vesting-section">
      <button class="toggle-button" id="monthly-toggle">
        <span class="toggle-icon">${ICONS.calendar}</span>
        <span class="toggle-text">Monthly Vesting Breakdown (2026)</span>
        <span class="chevron">${ICONS.chevronDown}</span>
      </button>

      <div class="monthly-content" id="monthly-content" style="display: none;">
        <div class="table-container">
          <table class="vesting-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>BTCLE Released</th>
                <th>Cumulative Released</th>
              </tr>
            </thead>
            <tbody>
              ${monthlyBreakdown2026.map(month => `
                <tr>
                  <td>${month.month}</td>
                  <td class="value-cell">${month.released.toLocaleString()}</td>
                  <td class="cumulative-cell">${month.cumulative.toLocaleString()}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="remaining-box">
          <p>
            Remaining Locked Supply (as of December 2026):
            <span class="remaining-value">161,000 BTCLE</span>
          </p>
        </div>
      </div>
    </div>
  `;
  
  tokenomicsContainer.appendChild(distributionSection);
  
  // Создаем секцию годового вестинга
  const vestingSection = document.createElement('div');
  vestingSection.classList.add('vesting-schedule', 'fade-in-up');
  
  vestingSection.innerHTML = `
    <button class="toggle-button vesting-toggle" id="vesting-toggle">
      <div class="toggle-left">
        <span class="toggle-icon">${ICONS.clock}</span>
        <span class="toggle-text">Vesting Schedule</span>
      </div>
      <span class="chevron">${ICONS.chevronDown}</span>
    </button>
    
    <div class="vesting-content" id="vesting-content" style="display: none;">
      <div class="annual-header">
        <span class="annual-icon">${ICONS.landmark}</span>
        <h3>Annual Vesting Schedule (2026–2035)</h3>
      </div>
      
      <div class="table-container">
        <table class="vesting-table annual-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Monthly Range (BTCLE)</th>
              <th>Annual Total</th>
              <th>Remaining Locked Supply</th>
            </tr>
          </thead>
          <tbody>
            ${annualVesting.map(year => `
              <tr>
                <td>${year.year}</td>
                <td>${year.monthRange}</td>
                <td class="annual-total">${year.annual.toLocaleString()}</td>
                <td>${year.remaining.toLocaleString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
  
  tokenomicsContainer.appendChild(vestingSection);
  
  // Добавляем блок с принципами распределения
  const principlesSection = document.createElement('div');
  principlesSection.classList.add('principles-section', 'fade-in-up');
  principlesSection.innerHTML = `
    <h2 class="principles-title">Summary of Distribution Principles</h2>
    <ul class="principles-list">
      <li class="principles-item">
        <div class="principles-icon">${ICONS.maxSupply}</div>
        <div class="principles-content">
          <strong>Max Supply</strong>
          <span class="principles-text">210,000 BTCLE (non-inflationary)</span>
        </div>
      </li>
      <li class="principles-item">
        <div class="principles-icon">${ICONS.circulating}</div>
        <div class="principles-content">
          <strong>Circulating Supply</strong>
          <span class="principles-text">21,000 BTCLE (10% released for trading at launch)</span>
        </div>
      </li>
      <li class="principles-item">
        <div class="principles-icon">${ICONS.locked}</div>
        <div class="principles-content">
          <strong>Locked Supply</strong>
          <span class="principles-text">189,000 BTCLE (90% locked with a 10-year vesting period)</span>
        </div>
      </li>
      <li class="principles-item">
        <div class="principles-icon">${ICONS.mechanism}</div>
        <div class="principles-content">
          <strong>Release Mechanism</strong>
          <span class="principles-text">Smart contract-based, with a deflationary model</span>
        </div>
      </li>
    </ul>
  `;
  
  tokenomicsContainer.appendChild(principlesSection);
  
  // Добавляем блок о прозрачности и управлении
  const transparencySection = document.createElement('div');
  transparencySection.classList.add('transparency-section', 'fade-in-up');
  transparencySection.innerHTML = `
    <h2 class="transparency-title">Transparency and Governance Commitment</h2>
    <div class="transparency-content">
      <p>At the core of this vision is the BTCLE governance token, designed to empower its holders with true participation rights. Beyond simple speculation, BTCLE represents ownership with responsibility; every holder will have the opportunity to vote, propose changes, and directly influence the future.</p>
      <ul class="transparency-list">
        <li><span class="check-icon">●</span> Immutable and automated via audited smart contracts.</li>
        <li><span class="check-icon">●</span> Fully auditable, with all token movements visible on-chain in real time.</li>
      </ul>
      <p>The team reserves the right to propose adjustments to the vesting schedule in response to regulatory changes or community governance proposals. All modifications will be transparently disclosed and in accordance with BTCLE's long-term mission and ecosystem alignment.</p>
      <p>BTCLE follows a declining monthly issuance model, gradually reducing token release over time, supporting price stability and incentivizing long-term participation. And this transparency will strengthen community trust in the Bitcoin Layer 2 Limited project.</p>
    </div>
  `;
  
  tokenomicsContainer.appendChild(transparencySection);
  
  // Добавляем кнопку возврата на главную
  const homeButton = createHomeButton();
  tokenomicsContainer.appendChild(homeButton);
  
  // Добавляем контент в layout
  layout.mainContainer.appendChild(tokenomicsContainer);
  
  // Добавляем layout в контейнер страницы
  container.appendChild(layout.container);
  
  // Добавляем стили
  loadStyles();

  // Инициализируем обработчики событий
  initEventHandlers();

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
    
    // Анимируем заголовок (оставляем как есть)
    const tokenomicsHeader = document.querySelector('.tokenomics-header');
    if (tokenomicsHeader) {
      tokenomicsHeader.classList.add('visible');
    }
    
    // Инициализируем новые скролл-анимации
    initScrollAnimations(tokenomicsContainer);
    
    // Показываем кнопку домой (можно тоже через IntersectionObserver, но пока так)
    homeButton.classList.add('visible');
  }, 100); // Уменьшаем задержку
  
  return container;
}


/**
 * Инициализирует обработчики событий на странице
 */
function initEventHandlers() {
  // Обработчик для переключения отображения месячной разбивки
  const monthlyToggle = document.getElementById('monthly-toggle');
  const monthlyContent = document.getElementById('monthly-content');
  
  if (monthlyToggle && monthlyContent) {
    monthlyToggle.addEventListener('click', () => {
      const isHidden = monthlyContent.style.display === 'none';
      monthlyContent.style.display = isHidden ? 'block' : 'none';
      
      // Вращаем стрелку
      const chevron = monthlyToggle.querySelector('.chevron');
      if (chevron) {
        chevron.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0)';
      }
      
      // Анимация появления содержимого
      if (isHidden) {
        monthlyContent.classList.add('visible');
      } else {
        monthlyContent.classList.remove('visible');
      }
    });
  }
  
  // Обработчик для переключения отображения годового вестинга
  const vestingToggle = document.getElementById('vesting-toggle');
  const vestingContent = document.getElementById('vesting-content');
  
  if (vestingToggle && vestingContent) {
    vestingToggle.addEventListener('click', () => {
      const isHidden = vestingContent.style.display === 'none';
      vestingContent.style.display = isHidden ? 'block' : 'none';
      
      // Вращаем стрелку
      const chevron = vestingToggle.querySelector('.chevron');
      if (chevron) {
        chevron.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0)';
      }
      
      // Анимация появления содержимого
      if (isHidden) {
        vestingContent.classList.add('visible');
      } else {
        vestingContent.classList.remove('visible');
      }
    });
  }
}

/**
 * Загружает стили для страницы
 */
function loadStyles() {
  // Проверяем, загружены ли уже стили
  if (!document.getElementById('tokenomics-css')) {
    const linkElement = document.createElement('link');
    linkElement.id = 'tokenomics-css';
    linkElement.rel = 'stylesheet';
    linkElement.href = '/css/tokenomics.css';
    document.head.appendChild(linkElement);
  }
}

/**
 * Создает кнопку возврата на главную страницу
 * @returns {HTMLElement} Кнопка возврата
 */
function createHomeButton() {
  const button = document.createElement('a');
  button.href = '/';
  button.classList.add('home-button');
  button.innerHTML = ICONS.home;
  button.title = 'Back to Home';
  
  // Обработчик клика
  button.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Анимация перед переходом
    document.body.classList.add('page-exit');
    
    // Переход после анимации
    setTimeout(() => {
      window.location.href = '/';
    }, 300);
  });
  
  return button;
}

/**
 * Инициализирует скролл-анимации для элементов страницы
 * @param {HTMLElement} parentElement - Родительский элемент для поиска
 */
function initScrollAnimations(parentElement) {
  // Выбираем все секции/элементы с классом fade-in-up
  const elementsToAnimate = parentElement.querySelectorAll('.fade-in-up');
  
  if (!elementsToAnimate.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // Порог видимости
    rootMargin: '0px 0px -50px 0px' // Небольшое смещение вверх
  });
  
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
}

// Экспорт функции по умолчанию для совместимости
export default createTokenomicsPage; 