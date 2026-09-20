# M7A Building Virtual Tour

An interactive **360° virtual tour of University of Sharjah Building M7A**, built with Three.js and deployed using GitHub Pages.

The project allows users to explore the building through connected panoramic checkpoints, navigate between rooms and floors, use an interactive map, and view the tour on both desktop and mobile devices.

## 🌐 Live Demo

**https://koko-aka-omar.github.io/hallV3/**

---

## Overview

The M7A Virtual Tour recreates the experience of walking through Building M7A using a collection of 360° panoramic scenes.

Users can:

* Look around each location in 360°
* Move through the building using floor arrows
* Jump between locations using the building map
* Navigate between the ground and upper floors
* Enter selected rooms
* Use phone motion to look around on supported devices
* Switch between **English and Arabic**
* Share direct links to individual locations
* Use the tour on desktop, tablet, and mobile devices

The interface was designed to behave similarly to a simplified indoor version of Google Street View.

---

## 📍 Tour Locations

The tour currently contains **10 checkpoints**.

### Ground Floor

* Main Hall — Entrance
* Main Hall — Study Rooms
* Main Hall — Hall End
* M7A-001
* M7A-002
* M7A-003
* M7A-004

### Top Floor

* Stair Landing
* Faculty Offices
* Seating Area

The locations are connected using a route graph, meaning navigation follows valid physical paths through the building rather than allowing arbitrary movement between panorama images.

---

## ✨ Features

### 360° Navigation

The panoramic scenes are rendered using **Three.js** and GLB assets.

Users can click/tap and drag to rotate the camera and inspect their surroundings.

### Floor Navigation Arrows

Interactive 3D arrows are positioned inside each panorama.

Selecting an arrow moves the user toward the corresponding destination.

Each arrow has its own calibrated direction so it visually matches the corridor, doorway, room, or staircase it represents.

### Interactive Building Map

The built-in map shows both floors of M7A.

Users can:

* See their current location
* Switch between floor maps
* Select locations directly
* Move between floors using the stair checkpoints

The map is schematic and is not intended to be an architectural floor plan.

### English / Arabic Support

The interface can be switched between:

* English
* العربية

Interface text, navigation labels, maps, loading messages, hints, and location names are translated.

The selected language is stored locally in the browser.

### Mobile Motion Controls

On supported mobile devices, users can enable motion controls and physically move their phone to look around the panorama.

Normal touch-and-drag navigation remains available.

### Responsive Mobile Version

Desktop devices load the full-resolution panorama assets.

Mobile and coarse-pointer devices use dedicated lower-resolution assets to reduce:

* Download size
* GPU memory usage
* Texture upload cost
* Loading time

Desktop panoramas use the full-resolution assets while mobile devices use dedicated **3072 × 1536** panorama versions.

### Scene Preloading

Likely next destinations are prefetched and prepared before the user selects them.

This reduces the delay when moving between connected scenes.

The system uses different memory and preloading limits for desktop and mobile devices.

### Direct Scene Links

Individual locations can be opened directly using the `scene` query parameter.

Example:

```text
https://koko-aka-omar.github.io/hallV3/?scene=m7a-001
```

This can be used to share a particular room or checkpoint instead of always starting at the entrance.

### Progressive Web App Support

The project includes:

* `manifest.webmanifest`
* Service worker
* App icon
* Apple touch icon
* Shell caching
* Panorama caching

Previously downloaded panorama assets can be retained by the browser cache/service worker to improve later visits.

### Accessibility

The interface includes:

* ARIA labels
* Keyboard-accessible map locations
* Focus states
* Reduced-motion support
* Status messages
* Descriptive map information
* Mobile-safe layout
* RTL support for Arabic

---

## 🛠️ Technology

The project is intentionally lightweight and does not require a JavaScript framework.

Main technologies:

* HTML5
* CSS3
* JavaScript / ES Modules
* Three.js
* WebGL
* GLTF / GLB
* Service Workers
* Web App Manifest
* GitHub Actions
* GitHub Pages

Three.js is currently loaded through an import map using:

```text
three@0.180.0
```

The main panorama models are loaded using Three.js `GLTFLoader`.

---

## 📁 Project Structure

```text
hallV3/
│
├── .github/
│   └── workflows/
│       ├── pages.yml
│       ├── build-mobile-assets.yml
│       └── build-mobile-images.yml
│
├── M7A_GitHub_Website_Full_Resolution/
│   └── m7a-building/
│       │
│       ├── index.html
│       ├── service-worker.js
│       ├── manifest.webmanifest
│       ├── favicon.svg
│       ├── apple-touch-icon.png
│       ├── social-preview.png
│       │
│       ├── assets/
│       │   └── Full-resolution GLB panorama assets
│       │
│       ├── assets-mobile/
│       │   └── Optimized mobile GLB panorama assets
│       │
│       └── panoramas-mobile/
│           └── Mobile panorama resources
│
├── tests/
│   └── build-navigation-qa.cjs
│
├── NAVIGATION.md
├── .gitignore
└── .gitattributes
```

Most of the application UI, navigation system, route definitions, Three.js rendering, localization, loading logic, and interaction system currently live inside `index.html`.

---

