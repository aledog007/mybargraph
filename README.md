# @aledog007/mybargraph

Einfache, konfigurierbare React-Balkenkomponente für das Modul 324 (DevOps) an der BBW.

Autor: **Alessio Fano**

## Installation

```bash
npm install @aledog007/mybargraph
```

## Verwendung

```jsx
import MyBargraph from '@aledog007/mybargraph';

function App() {
  return (
    <MyBargraph
      label="Projektfortschritt"
      value={65}
      maxvalue={100}
      barwidthpx={400}
      color="#2563eb"
    />
  );
}
```

Das CSS wird über `vite-plugin-lib-inject-css` automatisch eingebunden.

## Props

| Prop | Typ | Default | Beschreibung |
| :--- | :--- | :--- | :--- |
| `value` | number | required | Aktueller Wert |
| `maxvalue` | number | `100` | Maximalwert |
| `barwidthpx` | number | `350` | Breite des Balkens in Pixeln |
| `label` | string | `''` | Text über dem Balken |
| `color` | string | `'#2563eb'` | Farbe des Balkens |
| `showValue` | boolean | `true` | Zeigt Wert und Prozent an |

## Scripts

```bash
npm run demo    # Startet die lokale Demo
npm run build   # Baut die Library nach dist/
```
