// Single source of copy for all eight designs (01-04 via cv.js, 05-08 via claude/render.js).
// Each language has its own copy and interface labels; ?lang=fr picks French, anything else English.
// Keep `en` and `fr` jobs in the same order with the same dates.
window.CV_CONTENT = {
  en: {
    name: 'Laura Leiboff', firstName: 'Laura', lastName: 'Leiboff',
    title: 'Tour leader & ski instructor',
    email: 'laura.l2@hotmail.fr', phone: '+33 6 81 80 34 09',
    nationality: 'French',
    countries: '130+',
    kilimanjaro: '5',
    eventSize: '500+',
    // Short version for tighter layouts; `about` for designs with room for more.
    intro: 'Tour leader since 2022, supporting groups and liaising with local guides: five Kilimanjaro trips, events for over 500 people and ski instruction since 2019.',
    about: 'Since 2022, I have coordinated mountain trips on the ground, including five to Kilimanjaro. I am the group’s point of contact and liaise with local guides and crews. Trained in events management in Paris, I have organised events for over 500 people, taught skiing every winter since 2019 and managed teams on three continents.',
    // [language, level, bar width % used by Summit]
    languages: [
      ['French', 'Native', 100], ['Polish', 'Bilingual', 95],
      ['English', 'Fluent', 85], ['Spanish', 'Intermediate', 60]
    ],
    strengths: ['Running trips on the ground', 'Group leadership', 'Ski instruction', 'Events for 500+ people'],
    interests: ['Trekking', 'Skiing', 'Snorkelling', 'Yoga', 'Salsa & bachata', 'Cooking'],
    education: [
      ['Master, Events Management & Business Tourism', 'INFA', '2013'],
      ['Bachelor, Business Tourism', 'INFA', '2011'],
      ['HND, Tourism Studies', 'ENC Paris Bessières', '2009']
    ],
    // Newest first. `to`: 'now' for ongoing, omitted for a single year.
    // `kind` colours the runs on the piste map: manage, expedition, ski, guide.
    // Leave `description` empty when the title says it all; every design skips empty ones.
    jobs: [
      {from:'2026', title:'Camp manager', company:'Feel the Flow', place:'', kind:'manage', description:'Camp operations, guest welcome and team management.'},
      {from:'2022', to:'now', title:'Challenge tour leader', company:'4Challenge', place:'Mountain expeditions', kind:'expedition', description:'Group support and liaison with local guides; five Kilimanjaro trips.'},
      {from:'2019', to:'now', title:'Ski instructor', company:'Started at ESS Torgon', place:'Switzerland', kind:'ski', description:''},
      {from:'2019', to:'now', title:'Guide & tour leader', company:'Adventures by Disney', place:'Paris & the Seine', kind:'guide', description:'Seine cruises and Paris tours, groups of up to 130 guests.'},
      {from:'2018', title:'Guide & tour leader', company:'Corpoland', place:'Gdańsk, Poland', kind:'guide', description:''},
      {from:'2016', to:'2018', title:'Team manager & guide', company:'Down Under Pedicab', place:'Darwin, Australia', kind:'manage', description:'Hired and ran the rider crew.'},
      {from:'2010', to:'2015', title:'Project manager', company:'Liberty Incentives & Team Tonic Services', place:'Paris, France', kind:'manage', description:'Corporate events and team building, from proposal and budget to on-site delivery.'}
    ],
    labels: {
      now: 'today', switchTo: 'Français', allDesigns: '← All designs', print: 'Print / PDF',
      about: 'About', experience: 'Selected experience', languages: 'Languages', education: 'Education',
      strengths: 'What I bring', interests: 'Interests', travelNote: 'Travelled to {n} countries',
      countriesTravelled: 'countries travelled', countriesVisited: 'Countries visited',
      kiliExpeditions: 'Kilimanjaro expeditions', kilimanjaro: 'Kilimanjaro', kiboHeight: '5,895 m',
      eventPeople: 'people at one event', languagesSpoken: 'languages spoken', languagesShort: 'languages',
      // design-specific
      editorialEyebrow: 'Tour leader / Expeditions / Ski instructor', atlasEyebrow: 'People. Places. Possibilities.',
      fieldSignoff: 'Curious by nature.', fieldInterests: 'Beyond the itinerary', studioHeading: 'Up mountains, around the world',
      summitRoute: 'The route so far', summitPeak: '5,895 m and up', summitInterests: 'Off the clock',
      passportName: 'Surname / Given name', passportProfession: 'Profession', passportNationality: 'Nationality',
      passportPhone: 'Phone', passportEmail: 'Email', passportStamps: 'Entries & exits', tanzania: 'Tanzania',
      risoWork: 'Work', risoBadge: 'countries and counting', risoKili: '5,895 m, with the whole team on top',
      risoStudied: 'Studied', risoLoves: 'Loves',
      pisteRuns: 'Runs, in order of descent', pisteGuide: 'Guiding', pisteSki: 'Ski teaching',
      pisteManage: 'Team & camp management', pisteExpedition: 'Expeditions', pisteInterests: 'Après-ski',
      // gallery
      galleryTitle: 'One CV, eight looks.',
      galleryIntro: 'Tour leader for mountain expeditions and ski instructor. Open any design to view it full size or save it as a PDF.',
      d1: 'Terracotta editorial', d1Text: 'Warm, personal and a little magazine-like.',
      d2: 'Cobalt atlas', d2Text: 'Confident type, bright blue and a clear experience timeline.',
      d3: 'Forest field notes', d3Text: 'Grounded, outdoorsy and quietly adventurous.',
      d4: 'Lilac studio', d4Text: 'Friendly color blocks with a modern, playful rhythm.',
      d5: 'Summit', d5Text: 'A sunrise climb through her career.',
      d6: 'Passport', d6Text: 'A passport-inspired layout with stamped experience.',
      d7: 'Riso', d7Text: 'Bold pink, blue and yellow with a printed-poster feel.',
      d8: 'Piste map', d8Text: 'A ski-map layout with experience marked as numbered runs.'
    }
  },
  fr: {
    name: 'Laura Leiboff', firstName: 'Laura', lastName: 'Leiboff',
    title: 'Tour leader & monitrice de ski',
    email: 'laura.l2@hotmail.fr', phone: '+33 6 81 80 34 09',
    nationality: 'Française',
    countries: '130+',
    kilimanjaro: '5',
    eventSize: '500+',
    intro: 'Tour leader depuis 2022, référente des groupes et interlocutrice des guides locaux : cinq voyages au Kilimandjaro, des événements de plus de 500 personnes et l’enseignement du ski depuis 2019.',
    about: 'Depuis 2022, je coordonne des séjours en montagne sur le terrain, dont cinq au Kilimandjaro. Référente du groupe, j’assure la liaison avec les guides et les équipes locales. Formée à l’événementiel à Paris, j’ai organisé des événements de plus de 500 personnes, enseigné le ski chaque hiver depuis 2019 et encadré des équipes sur trois continents.',
    languages: [
      ['Français', 'Langue maternelle', 100], ['Polonais', 'Bilingue', 95],
      ['Anglais', 'Courant', 85], ['Espagnol', 'Intermédiaire', 60]
    ],
    strengths: ['Gestion de voyages sur le terrain', 'Encadrement de groupes', 'Enseignement du ski', 'Événements de plus de 500 personnes'],
    interests: ['Randonnée', 'Ski', 'Snorkeling', 'Yoga', 'Salsa & bachata', 'Cuisine'],
    education: [
      ['Master en management événementiel et tourisme d’affaires', 'INFA', '2013'],
      ['Bachelor en tourisme d’affaires', 'INFA', '2011'],
      ['BTS Tourisme', 'ENC Paris Bessières', '2009']
    ],
    jobs: [
      {from:'2026', title:'Responsable de camp', company:'Feel the Flow', place:'', kind:'manage', description:'Gestion du camp, accueil des participants et encadrement de l’équipe.'},
      {from:'2022', to:'now', title:'Tour leader', company:'4Challenge', place:'Expéditions en montagne', kind:'expedition', description:'Suivi des groupes et liaison avec les guides locaux ; cinq voyages au Kilimandjaro.'},
      {from:'2019', to:'now', title:'Monitrice de ski', company:'Débuts à ESS Torgon', place:'Suisse', kind:'ski', description:''},
      {from:'2019', to:'now', title:'Guide & accompagnatrice', company:'Adventures by Disney', place:'Paris & la Seine', kind:'guide', description:'Croisières sur la Seine et visites de Paris, groupes jusqu’à 130 personnes.'},
      {from:'2018', title:'Guide & accompagnatrice', company:'Corpoland', place:'Gdańsk, Pologne', kind:'guide', description:''},
      {from:'2016', to:'2018', title:'Responsable d\'équipe & guide', company:'Down Under Pedicab', place:'Darwin, Australie', kind:'manage', description:'Recrutement et encadrement de l\'équipe.'},
      {from:'2010', to:'2015', title:'Cheffe de projet', company:'Liberty Incentives & Team Tonic Services', place:'Paris, France', kind:'manage', description:'Événements d’entreprise et team building : conception, budgets et coordination sur place.'}
    ],
    labels: {
      now: 'aujourd\'hui', switchTo: 'English', allDesigns: '← Tous les designs', print: 'Imprimer / PDF',
      about: 'À propos', experience: 'Expérience', languages: 'Langues', education: 'Formation',
      strengths: 'Mes atouts', interests: 'Centres d\'intérêt', travelNote: '{n} pays visités',
      countriesTravelled: 'pays visités', countriesVisited: 'Pays visités',
      kiliExpeditions: 'expéditions au Kilimandjaro', kilimanjaro: 'Kilimandjaro', kiboHeight: '5 895 m',
      eventPeople: 'participants par événement', languagesSpoken: 'langues parlées', languagesShort: 'langues',
      editorialEyebrow: 'Tour leader / Expéditions / Monitrice de ski', atlasEyebrow: 'Des rencontres. Des lieux. Des horizons.',
      fieldSignoff: 'Curieuse de nature.', fieldInterests: 'Au-delà de l\'itinéraire', studioHeading: 'En montagne, autour du monde',
      summitRoute: 'Le parcours', summitPeak: '5 895 m et plus', summitInterests: 'Temps libre',
      passportName: 'Nom / Prénom', passportProfession: 'Profession', passportNationality: 'Nationalité',
      passportPhone: 'Téléphone', passportEmail: 'E-mail', passportStamps: 'Entrées & sorties', tanzania: 'Tanzanie',
      risoWork: 'Expérience', risoBadge: 'pays, et ça continue', risoKili: '5 895 m, avec toute l\'équipe au sommet',
      risoStudied: 'Études', risoLoves: 'Passions',
      pisteRuns: 'Pistes, par ordre de descente', pisteGuide: 'Accompagnement', pisteSki: 'Enseignement du ski',
      pisteManage: 'Gestion d\'équipe & de camp', pisteExpedition: 'Expéditions', pisteInterests: 'Après-ski',
      galleryTitle: 'Un CV, huit styles.',
      galleryIntro: 'Tour leader pour des séjours en montagne et monitrice de ski. Ouvrez un design pour le voir en grand ou l\'enregistrer en PDF.',
      d1: 'Éditorial terracotta', d1Text: 'Chaleureux, personnel, un peu magazine.',
      d2: 'Atlas cobalt', d2Text: 'Typographie affirmée, bleu vif et une chronologie claire.',
      d3: 'Carnet forestier', d3Text: 'Ancré, nature et discrètement aventureux.',
      d4: 'Studio lilas', d4Text: 'Des blocs de couleur doux au rythme moderne et ludique.',
      d5: 'Sommet', d5Text: 'Un parcours comme une ascension au lever du soleil.',
      d6: 'Passeport', d6Text: 'Une mise en page de passeport, l\'expérience en tampons.',
      d7: 'Riso', d7Text: 'Rose, bleu et jaune vifs, façon affiche imprimée.',
      d8: 'Plan des pistes', d8Text: 'Un plan de station où chaque poste est une piste numérotée.'
    }
  }
};

