export function getBasePath() {
  // 只在 GitHub Pages 上使用 basePath
  if (typeof window !== 'undefined' && window.location.hostname === 'p8552015.github.io') {
    return '/Personal-website';
  }
  return '';
}

export function getAssetPath(path: string) {
  const basePath = getBasePath();
  return `${basePath}${path}`;
}