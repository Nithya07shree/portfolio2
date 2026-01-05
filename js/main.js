import { loaderPage } from "./loader.js";
import { landingPage } from "./landing.js";
import { cursorPointer } from "./cursor.js";
import { projects } from "./projects.js";
import { initModal } from "./modal.js";
import { contact } from "./contact.js";

document.addEventListener('DOMContentLoaded', () => {
    cursorPointer();
    loaderPage();
    landingPage();
    projects();
    initModal();
    contact();
})