import { useMemo } from "react";
import type { MapPreviewProps } from "./types";

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


export const MapPreviewFrame = ({
  map,
  coreBasePath = "/core",
  className,
  style,
  title = "DDNet Map Preview",
  allowFullScreen = false,
}: MapPreviewProps) => {
  const src = useMemo(() => buildPreviewUrl(coreBasePath, map), [coreBasePath, map]);

  return (
    <iframe
      title={title}
      src={src}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        border: "0",
        display: "block",
        ...style,
      }}
      allowFullScreen={allowFullScreen}
    />
  );
};
