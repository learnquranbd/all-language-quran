/**
 * Topics Data Module
 * Pure data: famous Rabbana duas and verses grouped by subject.
 * All display names are localized inline for: en, bn, ar, ur, id, tr, fr.
 * refs use the app's hash range format: "2:201", "3:191-194", or comma-joined lists.
 */

const RABBANA_DUAS = [
  {
    refs: '2:127-128',
    names: {
      en: 'Acceptance of good deeds',
      bn: 'নেক আমল কবুলের দুআ',
      ar: 'تقبل الأعمال الصالحة',
      ur: 'نیک اعمال کی قبولیت',
      id: 'Diterimanya amal saleh',
      tr: 'Salih amellerin kabulü',
      fr: 'Acceptation des bonnes œuvres'
    , zh: '善功的接受', ja: '善行の受入れ', hi: 'नेक आमाल की क़बूलियत', es: 'Aceptación de las buenas obras', ru: 'Принятие благих деяний', de: 'Annahme der guten Taten', fa: 'پذیرش اعمال نیک', ms: 'Penerimaan amal soleh'}
  },
  {
    refs: '2:201',
    names: {
      en: 'Good in this world and the next',
      bn: 'দুনিয়া ও আখিরাতের কল্যাণ',
      ar: 'خيري الدنيا والآخرة',
      ur: 'دنیا اور آخرت کی بھلائی',
      id: 'Kebaikan dunia dan akhirat',
      tr: 'Dünya ve ahiret iyiliği',
      fr: "Le bien d'ici-bas et de l'au-delà"
    , zh: '今世与后世的福祉', ja: '現世と来世の善', hi: 'दुनिया और आख़िरत की भलाई', es: 'El bien en esta vida y en la otra', ru: 'Благо в этом мире и в Последней жизни', de: 'Gutes im Diesseits und im Jenseits', fa: 'نیکی در این دنیا و جهان دیگر', ms: 'Kebaikan di dunia dan di akhirat'}
  },
  {
    refs: '2:250',
    names: {
      en: 'Patience and victory',
      bn: 'ধৈর্য ও বিজয়',
      ar: 'الصبر والنصر',
      ur: 'صبر اور فتح',
      id: 'Kesabaran dan kemenangan',
      tr: 'Sabır ve zafer',
      fr: 'Patience et victoire'
    , zh: '忍耐与胜利', ja: '忍耐と勝利', hi: 'सब्र और जीत', es: 'Paciencia y victoria', ru: 'Терпение и победа', de: 'Geduld und Sieg', fa: 'صبر و پیروزی', ms: 'Kesabaran dan kemenangan'}
  },
  {
    refs: '2:286',
    names: {
      en: 'Do not burden us beyond our capacity',
      bn: 'সাধ্যের অতিরিক্ত বোঝা না দেওয়ার দুআ',
      ar: 'لا تحملنا ما لا طاقة لنا به',
      ur: 'طاقت سے زیادہ بوجھ نہ ڈالنے کی دعا',
      id: 'Jangan bebani kami di luar kemampuan',
      tr: 'Gücümüzün üstünde yük yükleme',
      fr: 'Ne nous charge pas au-delà de nos forces'
    , zh: '不要使我们负担过重', ja: '力を超える負担をかけないでください', hi: 'हम पर हमारी ताक़त से ज़्यादा बोझ न डाल', es: 'No nos impongas una carga superior a nuestras fuerzas', ru: 'Не возлагай на нас сверх наших сил', de: 'Belaste uns nicht über unser Vermögen', fa: 'بیش از توانمان بر ما بار مکن', ms: 'Jangan bebankan kami melebihi kemampuan kami'}
  },
  {
    refs: '3:8',
    names: {
      en: 'Steadfast hearts',
      bn: 'অন্তরের দৃঢ়তার দুআ',
      ar: 'ثبات القلوب',
      ur: 'دلوں کی ثابت قدمی',
      id: 'Keteguhan hati',
      tr: 'Kalplerin sebatı',
      fr: 'Fermeté des cœurs'
    , zh: '坚定之心', ja: '心の堅固', hi: 'दिलों की साबितक़दमी', es: 'Corazones firmes', ru: 'Стойкость сердец', de: 'Standhafte Herzen', fa: 'دل‌های استوار', ms: 'Keteguhan hati'}
  },
  {
    refs: '3:16',
    names: {
      en: 'Forgiveness and protection from the Fire',
      bn: 'ক্ষমা ও জাহান্নাম থেকে রক্ষা',
      ar: 'المغفرة والوقاية من النار',
      ur: 'مغفرت اور جہنم سے حفاظت',
      id: 'Ampunan dan perlindungan dari neraka',
      tr: 'Bağışlanma ve ateşten korunma',
      fr: 'Pardon et protection contre le Feu'
    , zh: '恕饶与火狱的庇护', ja: '赦しと火獄からの保護', hi: 'माफ़ी और आग से हिफ़ाज़त', es: 'Perdón y protección del Fuego', ru: 'Прощение и защита от Огня', de: 'Vergebung und Schutz vor dem Feuer', fa: 'آمرزش و رهایی از آتش', ms: 'Keampunan dan perlindungan daripada neraka'}
  },
  {
    refs: '3:38',
    names: {
      en: 'Righteous offspring',
      bn: 'নেক সন্তানের দুআ',
      ar: 'الذرية الطيبة',
      ur: 'نیک اولاد کی دعا',
      id: 'Keturunan yang saleh',
      tr: 'Hayırlı evlat duası',
      fr: 'Une descendance pieuse'
    , zh: '善良的后代', ja: '敬虔な子孫', hi: 'नेक औलाद', es: 'Una descendencia virtuosa', ru: 'Праведное потомство', de: 'Rechtschaffene Nachkommen', fa: 'فرزندان صالح', ms: 'Zuriat yang soleh'}
  },
  {
    refs: '3:147',
    names: {
      en: 'Forgiveness of sins and excesses',
      bn: 'গুনাহ ও সীমালঙ্ঘনের ক্ষমা',
      ar: 'غفران الذنوب والإسراف',
      ur: 'گناہوں اور زیادتیوں کی معافی',
      id: 'Ampunan atas dosa dan kelalaian',
      tr: 'Günahların ve aşırılıkların affı',
      fr: 'Pardon des péchés et des excès'
    , zh: '饶恕罪过和过分', ja: '罪と放埓の赦し', hi: 'गुनाहों और ज़्यादतियों की माफ़ी', es: 'Perdón de los pecados y de los excesos', ru: 'Прощение грехов и излишеств', de: 'Vergebung der Sünden und der Maßlosigkeit', fa: 'آمرزش گناهان و زیاده‌روی‌ها', ms: 'Keampunan dosa dan perbuatan melampaui batas'}
  },
  {
    refs: '3:191-194',
    names: {
      en: 'Dua of those who reflect',
      bn: 'চিন্তাশীলদের দুআ',
      ar: 'دعاء أولي الألباب',
      ur: 'اہلِ فکر کی دعا',
      id: 'Doa orang-orang yang berpikir',
      tr: 'Akıl sahiplerinin duası',
      fr: "Invocation des doués d'intelligence"
    , zh: '深思者的祈祷', ja: '思慮深い人々の祈り', hi: 'ग़ौर-फ़िक्र करने वालों की दुआ', es: 'Du\'a de quienes reflexionan', ru: 'Мольба (дуа) размышляющих', de: 'Bittgebet (Du\'a) derer, die nachsinnen', fa: 'دعای خردمندان اهل تفکر', ms: 'Doa orang-orang yang berfikir'}
  },
  {
    refs: '14:40-41',
    names: {
      en: 'Constancy in prayer and forgiveness for parents',
      bn: 'নামাজে অবিচলতা ও পিতামাতার জন্য ক্ষমা',
      ar: 'إقامة الصلاة والمغفرة للوالدين',
      ur: 'نماز کی پابندی اور والدین کی مغفرت',
      id: 'Tetap mendirikan salat dan ampunan bagi orang tua',
      tr: 'Namazda devamlılık ve ana babaya mağfiret',
      fr: 'Constance dans la prière et pardon pour les parents'
    , zh: '坚守拜功与为父母求饶', ja: '礼拝の堅持と両親の赦し', hi: 'नमाज़ की पाबंदी और माँ-बाप की माफ़ी', es: 'Constancia en la oración y perdón para los padres', ru: 'Постоянство в намазе и прощение для родителей', de: 'Beständigkeit im Gebet und Vergebung für die Eltern', fa: 'پایداری در نماز و آمرزش برای پدر و مادر', ms: 'Tetap mendirikan solat dan keampunan bagi ibu bapa'}
  },
  {
    refs: '23:109',
    names: {
      en: 'We believe, so forgive us and have mercy',
      bn: 'আমরা ঈমান এনেছি, আমাদের ক্ষমা করুন',
      ar: 'آمنا فاغفر لنا وارحمنا',
      ur: 'ہم ایمان لائے، ہمیں بخش دے اور رحم فرما',
      id: 'Kami beriman, maka ampunilah kami',
      tr: 'İman ettik, bizi bağışla ve merhamet et',
      fr: 'Nous croyons, pardonne-nous et fais-nous miséricorde'
    , zh: '我们已信道，求你饶恕我们', ja: '私たちは信じました、お赦しください', hi: 'हम ईमान लाए, तो हमें माफ़ कर और हम पर रहम कर', es: 'Creemos; perdónanos y ten misericordia de nosotros', ru: 'Мы уверовали — прости нас и помилуй', de: 'Wir glauben, so vergib uns und erbarme Dich unser', fa: 'ایمان آوردیم، پس ما را بیامرز و بر ما رحم کن', ms: 'Kami beriman, maka ampunilah kami dan rahmatilah kami'}
  },
  {
    refs: '25:74',
    names: {
      en: 'Comfort in spouses and children',
      bn: 'স্ত্রী-সন্তানে চোখের শীতলতা',
      ar: 'قرة أعين من الأزواج والذرية',
      ur: 'بیوی بچوں سے آنکھوں کی ٹھنڈک',
      id: 'Penyejuk mata dari pasangan dan keturunan',
      tr: 'Eş ve çocuklardan göz aydınlığı',
      fr: 'Réconfort dans nos épouses et nos enfants'
    , zh: '配偶和子女的欣慰', ja: '配偶者と子孫の慰め', hi: 'बीवी-बच्चों से आँखों की ठंडक', es: 'Alegría en los cónyuges y los hijos', ru: 'Услада очей в супругах и детях', de: 'Augentrost an Ehepartnern und Kindern', fa: 'روشنی چشم از همسران و فرزندان', ms: 'Penyejuk mata daripada pasangan dan zuriat'}
  },
  {
    refs: '59:10',
    names: {
      en: 'Forgiveness for us and the believers before us',
      bn: 'আমাদের ও পূর্ববর্তী মুমিনদের ক্ষমা',
      ar: 'المغفرة لنا ولإخواننا الذين سبقونا',
      ur: 'ہماری اور پہلے مومنوں کی مغفرت',
      id: 'Ampunan bagi kami dan saudara seiman terdahulu',
      tr: 'Bize ve bizden önceki müminlere mağfiret',
      fr: 'Pardon pour nous et les croyants qui nous ont précédés'
    , zh: '饶恕我们和前辈的信士', ja: '私たちと先人信者の赦し', hi: 'हमारी और हमसे पहले के मोमिनों की माफ़ी', es: 'Perdón para nosotros y para los creyentes que nos precedieron', ru: 'Прощение для нас и для верующих, живших до нас', de: 'Vergebung für uns und die Gläubigen vor uns', fa: 'آمرزش برای ما و مؤمنانی که پیش از ما بودند', ms: 'Keampunan bagi kami dan orang beriman yang terdahulu'}
  },
  {
    refs: '66:8',
    names: {
      en: 'Perfect our light and forgive us',
      bn: 'আমাদের নূর পূর্ণ করুন এবং ক্ষমা করুন',
      ar: 'أتمم لنا نورنا واغفر لنا',
      ur: 'ہمارا نور مکمل فرما اور ہمیں بخش دے',
      id: 'Sempurnakanlah cahaya kami dan ampunilah kami',
      tr: 'Nurumuzu tamamla ve bizi bağışla',
      fr: 'Parachève notre lumière et pardonne-nous'
    , zh: '完善我们的光明并饶恕我们', ja: '私たちの光を完成させ赦してください', hi: 'हमारा नूर पूरा कर दे और हमें माफ़ कर दे', es: 'Completa nuestra luz y perdónanos', ru: 'Доведи до конца наш свет и прости нас', de: 'Vervollkommne unser Licht und vergib uns', fa: 'نورمان را کامل کن و ما را بیامرز', ms: 'Sempurnakanlah cahaya kami dan ampunilah kami'}
  },
  {
    refs: '3:9',
    names: {
      en: 'You will gather all mankind',
      bn: 'আপনি সব মানুষকে একত্র করবেন',
      ar: 'إنك جامع الناس ليوم لا ريب فيه',
      ur: 'تو سب لوگوں کو جمع کرنے والا ہے',
      id: 'Engkau mengumpulkan seluruh manusia',
      tr: 'İnsanları toplayacak olan Sensin',
      fr: 'Tu rassembleras tous les hommes'
    , zh: '你必集合世人', ja: 'あなたは全人類を集められる', hi: 'तू सारे इंसानों को इकट्ठा करेगा', es: 'Tú reunirás a toda la humanidad', ru: 'Ты соберёшь всех людей', de: 'Du wirst die Menschen versammeln', fa: 'تو همه‌ی مردم را گرد می‌آوری', ms: 'Engkau akan menghimpunkan seluruh manusia'}
  },
  {
    refs: '5:83',
    names: {
      en: 'Record us among the witnesses',
      bn: 'আমাদের সাক্ষীদের অন্তর্ভুক্ত করুন',
      ar: 'فاكتبنا مع الشاهدين',
      ur: 'ہمیں گواہوں میں لکھ لے',
      id: 'Catatlah kami bersama para saksi',
      tr: 'Bizi şahitlerle beraber yaz',
      fr: 'Inscris-nous parmi les témoins'
    , zh: '求你使我们与作证者同列', ja: '私たちを証人たちと共に記してください', hi: 'हमें गवाहों में लिख ले', es: 'Inscríbenos entre los que dan testimonio', ru: 'Запиши нас в число свидетельствующих', de: 'Schreibe uns unter die Bezeugenden auf', fa: 'ما را در زمره‌ی گواهان بنویس', ms: 'Catatlah kami bersama orang-orang yang menjadi saksi'}
  },
  {
    refs: '7:23',
    names: {
      en: 'We have wronged ourselves (dua of Adam)',
      bn: 'আমরা নিজেদের প্রতি জুলুম করেছি (আদম আঃ-এর দুআ)',
      ar: 'ربنا ظلمنا أنفسنا',
      ur: 'ہم نے اپنے آپ پر ظلم کیا (آدم علیہ السلام کی دعا)',
      id: 'Kami telah menzalimi diri kami (doa Adam)',
      tr: 'Kendimize zulmettik (Âdem’in duası)',
      fr: 'Nous nous sommes fait du tort (invocation d’Adam)'
    , zh: '我们自欺了（阿丹的祈祷）', ja: '私たちは自らを損ないました（アーダムの祈り）', hi: 'हमने अपने ऊपर ज़ुल्म किया (आदम अलैहिस्सलाम की दुआ)', es: 'Hemos sido injustos con nosotros mismos (du\'a de Adán)', ru: 'Мы поступили несправедливо по отношению к себе (мольба Адама)', de: 'Wir haben uns selbst Unrecht zugefügt (Adams Bittgebet)', fa: 'بر خود ستم کردیم (دعای آدم)', ms: 'Kami telah menzalimi diri kami (doa Adam a.s.)'}
  },
  {
    refs: '7:47',
    names: {
      en: 'Place us not with the wrongdoing people',
      bn: 'আমাদের জালিমদের সাথে রাখবেন না',
      ar: 'لا تجعلنا مع القوم الظالمين',
      ur: 'ہمیں ظالم قوم کے ساتھ نہ کر',
      id: 'Jangan tempatkan kami bersama kaum yang zalim',
      tr: 'Bizi zalim toplulukla beraber kılma',
      fr: 'Ne nous place pas avec les injustes'
    , zh: '求你不要使我们与不义者同列', ja: '不義の民と共にしないでください', hi: 'हमें ज़ालिम लोगों के साथ न कर', es: 'No nos pongas con la gente injusta', ru: 'Не помещай нас вместе с несправедливыми людьми', de: 'Stelle uns nicht zu den ungerechten Leuten', fa: 'ما را با قوم ستمکار قرار مده', ms: 'Jangan tempatkan kami bersama kaum yang zalim'}
  },
  {
    refs: '7:89',
    names: {
      en: 'Decide between us and our people in truth',
      bn: 'আমাদের ও আমাদের জাতির মাঝে সত্যের ফয়সালা করুন',
      ar: 'ربنا افتح بيننا وبين قومنا بالحق',
      ur: 'ہمارے اور ہماری قوم کے درمیان حق کے ساتھ فیصلہ فرما',
      id: 'Berilah keputusan yang benar antara kami dan kaum kami',
      tr: 'Bizimle kavmimiz arasında hak ile hüküm ver',
      fr: 'Tranche en toute vérité entre nous et notre peuple'
    , zh: '求你在我们和我们的宗族之间依真理而判决', ja: '私たちと民の間を真理で裁いてください', hi: 'हमारे और हमारी क़ौम के बीच हक़ के साथ फ़ैसला कर दे', es: 'Juzga con la verdad entre nosotros y nuestro pueblo', ru: 'Рассуди по истине между нами и нашим народом', de: 'Entscheide zwischen uns und unserem Volk nach der Wahrheit', fa: 'میان ما و قوممان به حق داوری کن', ms: 'Putuskanlah antara kami dan kaum kami dengan kebenaran'}
  },
  {
    refs: '7:126',
    names: {
      en: 'Pour patience upon us and let us die as Muslims',
      bn: 'আমাদের ধৈর্য দিন ও মুসলিম হিসেবে মৃত্যু দিন',
      ar: 'ربنا أفرغ علينا صبرا وتوفنا مسلمين',
      ur: 'ہم پر صبر انڈیل دے اور ہمیں مسلمان کر کے موت دے',
      id: 'Limpahkanlah kesabaran dan wafatkanlah kami sebagai muslim',
      tr: 'Üzerimize sabır yağdır ve bizi müslüman olarak öldür',
      fr: 'Déverse sur nous la patience et fais-nous mourir soumis'
    , zh: '求你把坚忍倾注于我们，并使我们作为归顺者而死', ja: '忍耐を注ぎ、ムスリムとして死なせてください', hi: 'हम पर सब्र उंडेल दे और हमें मुसलमान रहते हुए मौत दे', es: 'Derrama sobre nosotros paciencia y haz que muramos como musulmanes', ru: 'Ниспошли нам терпение и упокой нас мусульманами', de: 'Gieße Geduld über uns aus und lass uns als Muslime sterben', fa: 'بر ما صبر فرو ریز و ما را مسلمان بمیران', ms: 'Limpahkanlah kesabaran kepada kami dan matikanlah kami sebagai Muslim'}
  },
  {
    refs: '10:85-86',
    names: {
      en: 'Make us not a trial; save us from the disbelievers',
      bn: 'আমাদের ফিতনা বানাবেন না; কাফিরদের থেকে রক্ষা করুন',
      ar: 'لا تجعلنا فتنة ونجنا من القوم الكافرين',
      ur: 'ہمیں آزمائش نہ بنا اور کافروں سے نجات دے',
      id: 'Jangan jadikan kami sasaran fitnah; selamatkan kami dari kaum kafir',
      tr: 'Bizi bir fitne kılma; kâfir topluluktan bizi kurtar',
      fr: 'Ne fais pas de nous une épreuve; sauve-nous des mécréants'
    , zh: '求你不要使我们受迫害，求你拯救我们脱离不信道的民众', ja: '私たちを試練とせず、不信者から救ってください', hi: 'हमें आज़माइश न बना; हमें काफ़िरों से निजात दे', es: 'No hagas de nosotros una prueba; sálvanos de los incrédulos', ru: 'Не делай нас искушением; спаси нас от неверующих', de: 'Mache uns nicht zur Versuchung; errette uns vor den Ungläubigen', fa: 'ما را مایه‌ی آزمایش مگردان؛ ما را از کافران نجات ده', ms: 'Jangan jadikan kami sasaran fitnah; selamatkanlah kami daripada orang kafir'}
  },
  {
    refs: '18:10',
    names: {
      en: 'Grant us mercy and guidance (People of the Cave)',
      bn: 'আমাদের রহমত ও হেদায়েত দিন (আসহাবে কাহফ)',
      ar: 'آتنا من لدنك رحمة وهيئ لنا من أمرنا رشدا',
      ur: 'ہمیں اپنے پاس سے رحمت دے اور ہمارے کام میں رہنمائی فرما',
      id: 'Berikanlah rahmat dan petunjuk bagi urusan kami (Ashabul Kahfi)',
      tr: 'Bize katından rahmet ver ve işimizde bize doğruyu kolaylaştır',
      fr: 'Accorde-nous miséricorde et guide-nous en notre affaire'
    , zh: '求你把你那里的恩惠赏赐我们，求你使我们的事业完全端正', ja: '御許から慈悲を授け、私たちの事を正しく導いてください', hi: 'हमें रहमत और हिदायत दे (असहाब-ए-कहफ़)', es: 'Concédenos misericordia y buena dirección (los compañeros de la Cueva)', ru: 'Даруй нам милость и верное руководство (обитатели пещеры)', de: 'Gewähre uns Barmherzigkeit und Rechtleitung (die Leute der Höhle)', fa: 'به ما رحمت و هدایت ببخش (اصحاب کهف)', ms: 'Kurniakanlah rahmat dan petunjuk kepada kami (Ashabul Kahfi)'}
  },
  {
    refs: '25:65-66',
    names: {
      en: 'Avert from us the punishment of Hell',
      bn: 'জাহান্নামের শাস্তি আমাদের থেকে দূর করুন',
      ar: 'اصرف عنا عذاب جهنم',
      ur: 'ہم سے جہنم کا عذاب ٹال دے',
      id: 'Jauhkanlah azab Jahanam dari kami',
      tr: 'Cehennem azabını bizden savuştur',
      fr: 'Écarte de nous le châtiment de l’Enfer'
    , zh: '求你使我们得免于火狱的刑罚', ja: '地獄の懲罰を私たちから遠ざけてください', hi: 'हमसे जहन्नम का अज़ाब फेर दे', es: 'Aparta de nosotros el castigo del Infierno', ru: 'Отврати от нас мучения Геенны', de: 'Wende die Strafe der Hölle von uns ab', fa: 'عذاب دوزخ را از ما بگردان', ms: 'Jauhkanlah azab neraka Jahannam daripada kami'}
  },
  {
    refs: '60:4-5',
    names: {
      en: 'Upon You we rely; make us not a trial (dua of Ibrahim)',
      bn: 'আপনার উপরই ভরসা করি; আমাদের ফিতনা বানাবেন না (ইবরাহীম আঃ-এর দুআ)',
      ar: 'عليك توكلنا ولا تجعلنا فتنة للذين كفروا',
      ur: 'ہم نے تجھ پر بھروسہ کیا؛ ہمیں کافروں کے لیے آزمائش نہ بنا (ابراہیم علیہ السلام کی دعا)',
      id: 'Kepada-Mu kami bertawakal; jangan jadikan kami fitnah bagi orang kafir (doa Ibrahim)',
      tr: 'Sana tevekkül ettik; bizi inkârcılara fitne kılma (İbrahim’in duası)',
      fr: 'C’est à Toi que nous nous confions; ne fais pas de nous une épreuve (invocation d’Ibrahim)'
    , zh: '我们只信托你；求你不要使我们成为不信道者的考验（易卜拉欣的祈祷）', ja: 'あなたに委ねます、私たちを不信者への試練とされないでください（イブラーヒームの祈り）', hi: 'हमने तुझ पर भरोसा किया; हमें आज़माइश न बना (इब्राहीम अलैहिस्सलाम की दुआ)', es: 'En Ti confiamos; no hagas de nosotros una prueba (du\'a de Abraham)', ru: 'На Тебя мы уповаем; не делай нас искушением (мольба Ибрахима)', de: 'Auf Dich verlassen wir uns; mache uns nicht zur Versuchung (Ibrahims Bittgebet)', fa: 'بر تو توکل کردیم؛ ما را مایه‌ی آزمایش مگردان (دعای ابراهیم)', ms: 'Kepada-Mu kami bertawakal; jangan jadikan kami sasaran fitnah (doa Ibrahim a.s.)'}
  },
  // v164 additions — 16 more Quranic rabbanā supplications (2026-07-28)
  {
    "refs": "2:129",
    "names": {
      "en": "A messenger raised from among them",
      "bn": "তাদের মধ্য থেকে একজন রাসূল প্রেরণ",
      "ar": "بعث رسول منهم",
      "ur": "انہی میں سے ایک رسول کی بعثت",
      "id": "Diutusnya seorang rasul dari kalangan mereka",
      "tr": "İçlerinden bir peygamber gönderilmesi",
      "fr": "Un messager issu d'eux-mêmes",
      "zh": "从他们中间派遣一位使者",
      "ja": "彼らの中から使徒が遣わされること", hi: 'उन्हीं में से उठाया गया एक रसूल', es: 'Un mensajero surgido de entre ellos', ru: 'Посланник из их среды', de: 'Ein Gesandter aus ihrer Mitte', fa: 'برانگیختن رسولی از میان خودشان', ms: 'Seorang rasul diutus dari kalangan mereka'
    }
  },
  {
    "refs": "2:285",
    "names": {
      "en": "We seek Your forgiveness, our Lord",
      "bn": "হে আমাদের রব, আপনার ক্ষমা প্রার্থনা",
      "ar": "غفرانك ربنا",
      "ur": "اے ہمارے رب، تیری بخشش کی طلب",
      "id": "Ampunan-Mu, ya Tuhan kami",
      "tr": "Bağışlamanı dileriz Rabbimiz",
      "fr": "Nous implorons Ton pardon, notre Seigneur",
      "zh": "我们的主啊，求你饶恕",
      "ja": "主よ、あなたの赦しを乞います", hi: 'ऐ हमारे रब, हम तेरी माफ़ी चाहते हैं', es: 'Te pedimos perdón, Señor nuestro', ru: 'Просим Твоего прощения, Господь наш', de: 'Wir bitten Dich um Vergebung, unser Herr', fa: 'پروردگارا، آمرزشت را خواهانیم', ms: 'Kami memohon keampunan-Mu, wahai Tuhan kami'
    }
  },
  {
    "refs": "4:75",
    "names": {
      "en": "A protector and a helper for the oppressed",
      "bn": "নিপীড়িতদের জন্য অভিভাবক ও সাহায্যকারী",
      "ar": "ولي ونصير للمستضعفين",
      "ur": "مظلوموں کے لیے کارساز اور مددگار",
      "id": "Pelindung dan penolong bagi kaum tertindas",
      "tr": "Mazlumlar için bir dost ve yardımcı",
      "fr": "Un protecteur et un secoureur pour les opprimés",
      "zh": "为受压迫者求保护者与援助者",
      "ja": "虐げられた者への保護者と援助者", hi: 'मज़लूमों के लिए एक हिमायती और एक मददगार', es: 'Un protector y un auxiliador para los oprimidos', ru: 'Покровитель и помощник для угнетённых', de: 'Ein Schutzherr und ein Helfer für die Unterdrückten', fa: 'سرپرست و یاوری برای مستضعفان', ms: 'Pelindung dan penolong bagi golongan yang tertindas'
    }
  },
  {
    "refs": "7:151",
    "names": {
      "en": "Forgiveness for me and my brother, and Your mercy",
      "bn": "আমাকে ও আমার ভাইকে ক্ষমা এবং আপনার রহমত",
      "ar": "المغفرة لي ولأخي وإدخالنا في رحمتك",
      "ur": "مجھے اور میرے بھائی کو معافی اور اپنی رحمت",
      "id": "Ampunan bagiku dan saudaraku serta rahmat-Mu",
      "tr": "Bana ve kardeşime mağfiret ve rahmetin",
      "fr": "Pardon pour moi et mon frère, et Ta miséricorde",
      "zh": "饶恕我和我的兄弟并赐予你的慈恩",
      "ja": "私と兄弟への赦しとあなたの慈悲", hi: 'मेरी और मेरे भाई की माफ़ी, और तेरी रहमत', es: 'Perdón para mí y para mi hermano, y Tu misericordia', ru: 'Прощение мне и моему брату и Твоя милость', de: 'Vergebung für mich und meinen Bruder, und Deine Barmherzigkeit', fa: 'آمرزش برای من و برادرم، و رحمت تو', ms: 'Keampunan bagiku dan saudaraku, serta rahmat-Mu'
    }
  },
  {
    "refs": "11:47",
    "names": {
      "en": "Refuge from asking what one has no knowledge of",
      "bn": "না জেনে কিছু চাওয়া থেকে আশ্রয়",
      "ar": "الاستعاذة من سؤال ما ليس به علم",
      "ur": "بے علمی کی بات مانگنے سے پناہ",
      "id": "Berlindung dari meminta hal yang tidak diketahui",
      "tr": "Bilmediğini istemekten sığınma",
      "fr": "Refuge contre demander ce qu'on ignore",
      "zh": "求庇于妄求自己无知之事",
      "ja": "知らぬことを求めることからの庇護", hi: 'जिस बात का इल्म न हो उसे माँगने से पनाह', es: 'Refugio de pedir aquello de lo que no se tiene conocimiento', ru: 'Защита от того, чтобы просить о том, чего не знаешь', de: 'Zuflucht davor, um etwas zu bitten, wovon man kein Wissen hat', fa: 'پناه بردن از درخواستِ آنچه به آن علم نیست', ms: 'Berlindung daripada meminta sesuatu yang tidak diketahui'
    }
  },
  {
    "refs": "12:101",
    "names": {
      "en": "To die in submission and join the righteous",
      "bn": "মুসলিম হয়ে মৃত্যু ও নেককারদের সঙ্গী হওয়া",
      "ar": "الوفاة على الإسلام واللحاق بالصالحين",
      "ur": "اسلام پر موت اور نیکوں کی رفاقت",
      "id": "Wafat dalam keadaan muslim dan bersama orang saleh",
      "tr": "Müslüman olarak ölmek ve salihlere katılmak",
      "fr": "Mourir soumis et rejoindre les vertueux",
      "zh": "以顺从者的身分归真并与善人同列",
      "ja": "ムスリムとして死に義人に加わること", hi: 'इस्लाम पर मौत और नेक लोगों का साथ', es: 'Morir en sumisión y reunirse con los justos', ru: 'Умереть покорным и присоединиться к праведникам', de: 'In Ergebenheit sterben und sich den Rechtschaffenen anschließen', fa: 'مسلمان مردن و پیوستن به صالحان', ms: 'Wafat dalam keadaan berserah diri dan bersama orang-orang soleh'
    }
  },
  {
    "refs": "14:35",
    "names": {
      "en": "A secure city and safety from idol-worship",
      "bn": "নিরাপদ নগরী ও মূর্তিপূজা থেকে রক্ষা",
      "ar": "أمن البلد والنجاة من عبادة الأصنام",
      "ur": "امن والا شہر اور بت پرستی سے حفاظت",
      "id": "Negeri yang aman dan terhindar dari penyembahan berhala",
      "tr": "Güvenli bir şehir ve putlara tapmaktan korunma",
      "fr": "Une cité sûre et la préservation de l'idolâtrie",
      "zh": "安宁的城市与远离偶像崇拜",
      "ja": "安全な町と偶像崇拝からの守り", hi: 'अमन वाला शहर और बुत-परस्ती से हिफ़ाज़त', es: 'Una ciudad segura y protección contra la adoración de ídolos', ru: 'Безопасный город и защита от поклонения идолам', de: 'Eine sichere Stadt und Bewahrung vor dem Götzendienst', fa: 'شهری امن و دوری از بت‌پرستی', ms: 'Negeri yang aman dan terpelihara daripada penyembahan berhala'
    }
  },
  {
    "refs": "17:24",
    "names": {
      "en": "Mercy upon parents as they raised us",
      "bn": "পিতামাতার প্রতি রহমত, যেমন তাঁরা লালন করেছেন",
      "ar": "الرحمة بالوالدين كما ربيانا صغيرا",
      "ur": "والدین پر رحم، جیسے انہوں نے پالا",
      "id": "Rahmat bagi orang tua sebagaimana mereka mengasuh kita",
      "tr": "Bizi yetiştirdikleri gibi ana babaya merhamet",
      "fr": "Miséricorde pour les parents qui nous ont élevés",
      "zh": "求主怜悯抚育我们的父母",
      "ja": "育ててくれた両親への慈悲", hi: 'माँ-बाप पर रहम, जैसे उन्होंने हमें पाला', es: 'Misericordia para los padres, como ellos nos criaron', ru: 'Милость к родителям, ведь они растили нас', de: 'Erbarmen für die Eltern, wie sie uns aufgezogen haben', fa: 'رحمت بر پدر و مادر، چنان‌که ما را پروردند', ms: 'Rahmat bagi ibu bapa sebagaimana mereka memelihara kita'
    }
  },
  {
    "refs": "20:25-28",
    "names": {
      "en": "Openness of heart and clarity of speech",
      "bn": "বক্ষ প্রশস্ততা ও বাকশক্তির স্পষ্টতা",
      "ar": "شرح الصدر وتيسير الأمر وحل عقدة اللسان",
      "ur": "سینے کی کشادگی اور زبان کی گرہ کھلنا",
      "id": "Kelapangan dada dan kefasihan lisan",
      "tr": "Gönül genişliği ve dilin çözülmesi",
      "fr": "Ouverture du cœur et aisance de la parole",
      "zh": "心胸开阔与言语通畅",
      "ja": "胸を開き言葉を明瞭にすること", hi: 'सीने की कुशादगी और ज़बान की सफ़ाई', es: 'Apertura del corazón y claridad al hablar', ru: 'Раскрытие груди и ясность речи', de: 'Weite des Herzens und Klarheit der Rede', fa: 'گشادگی سینه و روانی سخن', ms: 'Kelapangan dada dan kefasihan lidah'
    }
  },
  {
    "refs": "20:114",
    "names": {
      "en": "Increase me in knowledge",
      "bn": "আমার জ্ঞান বৃদ্ধির দুআ",
      "ar": "زيادة العلم",
      "ur": "علم میں اضافے کی دعا",
      "id": "Tambahkanlah ilmu kepadaku",
      "tr": "İlmimi artır",
      "fr": "Accrois-moi en savoir",
      "zh": "求主增加我的知识",
      "ja": "知識を増やしてください", hi: 'मेरा इल्म बढ़ा दे', es: 'Auméntame en conocimiento', ru: 'Приумножь мои знания', de: 'Lass mich an Wissen zunehmen', fa: 'بر دانشم بیفزا', ms: 'Tambahkanlah ilmuku'
    }
  },
  {
    "refs": "23:97-98",
    "names": {
      "en": "Refuge from the whisperings of devils",
      "bn": "শয়তানের কুমন্ত্রণা থেকে আশ্রয়",
      "ar": "الاستعاذة من همزات الشياطين",
      "ur": "شیاطین کے وسوسوں سے پناہ",
      "id": "Berlindung dari bisikan setan",
      "tr": "Şeytanların vesveselerinden sığınma",
      "fr": "Refuge contre les suggestions des démons",
      "zh": "求庇于恶魔的教唆",
      "ja": "悪魔のささやきからの加護", hi: 'शैतानों के वसवसों से पनाह', es: 'Refugio de los susurros de los demonios', ru: 'Защита от наущений шайтанов', de: 'Zuflucht vor den Einflüsterungen der Satane', fa: 'پناه بردن از وسوسه‌های شیاطین', ms: 'Berlindung daripada bisikan syaitan'
    }
  },
  {
    "refs": "23:118",
    "names": {
      "en": "Forgive and have mercy, best of the merciful",
      "bn": "ক্ষমা ও রহমত করুন, আপনিই শ্রেষ্ঠ দয়ালু",
      "ar": "المغفرة والرحمة من خير الراحمين",
      "ur": "بخشش اور رحم، تو بہترین رحم کرنے والا ہے",
      "id": "Ampunilah dan rahmatilah, Engkau sebaik-baik pemberi rahmat",
      "tr": "Bağışla ve merhamet et, merhametlilerin en hayırlısı",
      "fr": "Pardonne et fais miséricorde, meilleur des miséricordieux",
      "zh": "求你饶恕与怜悯，你是最仁慈的",
      "ja": "赦しと慈悲を、最も慈悲深き御方よ", hi: 'माफ़ कर और रहम कर, ऐ सबसे अच्छे रहम करने वाले', es: 'Perdona y ten misericordia, Tú, el mejor de los misericordiosos', ru: 'Прости и помилуй, ведь Ты — лучший из милующих', de: 'Vergib und erbarme Dich, Du Bester der Erbarmer', fa: 'بیامرز و رحم کن، ای بهترینِ رحم‌کنندگان', ms: 'Ampunilah dan rahmatilah, Engkau sebaik-baik Pemberi rahmat'
    }
  },
  {
    "refs": "28:24",
    "names": {
      "en": "In need of whatever good You send down",
      "bn": "আপনার পাঠানো কল্যাণের মুখাপেক্ষী",
      "ar": "الافتقار إلى ما ينزل من الخير",
      "ur": "تیری بھیجی ہوئی ہر بھلائی کا محتاج",
      "id": "Sangat membutuhkan kebaikan yang Engkau turunkan",
      "tr": "İndireceğin her hayra muhtaçlık",
      "fr": "Dans le besoin du bien que Tu fais descendre",
      "zh": "急需你所降下的任何福利",
      "ja": "あなたが下される善への切なる必要", hi: 'तू जो भी भलाई उतारे, उसका मोहताज', es: 'Necesitado de cualquier bien que hagas descender', ru: 'Нуждаюсь в любом благе, которое Ты ниспошлёшь', de: 'Bedürftig nach allem Guten, das Du herabsendest', fa: 'نیازمند هر خیری که فرو فرستی', ms: 'Sangat memerlukan kebaikan yang Engkau turunkan'
    }
  },
  {
    "refs": "40:7-9",
    "names": {
      "en": "Forgiveness for the repentant and entry into Gardens of Eden",
      "bn": "তওবাকারীদের ক্ষমা ও জান্নাতে আদনে প্রবেশ",
      "ar": "المغفرة للتائبين وإدخالهم جنات عدن",
      "ur": "توبہ کرنے والوں کی مغفرت اور جناتِ عدن میں داخلہ",
      "id": "Ampunan bagi yang bertobat dan masuk surga Adn",
      "tr": "Tövbe edenlere mağfiret ve Adn cennetlerine giriş",
      "fr": "Pardon pour les repentants et entrée aux jardins d'Éden",
      "zh": "饶恕悔过者并使其进入常住乐园",
      "ja": "悔悟者への赦しとアドンの園への入場", hi: 'तौबा करने वालों की माफ़ी और अद्न के बाग़ों में दाख़िला', es: 'Perdón para los arrepentidos y entrada en los Jardines del Edén', ru: 'Прощение для кающихся и вход в Сады Эдема', de: 'Vergebung für die Bereuenden und Eintritt in die Gärten Edens', fa: 'آمرزش برای توبه‌کنندگان و ورود به بهشت‌های عدن', ms: 'Keampunan bagi orang yang bertaubat dan masuk ke syurga Adn'
    }
  },
  {
    "refs": "46:15",
    "names": {
      "en": "Gratitude for His favour and righteous offspring",
      "bn": "নিয়ামতের শোকর ও সন্তানের সংশোধন",
      "ar": "شكر النعمة وصلاح الذرية",
      "ur": "نعمت کا شکر اور اولاد کی اصلاح",
      "id": "Syukur atas nikmat dan kesalehan keturunan",
      "tr": "Nimete şükür ve neslin salahı",
      "fr": "Gratitude pour Ses bienfaits et une descendance vertueuse",
      "zh": "感谢主恩与后代的端正",
      "ja": "恩恵への感謝と子孫の善導", hi: 'उसकी नेमत का शुक्र और नेक औलाद', es: 'Gratitud por Su favor y una descendencia virtuosa', ru: 'Благодарность за Его милость и праведное потомство', de: 'Dankbarkeit für Seine Gunst und rechtschaffene Nachkommen', fa: 'شکر نعمت او و فرزندان صالح', ms: 'Syukur atas nikmat-Nya dan zuriat yang soleh'
    }
  },
  {
    "refs": "66:11",
    "names": {
      "en": "A house near Allah in Paradise and rescue from oppressors",
      "bn": "জান্নাতে আল্লাহর নিকট একটি ঘর ও জালিমদের থেকে মুক্তি",
      "ar": "بيت عند الله في الجنة والنجاة من الظالمين",
      "ur": "جنت میں اللہ کے پاس ایک گھر اور ظالموں سے نجات",
      "id": "Rumah di sisi Allah dalam surga dan keselamatan dari kaum zalim",
      "tr": "Cennette Allah katında bir ev ve zalimlerden kurtuluş",
      "fr": "Une demeure auprès d'Allah au Paradis et le salut face aux injustes",
      "zh": "在乐园中主的近旁得一居所并脱离不义者",
      "ja": "楽園における主の御許の家と圧制者からの救い", hi: 'जन्नत में अल्लाह के पास एक घर और ज़ालिमों से निजात', es: 'Una casa junto a Allah en el Paraíso y salvación de los opresores', ru: 'Дом возле Аллаха в Раю и спасение от несправедливых', de: 'Ein Haus bei Allah im Paradies und Rettung vor den Ungerechten', fa: 'خانه‌ای نزد الله در بهشت و رهایی از ستمگران', ms: 'Rumah di sisi Allah dalam syurga dan selamat daripada orang yang zalim'
    }
  }
];

