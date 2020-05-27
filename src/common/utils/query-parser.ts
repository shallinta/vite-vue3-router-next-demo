export const query2object = query => query.split('&').map(item => item.split('=')).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

export const object2query = obj => Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&');