# M7A Virtual Tour — File Guide

The project is split so common edits can be made without opening the full viewer runtime.

| File | Change this when… |
| --- | --- |
| `tour-routes.js` | Moving an arrow, changing a bearing, renaming a checkpoint, adding/removing a connection, changing scene order, or tuning Theater hotspot distance/size |
| `tour-i18n.js` | Changing English/Arabic interface text |
| `styles.css` | Changing layout, colors, controls, panels, responsive behavior, or visual polish |
| `tour.js` | Changing Three.js rendering, transitions, loading, interaction, preloading, motion controls, search behavior, or viewer logic |
| `index.html` | Changing page markup/structure only |
| `tour-boot.js` | Loading-screen fallback only |
| `halls.js` | Campus hall/room directory data |
| `campus-directory.js` | Campus directory/search UI logic |
| `directions.js` | Pathfinding logic |
| `assets/` | Full-resolution panorama GLBs |
| `assets-mobile/` | Mobile panorama GLBs |

## Navigation editing

Scene order, names, routes, arrow bearings, and Theater hotspot layout are centralized in `tour-routes.js`.

- `LOCATIONS` = navigation graph.
- `angle` = route/arrow bearing in radians.
- `kind: 'stairs'` = stair route.
- `stairDirection` = `'up'` or `'down'`.
- `THEATER_HOTSPOT_STYLE` = only exceptional visual distance/scale overrides.
- M7A scenes are indices **0–9**. Preserve them unless a request explicitly changes M7A.

Do not add one-off hotspot positioning logic to `tour.js`; keep route-specific calibration in `tour-routes.js`.
