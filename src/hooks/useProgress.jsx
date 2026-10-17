import { createContext, useContext, useEffect, useState } from "react";
import { load, save, clear } from "../utils/storage";
const D = { lang: "en", sfx: true, music: false, done: [0,0,0,0,0,0], stars: 0, garden: [], log: [] };
const Ctx = createContext();
export function ProgressProvider({ children }) {
  const [S, set] = useState(() => ({ ...D, ...(load() || {}) }));
  useEffect(() => save(S), [S]);
  const up = (f) => set((s) => ({ ...s, ...f(s) }));
  const reset = () => { clear(); set({ ...D, lang: S.lang }); };
  return <Ctx.Provider value={{ S, up, reset }}>{children}</Ctx.Provider>;
}
export const useProgress = () => useContext(Ctx);
