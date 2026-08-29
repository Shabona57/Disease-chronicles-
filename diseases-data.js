/* =====================================================================
   DISEASE CHRONICLES — MA'LUMOTLAR FAYLI / DATA FILE
   =====================================================================
   Yangi kasallik qo'shish uchun: pastdagi DISEASES massiviga
   yangi { ... } obyekt qo'shing (oxirgi obyektdan keyin vergul qo'yib).
   HTML yoki boshqa faylga tegishning HOJATI YO'Q — sahifa avtomatik
   yangilanadi.

   ── ODDIY KARTOCHKA (hali "case file" yozilmagan bo'lsa) ──
   Faqat quyidagi maydonlarni to'ldiring, "detail" ni qoldirmang (o'chiring
   yoki "detail: null" qiling). Kartochka "Tez orada / Coming soon" bilan
   ko'rinadi va bosilganda ochilmaydi.

   ── TO'LIQ ISH FAYLI (case file) ──
   "detail" obyektini ham to'ldirsangiz, kartochka bosiladigan bo'ladi va
   to'liq sahifa avtomatik yasaladi (vitals, bo'limlar, timeline, va h.k.)

   category qiymatlari (aynan shu so'zlardan birini yozing):
   neuro | onco | genetic | infectious | cardio | autoimmune | endocrine
   ===================================================================== */

