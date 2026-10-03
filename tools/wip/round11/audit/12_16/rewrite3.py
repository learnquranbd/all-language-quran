exec(open('/var/www/html/learnquranbd/all-language-quran/tools/wip/round11/audit/12_16/rewrite.py').read().split('R = [')[0])
R = [
("The narration's first half is in the surah too",
 "The narration's first half is in the surah too, and it belongs to the same men. In 12:97 they come to their father once more, and the words that opened their lie in 12:17, ya abana, O our father, now open a confession: ask forgiveness for us of our sins; indeed, we have been sinners. In 12:98 he promises to ask his Lord to forgive them. The verse at nightfall is not the last word on the brothers.",
 "হাদীসের প্রথম অর্ধেকও এই সূরায় আছে, আর তাও এই মানুষগুলোরই। ১২:৯৭ আয়াতে তারা আরেকবার বাবার কাছে আসে। ১২:১৭ আয়াতে যে ডাক দিয়ে তাদের মিথ্যা শুরু হয়েছিল, ইয়া আবানা, হে আমাদের আব্বা, সেই ডাকেই এবার শুরু হয় স্বীকারোক্তি: আমাদের গুনাহের জন্য মাগফিরাত চান, আমরা সত্যিই অপরাধী ছিলাম। ১২:৯৮ আয়াতে তিনি কথা দেন, তাদের জন্য তিনি তাঁর রবের কাছে মাগফিরাত চাইবেন। রাতের শুরুর এই আয়াত ভাইদের নিয়ে শেষ কথা নয়।"),
("'Isha'an is a word of time",
 "'Isha'an is a word of time. Al-Qurtubi glosses it as laylan, by night, and says it is an adverb of time standing in the place of a circumstantial phrase: the hour is part of how they came. Al-Muyassar puts it at the time of 'isha, at the start of the night, and Ibn Kathir in the darkness of the night. Yabkun, in the imperfect, gives the state in which they arrived: weeping as they came. Nothing in the four words says whether the weeping was felt or produced.",
 "ইশাআন সময়ের শব্দ। কুরতুবী এর অর্থ করেন লাইলান, রাতে। তিনি বলেন, শব্দটি সময় বোঝায়, তবে বসেছে অবস্থা বোঝানোর জায়গায়। অর্থাৎ কখন এল, সেটাই তাদের আসার ধরনের অংশ। মুয়াসসার বলে, ইশার সময়ে, রাতের শুরুতে। ইবনে কাসীর বলেন, রাতের অন্ধকারে। ইয়াবকূন ক্রিয়াটি চলমান কাজ বোঝায়, তারা কোন অবস্থায় এসেছিল সেটাই এর বিষয়: আসতে আসতে কাঁদছিল। কান্নাটা মনের ভেতর থেকে এসেছিল নাকি বানানো ছিল, এই ৪টি শব্দের কোথাও তা বলা নেই।"),
]
for r in R:
    rep(*r)
open(p, 'w', encoding='utf8').write(s)
print('ok')
