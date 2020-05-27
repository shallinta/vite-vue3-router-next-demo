import './common/utils/interceptAjaxFetch';
import { createApp, App as Application } from 'vue';
import { router, routerHistory } from './router';
import authService from './common/services/auth.service.ts';
import productsService from './common/services/products.service.ts';
import App from './App.vue';

declare global {
  interface Window {
    // h: HTML5History
    h: typeof routerHistory
    r: typeof router
    vm: ReturnType<Application['mount']>
  }
}

// for testing purposes
window.h = routerHistory;
window.r = router;

const app = createApp(App);
app.provide('services', {
  authService,
  productsService,
});
app.use(router);
window.vm = app.mount('#app');
