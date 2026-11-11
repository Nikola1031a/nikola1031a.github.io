/* savicweb.com — translation dictionary + language store. All site copy lives here. */
(function () {
  if (window.SAVIC) return;
  var WA = '381629269646';
  var EMAIL = 'nikolasavcc4@gmail.com';
  var PHONE = '+381 62 926 9646';

  var en = {
    meta: {
      home: { title: 'Nikola Savić — Web designer for businesses across Europe', desc: 'Fast, modern websites that bring you clients. Multilingual, mobile-first, with a free homepage demo within 48 hours. Based in Kruševac, Serbia.' },
      pastel: { title: 'Pastel — Café & Bistro website concept · Nikola Savić', desc: 'A warm, modern website concept for a café in Kruševac, with an AI chef that suggests dishes from the menu. Designed and built by Nikola Savić.' },
      velura: { title: 'Velura Dental Clinic — website concept · Nikola Savić', desc: 'A 19-page website concept for a premium dental clinic in Split, in English, Croatian and German. Designed and built by Nikola Savić.' },
      residence: { title: 'Residence Lounge Restaurant — website concept · Nikola Savić', desc: 'An elegant website concept for a lounge restaurant in Kruševac, with the full menu, the space and directions. Designed and built by Nikola Savić.' },
      notfound: { title: 'Page not found · Nikola Savić', desc: "This page doesn't exist — but your new website could." }
    },
    brand: { sub: 'WEB DESIGN', homeAria: 'Nikola Savić — home' },
    nav: { work: 'Work', services: 'Services', about: 'About', process: 'Process', faq: 'FAQ', contact: 'Contact', demo: 'Free demo', menu: 'Open menu', close: 'Close menu', langAria: 'Choose language', primary: 'Main navigation', skip: 'Skip to content' },
    wa: {
      general: "Hi Nikola, I found your portfolio and I'd like to talk about a website.",
      demo: "Hi Nikola, I'd like a free homepage demo for my business. Business name: … Website (if any): …",
      pkg: "Hi Nikola, I'm interested in the {p} package."
    },
    mailSubject: 'Website inquiry',
    hero: {
      eyebrow: 'WEB DESIGN · SERBIA → EUROPE',
      l1: 'Websites that', l2: 'bring you', em: 'clients', post: '.',
      sub: "I design and build fast, modern websites for businesses across Europe — in your customers' language and perfect on every phone. See a free demo of your homepage before you pay anything.",
      cta1: 'Get a free demo', cta2: 'See my work',
      avail: 'Available for new projects',
      badge: 'FREE DEMO · 48 HOURS · FREE DEMO · 48 HOURS · ',
      badgeAria: 'Get a free demo in 48 hours on WhatsApp',
      portraitAlt: 'Portrait of Nikola Savić, web designer',
      portraitLabel: 'nikola-portrait.jpg · 4:5'
    },
    marquee: ['New websites', 'Redesigns', 'Multilingual sites', 'Mobile-first', 'Google Business profile', 'SEO basics', 'Online reservations'],
    marqueeAria: 'Services: new websites, redesigns, multilingual sites, mobile-first, Google Business profile, SEO basics, online reservations',
    stats: [
      { n: 48, unit: 'h', label: 'Free homepage demo' },
      { n: 7, unit: ' days', label: 'Complete website, even complex ones' },
      { n: 2, unit: ' months', label: 'Free fixes after launch' },
      { n: 1, unit: ' person', label: 'You talk directly to the person building your site' }
    ],
    about: {
      eyebrow: 'ABOUT ME',
      pre: "Hi, I'm Nikola. I build websites that ", em: 'work', post: ' for your business.',
      para: "I'm a web designer from Kruševac, Serbia, working with businesses all over Europe. For me a website isn't a digital business card. It's the first conversation with your next customer. So I don't just make it look good: I make sure it's clear, fast, easy to use on a phone and built to turn visitors into bookings, calls and messages. My goal is simple: help your business grow the way I'm growing mine.",
      facts: ['Based in Kruševac, Serbia', 'Working across Europe', 'English & Serbian', 'Replies fast on WhatsApp']
    },
    services: {
      eyebrow: 'SERVICES', pre: 'What I can ', em: 'build', post: ' for you.',
      items: [
        { title: 'New website', text: 'A complete website designed and built from scratch around your business and your customers.', bullets: ['Custom design, no templates', 'Mobile-first', 'Ready in about a week'] },
        { title: 'Redesign', text: "Your current site looks old or doesn't bring clients? I rebuild it into something modern that works.", bullets: ['Fresh, modern look', 'Clearer structure and texts', 'Faster on every device'] },
        { title: 'Multilingual websites', text: 'Foreign guests, patients or customers? Your site speaks their language.', bullets: ['Language switcher', 'Every page translated', 'Ideal for tourism, clinics and hospitality'] },
        { title: 'Launch & growth', text: 'Everything around the website so customers can actually find you.', bullets: ['Domain & hosting setup', 'Google Business profile', 'SEO basics and maintenance'] }
      ]
    },
    work: {
      eyebrow: 'SELECTED WORK', pre: 'Recent ', em: 'projects', post: '.',
      note: 'These are self-initiated concept projects I designed and built to show what I can do. Pastel and Residence are unofficial redesign concepts for real restaurants in Kruševac and were not commissioned by them. Velura is a fictional dental clinic.',
      caseStudy: 'View case study', live: 'Live site', liveAria: 'opens in a new tab', view: 'View', concept: 'Concept'
    },
    why: {
      eyebrow: 'WHY ME', pre: 'Why businesses ', em: 'choose', post: ' to work with me.',
      items: [
        { t: 'See it before you pay.', d: "I build a free demo of your homepage first. You only decide once you've seen it." },
        { t: "Your customers' language.", d: 'Multilingual websites for businesses with foreign guests, patients or clients, with every page and every button translated.' },
        { t: 'No middlemen.', d: 'You talk directly to the person who designs and builds your site. No account managers, no lost messages.' },
        { t: 'Fast without cutting corners.', d: 'A free demo within 48 hours, and a finished website in about a week, even for complex projects.' },
        { t: 'Built for phones first.', d: 'Most of your visitors are on their phones. Every site is designed and tested on mobile before anything else.' },
        { t: 'Two months of free fixes.', d: 'After launch I fix anything that needs fixing for two full months, free of charge.' },
        { t: 'Texts included if you want.', d: 'Send me your texts, or let me write them. Clear, friendly copy that tells customers why they should choose you.' }
      ]
    },
    process: {
      eyebrow: 'PROCESS', pre: 'From first message to ', em: 'launch', post: '.',
      steps: [
        { t: 'Quick chat', d: 'We talk about your business, your customers and what the website should achieve.' },
        { t: 'Free demo', d: 'Within 48 hours you get a demo of your homepage, at no cost.' },
        { t: 'Agreement', d: 'We agree on pages, content, photos and price. Payment: 50% to start, 50% before launch.' },
        { t: 'Design & build', d: 'I build the complete website and keep you updated along the way.' },
        { t: 'Your feedback', d: 'You review everything and ask for changes until it feels right.' },
        { t: 'Launch & support', d: 'Your site goes live on your own domain, with two months of free fixes.' }
      ],
      noteLabel: 'What I need from you',
      note: 'your logo, photos, prices and opening hours, and your texts, or I can write them for you.'
    },
    packages: {
      eyebrow: 'PACKAGES', pre: 'Pick a ', em: 'starting point', post: '.',
      popular: 'Most popular', price: 'Price on request', ask: 'Ask about this package',
      items: [
        { name: 'Starter', desc: 'One-page website, perfect for a small business.', features: ['One language', 'Up to 5 sections', 'Mobile-first', 'Contact & map', 'Domain setup'] },
        { name: 'Business', desc: 'A complete multi-page website.', features: ['Up to 6 pages', '2 languages', 'Gallery & menu or services', 'Google Business profile', 'SEO basics', '2 months of free fixes'] },
        { name: 'Premium', desc: 'For clinics, hotels and businesses that serve foreign clients.', features: ['10+ pages', '3 or more languages', 'Booking or reservation flow', 'Individual service pages', 'Priority support', '2 months of free fixes'] }
      ],
      note: "Every project is different. Tell me what you need and I'll send you a clear offer."
    },
    faq: {
      eyebrow: 'FAQ', pre: 'Questions you might ', em: 'have', post: '.',
      items: [
        { q: 'How much does a website cost?', a: "It depends on the number of pages, languages and features. Tell me what you need and you'll get a clear, fixed offer before any work starts. The demo is free either way." },
        { q: 'Is the demo really free?', a: "Yes. I build a demo of your homepage at no cost and with no obligation. If you don't like it, you don't pay anything." },
        { q: 'How long does it take?', a: 'The demo is ready within 48 hours. A complete website usually takes about a week from the moment I have your texts and photos, even for complex projects.' },
        { q: 'How does payment work?', a: '50% when we start and 50% before the website goes live.' },
        { q: 'Who owns the domain?', a: 'You do. The domain is registered in your name, and I set everything up for you.' },
        { q: 'What happens after launch?', a: 'You get two months of free fixes. After that we can agree on simple monthly maintenance, depending on how often you want updates.' },
        { q: 'Do you write the texts?', a: "If you want, yes. Otherwise send me your texts and I'll make them fit the design." },
        { q: 'Can you work with businesses outside Serbia?', a: 'Of course. I work with businesses across Europe, and we can talk in English over WhatsApp or email.' },
        { q: 'Can you redesign my existing website?', a: "Yes. Send me the link and I'll show you what I'd improve, with a free demo." }
      ]
    },
    cta: {
      eyebrow: 'CONTACT', pre: "Let's build your ", em: 'next', post: ' website.',
      text: "Send me a message with your business name. I'll get back to you fast, and within 48 hours you'll see a free demo of your new homepage.",
      wa: 'Message me on WhatsApp', email: 'Send an email', waLabel: 'WhatsApp', emailLabel: 'Email'
    },
    footer: { tagline: 'Web design for businesses across Europe.', based: 'Based in Kruševac, Serbia', rights: '© 2026 Nikola Savić. All rights reserved.', top: 'Back to top', navTitle: 'Menu', contactTitle: 'Contact' },
    cs: {
      back: 'All work', eyebrow: 'CASE STUDY', year: '2026', live: 'Live site',
      overview: { type: 'Type', location: 'Location', languages: 'Languages', pages: 'Pages', role: 'My role' },
      roleVal: 'Design & development',
      idea: 'THE IDEA', built: 'WHAT I BUILT', builtH: 'What I built.', highlights: 'HIGHLIGHTS', mobile: 'MOBILE', mobileH: 'On the phone.',
      next: 'Next project', desktopAlt: '{p} website, desktop view', mobileAlt: '{p} website on a phone, screen {n}', highlightAlt: '{p} website: {h}'
    },
    projects: {
      pastel: {
        name: 'Pastel', type: 'Café & Bistro', location: 'Kruševac, Serbia', languages: 'Serbian', pages: '',
        summary: 'A warm, modern website for a local café, with an AI chef that suggests dishes from the menu.',
        tags: ['Restaurant', 'AI chef', 'Menu', 'Mobile-first'],
        idea: "Most restaurants in town had either no website or an outdated one. I wanted to show what a local café could do online: a site that's warm and inviting, makes it easy to book a table, and offers something no other restaurant in town had — an AI chef.",
        built: ['Full menu', '"Chef Stelo", an AI chef that answers guests\' questions about dishes, ingredients and wine pairings', 'Table reservation section (by phone)', 'Atmosphere and food gallery', 'Guest reviews section', 'Delivery info', 'Location and opening hours'],
        highlights: [
          { t: 'The AI chef', d: 'Chef Stelo knows every dish on the menu. Guests can ask him for a recommendation, the ingredients, or what goes well with a glass of wine.' },
          { t: 'The menu', d: 'The full menu, grouped by course with clear prices, so guests can decide before they arrive — easily read on a phone.' },
          { t: 'The gallery', d: 'Photos of the food and the atmosphere, from the summer garden to the evening interior and the bar.' }
        ]
      },
      velura: {
        name: 'Velura Dental Clinic', type: 'Dental clinic (fictional)', location: 'Split, Croatia', languages: 'English, Croatian, German', pages: '19',
        summary: 'A 19-page website for a premium dental clinic, in three languages, built for patients from abroad.',
        tags: ['Healthcare', '19 pages', 'EN / HR / DE', 'International patients'],
        idea: "Private clinics on the Croatian coast treat many patients from abroad, yet most of their websites are in one language and hard to use on a phone. Velura shows what a clinic website should be: trustworthy, clear about prices, and easy to use in the patient's own language.",
        built: ['19 pages', 'Full English, Croatian and German versions', 'Live "open now / closed" status in clinic time', '8 treatment pages with steps, visits, materials and prices', 'Transparent price list', 'International patients page with travel and stay planning', 'Before/after sliders', 'Team, FAQ and contact pages', 'Mobile action bar with Call, WhatsApp and Book', 'SEO titles and descriptions on every page'],
        highlights: [
          { t: 'The language switcher', d: 'One tap switches the site between English, Croatian and German. Every page is fully translated, so patients read everything in their own language.' },
          { t: 'The treatment pages', d: 'Eight treatment pages explain each procedure step by step: the visits it takes, the materials used and the price.' },
          { t: 'The mobile action bar', d: 'On phones, Call, WhatsApp and Book stay one tap away, so a patient can get in touch from any page.' }
        ]
      },
      residence: {
        name: 'Residence Lounge Restaurant', type: 'Lounge restaurant', location: 'Kruševac, Serbia', languages: 'Serbian', pages: '',
        summary: 'An elegant website for a lounge restaurant, with the full menu, the space and everything a guest needs to find it.',
        tags: ['Restaurant', 'Full menu', 'Elegant design', 'Mobile-first'],
        idea: 'An elegant place deserves an elegant website. The goal was to match the atmosphere of the restaurant and make the full menu, the opening hours and the way to get there easy to find on any phone.',
        built: ['Full menu by category: sandwiches, pizza, premium pizza, salads, pasta, risotto, desserts, drinks', 'About section', 'Gallery of the dining room and garden', 'Location, opening hours and parking info', 'Directions', 'Click-to-call'],
        highlights: [
          { t: 'The menu', d: 'The full menu by category, from sandwiches and pizza to risotto, desserts and drinks, laid out to be easy to browse on a phone.' },
          { t: 'The gallery', d: 'The dining room and the garden, so guests get a feel for the place before they arrive.' },
          { t: 'Call to reserve', d: 'A dedicated call section with click-to-call, so guests can book a table or ask a question with a single tap.' }
        ]
      }
    },
    notfound: { code: '404', pre: "This page doesn't exist — but your new website ", em: 'could', post: '.', btn: 'Back to home' },
    img: { empty: 'Image coming soon' }
  };

  var sr = {
    meta: {
      home: { title: 'Nikola Savić — Web dizajner za firme širom Evrope', desc: 'Brzi, moderni sajtovi koji vam dovode klijente. Višejezični, prilagođeni telefonima, uz besplatan demo početne strane za 48 sati. Kruševac, Srbija.' },
      pastel: { title: 'Pastel — koncept sajta za kafe i bistro · Nikola Savić', desc: 'Topao, moderan koncept sajta za kafe u Kruševcu, sa AI kuvarom koji preporučuje jela sa menija. Dizajn i izrada: Nikola Savić.' },
      velura: { title: 'Velura Dental Clinic — koncept sajta · Nikola Savić', desc: 'Koncept sajta od 19 strana za premium stomatološku ordinaciju u Splitu, na engleskom, hrvatskom i nemačkom. Dizajn i izrada: Nikola Savić.' },
      residence: { title: 'Residence Lounge Restaurant — koncept sajta · Nikola Savić', desc: 'Elegantan koncept sajta za lounge restoran u Kruševcu, sa celim menijem, prostorom i uputstvom kako da stignete. Dizajn i izrada: Nikola Savić.' },
      notfound: { title: 'Stranica ne postoji · Nikola Savić', desc: 'Ova stranica ne postoji — ali vaš novi sajt može.' }
    },
    brand: { sub: 'WEB DIZAJN', homeAria: 'Nikola Savić — početna' },
    nav: { work: 'Radovi', services: 'Usluge', about: 'O meni', process: 'Proces', faq: 'Pitanja', contact: 'Kontakt', demo: 'Besplatan demo', menu: 'Otvori meni', close: 'Zatvori meni', langAria: 'Izaberite jezik', primary: 'Glavna navigacija', skip: 'Preskoči na sadržaj' },
    wa: {
      general: 'Zdravo Nikola, javljam se preko vašeg portfolija. Zanima me izrada sajta.',
      demo: 'Zdravo Nikola, zanima me besplatan demo početne strane za moju firmu. Naziv firme: … Sajt (ako postoji): …',
      pkg: 'Zdravo Nikola, zanima me paket {p}.'
    },
    mailSubject: 'Upit za izradu sajta',
    hero: {
      eyebrow: 'WEB DIZAJN · SRBIJA → EVROPA',
      l1: 'Sajtovi koji', l2: 'vam dovode', em: 'klijente', post: '.',
      sub: 'Dizajniram i pravim brze, moderne sajtove za firme širom Evrope — na jeziku vaših kupaca i savršeno prilagođene svakom telefonu. Pogledajte besplatan demo svoje početne strane pre nego što bilo šta platite.',
      cta1: 'Besplatan demo', cta2: 'Pogledajte radove',
      avail: 'Primam nove projekte',
      badge: 'BESPLATAN DEMO · 48 SATI · BESPLATAN DEMO · 48 SATI · ',
      badgeAria: 'Besplatan demo za 48 sati preko WhatsAppa',
      portraitAlt: 'Portret Nikole Savića, web dizajnera',
      portraitLabel: 'nikola-portrait.jpg · 4:5'
    },
    marquee: ['Novi sajtovi', 'Redizajn', 'Višejezični sajtovi', 'Prilagođeno telefonu', 'Google Business profil', 'Osnove SEO-a', 'Online rezervacije'],
    marqueeAria: 'Usluge: novi sajtovi, redizajn, višejezični sajtovi, prilagođeno telefonu, Google Business profil, osnove SEO-a, online rezervacije',
    stats: [
      { n: 48, unit: 'h', label: 'Besplatan demo početne strane' },
      { n: 7, unit: ' dana', label: 'Ceo sajt, čak i kad je složen' },
      { n: 2, unit: ' meseca', label: 'Besplatnih ispravki posle objave' },
      { n: 1, unit: ' osoba', label: 'Razgovarate direktno sa onim ko pravi vaš sajt' }
    ],
    about: {
      eyebrow: 'O MENI',
      pre: 'Zdravo, ja sam Nikola. Pravim sajtove koji ', em: 'rade', post: ' za vaš posao.',
      para: 'Web dizajner sam iz Kruševca i radim sa firmama iz cele Evrope. Za mene sajt nije digitalna vizitkarta. To je prvi razgovor sa vašim sledećim kupcem. Zato se ne bavim samo time da lepo izgleda: brinem da bude jasan, brz, lak za korišćenje na telefonu i napravljen tako da posetioce pretvara u rezervacije, pozive i poruke. Cilj mi je jednostavan: da vaš posao raste onako kako raste i moj.',
      facts: ['Kruševac, Srbija', 'Radim širom Evrope', 'Engleski i srpski', 'Brzo odgovaram na WhatsAppu']
    },
    services: {
      eyebrow: 'USLUGE', pre: 'Šta mogu da ', em: 'napravim', post: ' za vas.',
      items: [
        { title: 'Novi sajt', text: 'Kompletan sajt, dizajniran i napravljen od nule, po meri vašeg posla i vaših kupaca.', bullets: ['Dizajn po meri, bez šablona', 'Prilagođeno telefonu', 'Gotov za oko nedelju dana'] },
        { title: 'Redizajn', text: 'Vaš sajt izgleda zastarelo ili ne donosi klijente? Pretvaram ga u nešto moderno što zaista radi.', bullets: ['Svež, moderan izgled', 'Jasnija struktura i tekstovi', 'Brži na svakom uređaju'] },
        { title: 'Višejezični sajtovi', text: 'Imate goste, pacijente ili kupce iz inostranstva? Vaš sajt govori njihov jezik.', bullets: ['Izbor jezika', 'Svaka strana prevedena', 'Idealno za turizam, ordinacije i ugostiteljstvo'] },
        { title: 'Objava i rast', text: 'Sve oko sajta, da bi vas kupci zaista i pronašli.', bullets: ['Domen i hosting', 'Google Business profil', 'Osnove SEO-a i održavanje'] }
      ]
    },
    work: {
      eyebrow: 'IZABRANI RADOVI', pre: 'Nedavni ', em: 'projekti', post: '.',
      note: 'Ovo su koncept projekti koje sam samoinicijativno dizajnirao i napravio da pokažem šta umem. Pastel i Residence su nezvanični koncepti redizajna za stvarne restorane u Kruševcu i nisu ih oni naručili. Velura je izmišljena stomatološka ordinacija.',
      caseStudy: 'Pogledajte projekat', live: 'Sajt uživo', liveAria: 'otvara se u novoj kartici', view: 'Pogledaj', concept: 'Koncept'
    },
    why: {
      eyebrow: 'ZAŠTO JA', pre: 'Zašto firme ', em: 'biraju', post: ' da rade sa mnom.',
      items: [
        { t: 'Vidite pre nego što platite.', d: 'Prvo napravim besplatan demo vaše početne strane. Odluku donosite tek kad ga vidite.' },
        { t: 'Jezik vaših kupaca.', d: 'Višejezični sajtovi za firme sa gostima, pacijentima ili klijentima iz inostranstva, sa svakom stranom i svakim dugmetom prevedenim.' },
        { t: 'Bez posrednika.', d: 'Razgovarate direktno sa osobom koja dizajnira i pravi vaš sajt. Bez menadžera naloga i izgubljenih poruka.' },
        { t: 'Brzo, ali bez prečica.', d: 'Besplatan demo za 48 sati i gotov sajt za oko nedelju dana, čak i kad je projekat složen.' },
        { t: 'Savršen na telefonu.', d: 'Većina vaših posetilaca dolazi sa telefona. Zato svaki sajt prvo dizajniram i testiram na mobilnom.' },
        { t: 'Dva meseca besplatnih ispravki.', d: 'Posle objave ispravljam sve što treba, puna dva meseca, bez naplate.' },
        { t: 'Tekstovi po želji.', d: 'Pošaljite mi svoje tekstove ili ih ja napišem. Jasni, prijatni tekstovi koji kupcima kažu zašto da izaberu baš vas.' }
      ]
    },
    process: {
      eyebrow: 'PROCES', pre: 'Od prve poruke do ', em: 'gotovog sajta', post: '.',
      steps: [
        { t: 'Kratak razgovor', d: 'Pričamo o vašem poslu, vašim kupcima i tome šta sajt treba da postigne.' },
        { t: 'Besplatan demo', d: 'Za 48 sati dobijate demo svoje početne strane, bez ikakve naknade.' },
        { t: 'Dogovor', d: 'Dogovaramo strane, sadržaj, fotografije i cenu. Plaćanje: 50% na početku, 50% pre objave.' },
        { t: 'Dizajn i izrada', d: 'Pravim ceo sajt i redovno vas obaveštavam kako napreduje.' },
        { t: 'Vaše mišljenje', d: 'Pregledate sve i tražite izmene dok ne bude baš kako treba.' },
        { t: 'Objava i podrška', d: 'Sajt ide uživo na vašem domenu, uz dva meseca besplatnih ispravki.' }
      ],
      noteLabel: 'Šta mi treba od vas',
      note: 'logo, fotografije, cene i radno vreme, i vaši tekstovi, ili ih ja napišem umesto vas.'
    },
    packages: {
      eyebrow: 'PAKETI', pre: 'Izaberite ', em: 'polaznu tačku', post: '.',
      popular: 'Najčešći izbor', price: 'Cena na upit', ask: 'Pitajte za ovaj paket',
      items: [
        { name: 'Starter', desc: 'Sajt na jednoj strani, idealan za malu firmu.', features: ['Jedan jezik', 'Do 5 sekcija', 'Prilagođeno telefonu', 'Kontakt i mapa', 'Podešavanje domena'] },
        { name: 'Business', desc: 'Kompletan sajt sa više strana.', features: ['Do 6 strana', '2 jezika', 'Galerija i meni ili usluge', 'Google Business profil', 'Osnove SEO-a', '2 meseca besplatnih ispravki'] },
        { name: 'Premium', desc: 'Za ordinacije, hotele i firme koje rade sa strancima.', features: ['10+ strana', '3 ili više jezika', 'Zakazivanje ili rezervacije', 'Posebne strane za usluge', 'Prioritetna podrška', '2 meseca besplatnih ispravki'] }
      ],
      note: 'Svaki projekat je drugačiji. Recite mi šta vam treba i poslaću vam jasnu ponudu.'
    },
    faq: {
      eyebrow: 'PITANJA', pre: 'Pitanja koja možda ', em: 'imate', post: '.',
      items: [
        { q: 'Koliko košta sajt?', a: 'Zavisi od broja strana, jezika i funkcija. Recite mi šta vam treba i dobićete jasnu, fiksnu ponudu pre nego što bilo šta počne. Demo je besplatan u svakom slučaju.' },
        { q: 'Da li je demo zaista besplatan?', a: 'Jeste. Demo vaše početne strane pravim bez naknade i bez obaveze. Ako vam se ne dopadne, ne plaćate ništa.' },
        { q: 'Koliko traje izrada?', a: 'Demo je gotov za 48 sati. Ceo sajt obično traje oko nedelju dana od trenutka kad dobijem vaše tekstove i fotografije, čak i kad je projekat složen.' },
        { q: 'Kako se plaća?', a: '50% kad počnemo i 50% pre nego što sajt ode uživo.' },
        { q: 'Čiji je domen?', a: 'Vaš. Domen se registruje na vaše ime, a ja sve podesim umesto vas.' },
        { q: 'Šta biva posle objave?', a: 'Dobijate dva meseca besplatnih ispravki. Posle toga možemo da se dogovorimo za jednostavno mesečno održavanje, u zavisnosti od toga koliko često želite izmene.' },
        { q: 'Da li pišete tekstove?', a: 'Ako želite, da. U suprotnom mi pošaljite svoje tekstove i uklopiću ih u dizajn.' },
        { q: 'Radite li sa firmama van Srbije?', a: 'Naravno. Radim sa firmama širom Evrope, a možemo da se dopisujemo na engleskom preko WhatsAppa ili mejla.' },
        { q: 'Možete li da redizajnirate moj postojeći sajt?', a: 'Mogu. Pošaljite mi link i pokazaću vam šta bih poboljšao, uz besplatan demo.' }
      ]
    },
    cta: {
      eyebrow: 'KONTAKT', pre: 'Hajde da napravimo vaš ', em: 'sledeći', post: ' sajt.',
      text: 'Pošaljite mi poruku sa nazivom svoje firme. Brzo ću vam se javiti, a za 48 sati videćete besplatan demo svoje nove početne strane.',
      wa: 'Pišite mi na WhatsApp', email: 'Pošaljite mejl', waLabel: 'WhatsApp', emailLabel: 'Mejl'
    },
    footer: { tagline: 'Web dizajn za firme širom Evrope.', based: 'Kruševac, Srbija', rights: '© 2026 Nikola Savić. Sva prava zadržana.', top: 'Nazad na vrh', navTitle: 'Meni', contactTitle: 'Kontakt' },
    cs: {
      back: 'Svi radovi', eyebrow: 'PROJEKAT', year: '2026', live: 'Sajt uživo',
      overview: { type: 'Vrsta', location: 'Lokacija', languages: 'Jezici', pages: 'Strane', role: 'Moja uloga' },
      roleVal: 'Dizajn i izrada',
      idea: 'IDEJA', built: 'ŠTA SAM NAPRAVIO', builtH: 'Šta sam napravio.', highlights: 'IZDVOJENO', mobile: 'TELEFON', mobileH: 'Na telefonu.',
      next: 'Sledeći projekat', desktopAlt: 'Sajt {p}, prikaz na računaru', mobileAlt: 'Sajt {p} na telefonu, ekran {n}', highlightAlt: 'Sajt {p}: {h}'
    },
    projects: {
      pastel: {
        name: 'Pastel', type: 'Kafe i bistro', location: 'Kruševac, Srbija', languages: 'Srpski', pages: '',
        summary: 'Topao, moderan sajt za lokalni kafe, sa AI kuvarom koji preporučuje jela sa menija.',
        tags: ['Restoran', 'AI kuvar', 'Meni', 'Prilagođeno telefonu'],
        idea: 'Većina restorana u gradu nije imala sajt ili je imala zastareo. Hteo sam da pokažem šta lokalni kafe može da ima na internetu: sajt koji je topao i primamljiv, sa kojim se sto lako rezerviše i koji nudi nešto što nijedan restoran u gradu nije imao — AI kuvara.',
        built: ['Ceo meni', '„Kuvar Stelo", AI kuvar koji gostima odgovara na pitanja o jelima, sastojcima i vinu uz hranu', 'Sekcija za rezervaciju stola (telefonom)', 'Galerija atmosfere i jela', 'Utisci gostiju', 'Informacije o dostavi', 'Lokacija i radno vreme'],
        highlights: [
          { t: 'AI kuvar', d: 'Kuvar Stelo poznaje svako jelo sa menija. Gosti mogu da ga pitaju za preporuku, sastojke ili šta ide uz čašu vina.' },
          { t: 'Meni', d: 'Ceo meni, podeljen po vrstama jela, sa jasnim cenama, da gosti odluče i pre nego što stignu — lako čitljiv na telefonu.' },
          { t: 'Galerija', d: 'Fotografije hrane i atmosfere, od letnje bašte do večernjeg enterijera i bara.' }
        ]
      },
      velura: {
        name: 'Velura Dental Clinic', type: 'Stomatološka ordinacija (izmišljena)', location: 'Split, Hrvatska', languages: 'Engleski, hrvatski, nemački', pages: '19',
        summary: 'Sajt od 19 strana za premium stomatološku ordinaciju, na tri jezika, napravljen za pacijente iz inostranstva.',
        tags: ['Zdravstvo', '19 strana', 'EN / HR / DE', 'Pacijenti iz inostranstva'],
        idea: 'Privatne ordinacije na hrvatskoj obali leče mnogo pacijenata iz inostranstva, a većina njihovih sajtova je na jednom jeziku i teško se koristi na telefonu. Velura pokazuje kakav sajt ordinacije treba da bude: pouzdan, jasan po pitanju cena i lak za korišćenje na jeziku pacijenta.',
        built: ['19 strana', 'Cela verzija na engleskom, hrvatskom i nemačkom', 'Status „otvoreno / zatvoreno" uživo, po vremenu ordinacije', '8 strana za tretmane, sa koracima, posetama, materijalima i cenama', 'Pregledan cenovnik', 'Strana za pacijente iz inostranstva, sa planiranjem puta i boravka', 'Slajderi pre/posle', 'Strane za tim, pitanja i kontakt', 'Traka sa akcijama na telefonu: Poziv, WhatsApp i Zakazivanje', 'SEO naslovi i opisi na svakoj strani'],
        highlights: [
          { t: 'Izbor jezika', d: 'Jednim dodirom sajt prelazi na engleski, hrvatski ili nemački. Svaka strana je potpuno prevedena, pa pacijenti sve čitaju na svom jeziku.' },
          { t: 'Strane za tretmane', d: 'Osam strana objašnjava svaki tretman korak po korak: koliko poseta traje, koji se materijali koriste i koliko košta.' },
          { t: 'Traka sa akcijama na telefonu', d: 'Na telefonu su Poziv, WhatsApp i Zakazivanje uvek na jedan dodir, pa pacijent može da se javi sa bilo koje strane.' }
        ]
      },
      residence: {
        name: 'Residence Lounge Restaurant', type: 'Lounge restoran', location: 'Kruševac, Srbija', languages: 'Srpski', pages: '',
        summary: 'Elegantan sajt za lounge restoran, sa celim menijem, prostorom i svim što gostu treba da ga pronađe.',
        tags: ['Restoran', 'Ceo meni', 'Elegantan dizajn', 'Prilagođeno telefonu'],
        idea: 'Elegantno mesto zaslužuje elegantan sajt. Cilj je bio da sajt prati atmosferu restorana i da se ceo meni, radno vreme i put do restorana lako pronađu na bilo kom telefonu.',
        built: ['Ceo meni po kategorijama: sendviči, pica, premium pica, salate, pasta, rižoto, dezerti, pića', 'Sekcija o restoranu', 'Galerija sale i bašte', 'Lokacija, radno vreme i parking', 'Uputstvo kako da stignete', 'Poziv jednim dodirom'],
        highlights: [
          { t: 'Meni', d: 'Ceo meni po kategorijama, od sendviča i pice do rižota, dezerta i pića, složen tako da se lako pregleda na telefonu.' },
          { t: 'Galerija', d: 'Sala i bašta, da gosti osete atmosferu i pre nego što dođu.' },
          { t: 'Rezervacija pozivom', d: 'Posebna sekcija sa pozivom jednim dodirom, da gosti rezervišu sto ili postave pitanje bez traženja broja.' }
        ]
      }
    },
    notfound: { code: '404', pre: 'Ova stranica ne postoji — ali vaš novi sajt ', em: 'može', post: '.', btn: 'Nazad na početnu' },
    img: { empty: 'Slika uskoro' }
  };

  var dict = { en: en, sr: sr };
  var PROJECTS = [
    { key: 'pastel', href: 'work-pastel.html', live: 'https://nikola1031a.github.io/Pastel/' },
    { key: 'velura', href: 'work-velura.html', live: 'https://nikola1031a.github.io/Velura-Dental-Clinic/' },
    { key: 'residence', href: 'work-residence.html', live: 'https://nikola1031a.github.io/Residence-Lounge-Restaurant-Krusevac/' }
  ];
  var saved = null;
  try { saved = localStorage.getItem('savic-lang'); } catch (e) {}
  var subs = [];

  var S = {
    dict: dict, PROJECTS: PROJECTS, WA: WA, EMAIL: EMAIL, PHONE: PHONE,
    lang: saved === 'sr' ? 'sr' : 'en',
    t: function () { return dict[S.lang]; },
    setLang: function (l) {
      if (l !== 'en' && l !== 'sr') return;
      S.lang = l;
      try { localStorage.setItem('savic-lang', l); } catch (e) {}
      S.applyDoc();
      subs.slice().forEach(function (f) { try { f(l); } catch (e) {} });
    },
    sub: function (f) { subs.push(f); return function () { subs = subs.filter(function (x) { return x !== f; }); }; },
    wa: function (msg) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg); },
    waGeneral: function () { return S.wa(S.t().wa.general); },
    waDemo: function () { return S.wa(S.t().wa.demo); },
    waPkg: function (name) { return S.wa(S.t().wa.pkg.replace('{p}', name)); },
    mail: function () { return 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(S.t().mailSubject); },
    page: 'home',
    setPage: function (p) { S.page = p; S.applyDoc(); },
    applyDoc: function () {
      document.documentElement.lang = S.lang === 'sr' ? 'sr-Latn' : 'en';
      var m = S.t().meta[S.page];
      if (!m) return;
      S._m = m;
      if (document.title !== m.title) document.title = m.title;
      document.querySelectorAll('meta[name="description"]').forEach(function (d) {
        if (d.getAttribute('content') !== m.desc) d.setAttribute('content', m.desc);
      });
      if (!S._mo && window.MutationObserver && document.head) {
        // The page template (helmet) can re-insert its default English <title> after load — keep ours.
        S._mo = new MutationObserver(function () {
          if (S._m && (document.title !== S._m.title)) S.applyDoc();
        });
        S._mo.observe(document.head, { childList: true, subtree: true, characterData: true });
      }
    },
    navLinks: function (page) {
      var t = S.t(), base = page === 'home' ? '' : './';
      return ['work', 'services', 'about', 'process', 'faq', 'contact'].map(function (k, i) {
        return { key: k, label: t.nav[k], num: '0' + (i + 1), href: (k === 'contact' && page === 'case') ? '#contact' : base + '#' + k };
      });
    },
    // Called from renderVals so the live component instance is always the one subscribed.
    use: function (comp) {
      var h = comp.__savicH;
      if (!h || h.s !== S) {
        h = comp.__savicH = { c: comp, s: S };
        h.un = S.sub(function () { h.c.setState({ __lang: S.lang, __v: Math.random() }); });
      }
      h.c = comp;
      return S.t();
    },
    // Standard DC hookup: re-render on language change.
    connect: function (comp) {
      comp.setState({ __lang: S.lang, __v: Math.random() });
      return function () {};
    }
  };
  S.applyDoc();
  window.SAVIC = S;
  window.dispatchEvent(new Event('savic-ready'));
})();
