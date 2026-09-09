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
    detail: {
  quote: {
    uz: "1872-yilda Jorj Xantington bu kasallikni tasvirlaganida, u bir oilada avloddan-avlodga o'tadigan g'alati harakatlar va ruhiy o'zgarishlarni kuzatgan edi. Bugun esa biz bu kasallikning sababini aniq bilamiz: 4-xromosomadagi HTT genidagi mutatsiya.",
    en: "When George Huntington described the disease in 1872, he was observing strange movements and mental changes that seemed to pass from generation to generation within families. Today, we know its precise genetic cause: a mutation in the HTT gene on chromosome 4."
  },

  vitals: [
    {
      label: { uz: "Birinchi ilmiy tasvir", en: "First scientific description" },
      value: { uz: "1872, AQSh", en: "1872, United States" }
    },
    {
      label: { uz: "Sababchi gen", en: "Causative gene" },
      value: { uz: "HTT geni, 4-xromosoma", en: "HTT gene, chromosome 4" }
    },
    {
      label: { uz: "Irsiylanish turi", en: "Inheritance pattern" },
      value: { uz: "Autosom-dominant", en: "Autosomal dominant" }
    },
    {
      label: { uz: "Holati", en: "Status" },
      value: { uz: "Progressiv, hozircha to'liq davosi yo'q", en: "Progressive, no cure yet" }
    }
  ],
       sections: [
    {
      type: "text",
      no: "01",
      heading: { uz: "Kelib chiqish sabablari", en: "Origins & Causes" },
      paragraphs: [
        {
          uz: "Xantington kasalligi — asosan miya hujayralarini zararlaydigan irsiy neyrodegenerativ kasallik. Uning sababi 4-xromosomada joylashgan HTT genidagi mutatsiyadir. Bu genda CAG deb ataladigan uchta DNK harfining ketma-ketligi odatdagidan juda ko'p marta takrorlanadi. Natijada hujayralarda g'ayritabiiy shakldagi huntingtin oqsili hosil bo'lib, vaqt o'tishi bilan ayrim neyronlarning faoliyati buziladi va ular nobud bo'la boshlaydi.",
          en: "Huntington's disease is an inherited neurodegenerative disorder that primarily damages brain cells. It is caused by a mutation in the HTT gene on chromosome 4. In this gene, a sequence of three DNA letters called CAG is repeated far more times than normal. The expanded sequence produces an altered form of the huntingtin protein, which gradually disrupts the function of certain neurons and eventually contributes to their death."
        },
        {
          uz: "Kasallikning eng muhim xususiyatlaridan biri uning autosom-dominant tarzda irsiylanishidir. Ya'ni kasallikka sabab bo'luvchi mutatsiyaga ega bo'lgan ota yoki onaning har bir farzandiga ushbu mutatsiyani meros qilib berish ehtimoli 50 foizni tashkil qiladi. Kasallik odatda katta yoshda, ko'pincha 30–50 yoshlar oralig'ida namoyon bo'ladi, lekin boshlanish yoshi odamdan odamga farq qilishi mumkin. Ba'zi oilalarda keyingi avlodlarda kasallik ertaroq boshlanishi mumkin — bu hodisa genetik anticipation deb ataladi.",
          en: "One of the disease's defining features is its autosomal dominant inheritance. This means that a parent carrying the disease-causing mutation has a 50 percent chance of passing it to each child. Symptoms most often begin in adulthood, commonly between the ages of 30 and 50, although the age of onset varies from person to person. In some families, the disease can appear at a younger age in successive generations, a phenomenon known as genetic anticipation."
        }
      ]
    },
          {
      type: "timeline",
      no: "02",
      heading: { uz: "Tushuncha qanday o'zgargan", en: "How Understanding Changed" },
      items: [
        {
          era: { uz: "1872 — AQSh", en: "1872 — United States" },
          title: { uz: "Xantington kasallikni tasvirlaydi", en: "Huntington describes the disease" },
          text: {
            uz: "Amerikalik shifokor Jorj Xantington 22 yoshida o'zining eng mashhur tibbiy maqolasini yozib, Long-Aylenddagi ayrim oilalarda avloddan-avlodga o'tib kelayotgan g'alati harakatlar, ruhiy o'zgarishlar va xulq-atvor buzilishlarini tasvirladi. U kasallikning irsiy xususiyatini ham payqagan edi. Uning qisqa maqolasi keyinchalik Xantington kasalligi deb ataladigan holatning klassik tavsifiga aylandi.",
            en: "At just 22 years old, American physician George Huntington published his famous description of a disorder affecting families on Long Island. He described involuntary movements, mental changes, and behavioral disturbances that appeared across generations. He also recognized its hereditary nature. His short paper eventually became the classic description of what is now known as Huntington's disease."
          }
        },

        {
          era: { uz: "1900-yillarning boshi — o'rtalari", en: "Early–mid 20th century" },
          title: { uz: "Kasallik miyaga bog'liqligi aniqroq bo'ladi", en: "The brain connection becomes clearer" },
          text: {
            uz: "Keyingi o'n yilliklarda shifokorlar kasallikning faqat g'alati harakatlardan iborat emasligini tushuna boshladilar. Bemorlar xotira, fikrlash, kayfiyat va xulq-atvor bilan bog'liq o'zgarishlarni ham boshdan kechirishi mumkin edi. Miya to'qimalarini tekshirish esa ayniqsa bazal gangliyalar deb ataladigan harakatlarni boshqarishda muhim bo'lgan hududlarning zararlanishini ko'rsatdi.",
            en: "Over the following decades, doctors realized that the disease was much more than unusual movements. Patients could also develop changes in memory, thinking, mood, and behavior. Examination of brain tissue revealed particularly severe damage in regions called the basal ganglia, which play an important role in controlling movement and other brain functions."
          }
        },

             {
                era: { uz: "1983 — AQSh", en: "1983 — United States" },
          title: { uz: "Kasallik geni xaritada topiladi", en: "The disease gene is mapped" },
          text: {
            uz: "Olimlar Xantington kasalligini keltirib chiqaruvchi genetik nuqsonni 4-xromosomaning ma'lum bir qismiga bog'lashga muvaffaq bo'lishdi. Bu molekulyar genetika uchun katta qadam edi: endi tadqiqotchilar kasallikning faqat belgilarini emas, balki uning genetik ildizini ham izlashlari mumkin edi.",
            en: "Scientists successfully linked the genetic defect responsible for Huntington's disease to a specific region of chromosome 4. This was a major breakthrough in molecular genetics because researchers could now investigate not only the symptoms of the disease, but also its genetic roots."
          }
        },

        {
          era: { uz: "1993 — AQSh", en: "1993 — United States" },
          title: { uz: "HTT geni aniqlanadi", en: "The HTT gene is identified" },
          text: {
            uz: "1993-yilda katta xalqaro tadqiqotchilar guruhi Xantington kasalligiga sabab bo'luvchi genni aniqladi. Gen keyinchalik HTT deb nomlandi. Olimlar unda CAG ketma-ketligining g'ayritabiiy darajada ko'p takrorlanishini topdilar. Bu kashfiyot kasallikni molekulyar darajada tushunish va genetik testlarni rivojlantirish uchun yangi davrni boshlab berdi.",
            en: "In 1993, a large international team of researchers identified the gene responsible for Huntington's disease. It was later named HTT. The researchers discovered an unusually large expansion of repeated CAG sequences within the gene. This breakthrough opened a new era in understanding the disease at the molecular level and developing genetic testing."
          }
        },

        {
          era: { uz: "2000-yillar — Bugungi kun", en: "2000s — Today" },
          title: { uz: "Genetikadan nishonli davolash sari", en: "From genetics toward targeted treatment" },
          text: {
            uz: "HTT genining aniqlanishi olimlarga kasallik mexanizmini chuqurroq o'rganish imkonini berdi. Bugungi tadqiqotlarning katta qismi g'ayritabiiy huntingtin oqsilini kamaytirish, uning hujayralarga zararini cheklash va kasallik rivojlanishini sekinlashtirishga qaratilgan. Genni nishonga oluvchi turli usullar, jumladan antisense oligonukleotidlar va boshqa gen-silencing yondashuvlari o'rganilmoqda. Hozircha kasallikni to'liq to'xtatib yoki yo'q qilib yuboradigan tasdiqlangan davo mavjud emas.",
            en: "Identifying the HTT gene allowed scientists to investigate the disease mechanism in much greater detail. Today, many research efforts focus on reducing abnormal huntingtin, limiting its damage to cells, and slowing disease progression. Gene-targeting approaches, including antisense oligonucleotides and other gene-silencing strategies, are being investigated. At present, there is still no approved treatment that completely stops or eliminates the disease."
          }
        }
      ]
    },

     {
        type: "living",
      no: "03",
      heading: { uz: "Bugun bu kasallik bilan yashash", en: "Living With It Today" },
      title: {
        uz: "Harakatdan tashqari, butun shaxsiyatga ta'sir qiluvchi kasallik",
        en: "A disease that affects far more than movement"
      },
      text: {
        uz: "Xantington kasalligi bilan yashash murakkab, chunki u bir vaqtning o'zida harakat, fikrlash va ruhiy holatga ta'sir qilishi mumkin. Dastlab odamda qo'l-oyoqlarning ixtiyorsiz harakatlari, muvozanat bilan bog'liq muammolar yoki nozik motorikadagi o'zgarishlar paydo bo'lishi mumkin. Keyinchalik qaror qabul qilish, diqqatni jamlash, xotira, kayfiyat va kundalik vazifalarni bajarish qobiliyati ham o'zgarishi mumkin. Shu sababli bemorga nevrolog, psixolog yoki psixiatr, fizioterapevt, nutq terapevti va boshqa mutaxassislardan iborat jamoaviy yordam kerak bo'lishi mumkin. Kasallik irsiy bo'lgani uchun uning ta'siri faqat bitta bemor bilan cheklanmaydi — butun oila genetik maslahat, ruhiy qo'llab-quvvatlash va kelajak haqidagi murakkab qarorlar bilan yuzlashishi mumkin. Shunga qaramay, genetikaning aniqlangani tadqiqotchilarga kasallikning ildiziga aniqroq nishon olish imkonini berdi va Xantington kasalligi bugungi kunda neyroshunoslikdagi eng faol o'rganilayotgan genetik kasalliklardan biridir.",
        en: "Living with Huntington's disease is challenging because it can affect movement, thinking, and emotional health at the same time. Early on, a person may develop involuntary movements, balance problems, or changes in fine motor control. As the disease progresses, decision-making, concentration, memory, mood, and the ability to manage everyday tasks can also be affected. For this reason, patients may need coordinated support from neurologists, mental-health professionals, physiotherapists, speech therapists, and other specialists. Because the disease is inherited, its impact extends beyond one patient — entire families may face genetic counseling, emotional challenges, and difficult decisions about the future. Yet identifying the genetic cause has given researchers a much clearer target, making Huntington's disease one of the most actively studied genetic disorders in modern neuroscience."
      }
    }
  ],
       nextCase: {
uz: "Keyingi ish fayli: Chechak (tez orada)",
en: "Next case: Smallpox (coming soon)"
}
         }
  },
  {
    id: "smallpox", caseNo: "005", category: "infectious", categoryLabel: "Infectious", stampStyle: "sage",
    stamp: { uz: "Yo'q qilingan", en: "Eradicated" },
    title: { uz: "Chechak", en: "Smallpox" },
    hook: { uz: "Yer yuzidan butunlay yo'q qilingan yagona inson kasalligi — va vaksinalar mavjudligining sababi.",
            en: "The only human disease ever wiped off the face of the earth — and the reason vaccines exist." },
    year: { uz: "~mil.av. 1350", en: "~1350 BCE" },
    detail: {
  quote: {
    uz: "Minglab yillar davomida insoniyatni qo'rquvda ushlab kelgan kasallik 1980-yilda rasman yo'q qilingan deb e'lon qilindi — bu tibbiyot tarixidagi eng katta g'alabalardan biridir.",
    en: "After terrifying humanity for thousands of years, smallpox was officially declared eradicated in 1980 — one of the greatest victories in the history of medicine."
  },

  vitals: [
    {
      label: { uz: "Qadimiyligi", en: "How old is it?" },
      value: { uz: "Kamida 3 000 yil", en: "At least 3,000 years old" }
    },
    {
      label: { uz: "Qo'zg'atuvchisi", en: "Causative agent" },
      value: { uz: "Variola virusi", en: "Variola virus" }
    },
    {
      label: { uz: "Oxirgi tabiiy holat", en: "Last natural case" },
      value: { uz: "1977, Somali", en: "1977, Somalia" }
    },
    {
      label: { uz: "Hozirgi holati", en: "Status today" },
      value: { uz: "1980-yilda rasman yo'q qilingan", en: "Officially eradicated in 1980" }
    }
  ],

  sections: [
    {
      type: "text",
      no: "01",
      heading: {
        uz: "Kelib chiqish sabablari",
        en: "Origins & Causes"
      },
      paragraphs: [
       {
          uz: "Chechak — variola virusi keltirib chiqaradigan, odamdan odamga yuqadigan o'ta yuqumli kasallik edi. Virus organizmga asosan nafas yo'llari orqali kirib, keyin butun tana bo'ylab tarqalardi. Kasallik odatda yuqori isitma, kuchli holsizlik va bel og'rig'i bilan boshlanib, bir necha kundan keyin yuz, qo'l-oyoqlar va tanada o'ziga xos toshmalar paydo bo'lardi. Toshmalar asta-sekin suyuqlik, keyin yiring bilan to'lib, oxirida qobiq hosil qilardi. Og'ir holatlarda kasallik o'limga olib kelishi mumkin edi; omon qolganlarning ayrimlarida esa chuqur chandiqlar, hatto ko'rlik qolardi.",
          en: "Smallpox was a highly contagious human disease caused by the variola virus. The virus usually entered the body through the respiratory tract and then spread throughout the body. The illness typically began with high fever, severe fatigue, and back pain, followed a few days later by a characteristic rash on the face, arms, legs, and other parts of the body. The spots gradually filled with fluid and then pus before forming crusts. Severe smallpox could be fatal, while survivors were sometimes left with deep scars or even blindness."
        },
        {
          uz: "Chechakning eng xavfli tomoni uning faqat og'ir kechishida emas, balki juda oson tarqalishida ham edi. Kasallik bilan og'rigan odam yo'talganda yoki aksirganda ajralgan tomchilar yaqin atrofdagi odamlarga yuqishi mumkin edi; kiyim-kechak va choyshab kabi ifloslangan buyumlar ham virusning tarqalishida rol o'ynashi mumkin edi. Zamonaviy davolash usullari paydo bo'lishidan oldin chechakni butunlay davolaydigan dori mavjud emas edi. Shuning uchun insoniyat uzoq vaqt davomida kasallikning o'zini davolashdan ko'ra, uning oldini olish yo'lini izlashga majbur bo'ldi.",
          en: "The danger of smallpox came not only from how severe the disease could be, but also from how easily it could spread. Respiratory droplets from an infected person could transmit the virus during close contact, while contaminated clothing and bedding could also contribute to transmission. Before modern medicine, there was no established cure that could reliably eliminate the infection. Humanity therefore spent centuries searching not simply for a treatment, but for a way to prevent the disease in the first place."
        }
      ]
    },

     {
        type: "timeline",
      no: "02",
      heading: {
        uz: "Tushuncha qanday o'zgargan",
        en: "How Understanding Changed"
      },
      items: [
        {
          era: {
            uz: "Qadimgi davrlar — XIX asrgacha",
            en: "Ancient times — Before the 19th century"
          },
          title: {
            uz: "Kasallikdan himoyalanishning dastlabki urinishi",
            en: "The first attempts at protection"
          },
          text: {
            uz: "Chechak minglab yillar davomida turli xalqlar orasida epidemiyalar keltirib chiqargan. Odamlar vaqt o'tishi bilan bir marta chechak bilan kasallangan odam odatda ikkinchi marta bu kasallikka chalinmasligini payqashgan. Shu kuzatuv asosida Osiyo va Afrikaning ayrim hududlarida variolatsiya deb atalgan usul paydo bo'lgan: sog'lom odamga chechak yarasidan olingan material ataylab berilib, kasallikning nisbatan yengil shaklini chaqirishga harakat qilingan. Bu usul xavfsiz emas edi, ammo tabiiy infeksiyaga qaraganda o'lim xavfi pastroq bo'lgan.",
            en: "Smallpox caused devastating outbreaks for thousands of years. Over time, people noticed that those who survived the disease usually did not develop it again. This observation led to a practice known as variolation in parts of Asia and Africa: material taken from smallpox sores was deliberately introduced into a healthy person in an attempt to produce a milder infection. The method was far from safe, but the risk of death was generally lower than with naturally acquired smallpox."
          }
        },
        {
          era: {
            uz: "1796 — Angliya",
            en: "1796 — England"
          },
          title: {
            uz: "Jenner va birinchi muvaffaqiyatli vaksina",
            en: "Jenner and the first successful vaccine"
          },
          text: {
             uz: "Ingliz shifokori Edvard Jenner sog'uvchilarda kuzatiladigan sigir chechagi bilan kasallanish keyinchalik odam chechagidan himoya qilishi mumkinligini payqadi. 1796-yilda u sakkiz yoshli Jeyms Fippsga sigir chechagi yarasidan olingan materialni yubordi. Bola bir necha kun o'zini yomon his qilgan bo'lsa-da, sog'ayib ketdi. Keyinchalik Jenner uni chechak virusiga duchor qilib ko'rganida, bola kasallanmagan. Bu tajriba vaksinalar tarixidagi burilish nuqtasiga aylandi.",
            en: "English physician Edward Jenner noticed that people who had caught cowpox appeared to be protected from smallpox. In 1796, he inoculated eight-year-old James Phipps with material taken from a cowpox sore. The boy became mildly unwell but recovered. When Jenner later exposed him to smallpox, Phipps did not develop the disease. The experiment became a turning point in the history of vaccination."
          }
        },
        {
          era: {
            uz: "1958–1967 — Xalqaro kurash boshlanadi",
            en: "1958–1967 — The global campaign begins"
          },
          title: {
            uz: "Kasallikni bitta mamlakat emas, butun dunyo yengishi kerak edi",
            en: "Defeating the disease required the whole world"
          },
          text: {
            uz: "Vaksina ko'plab mamlakatlarda chechakni keskin kamaytirgan bo'lsa-da, kasallik dunyoning ayrim hududlarida hali ham tarqalishda davom etdi. 1958-yilda Jahon sog'liqni saqlash assambleyasi chechakni butun dunyodan yo'q qilish maqsadini ilgari surdi. 1967-yilda esa Jahon sog'liqni saqlash tashkiloti bu ishni yanada kuchaytirib, vaksinalash bilan birga kasallik holatlarini faol izlash va bemor bilan aloqada bo'lgan odamlarni tezda vaksinalashga asoslangan global dasturni boshladi.",
            en: "Although vaccination had dramatically reduced smallpox in many countries, the disease continued to circulate in parts of the world. In 1958, the World Health Assembly called for global eradication. In 1967, the World Health Organization intensified the campaign, combining vaccination with active case-finding and rapid vaccination of people who had been in contact with infected patients."
          }
        },
        {
          era: {
             uz: "1970-yillar — So'nggi epidemiyalar",
            en: "1970s — The final outbreaks"
          },
          title: {
            uz: "Har bir bemorni topish poygasi",
            en: "The race to find every last case"
          },
          text: {
            uz: "Global dastur oddiygina butun aholini vaksinalash bilan cheklanib qolmadi. Sog'liqni saqlash xodimlari yangi holatlarni izlab topishdi, bemorlar bilan aloqada bo'lgan odamlarni aniqlashdi va ularni zudlik bilan vaksinalashdi. Bu usul kasallikning bir hududdan ikkinchisiga tarqalish zanjirini tezda uzishga yordam berdi. 1977-yilda Somalida qayd etilgan holat tabiiy ravishda yuz bergan chechakning dunyodagi so'nggi holati bo'ldi.",
          en: "The global programme did not rely on vaccinating everyone everywhere. Health workers actively searched for new cases, identified people who had been in contact with patients, and vaccinated them quickly. This strategy helped break chains of transmission before the virus could spread further. The last known naturally occurring case was recorded in Somalia in 1977."
          }
        },
        {
          era: {
            uz: "1979–1980 — Dunyo bo'yicha g'alaba",
            en: "1979–1980 — Global victory"
          },
          title: {
            uz: "Chechak rasman yo'q qilinadi",
            en: "Smallpox is officially eradicated"
          },
          text: {
            uz: "1977-yildagi so'nggi tabiiy holatdan keyin mutaxassislar boshqa hududlarda yashirincha tarqalayotgan chechak qolmaganini tekshirishda davom etdilar. 1979-yil dekabr oyida xalqaro ekspertlar chechakning butun dunyoda yo'q qilinganini tasdiqlashdi. 1980-yil 8-mayda Jahon sog'liqni saqlash assambleyasi bu qarorni rasman ma'qulladi. Shunday qilib, insoniyat tarixida birinchi marta yuqumli kasallik global miqyosda butunlay yo'q qilindi.",
            en: "After the final natural case in 1977, experts continued searching for evidence that smallpox might still be circulating elsewhere. In December 1979, an international commission certified that smallpox had been eradicated worldwide. On May 8, 1980, the World Health Assembly officially endorsed the declaration. For the first time in history, a human infectious disease had been completely eliminated on a global scale."
          }
        }
      ]
    },

     {
        type: "living",
      no: "03",
      heading: {
        uz: "Bugun bu kasallik bilan yashash",
        en: "Living With It Today"
      },
      title: {
        uz: "Endi kasallik emas, tarix",
        en: "A disease that became history"
      },
      text: {
        uz: "Bugungi kunda odamlar chechak bilan tabiiy ravishda kasallanmaydi — kasallik dunyo bo'ylab rasman yo'q qilingan. Bu g'alaba kasallikni yangi dori bilan davolash orqali emas, balki vaksina, epidemiologik kuzatuv, bemorlarni tezda aniqlash va xalqaro hamkorlik orqali qo'lga kiritildi. Chechak tarixi shuni ko'rsatadiki, tibbiyotdagi eng katta yutuqlar ba'zan bitta dori yoki bitta shifokorning kashfiyotidan emas, balki butun dunyo bo'ylab odamlarning bir maqsad yo'lida birgalikda ishlashidan kelib chiqadi.",
        en: "People no longer acquire smallpox naturally today because the disease has been eradicated worldwide. This victory was achieved not by discovering a cure, but through vaccination, surveillance, rapid identification of cases, contact tracing, and international cooperation. The story of smallpox shows that some of medicine's greatest achievements do not come from a single drug or a single scientist, but from people around the world working together toward the same goal."
      }
    }
  ],

  nextCase: {
    uz: "Keyingi ish fayli: Miokard infarkti",
    en: "Next case: Myocardial Infarction"
  }
    }
  },
  {
    id: "mi", caseNo: "006", category: "cardio", categoryLabel: "Cardiovascular", stampStyle: "sage",
    stamp: { uz: "Nazorat qilinadi", en: "Manageable" },
    title: { uz: "Miokard infarkti", en: "Myocardial Infarction" },
    hook: { uz: "Yurak xuruji: bir vaqtlar o'lim hukmi, hozir esa aksariyat hollarda omon qolish mumkin.",
            en: "The heart attack: once a death sentence, now survivable in the vast majority of cases." },
    year: { uz: "1912", en: "1912" },
    detail: {
  quote: {
    uz: "Yurak xuruji bir necha daqiqada hayot uchun xavfli holatga aylanishi mumkin — ammo zamonaviy tibbiyot uni tez aniqlash va davolash orqali millionlab hayotlarni saqlab qolmoqda.",
    en: "A heart attack can become life-threatening within minutes — yet modern medicine can now save millions of lives by recognizing and treating it quickly."
  },

  vitals: [
    {
      label: { uz: "Tibbiyotda tan olingan davr", en: "Recognized in medicine" },
      value: { uz: "XIX–XX asrlar", en: "19th–20th centuries" }
    },
    {
      label: { uz: "Asosiy sabab", en: "Main cause" },
      value: { uz: "Yurakni oziqlantiruvchi arteriyaning to'silib qolishi", en: "Blockage of a coronary artery" }
    },
    {
      label: { uz: "Eng muhim xavf omili", en: "Major risk factor" },
      value: { uz: "Koronar arteriya kasalligi", en: "Coronary artery disease" }
    },
    {
      label: { uz: "Hozirgi holati", en: "Status today" },
      value: { uz: "Shoshilinch davolash bilan ko'p hollarda omon qolish mumkin", en: "Often survivable with rapid emergency treatment" }
    }
  ],

  sections: [
    {
      type: "text",
      no: "01",
      heading: {
        uz: "Kelib chiqish sabablari",
        en: "Origins & Causes"
      },
      paragraphs: [
         {
            uz: "Miokard infarkti, oddiy qilib aytganda, yurak mushagining bir qismi yetarli qon va kislorod ololmay qolganida yuz beradi. Yurakning o'zi ham doimiy ravishda kislorodga muhtoj, va bu ehtiyojni koronar arteriyalar deb ataladigan qon tomirlari ta'minlaydi. Ko'p hollarda bu arteriyalarning ichki devorida yillar davomida xolesterin, yog' va boshqa moddalar to'planib, aterosklerotik blyashka hosil qiladi. Agar blyashka yorilib ketsa, uning ustida qon ivishi — tromb — paydo bo'lishi va arteriyani to'sib qo'yishi mumkin. Qon oqimi to'xtagan sari yurak mushagi kislorodsiz qoladi va vaqt o'tishi bilan uning hujayralari nobud bo'la boshlaydi.",
          en: "A myocardial infarction, commonly called a heart attack, occurs when part of the heart muscle is suddenly deprived of enough blood and oxygen. The heart itself needs a constant oxygen supply, delivered through blood vessels called the coronary arteries. In many cases, cholesterol, fat, and other substances gradually build up inside these arteries, forming atherosclerotic plaques. If a plaque ruptures, a blood clot can form on top of it and block the artery. As blood flow stops, the heart muscle becomes starved of oxygen and its cells begin to die."
        },
        {
          uz: "Yurak xurujining xavfi yosh o'tishi bilan ortadi, ammo u faqat keksa odamlarda uchraydigan kasallik emas. Chekish, yuqori qon bosimi, yuqori xolesterin, diabet, ortiqcha vazn, kamharakat turmush tarzi va oilada yurak-qon tomir kasalliklarining bo'lishi xavfni oshiradi. Ba'zan kuchli jismoniy yoki hissiy stress ham mavjud yurak-qon tomir muammolari fonida xurujni qo'zg'atishi mumkin. Eng muhim jihat shundaki, yurak xuruji vaqtga juda bog'liq: qon oqimi qanchalik tez tiklansa, yurak mushagining shunchalik ko'p qismi saqlab qolinadi.",
          en: "The risk of a heart attack increases with age, but it is not exclusively a disease of older people. Smoking, high blood pressure, high cholesterol, diabetes, excess weight, physical inactivity, and a family history of cardiovascular disease can all increase the risk. Severe physical or emotional stress may also trigger an event in someone with underlying cardiovascular disease. Most importantly, a heart attack is a race against time: the sooner blood flow is restored, the more heart muscle can potentially be saved."
        }
      ]
    },

    {
      type: "timeline",
      no: "02",
      heading: {
        uz: "Tushuncha qanday o'zgargan",
        en: "How Understanding Changed"
      },
      items: [
         {
            era: {
            uz: "XVIII–XIX asrlar — Yevropa",
            en: "18th–19th centuries — Europe"
          },
          title: {
            uz: "Yurak og'rig'i hali sir edi",
            en: "Heart pain was still a mystery"
          },
          text: {
            uz: "Ko'krakdagi kuchli og'riq va to'satdan o'lim qadimdan ma'lum bo'lgan bo'lsa-da, shifokorlar uzoq vaqt davomida bu hodisalarning aniq sababini tushuntira olmadilar. Yurak kasalliklari haqidagi tushunchalar asosan bemorning belgilarini kuzatishga tayanardi. Yurakning o'zini tekshirish va qon tomirlarida nima sodir bo'layotganini ko'rish imkoniyati deyarli yo'q edi. Shu sababli ko'plab yurak xurujlari o'limdan keyingina taxmin qilingan.",
            en: "Severe chest pain and sudden death had been recognized for centuries, but physicians could not explain exactly what caused them. Understanding of heart disease relied largely on observing symptoms, because doctors had almost no way to examine the living heart or see what was happening inside the coronary arteries. As a result, many heart attacks were only suspected after death."
          }
        },
        {
          era: {
            uz: "1912 — AQSh",
            en: "1912 — United States"
          },
          title: {
            uz: "Yurak xuruji alohida klinik holat sifatida tasvirlanadi",
            en: "Heart attack becomes a distinct clinical condition"
          },
          text: {
            uz: "Amerikalik shifokor Jeyms Brayan Herrik koronar arteriyalarning to'silib qolishi yurak mushagiga zarar yetkazishi mumkinligini batafsil tasvirlab berdi. U yurak xurujining belgilari va uning koronar qon aylanishi bilan bog'liqligini tushuntirdi. Bu fikr keyinchalik yurak xurujini shunchaki \"to'satdan o'lim\" emas, balki aniq mexanizmga ega bo'lgan tibbiy holat sifatida tushunishga yordam berdi.",
            en: "American physician James Bryan Herrick described how blockage of the coronary arteries could damage the heart muscle. He explained the symptoms of myocardial infarction and connected them to disrupted coronary blood flow. His work helped establish the heart attack as a specific medical condition rather than simply a mysterious cause of sudden death."
          }
        },
        {
          era: {
             uz: "1950-yillar — AQSh",
            en: "1950s — United States"
          },
          title: {
            uz: "Yurak xurujidan keyin omon qolish imkoniyati o'zgaradi",
            en: "Survival after a heart attack begins to change"
          },
          text: {
            uz: "XX asrning o'rtalariga kelib shifokorlar yurak xurujidan keyingi dastlabki kunlar juda xavfli ekanini yaxshiroq tushuna boshladilar. Maxsus koronar bo'limlarda bemorlarning yurak urishi va boshqa muhim ko'rsatkichlari doimiy kuzatila boshlandi. Yurak ritmining xavfli buzilishlarini tezda aniqlash va davolash imkoniyati ko'plab bemorlarning hayotini saqlab qolishga yordam berdi.",
            en: "By the middle of the 20th century, doctors had begun to understand that the first days after a heart attack were particularly dangerous. Specialized coronary care units allowed patients' heart rhythms and vital signs to be continuously monitored. Being able to detect and treat dangerous rhythm disturbances quickly helped save many lives."
          }
        },
        {
          era: {
            uz: "1970–1980-yillar — Interventsion kardiologiya",
            en: "1970s–1980s — Interventional cardiology"
          },
          title: {
            uz: "To'silgan arteriyani ochish davri",
            en: "The era of reopening blocked arteries"
          },
          text: {
            uz: "Keyingi katta qadam qon oqimini to'g'ridan-to'g'ri tiklash usullarining rivojlanishi bo'ldi. Shifokorlar maxsus kateterlar yordamida yurak tomirlariga kirib, toraygan yoki to'silgan joyni aniqlash va ochish imkoniyatiga ega bo'ldilar. Angioplastika va keyinchalik stentlardan foydalanish yurak mushagiga qon yetkazilishini tiklashda muhim vositaga aylandi. Bu usullar ayniqsa tez bajarilganda yurak mushagining shikastlanishini kamaytirishi mumkin edi.",
            en: "The next major breakthrough was the development of techniques that could restore blood flow directly. Doctors learned to use specialized catheters to reach the coronary arteries, identify blockages, and reopen narrowed vessels. Angioplasty and later coronary stents became important tools for restoring blood supply to the heart. When performed quickly, these procedures could significantly reduce damage to the heart muscle."
          }
        },
        {
          era: {
            uz: "2000-yillar — Bugungi kun",
            en: "2000s — Today"
          },
          title: {
            uz: "Har bir daqiqa muhim",
            en: "Every minute matters"
          },
          text: {
             uz: "Bugungi kunda yurak xurujini aniqlash uchun EKG, qon tahlillari, ayniqsa troponin darajasi, va zarurat bo'lsa koronar angiografiya kabi usullar qo'llanadi. Yurak tomiri to'silib qolgan bemorlarda uni imkon qadar tez ochish, masalan, stent qo'yish orqali qon oqimini tiklash asosiy maqsadlardan biridir. Shuningdek, xolesterinni kamaytiruvchi dorilar, antitrombotik preparatlar va boshqa davolash usullari keyingi xuruj xavfini kamaytirishga yordam beradi. Eng katta o'zgarish shundaki, yurak xuruji endi ko'p hollarda darhol o'lim hukmi sifatida emas, balki tezkor tibbiy yordam talab qiladigan, ammo davolash mumkin bo'lgan favqulodda holat sifatida qaraladi.",
            en: "Today, heart attacks can be diagnosed using an ECG, blood tests — especially troponin levels — and, when necessary, coronary angiography. When an artery is blocked, restoring blood flow as quickly as possible, often by placing a stent, is a central goal of treatment. Cholesterol-lowering medicines, antithrombotic drugs, and other therapies can also reduce the risk of another event. The biggest change is that a heart attack is no longer automatically viewed as a death sentence, but as a medical emergency that can often be treated successfully when help arrives quickly."
          }
        }
      ]
    },

    {
      type: "living",
      no: "03",
      heading: {
        uz: "Bugun bu kasallik bilan yashash",
        en: "Living With It Today"
      },
      title: {
        uz: "Xurujdan keyingi hayot ham davolashning bir qismi",
        en: "Life after a heart attack is part of the treatment too"
      },
      text: {
        uz: "Yurak xurujidan omon qolish davolashning oxiri emas. Bemorlar ko'pincha shifokor nazorati ostida yurak reabilitatsiyasidan o'tadi, dori-darmonlarni muntazam qabul qiladi va qon bosimi, xolesterin hamda qand miqdorini nazorat qiladi. Chekishni tashlash, sog'lom ovqatlanish va shifokor tavsiya qilgan jismoniy faollik ham keyingi yurak xuruji xavfini kamaytirishda muhim rol o'ynaydi. Eng muhimi, ko'krakda bosuvchi yoki siquvchi og'riq, nafas qisishi, sovuq ter bosishi yoki to'satdan kuchli holsizlik kabi belgilar paydo bo'lsa, vaqtni boy bermasdan shoshilinch tibbiy yordam chaqirish kerak.",
        en: "Surviving a heart attack is not the end of treatment. Patients often take part in cardiac rehabilitation, continue prescribed medicines, and monitor blood pressure, cholesterol, and blood sugar under medical supervision. Stopping smoking, eating a heart-healthy diet, and gradually becoming physically active as advised by a doctor can all reduce the risk of another heart attack. Most importantly, symptoms such as pressure or squeezing in the chest, shortness of breath, cold sweating, or sudden severe weakness require urgent medical attention."
      }
    }
  ],

  nextCase: {
    uz: "Keyingi ish fayli: 1-turdagi qandli diabet",
    en: "Next case: Type 1 Diabetes"
  }
    }
  },
  {
    id: "t1d", caseNo: "007", category: "autoimmune", categoryLabel: "Autoimmune", stampStyle: "",
    stamp: { uz: "Surunkali", en: "Chronic" },
    title: { uz: "1-turdagi qandli diabet", en: "Type 1 Diabetes" },
    hook: { uz: "Tananing o'z himoya tizimi oshqozon osti beziga qarshi chiqadi — 1921-yilgi kashfiyot bemorlarga o'nlab yillar qaytardi.",
            en: "The body's own defenses turn against the pancreas — until a 1921 discovery gave patients decades back." },
    year: { uz: "1889", en: "1889" },
    detail: {
  quote: {
    uz: "1921-yilgacha 1-turdagi qandli diabet tashxisi deyarli o'lim hukmi edi. Insulinning kashf etilishi esa bu kasallik tarixini butunlay o'zgartirib yubordi.",
    en: "Until 1921, a diagnosis of type 1 diabetes was essentially a death sentence. The discovery of insulin completely changed the course of the disease."
  },

  vitals: [
    {
      label: { uz: "Ilmiy burilish", en: "Scientific breakthrough" },
      value: { uz: "1889, pankreas va diabet o'rtasidagi bog'liqlik", en: "1889, the link between the pancreas and diabetes" }
    },
    {
      label: { uz: "Insulin kashfiyoti", en: "Insulin discovery" },
      value: { uz: "1921, Toronto, Kanada", en: "1921, Toronto, Canada" }
    },
    {
      label: { uz: "Asosiy muammo", en: "Core problem" },
      value: { uz: "Immun tizimi insulin ishlab chiqaruvchi beta-hujayralarga hujum qiladi", en: "The immune system attacks insulin-producing beta cells" }
    },
    {
      label: { uz: "Holati", en: "Status" },
      value: { uz: "Surunkali, insulin bilan boshqariladi; to'liq davosi yo'q", en: "Chronic, manageable with insulin; no cure yet" }
    }
  ],

  sections: [
    {
      type: "text",
      no: "01",
      heading: {
        uz: "Kelib chiqish sabablari",
        en: "Origins & Causes"
      },
      paragraphs: [
         {
            uz: "1-turdagi qandli diabetda muammo oddiygina qonda shakar ko'payib ketishidan iborat emas — uning markazida insulin yetishmovchiligi turadi. Insulin oshqozon osti bezidagi Langerhans orolchalarining beta-hujayralari tomonidan ishlab chiqariladigan gormon bo'lib, u glyukozaning qondan hujayralarga kirib, energiya sifatida ishlatilishiga yordam beradi. 1-turdagi diabetda immun tizimi xato qilib aynan shu beta-hujayralarni begona narsa deb qabul qiladi va ularga hujum qiladi. Vaqt o'tishi bilan insulin ishlab chiqarish keskin kamayadi yoki deyarli butunlay to'xtaydi. Natijada glyukoza hujayralarga yetarlicha kira olmaydi va qonda to'planib boradi.",
          en: "Type 1 diabetes is not simply a problem of having too much sugar in the blood — at its core is a severe lack of insulin. Insulin is a hormone produced by beta cells in the pancreatic islets, and it helps glucose move from the bloodstream into cells where it can be used for energy. In type 1 diabetes, the immune system mistakenly identifies these beta cells as a threat and attacks them. Over time, insulin production falls dramatically or stops almost completely. Glucose can no longer enter cells properly and begins accumulating in the bloodstream."
        },
        {
          uz: "Kasallikning aniq sababi hali to'liq tushunilmagan. Genetik moyillik muhim rol o'ynaydi, ammo ma'lum bir genning mavjudligi kasallik albatta rivojlanadi degani emas. Olimlar ayrim virusli infeksiyalar yoki boshqa atrof-muhit omillari immun tizimidagi ushbu noto'g'ri reaksiyani qo'zg'atishi mumkin deb hisoblaydi. Muhim jihati shundaki, 1-turdagi diabetni shirinlik ko'p yeyish, dangasalik yoki noto'g'ri ovqatlanish keltirib chiqarmaydi. U bolalar va o'smirlarda ko'proq aniqlansa-da, istalgan yoshda boshlanishi mumkin.",
          en: "The exact cause of type 1 diabetes is still not fully understood. Genetic susceptibility plays an important role, but carrying certain genes does not mean that a person will definitely develop the disease. Researchers believe that environmental triggers, including some viral infections, may help activate the mistaken immune response. Crucially, type 1 diabetes is not caused by eating too much sugar, being inactive, or having an unhealthy diet. Although it is often diagnosed in children and teenagers, it can begin at any age."
        }
      ]
    },

    {
      type: "timeline",
      no: "02",
      heading: {
        uz: "Tushuncha qanday o'zgargan",
        en: "How Understanding Changed"
      },
      items: [
        {
          era: {
            uz: "Qadimgi davrlar — XIX asr",
            en: "Antiquity — 19th century"
          },
          title: {
             uz: "Chanqoq, ko'p siyish va tushunarsiz kasallik",
            en: "Thirst, excessive urination, and a mysterious disease"
          },
          text: {
            uz: "Diabetning ayrim belgilarini insoniyat minglab yillar davomida kuzatib kelgan. Qadimgi hind va misr tibbiyotida haddan tashqari chanqash va ko'p siyish kabi belgilar tasvirlangan. XIX asrga kelib esa shifokorlar diabetni yaxshiroq ajrata boshladilar, ammo uning asl sababi va oshqozon osti bezining roli hali ham sir bo'lib qolayotgan edi. Insulin mavjudligi haqida esa amaliy davolash imkoniyati yo'q edi.",
            en: "Some symptoms of diabetes had been recognized for thousands of years. Ancient Indian and Egyptian medical writings described excessive thirst and frequent urination. By the 19th century, physicians were becoming better at recognizing diabetes as a distinct condition, but its underlying cause and the role of the pancreas remained a mystery. There was still no practical treatment capable of replacing the missing hormone."
          }
        },

        {
          era: {
            uz: "1889 — Strasburg",
            en: "1889 — Strasbourg"
          },
          title: {
            uz: "Pankreas sirning markazida ekanligi aniqlanadi",
            en: "The pancreas becomes the center of the mystery"
          },
          text: {
            uz: "Oskar Minkovski va Jozef fon Mering itning oshqozon osti bezini olib tashlaganidan keyin hayvonda diabetga o'xshash belgilar paydo bo'lganini kuzatishdi. Bu tajriba pankreas va qondagi glyukoza nazorati o'rtasida kuchli bog'liqlik borligini ko'rsatdi. Keyingi tadqiqotchilar oshqozon osti bezida qondagi shakarni boshqaruvchi qandaydir noma'lum modda mavjud bo'lishi kerak degan fikrga kelishdi. Aynan shu izlanishlar keyinchalik insulin kashfiyotiga olib boradigan ilmiy yo'lni ochdi.",
            en: "Oskar Minkowski and Joseph von Mering observed that removing a dog's pancreas caused the animal to develop symptoms resembling diabetes. Their experiment revealed a powerful connection between the pancreas and blood-glucose regulation. Researchers began to suspect that the pancreas contained an unknown substance responsible for controlling blood sugar. This line of investigation eventually opened the path toward the discovery of insulin."
          }
        },

        {
          era: {
            uz: "1921 — Toronto, Kanada",
            en: "1921 — Toronto, Canada"
          },
          title: {
            uz: "Insulin izidan",
            en: "The search for insulin"
          },
           text: {
            uz: "Frederick Banting Toronto universitetida professor Jon Makleod bilan bog'lanib, oshqozon osti bezidan diabetni davolashga yordam beradigan moddani ajratish bo'yicha tajribalarni boshladi. Talaba Charlz Best unga yordam berdi. Ular pankreasi olib tashlangan itlarda maxsus pankreatik ekstraktni sinab ko'rib, qondagi glyukoza miqdori pasayganini kuzatishdi. Keyinchalik biokimyogar Jeyms Kollip ekstraktni yanada tozalab, uni insonlarda qo'llashga yaroqli holga keltirishda muhim rol o'ynadi.",
            en: "At the University of Toronto, Frederick Banting approached professor John Macleod with an idea for isolating a substance from the pancreas that could treat diabetes. Medical student Charles Best joined him in the experiments. They tested pancreatic extracts in dogs whose pancreases had been removed and observed falling blood-glucose levels. Biochemist James Collip later played a crucial role in purifying the extract enough for human use."
          }
        },

        {
          era: {
            uz: "1922 — Toronto General Hospital",
            en: "1922 — Toronto General Hospital"
          },
          title: {
            uz: "Insulin birinchi marta bemorni qutqaradi",
            en: "Insulin saves a patient for the first time"
          },
          text: {
            uz: "1922-yil yanvar oyida 13 yoshli Leonard Tompson insulin ekstrakti bilan davolangan birinchi bemor bo'ldi. Dastlabki ekstrakt yetarlicha toza bo'lmagani sababli natija kutilganidek bo'lmadi. Kollip ekstraktni yanada tozalagach, keyingi in'eksiyalar bemorning qondagi glyukoza darajasini tushirdi va diabetning hayot uchun xavfli belgilarini yengillashtirdi. Bir necha yil oldin bunday tashxis deyarli muqarrar o'lim bilan yakunlangan bo'lsa, endi bemorga hayotini davom ettirish imkoniyati paydo bo'ldi.",
            en: "In January 1922, 13-year-old Leonard Thompson became the first patient to receive insulin extract as a treatment. The initial preparation was not pure enough and produced disappointing results. After James Collip improved the purification process, later injections lowered Thompson's blood glucose and relieved the dangerous effects of diabetes. A diagnosis that had once meant almost certain death could now be followed by years of life."
          }
        },

        {
          era: {
            uz: "1923 — Nobel mukofoti va undan keyin",
            en: "1923 — Nobel Prize and beyond"
          },
          title: {
            uz: "Bir kashfiyot butun kasallik tarixini o'zgartiradi",
            en: "One discovery changes the history of the disease"
          },
          text: {
             uz: "1923-yilda Frederick Banting va Jon Makleod fiziologiya yoki tibbiyot bo'yicha Nobel mukofotiga sazovor bo'ldi va Banting mukofot pulini Charlz Best bilan, Makleod esa Jeyms Kollip bilan bo'lishdi. Insulin ishlab chiqarishni sanoat miqyosida yo'lga qo'yish esa uni tobora ko'proq bemorlarga yetkazish imkonini berdi. Keyingi o'n yilliklarda insulin turlari, yuborish usullari va qon glyukozasini nazorat qilish texnologiyalari rivojlandi. Bugungi kunda esa tadqiqotlar nafaqat kasallikni boshqarish, balki uning rivojlanishini erta bosqichda kechiktirish va kelajakda beta-hujayralarni saqlab qolish yoki tiklash imkoniyatlarini izlashga ham qaratilgan.",
            en: "In 1923, Frederick Banting and John Macleod received the Nobel Prize in Physiology or Medicine, with Banting sharing his prize money with Charles Best and Macleod sharing his with James Collip. Industrial production then made insulin available to growing numbers of patients. Over the following decades, insulin formulations, delivery methods, and glucose-monitoring technologies continued to improve. Today, researchers are looking beyond management toward delaying disease progression at an early stage and eventually preserving or restoring insulin-producing beta cells."
          }
        }
      ]
    },

    {
      type: "living",
      no: "03",
      heading: {
        uz: "Bugun bu kasallik bilan yashash",
        en: "Living With It Today"
      },
      title: {
        uz: "Insulin — kundalik hayotning bir qismi",
        en: "Insulin becomes part of everyday life"
      },
      text: {
        uz: "Bugungi kunda 1-turdagi diabet bilan yashayotgan inson insulin yordamida to'liq va faol hayot kechirishi mumkin. Insulin in'eksiyasi yoki insulin pompasi orqali organizmga kerakli gormon yetkazib beriladi, glyukoza esa muntazam ravishda nazorat qilinadi. Zamonaviy uzluksiz glyukoza monitoringi va insulin pompasi kabi texnologiyalar kundalik boshqaruvni ancha qulaylashtirdi. Shunga qaramay, bu hali ham doimiy e'tibor talab qiladigan kasallik: insulin dozasi, ovqatlanish, jismoniy faollik, stress va boshqa omillar qondagi glyukoza darajasiga ta'sir qilishi mumkin.",
        en: "Today, people with type 1 diabetes can live full and active lives with insulin therapy. Insulin is supplied through injections or an insulin pump, while glucose levels are monitored regularly. Technologies such as continuous glucose monitors and modern insulin pumps have made day-to-day management much easier. Even so, type 1 diabetes remains a condition that requires constant attention: insulin doses, food, physical activity, stress, and many other factors can all affect blood-glucose levels."
      }
    }
  ],

  nextCase: {
    uz: "Keyingi ish fayli: 2-turdagi qandli diabet",
    en: "Next case: Type 2 Diabetes"
  }
    }
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
