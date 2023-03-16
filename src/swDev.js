
 
 export function swDev()
 {
    function determineAppServerKey() {
    const vapidPublicKey =
    "BBk3CXxUjLp2rpkDm3zSeN4lsE1Qp77qBQFB0W4-QkBsTOiJHeOqEaiXLWKSjwXY6gXMUm1iGKL8OOJqCComz74";
        return urlBase64ToUint8Array(vapidPublicKey);
    }

    function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
    }
    let swURL = `${process.env.PUBLIC_URL}/service-worker.js`
    navigator.serviceWorker.register(swURL).then((response)=>{
        console.warn("response",response)

        return response.pushManager.getSubscription()
        .then(function (subscription) {
           response.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: determineAppServerKey()
          })
        })
    })
 }