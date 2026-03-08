export type Palette = {
  primary: string;
  secondary: string;
  accent: string;
  'bg-color'?: string;
};

export function applyPalette(p: Palette, persist = true) {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", p.primary);
  root.style.setProperty("--color-secondary", p.secondary);
  root.style.setProperty("--color-accent", p.accent);
  // background token prefers explicit bg-color in the palette
  const bg = p["bg-color"] ?? p.primary;
  root.style.setProperty("--bg", bg);
  root.style.setProperty("--bg-secondary", p.secondary);

  // also keep legacy names used in some components
  root.style.setProperty("--clr1", p.primary);
  root.style.setProperty("--clr2", p.secondary);
  root.style.setProperty("--clr3", p.accent);
  if (persist) {
    try {
      localStorage.setItem("rf:palette", JSON.stringify(p));
    } catch (e) {
      console.error(e);
    }
  }
}

export function loadSavedPalette(): Palette | null {
  try {
    const raw = localStorage.getItem("rf:palette");
    if (!raw) return null;
    return JSON.parse(raw) as Palette;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export function clearSavedPalette() {
  try { localStorage.removeItem("rf:palette"); } catch(e) { console.error(e); }
}
