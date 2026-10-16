// One spelling per word in a Tadabbur article shard: node tools/bn-review/tad-spell.js <surah>
// Skips matches followed by a nukta (U+09BC): reviewers sometimes write য় decomposed.
const fs=require("fs"),f=`js/tadabbur-articles/${process.argv[2]}.js`;let s=fs.readFileSync(f,"utf8"),n=0;
for(const [a,b] of [["হাদীস","হাদিস"],["নামায","নামাজ"],["নাযিল","নাজিল"],["ওহী","ওহি"],["যিকির","জিকির"],["রোযা","রোজা"],["ফরয","ফরজ"],["রমযান","রমজান"],["রসূল","রাসূল"],["জিহবা","জিহ্বা"]]){const re=new RegExp(a+"(?!\u09bc)","g");n+=(s.match(re)||[]).length;s=s.replace(re,b);}
fs.writeFileSync(f,s);console.log(f,"replaced",n);
