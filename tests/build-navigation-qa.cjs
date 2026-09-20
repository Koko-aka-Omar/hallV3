const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'../M7A_GitHub_Website_Full_Resolution/m7a-building');
let html=fs.readFileSync(path.join(root,'index.html'),'utf8');
html=html.replace("const coarsePointer=matchMedia('(pointer:coarse)').matches;", "const coarsePointer=new URLSearchParams(location.search).has('mobile')||matchMedia('(pointer:coarse)').matches;");
const harness=`
const qa=document.createElement('div');qa.style='position:fixed;top:115px;left:10px;z-index:100;background:#fff;color:#111;padding:10px;max-height:65vh;overflow:auto;font:12px monospace';document.body.append(qa);
const run=document.createElement('button');run.textContent='Run navigation checks';qa.append(run);
run.disabled=true;const enableWhenReady=()=>{if(ready)run.disabled=false;else requestAnimationFrame(enableWhenReady)};enableWhenReady();
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
  check(guidanceDone&&hint.getAttribute('aria-hidden')==='true','guidance completes after travel');
  await transitionTo(8);check(current===0,'arrow travel cannot jump to an unconnected room');
  for(const to of [8,4,6,5,9,3,7,2,1,0]){
    const success=await navigateFromMap(to);
    check(success&&current===to&&!transitioning,'map jump to '+to);
    check(pitch===0,'map arrival is level');
    check(!mapPanel.classList.contains('open')&&mapPanel.inert,'map closes after selection');
    check([...document.querySelectorAll('.map-node.current')].every(n=>Number(n.dataset.location)===to),'map current marker '+to);
    check(document.querySelector('[data-floor-view].active').dataset.floorView===(LOCATIONS[to].area==='Top Floor'?'top':'ground'),'map floor '+to);
  }
  await navigateFromMap(-1);await navigateFromMap(99);await navigateFromMap(0);
  check(current===0&&!transitioning,'invalid and current map destinations are ignored');
  const firstJump=navigateFromMap(8);await navigateFromMap(4);await firstJump;
  check(current===8,'rapid map taps cannot overlap transitions');
  const savedLoader=loadCheckpoint,savedGuidance=guidanceDone;
  guidanceDone=false;
  loadCheckpoint=async(i,...args)=>{if(i===9)throw new Error('QA simulated destination failure');return savedLoader(i,...args)};
  try{await navigateFromMap(9);}finally{loadCheckpoint=savedLoader;}
  check(current===8&&object&&ready&&!transitioning,'failed map load restores usable view');
  check(!guidanceDone,'failed travel does not complete guidance');guidanceDone=savedGuidance;updateGuidance();
  await navigateFromMap(0);
  yaw=-LOCATIONS[0].routes[0].angle;pitch=-.3;camera.rotation.set(pitch,yaw,0);
  updateRouteLabel();check(routeTip.classList.contains('show')&&routeTip.textContent==='Study Rooms','facing route shows one label');
  togglePanel(mapPanel,mapToggle);check(!routeTip.classList.contains('show'),'open map hides destination label');
  closePanels();check(routeTip.classList.contains('show'),'closing map restores destination label');
  yaw+=Math.PI;camera.rotation.set(pitch,yaw,0);updateRouteLabel();
  check(!routeTip.classList.contains('show'),'offscreen route label is hidden');
  result.textContent+='\\nALL CHECKS PASSED';
}catch(e){result.textContent+='\\nFAIL '+e.stack}finally{run.disabled=false}};
`;
html=html.replace(/<\/script>\s*<\/body>/,harness+'\n</script>\n</body>');
fs.writeFileSync(path.join(root,'qa.html'),html);
