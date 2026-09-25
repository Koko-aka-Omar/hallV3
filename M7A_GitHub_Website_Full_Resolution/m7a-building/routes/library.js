// Library-only tour data. Global scene indices: 23–34.
// Edit this file for Library links, bearings, checkpoint names, and panorama files.

export const PANORAMAS=[
  "library-entrance-018.glb",
  "library-lobby-019.glb",
  "library-study-020.glb",
  "library-study-021.glb",
  "library-study-022.glb",
  "library-study-023.glb",
  "library-study-024.glb",
  "library-study-025.glb",
  "library-study-026.glb",
  "library-study-027.glb",
  "library-study-028.glb",
  "library-study-029.glb"
];

// Only scenes that had explicit calibration in the original file are listed.
// Missing entries intentionally fall back to [1,1,1] in the viewer.
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
  ]
];

export const LOCATIONS=[
  {
    id: "library-entrance-018",
    area: "Library",
    name: "Entrance",
    back: 11,
    view: 3.14,
    routes: [
      {
        to: 11,
        angle: 6.15,
        arrowAngle: 6.15,
        back: true
      },
      {
        to: 24,
        angle: 3.14,
        arrowAngle: 3.14
      }
    ]
  },
  {
    id: "library-lobby-019",
    area: "Library",
    name: "Lobby",
    back: 23,
    view: 3.14,
    routes: [
      {
        to: 23,
        angle: 5.64,
        arrowAngle: 5.64,
        back: true
      },
      {
        to: 25,
        angle: 3.14,
        arrowAngle: 3.14
      }
    ]
  },
  {
    id: "library-study-020",
    area: "Library",
    name: "Study Area 1",
    back: 24,
    view: 3.14,
    routes: [
      {
        to: 24,
        angle: 0,
        arrowAngle: 0,
        back: true
      },
      {
        to: 26,
        angle: 3.14,
        arrowAngle: 3.14
      },
      {
        to: 32,
        angle: -1.57,
        arrowAngle: -1.57
      }
    ]
  },
  {
    id: "library-study-021",
    area: "Library",
    name: "Study Area 2",
    back: 25,
    view: 3.14,
    routes: [
      {
        to: 25,
        angle: 0,
        arrowAngle: 0,
        back: true
      },
      {
        to: 27,
        angle: 3.14,
        arrowAngle: 3.14,
        hotspotAngle: 2.3,
        hotspotDistance: 0.75
      }
    ]
  },
  {
    id: "library-study-022",
    area: "Library",
    name: "Study Area 3",
    back: 26,
    view: 3.14,
    routes: [
      {
        to: 26,
        angle: 0,
        arrowAngle: 0,
        back: true
      },
      {
        to: 28,
        angle: 3.14,
        arrowAngle: 3.14
      }
    ]
  },
  {
    id: "library-study-023",
    area: "Library",
    name: "Study Area 4",
    back: 27,
    view: 3.14,
    routes: [
      {
        to: 27,
        angle: 0,
        arrowAngle: 0,
        back: true
      },
      {
        to: 29,
        angle: 3.14,
        arrowAngle: 3.14
      }
    ]
  },
  {
    id: "library-study-024",
    area: "Library",
    name: "Study Area 5",
    back: 28,
    view: 3.14,
    routes: [
      {
        to: 28,
        angle: 0,
        arrowAngle: 0,
        back: true
      },
      {
        to: 30,
        angle: 3.14,
        arrowAngle: 3.14,
        hotspotAngle: 2.15,
        hotspotDistance: 0.75
      }
    ]
  },
  {
    id: "library-study-025",
    area: "Library",
    name: "Study Area 6",
    back: 29,
    view: 3.14,
    routes: [
      {
        to: 29,
        angle: 0,
        arrowAngle: 0,
        back: true
      },
      {
        to: 31,
        angle: 3.14,
        arrowAngle: 3.14,
        hotspotAngle: 1.1,
        hotspotDistance: 0.75
      }
    ]
  },
  {
    id: "library-study-026",
    area: "Library",
    name: "Study Area 7",
    back: 30,
    view: 3.14,
    routes: [
      {
        to: 30,
        angle: 0,
        arrowAngle: 0,
        back: true
      }
    ]
  },
  {
    id: "library-study-027",
    area: "Library",
    name: "Study Area 8",
    back: 25,
    view: 3.14,
    routes: [
      {
        to: 25,
        angle: 2.15,
        arrowAngle: 2.15,
        back: true
      },
      {
        to: 33,
        angle: 4.08,
        arrowAngle: 4.08
      }
    ]
  },
  {
    id: "library-study-028",
    area: "Library",
    name: "Study Area 9",
    back: 32,
    view: 3.14,
    routes: [
      {
        to: 32,
        angle: 2.26,
        arrowAngle: 2.26,
        back: true
      },
      {
        to: 34,
        angle: 4.15,
        arrowAngle: 4.15
      }
    ]
  },
  {
    id: "library-study-029",
    area: "Library",
    name: "Study Area 10",
    back: 33,
    view: 3.14,
    routes: [
      {
        to: 33,
        angle: 1.95,
        arrowAngle: 1.95,
        back: true
      }
    ]
  }
];

export const LOCATION_AR=[
  [
    "المكتبة",
    "المدخل"
  ],
  [
    "المكتبة",
    "البهو"
  ],
  [
    "المكتبة",
    "منطقة الدراسة 1"
  ],
  [
    "المكتبة",
    "منطقة الدراسة 2"
  ],
  [
    "المكتبة",
    "منطقة الدراسة 3"
  ],
  [
    "المكتبة",
    "منطقة الدراسة 4"
  ],
  [
    "المكتبة",
    "منطقة الدراسة 5"
  ],
  [
    "المكتبة",
    "منطقة الدراسة 6"
  ],
  [
    "المكتبة",
    "منطقة الدراسة 7"
  ],
  [
    "المكتبة",
    "منطقة الدراسة 8"
  ],
  [
    "المكتبة",
    "منطقة الدراسة 9"
  ],
  [
    "المكتبة",
    "منطقة الدراسة 10"
  ]
];
