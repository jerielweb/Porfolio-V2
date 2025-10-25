// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite"

// Opcional: Si usas una versión antigua de Astro o necesitas servicios de imágenes específicos
// Tendrías que instalarlo primero: npm install @astrojs/image
// import image from "@astrojs/image"; 

// https://astro.build/config
export default defineConfig({
  // 🚩 CONFIGURACIÓN CLAVE PARA EL DESPLIEGUE (Imágenes 404) 🚩
  
  // 1. Si despliegas en un dominio raíz (ej: midominio.com, Vercel, Netlify):
  site: 'https://porfolio-v2-eight-jet.vercel.app/', // ⬅️ Cambia esto a tu URL de dominio
  
  // 2. Si despliegas en un subdirectorio (ej: GitHub Pages: usuario.github.io/repo-name):
  // **DESCOMENTA y AJUSTA la línea 'base' en su lugar, y comenta 'site'**
  // base: '/
porfolio-v2', // ⬅️ Cambia esto al nombre de tu repo

  // 3. El output debe ser estático para la mayoría de hosts:
  output: 'static', 

  // INTEGRACIONES
  integrations: [
    react(),
    // Opcional: Si necesitas la integración de imagen (solo si astro:assets no funciona)
    // image({
    //   service: {
    //     entrypoint: 'astro/assets/services/sharp'
    //   }
    // })
  ],

  // VITE & TAILWIND
  vite: {
    plugins: [tailwindcss()],
  },

  // La propiedad 'image' que tenías ya no es necesaria con la integración moderna.
});
