import './style.css'
import logoZas from './assets/logo-zas-white.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const whatsappUrl = 'https://wa.me/50493828622?text=Hola%20ZAS%2C%20quiero%20una%20demo%20para%20mi%20venue.'

const whatsappIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('No se encontró el contenedor principal de la aplicación.')
}

app.innerHTML = `
  <div class="site">
    <nav class="top-nav">
      <div class="container nav-inner">
        <div class="brand">
          <img src="${logoZas}" alt="Logo ZAS" class="logo" />
        </div>
        <div class="nav-links">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#beneficios">Beneficios</a>
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-nav">${whatsappIcon} Demo</a>
        </div>
      </div>
    </nav>

    <header class="hero" data-aos="fade-up" data-aos-duration="800">
      <div class="hero-glow hero-glow-left"></div>
      <div class="hero-glow hero-glow-right"></div>
      <div class="container hero-content">
        <div class="badge">
          Disponible en Honduras
        </div>
        <h1>ZAS: Elimina el fraude y acelera el acceso a tu evento.</h1>
        <p>
          Ticketing inteligente con validación automática de transferencias y QR único para bares y discotecas.
          Control total desde el primer segundo.
        </p>
        <div class="hero-actions">
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${whatsappIcon} Solicitar demo por WhatsApp</a>
          <a href="#como-funciona" class="btn btn-ghost">Ver cómo funciona</a>
        </div>
      </div>
    </header>

    <section class="section section-alt" id="como-funciona" data-aos="fade-up" data-aos-duration="800">
      <div class="container">
        <div class="section-head">
          <h2>¿Cómo funciona ZAS?</h2>
          <p>Un proceso fluido diseñado para la mejor experiencia del usuario y la máxima seguridad del local.</p>
        </div>
        <div class="steps-grid">
          <article class="step-card" data-aos="zoom-in" data-aos-delay="50">
            <div class="step-icon">1</div>
            <h3>Registro</h3>
            <p>Registro rápido del comprador directamente desde su móvil.</p>
          </article>
          <article class="step-card" data-aos="zoom-in" data-aos-delay="120">
            <div class="step-icon">2</div>
            <h3>Comprobante</h3>
            <p>Subida digital del comprobante de transferencia bancaria.</p>
          </article>
          <article class="step-card" data-aos="zoom-in" data-aos-delay="190">
            <div class="step-icon active">3</div>
            <h3>Validación IA</h3>
            <p>Nuestro sistema valida y aprueba la transacción inteligentemente.</p>
          </article>
          <article class="step-card" data-aos="zoom-in" data-aos-delay="260">
            <div class="step-icon">4</div>
            <h3>Acceso Veloz</h3>
            <p>Emisión de QR único y escaneo ultrarrápido en la puerta.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="beneficios" data-aos="fade-up" data-aos-duration="800">
      <div class="container benefits-layout">
        <div class="benefits-copy">
          <h2>Beneficios diseñados para tu local</h2>
          <div class="benefits-grid">
            <article class="benefit-card" data-aos="fade-up" data-aos-delay="50">
              <h3>Cero Fraude</h3>
              <p>Validación estricta de cada pago. Olvídate de los comprobantes falsos.</p>
            </article>
            <article class="benefit-card" data-aos="fade-up" data-aos-delay="120">
              <h3>Acceso Veloz</h3>
              <p>Escaneo inteligente que funciona incluso offline para evitar filas.</p>
            </article>
            <article class="benefit-card" data-aos="fade-up" data-aos-delay="190">
              <h3>Control Total</h3>
              <p>Panel administrativo con datos en tiempo real de tus asistentes.</p>
            </article>
            <article class="benefit-card" data-aos="fade-up" data-aos-delay="260">
              <h3>Base de Datos</h3>
              <p>Crea y gestiona tu propia lista de clientes para futuros eventos.</p>
            </article>
          </div>
        </div>
        <div class="benefits-image-wrap" data-aos="zoom-in-left" data-aos-delay="160">
          <div class="phone-glow"></div>
          <div class="phone-mockup" aria-label="Mockup de teléfono ZAS">
            <div class="phone-notch"></div>
            <div class="phone-screen">
              <img src="${logoZas}" alt="Logo ZAS" class="phone-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" data-aos="fade-up" data-aos-duration="850">
      <div class="container">
        <div class="pilot-card">
          <h2>Únete al Piloto de ZAS</h2>
          <p>Implementación sin costo fijo para el bar. Solo cobramos un pequeño fee por servicio al cliente final.</p>
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${whatsappIcon} Solicitar demo por WhatsApp</a>
          <small>Cupos limitados para el lanzamiento oficial en Honduras.</small>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer-inner">
        <div>
          <div class="brand footer-brand">
            <img src="${logoZas}" alt="Logo ZAS" class="logo" />
          </div>
          <p>Revolucionando el acceso a eventos en Honduras con tecnología de punta y seguridad garantizada.</p>
        </div>
        <div class="footer-links">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#beneficios">Beneficios</a>
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">${whatsappIcon} WhatsApp</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2026 ZAS Ticketing. Todos los derechos reservados. La Ceiba, Honduras.</span>
        <div class="footer-bottom-links">
          <a href="/terminos.html" target="_blank">Términos y Condiciones</a>
          <a href="/privacidad.html" target="_blank">Privacidad</a>
        </div>
      </div>
    </footer>

    <a class="floating-wa" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp de ZAS">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    </a>
  </div>
`

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
})
