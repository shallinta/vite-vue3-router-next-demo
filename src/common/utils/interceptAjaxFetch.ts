import ajaxFetch from 'ajax-fetch-esm';

// add url prefix
ajaxFetch.interceptors.request.use((config) => ({ ...config, baseURL: '/api' }));
