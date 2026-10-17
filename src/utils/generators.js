import {T} from "../data/translations";
import {COL,ANI,LET,SH,SHN,LI} from "../data/vocabulary";
import {sv,ball,apples} from "./art";
import {SOUNDS} from "../data/words";
export const R=n=>Math.floor(Math.random()*n),pick=a=>a[R(a.length)],shuf=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
export function gen(i,lang,done){const tt=T[lang],L=LI.indexOf(lang),w=a=>shuf(a);
if(i==0){const c=w(COL).slice(0,3),a=c[0],x=a[1][L];return{p:tt.q[0].replace("{x}",x),say:x,vis:"",ch:w(c.map((k,j)=>({h:ball(k[0]),ok:!j})))}}
if(i==1){const s=LET[lang],a=pick(s),o=w(s.filter(z=>z[1]!==a[1])).slice(0,2);return{p:tt.q[1].replace("{x}",a[1]),say:a[1],vis:`<div style="font-size:64px;text-align:center">${a[1]}</div>`,ch:w([a,...o].map((z,j)=>({h:`<span>${z[0]}</span>`,ok:!j})))}}
if(i==2){if(R(2)){const n=1+R(done>2?10:5),o=w([...Array(10)].map((_,k)=>k+1).filter(k=>k!==n)).slice(0,2);return{p:tt.q[2].replace("{n}",n),say:""+n,vis:apples(n),ch:w([n,...o].map((k,j)=>({h:k,ok:!j})))}}
const a=1+R(5),b=a+1+R(4),m=R(2);const A=m?a:b,B=m?b:a;return{p:tt.q[3],say:"",vis:"",ch:[{h:apples(A),ok:A>B},{h:apples(B),ok:B>A}]}}
if(i==3){const s=w(SH).slice(0,3),a=s[0],x=SHN[a][L],c=pick(COL)[0];return{p:tt.q[4].replace("{x}",x),say:x,vis:"",ch:w(s.map((k,j)=>({h:sv(k,c),ok:!j})))}}
if(i==4){const s=w(ANI).slice(0,3),a=s[0],x=a[1][L];if(R(2)){const snd=SOUNDS[ANI.indexOf(a)][L];return{p:tt.snd,say:snd,vis:"",ch:w(s.map((k,j)=>({h:k[0],ok:!j})))}}return{p:tt.q[5].replace("{x}",x),say:x,vis:"",ch:w(s.map((k,j)=>({h:k[0],ok:!j})))}}
const c=w(COL).slice(0,2),seq=[c[0],c[1],c[0],c[1],c[0]],o=COL.find(k=>k!==c[0]&&k!==c[1]);
return{p:tt.q[6],say:"",vis:`<div style="display:flex;gap:8px;justify-content:center;align-items:center">${seq.map(k=>ball(k[0])).join("")}<b style="font-size:48px">?</b></div>`,ch:w([c[1],c[0],o].map((k,j)=>({h:ball(k[0]),ok:!j})))}}
