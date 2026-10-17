import WorldMap from "../components/WorldMap";
import { useProgress } from "../hooks/useProgress";
import { T } from "../data/translations";
export default function Home({ go }) {
  const { S } = useProgress(); const tt = T[S.lang];
  return (
    <>
      <div className="title"><h1>Bilimland Junior</h1><p>{tt.tag}</p></div>
      <WorldMap go={go} />
      <p className="t" style={{ position: "relative", zIndex: 3 }}><button className="big" onClick={() => go({ v: "garden" })}>🌷 {tt.garden}</button></p>
    </>
  );
}
