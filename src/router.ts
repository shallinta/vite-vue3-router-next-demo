import { createRouter, createWebHistory } from 'vue-router';
import { scrollWaiter } from './common/utils/scrollWaiter';
import delay from './common/utils/delay';
import auth from './common/services/auth.service.ts';

const syncListPage = () => import('./pages/list/index.vue');
const syncExamplePage = () => import('./pages/example/index.vue');

export const routerHistory = createWebHistory();

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      component: syncListPage,
      props: to => ({ waited: to.meta.waitedFor }),
    },
    { path: '/list', redirect: '/' },
    {
      path: '/detail-:id',
      name: 'detail',
      component: syncExamplePage,
      props: true,
    },
    { path: '/example-:m', name: 'example', component: syncExamplePage },
    {
      path: '/example',
      redirect: () => ({
        name: 'example',
        params: { m: 'example' },
      }),
    },
  ],
  async scrollBehavior(to, from, savedPosition) {
    await scrollWaiter.wait();
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.matched.every((record, i) => from.matched[i] !== record)) {
        return { x: 0, y: 0 };
      }
    }
    return false;
  },
});

router.beforeEach((to, from, next) => {
  if (/.\/$/.test(to.path)) {
    console.log('remove trailing slashes');
    to.meta.redirectCode = 301;
    next(to.path.replace(/\/$/, ''));
  } else {
    next();
  }
});

// login guard
router.beforeEach(async (to, from, next) => {
  const isLoggedIn = await auth.checkAuth();
  if (!isLoggedIn) {
    next(false);
    auth.login();
  } else {
    next();
  }
});

router.beforeEach(async (to, from, next) => {
  console.log(`Guard from ${from.fullPath} to ${to.fullPath}`);
  if (to.params.id === 'no-name') {
    return next(false);
  }

  const time = Number(to.query.delay);
  if (time > 0) {
    console.log('⏳ waiting ' + time + 'ms');
    to.meta.waitedFor = time;
    await delay(time);
  }
  next();
});

router.beforeEach((to, from, next) => {
  console.log('second guard: query redirecting to = ', to.query.to);
  if (to.query.to) {
    next(to.query.to as string);
  }
  else {
    next();
  }
});

router.afterEach((to, from) => {
  console.log(
    `After guard: from ${from.fullPath} to ${
      to.fullPath
    } | location = ${location.href.replace(location.origin, '')}`
  );
});

const dirLog = {
  '': '？',
  back: '⏪',
  forward: '⏩',
};

routerHistory.listen((to, from, info) => {
  console.log(`${dirLog[info.direction]} as a ${info.type}`);
});
