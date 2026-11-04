/* =========================================================
   RAID PREMIUM — 15 TA PROFESSIONAL SLAYD
   Muallif: Muhammadjonov Mutaljon
   ========================================================= */

window.RAID_SLIDES = [

  // 1. KIRISH
  {
    type: "content",
    title: "RAID TEXNOLOGIYALARI",
    subtitle: "Ma’lumotlarni saqlash, himoyalash va tezkor ishlash tizimlari",
    lead: "Bir nechta fizik disklarni yagona mantiqiy tizimga birlashtirish texnologiyasi.",
    sections: [
      {
        heading: "RAID nima?",
        body: "RAID — Redundant Array of Independent Disks. Bir nechta disk yordamida ma’lumotlarni samarali saqlash usuli.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
        imageAlt: "Server infratuzilmasi"
      },
      {
        heading: "Asosiy maqsad",
        body: "Ishlash tezligini oshirish, ma’lumotlarni himoyalash va tizim ishonchliligini yaxshilash.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
        imageAlt: "Elektron qurilmalar"
      },
      {
        heading: "Qo‘llanilish sohasi",
        body: "Serverlar, ma’lumotlar markazlari, korporativ tizimlar va katta hajmdagi ma’lumotlar omborlari.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900",
        imageAlt: "Raqamli infratuzilma"
      }
    ],
    note: "RAID — zaxira nusxa (backup) o‘rnini bosmaydi."
  },

  // 2. HDD SSD NVME
  {
    type: "content",
    title: "SAQLASH QURILMALARI",
    subtitle: "RAID tizimining asosiy apparat komponentlari",
    lead: "RAID massivini tashkil etishda turli xil saqlash qurilmalaridan foydalaniladi.",
    sections: [
      {
        heading: "HDD — qattiq disk",
        body: "Magnit plastinalar asosida ishlaydi. Katta hajmli ma’lumotlarni nisbatan arzon saqlash uchun ishlatiladi.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        imageAlt: "Qattiq disk HDD"
      },
      {
        heading: "SSD — tezkor xotira qurilmasi",
        body: "Flash xotira asosida ishlaydi. Mexanik harakatlanuvchi qismlari yo‘q va HDD ga qaraganda tezroq.",
        image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=900",
        imageAlt: "SSD xotira qurilmasi"
      },
      {
        heading: "NVMe — yuqori tezlik",
        body: "PCIe interfeysi orqali ishlaydigan yuqori tezlikdagi SSD texnologiyasi.",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=900",
        imageAlt: "Kompyuter komponentlari"
      }
    ],
    note: "Bir RAID massivida turli disklarni aralashtirishdan oldin moslik va ishlash xususiyatlarini tekshirish kerak."
  },

  // 3. DAS NAS SAN
  {
    type: "content",
    title: "SAQLASH ARXITEKTURALARI",
    subtitle: "DAS, NAS va SAN texnologiyalari",
    sections: [
      {
        heading: "DAS",
        body: "Direct Attached Storage — server yoki kompyuterga bevosita ulangan saqlash qurilmasi.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        imageAlt: "Disk qurilmasi"
      },
      {
        heading: "NAS",
        body: "Network Attached Storage — lokal tarmoq orqali bir nechta foydalanuvchiga fayllarni taqdim etadi.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
        imageAlt: "Tarmoq serveri"
      },
      {
        heading: "SAN",
        body: "Storage Area Network — serverlar va saqlash qurilmalari o‘rtasida maxsus yuqori tezlikdagi tarmoq.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900",
        imageAlt: "Tarmoq infratuzilmasi"
      }
    ],
    note: "DAS — bevosita ulanish, NAS — fayl darajasidagi tarmoq xizmati, SAN — blok darajasidagi saqlash tarmog‘i."
  },

  // 4. RAID ARXITEKTURASI
  {
    type: "content",
    title: "RAID ARXITEKTURASI",
    subtitle: "Bir nechta disk — yagona mantiqiy tizim",
    lead: "RAID kontrolleri yoki dasturiy ta’minot disklar o‘rtasida ma’lumotlarni taqsimlaydi.",
    sections: [
      {
        heading: "Fizik disklar",
        body: "Tizimga ikki yoki undan ortiq fizik disk ulanadi.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        imageAlt: "Fizik saqlash disklari"
      },
      {
        heading: "RAID kontrolleri",
        body: "Disklar ishini boshqaradi, ma’lumotlarni taqsimlaydi va tanlangan RAID darajasini amalga oshiradi.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
        imageAlt: "Elektron boshqaruv qurilmalari"
      },
      {
        heading: "Mantiqiy disk",
        body: "Operatsion tizim bir nechta diskni yagona saqlash qurilmasi sifatida ko‘rishi mumkin.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
        imageAlt: "Server tizimi"
      }
    ],
    note: "RAID apparat kontrolleri yoki dasturiy RAID orqali tashkil qilinishi mumkin."
  },

  // 5. RAID ASOSLARI
  {
    type: "content",
    title: "RAID ISHLASH TAMOYILLARI",
    subtitle: "Striping, Mirroring, Parity va XOR",
    sections: [
      {
        heading: "Striping",
        body: "Ma’lumotlar bloklarga bo‘linib, bir nechta diskka parallel yoziladi. Tezlikni oshirishga yordam beradi.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
        imageAlt: "Ma’lumotlar markazi"
      },
      {
        heading: "Mirroring",
        body: "Bir xil ma’lumot ikki yoki undan ortiq diskka nusxalanadi. Disklardan biri ishdan chiqsa, ikkinchisi ishlashda davom etishi mumkin.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        imageAlt: "Disklar"
      },
      {
        heading: "Parity va XOR",
        body: "Maxsus nazorat ma’lumotlari yordamida disk nosozligida ma’lumotlarni qayta tiklash imkoniyati yaratiladi.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
        imageAlt: "Elektron hisoblash tizimi"
      }
    ],
    note: "RAID darajalari ushbu tamoyillarning turli kombinatsiyalaridan foydalanadi."
  },

  // 6. RAID 0
  {
    type: "content",
    title: "RAID 0 — STRIPING",
    subtitle: "Maksimal tezlik, lekin ma’lumotlar himoyasisiz",
    lead: "RAID 0 ma’lumotlarni bloklarga bo‘lib, disklar o‘rtasida taqsimlaydi.",
    sections: [
      {
        heading: "Ishlash prinsipi",
        body: "Ma’lumotlar navbatma-navbat birinchi va ikkinchi diskka yoziladi. O‘qish va yozish parallel bajarilishi mumkin.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
        imageAlt: "Server disklari"
      },
      {
        heading: "Afzalligi",
        body: "Yuqori tezlik va disklar umumiy sig‘imidan to‘liq foydalanish.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
        imageAlt: "Kompyuter texnologiyasi"
      },
      {
        heading: "Kamchiligi",
        body: "Bitta disk ishdan chiqsa, butun massivdagi ma’lumotlar yo‘qolishi mumkin.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        imageAlt: "Saqlash qurilmasi"
      }
    ],
    note: "RAID 0 da nosozlikka chidamlilik mavjud emas."
  },

  // 7. RAID 1
  {
    type: "content",
    title: "RAID 1 — MIRRORING",
    subtitle: "Ma’lumotlarni nusxalash orqali himoyalash",
    lead: "RAID 1 bir xil ma’lumotni ikki yoki undan ortiq diskda saqlaydi.",
    sections: [
      {
        heading: "Ishlash prinsipi",
        body: "Ma’lumot birinchi diskka yozilganda, ayni nusxasi ikkinchi diskka ham yoziladi.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        imageAlt: "Disklar massivi"
      },
      {
        heading: "Afzalligi",
        body: "Bitta disk ishdan chiqsa, ikkinchi diskdan foydalanish mumkin.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
        imageAlt: "Server saqlash tizimi"
      },
      {
        heading: "Kamchiligi",
        body: "Ikki disk ishlatilganda foydali sig‘im umumiy sig‘imning taxminan yarmiga teng bo‘ladi.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
        imageAlt: "Elektron komponentlar"
      }
    ],
    note: "RAID 1 uchun kamida 2 ta disk talab qilinadi."
  },

  // 8. RAID 5 VA 6
  {
    type: "content",
    title: "RAID 5 VA RAID 6",
    subtitle: "Parity asosida ma’lumotlarni tiklash",
    sections: [
      {
        heading: "RAID 5",
        body: "Kamida 3 ta disk talab qilinadi. Parity ma’lumotlari disklar bo‘ylab taqsimlanadi. Bitta disk nosozligiga bardosh beradi.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
        imageAlt: "Server tizimi"
      },
      {
        heading: "RAID 6",
        body: "Kamida 4 ta disk talab qilinadi. Ikki xil parity ma’lumoti saqlanadi va ikkita disk nosozligiga bardosh beradi.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        imageAlt: "Disklar tizimi"
      },
      {
        heading: "XOR amali",
        body: "XOR matematik amali parity hisoblashda ishlatiladi. Yo‘qolgan blokni boshqa bloklar va parity yordamida tiklash mumkin.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
        imageAlt: "Elektron hisoblash"
      }
    ],
    note: "RAID 5 bir disk, RAID 6 esa ikki disk nosozligiga bardosh beradi."
  },

  // 9. RAID 10 50 60
  {
    type: "content",
    title: "RAID 10, RAID 50 VA RAID 60",
    subtitle: "Kombinatsiyalangan RAID darajalari",
    sections: [
      {
        heading: "RAID 10",
        body: "RAID 1 va RAID 0 kombinatsiyasi. Mirroring va Striping birgalikda ishlaydi. Kamida 4 ta disk talab qilinadi.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
        imageAlt: "Server infratuzilmasi"
      },
      {
        heading: "RAID 50",
        body: "Bir nechta RAID 5 guruhlari ustida Striping tashkil etiladi. Tezlik va nosozlikka chidamlilikni birlashtiradi.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        imageAlt: "Disk massivi"
      },
      {
        heading: "RAID 60",
        body: "Bir nechta RAID 6 guruhlari ustida Striping ishlatiladi. Katta saqlash tizimlarida qo‘llaniladi.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900",
        imageAlt: "Ma’lumotlar markazi"
      }
    ],
    note: "RAID 10, 50 va 60 murakkabroq saqlash tizimlarida qo‘llaniladi."
  },

  // 10. SIG'IM HISOBLASH
  {
    type: "content",
    title: "RAID SIG‘IMINI HISOBLASH",
    subtitle: "Disklar soni va foydali xotira hajmi",
    sections: [
      {
        heading: "RAID 0",
        body: "Foydali sig‘im = N × S. Masalan, 4 ta 1 TB disk = 4 TB.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        imageAlt: "Disk qurilmalari"
      },
      {
        heading: "RAID 1",
        body: "Ikki bir xil diskli mirror tizimida foydali sig‘im = S. Masalan, 2 ta 1 TB disk = 1 TB.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
        imageAlt: "Server saqlash tizimi"
      },
      {
        heading: "RAID 5 va 6",
        body: "RAID 5: (N − 1) × S. RAID 6: (N − 2) × S. Bu formulalar teng hajmli disklar uchun qo‘llanadi.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
        imageAlt: "Texnik hisoblash qurilmalari"
      }
    ],
    note: "N — disklar soni, S — eng kichik diskning sig‘imi. Amaldagi foydali hajm formatlash va tizim xarajatlari sabab biroz farq qilishi mumkin."
  },

  // 11. NOSOZLIK VA REBUILD
  {
    type: "content",
    title: "DISK NOSOZLIGI VA REBUILD",
    subtitle: "RAID tizimining uzluksiz ishlash jarayoni",
    sections: [
      {
        heading: "Degraded Mode",
        body: "Massivdagi disk nosoz bo‘lganda, RAID tizimi cheklangan himoya bilan ishlashda davom etishi mumkin.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
        imageAlt: "Server uskunalari"
      },
      {
        heading: "Rebuild",
        body: "Nosoz disk almashtirilgach, qolgan disklardagi ma’lumotlardan foydalanib yangi diskdagi ma’lumotlar qayta tiklanadi.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        imageAlt: "Disklarni tiklash"
      },
      {
        heading: "SMART monitoring",
        body: "SMART texnologiyasi diskning texnik holati va ayrim nosozlik belgilarini kuzatishga yordam beradi.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
        imageAlt: "Kompyuter monitoringi"
      }
    ],
    note: "RAID ma’lumotlarni zaxiralashning to‘liq o‘rnini bosmaydi. Muhim fayllar uchun alohida backup zarur."
  },

  // 12. PYTHON STRIPING
  {
    type: "code",
    title: "PYTHONDA RAID 0 — STRIPING",
    subtitle: "Ma’lumotlarni disklar orasida taqsimlash",
    lead: "Quyidagi dastur ma’lumotlar bloklarini ikki diskka navbatma-navbat taqsimlaydi.",
    codeLanguage: "Python",
    code: `# RAID 0 — STRIPING

data = ["A", "B", "C", "D", "E", "F"]

disk1 = []
disk2 = []

for index, block in enumerate(data):
    if index % 2 == 0:
        disk1.append(block)
    else:
        disk2.append(block)

print("Disk 1:", disk1)
print("Disk 2:", disk2)

print("Umumiy ma'lumot:", data)`,
    explanation: [
      "data ro‘yxatida saqlanadigan ma’lumot bloklari berilgan.",
      "disk1 va disk2 ikkita alohida diskni ifodalaydi.",
      "enumerate() blokning indeksini aniqlaydi.",
      "Indeks juft bo‘lsa, blok birinchi diskka yoziladi.",
      "Indeks toq bo‘lsa, blok ikkinchi diskka yoziladi.",
      "Natijada ma’lumotlar ikki diskka navbat bilan taqsimlanadi."
    ],
    note: "Bu kod RAID 0 tamoyilini soddalashtirib ko‘rsatadi. U haqiqiy disklarni boshqarmaydi."
  },

  // 13. PYTHON XOR
  {
    type: "code",
    title: "PYTHONDA XOR VA PARITY",
    subtitle: "RAID 5 ning asosiy matematik tamoyili",
    lead: "XOR amali yordamida parity ma’lumoti hisoblanadi.",
    codeLanguage: "Python",
    code: `# RAID 5 — XOR PARITY

disk1 = 10
disk2 = 20
disk3 = 30

parity = disk1 ^ disk2 ^ disk3

print("Disk 1:", disk1)
print("Disk 2:", disk2)
print("Disk 3:", disk3)

print("Parity:", parity)

# Disk 2 yo'qolgan holat
recovered = disk1 ^ disk3 ^ parity

print("Tiklangan disk 2:", recovered)`,
    explanation: [
      "disk1, disk2 va disk3 ma’lumot qiymatlarini ifodalaydi.",
      "^ belgisi Python tilida XOR amalini bajaradi.",
      "Uchta qiymat ustida XOR bajarilib parity olinadi.",
      "Agar bitta qiymat yo‘qolsa, qolgan qiymatlar va parity orqali uni tiklash mumkin.",
      "recovered o‘zgaruvchisi tiklangan qiymatni saqlaydi."
    ],
    note: "Bu matematik namuna. Haqiqiy RAID 5 tizimida parity bloklar bo‘ylab taqsimlanadi va ma’lumotlar baytlar ketma-ketligi sifatida qayta ishlanadi."
  },

  // 14. PYTHON SIG'IM KALKULYATORI
  {
    type: "code",
    title: "RAID SIG‘IM KALKULYATORI",
    subtitle: "Python yordamida foydali xotira hajmini aniqlash",
    lead: "Ushbu dastur RAID 0, 1, 5 va 6 uchun nazariy foydali sig‘imni hisoblaydi.",
    codeLanguage: "Python",
    code: `# RAID CAPACITY CALCULATOR

disk_count = 4
disk_size = 1  # TB

def raid_capacity(level, n, size):

    if level == 0:
        return n * size

    elif level == 1:
        return size

    elif level == 5:
        if n < 3:
            return "Kamida 3 disk kerak"
        return (n - 1) * size

    elif level == 6:
        if n < 4:
            return "Kamida 4 disk kerak"
        return (n - 2) * size

    return "Noto'g'ri RAID darajasi"


for level in [0, 1, 5, 6]:
    result = raid_capacity(
        level,
        disk_count,
        disk_size
    )

    print(f"RAID {level}: {result} TB")`,
    explanation: [
      "disk_count — massivdagi disklar soni.",
      "disk_size — bitta diskning sig‘imi.",
      "raid_capacity() funksiyasi RAID darajasini qabul qiladi.",
      "Har bir RAID turi uchun alohida formula ishlatiladi.",
      "RAID 5 va RAID 6 uchun minimal disk soni tekshiriladi.",
      "Sikl barcha RAID darajalari uchun natijani chiqaradi."
    ],
    note: "Misolda 4 ta 1 TB disk ishlatilgan. RAID 1 hisoblashida ikki diskli mirror yoki undan ko‘p diskli mirror guruhining foydali sig‘imi nazarda tutilgan."
  },

  // 15. XULOSA
  {
    type: "conclusion",
    title: "XULOSA",
    subtitle: "RAID — zamonaviy ma’lumotlarni saqlash texnologiyasining muhim qismi",
    lead: "To‘g‘ri RAID darajasini tanlash tizimning tezligi, sig‘imi va ishonchliligiga bevosita ta’sir qiladi.",
    points: [
      "RAID bir nechta fizik diskni yagona mantiqiy tizimga birlashtiradi.",
      "RAID 0 yuqori tezlikni ta’minlaydi, lekin nosozlikdan himoya qilmaydi.",
      "RAID 1 ma’lumotlarni nusxalash orqali himoyalaydi.",
      "RAID 5 va RAID 6 parity yordamida ma’lumotlarni tiklash imkonini beradi.",
      "RAID 10 tezlik va ishonchlilikni birlashtiradi.",
      "Python yordamida RAID algoritmlarining asosiy tamoyillarini modellashtirish mumkin."
    ],
    finalMessage: "E’TIBORINGIZ UCHUN RAHMAT!",
    note: "Savollar bo‘lsa, marhamat!"
  }

];

