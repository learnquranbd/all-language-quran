const L=require('../../../../../tests/lib.js'),fs=require('fs'),vm=require('vm'),path=require('path');
const seenEn=new Map(),seenBn=new Map();const norm=s=>s.trim().toLowerCase();
const add=(src,h)=>{seenEn.set(norm(h.en),src);seenBn.set(h.bn.trim(),src)};
const a=L.loadTadabburArticles();for(const k in a)a[k].sections.forEach(s=>add('shipped '+k,s.h));
const dir=path.join(__dirname,'../..');
for(const f of fs.readdirSync(dir))if(f.endsWith('-articles.js')&&f!=='12_30-articles.js'){try{const c={};vm.createContext(c);const o=vm.runInContext('({'+fs.readFileSync(path.join(dir,f),'utf8')+'})',c);for(const k in o)o[k].sections.forEach(s=>add('draft '+f,s.h))}catch(e){console.log('skip',f,e.message)}}
for(const l of fs.readFileSync(path.join(dir,'shipped-headings.txt'),'utf8').split('\n'))if(l.trim())seenEn.has(norm(l))||seenEn.set(norm(l),'shipped-headings.txt');
const cand=JSON.parse(process.argv[2]);const mine=new Set(),mineB=new Set();
for(const [en,bn] of cand){const w=en.split(/\s+/).length,wb=bn.split(/\s+/).length;
console.log((w<2||w>6?'LEN! ':'')+(seenEn.has(norm(en))?'DUP-EN('+seenEn.get(norm(en))+') ':'')+(seenBn.has(bn.trim())?'DUP-BN('+seenBn.get(bn.trim())+') ':'')+(mine.has(norm(en))||mineB.has(bn)?'SELF-DUP ':'')+w+'/'+wb+' | '+en+' | '+bn);mine.add(norm(en));mineB.add(bn)}
