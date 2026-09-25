// Tour scene data and navigation.
// For checkpoint names, links, arrow bearings, or theater hotspot placement,
// edit this file instead of the viewer runtime.

export const PANORAMA_FILES = [
  "ground-entrance.glb",
  "ground-study-rooms.glb",
  "ground-hall-end.glb",
  "top-stair-landing.glb",
  "top-faculty-offices.glb",
  "top-seating-area.glb",
  "room-m7a-001.glb",
  "room-m7a-004.glb",
  "room-m7a-003.glb",
  "room-m7a-002.glb",
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
  "theater-hall-017.glb",
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

export const VISUAL_CALIBRATION=[
  [0.98,1.00,1.06],
  [0.985,1.00,1.04],
  [0.985,1.00,1.035],
  [0.99,1.00,1.02],
  [1.00,1.00,1.015],
  [1.00,1.00,1.015],
  [1.055,1.055,1.055],
  [1.045,1.045,1.045],
  [1.035,1.035,1.035],
  [1.055,1.055,1.055],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00],
  [1.00,1.00,1.00]
];

export const LOCATIONS=[
  {
    id:'entrance',area:'Main Hall',name:'Entrance',back:null,view:1.25,
    routes:[
      {to:1,angle:2.10,label:'Main Hall · Study Rooms'},
      {to:3,angle:3.70,label:'Stairs · M7A Top Floor',kind:'stairs'}
    ]
  },
  {
    id:'study-junction',area:'Main Hall',name:'Study Rooms',back:0,view:3.14,
    routes:[
      {to:0,angle:0.15,label:'Main Hall · Entrance',back:true},
      {to:2,angle:3.24,label:'Main Hall · Hall End'},
      {to:6,angle:4.80,label:'M7A-001'},
      {to:7,angle:1.68,label:'M7A-004'}
    ]
  },
  {
    id:'hall-end',area:'Main Hall',name:'Hall End',back:1,view:1.57,
    routes:[
      {to:1,angle:1.53,label:'Main Hall · Study Rooms',back:true},
      {to:8,angle:3.12,label:'M7A-003'},
      {to:9,angle:6.10,label:'M7A-002'}
    ]
  },
  {
    id:'top-floor-landing',area:'Top Floor',name:'Stair Landing',back:0,view:1.72,
    routes:[
      {to:0,angle:4.40,label:'Ground Floor · Entrance',back:true,kind:'stairs'},
      {to:4,angle:1.72,label:'Top Floor · Faculty Offices'}
    ]
  },
  {
    id:'top-floor-2',area:'Top Floor',name:'Faculty Offices',back:3,view:2.99,
    routes:[
      {to:3,angle:4.66,label:'Top Floor · Stair Landing',back:true},
      {to:5,angle:1.42,label:'Faculty Offices · Seating Area'}
    ]
  },
  {
    id:'top-floor-1',area:'Top Floor',name:'Faculty Offices · Seating Area',back:4,view:6.08,
    routes:[{to:4,angle:4.57,label:'Top Floor · Faculty Offices',back:true}]
  },
  {
    id:'m7a-001',area:'Ground Floor',name:'M7A-001',back:1,view:5.0,
    routes:[{to:1,angle:2.48,label:'Main Hall · Study Rooms',back:true}]
  },
  {
    id:'m7a-004',area:'Ground Floor',name:'M7A-004',back:1,view:0.55,
    routes:[{to:1,angle:1.46,label:'Main Hall · Study Rooms',back:true}]
  },
  {
    id:'m7a-003',area:'Ground Floor',name:'M7A-003',back:2,view:3.16,
    routes:[{to:2,angle:6.08,label:'Main Hall · Hall End',back:true}]
  },
  {
    id:'m7a-002',area:'Ground Floor',name:'M7A-002',back:2,view:1.95,
    routes:[{to:2,angle:2.48,label:'Main Hall · Hall End',back:true}]
  },
  {
    id:'theater-entrance-a',area:'Theater',name:'Exterior View',back:null,view:2.86,
    routes:[]
  },
  {
    id:'theater-entrance-b',area:'Theater',name:'Covered Entrance',back:null,view:3.14,
    routes:[
      {to:12,angle:3.14},
      {to:23,angle:0.00}
    ]
  },
  {
    id:'theater-hall',area:'Theater',name:'Main Lobby',back:11,view:2.32,
    routes:[
      {to:11,angle:6.10,back:true},
      {to:13,angle:1.55},
      {to:22,angle:3.45}
    ]
  },
  {
    id:'theater-foyer',area:'Auditorium',name:'Main Door',back:12,view:2.98,
    routes:[
      {to:12,angle:4.20,back:true},
      {to:14,angle:2.98}
    ]
  },
  {
    id:'theater-auditorium-rear',area:'Auditorium',name:'Main Stairs · Top',back:13,view:3.14,
    routes:[
      {to:13,angle:0.00,back:true},
      {to:15,angle:3.14,kind:'stairs',stairDirection:'down'}
    ]
  },
  {
    id:'theater-auditorium-center',area:'Auditorium',name:'Main Stairs · Middle',back:14,view:3.14,
    routes:[
      {to:14,angle:0.00,back:true,kind:'stairs',stairDirection:'up'},
      {to:16,angle:3.14,kind:'stairs',stairDirection:'down'},
      {to:20,angle:4.71}
    ]
  },
  {
    id:'theater-stage-011',area:'Auditorium',name:'Main Stairs · Bottom',back:15,view:4.30,
    routes:[
      {to:15,angle:4.71,back:true,kind:'stairs',stairDirection:'up'},
      {to:17,angle:4.05,kind:'stairs',stairDirection:'down'}
    ]
  },
  {
    id:'theater-stage-012',area:'Auditorium',name:'Lower Center',back:16,view:3.14,
    routes:[
      {to:16,angle:4.71,back:true,kind:'stairs',stairDirection:'up'},
      {to:18,angle:1.57,kind:'stairs',stairDirection:'up'}
    ]
  },
  {
    id:'theater-stage-013',area:'Auditorium',name:'Library Stairs · Bottom',back:17,view:1.95,
    routes:[
      {to:17,angle:2.23,back:true,kind:'stairs',stairDirection:'down'},
      {to:19,angle:1.57,kind:'stairs',stairDirection:'up'}
    ]
  },
  {
    id:'theater-stage-014',area:'Auditorium',name:'Library Stairs · Middle',back:18,view:3.14,
    routes:[
      {to:18,angle:3.74,back:true,kind:'stairs',stairDirection:'down'},
      {to:21,angle:0.00,kind:'stairs',stairDirection:'up'},
      {to:20,angle:1.57}
    ]
  },
  {
    id:'theater-stage-015',area:'Auditorium',name:'Cross Aisle',back:15,view:3.14,
    routes:[
      {to:15,angle:1.57,back:true},
      {to:19,angle:4.71}
    ]
  },
  {
    id:'theater-stage-016',area:'Auditorium',name:'Library Stairs · Top',back:19,view:3.14,
    routes:[
      {to:19,angle:3.14,back:true,kind:'stairs',stairDirection:'down'},
      {to:22,angle:0.00}
    ]
  },
  {
    id:'theater-hall-017',area:'Auditorium',name:'Library-Side Door',back:21,view:3.14,
    routes:[
      {to:21,angle:3.14,back:true},
      {to:12,angle:4.20}
    ]
  },
  {
    id:'library-entrance-018',area:'Library',name:'Entrance',back:11,view:3.14,
    routes:[
      {to:11,angle:0.00,back:true},
      {to:24,angle:3.14}
    ]
  },
  {
    id:'library-lobby-019',area:'Library',name:'Lobby',back:23,view:3.14,
    routes:[
      {to:23,angle:5.72,back:true},
      {to:25,angle:3.14}
    ]
  },
  {
    id:'library-study-020',area:'Library',name:'Study Area',back:24,view:3.14,
    routes:[
      {to:24,angle:0.00,back:true},
      {to:26,angle:3.14},
      {to:32,angle:-1.57}
    ]
  },
  {
    id:'library-study-021',area:'Library',name:'Study Area 021',back:25,view:3.14,
    routes:[
      {to:25,angle:0.00,back:true},
      {to:27,angle:3.14}
    ]
  },
  {
    id:'library-study-022',area:'Library',name:'Study Area 022',back:26,view:3.14,
    routes:[
      {to:26,angle:0.00,back:true},
      {to:28,angle:3.14}
    ]
  },
  {
    id:'library-study-023',area:'Library',name:'Study Area 023',back:27,view:3.14,
    routes:[
      {to:27,angle:0.00,back:true},
      {to:29,angle:3.14}
    ]
  },
  {
    id:'library-study-024',area:'Library',name:'Study Area 024',back:28,view:3.14,
    routes:[
      {to:28,angle:0.00,back:true},
      {to:30,angle:3.14}
    ]
  },
  {
    id:'library-study-025',area:'Library',name:'Study Area 025',back:29,view:3.14,
    routes:[
      {to:29,angle:0.00,back:true},
      {to:31,angle:3.14}
    ]
  },
  {
    id:'library-study-026',area:'Library',name:'Study Area 026',back:30,view:3.14,
    routes:[
      {to:30,angle:0.00,back:true}
    ]
  },
  {
    id:'library-study-027',area:'Library',name:'Study Area 027',back:25,view:3.14,
    routes:[
      {to:25,angle:2.15,back:true},
      {to:33,angle:4.08}
    ]
  },
  {
    id:'library-study-028',area:'Library',name:'Study Area 028',back:32,view:3.14,
    routes:[
      {to:32,angle:2.26,back:true},
      {to:34,angle:4.15}
    ]
  },
  {
    id:'library-study-029',area:'Library',name:'Study Area 029',back:33,view:3.14,
    routes:[{to:33,angle:1.95,back:true}]
  }
];