const DISEASES = [

  // ------------------------------------------------------------------
  // 001 — EPILEPSIYA (to'liq case file bilan)
  // ------------------------------------------------------------------
  {
    id: "epilepsy",
    caseNo: "001",
    category: "neuro",
    categoryLabel: "Neurological",
    stampStyle: "gold",
    stamp:  { uz: "O'rganilmoqda", en: "Under Study" },
    title:  { uz: "Epilepsiya", en: "Epilepsy" },
    hook:   { uz: "Bir vaqtlar xudolarning la'nati deb hisoblangan, hozir miyadagi elektr bo'ronlari bilan izohlanadi.",
              en: "Once dismissed as a curse from the gods, now traced to electrical storms in the brain." },
    year:   { uz: "Mil.av. 400", en: "400 BCE" },

    detail: {
      quote: {
        uz: "Gippokrat mil.av. 400-yillarda: tutqanoq boshqa kasalliklardan hech qanday ilohiyroq emas, uning ham o'z tabiiy sababi bor, deb yozgan edi.",
        en: "Around 400 BCE, Hippocrates argued that seizures were no more divine than any other illness — they had a natural cause, just like everything else in the body."
      },
      vitals: [
        { label: { uz: "Birinchi qayd etilgan", en: "First recorded" }, value: { uz: "~mil.av. 400, Qadimgi Yunoniston", en: "~400 BCE, Ancient Greece" } },
        { label: { uz: "Tarixiy nomi", en: "Historical name" }, value: { uz: "Muqaddas kasallik", en: "The Sacred Disease" } },
        { label: { uz: "Hozir kasal odamlar soni", en: "People affected today" }, value: { uz: "~50 million, butun dunyo bo'yicha", en: "~50 million worldwide" } },
        { label: { uz: "Holati", en: "Status" }, value: { uz: "Davolanadi, hali o'rganilmoqda", en: "Treatable, still studied" } }
      ],
      sections: [
        {
          type: "text",
          no: "01",
          heading: { uz: "Kelib chiqish sabablari", en: "Origins & Causes" },
          paragraphs: [
            { uz: "Miyangizni doimiy ishlab turgan elektr tarmog'i deb tasavvur qiling: milliardlab neyronlar bir-biriga signal jo'natadi, lekin bu signallar odatda tartibli va nazorat ostida bo'ladi. Epilepsiyada esa ba'zida bu tartib buziladi — bir guruh neyron to'satdan, bir vaqtning o'zida, nazoratsiz ravishda \"qichqirib yuboradi\". Ana shu to'satdan yuzaga kelgan elektr bo'roni tutqanoq (xuruj) deb ataladi. Shuning uchun epilepsiya aslida bitta aniq kasallik emas, balki miyaning shunday xurujlarga moyilligidir, va bu moyillik turlicha sabablardan kelib chiqishi mumkin.",
              en: "Picture your brain as a constantly running electrical network: billions of neurons pass signals to one another, but normally that traffic stays orderly and controlled. In epilepsy, that order sometimes breaks down — a cluster of neurons suddenly fires together, out of sync with everything around it. That sudden electrical storm is what we call a seizure. Epilepsy, then, isn't really one single disease — it's a brain's tendency toward these storms, and that tendency can come from many different places." },
            { uz: "Ba'zilarida sabab aniq: bosh miyaga tushgan qattiq zarba, insult oqibatida shikastlangan to'qima, meningit yoki ensefalit kabi infeksiyalar, miya o'smasi, yoki tug'ilishdan oldin miyaga yetkazilgan kislorod yetishmovchiligi. Boshqalarida esa sabab genetik — ota-onadan o'tgan, neyronlarning elektr signalni qanday \"ochib-yopishini\" boshqaruvchi oqsillarga ta'sir qiluvchi mutatsiyalar. Ammo qiziq tomoni shundaki, har ikkinchi bemorda shifokorlar hech qanday aniq sababni topa olmaydi — bu holat \"idiopatik epilepsiya\" deb ataladi va shuni ko'rsatadiki, ba'zi miyalar tabiatan boshqalarga qaraganda xurujga moyilroq \"sozlangan\" bo'ladi.",
              en: "For some people, the cause is clear: a severe head injury, tissue damaged by a stroke, an infection like meningitis or encephalitis, a brain tumor, or oxygen deprivation before birth. For others, the cause is genetic — inherited mutations that affect the proteins controlling how neurons open and close their electrical channels. Interestingly, in roughly half of all cases, doctors never find a clear cause at all. This is called \"idiopathic epilepsy,\" and it simply reflects that some brains are naturally wired to be more storm-prone than others." }
          ]
        },
        {
          type: "timeline",
          no: "02",
          heading: { uz: "Tushuncha qanday o'zgargan", en: "How Understanding Changed" },
          items: [
            { era: { uz: "mil.av. 400-yillar — Qadimgi Yunoniston", en: "c. 400 BCE — Ancient Greece" },
              title: { uz: "Ilohiy jazoga qarshi birinchi dalil", en: "The first argument against divine punishment" },
              text: { uz: "O'sha davrda odamlar tutqanoqni xudolarning g'azabi yoki jin chalishi natijasi deb bilishgan va kasal odamdan qo'rqib, undan yiroq yurishgan. Ana shunday muhitda yunon shifokori Gippokrat butun bir risola yozib, bu kasallikning ilohiy emas, balki toza tibbiy tabiati borligini isbotlashga urindi. U tutqanoqning miyadan kelib chiqishini, boshqa har qanday kasallik kabi sabab va oqibatga ega ekanini yozgan edi. Bu — hali hech kim \"miya\" degan organning fikrlash va harakatni boshqarishini tushunmagan bir davr uchun juda jasoratli, deyarli inqilobiy fikr edi.",
                    en: "At the time, people believed seizures were caused by the wrath of the gods or by possession, and they kept a fearful distance from anyone who had one. Into that world, the Greek physician Hippocrates wrote an entire treatise arguing that the disease had a purely medical, not divine, nature. He wrote that seizures came from the brain, with a cause and effect like any other illness. This was a bold, almost revolutionary claim in an era when no one yet understood that the brain governed thought and movement at all." } },
            { era: { uz: "O'rta asrlar — Yevropa", en: "Middle Ages — Europe" },
              title: { uz: "La'nat qaytib keladi", en: "The curse returns" },
              text: { uz: "Afsuski, Gippokratning ilmiy dalillari asrlar osha unutilib ketdi. O'rta asrlarda diniy tushunchalar yana ustunlik qildi, va tutqanoq yana bir bor \"jin chalgani\" yoki \"gunohning jazosi\" sifatida talqin qilina boshlandi. Bu davrda epilepsiyaga chalingan odamlar jamiyatdan chetlashtirilgan, ba'zan ekzorsizm (jin haydash marosimlari)ga duchor qilingan yoki oilasidan yashirincha saqlangan. Bu qarash shunchalik chuqur ildiz otganki, uning ta'siri hozirgi kunda ham ba'zi jamiyatlarda saqlanib qolgan.",
                    en: "Unfortunately, Hippocrates' reasoning was largely forgotten over the centuries. In the Middle Ages, religious explanations regained the upper hand, and seizures were once again read as possession or divine punishment. People with epilepsy were shunned by their communities, sometimes subjected to exorcism, or hidden away by their own families. That view took such deep root that its echoes still linger in some communities today." } },
            { era: { uz: "1873 — London", en: "1873 — London" },
              title: { uz: "Jekson elektr bo'ronini nomlaydi", en: "Jackson names the electrical storm" },
              text: { uz: "Zamonaviy nevrologiyaning otalaridan biri hisoblangan ingliz shifokori Jon Xyuglings Jekson tutqanoqlarni kuzatib, muhim bir kashfiyot qildi: u xurujlar miyaning ma'lum bir nuqtasidan boshlanib, keyin butun miyaga \"to'lqin\" kabi tarqalishini payqadi. U buni \"miyadagi to'satdan, ortiqcha va tartibsiz elektr razryadi\" deb ta'rifladi — bu ta'rif bugungi kunda ham tibbiyot darsliklarida deyarli o'zgarishsiz qo'llaniladi.",
                    en: "English physician John Hughlings Jackson, one of the founders of modern neurology, made a crucial observation while studying his patients' seizures: they began at one specific point in the brain and then spread outward like a wave. He described this as \"a sudden, excessive, and disorderly discharge of nerve tissue\" — a definition still used in medical textbooks almost unchanged today." } },
            { era: { uz: "1929 — Germaniya", en: "1929 — Germany" },
              title: { uz: "EEG ko'rinmasni ko'rinadigan qiladi", en: "The EEG makes the invisible visible" },
              text: { uz: "Nemis psixiatri Xans Berger inson bosh terisiga elektrodlar o'rnatib, miyaning elektr faoliyatini birinchi marta qog'ozga tushirishga muvaffaq bo'ldi — bu asbob elektroensefalograf (EEG) deb nomlandi. EEG hozirgi kunda ham epilepsiyani tashxislashning asosiy usuli bo'lib qolmoqda — u qaysi xuruj qayerdan boshlanayotganini aniq ko'rsatib beradi.",
                    en: "German psychiatrist Hans Berger attached electrodes to the human scalp and became the first to record the brain's electrical activity on paper — the device became known as the electroencephalograph, or EEG. The EEG remains the primary tool for diagnosing epilepsy today, pinpointing exactly where in the brain a seizure begins." } },
            { era: { uz: "1990-yillar — Bugungi kun", en: "1990s — Today" },
              title: { uz: "Tasvirlash, dorilar va jarrohlik", en: "Imaging, medication, and surgery" },
              text: { uz: "So'nggi o'ttiz yil ichida epilepsiyani davolash sohasida sezilarli o'zgarish bo'ldi. MRI endi xurujni keltirib chiqarayotgan aniq miya to'qimasini millimetrgacha aniqlikda ko'rsata oladi. Zamonaviy dori-darmonlar bemorlarning taxminan 70 foizida xurujlarni deyarli to'liq nazorat ostiga oladi. Dorilarga chidamli holatlarda esa neyroxirurglar xuruj boshlanadigan aniq nuqtani topib, o'sha to'qimani olib tashlashi yoki ajratishi mumkin.",
                    en: "The last thirty years have brought major progress in treating epilepsy. MRI scans can now pinpoint, to the millimeter, the exact brain tissue triggering seizures. Modern medications control seizures almost completely in roughly 70 percent of patients. For drug-resistant cases, neurosurgeons can locate the precise starting point of a seizure and carefully remove or disconnect that tissue from the rest of the brain." } }
          ]
        },
        {
          type: "living",
          no: "03",
          heading: { uz: "Bugun bu kasallik bilan yashash", en: "Living With It Today" },
          title: { uz: "Davolash va stigma o'rtasidagi tafovut", en: "The gap between treatment and stigma" },
          text: { uz: "Tibbiy nuqtai nazardan epilepsiya nevrologiyaning eng ulkan muvaffaqiyat hikoyalaridan biri hisoblanadi: to'g'ri tashxis va davolash bilan bemorlarning katta qismi maktabga borishi, ishlashi, sport bilan shug'ullanishi va oila qurishi mumkin. Ammo ijtimoiy jihatdan masala hali ham murakkab: ko'p mamlakatlarda, jumladan Markaziy Osiyoda ham, epilepsiyani \"yuqumli\" deb bilish yoki uni \"jin chalgani\" bilan bog'lash hali ham uchraydi. Aynan shu sabab bilan, bugungi kunda epilepsiya ustida ishlash faqat dori yozib berish bilan tugamaydi — jamiyatga to'g'ri ma'lumot yetkazish ham davolash jarayonining ajralmas qismiga aylangan.",
                en: "Medically, epilepsy is one of neurology's clearer success stories: with the right diagnosis and treatment, most people can attend school, work, play sports, and raise families. Socially, though, the picture is still complicated — in many countries, including parts of Central Asia, misconceptions that epilepsy is contagious or a form of possession still persist. That's exactly why working on epilepsy today isn't just about writing prescriptions — closing that gap in public understanding has become just as much a part of the treatment." }
        }
      ],
      nextCase: { uz: "Keyingi ish fayli: Altsgeymer kasalligi", en: "Next case: Alzheimer's Disease" }
    }
  },

  // ------------------------------------------------------------------
  // 002 — ALTSGEYMER KASALLIGI (to'liq case file bilan)
  // ------------------------------------------------------------------
  {
    id: "alzheimers",
    caseNo: "002",
    category: "neuro",
    categoryLabel: "Neurological",
    stampStyle: "",
    stamp:  { uz: "Progressiv", en: "Progressive" },
    title:  { uz: "Altsgeymer kasalligi", en: "Alzheimer's Disease" },
    hook:   { uz: "Miya po'stlog'ida g'alati o'zgarishlarni birinchi ko'rgan shifokor nomi bilan atalgan — 1906-yildan buyon o'rganilmoqda.",
              en: "Named after the doctor who first spotted strange changes in brain tissue — under study ever since 1906." },
    year:   { uz: "1906", en: "1906" },

    detail: {
      quote: {
        uz: "1901-yilda Alois Altsgeymer 51 yoshli ayolning g'alati xotira yo'qotishi ustida kuzatuv boshlaganida, u bu holat butun dunyoni tashvishga soladigan kasallikka aylanishini hali bilmasdi.",
        en: "When Alois Alzheimer began observing a 51-year-old woman's puzzling memory loss in 1901, he had no idea he was documenting the first known case of what would become a global health crisis."
      },
      vitals: [
        { label: { uz: "Birinchi qayd etilgan", en: "First recorded" }, value: { uz: "1906, Germaniya", en: "1906, Germany" } },
        { label: { uz: "Tarixiy nomi", en: "Historical name" }, value: { uz: "Miya po'stlog'ining g'alati kasalligi", en: "A Peculiar Disease of the Cerebral Cortex" } },
        { label: { uz: "Hozir kasal odamlar soni", en: "People affected today" }, value: { uz: "~55 million, demensiya bilan", en: "~55 million living with dementia" } },
        { label: { uz: "Holati", en: "Status" }, value: { uz: "Progressiv, hali to'liq davosi yo'q", en: "Progressive, no cure yet" } }
      ],
      sections: [
        {
          type: "text",
          no: "01",
          heading: { uz: "Kelib chiqish sabablari", en: "Origins & Causes" },
          paragraphs: [
            { uz: "Altsgeymer kasalligi miyada ikki turdagi g'ayritabiiy oqsil to'planishi bilan bog'liq: beta-amiloid degan oqsil neyronlar orasida yopishqoq \"plaqa\"lar hosil qiladi, tau degan boshqa oqsil esa neyron ichida chigal ipsimon tugunlar hosil qiladi. Bu ikkala jarayon ham neyronlar orasidagi aloqani buzadi, keyin esa neyronlarning o'zini nobud qiladi. Bu jarayon odatda avval xotira markazi bo'lgan gippokampda boshlanadi — shuning uchun kasallikning birinchi belgisi deyarli har doim yaqinda sodir bo'lgan voqealarni eslay olmaslik bo'ladi.",
              en: "Alzheimer's disease is driven by the buildup of two abnormal proteins in the brain: beta-amyloid, which forms sticky plaques between neurons, and tau, which twists into tangled fibers inside them. Both processes disrupt communication between neurons and eventually kill them. This damage typically begins in the hippocampus, the brain's memory center — which is why the earliest symptom is almost always trouble recalling recent events." },
            { uz: "Eng katta xavf omili — yosh: 65 yoshdan keyin xavf har besh yilda taxminan ikki baravar oshadi. Genetika ham rol o'ynaydi — APOE4 geni tashuvchilarida xavf yuqoriroq, lekin bu gen borligi kasallik albatta rivojlanishini anglatmaydi. Juda kam uchraydigan holatlarda, oilaviy genetik mutatsiyalar tufayli kasallik 30–50 yoshda ham boshlanishi mumkin. Qiziqarli tomoni, yurak-qon tomir salomatligi, ta'lim darajasi va ijtimoiy faollik kabi turmush tarzi omillari ham xavfni sezilarli darajada o'zgartirishi ilmiy jihatdan tasdiqlangan.",
              en: "The single biggest risk factor is age — risk roughly doubles every five years after 65. Genetics plays a role too: carrying the APOE4 gene raises risk, though having it doesn't guarantee the disease will develop. In rare cases, inherited genetic mutations cause the disease to begin as early as someone's 30s or 40s. Interestingly, lifestyle factors — cardiovascular health, education level, and staying socially engaged — have also been shown to meaningfully shift risk in either direction." }
          ]
        },
        {
          type: "timeline",
          no: "02",
          heading: { uz: "Tushuncha qanday o'zgargan", en: "How Understanding Changed" },
          items: [
            { era: { uz: "1901–1906 — Frankfurt, Germaniya", en: "1901–1906 — Frankfurt, Germany" },
              title: { uz: "Bitta bemor, kutilmagan kashfiyot", en: "One patient, an unexpected discovery" },
              text: { uz: "Nemis psixiatri Alois Altsgeymer 51 yoshli Auguste Deter ismli bemorni kuzata boshladi — u kuchli xotira yo'qotishi, shubhalanish va tushunarsiz xatti-harakatlar namoyon qilardi. Bemor vafotidan so'ng, Altsgeymer uning miyasini mikroskop ostida tekshirib, ilgari hech kim tasvirlamagan g'alati oqsil to'planishlari va chigal ipsimon tuzilmalarni topdi. U bu topilmani 1906-yilda ilmiy jamoatchilikka taqdim etdi.",
                    en: "German psychiatrist Alois Alzheimer began observing a 51-year-old patient, Auguste Deter, who showed severe memory loss, paranoia, and confusing behavior. After she died, he examined her brain under a microscope and found strange protein clusters and tangled fibers no one had described before. He presented the finding to the scientific community in 1906." } },
            { era: { uz: "1900-yillarning boshi — 1970-yillar", en: "Early 1900s – 1970s" },
              title: { uz: "Kamdan-kam kasallik deb hisoblangan davr", en: "Decades of being dismissed as rare" },
              text: { uz: "Uzoq yillar davomida \"Altsgeymer kasalligi\" faqat yosh bemorlarda uchraydigan kamdan-kam holat deb hisoblangan, keksa odamlardagi xotira yo'qolishi esa oddiy \"keksalik\" belgisi sifatida qaralib, jiddiy tekshiruvga arzimaydi deb topilgan. Bu qarash o'nlab yillar davomida kasallikning haqiqiy ko'lamini yashirib keldi.",
                    en: "For decades, 'Alzheimer's disease' was treated as a rare condition affecting only younger patients, while memory loss in the elderly was written off as ordinary 'senility' — not something worth investigating. This assumption hid the disease's true scale for generations." } },
            { era: { uz: "1970-yillar", en: "1970s" },
              title: { uz: "Keksalik emas — bitta va o'sha kasallik", en: "Not aging — the same disease all along" },
              text: { uz: "Tadqiqotchilar keksalikdagi demensiya va Altsgeymer kasalligi mikroskop ostida bir xil belgilarga ega ekanini aniqladilar — demak, \"oddiy keksalik\" deb yozib yuborilgan holatlar aslida xuddi o'sha kasallik edi. Bu kashfiyot kasallikка chalingan odamlar sonini baholashni keskin oshirib yubordi va uni jamoat salomatligi muammosiga aylantirdi.",
                    en: "Researchers discovered that senile dementia and Alzheimer's disease looked identical under the microscope — meaning what had been dismissed as ordinary old age was, in fact, the very same disease. This realization dramatically raised estimates of how many people were affected and turned Alzheimer's into a public health priority." } },
            { era: { uz: "1984", en: "1984" },
              title: { uz: "Aybdor oqsil nihoyat topiladi", en: "The culprit protein is finally identified" },
              text: { uz: "Olimlar Altsgeymer birinchi bo'lib ko'rgan plaqalarni tashkil etuvchi beta-amiloid oqsilini aniqladilar. Bu kashfiyot hozirgi kungacha ko'p tadqiqot va dori ishlab chiqishga asos bo'lgan \"amiloid gipotezasi\"ning boshlanishi bo'ldi.",
                    en: "Scientists identified beta-amyloid, the protein that forms the plaques Alzheimer first observed decades earlier. This discovery launched the 'amyloid hypothesis,' which still drives much of the field's research and drug development today." } },
            { era: { uz: "2020-yillar", en: "2020s" },
              title: { uz: "Kasallikning o'ziga ta'sir qiluvchi birinchi dorilar", en: "The first drugs that target the disease itself" },
              text: { uz: "Ilk marta, beta-amiloidni to'g'ridan-to'g'ri nishonga oluvchi dorilar (masalan, lekanemab) tasdiqlandi. Ularning ta'siri katta emas — kasallikni butunlay to'xtatmaydi, faqat sekinlashtiradi — lekin bu shunchaki belgilarni yengillashtirish emas, kasallikning tub sababiga qaratilgan birinchi davolash usuli bo'lgani uchun katta qadam hisoblanadi.",
                    en: "For the first time, drugs that directly target beta-amyloid (such as lecanemab) were approved. Their effect is modest — they slow decline rather than stop it — but they mark the first treatments aimed at the disease's underlying biology rather than just easing its symptoms." } }
          ]
        },
        {
          type: "living",
          no: "03",
          heading: { uz: "Bugun bu kasallik bilan yashash", en: "Living With It Today" },
          title: { uz: "Parvarish qiluvchilar uchun ham og'ir yuk", en: "A heavy burden for caregivers too" },
          text: { uz: "Altsgeymer kasalligi nafaqat bemorga, balki uning oilasiga ham katta ta'sir qiladi — chunki kasallik yillar davomida asta-sekin rivojlanadi va bemorga kundalik yordam tobora ko'proq kerak bo'lib boradi. Erta tashxis qo'yish, aqliy faollikni saqlash (o'qish, muloqot, yangi narsalarni o'rganish) va yurak-qon tomir salomatligiga e'tibor berish kasallik rivojlanishini sekinlashtirishi mumkin. Neyroshunoslik sohasida bu — eng faol o'rganilayotgan yo'nalishlardan biri.",
                en: "Alzheimer's disease affects not just the patient but their whole family, since the illness progresses gradually over years and the need for daily care keeps growing. Early diagnosis, staying mentally active — reading, socializing, learning new things — and taking care of cardiovascular health can all help slow its progression. It remains one of the most actively researched areas in neuroscience." }
        }
      ],
      nextCase: { uz: "Keyingi ish fayli: Leykemiya (tez orada)", en: "Next case: Leukemia (coming soon)" }
    }
  },

  // ------------------------------------------------------------------
  // Quyidagilar hozircha oddiy kartochka (detail yo'q — "Tez orada")
  // Bularga ham detail qo'shsangiz, ular ham to'liq ish fayliga aylanadi.
  // ------------------------------------------------------------------
  {
    id: "leukemia", caseNo: "003", category: "onco", categoryLabel: "Oncological", stampStyle: "sage",
    stamp: { uz: "Davolanadi", en: "Treatable" },
    title: { uz: "Leykemiya", en: "Leukemia" },
    hook: { uz: "Kimyoterapiyani jang maydoni zaharidan hayot saqlovchi davoga aylantirgan saraton turi.",
            en: "The cancer that turned chemotherapy from battlefield poison into life-saving medicine." },
    year: { uz: "1845", en: "1845" },

    detail: {
      quote: {
        uz: "\"Leykemiya\" so'zi yunoncha \"oq qon\" degan ma'noni anglatadi — 1845-yilda ikki shifokor bir-biridan bexabar holda xuddi shu g'alati holatni tasvirlagan edi.",
        en: "The word 'leukemia' means 'white blood' in Greek — in 1845, two doctors, unaware of each other, described the same strange condition almost simultaneously."
      },
      vitals: [
        { label: { uz: "Birinchi qayd etilgan", en: "First recorded" }, value: { uz: "1845, Germaniya va Shotlandiya", en: "1845, Germany and Scotland" } },
        { label: { uz: "Tarixiy nomi", en: "Historical name" }, value: { uz: "\"Oq qon\" kasalligi", en: "\"White blood\"" } },
        { label: { uz: "Hozir kasal odamlar soni", en: "People affected today" }, value: { uz: "Yiliga yuz minglab yangi holat, butun dunyo bo'yicha", en: "Hundreds of thousands of new cases yearly, worldwide" } },
        { label: { uz: "Holati", en: "Status" }, value: { uz: "Turiga qarab — yuqori darajada davolanadigandan murakkabgacha", en: "Ranges from highly curable to still difficult, by subtype" } }
      ],
      sections: [
        {
          type: "text",
          no: "01",
          heading: { uz: "Kelib chiqish sabablari", en: "Origins & Causes" },
          paragraphs: [
            { uz: "Leykemiya suyak iligidagi qon hosil qiluvchi hujayralarda yuzaga keladigan mutatsiyalardan boshlanadi. Bu mutatsiyalar tufayli suyak iligi nazoratsiz ravishda ko'plab g'ayritabiiy, yetuk bo'lmagan oq qon hujayralarini ishlab chiqara boshlaydi. Bu hujayralar o'z vazifasini bajara olmaydi va sog'lom qizil qon hujayralari, trombotsitlar hamda normal oq qon hujayralari uchun joy qoldirmay, ularni suyak iligidan siqib chiqaradi. Natijada bemorda kamqonlik, qon ivishi bilan bog'liq muammolar va infeksiyalarga qarshilikning pasayishi kuzatiladi.",
              en: "Leukemia begins with mutations in the blood-forming cells of the bone marrow. These mutations cause the marrow to churn out huge numbers of abnormal, immature white blood cells in an uncontrolled way. These cells can't do their job properly, and they crowd out the marrow's supply of healthy red blood cells, platelets, and normal white blood cells. The result is anemia, problems with blood clotting, and a weakened ability to fight infection." },
            { uz: "Xavf omillariga radiatsiya ta'sirida bo'lish, benzol kabi kimyoviy moddalar bilan uzoq muddat aloqada bo'lish, ba'zi genetik sindromlar (masalan, Daun sindromi) va oldingi kimyoterapiya davolashi kiradi. Shunga qaramay, aksariyat bemorlarda hech qanday aniq xavf omili topilmaydi. Leykemiya bitta kasallik emas — u qanchalik tez rivojlanishi (o'tkir yoki surunkali) va qaysi hujayra turidan kelib chiqishi (limfoid yoki mieloid) bo'yicha to'rtta asosiy turga bo'linadi, va har biri boshqacha davolashni talab qiladi.",
              en: "Risk factors include radiation exposure, long-term contact with chemicals like benzene, certain genetic syndromes such as Down syndrome, and prior chemotherapy treatment. Even so, most patients have no identifiable risk factor at all. Leukemia isn't one disease — it's divided into four main types based on how fast it progresses (acute or chronic) and which cell line it comes from (lymphoid or myeloid), and each type calls for a different treatment approach." }
          ]
        },
        {
          type: "timeline",
          no: "02",
          heading: { uz: "Tushuncha qanday o'zgargan", en: "How Understanding Changed" },
          items: [
            { era: { uz: "1845 — Germaniya va Shotlandiya", en: "1845 — Germany and Scotland" },
              title: { uz: "Ikki shifokor, bitta g'alati kashfiyot", en: "Two doctors, one strange discovery" },
              text: { uz: "Nemis patologi Rudolf Virxov va shotland shifokori Jon Bennet bir-biridan mustaqil ravishda, qon tarkibida g'ayrioddiy darajada ko'p oq hujayra bo'lgan bemorlarni tasvirlashdi. Virxov bu holatni \"leukämie\" (yunoncha \"oq qon\") deb nomladi — bu ism hozirgi kungacha saqlanib qolgan.",
                    en: "German pathologist Rudolf Virchow and Scottish physician John Bennett, working independently and unaware of each other, both described patients with an abnormally high number of white blood cells. Virchow named the condition 'leukämie' — Greek for 'white blood' — a name that has stuck ever since." } },
            { era: { uz: "1877 — Germaniya", en: "1877 — Germany" },
              title: { uz: "Bo'yash usuli hujayralarni farqlashga imkon beradi", en: "A staining method reveals the differences" },
              text: { uz: "Pol Erlix qon hujayralarini rangli bo'yoqlar bilan bo'yash usulini ishlab chiqdi, bu esa mikroskop ostida turli oq qon hujayralarini bir-biridan ajratishga imkon berdi. Bu kashfiyot leykemiyani aniq turlarga bo'lish va har biriga alohida yondashish yo'lini ochdi.",
                    en: "Paul Ehrlich developed staining techniques that let different types of white blood cells be told apart under a microscope. This breakthrough made it possible to classify leukemia into distinct subtypes and treat each one differently." } },
            { era: { uz: "1940–1950-yillar — AQSh", en: "1940s–1950s — United States" },
              title: { uz: "Zamonaviy kimyoterapiyaning tug'ilishi", en: "The birth of modern chemotherapy" },
              text: { uz: "Sidney Farber bolalar leykemiyasi bilan og'rigan bemorlarga folat kislotasiga qarshi moddalarni sinab ko'rdi va vaqtinchalik bo'lsa-da, birinchi remissiyalarni qayd etdi. Bu — saraton hujayralarini kimyoviy moddalar bilan nishonga olish mumkinligini isbotlagan birinchi jiddiy dalil bo'ldi va zamonaviy kimyoterapiyaning boshlanishini belgiladi.",
                    en: "Sidney Farber tested folic acid antagonists on children with leukemia and recorded the first remissions, even if only temporary. This was the first solid proof that cancer cells could be targeted chemically, and it marked the beginning of modern chemotherapy." } },
            { era: { uz: "1990-yillar", en: "1990s" },
              title: { uz: "Suyak iligini almashtirish standart usulga aylanadi", en: "Bone marrow transplants become standard" },
              text: { uz: "Kasallangan suyak iligini sog'lom donor iligi bilan to'liq almashtirish ko'plab leykemiya turlari uchun standart davolash usuliga aylandi. Bu usul ayniqsa dorilarga javob bermaydigan yoki qaytalangan holatlarda hayot saqlab qoluvchi imkoniyat bo'ldi.",
                    en: "Replacing diseased bone marrow entirely with healthy donor marrow became a standard treatment for many forms of leukemia. This approach became a life-saving option especially for cases that didn't respond to medication or that relapsed." } },
            { era: { uz: "2001 — AQSh", en: "2001 — United States" },
              title: { uz: "Nishonli terapiya davri boshlanadi", en: "The era of targeted therapy begins" },
              text: { uz: "Imatinib (Gleevec) tasdiqlandi — bu surunkali mieloid leykemiyani keltirib chiqaruvchi aniq genetik nuqsonni nishonga oluvchi birinchi dori edi. Bu kashfiyot bir vaqtlar deyarli har doim o'ldiruvchi bo'lgan kasallikni oddiy tabletka bilan boshqariladigan surunkali holatga aylantirdi — bu onkologiya tarixidagi eng katta muvaffaqiyatlardan biri hisoblanadi.",
                    en: "Imatinib (Gleevec) was approved — the first drug to directly target the specific genetic defect driving chronic myeloid leukemia. This turned a disease that was once almost always fatal into a chronic condition manageable with a daily pill, one of the great success stories in the history of oncology." } }
          ]
        },
        {
          type: "living",
          no: "03",
          heading: { uz: "Bugun bu kasallik bilan yashash", en: "Living With It Today" },
          title: { uz: "Bitta nomdagi juda xilma-xil natijalar", en: "One name, very different outcomes" },
          text: { uz: "Bugungi kunda \"leykemiya\" tashxisi juda keng ma'noga ega bo'lib qoldi. Bolalarda uchraydigan o'tkir limfoblastik leykemiyaning davolanish darajasi 90 foizdan yuqori — bu onkologiyaning eng katta yutuqlaridan biri. Ayni paytda, keksa yoshdagi bemorlarda uchraydigan ba'zi o'tkir mieloid leykemiya turlari hali ham murakkab bo'lib qolmoqda. So'nggi yillarda immunoterapiya, xususan CAR-T hujayra terapiyasi kabi usullar, hatto standart davolashga javob bermagan bemorlar uchun ham yangi umid uyg'otmoqda — bu neyroshunoslikdagi kabi, onkologiyada ham tadqiqot juda faol davom etayotgan sohadir.",
                en: "Today, a leukemia diagnosis covers a very wide range of outcomes. Childhood acute lymphoblastic leukemia now has a cure rate above 90 percent — one of oncology's greatest success stories. At the same time, certain forms of acute myeloid leukemia in older patients remain genuinely difficult to treat. In recent years, immunotherapy — particularly CAR-T cell therapy — has offered new hope even for patients who didn't respond to standard treatment, making this, much like neuroscience, one of the most actively researched fields in medicine." }
        }
      ],
      nextCase: { uz: "Keyingi ish fayli: Xantington kasalligi (tez orada)", en: "Next case: Huntington's Disease (coming soon)" }
    }
  },
  {
    id: "huntington", caseNo: "004", category: "genetic", categoryLabel: "Genetic", stampStyle: "",
    stamp: { uz: "Irsiy", en: "Hereditary" },
    title: { uz: "Xantington kasalligi", en: "Huntington's Disease" },
    hook: { uz: "Bitta oilaning necha avlodi davomida kuzatilgan — endi esa bitta o'zgargan gen orqali izohlanadi.",
            en: "Traced across generations of a single family — and now, across a single mutated gene." },
    year: { uz: "1872", en: "1872" },
    detail: null
  },
  {
    id: "smallpox", caseNo: "005", category: "infectious", categoryLabel: "Infectious", stampStyle: "sage",
    stamp: { uz: "Yo'q qilingan", en: "Eradicated" },
    title: { uz: "Chechak", en: "Smallpox" },
    hook: { uz: "Yer yuzidan butunlay yo'q qilingan yagona inson kasalligi — va vaksinalar mavjudligining sababi.",
            en: "The only human disease ever wiped off the face of the earth — and the reason vaccines exist." },
    year: { uz: "~mil.av. 1350", en: "~1350 BCE" },
    detail: null
  },
  {
    id: "mi", caseNo: "006", category: "cardio", categoryLabel: "Cardiovascular", stampStyle: "sage",
    stamp: { uz: "Nazorat qilinadi", en: "Manageable" },
    title: { uz: "Miokard infarkti", en: "Myocardial Infarction" },
    hook: { uz: "Yurak xuruji: bir vaqtlar o'lim hukmi, hozir esa aksariyat hollarda omon qolish mumkin.",
            en: "The heart attack: once a death sentence, now survivable in the vast majority of cases." },
    year: { uz: "1912", en: "1912" },
    detail: null
  },
  {
    id: "t1d", caseNo: "007", category: "autoimmune", categoryLabel: "Autoimmune", stampStyle: "",
    stamp: { uz: "Surunkali", en: "Chronic" },
    title: { uz: "1-turdagi qandli diabet", en: "Type 1 Diabetes" },
    hook: { uz: "Tananing o'z himoya tizimi oshqozon osti beziga qarshi chiqadi — 1921-yilgi kashfiyot bemorlarga o'nlab yillar qaytardi.",
            en: "The body's own defenses turn against the pancreas — until a 1921 discovery gave patients decades back." },
    year: { uz: "1889", en: "1889" },
    detail: null
  },
  {
    id: "t2d", caseNo: "008", category: "endocrine", categoryLabel: "Endocrine", stampStyle: "gold",
    stamp: { uz: "Oldini olish mumkin", en: "Preventable" },
    title: { uz: "2-turdagi qandli diabet", en: "Type 2 Diabetes" },
    hook: { uz: "Nomi qadimiy bo'lgan zamonaviy epidemiya — Misr tabiblari uning belgilarini 3,500 yil oldin tasvirlashgan.",
            en: "A modern epidemic with an ancient name — Egyptian physicians described its symptoms 3,500 years ago." },
    year: { uz: "~mil.av. 1550", en: "~1550 BCE" },
    detail: null
  }

  /* ── YANGI KASALLIK QO'SHISH UCHUN NAMUNA (shu joyga vergul bilan qo'shing) ──

  ,{
    id: "your-id-here",              // takrorlanmas, faqat lotin harflar, probelsiz
    caseNo: "009",
    category: "cardio",              // yuqoridagi ro'yxatdan birini tanlang
    categoryLabel: "Cardiovascular",
    stampStyle: "",                  // "" yoki "sage" yoki "gold"
    stamp: { uz: "...", en: "..." },
    title: { uz: "...", en: "..." },
    hook:  { uz: "...", en: "..." },
    year:  { uz: "...", en: "..." },
    detail: null                     // to'liq sahifa qo'shmoqchi bo'lsangiz, epilepsy
                                      // obyektidagi "detail: {...}" tuzilmasini nusxa oling
  }

  */
];
