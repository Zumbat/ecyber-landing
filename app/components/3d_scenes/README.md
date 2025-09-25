# Globe Component - Documentazione

## Panoramica

Il componente `Globe` è una visualizzazione 3D interattiva che crea un globo internet futuristico composto da linee curve luminose che si avvolgono attorno a una sfera invisibile.

## Componenti

### Globe.tsx
- **Funzionalità**: Genera e renderizza curve spline che si avvolgono attorno a una sfera
- **Tecnologie**: React Three Fiber, Three.js, CatmullRomCurve3
- **Caratteristiche**:
  - 30-50 curve generate casualmente
  - Colori variabili con gradiente blu/viola
  - Animazione di rotazione continua
  - Effetto pulsazione
  - Modalità performance per dispositivi meno potenti

### Scene.tsx
- **Funzionalità**: Setup della scena 3D con Canvas, luci, camera e controlli
- **Tecnologie**: React Three Fiber, OrbitControls, Effects
- **Caratteristiche**:
  - Camera PerspectiveCamera centrata sul globo
  - Controlli di rotazione e zoom
  - Illuminazione ambientale e direzionale
  - Effetti di post-processing (bloom)
  - Rilevamento automatico delle performance
  - Fallback per browser senza WebGL

## Props

### Globe Props
```typescript
interface GlobeProps {
  radius?: number;           // Raggio della sfera (default: 2)
  curveCount?: number;       // Numero di curve (default: 40)
  performanceMode?: boolean; // Modalità performance (default: false)
}
```

## Caratteristiche Tecniche

### Generazione delle Curve
- Punti casuali sulla superficie della sfera usando coordinate sferiche
- Interpolazione con `CatmullRomCurve3` per curve fluide
- Punti di controllo intermedi per curve più interessanti
- 50 punti per curva (25 in modalità performance)

### Animazioni
- Rotazione continua attorno all'asse Y
- Pulsazione con `Math.sin` per effetto breathing
- Controlli orbit per interazione utente

### Ottimizzazioni Performance
- `useMemo` per generare curve una sola volta
- Rilevamento automatico dispositivi low-end
- Riduzione punti per curva in modalità performance
- Disabilitazione effetti bloom su dispositivi meno potenti

### Colori e Materiali
- Gradiente HSL da blu a viola (hue: 200-300)
- Saturazione: 60-100%
- Luminosità: 50-80%
- Materiale emissivo per effetto glow
- Trasparenza e opacità variabili

## Integrazione

Il componente è integrato in `page.tsx` come background fisso con:
- `position: fixed` per rimanere sempre visibile
- `z-index: 0` per stare dietro al contenuto
- Contenuto sovrapposto con `z-index: 10`
- Background semi-trasparente per leggibilità

## Browser Support

- Richiede WebGL support
- Fallback automatico per browser non compatibili
- Ottimizzazioni per dispositivi mobili
- Controlli touch-friendly

## Performance

- FPS target: 60fps
- Riduzione automatica qualità su dispositivi low-end
- Lazy loading delle curve
- Ottimizzazioni Three.js integrate
