export const CDN = 'https://d2bn17anh9ekeg.cloudfront.net/members/d3c21136-9b1a-43fc-9f88-2cd1a14a7c15';

export const CALENDLY_URL = 'https://calendly.com/kjmarketingsweden/30min';
export const TRUSTPILOT_BUSINESS_UNIT_ID = '68e60753aa0d394fa08f1073';

// Marketing pixels — same IDs as the production site, loaded consent-gated
// (only after the visitor accepts marketing cookies) via MarketingPixels.
export const marketingPixels = [
  { platform: 'meta' as const, pixel_id: '1782929995577905' },
  { platform: 'tiktok' as const, pixel_id: 'D1H42ERC77U8D1D8E83G' },
];

// OpenAI pixel — not a platform @blimpify-im/ui's MarketingPixels supports, so it
// is loaded by src/components/OpenAIPixel.tsx behind the same marketing consent.
export const OPENAI_PIXEL_ID = 'FLmGA93JukbR2mAukV8J5R';

export const award = {
  // Transparent SVG seal (gold star + company name); no baked-in background,
  // so it sits directly on the page surface in both light and dark mode.
  badge: 'https://cdn.truecrt.com/cdn/svg/_6a954cb54d7f9-u0slxdgb-py37.svg',
  verifyUrl:
    'https://true.starbusinessawards.se/award-sba-2026-kj-marketing-sweden-ab-5285/?zone=truecrt&modal=1&lang=se',
};

export const brand = {
  logoIcon: `${CDN}/images/logos/tlogo26d.png`,
  logoWordmark: `${CDN}/images/logos/tlogotext26d.png`,
  metaPartnerBadge: `${CDN}/images/logos/metabusinesspartner.png`,
};

export const heroVideo = {
  src: `${CDN}/videos/kjnewintro2026.mov`,
  poster: `${CDN}/thumbnails/kjnewintro2026.jpg`,
};

export type LogoItem = { src: string; alt: string; width: number; height: number };

export const heroLogos: LogoItem[] = [
  { src: `${CDN}/images/logos/logoHuel.png`,         alt: 'Huel',          width: 170, height: 65 },
  { src: `${CDN}/images/logos/estrellalogo.png`,     alt: 'Estrella',      width: 95,  height: 60 },
  { src: `${CDN}/images/logos/wolt.png`,             alt: 'Wolt',          width: 120, height: 60 },
  { src: `${CDN}/images/logos/tradera.png`,          alt: 'Tradera',       width: 200, height: 30 },
  { src: `${CDN}/images/logos/philips.png`,          alt: 'Philips',       width: 120, height: 60 },
  { src: `${CDN}/images/logos/skyshowtime.png`,      alt: 'SkyShowtime',   width: 220, height: 50 },
  { src: `${CDN}/images/logos/benandjerrylogo.png`,  alt: "Ben & Jerry's", width: 200, height: 30 },
  { src: `${CDN}/images/logos/mindlerLogo.png`,      alt: 'Mindler',       width: 120, height: 60 },
  { src: `${CDN}/images/logos/storytellogo.png`,     alt: 'Storytel',      width: 100, height: 60 },
  { src: `${CDN}/images/logos/foodoralogo.png`,      alt: 'Foodora',       width: 200, height: 40 },
  { src: `${CDN}/images/logos/sonax.png`,            alt: 'Sonax',         width: 180, height: 60 },
  { src: `${CDN}/images/logos/dackskiftarna.png`,    alt: 'Däckskiftarna', width: 180, height: 60 },
  { src: `${CDN}/images/logos/nutrionix.png`,        alt: 'Nutrionix',     width: 160, height: 60 },
];

export type PortfolioCarouselItem = { src: string; alt: string; href?: string };

export const portfolioCarouselItems: PortfolioCarouselItem[] = [
  { src: `${CDN}/images/newtyskpc.png`,           alt: 'Tysk Creator Kampanj' },
  { src: `${CDN}/images/newjuletrojor.png`,       alt: 'Juletröjor Kampanj' },
  { src: `${CDN}/images/newbytada%CC%88ck.png`,    alt: 'Bytadäck',          href: '/portfolio' },
  { src: `${CDN}/images/newkjdinner.png`,         alt: 'KJ Dinner',         href: '/portfolio' },
  { src: `${CDN}/images/newkjbadtunna.png`,       alt: 'KJ Badtunna',       href: '/portfolio' },
  { src: `${CDN}/images/newamericancreator.png`,  alt: 'American Creator',  href: '/portfolio' },
  { src: `${CDN}/images/newkjshoes.png`,          alt: 'KJ Shoes',          href: '/portfolio' },
  { src: `${CDN}/images/newdanishcreator.png`,    alt: 'Danish Creator',    href: '/portfolio' },
  { src: `${CDN}/images/newgamingcomputer.png`,   alt: 'Gaming Computer',   href: '/portfolio' },
  { src: `${CDN}/images/newbatteries.png`,        alt: 'Batteries',         href: '/portfolio' },
];

