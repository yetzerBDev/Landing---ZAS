# ZAS Ticketing - Landing Page

Plataforma de ticketing inteligente diseñada para eliminar fraude y acelerar el acceso a eventos en Honduras.

## 🚀 Despliegue en Vercel

1. **Conectar repositorio:**
   - Push a GitHub: `git push origin main`
   - En Vercel: Import de GitHub → Seleccionar `Landing - ZAS`

2. **Variables de entorno:**
   - No requiere variables de entorno en producción
   - WhatsApp URL: `+504-9382-8622`

3. **Build settings:**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Custom Domain:**
   - Agregar dominio: `zas.com.hn` (o tu dominio)
   - Configurar DNS records según instrucciones de Vercel

## 📁 Estructura del Proyecto

```
src/
  ├── main.ts              # Aplicación principal, generador HTML
  ├── style.css            # Estilos globales (dark theme)
  └── assets/
      └── logo-zas-white.png

public/
  ├── logo-zas-tab.png     # Favicon
  ├── robots.txt           # SEO: instruye a buscadores
  └── sitemap.xml          # SEO: mapa del sitio

index.html                 # Landing principal (con meta tags SEO)
terminos.html              # Términos y Condiciones
privacidad.html            # Política de Privacidad

dist/                      # Build de producción (generado automaticamente)
```

## 🔍 SEO Optimized

✅ Meta tags completos (title, description, keywords)
✅ Open Graph (Facebook, LinkedIn, etc.)
✅ Twitter Cards
✅ JSON-LD Schema (Organization)
✅ robots.txt
✅ sitemap.xml
✅ Mobile-friendly (responsive)
✅ Fast loading (CSS + JS optimizados)

## 🛠 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📊 Performance

- **TTFB** (Time to First Byte): ~100ms con Vercel
- **CSS**: 32.87 kB (gzipped 4.58 kB)
- **JS**: 24.08 kB (gzipped 8.21 kB)
- **Logo**: 671 kB (considerar WebP para futuras versiones)

## 📱 Características

- ✨ Diseño responsivo (mobile-first)
- 🎨 Dark theme profesional
- 🚀 Animaciones suaves (AOS library)
- 📞 WhatsApp CTA integrado (+504-9382-8622)
- 🔒 HTTPS automático en Vercel
- 🌍 CDN global para carga rápida

## 🎯 Próximas Mejoras

- [ ] Optimizar logo PNG → WebP
- [ ] Agregar analytics (Google Analytics)
- [ ] Newsletter signup
- [ ] Testimonios de usuarios
- [ ] Blog para contenido SEO

---

**Hecho con ❤️ en La Ceiba, Honduras**
