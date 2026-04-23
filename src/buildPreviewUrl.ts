const stripTrailingSlash = (value: string): string => value.replace(/\/+$/, "");

export const buildPreviewUrl = (coreBasePath: string, map?: string): string => {
  const base = stripTrailingSlash(coreBasePath || "/core");
  const isAbsolute = /^https?:\/\//i.test(base);
  const url = new URL(`${base}/index.html`, window.location.origin);

  if (map && map.trim().length > 0) {
    url.searchParams.set("map", map.trim());
  }

  return isAbsolute ? url.toString() : `${url.pathname}${url.search}${url.hash}`;
};
