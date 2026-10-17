import { useProgress } from "../hooks/useProgress";
import { T } from "../data/translations";
import { ISL } from "../data/vocabulary";
import { beep } from "../utils/localization";
export default function WorldMap({ go }) {
  const { S } = useProgress(); const tt = T[S.lang];
  return (
    <>
      <svg className="sun" width="90" height="90" viewBox="0 0 90 90"><circle cx="45" cy="45" r="26" fill="#ffd84d" />
        {[...Array(8)].map((_, k) => <rect key={k} x="42" y="2" width="6" height="14" rx="3" fill="#ffc400" transform={`rotate(${k * 45} 45 45)`} />)}</svg>
      <div className="cloud" style={{ top: 120 }} /><div className="cloud" style={{ top: 200, animationDelay: "-18s" }} />
      <span className="fly" style={{ left: "20%", top: "55%" }}>🦋</span><span className="fly" style={{ left: "70%", top: "75%", animationDelay: "-4s" }}>🦋</span>
      <div className="map">
        {ISL.map((s, k) => (
          <button key={k} className="isl" style={{ left: s[2] + "%", top: s[3] * 1.3 + 4 + "%", animationDelay: -k + "s" }}
            onClick={() => { beep(660, S.sfx); go({ v: "learn", i: k }); }}>
            <span className="ic">{s[0]}</span><div className="base" style={{ background: s[1] }} /><b>{tt.isl[k]}</b>
          </button>
        ))}
      </div>
    </>
  );
}
