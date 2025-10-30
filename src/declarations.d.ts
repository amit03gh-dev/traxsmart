// declarations.d.ts
declare module 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Allow importing non-module JS files
declare module "*.js";


// src/declarations.d.ts
declare module "animejs/lib/anime.es.js" {
  import anime from "animejs";
  export default anime;
}
