import { loaderPage } from "./loader.js";
import { landingPage } from "./landing.js";
import { cursorPointer } from "./cursor.js";
import { projects } from "./projects.js";
import { initModal } from "./modal.js";

document.addEventListener('DOMContentLoaded', () => {
    cursorPointer();
    loaderPage();
    landingPage();
    projects();
    initModal();
})