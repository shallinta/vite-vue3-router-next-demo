const delay = <T>(t: number): Promise<T> => new Promise(resolve => setTimeout(resolve, t));

export default delay;