export const LOCATION_AR=[
  ['الردهة الرئيسية','المدخل'],['الردهة الرئيسية','قاعات الدراسة'],['الردهة الرئيسية','نهاية الردهة'],['الطابق العلوي','بسطة الدرج'],['الطابق العلوي','مكاتب أعضاء هيئة التدريس'],['الطابق العلوي','مكاتب أعضاء هيئة التدريس · منطقة الجلوس'],['الطابق الأرضي','M7A-001'],['الطابق الأرضي','M7A-004'],['الطابق الأرضي','M7A-003'],['الطابق الأرضي','M7A-002'],['المسرح','منظر خارجي'],['المسرح','المدخل المغطى'],['المسرح','البهو الرئيسي'],['قاعة المحاضرات','الباب الرئيسي'],['قاعة المحاضرات','الدرج الرئيسي · أعلى'],['قاعة المحاضرات','الدرج الرئيسي · وسط'],['قاعة المحاضرات','الدرج الرئيسي · أسفل'],['قاعة المحاضرات','المنتصف السفلي'],['قاعة المحاضرات','درج جهة المكتبة · أسفل'],['قاعة المحاضرات','درج جهة المكتبة · وسط'],['قاعة المحاضرات','الممر الأوسط'],['قاعة المحاضرات','درج جهة المكتبة · أعلى'],['قاعة المحاضرات','باب جهة المكتبة'],['المكتبة','المدخل · 018'],['المكتبة','البهو · 019'],['المكتبة','منطقة الدراسة · 020'],['المكتبة','منطقة الدراسة · 021'],['المكتبة','منطقة الدراسة · 022'],['المكتبة','منطقة الدراسة · 023'],['المكتبة','منطقة الدراسة · 024'],['المكتبة','منطقة الدراسة · 025'],['المكتبة','منطقة الدراسة · 026'],['المكتبة','منطقة الدراسة · 027'],['المكتبة','منطقة الدراسة · 028'],['المكتبة','منطقة الدراسة · 029']
];

const THEATER_HOTSPOT_STYLE={
  '12:11':[2.05,.78],
  '12:13':[1.85,.76],
  '12:22':[1.85,.76],
  '16:17':[1.80,.80],
  '18:17':[1.80,.80]
};

export function getHotspotStyle(sceneIndex,route){
  const custom=THEATER_HOTSPOT_STYLE[sceneIndex+':'+route.to];
  if(custom)return custom;
  const auditoriumStair=route.kind==='stairs'&&sceneIndex>=14&&sceneIndex<=21;
  return auditoriumStair?[1.85,.78]:[route.kind==='stairs'?1.08:1.02,.64];
}
