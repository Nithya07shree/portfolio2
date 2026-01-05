export function skills() {
    const tabs = document.querySelectorAll(".skill-tab");
    const panels = document.querySelectorAll(".skills-panel");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // 1. Reset active states
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            // 2. Activate clicked tab and panel
            tab.classList.add("active");
            const activePanel = document.getElementById(tab.dataset.skill);
            activePanel.classList.add("active");

            // 3. Staggered Decryption Effect
            const chips = activePanel.querySelectorAll("span");
            chips.forEach((chip, index) => {
                // Initial hidden state
                chip.style.opacity = "0";
                chip.style.transform = "translateY(15px) scale(0.95)";
                chip.style.filter = "blur(5px)";

                // Sequential reveal
                setTimeout(() => {
                    chip.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                    chip.style.opacity = "1";
                    chip.style.transform = "translateY(0) scale(1)";
                    chip.style.filter = "blur(0px)";
                }, index * 60); // 60ms delay per item
            });
        });
    });
}