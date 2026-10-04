// Single source of copy for all eight designs (01-04 via cv.js, 05-08 via claude/render.js).
window.CV = {
  name: 'Laura Leiboff', firstName: 'Laura', lastName: 'Leiboff',
  title: 'Tour leader & ski instructor',
  email: 'laura.l2@hotmail.fr', phone: '+33 6 81 80 34 09',
  nationality: 'French',
  countries: '130+',
  kilimanjaro: '5',
  eventSize: '500+',
  // Short version for tighter layouts; `about` for designs with room for more.
  intro: 'I lead groups up mountains and get them safely back down: five Kilimanjaro expeditions since 2022, events for 500+ people and a ski season every winter since 2019.',
  about: 'I lead groups up mountains and get them safely back down. Since 2022 I\'ve run challenge expeditions on the ground, five of them on Kilimanjaro, as the group\'s point of contact and the link to local guides and crews. Trained in events management in Paris, I\'ve run events for 500+ people, taught skiing every winter since 2019 and managed teams on three continents.',
  languages: [
    ['French', 'Native'], ['Polish', 'Bilingual'],
    ['English', 'Fluent'], ['Spanish', 'Intermediate']
  ],
  strengths: ['Running trips on the ground', 'Group leadership', 'Ski instruction', 'Events for 500+ people'],
  interests: ['Trekking', 'Skiing', 'Snorkelling', 'Yoga', 'Salsa & bachata', 'Cooking'],
  education: [
    ['Bachelor, Events Management & Business Tourism', 'INFA', '2013'],
    ['Bachelor, Business Tourism', 'INFA', '2011'],
    ['HND, Tourism Studies', 'ENC Paris Bessières', '2009']
  ],
  // Newest first. `kind` colours the runs on the piste map: manage, expedition, ski, guide.
  jobs: [
    {date:'2026', title:'Camp manager', company:'Feel the Flow', place:'', kind:'manage', description:'Runs camp operations, guests and crew.'},
    {date:'2022 - today', title:'Challenge tour leader', company:'4Challenge', place:'Mountain expeditions', kind:'expedition', description:'Runs trips on the ground and works with local guides; five Kilimanjaro expeditions.'},
    {date:'2019 - today', title:'Ski instructor', company:'ESS Torgon & beyond', place:'Switzerland', kind:'ski', description:'Teaching every winter since 2019.'},
    {date:'2019 - 2020', title:'Guide & tour leader', company:'Adventures by Disney', place:'Paris & the Seine', kind:'guide', description:'Seine cruises and Paris tours, groups of up to 130.'},
    {date:'2018', title:'Guide & tour leader', company:'Corpoland', place:'Gdańsk, Poland', kind:'guide', description:'Summer-season tour guiding.'},
    {date:'2016 - 2018', title:'Team manager & guide', company:'Down Under Pedicab', place:'Darwin, Australia', kind:'manage', description:'Hired and ran the rider crew.'}
  ]
};