console.info(
  "RAID PREMIUM: " +
  window.RAID_SLIDES.length +
  " ta slayd yuklandi." 
);
/* ============================================
   RAID PREMIUM — HAR BIR SLAYDGA ALOHIDA RASM
============================================ */

const raidSlideImages = [
    // 1. RAID texnologiyalari
    [
        ["1558494949-ef010cbdcc31", "Server infratuzilmasi"],
        ["1518770660439-4636190af475", "Elektron qurilmalar"],
        ["1451187580459-43490279c0fa", "Raqamli infratuzilma"]
    ],

    // 2. HDD, SSD, NVMe
    [
        ["1597872200969-2b65d56bd16b", "HDD qattiq disk"],
        ["1531492746076-161ca9bcad58", "SSD xotira"],
        ["1591488320449-011701bb6704", "NVMe va kompyuter komponentlari"]
    ],

    // 3. DAS, NAS, SAN
    [
        ["1597872200969-2b65d56bd16b", "DAS disk qurilmasi"],
        ["1558494949-ef010cbdcc31", "NAS tarmoq serveri"],
        ["1451187580459-43490279c0fa", "SAN tarmoq infratuzilmasi"]
    ],

    // 4. RAID arxitekturasi
    [
        ["1597872200969-2b65d56bd16b", "Fizik disklar"],
        ["1518770660439-4636190af475", "RAID kontrolleri"],
        ["1558494949-ef010cbdcc31", "Mantiqiy saqlash tizimi"]
    ],

    // 5. Striping, Mirroring, Parity
    [
        ["1518770660439-4636190af475", "Ma'lumotlarni taqsimlash"],
        ["1597872200969-2b65d56bd16b", "Disklarni nusxalash"],
        ["1485827404703-89b55fcc595e", "Parity hisoblash"]
    ],

    // 6. RAID 0
    [
        ["1558494949-ef010cbdcc31", "RAID 0 server tizimi"],
        ["1518770660439-4636190af475", "Yuqori tezlikdagi elektronika"],
        ["1597872200969-2b65d56bd16b", "Disk nosozligi"]
    ],

    // 7. RAID 1
    [
        ["1597872200969-2b65d56bd16b", "Disk mirroring"],
        ["1558494949-ef010cbdcc31", "Zaxiralangan server"],
        ["1531492746076-161ca9bcad58", "Xotira qurilmalari"]
    ],

    // 8. RAID 5 va RAID 6
    [
        ["1558494949-ef010cbdcc31", "RAID 5 server"],
        ["1597872200969-2b65d56bd16b", "RAID 6 disk massivi"],
        ["1518770660439-4636190af475", "XOR va parity"]
    ],

    // 9. RAID 10, 50, 60
    [
        ["1558494949-ef010cbdcc31", "RAID 10"],
        ["1597872200969-2b65d56bd16b", "RAID 50"],
        ["1451187580459-43490279c0fa", "RAID 60 infratuzilmasi"]
    ],

    // 10. RAID sig'imini hisoblash
    [
        ["1597872200969-2b65d56bd16b", "Disk sig'imi"],
        ["1558494949-ef010cbdcc31", "Xotira taqsimoti"],
        ["1518770660439-4636190af475", "Hisoblash qurilmalari"]
    ],

    // 11. Nosozlik va Rebuild
    [
        ["1558494949-ef010cbdcc31", "Server nosozligi"],
        ["1597872200969-2b65d56bd16b", "Diskni qayta tiklash"],
        ["1518770660439-4636190af475", "SMART monitoring"]
    ]
];

