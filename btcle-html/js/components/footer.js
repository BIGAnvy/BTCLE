/**
 * Модуль подвала сайта
 */

// SVG иконки
const icons = {
  telegram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"></path><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="M6 6l12 12"></path></svg>`,
  youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`
};

/**
 * Загрузка подвала
 * @param {HTMLElement} element - DOM-элемент для вставки подвала
 */
export async function loadFooter(element) {
  const currentYear = new Date().getFullYear();
  
  // HTML подвала
  const footerHtml = `
    <div class="footer">
      <!-- Панель социальных сетей -->
      <div class="social-bar">
        <div class="container">
          <div class="social-links">
            <a href="https://t.me/bitcoinlimitededition" class="social-link" title="Telegram" target="_blank" rel="noopener noreferrer">
              ${icons.telegram}
            </a>
            <a href="https://x.com/bitcoinbtcle?s=11&t=JWlxHx9VQF6b-5TZPkL5NQ" class="social-link" title="X (Twitter)" target="_blank" rel="noopener noreferrer">
              ${icons.x}
            </a>
            <a href="https://youtube.com/@bitcoin.limited.edition?si=h6doe2qNbQiscoAl" class="social-link" title="YouTube" target="_blank" rel="noopener noreferrer">
              ${icons.youtube}
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-container">
        <div class="footer-grid">
          <!-- Информация о проекте -->
          <div class="footer-info">
            <div class="footer-logo">
              Bitcoin Limited Edition
            </div>
            <div class="footer-token" style="margin-bottom: 10px;">BTCLE 210,000</div>
            
            <p class="footer-description">
              BTCLE is a Bitcoin Layer-2 ecosystem with a fixed supply of 210,000 tokens, 
              designed for sustainable growth and true decentralization.
            </p>
            
            <!-- Форма подписки на рассылку -->
            <div class="newsletter">
              <h3 class="newsletter-title">Stay Updated</h3>
              <div class="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  class="newsletter-input"
                />
                <button class="newsletter-button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <!-- Навигация по сайту -->
          <div class="footer-nav">
            <div class="footer-nav-column">
              <h3 class="footer-nav-title">Site Map</h3>
              <ul class="footer-nav-list">
                <li><a href="?page=about" class="footer-nav-link" data-navigate>About</a></li>
                <li><a href="?page=why-btcle" class="footer-nav-link" data-navigate>Why BTCLE?</a></li>
                <li><a href="?page=tokenomics" class="footer-nav-link" data-navigate>Tokenomics</a></li>
                <li><a href="?page=whitepaper" class="footer-nav-link" data-navigate>Light Paper</a></li>
                <li><a href="?page=roadmap" class="footer-nav-link" data-navigate>Roadmap</a></li>
                <li><a href="?page=connect" class="footer-nav-link" data-navigate>Connect</a></li>
              </ul>
            </div>
            
            <div class="footer-nav-column">
              <h3 class="footer-nav-title">Connect</h3>
              <ul class="footer-nav-list">
                <li><a href="mailto:info@bitcoin-limitededition.com" class="footer-nav-link">Email Us</a></li>
                <li><a href="https://t.me/bitcoinlimitededition" class="footer-nav-link" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                <li><a href="https://x.com/bitcoinbtcle" class="footer-nav-link" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
                <li><a href="#" class="footer-nav-link">Discord</a></li>
                <li><a href="#" class="footer-nav-link">Medium</a></li>
              </ul>
            </div>
            
          </div>
        </div>
        
        <!-- Нижняя часть подвала -->
        <div class="footer-bottom">
          <div class="footer-disclaimer">
            <p class="footer-disclaimer-text">
              DISCLAIMER: Cryptocurrency investments involve high market risk. 
              Bitcoin Limited Edition is not responsible for your trading losses. 
              The opinions expressed on this website do not constitute financial advice. 
              Always do your own research before investing.
            </p>
            
            <p class="footer-copyright">
              &copy; ${currentYear} Bitcoin Limited Edition. All rights reserved By Bitcoin Limited Edition.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Вставка HTML
  element.innerHTML = footerHtml;
  
  // Инициализация обработчиков событий
  initFooterEvents();
}

/**
 * Инициализация обработчиков событий для подвала
 */
function initFooterEvents() {
  // Обработчик для формы подписки
  const newsletterForm = document.querySelector('.newsletter-form');
  const newsletterInput = document.querySelector('.newsletter-input');
  const newsletterButton = document.querySelector('.newsletter-button');
  
  if (newsletterForm) {
    newsletterButton.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Проверка email
      const email = newsletterInput.value.trim();
      
      if (email && validateEmail(email)) {
        // Здесь будет логика отправки формы
        alert(`Подписка на рассылку для ${email} успешно оформлена!`);
        newsletterInput.value = '';
      } else {
        // Показываем ошибку
        alert('Пожалуйста, введите корректный email адрес.');
      }
    });
  }
}

/**
 * Валидация email
 * @param {string} email - Email для проверки
 * @returns {boolean} - Результат валидации
 */
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
} 