const TOPIC_GROUPS = [
  {
    id: 'patience',
    emoji: '⏳',
    names: {
      en: 'Patience',
      bn: 'ধৈর্য',
      ar: 'الصبر',
      ur: 'صبر',
      id: 'Kesabaran',
      tr: 'Sabır',
      fr: 'Patience'
    , zh: '忍耐', ja: '忍耐', hi: 'सब्र', es: 'Paciencia', ru: 'Терпение', de: 'Geduld', fa: 'صبر', ms: 'Sabar'},
    refs: ['2:153', '2:155-157', '3:200', '39:10', '94:5-6']
  },
  {
    id: 'gratitude',
    emoji: '🌻',
    names: {
      en: 'Gratitude',
      bn: 'কৃতজ্ঞতা',
      ar: 'الشكر',
      ur: 'شکر گزاری',
      id: 'Rasa Syukur',
      tr: 'Şükür',
      fr: 'Gratitude'
    , zh: '感恩', ja: '感謝', hi: 'शुक्र', es: 'Gratitud', ru: 'Благодарность', de: 'Dankbarkeit', fa: 'شکر', ms: 'Syukur'},
    refs: ['2:152', '14:7', '16:18', '31:12', '55:13']
  },
  {
    id: 'forgiveness',
    emoji: '💚',
    names: {
      en: 'Forgiveness',
      bn: 'ক্ষমা',
      ar: 'المغفرة',
      ur: 'مغفرت',
      id: 'Ampunan',
      tr: 'Bağışlanma',
      fr: 'Pardon'
    , zh: '饶恕', ja: '赦し', hi: 'माफ़ी', es: 'Perdón', ru: 'Прощение', de: 'Vergebung', fa: 'آمرزش', ms: 'Keampunan'},
    refs: ['39:53', '3:135', '4:110', '24:22', '42:25']
  },
  {
    id: 'prayer',
    emoji: '🕌',
    names: {
      en: 'Prayer',
      bn: 'নামাজ',
      ar: 'الصلاة',
      ur: 'نماز',
      id: 'Salat',
      tr: 'Namaz',
      fr: 'Prière'
    , zh: '礼拜', ja: '礼拝', hi: 'नमाज़', es: 'Oración', ru: 'Намаз', de: 'Gebet', fa: 'نماز', ms: 'Solat'},
    refs: ['2:45', '29:45', '20:14', '17:78', '23:1-2']
  },
  {
    id: 'parents',
    emoji: '👪',
    names: {
      en: 'Parents',
      bn: 'পিতামাতা',
      ar: 'الوالدان',
      ur: 'والدین',
      id: 'Orang Tua',
      tr: 'Anne Baba',
      fr: 'Parents'
    , zh: '父母', ja: '両親', hi: 'माँ-बाप', es: 'Los padres', ru: 'Родители', de: 'Eltern', fa: 'پدر و مادر', ms: 'Ibu Bapa'},
    refs: ['17:23-24', '31:14', '46:15', '29:8']
  },
  {
    id: 'knowledge',
    emoji: '📚',
    names: {
      en: 'Knowledge',
      bn: 'জ্ঞান',
      ar: 'العلم',
      ur: 'علم',
      id: 'Ilmu',
      tr: 'İlim',
      fr: 'Savoir'
    , zh: '知识', ja: '知識', hi: 'इल्म', es: 'Conocimiento', ru: 'Знание', de: 'Wissen', fa: 'دانش', ms: 'Ilmu'},
    refs: ['96:1-5', '20:114', '58:11', '39:9', '35:28']
  },
  {
    id: 'charity',
    emoji: '🤲',
    names: {
      en: 'Charity',
      bn: 'দান-সদকা',
      ar: 'الصدقة',
      ur: 'صدقہ و خیرات',
      id: 'Sedekah',
      tr: 'Sadaka',
      fr: 'Charité'
    , zh: '施舍', ja: '施し', hi: 'सदक़ा', es: 'Caridad', ru: 'Милостыня', de: 'Spenden', fa: 'صدقه', ms: 'Sedekah'},
    refs: ['2:261', '2:274', '57:18', '3:92', '76:8-9']
  },
  {
    id: 'paradise',
    emoji: '🌴',
    names: {
      en: 'Paradise',
      bn: 'জান্নাত',
      ar: 'الجنة',
      ur: 'جنت',
      id: 'Surga',
      tr: 'Cennet',
      fr: 'Paradis'
    , zh: '天堂', ja: '楽園', hi: 'जन्नत', es: 'El Paraíso', ru: 'Рай', de: 'Paradies', fa: 'بهشت', ms: 'Syurga'},
    refs: ['2:25', '3:133', '13:23-24', '55:46', '76:12-22']
  },
  {
    id: 'justice',
    emoji: '⚖️',
    names: {
      en: 'Justice',
      bn: 'ন্যায়বিচার',
      ar: 'العدل',
      ur: 'انصاف',
      id: 'Keadilan',
      tr: 'Adalet',
      fr: 'Justice'
    , zh: '公正', ja: '正義', hi: 'इंसाफ़', es: 'Justicia', ru: 'Справедливость', de: 'Gerechtigkeit', fa: 'عدالت', ms: 'Keadilan'},
    refs: ['4:135', '5:8', '16:90', '49:9']
  },
  {
    id: 'creation',
    emoji: '🌌',
    names: {
      en: 'Creation & the Universe',
      bn: 'সৃষ্টি ও মহাবিশ্ব',
      ar: 'الخلق والكون',
      ur: 'تخلیق اور کائنات',
      id: 'Penciptaan dan Alam Semesta',
      tr: 'Yaratılış ve Evren',
      fr: 'Création et Univers'
    , zh: '创造与宇宙', ja: '創造と宇宙', hi: 'तख़लीक़ और कायनात', es: 'La creación y el universo', ru: 'Творение и Вселенная', de: 'Schöpfung & Universum', fa: 'آفرینش و جهان هستی', ms: 'Penciptaan & Alam Semesta'},
    refs: ['21:30', '41:53', '51:47', '67:3-4', '3:190']
  },
  {
    id: 'tawakkul',
    emoji: '🕊️',
    names: { en: 'Trust in Allah (Tawakkul)', bn: 'আল্লাহর উপর ভরসা (তাওয়াক্কুল)', ar: 'التوكل على الله', ur: 'اللہ پر توکل', id: 'Tawakal kepada Allah', tr: 'Allah\'a Tevekkül', fr: 'Confiance en Allah (Tawakkul)', zh: '托靠真主', ja: 'アッラーへの信頼（タワックル）', hi: 'अल्लाह पर भरोसा (तवक्कुल)', es: 'Confianza en Allah (tawakkul)', ru: 'Упование на Аллаха (таваккуль)', de: 'Vertrauen auf Allah (Tawakkul)', fa: 'توکل بر الله', ms: 'Tawakal kepada Allah' },
    refs: ['3:159', '65:3', '9:51', '8:2', '11:88', '33:3']
  },
  {
    id: 'sincerity',
    emoji: '💎',
    names: { en: 'Sincerity (Ikhlas)', bn: 'ইখলাস (নিষ্ঠা)', ar: 'الإخلاص', ur: 'اخلاص', id: 'Keikhlasan', tr: 'İhlas', fr: 'Sincérité (Ikhlas)', zh: '虔诚', ja: '誠実（イフラース）', hi: 'ख़ुलूस (इख़लास)', es: 'Sinceridad (ikhlas)', ru: 'Искренность (ихлас)', de: 'Aufrichtigkeit (Ichlas)', fa: 'اخلاص', ms: 'Ikhlas' },
    refs: ['98:5', '39:2', '39:11', '6:162-163', '107:4-6']
  },
  {
    id: 'humility',
    emoji: '🌾',
    names: { en: 'Humility', bn: 'বিনয়', ar: 'التواضع', ur: 'عاجزی', id: 'Kerendahan Hati', tr: 'Tevazu', fr: 'Humilité', zh: '谦逊', ja: '謙虚', hi: 'आजिज़ी', es: 'Humildad', ru: 'Смирение', de: 'Demut', fa: 'فروتنی', ms: 'Rendah Diri' },
    refs: ['25:63', '31:18-19', '17:37', '57:16', '23:1-2', '7:55']
  },
  {
    id: 'honesty',
    emoji: '🤝',
    names: { en: 'Honesty & Truthfulness', bn: 'সততা ও সত্যবাদিতা', ar: 'الصدق والأمانة', ur: 'سچائی اور دیانت', id: 'Kejujuran', tr: 'Doğruluk ve Dürüstlük', fr: 'Honnêteté et Véracité', zh: '诚实', ja: '正直と誠実', hi: 'ईमानदारी और सच्चाई', es: 'Honestidad y veracidad', ru: 'Честность и правдивость', de: 'Ehrlichkeit & Wahrhaftigkeit', fa: 'صداقت و راستگویی', ms: 'Kejujuran & Kebenaran' },
    refs: ['9:119', '33:70', '61:2-3', '17:35', '83:1-3', '33:24']
  },
  {
    id: 'mercy',
    emoji: '🌧️',
    names: { en: 'Mercy', bn: 'রহমত', ar: 'الرحمة', ur: 'رحمت', id: 'Rahmat', tr: 'Rahmet', fr: 'Miséricorde', zh: '慈悯', ja: '慈悲', hi: 'रहमत', es: 'Misericordia', ru: 'Милосердие', de: 'Barmherzigkeit', fa: 'رحمت', ms: 'Rahmat' },
    refs: ['21:107', '7:156', '6:54', '12:64', '55:1-2']
  },
  {
    id: 'hope',
    emoji: '🌅',
    names: { en: 'Hope in Allah', bn: 'আল্লাহর প্রতি আশা', ar: 'الرجاء في الله', ur: 'اللہ سے امید', id: 'Harapan kepada Allah', tr: 'Allah\'tan Ümit', fr: 'Espoir en Allah', zh: '对真主的希望', ja: 'アッラーへの希望', hi: 'अल्लाह से उम्मीद', es: 'Esperanza en Allah', ru: 'Надежда на Аллаха', de: 'Hoffnung auf Allah', fa: 'امید به الله', ms: 'Harapan kepada Allah' },
    refs: ['39:53', '12:87', '15:56', '2:218', '94:5-6']
  },
  {
    id: 'taqwa',
    emoji: '🛡️',
    names: { en: 'Fear of Allah (Taqwa)', bn: 'তাকওয়া (আল্লাহভীতি)', ar: 'التقوى', ur: 'تقویٰ', id: 'Takwa', tr: 'Takva', fr: 'Crainte d\'Allah (Taqwa)', zh: '敬畏真主', ja: 'タクワー（神への畏れ）', hi: 'अल्लाह का डर (तक़वा)', es: 'Temor de Allah (taqwa)', ru: 'Богобоязненность (такуа)', de: 'Gottesfurcht (Taqwa)', fa: 'تقوا', ms: 'Takwa' },
    refs: ['2:197', '3:102', '49:13', '65:2-3', '8:29', '59:18']
  },
  {
    id: 'repentance',
    emoji: '🔄',
    names: { en: 'Repentance (Tawbah)', bn: 'তওবা', ar: 'التوبة', ur: 'توبہ', id: 'Taubat', tr: 'Tövbe', fr: 'Repentir (Tawbah)', zh: '忏悔', ja: '悔悟（タウバ）', hi: 'तौबा', es: 'Arrepentimiento (tawbah)', ru: 'Покаяние (тауба)', de: 'Reue (Tauba)', fa: 'توبه', ms: 'Taubat' },
    refs: ['39:53', '66:8', '4:110', '25:70-71', '24:31', '2:222']
  },
  {
    id: 'death',
    emoji: '🥀',
    names: { en: 'Death & the Grave', bn: 'মৃত্যু ও কবর', ar: 'الموت والقبر', ur: 'موت اور قبر', id: 'Kematian dan Alam Kubur', tr: 'Ölüm ve Kabir', fr: 'La Mort et la Tombe', zh: '死亡与坟墓', ja: '死と墓', hi: 'मौत और क़ब्र', es: 'La muerte y la tumba', ru: 'Смерть и могила', de: 'Tod & Grab', fa: 'مرگ و قبر', ms: 'Kematian & Alam Kubur' },
    refs: ['3:185', '21:35', '62:8', '4:78', '63:10-11', '102:1-2']
  },
  {
    id: 'judgment-day',
    emoji: '⏰',
    names: { en: 'The Day of Judgment', bn: 'কিয়ামতের দিন', ar: 'يوم القيامة', ur: 'قیامت کا دن', id: 'Hari Kiamat', tr: 'Kıyamet Günü', fr: 'Le Jour du Jugement', zh: '审判日', ja: '審判の日', hi: 'क़यामत का दिन', es: 'El Día del Juicio', ru: 'Судный день', de: 'Der Tag des Gerichts', fa: 'روز قیامت', ms: 'Hari Kiamat' },
    refs: ['22:1-2', '99:1-8', '82:1-5', '39:68-70', '69:13-18', '101:1-11']
  },
  {
    id: 'hellfire',
    emoji: '🔥',
    names: { en: 'Warnings of Hellfire', bn: 'জাহান্নামের সতর্কবাণী', ar: 'التحذير من النار', ur: 'جہنم کی تنبیہات', id: 'Peringatan Neraka', tr: 'Cehennem Uyarıları', fr: 'Avertissements de l\'Enfer', zh: '火狱的警告', ja: '地獄の警告', hi: 'जहन्नम की चेतावनियाँ', es: 'Advertencias sobre el Infierno', ru: 'Предостережения об Огне', de: 'Warnungen vor dem Höllenfeuer', fa: 'هشدارهای آتش دوزخ', ms: 'Peringatan tentang Neraka' },
    refs: ['66:6', '2:24', '4:56', '67:6-8', '78:21-26', '3:131']
  },
  {
    id: 'angels',
    emoji: '👼',
    names: { en: 'Angels', bn: 'ফেরেশতা', ar: 'الملائكة', ur: 'فرشتے', id: 'Malaikat', tr: 'Melekler', fr: 'Les Anges', zh: '天使', ja: '天使', hi: 'फ़रिश्ते', es: 'Los ángeles', ru: 'Ангелы', de: 'Engel', fa: 'فرشتگان', ms: 'Malaikat' },
    refs: ['2:285', '35:1', '82:10-12', '50:17-18', '13:11', '21:19-20']
  },
  {
    id: 'the-quran',
    emoji: '📖',
    names: { en: 'The Qur\'an', bn: 'কুরআন', ar: 'القرآن الكريم', ur: 'قرآن مجید', id: 'Al-Qur\'an', tr: 'Kur\'an', fr: 'Le Coran', zh: '古兰经', ja: 'クルアーン', hi: 'क़ुरआन', es: 'El Corán', ru: 'Коран', de: 'Der Koran', fa: 'قرآن', ms: 'Al-Quran' },
    refs: ['2:2', '15:9', '17:9', '17:82', '54:17', '59:21']
  },
  {
    id: 'prophets-stories',
    emoji: '🕋',
    names: { en: 'Stories of the Prophets', bn: 'নবীদের কাহিনি', ar: 'قصص الأنبياء', ur: 'انبیاء کے قصے', id: 'Kisah Para Nabi', tr: 'Peygamber Kıssaları', fr: 'Histoires des Prophètes', zh: '先知的故事', ja: '預言者たちの物語', hi: 'क़िसस-उल-अंबिया (नबियों के क़िस्से)', es: 'Historias de los profetas', ru: '«Истории пророков»', de: 'Geschichten der Propheten', fa: 'داستان‌های پیامبران', ms: 'Kisah Para Nabi' },
    refs: ['12:111', '11:120', '4:163-164', '6:84-86', '2:136', '40:78']
  },
  {
    id: 'family',
    emoji: '💍',
    names: { en: 'Family & Marriage', bn: 'পরিবার ও বিবাহ', ar: 'الأسرة والزواج', ur: 'خاندان اور نکاح', id: 'Keluarga dan Pernikahan', tr: 'Aile ve Evlilik', fr: 'Famille et Mariage', zh: '家庭与婚姻', ja: '家族と結婚', hi: 'घर-परिवार और निकाह', es: 'Familia y matrimonio', ru: 'Семья и брак', de: 'Familie & Ehe', fa: 'خانواده و ازدواج', ms: 'Keluarga & Perkahwinan' },
    refs: ['30:21', '4:1', '25:74', '2:187', '16:72', '7:189']
  },
  {
    id: 'children',
    emoji: '🧒',
    names: { en: 'Children', bn: 'সন্তান', ar: 'الأولاد', ur: 'اولاد', id: 'Anak-anak', tr: 'Çocuklar', fr: 'Les Enfants', zh: '子女', ja: '子ども', hi: 'औलाद', es: 'Los hijos', ru: 'Дети', de: 'Kinder', fa: 'فرزندان', ms: 'Anak-anak' },
    refs: ['18:46', '3:38', '17:31', '31:13', '37:100-102', '21:89-90']
  },
  {
    id: 'rizq',
    emoji: '💰',
    names: { en: 'Wealth & Provision (Rizq)', bn: 'সম্পদ ও রিজিক', ar: 'الرزق والمال', ur: 'مال اور رزق', id: 'Harta dan Rezeki', tr: 'Rızık ve Mal', fr: 'Richesse et Subsistance (Rizq)', zh: '财富与给养', ja: '富と糧（リズク）', hi: 'माल और रोज़ी (रिज़्क़)', es: 'Riqueza y sustento (rizq)', ru: 'Богатство и удел (ризк)', de: 'Besitz & Versorgung (Rizq)', fa: 'مال و روزی', ms: 'Harta & Rezeki' },
    refs: ['11:6', '51:22', '51:58', '62:10', '17:30', '34:39']
  },
  {
    id: 'healing',
    emoji: '🌿',
    names: { en: 'Health & Healing', bn: 'স্বাস্থ্য ও আরোগ্য', ar: 'الصحة والشفاء', ur: 'صحت اور شفا', id: 'Kesehatan dan Penyembuhan', tr: 'Sağlık ve Şifa', fr: 'Santé et Guérison', zh: '健康与治愈', ja: '健康と癒し', hi: 'सेहत और शिफ़ा', es: 'Salud y curación', ru: 'Здоровье и исцеление', de: 'Gesundheit & Heilung', fa: 'سلامت و شفا', ms: 'Kesihatan & Penyembuhan' },
    refs: ['26:80', '17:82', '10:57', '16:69', '21:83-84', '41:44']
  },
  {
    id: 'travel',
    emoji: '🧭',
    names: { en: 'Travel & the Earth', bn: 'ভ্রমণ ও পৃথিবী', ar: 'السير في الأرض', ur: 'سفر اور زمین', id: 'Perjalanan dan Bumi', tr: 'Yolculuk ve Yeryüzü', fr: 'Voyage et la Terre', zh: '旅行与大地', ja: '旅と大地', hi: 'सफ़र और ज़मीन', es: 'Los viajes y la tierra', ru: 'Путешествия и земля', de: 'Reisen & die Erde', fa: 'سفر و زمین', ms: 'Perjalanan & Bumi' },
    refs: ['29:20', '67:15', '22:46', '30:42', '6:11', '43:12-13']
  },
  {
    id: 'nature-signs',
    emoji: '🌦️',
    names: { en: 'Signs in Nature', bn: 'প্রকৃতিতে নিদর্শন', ar: 'آيات الله في الطبيعة', ur: 'فطرت میں نشانیاں', id: 'Tanda-tanda di Alam', tr: 'Tabiattaki Ayetler', fr: 'Signes dans la Nature', zh: '自然中的迹象', ja: '自然の中の印', hi: 'क़ुदरत में निशानियाँ', es: 'Signos en la naturaleza', ru: 'Знамения в природе', de: 'Zeichen in der Natur', fa: 'نشانه‌ها در طبیعت', ms: 'Tanda-tanda di Alam' },
    refs: ['88:17-20', '30:22', '16:10-11', '24:43', '6:99', '36:33-36']
  },
  {
    id: 'brotherhood',
    emoji: '🫂',
    names: { en: 'Community & Brotherhood', bn: 'উম্মাহ ও ভ্রাতৃত্ব', ar: 'الأخوة والجماعة', ur: 'برادری اور اخوت', id: 'Persaudaraan dan Umat', tr: 'Kardeşlik ve Toplum', fr: 'Communauté et Fraternité', zh: '社群与兄弟情谊', ja: '共同体と兄弟愛', hi: 'समाज और भाईचारा', es: 'Comunidad y hermandad', ru: 'Община и братство', de: 'Gemeinschaft & Brüderlichkeit', fa: 'جامعه و برادری', ms: 'Masyarakat & Persaudaraan' },
    refs: ['49:10', '3:103', '49:11-12', '5:2', '9:71', '8:46']
  },
  {
    id: 'enemies-hypocrites',
    emoji: '🎭',
    names: { en: 'Enemies & Hypocrites', bn: 'শত্রু ও মুনাফিক', ar: 'الأعداء والمنافقون', ur: 'دشمن اور منافقین', id: 'Musuh dan Orang Munafik', tr: 'Düşmanlar ve Münafıklar', fr: 'Ennemis et Hypocrites', zh: '敌人与伪信者', ja: '敵と偽信者', hi: 'दुश्मन और मुनाफ़िक़', es: 'Enemigos e hipócritas', ru: 'Враги и лицемеры', de: 'Feinde & Heuchler', fa: 'دشمنان و منافقان', ms: 'Musuh & Orang Munafik' },
    refs: ['41:34', '3:186', '2:8-10', '63:1-4', '60:7-8', '28:55']
  },
  {
    id: 'trials',
    emoji: '⛰️',
    names: { en: 'Trials & Tests', bn: 'পরীক্ষা ও বিপদ', ar: 'الابتلاء والامتحان', ur: 'آزمائش', id: 'Ujian dan Cobaan', tr: 'İmtihan ve Sınanma', fr: 'Épreuves et Tests', zh: '考验与磨难', ja: '試練', hi: 'आज़माइशें और इम्तिहान', es: 'Pruebas y tribulaciones', ru: 'Испытания', de: 'Prüfungen & Heimsuchungen', fa: 'آزمایش‌ها و امتحان‌ها', ms: 'Ujian & Cubaan' },
    refs: ['29:2-3', '2:286', '67:2', '57:22-23', '64:11', '3:142']
  },
  {
    id: 'dua-dhikr',
    emoji: '📿',
    names: { en: 'Du\'a & Remembrance', bn: 'দোয়া ও যিকির', ar: 'الدعاء والذكر', ur: 'دعا اور ذکر', id: 'Doa dan Zikir', tr: 'Dua ve Zikir', fr: 'Invocation et Rappel (Dhikr)', zh: '祈祷与记念', ja: 'ドゥアーとズィクル', hi: 'दुआ और ज़िक्र', es: 'Du\'a y recuerdo de Allah', ru: 'Мольба (дуа) и поминание Аллаха', de: 'Bittgebet (Du\'a) & Gedenken Allahs', fa: 'دعا و ذکر', ms: 'Doa & Zikir' },
    refs: ['2:186', '40:60', '13:28', '33:41-42', '7:180', '76:25']
  },
  // v166 additions — 12 topical verse collections (2026-07-28)
  {
    "id": "fasting",
    "emoji": "🌙",
    "names": {
      "en": "Fasting & Ramadan",
      "bn": "রোজা ও রমজান",
      "ar": "الصيام ورمضان",
      "ur": "روزہ اور رمضان",
      "id": "Puasa & Ramadan",
      "tr": "Oruç ve Ramazan",
      "fr": "Le jeûne et le Ramadan",
      "zh": "斋戒与斋月",
      "ja": "断食とラマダーン", hi: 'रोज़ा और रमज़ान', es: 'El ayuno y el Ramadán', ru: 'Пост и Рамадан', de: 'Fasten & Ramadan', fa: 'روزه و رمضان', ms: 'Puasa & Ramadan'
    },
    "refs": [
      "2:183",
      "2:184-185",
      "2:187",
      "19:26",
      "33:35",
      "97:1-5"
    ]
  },
  {
    "id": "hajj",
    "emoji": "🐪",
    "names": {
      "en": "Hajj & the Sacred House",
      "bn": "হজ ও কাবা ঘর",
      "ar": "الحج والبيت الحرام",
      "ur": "حج اور بیت اللہ",
      "id": "Haji & Baitullah",
      "tr": "Hac ve Kâbe",
      "fr": "Le Hajj et la Maison sacrée",
      "zh": "朝觐与禁寺",
      "ja": "巡礼と聖なる家", hi: 'हज और बैतुल्लाह', es: 'El hayy y la Casa Sagrada', ru: 'Хадж и Заповедный дом', de: 'Hadsch & das heilige Haus', fa: 'حج و خانه‌ی حرام', ms: 'Haji & Baitullah'
    },
    "refs": [
      "2:125",
      "2:158",
      "2:196",
      "2:197",
      "3:96-97",
      "5:97",
      "22:26-29"
    ]
  },
  {
    "id": "speech-ethics",
    "emoji": "🗣️",
    "names": {
      "en": "Guarding the Tongue",
      "bn": "জিহ্বার সংযম",
      "ar": "حفظ اللسان",
      "ur": "زبان کی حفاظت",
      "id": "Menjaga Lisan",
      "tr": "Dili Korumak",
      "fr": "Maîtriser sa langue",
      "zh": "谨言慎语",
      "ja": "口を慎む", hi: 'ज़बान की हिफ़ाज़त', es: 'Guardar la lengua', ru: 'Сдерживание языка', de: 'Die Zunge hüten', fa: 'نگه‌داشتن زبان', ms: 'Menjaga Lidah'
    },
    "refs": [
      "2:263",
      "4:114",
      "4:148",
      "17:53",
      "24:15-16",
      "25:72",
      "50:18",
      "68:10-12"
    ]
  },
  {
    "id": "orphans",
    "emoji": "🧡",
    "names": {
      "en": "Orphans & the Needy",
      "bn": "এতিম ও অসহায়",
      "ar": "اليتامى والمساكين",
      "ur": "یتیم اور مسکین",
      "id": "Anak Yatim & Fakir Miskin",
      "tr": "Yetimler ve Yoksullar",
      "fr": "Les orphelins et les nécessiteux",
      "zh": "孤儿与贫民",
      "ja": "孤児と貧者", hi: 'यतीम और ज़रूरतमंद', es: 'Los huérfanos y los necesitados', ru: 'Сироты и нуждающиеся', de: 'Waisen & Bedürftige', fa: 'یتیمان و نیازمندان', ms: 'Anak Yatim & Fakir Miskin'
    },
    "refs": [
      "2:220",
      "4:2",
      "4:8",
      "4:10",
      "6:152",
      "89:17-20",
      "90:13-16",
      "93:9-10"
    ]
  },
  {
    "id": "envy",
    "emoji": "🧿",
    "names": {
      "en": "Envy & the Evil Eye",
      "bn": "হিংসা ও বদনজর",
      "ar": "الحسد والعين",
      "ur": "حسد اور نظرِ بد",
      "id": "Dengki & Penyakit 'Ain",
      "tr": "Haset ve Nazar",
      "fr": "L'envie et le mauvais œil",
      "zh": "嫉妒与恶眼",
      "ja": "妬みと邪視", hi: 'हसद और बुरी नज़र', es: 'La envidia y el mal de ojo', ru: 'Зависть и дурной глаз', de: 'Neid & der böse Blick', fa: 'حسد و چشم‌زخم', ms: 'Hasad & Penyakit \'Ain'
    },
    "refs": [
      "2:109",
      "4:32",
      "4:54",
      "12:5",
      "20:131",
      "28:79-81",
      "68:51",
      "113:5"
    ]
  },
  {
    "id": "seeking-refuge",
    "emoji": "🙏",
    "names": {
      "en": "Seeking Refuge in Allah",
      "bn": "আল্লাহর আশ্রয় প্রার্থনা",
      "ar": "الاستعاذة بالله",
      "ur": "اللہ کی پناہ طلب کرنا",
      "id": "Berlindung kepada Allah",
      "tr": "Allah'a Sığınmak",
      "fr": "Chercher refuge auprès d'Allah",
      "zh": "求主庇佑",
      "ja": "アッラーに加護を求める", hi: 'अल्लाह की पनाह माँगना', es: 'Buscar refugio en Allah', ru: 'Прибегание к защите Аллаха', de: 'Zuflucht bei Allah suchen', fa: 'پناه بردن به الله', ms: 'Berlindung kepada Allah'
    },
    "refs": [
      "3:36",
      "7:200-201",
      "16:98",
      "19:18",
      "23:97-98",
      "40:56",
      "113:1-5",
      "114:1-6"
    ]
  },
  {
    "id": "night-prayer",
    "emoji": "🌃",
    "names": {
      "en": "Night Prayer (Tahajjud)",
      "bn": "তাহাজ্জুদ ও রাতের নামাজ",
      "ar": "قيام الليل",
      "ur": "تہجد اور قیامِ لیل",
      "id": "Salat Malam (Tahajud)",
      "tr": "Gece Namazı (Teheccüd)",
      "fr": "La prière de nuit (Tahajjud)",
      "zh": "夜间拜功",
      "ja": "夜の礼拝（タハッジュド）", hi: 'रात की नमाज़ (तहज्जुद)', es: 'La oración de la noche (tahajjud)', ru: 'Ночной намаз (тахаджжуд)', de: 'Nachtgebet (Tahadschdschud)', fa: 'نماز شب (تهجد)', ms: 'Solat Malam (Tahajud)'
    },
    "refs": [
      "3:17",
      "17:79",
      "25:64",
      "32:16-17",
      "50:39-40",
      "51:17-18",
      "73:1-6",
      "76:26"
    ]
  },
  {
    "id": "hijrah",
    "emoji": "🧳",
    "names": {
      "en": "Migration (Hijrah)",
      "bn": "হিজরত",
      "ar": "الهجرة في سبيل الله",
      "ur": "ہجرت",
      "id": "Hijrah",
      "tr": "Hicret",
      "fr": "L'émigration (Hijra)",
      "zh": "迁徙（希吉拉）",
      "ja": "移住（ヒジュラ）", hi: 'हिजरत', es: 'La emigración (hégira)', ru: 'Переселение (хиджра)', de: 'Auswanderung (Hidschra)', fa: 'هجرت', ms: 'Hijrah'
    },
    "refs": [
      "4:100",
      "8:72",
      "9:20",
      "9:40",
      "16:41",
      "22:58-59",
      "29:56",
      "59:8-9"
    ]
  },
  {
    "id": "human-creation",
    "emoji": "🧬",
    "names": {
      "en": "Creation of the Human Being",
      "bn": "মানুষের সৃষ্টি",
      "ar": "خلق الإنسان",
      "ur": "انسان کی تخلیق",
      "id": "Penciptaan Manusia",
      "tr": "İnsanın Yaratılışı",
      "fr": "La création de l'être humain",
      "zh": "人类的创造",
      "ja": "人間の創造", hi: 'इंसान की तख़लीक़', es: 'La creación del ser humano', ru: 'Сотворение человека', de: 'Die Erschaffung des Menschen', fa: 'آفرینش انسان', ms: 'Penciptaan Manusia'
    },
    "refs": [
      "15:28-29",
      "22:5",
      "23:12-14",
      "32:7-9",
      "40:67",
      "75:36-40",
      "86:5-7",
      "95:4-5"
    ]
  },
  {
    "id": "dunya",
    "emoji": "🕰️",
    "names": {
      "en": "Time & the Fleeting World",
      "bn": "সময় ও ক্ষণস্থায়ী দুনিয়া",
      "ar": "الزمن ومتاع الدنيا الزائل",
      "ur": "وقت اور فانی دنیا",
      "id": "Waktu & Dunia yang Fana",
      "tr": "Zaman ve Geçici Dünya",
      "fr": "Le temps et le monde éphémère",
      "zh": "光阴与短暂的今世",
      "ja": "時とはかない現世", hi: 'वक़्त और फ़ानी दुनिया', es: 'El tiempo y el mundo fugaz', ru: 'Время и преходящий мир', de: 'Die Zeit & die vergängliche Welt', fa: 'زمان و دنیای گذرا', ms: 'Masa & Dunia yang Fana'
    },
    "refs": [
      "6:32",
      "10:24",
      "18:45",
      "23:112-114",
      "57:20",
      "79:46",
      "87:16-17",
      "103:1-3"
    ]
  },
  {
    "id": "covenants",
    "emoji": "📜",
    "names": {
      "en": "Oaths & Covenants",
      "bn": "শপথ ও অঙ্গীকার",
      "ar": "العهود والأيمان",
      "ur": "عہد اور قسمیں",
      "id": "Janji & Sumpah",
      "tr": "Ahitler ve Yeminler",
      "fr": "Serments et engagements",
      "zh": "誓约与盟约",
      "ja": "誓いと契約", hi: 'क़समें और अहद', es: 'Juramentos y pactos', ru: 'Клятвы и заветы', de: 'Eide & Bündnisse', fa: 'سوگندها و پیمان‌ها', ms: 'Sumpah & Perjanjian'
    },
    "refs": [
      "2:40",
      "5:1",
      "5:89",
      "13:20",
      "16:91-92",
      "17:34",
      "23:8",
      "33:23"
    ]
  },
  {
    "id": "moderation",
    "emoji": "📏",
    "names": {
      "en": "Moderation & Balance",
      "bn": "মধ্যপন্থা ও ভারসাম্য",
      "ar": "الاعتدال والميزان",
      "ur": "اعتدال اور توازن",
      "id": "Sikap Sederhana & Seimbang",
      "tr": "Ölçü ve Denge",
      "fr": "Modération et équilibre",
      "zh": "中道与平衡",
      "ja": "中庸と均衡", hi: 'एतिदाल और संतुलन', es: 'Moderación y equilibrio', ru: 'Умеренность и равновесие', de: 'Maß & Ausgewogenheit', fa: 'میانه‌روی و تعادل', ms: 'Kesederhanaan & Keseimbangan'
    },
    "refs": [
      "2:143",
      "5:87",
      "7:31",
      "17:26-27",
      "17:29",
      "20:81",
      "25:67",
      "55:7-9"
    ]
  }
];

