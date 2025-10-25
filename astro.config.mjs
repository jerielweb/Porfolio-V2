// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  // Vercel asume 'output: static' y no necesita 'base'.
  
  // Opcional: Es una buena práctica definir el sitio, aunque no es la causa del fallo 404.
  // site: 'https://tu-sitio.vercel.app', 
  
  integrations: [
    react()
    // En las versiones recientes de Astro, 'astro:assets' está integrado,
    // por lo que no necesitas listar @astrojs/image aquí.
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  
  // Se elimina la propiedad 'image' obsoleta.
});
