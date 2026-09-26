// Outdoor checkpoints on the official campus-map image.
// coordinates = real tour location; mapCoordinates/mapOutline = visual placement on the map image.
export const HALLS = [
  {
    id: 'e2', code: 'E2',
    name: { en: 'Al Razi Auditorium', ar: 'مسرح الرازي' },
    coordinates: [55.477603577553126, 25.27433935800182],
    mapCoordinates: [55.470730009539956, 25.27982859846141],
    mapOutline: [
      [55.47101662508768, 25.279522632920838],
      [55.47083349344968, 25.279506861501222],
      [55.470374210928995, 25.27992217555114],
      [55.470374210928995, 25.2800720040375],
      [55.47105150730444, 25.280119318296354],
      [55.47101662508768, 25.279522632920838]
    ],
    thumbnail: './panoramas-mobile/theater-outer-entrance-a.jpg',
    tour: { scene: 'theater-entrance-a' },
    directMapEntry: true,
    rooms: []
  },
  {
    id: 'm7', code: 'M7',
    name: { en: 'College of Science', ar: 'كلية العلوم' },
    coordinates: [55.47720532173917, 25.2857153181386],
    mapCoordinates: [55.482802454075824, 25.280271775352652],
    mapOutline: [
      [55.48292599526019, 25.280374289580163],
      [55.482678912891465, 25.280374289580163],
      [55.482678912891465, 25.28016926112514],
      [55.48292599526019, 25.28016926112514],
      [55.48292599526019, 25.280374289580163]
    ],
    thumbnail: './panoramas-mobile/ground-entrance.jpg',
    tour: { scene: 'entrance' },
    rooms: [
      { id: 'm7a-001', name: { en: 'M7A-001', ar: 'M7A-001' }, floor: { en: 'Ground floor', ar: 'الطابق الأرضي' }, tour: { scene: 'm7a-001' } },
      { id: 'm7a-002', name: { en: 'M7A-002', ar: 'M7A-002' }, floor: { en: 'Ground floor', ar: 'الطابق الأرضي' }, tour: { scene: 'm7a-002' } },
      { id: 'm7a-003', name: { en: 'M7A-003', ar: 'M7A-003' }, floor: { en: 'Ground floor', ar: 'الطابق الأرضي' }, tour: { scene: 'm7a-003' } },
      { id: 'm7a-004', name: { en: 'M7A-004', ar: 'M7A-004' }, floor: { en: 'Ground floor', ar: 'الطابق الأرضي' }, tour: { scene: 'm7a-004' } }
    ]
  }
];