/**
 * Curated thematic collections surfaced at the top of the Topics browser.
 * Each verse reference below was verified to exist in data/quran-tokens.json,
 * and — for the "Names of…" sets — the named place was confirmed to appear in
 * the verse's Arabic text (data/quran-json). Same schema as TOPIC_GROUPS.
 */
const TOPIC_COLLECTIONS = [
  {
    id: 'tawakkul',
    emoji: '🌿',
    names: {
      en: 'Reliance on Allah',
      bn: 'আল্লাহর ওপর ভরসা',
      ar: 'التوكل على الله',
      ur: 'اللہ پر بھروسہ',
      id: 'Tawakal kepada Allah',
      tr: "Allah'a tevekkül",
      fr: 'Confiance en Allah'
    , zh: '托靠真主', ja: 'アッラーへの信頼', hi: 'अल्लाह पर भरोसा', es: 'Confianza en Allah', ru: 'Упование на Аллаха', de: 'Vertrauen auf Allah', fa: 'توکل بر الله', ms: 'Tawakal kepada Allah'},
    refs: ['3:159', '8:2', '25:58', '65:3', '14:11-12']
  },
  {
    id: 'repentance',
    emoji: '🔄',
    names: {
      en: 'Repentance',
      bn: 'তাওবা',
      ar: 'التوبة',
      ur: 'توبہ',
      id: 'Tobat',
      tr: 'Tevbe',
      fr: 'Repentir'
    , zh: '忏悔', ja: '悔悟', hi: 'तौबा', es: 'Arrepentimiento', ru: 'Покаяние', de: 'Reue', fa: 'توبه', ms: 'Taubat'},
    refs: ['2:222', '4:17', '9:104', '24:31', '66:8']
  },
  {
    id: 'dhikr',
    emoji: '📿',
    names: {
      en: 'Remembrance of Allah',
      bn: 'আল্লাহর জিকির',
      ar: 'ذكر الله',
      ur: 'اللہ کا ذکر',
      id: 'Zikir kepada Allah',
      tr: "Allah'ı anmak",
      fr: "Rappel d'Allah"
    , zh: '记念真主', ja: 'アッラーの唱念', hi: 'अल्लाह का ज़िक्र', es: 'El recuerdo de Allah', ru: 'Поминание Аллаха', de: 'Gedenken Allahs', fa: 'یاد الله', ms: 'Mengingati Allah'},
    refs: ['2:152', '13:28', '33:41-42', '62:10', '8:45']
  },
  {
    id: 'hereafter',
    emoji: '⏳',
    names: {
      en: 'The Hereafter',
      bn: 'আখিরাত',
      ar: 'الآخرة',
      ur: 'آخرت',
      id: 'Akhirat',
      tr: 'Ahiret',
      fr: "L'au-delà"
    , zh: '后世', ja: '来世', hi: 'आख़िरत', es: 'La otra vida', ru: 'Последняя жизнь', de: 'Das Jenseits', fa: 'آخرت', ms: 'Akhirat'},
    refs: ['3:185', '21:35', '50:19', '56:83-87', '62:8']
  },
  {
    id: 'jannah_names',
    emoji: '🌷',
    names: {
      en: 'Names of Paradise',
      bn: 'জান্নাতের নামসমূহ',
      ar: 'أسماء الجنة',
      ur: 'جنت کے نام',
      id: 'Nama-nama Surga',
      tr: 'Cennetin isimleri',
      fr: 'Les noms du Paradis'
    , zh: '天堂的名称', ja: '楽園の名', hi: 'जन्नत के नाम', es: 'Nombres del Paraíso', ru: 'Имена Рая', de: 'Namen des Paradieses', fa: 'نام‌های بهشت', ms: 'Nama-nama Syurga'},
    refs: ['18:107', '9:72', '32:19', '6:127', '56:89']
  },
  {
    id: 'jahannam_names',
    emoji: '🔥',
    names: {
      en: 'Names of the Fire',
      bn: 'জাহান্নামের নামসমূহ',
      ar: 'أسماء النار',
      ur: 'جہنم کے نام',
      id: 'Nama-nama Neraka',
      tr: 'Cehennemin isimleri',
      fr: "Les noms de l'Enfer"
    , zh: '火狱的名称', ja: '火獄の名', hi: 'जहन्नम के नाम', es: 'Nombres del Fuego', ru: 'Имена Огня', de: 'Namen des Feuers', fa: 'نام‌های دوزخ', ms: 'Nama-nama Neraka'},
    refs: ['74:26-27', '70:15', '104:4-5', '101:9', '79:39']
  },
  {
    id: 'sabr',
    emoji: '🌱',
    names: {
      en: 'Patience through trial',
      bn: 'পরীক্ষায় ধৈর্য',
      ar: 'الصبر عند البلاء',
      ur: 'آزمائش میں صبر',
      id: 'Sabar dalam ujian',
      tr: 'İmtihanda sabır',
      fr: 'La patience dans l’épreuve'
    , zh: '患难中的坚忍', ja: '試練における忍耐', hi: 'आज़माइश में सब्र', es: 'Paciencia en la prueba', ru: 'Терпение в испытаниях', de: 'Geduld in der Prüfung', fa: 'صبر در آزمایش', ms: 'Sabar menghadapi ujian'},
    refs: ['2:155-157', '3:200', '39:10', '103:1-3', '94:5-6']
  },
  {
    id: 'shukr',
    emoji: '🙏',
    names: {
      en: 'Gratitude to Allah',
      bn: 'আল্লাহর প্রতি কৃতজ্ঞতা',
      ar: 'شكر الله',
      ur: 'اللہ کا شکر',
      id: 'Syukur kepada Allah',
      tr: 'Allah’a şükür',
      fr: 'La gratitude envers Allah'
    , zh: '感恩真主', ja: 'アッラーへの感謝', hi: 'अल्लाह का शुक्र', es: 'Gratitud a Allah', ru: 'Благодарность Аллаху', de: 'Dankbarkeit gegenüber Allah', fa: 'شکر الله', ms: 'Syukur kepada Allah'},
    refs: ['2:152', '14:7', '16:78', '31:12', '55:13']
  },
  {
    id: 'taqwa',
    emoji: '🛡️',
    names: {
      en: 'God-consciousness (taqwa)',
      bn: 'তাকওয়া — আল্লাহভীতি',
      ar: 'التقوى',
      ur: 'تقویٰ',
      id: 'Takwa',
      tr: 'Takva',
      fr: 'La piété (taqwâ)'
    , zh: '敬畏（台格瓦）', ja: '敬虔さ（タクワー）', hi: 'अल्लाह का डर (तक़वा)', es: 'Temor de Allah (taqwa)', ru: 'Богобоязненность (такуа)', de: 'Gottesfurcht (Taqwa)', fa: 'تقوا', ms: 'Takwa'},
    refs: ['2:197', '3:102', '49:13', '65:2-3', '91:9-10']
  },
  {
    id: 'adl',
    emoji: '⚖️',
    names: {
      en: 'Justice and fair dealing',
      bn: 'ন্যায়বিচার ও সৎ লেনদেন',
      ar: 'العدل والقسط',
      ur: 'عدل و انصاف',
      id: 'Keadilan dan kejujuran',
      tr: 'Adalet ve dürüstlük',
      fr: 'La justice et l’équité'
    , zh: '公正与公平', ja: '正義と公正', hi: 'इंसाफ़ और खरा मामला', es: 'Justicia y trato equitativo', ru: 'Справедливость и честность в делах', de: 'Gerechtigkeit und redlicher Umgang', fa: 'عدالت و انصاف', ms: 'Keadilan dan muamalah yang adil'},
    refs: ['4:58', '4:135', '5:8', '16:90', '55:9']
  },
  {
    id: 'ilm',
    emoji: '📚',
    names: {
      en: 'Knowledge and reflection',
      bn: 'জ্ঞান ও চিন্তা',
      ar: 'العلم والتفكر',
      ur: 'علم اور غور و فکر',
      id: 'Ilmu dan perenungan',
      tr: 'İlim ve tefekkür',
      fr: 'Le savoir et la réflexion'
    , zh: '知识与省思', ja: '知識と省察', hi: 'इल्म और ग़ौर-फ़िक्र', es: 'Conocimiento y reflexión', ru: 'Знание и размышление', de: 'Wissen und Nachdenken', fa: 'دانش و تفکر', ms: 'Ilmu dan renungan'},
    refs: ['20:114', '35:28', '39:9', '58:11', '96:1-5']
  },
  {
    id: 'rizq',
    emoji: '🌾',
    names: {
      en: 'Provision and sustenance',
      bn: 'রিজিক ও জীবিকা',
      ar: 'الرزق',
      ur: 'رزق',
      id: 'Rezeki',
      tr: 'Rızık',
      fr: 'La subsistance'
    , zh: '给养与生计', ja: '糧と扶養', hi: 'रोज़ी और रिज़्क़', es: 'Provisión y sustento', ru: 'Удел и пропитание', de: 'Versorgung und Lebensunterhalt', fa: 'روزی و معاش', ms: 'Rezeki dan sara hidup'},
    refs: ['11:6', '29:60', '51:22', '65:2-3', '67:15']
  },
  {
    id: 'birr_walidayn',
    emoji: '🤲',
    names: {
      en: 'Kindness to parents',
      bn: 'পিতামাতার প্রতি সদ্ব্যবহার',
      ar: 'بر الوالدين',
      ur: 'والدین کے ساتھ حسن سلوک',
      id: 'Berbakti kepada orang tua',
      tr: 'Ana babaya iyilik',
      fr: 'La bonté envers les parents'
    , zh: '孝敬父母', ja: '両親への孝行', hi: 'माँ-बाप के साथ अच्छा सुलूक', es: 'Bondad con los padres', ru: 'Доброта к родителям', de: 'Güte gegenüber den Eltern', fa: 'نیکی به پدر و مادر', ms: 'Berbuat baik kepada ibu bapa'},
    refs: ['17:23-24', '29:8', '31:14', '46:15', '4:36']
  },
  {
    id: 'quran_about_itself',
    emoji: '📖',
    names: {
      en: 'What the Quran says of itself',
      bn: 'কুরআন নিজের সম্পর্কে যা বলে',
      ar: 'ما يقوله القرآن عن نفسه',
      ur: 'قرآن اپنے بارے میں کیا کہتا ہے',
      id: 'Apa kata Al-Qur’an tentang dirinya',
      tr: 'Kur’an kendini nasıl tanıtır',
      fr: 'Ce que le Coran dit de lui-même'
    , zh: '《古兰经》如何自述', ja: 'クルアーンが自らを語る', hi: 'क़ुरआन अपने बारे में क्या कहता है', es: 'Lo que el Corán dice de sí mismo', ru: 'Что Коран говорит о себе', de: 'Was der Koran über sich selbst sagt', fa: 'قرآن درباره‌ی خودش چه می‌گوید', ms: 'Apa kata al-Quran tentang dirinya'},
    refs: ['2:2', '15:9', '17:9', '54:17', '59:21']
  },
];

/**
 * Famous du'as attributed to the prophets mentioned in the Quran.
 * Each entry cites the exact Quranic locus of the supplication.
 */

/**
 * Quranic du'as focused on protection — from enemies, oppressors,
 * hellfire, hypocrisy, evil suggestions, and the unseen harm.
 */

/**
 * Quranic du'as and verses of shukr (gratitude) and ḥamd (praise),
 * including prophets' thanksgivings and the believers' expressions of praise.
 */







// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RABBANA_DUAS, TOPIC_GROUPS, TOPIC_COLLECTIONS };
}
