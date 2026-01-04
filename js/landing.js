const title = document.querySelector(".title");

window.addEventListener("load", () => {
    title.style.opacity = 0;
    title.style.transform = "translateX(-20px)";

    setTimeout(() => {
        title.style.transition = "all 1.2s ease";
        title.style.opacity = 1;
        title.style.transform = "translateX(0)";
    }, 300);
});