// Rasmlarni slaydlarga biriktirish
raidSlideImages.forEach((slideImages, slideIndex) => {
    const slide = window.RAID_SLIDES[slideIndex];

    if (!slide || !slide.sections) return;

    slide.sections.forEach((section, sectionIndex) => {
        const imageData = slideImages[sectionIndex];

        if (!imageData) return;

        section.image =
            `https://images.unsplash.com/photo-${imageData[0]}?auto=format&fit=crop&w=1000&q=85`;

        section.imageAlt = imageData[1];
    });
});

// Kodli slaydlar uchun alohida rasmlar
const codeSlideImages = [
    {
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=85",
        imageAlt: "Python dasturlash kodi"
    },
    {
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1000&q=85",
        imageAlt: "XOR va algoritmlar"
    },
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
        imageAlt: "Ma'lumotlarni hisoblash"
    }
];

codeSlideImages.forEach((data, index) => {
    const slide = window.RAID_SLIDES[index + 11];

    if (slide) {
        slide.image = data.image;
        slide.imageAlt = data.imageAlt;
    }
});

console.info("RAID PREMIUM: Rasmlar mavzular bo‘yicha biriktirildi.");

/* ==========================================
   RAID PREMIUM — UNIQUE TOPIC ILLUSTRATIONS
   Har bir slaydga alohida SVG rasm
========================================== */

