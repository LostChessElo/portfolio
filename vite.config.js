import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: new URL('index.html', import.meta.url).pathname,
        about: new URL('about.html', import.meta.url).pathname,
        projects: new URL('projects.html', import.meta.url).pathname,
        experience: new URL('experience.html', import.meta.url).pathname,
        certs: new URL('certs.html', import.meta.url).pathname,
        contact: new URL('contact.html', import.meta.url).pathname,
      },
    },
  },
});