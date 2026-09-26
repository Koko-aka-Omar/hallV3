// Theater/Auditorium-only tour data. Global scene indices: 10–22.
// Edit this file for Theater links, stair arrows, bearings, names, and hotspot tuning.

export const PANORAMAS=[
  "theater-outer-entrance-a.glb",
  "theater-outer-entrance-b.glb",
  "theater-hall.glb",
  "theater-foyer.glb",
  "theater-auditorium-rear.glb",
  "theater-auditorium-center.glb",
  "theater-stage-011.glb",
  "theater-stage-012.glb",
  "theater-stage-013.glb",
  "theater-stage-014.glb",
  "theater-stage-015.glb",
  "theater-stage-016.glb",
  "theater-hall-017.glb"
];

export const VISUAL_CALIBRATION=[
  [
    1,
    1,
    1
  ],
  [
    1,
    1,
    1
  ],
  [
    1,
    1,
    1
  ],
  [
    1,
    1,
    1
  ],
  [
    1,
    1,
    1
  ],
  [
    1,
    1,
    1
  ],
  [
    1,
    1,
    1
  ],
  [
    1,
    1,
    1
  ],
  [
    1,
    1,
    1
  ],
  [
    1,
    1,
    1
  ],
  [
    1,
    1,
    1
  ],
  [
    1,
    1,
    1
  ],
  [
    1,
    1,
    1
  ]
];

export const LOCATIONS=[
  {
    id: "theater-entrance-a",
    area: "Theater",
    name: "Exterior View",
    back: null,
    view: 2.86,
    routes: [
      {
        to: 11,
        angle: 2.86
      }
    ]
  },
  {
    id: "theater-entrance-b",
    area: "Theater",
    name: "Covered Entrance",
    back: 10,
    view: 3.14,
    routes: [
      {
        to: 12,
        angle: 3.14
      },
      {
        to: 23,
        angle: 0
      }
    ]
  },
  {
    id: "theater-hall",
    area: "Theater",
    name: "Main Lobby",
    back: 11,
    view: 2.32,
    routes: [
      {
        to: 11,
        angle: 6.1,
        back: true
      },
      {
        to: 13,
        angle: 1.55
      },
      {
        to: 22,
        angle: 3.45
      }
    ]
  },
  {
    id: "theater-foyer",
    area: "Auditorium",
    name: "Main Door",
    back: 12,
    view: 2.98,
    routes: [
      {
        to: 12,
        angle: 4.2,
        back: true
      },
      {
        to: 14,
        angle: 2.98
      }
    ]
  },
  {
    id: "theater-auditorium-rear",
    area: "Auditorium",
    name: "Main Stairs · Top",
    back: 13,
    view: 3.14,
    routes: [
      {
        to: 13,
        angle: 0,
        back: true
      },
      {
        to: 15,
        angle: 3.14,
        kind: "stairs",
        stairDirection: "down"
      }
    ]
  },
  {
    id: "theater-auditorium-center",
    area: "Auditorium",
    name: "Main Stairs · Middle",
    back: 14,
    view: 3.14,
    routes: [
      {
        to: 14,
        angle: 0,
        back: true,
        kind: "stairs",
        stairDirection: "up"
      },
      {
        to: 16,
        angle: 3.14,
        kind: "stairs",
        stairDirection: "down"
      },
      {
        to: 20,
        angle: 4.71
      }
    ]
  },
  {
    id: "theater-stage-011",
    area: "Auditorium",
    name: "Main Stairs · Bottom",
    back: 15,
    view: 4.3,
    routes: [
      {
        to: 15,
        angle: 4.71,
        back: true,
        kind: "stairs",
        stairDirection: "up"
      },
      {
        to: 17,
        angle: 4.05,
        kind: "stairs",
        stairDirection: "down"
      }
    ]
  },
  {
    id: "theater-stage-012",
    area: "Auditorium",
    name: "Lower Center",
    back: 16,
    view: 3.14,
    routes: [
      {
        to: 16,
        angle: 4.71,
        back: true,
        kind: "stairs",
        stairDirection: "up"
      },
      {
        to: 18,
        angle: 1.57,
        kind: "stairs",
        stairDirection: "up"
      }
    ]
  },
  {
    id: "theater-stage-013",
    area: "Auditorium",
    name: "Library Stairs · Bottom",
    back: 17,
    view: 1.95,
    routes: [
      {
        to: 17,
        angle: 2.23,
        back: true,
        kind: "stairs",
        stairDirection: "down"
      },
      {
        to: 19,
        angle: 1.57,
        kind: "stairs",
        stairDirection: "up"
      }
    ]
  },
  {
    id: "theater-stage-014",
    area: "Auditorium",
    name: "Library Stairs · Middle",
    back: 18,
    view: 3.14,
    routes: [
      {
        to: 18,
        angle: 3.74,
        back: true,
        kind: "stairs",
        stairDirection: "down"
      },
      {
        to: 21,
        angle: 0,
        kind: "stairs",
        stairDirection: "up"
      },
      {
        to: 20,
        angle: 1.57
      }
    ]
  },
  {
    id: "theater-stage-015",
    area: "Auditorium",
    name: "Cross Aisle",
    back: 15,
    view: 3.14,
    routes: [
      {
        to: 15,
        angle: 1.57,
        back: true
      },
      {
        to: 19,
        angle: 4.71
      }
    ]
  },
  {
    id: "theater-stage-016",
    area: "Auditorium",
    name: "Library Stairs · Top",
    back: 19,
    view: 3.14,
    routes: [
      {
        to: 19,
        angle: 3.14,
        back: true,
        kind: "stairs",
        stairDirection: "down"
      },
      {
        to: 22,
        angle: 0
      }
    ]
  },
  {
    id: "theater-hall-017",
    area: "Auditorium",
    name: "Library-Side Door",
    back: 21,
    view: 3.14,
    routes: [
      {
        to: 21,
        angle: 3.14,
        back: true
      },
      {
        to: 12,
        angle: 4.2
      }
    ]
  }
];

