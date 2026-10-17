import { useEffect, useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { T } from "../data/translations";
import { gen, pick } from "../utils/generators";
import { mascot } from "../utils/art";
import { say, beep } from "../utils/localization";
import { burst } from "../utils/effects";
export default function IslandGame({ i, onDone }) {
  const { S, up } = useProgress(); const tt = T[S.lang];
  const mk = () => gen(i, S.lang, S.done[2]);
  const [n, setN] = useState(0), [q, setQ] = useState(mk), [msg, setMsg] = useState(""), [bad, setBad] = useState([]), [good, setGood] = useState(-1);
  useEffect(() => { setQ(mk()); }, [S.lang]);
  useEffect(() => { if (q.say) say(q.say, S.lang, S.sfx); }, [q]);
  const ans = (k, e) => {
    if (good >= 0) return;
    if (q.ch[k].ok) {
      setGood(k); burst(e.currentTarget); beep(784, S.sfx); up((s) => ({ stars: s.stars + 1 }));
      const m = pick(tt.ok); setMsg(m + " ⭐"); say(m, S.lang, S.sfx);
      setTimeout(() => { if (n + 1 >= 5) onDone(i); else { setN(n + 1); setGood(-1); setBad([]); setMsg(""); setQ(mk()); } }, 1300);
    } else { setBad((b) => [...b, k]); beep(260, S.sfx, 0.2); setMsg(tt.again); }
  };
  return (
    <div className="card">
      <div className="dots">{[...Array(5)].map((_, k) => <i key={k} className={k < n ? "f" : ""} />)}</div>
      <div className="say"><span dangerouslySetInnerHTML={{ __html: mascot }} /><p>{q.p}</p>
        {q.say && <button className="pill on" aria-label="listen" onClick={() => say(q.say, S.lang, S.sfx)}>🔊</button>}</div>
      <div style={{ marginTop: 12, textAlign: "center" }} dangerouslySetInnerHTML={{ __html: q.vis }} />
      <div className="grid">
        {q.ch.map((c, k) => (
          <button key={k} className={"ch " + (bad.includes(k) ? "bad " : "") + (good === k ? "good" : "")}
            style={bad.length && c.ok ? { outline: "5px solid #ffd84d" } : undefined}
            onClick={(e) => ans(k, e)} dangerouslySetInnerHTML={{ __html: c.h }} />
        ))}
      </div>
      <p className="t" style={{ fontSize: 24, fontWeight: 800, minHeight: 36 }}>{msg}</p>
    </div>
  );
}
