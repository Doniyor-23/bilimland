import { useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { T } from "../data/translations";
import { R, shuf } from "../utils/generators";
const mk = () => { const a = 2 + R(7), b = 2 + R(7), r = a + b; return { a, b, r, o: shuf([r, r + 2, r - 1, r + 3]) }; };
export default function ParentGate({ children }) {
  const { S } = useProgress(); const [q, setQ] = useState(mk); const [ok, setOk] = useState(false);
  if (ok) return children;
  return (
    <div className="card t"><h2>{T[S.lang].gate.replace("{a}", q.a).replace("{b}", q.b)}</h2>
      <div className="grid">{q.o.map((v) => <button key={v} className="ch" onClick={() => (v === q.r ? setOk(true) : setQ(mk()))}>{v}</button>)}</div></div>
  );
}
