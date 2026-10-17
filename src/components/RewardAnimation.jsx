import { useProgress } from "../hooks/useProgress";
import { T } from "../data/translations";
import { dec } from "../utils/art";
export default function RewardAnimation({ i, n, go }) {
  const { S } = useProgress(); const tt = T[S.lang];
  return (
    <div className="card t">
      <h2 style={{ fontSize: 36, color: "#ff7a6b" }}>{tt.ok[0]} ⭐⭐⭐⭐⭐</h2>
      <p style={{ fontSize: 24, fontWeight: 800 }}>{tt.done}</p>
      <div style={{ width: 120, margin: "auto" }} dangerouslySetInnerHTML={{ __html: dec(i, n, S.lang) }} />
      <p><button className="big" onClick={() => go({ v: "garden" })}>🌷 {tt.toGarden}</button>{" "}
        <button className="big" style={{ background: "#2d9cdb", boxShadow: "0 6px 0 #1b6fa0" }} onClick={() => go({ v: "game", i })}>↻ {tt.more}</button></p>
    </div>
  );
}
