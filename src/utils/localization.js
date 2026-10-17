import { SPK } from "../data/vocabulary";
let AC, mus;
export function say(text, lang, on = true) {
  if (!on || !window.speechSynthesis) return;
  try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = SPK[lang]; u.rate = 0.8; speechSynthesis.speak(u); } catch (e) {}
}
export function beep(f, on = true, d = 0.15) {
  if (!on) return;
  try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); const o = AC.createOscillator(), g = AC.createGain();
    o.frequency.value = f; g.gain.value = 0.08; o.connect(g); g.connect(AC.destination); o.start(); o.stop(AC.currentTime + d); } catch (e) {}
}
export function music(on) {
  clearInterval(mus); mus = 0;
  if (on) { let i = 0; const n = [523, 587, 659, 784, 659, 587]; mus = setInterval(() => beep(n[i++ % 6], true, 0.4), 900); }
}