(() => {
  const lang = new URLSearchParams(location.search).get('lang') === 'fr' ? 'fr' : 'en';
  const cv = window.CV = { ...window.CV_CONTENT[lang], lang };
  const L = cv.labels;
  // Display date for every job, e.g. "2022 - today" / "2022 - aujourd'hui".
  cv.jobs = cv.jobs.map(j => ({ ...j, date: j.to ? `${j.from} - ${j.to === 'now' ? L.now : j.to}` : j.from }));
  document.documentElement.lang = lang;

  // Static text: <span data-label="about"></span> gets the current language's label.
  document.querySelectorAll('[data-label]').forEach(el => { el.textContent = L[el.dataset.label]; });
  // Language switch links point at the same page in the other language.
  document.querySelectorAll('[data-lang-switch]').forEach(el => {
    el.textContent = L.switchTo;
    el.href = lang === 'fr' ? (location.pathname.split('/').pop() || 'index.html') : '?lang=fr';
  });
  // Links between gallery and designs keep the chosen language; previews swap to French renders.
  if (lang === 'fr') {
    document.querySelectorAll('a[data-keep-lang]').forEach(a => { a.href += (a.href.includes('?') ? '&' : '?') + 'lang=fr'; });
    document.querySelectorAll('img[data-localized]').forEach(img => { img.src = img.getAttribute('src').replace('assets/', 'assets/fr/'); });
  }
})();
