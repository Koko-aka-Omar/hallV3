const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'../M7A_GitHub_Website_Full_Resolution/m7a-building');
(async()=>{
 const {findPath}=await import('data:text/javascript;base64,'+fs.readFileSync(path.join(root,'directions.js')).toString('base64'));
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const source=html.match(/const LOCATIONS\s*=\s*(\[[\s\S]*?\]);\s*const LOCATION_AR/)[1];
 const locations=Function('return '+source)();
 const components=[[0,1,2,3,4,5,6,7,8,9],[10,11,12,13,14,15,16,17,18]];
 for(const component of components)for(const from of component)for(const to of component){
   const route=findPath(locations,from,to);assert(route,`${from} reaches ${to}`);
   assert.equal(route[0],from);assert.equal(route.at(-1),to);
   assert.equal(new Set(route).size,route.length);
   route.slice(1).forEach((next,i)=>assert(locations[route[i]].routes.some(edge=>edge.to===next)));
 }
 const target=locations.findIndex(item=>item.id==='m7a-002');
 assert.deepEqual(findPath(locations,0,target),[0,1,2,target]);
 const theaterCenter=locations.findIndex(item=>item.id==='theater-auditorium-center');
 assert.deepEqual(findPath(locations,10,theaterCenter),[10,12,13,14,theaterCenter]);
 const stageEnd=locations.findIndex(item=>item.id==='theater-stage-013');
 assert.deepEqual(findPath(locations,16,stageEnd),[16,17,stageEnd]);
 assert.deepEqual(findPath(locations,target,target),[target]);
 assert.equal(findPath([{routes:[]},{routes:[]}],0,1),null);
 assert.equal(findPath(locations,-1,target),null);
 console.log('PASS all checkpoint routes, entrance-to-room sequence, arrival, disconnected and invalid routes');
})().catch(error=>{console.error(error);process.exitCode=1;});
