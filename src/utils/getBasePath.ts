export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/Personal-website' : '';
}

export function getAssetPath(path: string) {
  const basePath = getBasePath();
  return `${basePath}${path}`;
}