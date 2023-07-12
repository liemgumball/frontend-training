import {App} from "./app.js";

// Sure that scripts called after DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  const myApp = new App();

  // Start the app
  myApp.startApp();
});
