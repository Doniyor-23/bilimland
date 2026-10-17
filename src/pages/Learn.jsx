import { useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { T } from "../data/translations";
import { COL, ANI, LET, SH, SHN, LI } from "../data/vocabulary";
import { sv, ball, apples, mascot } from "../utils/art";
import { say } from "../utils/localization";
import { WORDS, SOUNDS } from "../data/words";
const big = (s) => `<span style="font-size:48px">${s}</span>`;
export default function Learn({ i, onStart }) {
  const { S } = useProgress(); const tt = T[S.lang], L = LI.indexOf(S.lang); const [on, setOn] = useState(-1);
  const items = [
    () => COL.map((c) => ({ h: ball(c[0]), l: c[1][L] })),
    () => LET[S.lang].map((z, k) => ({ h: big(z[0]), l: z[1] + " — " + WORDS[S.lang][k], s: z[1] + ". " + WORDS[S.lang][k] })),
    () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({ h: apples(n), l: String(n) })),
    () => SH.map((k) => ({ h: sv(k, "#ff7a6b"), l: SHN[k][L] })),
    () => ANI.map((a, k) => ({ h: big(a[0]), l: a[1][L] + " — " + SOUNDS[k][L], s: a[1][L] + ". " + SOUNDS[k][L] })),
    () => [[0, 1], [2, 3], [4, 0]].map(([a, b]) => ({ h: [a, b, a, b].map((k) => ball(COL[k][0])).join(""), l: "" })),
  ][i]();
  return (
    <div className="card">
      <div className="say"><span dangerouslySetInnerHTML={{ __html: mascot }} /><p>{tt.learn} {tt.isl[i]}</p></div>
      <p className="t" style={{ fontWeight: 700 }}>👆 {tt.tap}</p>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))" }}>
        {items.map((it, k) => (
          <button key={k} className={"ch col " + (on === k ? "good" : "")} onClick={() => { setOn(k); const txt = it.s ?? it.l; if (txt) say(txt, S.lang, S.sfx); }}>
            <span dangerouslySetInnerHTML={{ __html: it.h }} /><span>{it.l}</span>
          </button>
        ))}
      </div>
      <p className="t"><button className="big" onClick={onStart}>▶ {tt.play}</button></p>
    </div>
  );
}
