import { useMemo, useState } from "react";
import { MapPreviewFrame } from "ddnet-map-preview";

export const App = () => {
  const [map, setMap] = useState("Tutorial");
  const [draftMap, setDraftMap] = useState("Tutorial");

  const mapValue = useMemo(() => map.trim(), [map]);

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "8px", background: "#f1f1f1", borderBottom: "1px solid #ddd", display: "flex", gap: "8px", alignItems: "center" }}>
        <label htmlFor="map" style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
          Map
        </label>
        <input
          id="map"
          value={draftMap}
          onChange={(e) => setDraftMap(e.target.value)}
          onBlur={() => setMap(draftMap)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setMap(draftMap);
            }
          }}
          placeholder="Tutorial ou URL complete"
          style={{ width: "420px", maxWidth: "70vw", padding: "6px 8px" }}
        />
        <span style={{ fontFamily: "sans-serif", fontSize: "12px", color: "#555" }}>
          Core: http://localhost:5555/core
        </span>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <MapPreviewFrame map={mapValue} coreBasePath="http://localhost:5555/core" />
      </div>
    </div>
  );
};
