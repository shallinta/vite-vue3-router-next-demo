export default {
  serviceWorker: true,
  sourcemap: true,
  proxy: {
    '/api': {
      target: 'https://localhost:7000/',
      changeOrigin: true,
    },
  }
};
