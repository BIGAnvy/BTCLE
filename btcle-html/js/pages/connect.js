/**
 * Страница "Connect"
 * @module pages/connect
 */
import { createLayout } from '../components/layout.js';
import { hideGlobalLoader } from '../components/loader.js';

// SVG иконки социальных сетей
const ICONS = {
  telegram: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 2 11 13"/>
    <path d="m22 2-7 20-4-9-9-4z"/>
  </svg>`,
  
  twitter: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>`,
  
  email: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>`,
  
  trend: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>`,
  
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>`
};

/**
 * Создает содержимое страницы "Connect"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createConnectPage(container) {
  const layout = createLayout();
  
  const connectContainer = document.createElement('div');
  connectContainer.classList.add('section-container');
  connectContainer.classList.add('connect-container');
  
  connectContainer.innerHTML = `
    <!-- Hero Section -->
    <section class="connect-hero">
      <div class="hero-content" id="connect-hero-content">
        <h1 class="hero-title">Let's Get In Touch With Us</h1>
        <p class="hero-subtitle">Connect with the BTCLE community and stay updated on our progress.</p>
        <div class="hero-line"></div>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="main-content-section">
      <div class="form-container">
        <!-- Contact Form -->
        <div class="form-section">
          <h3>Send us a message</h3>
          <form class="contact-form" id="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Full Name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email here" required>
              </div>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Enter Your Message" rows="6" required></textarea>
            </div>
            
            <button type="submit" class="submit-button">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Home Button -->
    <a href="/" class="home-button" data-navigate>${ICONS.home}</a>
  `;
  
  layout.mainContainer.appendChild(connectContainer);
  container.appendChild(layout.container);
  
  loadStyles();
  initHeroAppearAnimation();
  initScrollAnimations();
  initContactForm();
  
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
    const homeButton = container.querySelector('.home-button');
    if(homeButton) homeButton.classList.add('visible');
  }, 500);
  
  return container;
}

/**
 * Загружает стили для страницы
 */
function loadStyles() {
  if (!document.getElementById('connect-css')) {
    const linkElement = document.createElement('link');
    linkElement.id = 'connect-css';
    linkElement.rel = 'stylesheet';
    linkElement.href = '/css/pages/connect.css';
    document.head.appendChild(linkElement);
  }
}

/**
 * Инициализирует анимацию появления Hero Section
 */
function initHeroAppearAnimation() {
  const heroContent = document.getElementById('connect-hero-content');
  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.add('hero-appear-active');
    }, 100);
  }
}

/**
 * Инициализирует анимации при скролле
 */
function initScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll('.contact-block, .form-section');
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
  
  elementsToAnimate.forEach((element, index) => {
    element.dataset.animationDelay = (index * 0.1).toString();
    observer.observe(element);
  });
}

/**
 * Инициализирует обработку формы контактов
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', handleFormSubmit);
}

/**
 * Обработчик отправки формы
 * @param {Event} event - Событие отправки формы
 */
function handleFormSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Создаем mailto ссылку
  const subject = encodeURIComponent(`BTCLE Contact Form - ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailtoLink = `mailto:info@bitcoin-limitededition.com?subject=${subject}&body=${body}`;
  
  // Открываем почтовый клиент
  window.location.href = mailtoLink;
  
  // Очищаем форму
  event.target.reset();
  
  // Показываем уведомление
  showNotification('Thank you! Your email client should now open.');
}

/**
 * Показывает уведомление пользователю
 * @param {string} message - Текст уведомления
 */
function showNotification(message) {
  // Создаем элемент уведомления
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  // Добавляем стили
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: '#000',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    zIndex: '1000',
    fontSize: '14px',
    maxWidth: '300px',
    opacity: '0',
    transform: 'translateY(-20px)',
    transition: 'all 0.3s ease'
  });
  
  document.body.appendChild(notification);
  
  // Анимация появления
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateY(0)';
  }, 100);
  
  // Удаление через 3 секунды
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

export default createConnectPage;
