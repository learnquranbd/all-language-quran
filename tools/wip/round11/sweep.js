const vm=require('vm'),fs=require('fs');const L=require('../../../tests/lib.js');
const o=(()=>{const ctx={};vm.createContext(ctx);return vm.runInContext('({'+fs.readFileSync(process.argv[2],'utf8')+'})',ctx);})();
const problems=[],spellings={};
const bn2a=s=>s.replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d));
const REF=/\d+:\d+(?:-\d+)?/g, BN=/[ঀ-৿]/;
const STEM={Tabari:/তাবার[ীি]/,Qurtubi:/কুরতুব[ীি]/,Kathir:/কাস[ীি]র/,Baghawi:/বাগ[াভব]/,Bukhari:/বুখার[ীি]/,Muslim:/মুসলিম/,Tirmidhi:/তিরমি[যজ][ীি]/,"Sa'di":/সা['’]?দ[ীি]/,Mujahid:/মুজাহিদ/,Suddi:/সুদ্দ[ীি]|সুদ[ীি]/};
const DIG=/(?<![\d:])\d+(?![\d:])/g, NUMWORD=/\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|twenty)\b/gi;
const W={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,twenty:20};
const BNW={'এক':1,'দুই':2,'দুটি':2,'তিন':3,'তিনটি':3,'চার':4,'চারটি':4,'পাঁচ':5,'ছয়':6,'সাত':7,'আট':8,'নয়':9,'দশ':10,'বারো':12,'বিশ':20};
for(const [id,e] of Object.entries(o)){
  if(e.sections.length<7||e.sections.length>9) problems.push(id+' sections='+e.sections.length);
  e.sections.forEach((s,si)=>{
    const hw=s.h.en.trim().split(/\s+/).length;
    if(hw<2||hw>6) problems.push(id+' §'+(si+1)+' heading '+hw+' words: "'+s.h.en+'"');
    if(BN.test(s.h.en)) problems.push(id+' §'+(si+1)+' Bengali in en heading');
    s.p.forEach((p,pi)=>{
      const tag=id+' §'+(si+1)+'.'+(pi+1);
      if(!p.en||!p.bn) problems.push(tag+' empty side');
      if(BN.test(p.en)) problems.push(tag+' Bengali script inside en');
      if(/<[a-z/]/i.test(p.en+p.bn)) problems.push(tag+' HTML');
      if(/Ã|â€|Â/.test(p.en+p.bn)) problems.push(tag+' mojibake');
      const er=p.en.match(REF)||[], br=bn2a(p.bn).match(REF)||[];
      for(const r of er.concat(br)) if(L.badRef(r)) problems.push(tag+' badRef '+r);
      const es=[...new Set(er)].sort().join(','), bs=[...new Set(br)].sort().join(',');
      if(es!==bs) problems.push(tag+' REF PARITY en['+es+'] bn['+bs+']');
      if(/[০-৯]+:[০-৯]+\s*[-–]\s*[০-৯\d]/.test(p.bn)) problems.push(tag+' bn ref followed by hyphen+digit');
      for(const [n,re] of Object.entries(STEM)){
        const inEn=new RegExp('\\b'+n.replace("'","'?")+'\\b').test(p.en);
        if(inEn&&!re.test(p.bn)) problems.push(tag+' NAME PARITY en has '+n+', bn lacks it');
        const m=p.bn.match(re); if(m) (spellings[n]=spellings[n]||{})[m[0]]=((spellings[n]||{})[m[0]]||0)+1;
      }
      /* Numeric parity is checked by tools/wip/round9/nums.js instead: matching
       * Bengali number words by substring flags নয় (not), তিনি (he) and একই
       * (same) as the digits 9, 3 and 1, which buried the real findings. */
    });
  });
}
console.log('spellings used:',JSON.stringify(spellings));
console.log(problems.length?'PROBLEMS ('+problems.length+'):\n'+problems.join('\n'):'SWEEP CLEAN');
