const url =`${process.env.PUBLIC_URL}./sw.js`
// console.log(url);
export const serviceWorker=()=>{
    
   navigator.serviceWorker.register(url).then(()=>console.log("sucess")).catch((e)=>console.log("failed", e))
    
}
