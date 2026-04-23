$(document).ready(() => {
  window.addEventListener("wheel", (e) => {
    e.preventDefault();
  }, { passive: false });

  window.addEventListener("touchmove", (e) => {
    e.preventDefault();
  }, { passive: false });

  console.log(tw.getParams().map);
  const params = tw.getParams();
  const paramMap = params.map;
  const cfg = window.twConfig || {};
  const enableExternalMapLoading = cfg.enableExternalMapLoading === true;
  const remoteBaseUrl = cfg.remoteMapBaseUrl || "https://ddnet.org/mappreview/";
  let mapUrl = cfg.defaultMapUrl;

  if (enableExternalMapLoading && typeof mapUrl === "string" && mapUrl.length > 0 && !/^https?:\/\//i.test(mapUrl)) {
    const defaultNormalized = mapUrl.replace(/^\/+/, "");
    mapUrl = remoteBaseUrl.replace(/\/+$/, "/") + defaultNormalized;
  }

  if (typeof paramMap === "string" && paramMap.length > 0) {
    if (/^https?:\/\//i.test(paramMap)) {
      if (enableExternalMapLoading) {
        mapUrl = paramMap;
      } else {
        console.log("External map loading is disabled by config.");
      }
    } else if (enableExternalMapLoading) {
      const normalized = paramMap.replace(/^\/+/, "");
      mapUrl = remoteBaseUrl.replace(/\/+$/, "/") + normalized;
    } else {
      mapUrl = paramMap;
    }
  }

  if (mapUrl) {
    tw.init({ mapUrl: mapUrl });
  } else {
    console.log("No map URL provided. Use ?map=... or twConfig.defaultMapUrl");
  }
});
