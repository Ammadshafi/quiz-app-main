const firebase=`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`
const sw=`${process.env.PUBLIC_URL}/sw.js`
const serviceWorker=()=>{
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(sw).then(()=>console.log("sucesss"));
    
} else {
    console.log('not');
    
}
}
export default serviceWorker