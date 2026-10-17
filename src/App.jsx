import { useEffect, useState } from "react";
import { ProgressProvider, useProgress } from "./hooks/useProgress";
import { music } from "./utils/localization";
import Header from "./components/Header";
import RewardAnimation from "./components/RewardAnimation";
import Home from "./pages/Home";
import IslandGame from "./pages/IslandGame";
import Learn from "./pages/Learn";
import MagicGarden from "./pages/MagicGarden";
import ParentDashboard from "./pages/ParentDashboard";

function Inner() {
  const { S, up } = useProgress();
  const [view, go] = useState({ v: "home" });
  useEffect(() => { music(S.music && S.sfx); }, [S.music, S.sfx]);
  const finish = (i) => {
    const n = S.done[i];
    up((s) => { const done = [...s.done]; done[i]++;
      return { done, garden: [...s.garden, { i, n, x: 10 + Math.random() * 80, y: 50 + Math.random() * 40 }],
        log: [...s.log, { i, d: new Date().toLocaleDateString() }].slice(-20) }; });
    go({ v: "reward", i, n });
  };
  const bg = view.v === "home" ? undefined : { background: view.v === "garden" ? "#bfe6ff" : "linear-gradient(#bfe6ff,#e8fbe0)" };
  return (
    <div className="sky" style={bg}>
      <Header view={view.v} go={go} />
      {view.v === "home" && <Home go={go} />}
      {view.v === "game" && <IslandGame key={view.i} i={view.i} onDone={finish} />}
      {view.v === "learn" && <Learn key={view.i} i={view.i} onStart={() => go({ v: "game", i: view.i })} />}
      {view.v === "reward" && <RewardAnimation i={view.i} n={view.n} go={go} />}
      {view.v === "garden" && <MagicGarden />}
      {view.v === "parent" && <ParentDashboard />}
    </div>
  );
}
export default function App() { return <ProgressProvider><Inner /></ProgressProvider>; }
