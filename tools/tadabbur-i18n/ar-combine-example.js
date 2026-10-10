// Combine pNN.txt parts into ../tr-ar.json. Part format: "@@ <id>" line, then the text.
// Quran quotes are written as {Q:s:a:from-to} (word range, 1-based) or {Q:s:a} (whole ayah)
// and expanded here from data/quran-words.json, wrapped in ﴿ ﴾, so no Quranic text is typed by hand.
const fs=require('fs'),path=require('path');
const dir=__dirname, C=path.join(dir,'..');
const en=JSON.parse(fs.readFileSync(path.join(C,'en.json'),'utf8'));
const Q=JSON.parse(fs.readFileSync(path.join(dir,'../../../../../data/quran-words.json'),'utf8'));
const all={}; let bad=0;
const expand=t=>t.replace(/\{Q:(\d+):(\d+)(?::(\d+)(?:-(\d+))?)?\}/g,(m,s,a,f,to)=>{ if(f&&!to) to=f;
  const w=Q[s+':'+a]; if(!w){console.log('no ayah',m);bad++;return m;}
  const x=f?w.slice(f-1,to):w; if(f&&(+to>w.length||+f<1||+f>+to)){console.log('bad range',m);bad++;}
  return '﴿'+x.join(' ')+'﴾';});
for(const f of fs.readdirSync(dir).filter(f=>/^p\d+\.txt$/.test(f)).sort()){
  const blocks=fs.readFileSync(path.join(dir,f),'utf8').split(/^@@ /m).slice(1);
  for(const b of blocks){const i=b.indexOf('\n');const k=b.slice(0,i).trim();const t=expand(b.slice(i+1).trim());
    if(k in all) console.log('dup',k,f); if(/\{Q/.test(t)){console.log('unexpanded',k);bad++;} all[k]=t;}
}
const out={}; let miss=0;
for(const k of Object.keys(en)){ if(!(k in all)) miss++; else out[k]=all[k]; }
for(const k in all) if(!(k in en)) console.log('extra',k);
fs.writeFileSync(path.join(C,'tr-ar.json'),JSON.stringify(out,null,1)+'\n');
console.log(Object.keys(out).length,'written,',miss,'missing,',bad,'bad');