export const LOCATION_AR=[
  [
    "المسرح",
    "منظر خارجي"
  ],
  [
    "المسرح",
    "المدخل المغطى"
  ],
  [
    "المسرح",
    "البهو الرئيسي"
  ],
  [
    "قاعة المحاضرات",
    "الباب الرئيسي"
  ],
  [
    "قاعة المحاضرات",
    "الدرج الرئيسي · أعلى"
  ],
  [
    "قاعة المحاضرات",
    "الدرج الرئيسي · وسط"
  ],
  [
    "قاعة المحاضرات",
    "الدرج الرئيسي · أسفل"
  ],
  [
    "قاعة المحاضرات",
    "المنتصف السفلي"
  ],
  [
    "قاعة المحاضرات",
    "درج جهة المكتبة · أسفل"
  ],
  [
    "قاعة المحاضرات",
    "درج جهة المكتبة · وسط"
  ],
  [
    "قاعة المحاضرات",
    "الممر الأوسط"
  ],
  [
    "قاعة المحاضرات",
    "درج جهة المكتبة · أعلى"
  ],
  [
    "قاعة المحاضرات",
    "باب جهة المكتبة"
  ]
];

// Exceptional visual distance/scale overrides. Keys use stable scene IDs.
export const HOTSPOT_STYLE={
  "theater-entrance-a->theater-entrance-b":[1.95,.80],
  "theater-hall->theater-entrance-b":[2.05,.78],
  "theater-hall->theater-foyer":[1.85,.76],
  "theater-hall->theater-hall-017":[1.85,.76],
  "theater-stage-011->theater-stage-012":[1.80,.80],
  "theater-stage-013->theater-stage-012":[1.80,.80]
};
