import { useMemo } from "react";
import { buildPreviewUrl } from "./buildPreviewUrl";
import type { MapPreviewProps } from "./types";

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
