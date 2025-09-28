/**
 * Модуль подвала сайта
 */

// Иконки теперь используются как PNG изображения в HTML

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
          <div class="social-bar-content">
            <p class="footer-copyright">
              &copy; ${currentYear} BTCLE. All rights reserved By Bitcoin Limited Edition.
            </p>
            <div class="social-links">
              <a href="https://t.me/bitcoinlimitededition" class="social-link" title="Telegram" target="_blank" rel="noopener noreferrer">
                <img src="/images/tg.png" alt="Telegram" width="24" height="24" />
              </a>
              <a href="https://x.com/bitcoinbtcle?s=11&t=JWlxHx9VQF6b-5TZPkL5NQ" class="social-link" title="X (Twitter)" target="_blank" rel="noopener noreferrer">
                <img src="/images/xicon.png" alt="X (Twitter)" width="24" height="24" />
              </a>
              <a href="https://youtube.com/@bitcoin.limited.edition?si=h6doe2qNbQiscoAl" class="social-link" title="YouTube" target="_blank" rel="noopener noreferrer">
                <img src="/images/youtube.png" alt="YouTube" width="24" height="24" />
              </a>
            </div>
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
              <h3 class="footer-nav-title">Connect</h3>
              <ul class="footer-nav-list">
                <li><a href="mailto:info@bitcoin-limitededition.com" class="footer-nav-link">Email Us</a></li>
                <li><a href="https://t.me/bitcoinlimitededition" class="footer-nav-link" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                <li><a href="https://x.com/bitcoinbtcle" class="footer-nav-link" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
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