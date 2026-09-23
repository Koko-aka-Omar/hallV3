// One outdoor pin per building. Coordinates are [longitude, latitude].
// A tour can open an existing scene or a separately hosted hall tour.
export const HALLS = [
  {
    id: 'm7', code: 'M7',
    name: { en: 'College of Science', ar: 'كلية العلوم' },
    coordinates: [55.47720532173917, 25.2857153181386],
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
