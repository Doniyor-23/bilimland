import { useProgress } from "../hooks/useProgress";
import { T } from "../data/translations";
import { ISL } from "../data/vocabulary";
import ParentGate from "../components/ParentGate";
export default function ParentDashboard() {
  const { S, up, reset } = useProgress(); const tt = T[S.lang];
  return (
    <ParentGate>
      <div className="card">
        <h2>👪 {tt.parent}</h2>
        <p><b>{tt.lang}:</b> {S.lang.toUpperCase()}</p>
        <p><b>{tt.stars}:</b> ⭐ {S.stars}</p>
        <p><b>{tt.stats}:</b></p>
        {tt.isl.map((n, k) => <p key={k} style={{ margin: "4px 0" }}>{ISL[k][0]} {n}: <b>{S.done[k]}</b></p>)}
        <p>{S.log.slice(-5).reverse().map((l, k) => <span key={k}>{ISL[l.i][0]} {tt.isl[l.i]} · {l.d}<br /></span>)}</p>
        <p><b>🌷 {S.garden.length}</b></p>
        <p><button className="pill" onClick={() => up((s) => ({ sfx: !s.sfx }))}>🔊 {tt.sound}: {S.sfx ? "on" : "off"}</button>{" "}
          <button className="pill" onClick={() => up((s) => ({ music: !s.music }))}>🎵 {tt.music}: {S.music ? "on" : "off"}</button></p>
        <button className="big" style={{ background: "#777", boxShadow: "0 6px 0 #444" }} onClick={() => confirm(tt.sure) && reset()}>{tt.reset}</button>
      </div>
    </ParentGate>
  );
}
