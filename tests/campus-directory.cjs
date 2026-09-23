const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '../M7A_GitHub_Website_Full_Resolution/m7a-building');
const load = file => import('data:text/javascript;base64,' + fs.readFileSync(path.join(root, file)).toString('base64'));
(async () => {
  const { groupNearby, searchHalls } = await load('campus-directory.js');
  const { HALLS } = await load('halls.js');
  const project = ([x, y]) => ({ x, y });
  const halls = [0, 50, 100, 220].map((x, i) => ({ id: String(i), coordinates: [x, 0] }));
  assert.deepEqual(groupNearby(halls, project).map(g => g.length), [3, 1], 'Nearby chains form one group');
  assert.equal(groupNearby(halls, ([x,y]) => ({x:x*2,y})).length, 4, 'Zoom separates nearby halls');
  assert.equal(groupNearby([{coordinates:[0,0]}, {coordinates:[0,0]}], project)[0].length, 2, 'Coincident halls remain selectable as a group');
  assert.equal(searchHalls(HALLS, 'm7a002', 'en')[0].room.id, 'm7a-002');
  assert.equal(searchHalls(HALLS, 'كلية العلوم', 'ar')[0].hall.id, 'm7');
  assert.equal(searchHalls(HALLS, 'does-not-exist', 'en').length, 0);
  assert.equal(searchHalls(HALLS, '', 'en').length, HALLS.length);
  const ids = new Set();
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  for (const hall of HALLS) {
    assert(!ids.has(hall.id)); ids.add(hall.id);
    assert(hall.coordinates.length === 2 && hall.coordinates.every(Number.isFinite));
    assert(Math.abs(hall.coordinates[0]) <= 180 && Math.abs(hall.coordinates[1]) <= 90);
    for (const item of [hall, ...(hall.rooms || [])]) {
      if (item.tour?.scene) assert(html.includes(`id:'${item.tour.scene}'`), `Scene ${item.tour.scene} exists`);
    }
  }
  console.log('PASS grouping, zoom separation, coincident halls, bilingual room search and directory scene references');
})().catch(error => { console.error(error); process.exitCode = 1; });
