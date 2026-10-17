import { useProgress } from "../hooks/useProgress";
import { T } from "../data/translations";
import { LI } from "../data/vocabulary";
export default function Header({ view, go }) {
  const { S, up } = useProgress();
  const row = { display: "flex", gap: 8, flexWrap: "wrap" };
  return (
    <div className="bar">
      <div style={row}>
        {view !== "home" && <button className="pill" onClick={() => go({ v: "home" })}>🏠 {T[S.lang].home}</button>}
        {LI.map((l) => <button key={l} className={"pill " + (S.lang === l ? "on" : "")} onClick={() => up(() => ({ lang: l }))}>{l.toUpperCase()}</button>)}
      </div>
      <div style={row}>
        <span className="pill">⭐ {S.stars}</span>
        <button className={"pill " + (S.sfx ? "on" : "")} aria-label="sound" onClick={() => up((s) => ({ sfx: !s.sfx }))}>🔊</button>
        <button className={"pill " + (S.music ? "on" : "")} aria-label="music" onClick={() => up((s) => ({ music: !s.music }))}>🎵</button>
        <button className="pill" aria-label="garden" onClick={() => go({ v: "garden" })}>🌷</button>
        <button className="pill" aria-label="parent" onClick={() => go({ v: "parent" })}>👪</button>
      </div>
    </div>
  );
}
