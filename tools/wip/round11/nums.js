const vm=require('vm'),fs=require('fs');
const o=(()=>{const ctx={};vm.createContext(ctx);return vm.runInContext('({'+fs.readFileSync(process.argv[2],'utf8')+'})',ctx);})();
const bn2a=s=>s.replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d));
const stripRefs=s=>s.replace(/\d+\s*:\s*\d+(?:\s*[-–]\s*\d+)?/g,' ');
const W={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,twenty:20};
const BNW={'একটি':1,'একজন':1,'একটা':1,'দুই':2,'দুটি':2,'দুজন':2,'তিনটি':3,'তিনজন':3,'তিনবার':3,'চারটি':4,'চারজন':4,'পাঁচটি':5,'পাঁচ':5,'ছয়টি':6,'সাতটি':7,'আটটি':8,'নয়টি':9,'দশটি':10,'বারোটি':12};
for(const [id,e] of Object.entries(o)) e.sections.forEach((s,si)=>s.p.forEach((p,pi)=>{
  const en=stripRefs(p.en), bn=stripRefs(bn2a(p.bn));
  const enN=new Set([...(en.match(/(?<![\d])\d+(?![\d])/g)||[]).map(Number),...(en.match(/\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|twenty)\b/gi)||[]).map(x=>W[x.toLowerCase()])]);
  const bnN=new Set((bn.match(/(?<![\d])\d+(?![\d])/g)||[]).map(Number));
  for(const [w,v] of Object.entries(BNW)) if(p.bn.includes(w)) bnN.add(v);
  if(p.bn.includes('একই')||p.bn.includes('একমাত্র')) bnN.add(1);
  const onlyEn=[...enN].filter(x=>!bnN.has(x));
  if(onlyEn.length) console.log(id+' §'+(si+1)+'.'+(pi+1)+' EN-ONLY ['+onlyEn+']  EN: '+en.replace(/\s+/g,' ').slice(0,150));
}));
