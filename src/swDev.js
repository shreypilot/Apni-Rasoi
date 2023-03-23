export function swDev() {
  return new Promise(function (resolve, reject) {
    function determineAppServerKey() {
      const vapidPublicKey =
        "BBk3CXxUjLp2rpkDm3zSeN4lsE1Qp77qBQFB0W4-QkBsTOiJHeOqEaiXLWKSjwXY6gXMUm1iGKL8OOJqCComz74";
      return urlBase64ToUint8Array(vapidPublicKey);
    }

    function urlBase64ToUint8Array(base64String) {
      const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding)
        .replace(/-/g, "+")
        .replace(/_/g, "/");

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    }

    let swURL = `${process.env.PUBLIC_URL}/service-worker.js`;
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker
          .register(swURL)
          .then(function (registration) {
            console.log("Service worker registered successfully");
            return registration;
          })
          .then(function (registration) {
            return registration.pushManager.getSubscription().then(function (subscription) {
              if (subscription) {
                console.log("User is already subscribed to push notifications");
                return subscription;
              }
              console.log("User is not subscribed to push notifications. Subscribing...");
              return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: determineAppServerKey(),
              });
            });
          })
          .then(resolve)
          .catch(function (error) {
            console.log("Service worker registration failed: ", error);
            reject(error);
          });
      });
    } else {
      reject("Service worker is not supported");
    }
  });
}