(() => {
    const scenes = [
        ["SERVER", "CHIP", "CLOUD"],
        ["HDD", "SSD", "NVME"],
        ["DAS", "NAS", "SAN"],
        ["DISKS", "CONTROLLER", "VOLUME"],
        ["STRIPING", "MIRROR", "PARITY"],
        ["SPEED", "STRIPING", "WARNING"],
        ["MIRROR", "SHIELD", "CAPACITY"],
        ["PARITY", "DUAL PARITY", "XOR"],
        ["RAID 10", "RAID 50", "RAID 60"],
        ["CAPACITY", "MIRROR SIZE", "PARITY SIZE"],
        ["FAILURE", "REBUILD", "SMART"],
        ["PYTHON", "STRIPING", "CODE"],
        ["XOR", "PARITY", "BINARY"],
        ["CALCULATOR", "DISKS", "FORMULA"]
    ];

    const colors = [
        ["#42d9ff", "#8b7cff"],
        ["#42e6a4", "#42d9ff"],
        ["#ffb86b", "#8b7cff"]
    ];

    function escapeText(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function makeIllustration(kind, title, slideIndex, cardIndex) {
        const color = colors[slideIndex % colors.length][cardIndex % 2];
        const second = colors[(slideIndex + 1) % colors.length][1];
        let artwork = "";

        const disk = (x, y, label, fill) => `
            <g transform="translate(${x},${y})">
                <rect width="110" height="65" rx="10"
                    fill="${fill}" fill-opacity=".16"
                    stroke="${fill}" stroke-width="2"/>
                <circle cx="32" cy="32" r="18"
                    fill="none" stroke="${fill}" stroke-width="3"/>
                <circle cx="32" cy="32" r="5" fill="${fill}"/>
                <path d="M32 14 L32 27" stroke="${fill}" stroke-width="2"/>
                <text x="72" y="37" text-anchor="middle"
                    fill="#ffffff" font-size="11">${label}</text>
            </g>`;
        
        const node = (x, y, label, fill) => `
            <g>
                <circle cx="${x}" cy="${y}" r="23"
                    fill="${fill}" fill-opacity=".2"
                    stroke="${fill}" stroke-width="2"/>
                <text x="${x}" y="${y + 4}" text-anchor="middle"
                    fill="#ffffff" font-size="11">${label}</text>
            </g>`;

        switch (kind) {
            case "SERVER":
                artwork = `
                    ${[0, 1, 2].map(i => `
                    <rect x="${85 + i * 125}" y="75" width="95" height="175"
                        rx="10" fill="#172b45" stroke="${color}" stroke-width="2"/>
                    ${[0, 1, 2, 3].map(j => `
                        <rect x="${97 + i * 125}" y="${88 + j * 39}"
                            width="70" height="27" rx="5" fill="#263f5c"/>
                        <circle cx="${153 + i * 125}" cy="${101 + j * 39}"
                            r="4" fill="${color}"/>
                    `).join("")}
                    `).join("")}`;
                break;

            case "CHIP":
                artwork = `
                    <rect x="185" y="80" width="150" height="145" rx="18"
                        fill="#172b45" stroke="${color}" stroke-width="3"/>
                    <rect x="215" y="110" width="90" height="85" rx="10"
                        fill="${color}" fill-opacity=".2" stroke="${color}"/>
                    ${Array.from({length: 6}, (_, i) => `
                        <path d="M${205 + i * 23} 80 V58 M${205 + i * 23} 225 V247"
                            stroke="${color}" stroke-width="4"/>
                    `).join("")}
                    <text x="260" y="160" text-anchor="middle"
                        fill="white" font-size="20" font-weight="bold">RAID</text>`;
                break;

            case "CLOUD":
                artwork = `
                    <path d="M145 190 C80 190 90 115 155 115
                    C165 45 280 50 295 115 C365 95 395 185 325 195 Z"
                    fill="${color}" fill-opacity=".2"
                    stroke="${color}" stroke-width="4"/>
                    ${node(230, 145, "DATA", color)}
                    <path d="M230 168 V210 M190 210 H270"
                    stroke="${color}" stroke-width="3"/>`;
                break;

            case "HDD":
                artwork = disk(205, 120, "HDD", color);
                artwork += `<path d="M260 120 V90" stroke="${color}" stroke-width="3"/>`;
                break;

            case "SSD":
                artwork = `
                    <rect x="135" y="105" width="240" height="90" rx="15"
                        fill="#142b40" stroke="${color}" stroke-width="3"/>
                    ${[0,1,2,3].map(i => `
                    <rect x="${155 + i * 48}" y="125" width="35" height="45"
                        rx="5" fill="${color}" fill-opacity=".35"
                        stroke="${color}"/>
                    `).join("")}
                    <text x="255" y="220" text-anchor="middle"
                        fill="white" font-size="18">SOLID STATE DRIVE</text>`;
                break;

            case "NVME":
                artwork = `
                    <rect x="110" y="125" width="290" height="60" rx="12"
                        fill="#172b45" stroke="${color}" stroke-width="3"/>
                    ${[0,1,2,3,4].map(i => `
                    <rect x="${135 + i * 48}" y="137" width="35" height="35"
                        rx="5" fill="${color}" fill-opacity=".35"/>
                    `).join("")}
                    <path d="M400 140 H430 V170 H400" stroke="${color}" stroke-width="4" fill="none"/>`;
                break;

            case "DAS":
            case "NAS":
            case "SAN":
                artwork = `
                    ${node(250, 105, kind, color)}
                    ${node(120, 220, "PC", second)}
                    ${node(380, 220, "DISK", second)}
                    <path d="M230 125 L145 200 M270 125 L355 200"
                        stroke="${color}" stroke-width="4" fill="none"/>`;
                break;

            case "DISKS":
                artwork = disk(95, 120, "DISK 1", color)
                    + disk(225, 120, "DISK 2", second)
                    + disk(355, 120, "DISK 3", color);
                break;

            case "CONTROLLER":
                artwork = `
                    <rect x="180" y="90" width="160" height="130" rx="15"
                        fill="#182b46" stroke="${color}" stroke-width="3"/>
                    <text x="260" y="160" text-anchor="middle"
                        fill="white" font-size="17">RAID</text>
                    <text x="260" y="183" text-anchor="middle"
                        fill="${color}" font-size="12">CONTROLLER</text>
                    ${[0,1,2].map(i => `
                    <path d="M${180 + i * 80} 220 V255"
                        stroke="${color}" stroke-width="3"/>
                    `).join("")}`;
                break;

            case "VOLUME":
                artwork = `
                    ${disk(95, 125, "DISK 1", color)}
                    ${disk(225, 125, "DISK 2", second)}
                    <path d="M150 210 V245 H310 V210"
                        fill="none" stroke="${color}" stroke-width="4"/>
                    <text x="230" y="270" text-anchor="middle"
                        fill="white" font-size="16">ONE VOLUME</text>`;
                break;

            case "STRIPING":
                artwork = `
                    ${[0,1,2,3,4,5].map(i => `
                    <rect x="${85 + i * 70}" y="${100 + (i % 2) * 90}"
                        width="58" height="58" rx="8"
                        fill="${i % 2 ? second : color}" fill-opacity=".65"/>
                    `).join("")}
                    <path d="M100 180 L470 180" stroke="white"
                        stroke-opacity=".35" stroke-dasharray="5 8"/>`;
                break;

            case "MIRROR":
                artwork = `
                    ${disk(90, 110, "COPY 1", color)}
                    ${disk(310, 110, "COPY 2", second)}
                    <path d="M205 145 H300 M290 135 L300 145 L290 155"
                        fill="none" stroke="white" stroke-width="4"/>
                    <text x="250" y="225" text-anchor="middle"
                        fill="white" font-size="17">1 : 1 COPY</text>`;
                break;

            case "PARITY":
            case "DUAL PARITY":
                artwork = `
                    ${["A", "B", "C", "P"].map((v, i) => `
                    <rect x="${85 + i * 100}" y="120" width="78" height="90"
                        rx="10" fill="${i === 3 ? second : color}"
                        fill-opacity=".25" stroke="${i === 3 ? second : color}" stroke-width="2"/>
                    <text x="${124 + i * 100}" y="173" text-anchor="middle"
                        fill="white" font-size="22" font-weight="bold">${v}</text>
                    `).join("")}
                    <text x="250" y="245" text-anchor="middle"
                        fill="${second}" font-size="16">PARITY BLOCK</text>`;
                break;

            case "XOR":
            case "BINARY":
                artwork = `
                    ${["1010", "1100", "0110"].map((v, i) => `
                    <text x="250" y="${95 + i * 58}" text-anchor="middle"
                        fill="${i === 2 ? second : color}"
                        font-family="monospace" font-size="30"
                        font-weight="bold">${v}</text>
                    `).join("")}
                    <text x="250" y="275" text-anchor="middle"
                        fill="white" font-size="17">XOR OPERATION</text>`;
                break;

            case "SPEED":
                artwork = `
                    <path d="M120 210 A130 130 0 0 1 380 210"
                        fill="none" stroke="#29425c" stroke-width="18"
                        stroke-linecap="round"/>
                    <path d="M120 210 A130 130 0 0 1 350 105"
                        fill="none" stroke="${color}" stroke-width="18"
                        stroke-linecap="round"/>
                    <path d="M250 210 L340 115"
                        stroke="white" stroke-width="5"/>
                    <circle cx="250" cy="210" r="12" fill="white"/>`;
                break;

            case "WARNING":
            case "FAILURE":
                artwork = `
                    <path d="M250 65 L410 235 H90 Z"
                        fill="#ffad4d" fill-opacity=".15"
                        stroke="#ffad4d" stroke-width="5"/>
                    <text x="250" y="190" text-anchor="middle"
                        fill="#ffad4d" font-size="90" font-weight="bold">!</text>`;
                break;

            case "SHIELD":
                artwork = `
                    <path d="M250 65 L365 110 V180
                    Q350 245 250 275 Q150 245 135 180 V110 Z"
                    fill="${color}" fill-opacity=".2"
                    stroke="${color}" stroke-width="5"/>
                    <path d="M195 165 L235 205 L310 125"
                    fill="none" stroke="${color}" stroke-width="10"
                    stroke-linecap="round"/>`;
                break;

            case "CAPACITY":
            case "MIRROR SIZE":
            case "PARITY SIZE":
                artwork = `
                    ${[0,1,2,3].map(i => `
                    <rect x="${105 + i * 83}" y="${220 - i * 35}"
                        width="60" height="${50 + i * 35}" rx="6"
                        fill="${i === 3 ? second : color}" fill-opacity=".7"/>
                    `).join("")}
                    <path d="M80 255 H430" stroke="white" stroke-opacity=".5" stroke-width="2"/>`;
                break;

            case "RAID 10":
            case "RAID 50":
            case "RAID 60":
                artwork = `
                    ${[0,1,2,3].map(i => `
                    <rect x="${105 + (i % 2) * 175}" y="${90 + Math.floor(i / 2) * 100}"
                        width="120" height="65" rx="10"
                        fill="${i % 2 ? second : color}" fill-opacity=".2"
                        stroke="${i % 2 ? second : color}" stroke-width="2"/>
                    <text x="${165 + (i % 2) * 175}" y="${130 + Math.floor(i / 2) * 100}"
                        fill="white" font-size="14" text-anchor="middle">DISK ${i + 1}</text>
                    `).join("")}`;
                break;

            case "REBUILD":
                artwork = `
                    ${disk(80, 120, "OLD", "#ffad4d")}
                    <path d="M205 150 H295 M280 135 L295 150 L280 165"
                        fill="none" stroke="${color}" stroke-width="5"/>
                    ${disk(315, 120, "NEW", color)}
                    <text x="250" y="245" text-anchor="middle"
                        fill="white" font-size="16">REBUILD PROCESS</text>`;
                break;

            case "SMART":
                artwork = `
                    <circle cx="250" cy="160" r="85" fill="none"
                        stroke="#29425c" stroke-width="18"/>
                    <path d="M250 75 A85 85 0 0 1 325 120"
                        fill="none" stroke="${color}" stroke-width="18"/>
                    <text x="250" y="168" text-anchor="middle"
                        fill="white" font-size="25" font-weight="bold">SMART</text>`;
                break;

            case "PYTHON":
            case "CODE":
                artwork = `
                    <rect x="110" y="75" width="280" height="180"
                        rx="14" fill="#101d30" stroke="${color}" stroke-width="3"/>
                    ${[0,1,2,3].map(i => `
                    <rect x="140" y="${110 + i * 30}" width="${120 + (i % 2) * 65}"
                        height="9" rx="4" fill="${i % 2 ? second : color}" opacity=".8"/>
                    `).join("")}
                    <text x="250" y="285" text-anchor="middle"
                        fill="white" font-size="17">PYTHON</text>`;
                break;

            case "CALCULATOR":
            case "FORMULA":
                artwork = `
                    <rect x="175" y="55" width="150" height="220" rx="15"
                        fill="#172b45" stroke="${color}" stroke-width="3"/>
                    <rect x="195" y="78" width="110" height="45" rx="6"
                        fill="${color}" fill-opacity=".2"/>
                    ${Array.from({length: 9}, (_, i) => `
                    <rect x="${195 + (i % 3) * 38}" y="${140 + Math.floor(i / 3) * 35}"
                        width="27" height="25" rx="5" fill="${color}" fill-opacity=".65"/>
                    `).join("")}`;
                break;

            default:
                artwork = disk(195, 120, kind, color);
        }

        const safeTitle = escapeText(title);

        const svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="500" height="320" viewBox="0 0 500 320">
            <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#142940"/>
                    <stop offset="1" stop-color="#080f1d"/>
                </linearGradient>
                <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                    <path d="M25 0 H0 V25" fill="none"
                        stroke="#ffffff" stroke-opacity=".05"/>
                </pattern>
            </defs>
            <rect width="500" height="320" rx="18" fill="url(#bg)"/>
            <rect width="500" height="320" rx="18" fill="url(#grid)"/>
            <circle cx="250" cy="155" r="145"
                fill="${color}" opacity=".035"/>
            ${artwork}
            <path d="M35 292 H465" stroke="${color}"
                stroke-opacity=".5" stroke-width="2"/>
            <text x="35" y="310" fill="#b9c9dc"
                font-size="10" font-family="Arial">${safeTitle}</text>
            <circle cx="462" cy="28" r="5" fill="${color}"/>
        </svg>`;

        return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
    }

    // 1–11: barcha kontent kartalarini yangilash
    for (let slideIndex = 0; slideIndex < 11; slideIndex++) {
        const slide = window.RAID_SLIDES[slideIndex];

        if (!slide || !slide.sections) continue;

        slide.sections.forEach((section, cardIndex) => {
            const kind = scenes[slideIndex][cardIndex] || "SERVER";

            section.image = makeIllustration(
                kind,
                section.heading,
                slideIndex,
                cardIndex
            );

            section.imageAlt = section.heading + " mavzusiga mos texnologik illustratsiya";
        });
    }

    // 12–14: Python slaydlariga alohida rasmlar
    for (let i = 11; i <= 13; i++) {
        const slide = window.RAID_SLIDES[i];

        if (!slide) continue;

        const kind = scenes[i][0];

        slide.image = makeIllustration(
            kind,
            slide.title,
            i,
            0
        );

        slide.imageAlt = slide.title + " uchun maxsus illustratsiya";
    }

    console.info("RAID PREMIUM: 36 ta alohida mavzuli illustratsiya tayyor.");
})();

/* =====================================
   PYTHON KOD SLAYDLARIDAN RASMLARNI OLIB TASHLASH
===================================== */

[11, 12, 13].forEach(index => {
    const slide = window.RAID_SLIDES[index];

    if (!slide) return;

    delete slide.image;
    delete slide.imageAlt;
});

/* Kodli slaydlarda rasmni ko'rsatmaslik */
console.info("Python kod slaydlarida rasmlar o'chirildi.");

/* ==========================================
   RAID PREMIUM — SLAYDLAR JOYLASHUVINI TUZATISH
   ========================================== */