export type ServicePreview = {
  subhead: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export const servicesPreview: ServicePreview[] = [
  {
    subhead: 'Från koncept till färdig video',
    heading: 'UGC Videos',
    description:
      'Vi kommer överens om upplägg, strategi och vilka kreatörer som passar era mål → Vi bygger brief, gör marknadsanalys och skriver starka manus → Kreatörerna spelar in → Vi sköter all redigering och skickar för godkännande.',
    image: `${CDN}/images/ugcgrid.jpg`,
    imageAlt: 'UGC Video Production',
  },
  {
    subhead: 'UGC-produktion + strategi & publicering',
    heading: 'Social Media Management',
    description:
      'Innehållsplanering baserad på målgrupp och plattform → UGC-videos ingår i upplägget → Publicering enligt överenskommen frekvens → Community management (DMs och kommentarer) → Löpande analys och samordning med annonsering.',
    image: `${CDN}/thumbnails/One of my clients TikTok.jpg`,
    imageAlt: 'Social Media Management',
    reverse: true,
  },
  {
    subhead: 'Meta & TikTok Ads som konverterar',
    heading: 'Paid Advertising',
    description:
      'Vi identifierar behov och lägger struktur → Avtal tecknas → Paid ads-expert sätter upp kampanjer, pixel och optimering → Vi matchar kreatörer, gör marknadsanalys och bygger briefs → Vi producerar UGC och sätter igång adsen.',
    image: `${CDN}/images/millemetadashboard.png`,
    imageAlt: 'Paid Advertising',
  },
];

export type ResultsGridCell = {
  heading: string;
  body: string;
  image: string;
  imageEn?: string;
  imageAlt: string;
  colSpan: number;
  rowSpan: number;
  objectPosition?: string;
};

export const resultsGridCells: ResultsGridCell[] = [
  {
    heading: 'Skalad försäljning med Meta Ads',
    body: '946 800 kr i försäljning på 1,5 månad – 18x ROAS',
    image: `${CDN}/images/kalas.jpeg`,
    imageEn: `${CDN}/images/kalasenglish.jpeg`,
    imageAlt: 'Takeover resultat',
    colSpan: 2,
    rowSpan: 1,
    objectPosition: 'center',
  },
  {
    heading: 'Social Tillväxt',
    body: '2.1M visningar på 28 dagar',
    image: `${CDN}/images/ma%CC%8Anadsresultat.png`,
    imageAlt: 'UGC Reklam resultat',
    colSpan: 1,
    rowSpan: 2,
    objectPosition: 'left top',
  },
  {
    heading: 'Lönsamma Meta Ads-kampanjer',
    body: '141 000 kr i värde på 10 000 kr spend – 14x ROAS',
    image: `${CDN}/images/26dashres.png`,
    imageAlt: 'TikTok Growth resultat',
    colSpan: 2,
    rowSpan: 1,
    objectPosition: 'top',
  },
];

export type ResultCard = {
  id: string;
  subhead: string;
  heading: string;
  body: string;
  image: string;
};

export const resultsCards: ResultCard[] = [
  { id: 'r-takeover', subhead: '1M visningar på 4 veckor', heading: 'Takeover', body: 'Låt mig ta över er eller skapa en TikTok-kanal åt er. Ni lutar er tillbaka, och jag fixar kunderna.', image: `${CDN}/images/tiktokstats.jpeg` },
  { id: 'r-tiktok-growth', subhead: '12.300 följare på 2 månader', heading: 'TikTok Growth', body: 'Fick styra deras TikTok i 2 månader – appen blev en av de mest trendande på App Store.', image: `${CDN}/images/12.3.jpg` },
  { id: 'r-cpa', subhead: 'Kostnad minskade med 49%', heading: 'Kostnaden per resultat', body: 'Dina annonser ger bättre resultat efter mina videor. Kostnaderna minskade drastiskt.', image: `${CDN}/images/bild49.png` },
  { id: 'r-bookings', subhead: 'Kraftig ökning i bokningar', heading: 'Bokningar', body: '"Vi har fått fler bokningar än någonsin de senaste två dagarna!"', image: `${CDN}/images/bokningar.png` },
  { id: 'r-roas-60', subhead: 'Spenderade bara 60 kr', heading: 'Otrolig ROAS', body: 'Varje lead gav 750–2500 kr i resultat av bara 60 kr i annonskostnad.', image: `${CDN}/images/roas.png` },
  { id: 'r-3-7m', subhead: '3,7 miljoner på 7 dagar', heading: 'Exceptionell Tillväxt', body: 'Organisk tillväxt som genererade 3,7 miljoner visningar på bara 7 dagar – visar kraften i autentiskt UGC-innehåll.', image: `${CDN}/images/resultat1.3m7d.png` },
  { id: 'r-1-5m', subhead: '1,5 miljoner på 28 dagar', heading: 'Kraftig Månadsprestation', body: 'Konsekvent tillväxt med 1,5 miljoner visningar under en månad – bevisar långsiktig engagemang.', image: `${CDN}/images/resultat1.5m28d.png` },
  { id: 'r-1-4m', subhead: '1,4 miljoner på 28 dagar', heading: 'Månadskampanj Success', body: 'Stabil kampanjprestation med över 1,4 miljoner visningar under kampanjperioden.', image: `${CDN}/images/resultat1.428d.png` },
  { id: 'r-2m', subhead: '2 miljoner visningar', heading: 'Viral Räckvidd', body: 'Content som nådde 2 miljoner personer – maximal viral spridning och varumärkesexponering.', image: `${CDN}/images/resultat2m.png` },
  { id: 'r-3-7x', subhead: '3,7X avkastning', heading: 'Stark ROAS', body: 'Paid advertising-kampanj som levererade 3,7X ROAS – varje krona genererade 3,70 kr tillbaka.', image: `${CDN}/images/resultat3,7roas.png` },
  { id: 'r-13x', subhead: '13X ROAS', heading: 'Otrolig Avkastning', body: 'Exceptionell kampanjprestation – varje investerad krona gav 13 kronor tillbaka i försäljning.', image: `${CDN}/images/resultat13xroas.png` },
  { id: 'r-2-1m', subhead: '2,1 miljoner på 28 dagar', heading: 'Månadstillväxt', body: 'Imponerande månatlig tillväxt med 2,1 miljoner visningar – konsekvent högt engagemang.', image: `${CDN}/images/resultat2.1m28d.png` },
  { id: 'r-35x', subhead: '35X avkastning', heading: 'Rekord ROAS', body: 'Bästa ROAS någonsin – varje krona i annonsering genererade 35 kronor i försäljning. Bevisar kraften i rätt UGC-content.', image: `${CDN}/images/resultat35xroas.png` },
  { id: 'r-100k-organic', subhead: '100K utan ad spend', heading: 'Organisk Kraft', body: 'Genererade 100 000 kronor i försäljning helt organiskt, utan en krona i annonseringskostnader.', image: `${CDN}/images/resultat100kutanspend.png` },
  { id: 'r-807k', subhead: '807K på 7 dagar', heading: 'Viral Vecka', body: 'Snabb viral tillväxt med över 807 000 visningar på en vecka – maximal reach och engagemang.', image: `${CDN}/images/resultat807k7d.png` },
];

export type TikTokThumb = {
  id: string;
  heading: string;
  body: string;
  image: string;
};

export const tiktokThumbnails: TikTokThumb[] = [
  { id: 'tt-7d', heading: '7 dagars övertagande', body: 'Skräddarsytt TikTok-innehåll för att öka kundens följare och engagemang på plattformen.', image: `${CDN}/images/6dagar.jpg` },
  { id: 'tt-700', heading: '700% tillväxt på en vecka', body: 'Skräddarsytt TikTok-innehåll för att öka kundens följare och engagemang på plattformen.', image: `${CDN}/images/606.PNG` },
  { id: 'tt-2-1m', heading: '2.1 Miljoner 28 Dagar', body: 'Jag skapade deras sociala medier från scratch och på 28 dagar så gjorde jag dom till ett välkänt namn i Sverige med höga konverteringar.', image: `${CDN}/images/2,1.jpg` },
  { id: 'tt-1m', heading: '1 Miljon visningar på 4 veckor!', body: 'Skräddarsytt TikTok-innehåll för att öka kundens följare och engagemang på plattformen.', image: `${CDN}/images/1m.jpg` },
  { id: 'tt-marked', heading: 'Märkbart övertagande', body: 'Skräddarsytt TikTok-innehåll för att öka kundens följare och engagemang på plattformen.', image: `${CDN}/images/523.JPG` },
];

export type StatItem = { value: string; label: string };

export const resultsStats: StatItem[] = [
  { value: '100M+', label: 'TOTALA VISNINGAR 2025' },
  { value: '200+', label: 'KAMPANJER' },
  { value: '10.4M', label: 'MEST VIRALA VIDEON' },
  { value: '35X', label: 'BÄSTA ROAS' },
];

export const portfolioStats: StatItem[] = [
  { value: '100M+', label: 'TOTALA VISNINGAR 2025' },
  { value: '100+', label: 'KUNDFÖRETAG' },
  { value: '10.4M', label: 'MEST VIRALA VIDEON' },
  { value: '12.3K', label: 'FÖLJARTILLVÄXT 2 MÅN' },
];

export type PortfolioItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  videoSrc: string;
  poster: string;
  flag: string;
  categories: string[];
};

