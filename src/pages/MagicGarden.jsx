import { useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { T } from "../data/translations";
import { dec } from "../utils/art";
export default function MagicGarden() {
  const { S, up } = useProgress(); const tt = T[S.lang]; const [sel, setSel] = useState(-1);
  const drop = (e) => {
    if (sel < 0) return; const r = e.currentTarget.getBoundingClientRect();
    const x = Math.min(95, Math.max(5, ((e.clientX - r.left) / r.width) * 100)), y = Math.min(95, Math.max(20, ((e.clientY - r.top) / r.height) * 100));
    up((s) => ({ garden: s.garden.map((d, k) => (k === sel ? { ...d, x, y } : d)) })); setSel(-1);
  };
  return (
    <>
      <div className="title"><h1 style={{ fontSize: 40 }}>🌷 {tt.garden}</h1><p>{tt.hint}</p></div>
      <div className="garden" onClick={drop}>
        {!S.garden.length && <p className="t" style={{ fontSize: 22, fontWeight: 800, paddingTop: 80 }}>{tt.empty}</p>}
        {S.garden.map((d, k) => (
          <button key={k} className={"dec " + (sel === k ? "sel" : "")} style={{ left: d.x + "%", top: d.y + "%" }}
            onClick={(e) => { e.stopPropagation(); setSel(k); }} dangerouslySetInnerHTML={{ __html: dec(d.i, d.n, S.lang) }} />
        ))}
      </div>
    </>
  );
}
