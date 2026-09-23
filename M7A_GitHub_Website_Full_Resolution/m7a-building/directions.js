// Breadth-first search follows only existing, directed panorama connections.
export function findPath(locations, from, to) {
  if (!locations[from] || !locations[to]) return null;
  const queue = [[from]], visited = new Set([from]);
  for (let i = 0; i < queue.length; i++) {
    const path = queue[i], last = path[path.length - 1];
    if (last === to) return path;
    for (const route of locations[last].routes || []) {
      if (locations[route.to] && !visited.has(route.to)) {
        visited.add(route.to); queue.push([...path, route.to]);
      }
    }
  }
  return null;
}
