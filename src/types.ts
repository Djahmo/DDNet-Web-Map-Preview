import type { CSSProperties } from "react";

export type MapPreviewProps = {
  map?: string;
  coreBasePath?: string;
  className?: string;
  style?: CSSProperties;
  title?: string;
  allowFullScreen?: boolean;
};
