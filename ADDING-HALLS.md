# Adding halls and scans

Edit `M7A_GitHub_Website_Full_Resolution/m7a-building/halls.js`.
One entry represents one physical building: outdoor pins, grouping, search and the selected card all use this directory. Rooms belong in that building's `rooms` array.

```js
{
  id: 'unique-building-id',
  code: 'BUILDING CODE',
  name: { en: 'Building name', ar: 'اسم المبنى' },
  coordinates: [LONGITUDE, LATITUDE],
  thumbnail: './path/to/preview.jpg', // optional; omit until available
  tour: null, // shows “Tour coming soon” and disables entry
  rooms: []
}
```

Use surveyed coordinates; don't add fictional placeholder buildings to the live directory. IDs must be unique. Coordinates use longitude FIRST (the reverse of the coordinates commonly copied from Google Maps).

When scans are ready, prepare a working panorama tour and replace `tour: null` with one of:

- `{ scene: 'existing-scene-id' }` for a scene already in this page's `LOCATIONS`. M7 uses this route. New raw scans must first be added to the panorama viewer, with checkpoints and arrows configured; adding a directory entry alone does not process scans.
- `{ url: './tours/new-building/index.html' }` for a separate tour deployed inside this site, or an HTTPS URL for a hosted tour. Links open in the same tab. Include a Back to campus link to this site's root in each separate tour.

Rooms may each have their own `tour` (or `null`), localized `name`, localized `floor`, and unique `id`. They appear in room search and the room selector, and share their building's outdoor pin. A building's entrance can be pending while individual room tours are available.

Nearby pins group at 64 screen pixels. Zooming separates them. Selecting a group also lists every member, so halls at identical coordinates remain accessible. Selecting a hall opens its card; entering the tour is a separate explicit action. Collapse details to expose more map on a phone.

After editing, run `node tests/campus-directory.cjs`, check both languages and phone layout, and bump the shell version in `service-worker.js` before publishing. Existing panorama cache should only be bumped if scan assets change.