export const PORTFOLIO_FILTERS = ['Alla arbeten', 'UGC-videor', 'Internationellt', 'Intervjuer', 'Män', 'Kvinnor'] as const;

export const portfolioItems: PortfolioItem[] = [
  { id: 'item_X2yE5j', category: 'Kampanjer', title: 'Juletröjor E-handelskampanj', description: 'Säsongskampanj för jultröjor som driver e-handelskonverteringar under högtrafik i semestertider.', videoSrc: `${CDN}/videos/SvenskHusmanJultro%CC%88jor.mp4`, poster: `${CDN}/thumbnails/SvenskHusmanJultro%CC%88jor.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_S7tZ2e', category: 'UGC', title: 'Sara - Autentiskt UGC', description: 'Äkta och relaterbart innehåll som skapar stark koppling med målgruppen.', videoSrc: `${CDN}/videos/SARA.mp4`, poster: `${CDN}/thumbnails/SARA.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Kvinnor"] },
  { id: 'item_W9xD2i', category: 'UGC', title: 'Tysk UGC - Prenew Datorkomponenter', description: 'Högkvalitativt UGC-innehåll skapat för tyska marknaden, som visar mångkulturell räckvidd och anpassningsförmåga.', videoSrc: `${CDN}/videos/PrenewTysk.mov`, poster: `${CDN}/thumbnails/PrenewTysk.jpg`, flag: '🇩🇪', categories: ["UGC-videor", "Internationellt", "Män"] },
  { id: 'item_R4sY9d', category: 'UGC', title: 'Stekpanna Produktvisning', description: 'Engagerande köksprodukt UGC som visar praktisk användning och produktfördelar för matlagningsentusiaster.', videoSrc: `${CDN}/videos/stekpanna.mp4`, poster: `${CDN}/thumbnails/stekpanna.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Kvinnor"] },
  { id: 'item_A1bH4m', category: 'UGC', title: 'KJ Hotel Dinner Upplevelse', description: 'Premium hotell- och matupplevelse UGC som tilltalar resande och livsstilskonsumenter.', videoSrc: `${CDN}/videos/slottmanus.mp4`, poster: `${CDN}/thumbnails/slottmanus.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_Y5zF8k', category: 'UGC', title: 'Bytadäck Produktkampanj', description: 'Däckbyten och fordonsprodukter UGC som ökar kundengagemang och driver höga konverteringsrater inom bilbranschen.', videoSrc: `${CDN}/videos/Bythjul1_captions.mov`, poster: `${CDN}/thumbnails/Bythjul1_captions.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_B4cI7n', category: 'UGC', title: 'Amerikansk Creator Samarbete', description: 'Cross-border UGC-kampanj för amerikanska marknaden som visar global räckvidd och kulturell anpassning.', videoSrc: `${CDN}/videos/Hookbeardkit.mov`, poster: `${CDN}/thumbnails/Hookbeardkit.jpg`, flag: '🇺🇸', categories: ["UGC-videor", "Internationellt"] },
  { id: 'item_C7dJ0o', category: 'UGC', title: 'KJ Shoes Produktvisning', description: 'Skomode och stil-UGC som driver engagemang inom mode- och skosektorn.', videoSrc: `${CDN}/videos/Norillo.mp4`, poster: `${CDN}/thumbnails/Norillo.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_D0eK3p', category: 'UGC', title: 'Dansk UGC - Autentisk Skincare-rutin', description: 'Nordiskt UGC-innehåll för danska marknaden som visar regional expertis och kulturell förståelse.', videoSrc: `${CDN}/videos/LymphoraUGCbyChriz.mp4`, poster: `${CDN}/thumbnails/LymphoraUGCbyChriz.jpg`, flag: '🇩🇰', categories: ["UGC-videor", "Internationellt", "Kvinnor"] },
  { id: 'item_E3fL6q', category: 'UGC', title: 'Gaming Dator UGC', description: 'Teknik- och spel-UGC som tilltalar gamers och teknikentusiaster med detaljerade produktvisningar.', videoSrc: `${CDN}/videos/Prenewsvensk.mp4`, poster: `${CDN}/thumbnails/Prenewsvensk.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Kvinnor"] },
  { id: 'item_F6gM9r', category: 'UGC', title: 'Batterikampanj', description: 'Produktdemo för batterier och energilösningar som driver konsumentförtroende och köpbeslut.', videoSrc: `${CDN}/videos/Oddes.mp4`, poster: `${CDN}/thumbnails/Oddes.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_Y7zF2b', category: 'Intervjuer', title: 'Intervju om godis', description: 'Inte bara underhållande utan lyfter också fram det bra, extremt effektivt för att fånga människors nyfikenhet och konvertera.', videoSrc: `${CDN}/videos/bilintervju.mp4`, poster: `${CDN}/thumbnails/bilintervju.jpg`, flag: '🇸🇪', categories: ["Intervjuer", "Män"] },
  { id: 'item_V8wC4y', category: 'Viralt', title: 'Svenska Ikoner-utmaning med Swae Lee', description: 'Rapper Swae Lee takes on the ultimate Swedish culture test! Can this global superstar name the three biggest Swedish icons: ABBA, Zlatan, and Avicii? This viral interview moment showcases the perfect blend of entertainment and cultural connection.', videoSrc: `${CDN}/videos/swaelee.mp4`, poster: `${CDN}/thumbnails/swaelee.jpg`, flag: '🇺🇸', categories: ["Internationellt", "Intervjuer"] },
  { id: 'item_T0uA5f', category: 'UGC', title: 'Up & Down Produktdemo', description: 'Dynamisk produktvisning som visar funktionalitet och fördelar på ett engagerande sätt.', videoSrc: `${CDN}/videos/Up&Down.mov`, poster: `${CDN}/thumbnails/Up&Down.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Intervjuer", "Män"] },
  { id: 'item_W1xD7z', category: 'UGC', title: 'Uppmärksamhetsväckande UGC', description: 'Engagerande innehåll som maximerar räckvidd i sociala medier och varumärkessynlighet.', videoSrc: `${CDN}/videos/calm.mp4`, poster: `${CDN}/thumbnails/calm.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_X4yE9a', category: 'Viralt', title: 'Viral TikTok reklam', description: 'Företaget ville pusha ut denna i deras betalda marknadsföring. Men redan på TikTok gick den viral utan 1kr i extra kostnad, som drog in massor av kunder och följare.', videoSrc: `${CDN}/videos/viral.mp4`, poster: `${CDN}/thumbnails/viral.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_Z0aG5c', category: 'UGC', title: 'En Dag i Livet', description: 'Autentiskt bakom kulisserna-innehåll som skapar personlig koppling med publiken.', videoSrc: `${CDN}/videos/Dayinthelife.mp4`, poster: `${CDN}/thumbnails/Dayinthelife.jpg`, flag: '🇬🇧', categories: ["UGC-videor", "Män"] },
  { id: 'item_A3bH8d', category: 'UGC', title: 'Husdjursvänligt Innehåll', description: 'Engagerande husdjursinnehåll som tilltalar djurälskare och konsumenter av husdjursprodukter.', videoSrc: `${CDN}/videos/dog.mp4`, poster: `${CDN}/thumbnails/dog.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_B6cI1n', category: 'UGC', title: 'Trädgårdsproduktvisning', description: 'Visning av trädgårdsprodukter i en autentisk miljö som tilltalar hementusiaster.', videoSrc: `${CDN}/videos/gardenugc.mp4`, poster: `${CDN}/thumbnails/gardenugc.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_C9dJ4o', category: 'UGC', title: 'Herboxa Produktdemo', description: 'Utbildande innehåll som lyfter fram fördelarna med hälso- och välmåendeprodukter.', videoSrc: `${CDN}/videos/herboxa.mp4`, poster: `${CDN}/thumbnails/herboxa.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_D2eK7p', category: 'Kampanjer', title: 'Instagram-kampanj', description: 'Optimerad Instagram-annons som driver engagemang och konverteringar på plattformen.', videoSrc: `${CDN}/videos/Instagramad.mp4`, poster: `${CDN}/thumbnails/Instagramad.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_E5fL0q', category: 'TikTok', title: '200k visningar på 1 vecka', description: 'En TikTok som flög och blev extremt populär - tusentals gillningar o kommentarer.', videoSrc: `${CDN}/videos/One of my clients TikTok.mp4`, poster: `${CDN}/thumbnails/One of my clients TikTok.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_F8gM3r', category: 'UGC', title: 'Lugn Seriös UGC', description: 'Denna UGC-annons var mot nätmobbning och hjälpte människor att bekämpa det. Visar kraften i lugnt, seriöst innehåll för att ta itu med viktiga sociala frågor.', videoSrc: `${CDN}/videos/calm.mp4`, poster: `${CDN}/thumbnails/calm.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_G1hN6s', category: 'Intervjuer', title: 'Vox Pop-intervjuer', description: 'Intervjuer förändrar digital marknadsföring genom att öka social media-engagemang och annonskonvertering. Autentiskt innehåll skapar starka kontakter.', videoSrc: `${CDN}/videos/interviewVoxpop.mp4`, poster: `${CDN}/thumbnails/interviewVoxpop.jpg`, flag: '🇸🇪', categories: ["Intervjuer", "Män"] },
  { id: 'item_H4iO9t', category: 'Kampanjer', title: 'Tidsbegränsat Erbjudande', description: 'Övertygande reklamvideo som driver handling med ett tydligt värdeerbjudande.', videoSrc: `${CDN}/videos/offer-swap-ad.mp4`, poster: `${CDN}/thumbnails/offer-swap-ad.jpg`, flag: '🇬🇧', categories: ["UGC-videor", "Män"] },
  { id: 'item_I7jP2u', category: 'Kampanjer', title: 'Introduktion Till Mina Tjänster', description: 'Tidig varumärkesintroduktionsvideo som visar utvecklingen av min innehållsskapande stil.', videoSrc: `${CDN}/videos/oldintro.mp4`, poster: `${CDN}/thumbnails/oldintro.jpg`, flag: '🇬🇧', categories: ["UGC-videor", "Män"] },
  { id: 'item_J0kQ5v', category: 'UGC', title: 'Olivoljeproduktvisning', description: 'Matfokuserat UGC-innehåll som framhäver produktkvalitet och kulinariska användningsområden.', videoSrc: `${CDN}/videos/oliveoilugc.mp4`, poster: `${CDN}/thumbnails/oliveoilugc.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_K3lR8w', category: 'TikTok', title: 'Swiffer Produktdemo', description: 'Demonstration av produktfördelar på ett relaterbart sätt som resonerar med målgruppen.', videoSrc: `${CDN}/videos/Swifferad.mp4`, poster: `${CDN}/thumbnails/Swifferad.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_L6mS1x', category: 'Intervjuer', title: 'Fazer Produktintervju', description: 'Street-style intervju som visar produkten i verkliga situationer.', videoSrc: `${CDN}/videos/fazer.mp4`, poster: `${CDN}/thumbnails/fazer.jpg`, flag: '🇸🇪', categories: ["Intervjuer", "Män"] },
  { id: 'item_M9nT4y', category: 'Intervjuer', title: 'Kepsar Intervju', description: 'Engagerande gatu-intervju om mode och stil.', videoSrc: `${CDN}/videos/kepsarintervju.mp4`, poster: `${CDN}/thumbnails/kepsarintervju.jpg`, flag: '🇸🇪', categories: ["Intervjuer", "Män"] },
  { id: 'item_N2oU7z', category: 'UGC', title: 'Parfymvisning', description: 'Denna högpresterande UGC-kampanj för premiumdoftalternativ levererade exceptionell ROAS och engagemangsnivåer, vilket gjorde den till en av våra mest framgångsrika annonser hittills.', videoSrc: `${CDN}/videos/perfume.mp4`, poster: `${CDN}/thumbnails/perfume.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_O5pV0a', category: 'UGC', title: 'Fastighetsmarknadsföring', description: 'Engagerande fastighetsvisning som lyfter fram viktiga funktioner och skapar känslomässig koppling med tittarna.', videoSrc: `${CDN}/videos/Realestate.mp4`, poster: `${CDN}/thumbnails/Realestate.jpg`, flag: '🇬🇧', categories: ["UGC-videor", "Män"] },
  { id: 'item_P8qW3b', category: 'Kampanjer', title: 'Berättelsedriven Kampanj', description: 'Övertygande berättelser som skapar en känslomässig koppling mellan varumärket och dess publik.', videoSrc: `${CDN}/videos/Storytelling.mp4`, poster: `${CDN}/thumbnails/Storytelling.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
  { id: 'item_Q1rX6c', category: 'UGC', title: 'Unboxing Upplevelse', description: 'Autentisk unboxing som skapar spänning och visar produktens värde.', videoSrc: `${CDN}/videos/unboxing.mp4`, poster: `${CDN}/thumbnails/unboxing.jpg`, flag: '🇸🇪', categories: ["UGC-videor", "Män"] },
];

export type ServiceHighlight = { title: string; subtitle: string };

export const serviceHighlights: ServiceHighlight[] = [
  { title: 'UGC Videos', subtitle: '50+ handplockade kreatörer för dig' },
  { title: 'Social Media Management', subtitle: 'Organisk tillväxt och engagemang' },
  { title: 'Paid Advertising', subtitle: 'Meta & TikTok Ads som konverterar' },
];

export type ServiceProcess = { service: string; description: string; steps: { num: string; heading: string; body: string }[] };

export const tjansterProcesses: ServiceProcess[] = [
  { service: 'UGC Videos', description: 'Planering, kreatörer, inspelning och redigering av användargenererat videoinnehåll', steps: [
    { num: '1', heading: 'Första Kontakt & Upplägg', body: 'Ni kontaktar oss och vi kommer överens om upplägg, strategi, vilka kreatörer som passar och era mål och visioner – antingen direkt via mail eller i möte.' },
    { num: '2', heading: 'Marknadsanalys & Brief', body: 'Vi bygger en omfattande brief och gör en marknadsanalys för att slå konkurrensen. Vi analyserar målgrupp, plattform och konkurrenters styrkor och svagheter.' },
    { num: '3', heading: 'Manus & Avtal', body: 'Vi skriver starka manus optimerade för maximal impact och konvertering. Samtidigt upprättas avtal med både er och kreatörerna för tydliga förväntningar.' },
    { num: '4', heading: 'Inspelning', body: 'Våra handplockade kreatörer spelar in materialet enligt brief och manus. Varje kreatör är noggrant vald för att matcha ert varumärke och målgrupp.' },
    { num: '5', heading: 'Redigering', body: 'Vi sköter all redigering och bearbetar materialet till polerade, plattformsanpassade videos med captions, musik och effekter.' },
    { num: '6', heading: 'Leverans & Godkännande', body: 'Vi skickar de färdiga videorna till er för godkännande. Redo för publicering, annonsering eller social media management.' },
  ] },
  { service: 'Social Media Management', description: 'Innehållsplanering, publicering och hantering av era sociala medier', steps: [
    { num: '1', heading: 'Första Kontakt & Upplägg', body: 'Ni kontaktar oss och vi kommer överens om upplägg, strategi, vilka kreatörer som passar och era mål och visioner. UGC-videos ingår i vårt upplägg.' },
    { num: '2', heading: 'Innehållsplanering & Strategi', body: 'Innehållsplanering baserad på målgrupp, plattform och affärsmål. Strategi för tonalitet, budskap och innehållstyper (informativt, varumärkesbyggande, konverterande).' },
    { num: '3', heading: 'UGC-Produktion', body: 'Vi bygger briefs, gör marknadsanalys, skriver starka manus och avtal. Kreatörerna spelar in och vi sköter all redigering för era kanaler.' },
    { num: '4', heading: 'Publicering & Optimering', body: 'Publicering av innehåll enligt överenskommen frekvens. Optimering av captions, hashtags och format per plattform för maximal räckvidd.' },
    { num: '5', heading: 'Community Management', body: 'Vi svarar på DMs och kommentarer i rimlig utsträckning. Grundläggande community management för att bygga relationer med er målgrupp.' },
    { num: '6', heading: 'Analys & Samordning', body: 'Löpande analys av vad som fungerar och justering av innehåll därefter. Samordning av organiskt innehåll med pågående annonsering.' },
  ] },
  { service: 'Paid Advertising', description: 'Annonsering på Meta och TikTok med fokus på struktur och uppföljning', steps: [
    { num: '1', heading: 'Första Kontakt & Behovsidentifiering', body: 'Ni kontaktar oss och vi identifierar behov, ställer frågor för att djupdyka och lägger en struktur för kampanjerna.' },
    { num: '2', heading: 'Avtal & Överenskommelse', body: 'När vi kommit överens skrivs avtal och vi sätter förväntningar och mål för kampanjerna.' },
    { num: '3', heading: 'Kampanjupplägg & Pixel', body: 'Vår paid ads-expert sätts i möte med bolaget och sätter upp allt från kampanjer till pixel till optimering på Meta och TikTok.' },
    { num: '4', heading: 'Kreatörer & Marknadsanalys', body: 'Vi matchar kreatörer, gör marknadsanalyser och bygger briefs som skräddarsyr efter era mål och maximal styrka.' },
    { num: '5', heading: 'Manus & Produktion', body: 'Vi skriver manus optimerade för paid ads och producerar UGC-videos specifikt för att konvertera i era kampanjer.' },
    { num: '6', heading: 'Lansering & Optimering', body: 'Vi sätter igång adsen, övervakar prestanda och optimerar kontinuerligt för att maximera ROAS och skalning.' },
  ] },
];

export type ResultItem = { id: string; image: string; heading: string; subhead: string; body: string };

export const resultsItems: ResultItem[] = [
  { id: 'item_jucd8f', image: `${CDN}/images/kalas.jpeg`, heading: `Skalad försäljning med Meta Ads`, subhead: `946 800 kr i försäljning på 1,5 månad – 18x ROAS`, body: `Skalat från 10 800 kr till 42 130 kr i månatlig annonsbudget med bibehållen lönsamhet – 2 460 köp genererade nästan en miljon i värde.` },
  { id: 'item_njcd83', image: `${CDN}/images/ma%CC%8Anadsresultat.png`, heading: `Social Tillväxt`, subhead: `2.1M visningar på 28 dagar`, body: `Snabb tillväxt genom strategiskt UGC som driver trafik, profilbesök och köpintention.` },
  { id: 'item_lokiju', image: `${CDN}/images/26dashres.png`, heading: `Lönsamma Meta Ads-kampanjer`, subhead: `141 000 kr i värde på 10 000 kr spend – 14x ROAS`, body: `264 000 visningar och 150 000 personer i räckvidd som genererade 331 köp – mätbar tillväxt på Meta Ads.` },
  { id: 'item_G0jI3l', image: `${CDN}/images/tiktokstats.jpeg`, heading: `Takeover`, subhead: `1M visningar på 4 veckor`, body: `Låt mig ta över er eller skapa en TikTok-kanal åt er. Ni lutar er tillbaka, och jag fixar kunderna.` },
  { id: 'item_H3kJ6m', image: `${CDN}/images/12.3.jpg`, heading: `TikTok Growth`, subhead: `12.300 följare på 2 månader`, body: `Fick styra deras TikTok i 2 månader – appen blev en av de mest trendande på App Store.` },
  { id: 'item_I6lK9n', image: `${CDN}/images/bild49.png`, heading: `Kostnaden per resultat`, subhead: `Kostnad minskade med 49%`, body: `Dina annonser ger bättre resultat efter mina videor. Kostnaderna minskade drastiskt.` },
  { id: 'item_J9mL2o', image: `${CDN}/images/bokningar.png`, heading: `Bokningar`, subhead: `Kraftig ökning i bokningar`, body: `"Vi har fått fler bokningar än någonsin de senaste två dagarna!"` },
  { id: 'item_K2nM5p', image: `${CDN}/images/roas.png`, heading: `Otrolig ROAS`, subhead: `Spenderade bara 60 kr`, body: `Varje lead gav 750–2500 kr i resultat av bara 60 kr i annonskostnad.` },
  { id: 'item_L5oN8q', image: `${CDN}/images/resultat1.3m7d.png`, heading: `Exceptionell Tillväxt`, subhead: `3,7 miljoner på 7 dagar`, body: `Organisk tillväxt som genererade 3,7 miljoner visningar på bara 7 dagar – visar kraften i autentiskt UGC-innehåll.` },
  { id: 'item_M8pO1r', image: `${CDN}/images/resultat1.5m28d.png`, heading: `Kraftig Månadsprestation`, subhead: `1,5 miljoner på 28 dagar`, body: `Konsekvent tillväxt med 1,5 miljoner visningar under en månad – bevisar långsiktig engagemang.` },
  { id: 'item_N1qP4s', image: `${CDN}/images/resultat1.428d.png`, heading: `Månadskampanj Success`, subhead: `1,4 miljoner på 28 dagar`, body: `Stabil kampanjprestation med över 1,4 miljoner visningar under kampanjperioden.` },
  { id: 'item_O4pQ7s', image: `${CDN}/images/resultat2m.png`, heading: `Viral Räckvidd`, subhead: `2 miljoner visningar`, body: `Content som nådde 2 miljoner personer – maximal viral spridning och varumärkesexponering.` },
  { id: 'item_P7qR0t', image: `${CDN}/images/resultat3,7roas.png`, heading: `Stark ROAS`, subhead: `3,7X avkastning`, body: `Paid advertising-kampanj som levererade 3,7X ROAS – varje krona genererade 3,70 kr tillbaka.` },
  { id: 'item_Q0rS3u', image: `${CDN}/images/resultat13xroas.png`, heading: `Otrolig Avkastning`, subhead: `13X ROAS`, body: `Exceptionell kampanjprestation – varje investerad krona gav 13 kronor tillbaka i försäljning.` },
  { id: 'item_R3sT6v', image: `${CDN}/images/resultat2.1m28d.png`, heading: `Månadstillväxt`, subhead: `2,1 miljoner på 28 dagar`, body: `Imponerande månatlig tillväxt med 2,1 miljoner visningar – konsekvent högt engagemang.` },
  { id: 'item_S6tU9w', image: `${CDN}/images/resultat35xroas.png`, heading: `Rekord ROAS`, subhead: `35X avkastning`, body: `Bästa ROAS någonsin – varje krona i annonsering genererade 35 kronor i försäljning. Bevisar kraften i rätt UGC-content.` },
  { id: 'item_T9uV2x', image: `${CDN}/images/resultat100kutanspend.png`, heading: `Organisk Kraft`, subhead: `100K utan ad spend`, body: `Genererade 100 000 kronor i försäljning helt organiskt, utan en krona i annonseringskostnader.` },
  { id: 'item_U2vW5y', image: `${CDN}/images/resultat807k7d.png`, heading: `Viral Vecka`, subhead: `807K på 7 dagar`, body: `Snabb viral tillväxt med över 807 000 visningar på en vecka – maximal reach och engagemang.` },
  { id: 'portfolio_R4sY9d', image: `${CDN}/images/6dagar.jpg`, heading: `7 dagars övertagande`, subhead: `TikTok`, body: `Skräddarsytt TikTok-innehåll för att öka kundens följare och engagemang på plattformen.` },
  { id: 'portfolio_S7tZ2e', image: `${CDN}/images/606.PNG`, heading: `700% tillväxt på en vecka`, subhead: `TikTok`, body: `Skräddarsytt TikTok-innehåll för att öka kundens följare och engagemang på plattformen.` },
  { id: 'portfolio_T0uA5f', image: `${CDN}/images/2,1.jpg`, heading: `2.1 Miljoner 28 Dagar`, subhead: `TikTok`, body: `Jag skapade deras sociala medier från scratch och på 28 dagar så gjorde jag dom till ett välkänt namn i Sverige med höga konverteringar.` },
  { id: 'portfolio_U3vB8g', image: `${CDN}/images/1m.jpg`, heading: `1 Miljon visningar på 4 veckor!`, subhead: `TikTok`, body: `Skräddarsytt TikTok-innehåll för att öka kundens följare och engagemang på plattformen.` },
  { id: 'portfolio_V6wC1h', image: `${CDN}/images/523.JPG`, heading: `Märkbart övertagande`, subhead: `TikTok`, body: `Skräddarsytt TikTok-innehåll för att öka kundens följare och engagemang på plattformen.` },
];

export type Testimonial = {
  id: string;
  link: string;
  avatarSrc?: string;
  author: string;
  review: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  { id: 't1',  link: 'https://www.trustpilot.com/reviews/696b68c478ee688104fa4e1a', author: 'Anders Svedberg', rating: 5, review: 'Jag är väldigt nöjd med mitt samarbete med KJ Marketing Sweden AB. Kevin har varit otroligt professionell, lyhörd och engagerad genom hela processen. Han är tydlig i sin kommunikation, håller vad han lovar och levererar resultat. Rekommenderar starkt Kevin och KJ Marketing till alla som söker seriös och kompetent marknadsföring.' },
  { id: 't2',  link: 'https://www.trustpilot.com/reviews/69580d0b4fc385cbb00ddbf8', author: 'Roine Karlsson', rating: 5, review: 'Professionellt och seriöst bemötande med fokus på att marknadsföra vad kunden efterfrågar!' },
  { id: 't3',  link: 'https://www.trustpilot.com/reviews/696de4f002a8da17bd2568b6', avatarSrc: 'https://user-images.trustpilot.com/657028f758ab9c00121452f0/73x73.png', author: 'Cheyenne Oestreich', rating: 5, review: 'Kevin är lyhörd, professionell och väldigt trygg i vad han gör. Stor rekommendation!!!' },
  { id: 't4',  link: 'https://www.trustpilot.com/reviews/6945ac2106f1d5733d79fa98', author: 'Milot Stagova', rating: 5, review: 'Otrolig service! Snabba och sjukt bra resultat. Kunnig, ung, kreativ och rolig - samtidigt väldigt professionell. Hade jag kunnat ge fler stjärnor så hade jag.' },
  { id: 't5',  link: 'https://www.trustpilot.com/reviews/692fe9a897df54c0dd4de5b6', author: 'Ramin Hosseini', rating: 5, review: 'Fantastiskt samarbete med KJ-teamet! Sedan jag började arbeta med KJ-teamet märkte jag direkt hur annonserna började skala – på riktigt. Försäljningen ökade markant och resultaten blev betydligt bättre än tidigare. Grymt jobbat hela KJ-teamet!' },
  { id: 't6',  link: 'https://www.trustpilot.com/reviews/69205e961225c6dd2a97556f', author: 'Hannes Lindvert Elmefur', rating: 5, review: 'Kompetenta och tillmötesgående. Tack för bra tjänst!' },
  { id: 't7',  link: 'https://www.trustpilot.com/reviews/691adbd691262b2ae9023177', avatarSrc: 'https://user-images.trustpilot.com/691adbcaef3d6c3b82c8a173/73x73.png', author: 'Akseli Köngäs', rating: 5, review: "It's been an absolute pleasure to work with KJ marketing. We at Prenew have outsourced our Swedish short-form content creation to KJ for around 10 months, and we have been satisfied the whole time. They produce good quality videos always reliably. Perhaps the best thing has been how easy communication has been." },
  { id: 't8',  link: 'https://www.trustpilot.com/reviews/691a1d5e483da3006f82b26f', author: 'Ida UGC-kreatör', rating: 5, review: 'Kevin är toppen att samarbeta med! Perfekt kommunikation, tydlighet och inga konstigheter - smidigt rakt igenom varje gång! Full av glädje och energi som känns genom orden i mailen. Rekommenderar!' },
  { id: 't9',  link: 'https://www.trustpilot.com/reviews/691795670e4409fbede78d96', author: 'Albin Strath', rating: 5, review: 'Bästa UGC videosarna i sverige!!' },
  { id: 't10', link: 'https://www.trustpilot.com/reviews/691771d915074eb5c9c6d6f8', author: 'Nils Lindstedt', rating: 5, review: 'Riktigt vass UGC-byrå som verkligen vet hur man levererar content som konverterar, rekommenderar varmt!' },
  { id: 't11', link: 'https://www.trustpilot.com/reviews/68fa122c5a22fe172de14179', author: 'VYTRA AB', rating: 5, review: 'Inte nog med att Kevin har varit otroligt behjälplig när det kommer till tankesätt kring sociala medier, så producerar hans content mycket engegemang och högre än avarage ROAS, skippa tråkig content som knappt ger 1x ROAS och testa KJ marketing.' },
  { id: 't12', link: 'https://www.trustpilot.com/reviews/68f92ed29854188bdef7d278', author: 'Elliot Britton Hägerstrand', rating: 5, review: '5/5 sjukt nöjd. Jag kör nästan allt mitt ugc genom KJ marketing och har skalat ordentligt på senaste tiden. Snabbt, smidigt och högsta kvalitet.' },
  { id: 't13', link: 'https://www.trustpilot.com/reviews/68ee4c50c8eeeb38487dd8e3', avatarSrc: 'https://user-images.trustpilot.com/68ee4bf887e694b97a281750/73x73.png', author: 'Daniel Park & Trädgårdsmaskiner', rating: 5, review: 'Kevin har varit en otroligt värdefull partner för vårt företag. Hans team visade en djup förståelse för våra mål och utmaningar, vilket resulterade i en marknadsföringsstrategi som verkligen gav resultat. Det som verkligen imponerade på oss var deras förmåga att tänka utanför boxen och komma med kreativa lösningar.' },
  { id: 't14', link: 'https://www.trustpilot.com/reviews/68ed4f9d2c0f6996a90e5709', author: 'Nathalie', rating: 5, review: 'Vi har haft nöjet att arbeta med KJ Marketing under de senaste månaderna och är otroligt imponerade av både deras kompetens och engagemang. Från första mötet kände vi att de verkligen lyssnade på våra behov och kom med kreativa lösningar anpassade för just vår bransch.' },
  { id: 't15', link: 'https://www.trustpilot.com/reviews/68ed3cb01185b7e9f14b4964', avatarSrc: 'https://user-images.trustpilot.com/6127c63b99d1e90015af38c1/73x73.png', author: 'Adrian Rosales', rating: 5, review: 'KJ Marketing har hjälpt oss nå nya nivåer! Vi är så nöjda med resultaten och rekommenderar andra som vill öka sin närvaro att anlita KJ Marketing. Lyhörda, kreativa och alltid snabb respons.' },
  { id: 't16', link: 'https://www.trustpilot.com/reviews/68ed33a71544db694682153d', avatarSrc: 'https://user-images.trustpilot.com/6898d11504313e43764e5648/73x73.png', author: 'Lauri Veracierta', rating: 5, review: 'Jag har haft ett superbra samarbete med Kevin, väldigt proffsig och tydlig i sin kommunikation. Allt gick smidigt från start till leverans, och det var lätt att samarbeta genom hela processen. Har verkligen inget negativt att säga, bara en positiv upplevelse och kan varmt rekommendera både Kevin och byrån!' },
  { id: 't17', link: 'https://www.trustpilot.com/reviews/68e8a89cb26991c3a60dac96', author: 'Erik Ljung', rating: 5, review: 'Snabb leverans och riktigt bra content! Kevin är superproffsig och väldigt flexibel – lätt att samarbeta med från start till mål. Rekommenderas varmt!' },
  { id: 't18', link: 'https://www.trustpilot.com/reviews/68e60decf597335a9f316889', author: 'Wax Clean', rating: 5, review: 'Grym UGC byrå! Kevin är grym på att leverera högkonverterande annonsvideos. Jag har själv beställt totalt 3 UGCs, i början 1x och sen 2 till. Jag var först orolig över att de inte skulle spendera men energin och redigeringen som kommer med videon är otroligt bra! Man känner verkligen att man fått de man betalat för! Grymt jobbat Kevin! Rekommenderar denna byrå starkt!' },
];