## 🚀 Running Locally

Because the project uses JavaScript modules, GLB files, and a service worker, it should be served through a local HTTP server rather than opening `index.html` directly.

### 1. Clone the repository

```bash
git clone https://github.com/Koko-aka-Omar/hallV3.git
cd hallV3
```

### 2. Enter the website directory

```bash
cd M7A_GitHub_Website_Full_Resolution/m7a-building
```

### 3. Start a local server

Using Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## 🎮 Controls

### Desktop

| Control           | Action                        |
| ----------------- | ----------------------------- |
| Click + drag      | Look around                   |
| Floor arrow       | Move to another checkpoint    |
| Map button        | Open building map             |
| Map location      | Jump to location              |
| Back              | Return to previous checkpoint |
| Backspace         | Go back                       |
| Home              | Reset view                    |
| Reset button      | Reset/level camera            |
| Fullscreen button | Enter fullscreen              |

### Mobile

| Control          | Action                        |
| ---------------- | ----------------------------- |
| Drag             | Look around                   |
| Tap arrow        | Move                          |
| Tap map location | Jump to checkpoint            |
| Motion button    | Enable device-motion viewing  |
| Back             | Return to previous checkpoint |

---

## 🧭 Navigation System

Navigation is defined through the `LOCATIONS` array inside `index.html`.

Each checkpoint contains information such as:

```js
{
    id: 'study-junction',
    area: 'Main Hall',
    name: 'Study Rooms',
    routes: [
        {
            to: 0,
            angle: 0.15,
            label: 'Main Hall · Entrance',
            back: true
        }
    ]
}
```

Each route specifies:

* Destination checkpoint
* Arrow bearing
* Destination label
* Whether the route is a return path
* Optional route type such as stairs

Arrow bearings are calibrated independently for every panorama because each 360° photograph can have a different orientation.

More detailed calibration information is available in:

```text
NAVIGATION.md
```

---

## 🧪 Navigation Testing

The repository contains a browser-based navigation QA system.

From the repository root, run:

```bash
node tests/build-navigation-qa.cjs
```

Then serve the website directory and open:

```text
/qa.html
```

Select:

**Run navigation checks**

A successful run should report:

```text
ALL CHECKS PASSED
```

The QA system checks areas including:

* JavaScript syntax
* Navigation routes
* Arrow direction
* Travel vectors
* Reciprocal links
* Checkpoint destinations
* Route labels
* Hotspot counts
* Back navigation
* Map navigation
* Failed-load recovery
* First-visit guidance
* Destination labels

The mobile rendering path can also be tested using:

```text
/qa.html?mobile
```

This simulates the mobile code path in a desktop browser. Physical-device testing is still recommended for actual phone performance and motion controls.

---

## 🌍 Deployment

The website is automatically deployed using **GitHub Actions + GitHub Pages**.

The workflow is located at:

```text
.github/workflows/pages.yml
```

Every push to:

```text
main
```

triggers the Pages deployment workflow.

GitHub Pages publishes:

```text
M7A_GitHub_Website_Full_Resolution/m7a-building
```

The deployed website is available at:

**https://koko-aka-omar.github.io/hallV3/**

---

## ⚡ Performance

Several optimizations are used because high-resolution 360° scenes can be expensive to download and render.

These include:

* Separate desktop and mobile assets
* Reduced mobile texture resolution
* Dynamic renderer pixel-ratio limits
* Network prefetching
* Scene preloading
* Limited decoded-scene caching
* Browser HTTP caching
* Service-worker panorama caching
* GPU-conscious mobile rendering
* Reduced visual effects on coarse-pointer devices
* Reuse of downloaded panorama assets between releases

---

## 🔧 Adding a New Location

Adding another checkpoint generally requires:

1. Capture and prepare the 360° panorama.
2. Export/create the required GLB panorama.
3. Add desktop and mobile versions of the asset.
4. Add the file to the panorama list.
5. Add a new entry to `LOCATIONS`.
6. Define routes to/from nearby checkpoints.
7. Calibrate the arrow bearings.
8. Add the location to the map if required.
9. Add English and Arabic labels.
10. Run the navigation QA tests.
11. Visually inspect the route on desktop and mobile.

Route directions should be calibrated against doorway centers or corridor vanishing points rather than nearby floor seams, since stitched panorama images can distort straight lines.

---

## 📱 Browser Notes

Modern browsers with WebGL and ES Module support are recommended.

The experience is designed for:

* Chrome
* Edge
* Safari
* Mobile Safari
* Modern Android browsers

Some functionality depends on browser/device support.

For example, device-motion controls may require explicit permission on certain mobile browsers.

---

## 📌 Current Notes

The project currently uses **10 panoramic checkpoints and 18 directed navigation links**.

M7A-001 and M7A-002 currently share the same panorama asset, so unique photography would be required for the rooms to look visually different.

Further physical-device performance testing, particularly on iPhone/Safari, can help improve panorama decoding and GPU upload performance.

---

## 👤 Author

Created and maintained by **Koko-aka-Omar//Omar Yasser**.

GitHub:

https://github.com/Koko-aka-Omar

---

## Repository

https://github.com/Koko-aka-Omar/hallV3
