# Navigation calibration

The tour has 10 checkpoints and 18 directed links. Route destinations, back links,
click targets and the transition mechanism are unchanged in this update.

`LOCATIONS[].routes[].angle` in the site `index.html` is a bearing in the source
panorama, in radians. For these images it corresponds to horizontal image
position / image width * 2π. Calibrate against the centre of a doorway or the
vanishing point of a corridor; nearby floor seams can curve in a stitched image.
Each return route needs its own calibration because the photos have different
orientations. The hall-end panorama also has an existing -1.5° pitch correction.

The arrow's shape points along +Y before being laid on the floor, which maps its
tip to local -Z. Its root yaw must be **negative** route bearing. Both placement
and camera travel use `(sin(angle), 0, -cos(angle))`. Do not reverse that yaw sign
or rotate arrows toward the camera: that would detach them from travel direction.

Bearings were checked against all supplied panorama images. The largest changes
are the M7A-003 exit (5.82 → 6.08), Hall End → M7A-002 (5.94 → 6.10), and Study
Rooms → Entrance (0 → 0.15). M7A-001 and M7A-002 currently share the same panorama
asset, so their exit arrows use the same 2.48 bearing. Distinct photography would
be needed to make those rooms visually different.

## Verification

Run `node tests/build-navigation-qa.cjs`, serve the site directory locally, and
open `/qa.html`. Click **Run navigation checks** and wait for **ALL CHECKS PASSED**.
Repeat at `/qa.html?mobile` to exercise the mobile code path. This is desktop
browser coverage of that code path, not a physical iPhone/Safari performance test.
The generated harness is ignored by Git and excluded from the Pages checkout.
The **Inspect route** selector faces each route for visual inspection.

- JavaScript syntax and whitespace checks.
- Browser checks of actual Three.js arrow world direction against each travel
  vector, and reciprocal links for all 18 routes.
- Traverse Entrance → Study Rooms → 001 → Study Rooms → 004 → Study Rooms → Hall
  End → 003 → Hall End → 002 → Hall End → Study Rooms → Entrance → Stair Landing
  → Faculty Offices → Seating Area → Faculty Offices → Stair Landing → Entrance.
- At every arrival, verify the destination, label, visible hotspot count and
  unlocked navigation. Repeat using the mobile rendering path.
- Visually check the corridor, doorway and stairs alignment; tap a rendered
  arrow and use Back. Check phone-sized layout separately from desktop.

## Follow-up opportunities

- Profile decoding and GPU upload on a physical iPhone before claiming the
  reported freeze is fixed. The standalone `panoramas-mobile` JPEGs exist but
  the current runtime still loads mobile GLBs.
- Add keyboard-accessible destination controls and touch-visible destination
  labels; the current destination tooltips rely on hovering over canvas arrows.
- Add distinct M7A-002 photography and further checkpoints if available.

This release preserves the existing arrow shape, colours, initial view, layout
and navigation behaviour. It corrects route bearings and labels the
post-download phase “Preparing … view” instead of showing “Loading 100%”.
It does not claim to eliminate the decode stall. The shell cache version changes
without invalidating downloaded panorama assets.
