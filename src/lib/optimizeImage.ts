export default (url: string, width: number) => {
  if (!url.includes('https://')) return url;
  return url.replace('://images', '://img').concat(`?w=${width}`);
};
