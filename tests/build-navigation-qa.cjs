const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'../M7A_GitHub_Website_Full_Resolution/m7a-building');
let html=fs.readFileSync(path.join(root,'index.html'),'utf8');
html=html.replace("const coarsePointer=matchMedia('(pointer:coarse)').matches;", "const coarsePointer=new URLSearchParams(location.search).has('mobile')||matchMedia('(pointer:coarse)').matches;");
const harness=`
const qa=document.createElement('div');qa.style='position:fixed;top:115px;left:10px;z-index:100;background:#fff;color:#111;padding:10px;max-height:65vh;overflow:auto;font:12px monospace';document.body.append(qa);
const run=document.createElement('button');run.textContent='Run navigation checks';qa.append(run);
const result=document.createElement('pre');qa.append(result);
const inspect=document.createElement('select');inspect.setAttribute('aria-label','Inspect route');
const inspections=LOCATIONS.flatMap((loc,from)=>loc.routes.map(route=>({from,route})));
inspections.forEach(({from,route},n)=>{const o=document.createElement('option');o.value=n;o.textContent=from+' to '+route.to+' '+route.label;inspect.append(o)});qa.append(inspect);
inspect.onchange=async()=>{const {from,route}=inspections[+inspect.value];await loadCheckpoint(from);yaw=-route.angle;pitch=-.30;camera.rotation.set(pitch,yaw,0);updateHotspotVisuals();renderer.render(scene,camera);};
run.onclick=async()=>{run.disabled=true;const lines=[];const check=(v,s)=>{if(!v)throw Error(s);lines.push('PASS '+s);result.textContent=lines.join('\\n')};try{
  check(LOCATIONS.length===10,'10 checkpoints');
  const tip=new THREE.Vector3(0,1,0);
  for(const {from,route} of inspections){
    const root=hotspotRoots[0];placeOne(root,route);root.updateMatrixWorld(true);
    const direction=tip.clone().transformDirection(root.userData.arrow.matrixWorld);
    const travel=new THREE.Vector3(Math.sin(route.angle),0,-Math.cos(route.angle));
    check(direction.dot(travel)>.999999,'arrow direction '+from+' -> '+route.to);
    check(!!routeFromTo(route.to,from),'return route '+route.to+' -> '+from);
  }
  await loadCheckpoint(0);
  for(const to of [1,6,1,7,1,2,8,2,9,2,1,0,3,4,5,4,3,0]){
    const from=current;await transitionTo(to);check(current===to&&!transitioning&&ready,'travel '+from+' -> '+to);
    check(hotspotRoots.filter(r=>r.visible).length===LOCATIONS[to].routes.length,'hotspots at '+to);
    check(document.getElementById('route-label').textContent===locationLabel(to),'label at '+to);
  }
  result.textContent+='\\nALL CHECKS PASSED';
}catch(e){result.textContent+='\\nFAIL '+e.stack}finally{run.disabled=false}};
`;
html=html.replace(/<\/script>\s*<\/body>/,harness+'\n</script>\n</body>');
fs.writeFileSync(path.join(root,'qa.html'),html);
