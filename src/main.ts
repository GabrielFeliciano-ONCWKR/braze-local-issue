//import * as braze from "@braze/web-sdk";
const braze = window["braze" as any] as any;

console.log(import.meta.env);

// https://vite.dev/guide/env-and-mode#env-files
braze.initialize(import.meta.env.VITE_API_KEY, {
  baseUrl: import.meta.env.VITE_API_ENDPOINT,
  enableLogging: true,
});

braze.automaticallyShowInAppMessages();
braze.changeUser(import.meta.env.VITE_USER_ID);
braze.openSession();

const button = document.querySelector("#send") as HTMLButtonElement;
button.addEventListener("click", () => {
  braze.logCustomEvent("test-web", {});
  braze.requestImmediateDataFlush();
});
