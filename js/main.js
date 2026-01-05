import { loaderPage } from "./loader.js";
import { landingPage } from "./landing.js";
import { cursorPointer } from "./cursor.js";

document.addEventListener('DOMContentLoaded', () => {
    loaderPage();
    landingPage();
    cursorPointer();
})