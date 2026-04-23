# React TS Wrapper (Etape 1)

Ce dossier fournit un composant React TypeScript qui embarque le moteur historique via iframe, sans modifier le core.

## API

- `MapPreviewFrame`
  - `map?: string`
  - `coreBasePath?: string` (defaut: `/core`)
  - `className?: string`
  - `style?: CSSProperties`
  - `title?: string`
  - `allowFullScreen?: boolean`

## Exemple

```tsx
import { MapPreviewFrame } from "./src";

export const Demo = () => (
  <div style={{ width: "100%", height: "100vh" }}>
    <MapPreviewFrame map="Flower" coreBasePath="/core" />
  </div>
);
```

Le parametre `map` est passe au core via query string (`?map=`).
Le comportement final local/externe reste gere par `core/config.js`.

## Test local React TS

Un mini projet de test est disponible dans [test](test).

1. Terminal 1 depuis la racine:
  - python3 -m http.server 5173
2. Terminal 2 dans [test](test):
  - npm install
  - npm run dev
