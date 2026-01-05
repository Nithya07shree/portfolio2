export function projects() {
    const track = document.querySelector('.carousel-track');
    // Select the buttons from the DOM
    const leftBtn = document.querySelector('.left-arrow');
    const rightBtn = document.querySelector('.right-arrow');

    if (!track || !leftBtn || !rightBtn) return;

    const cards = [...track.querySelectorAll('.project-card')];
    const titleEl = document.getElementById('activeProjectTitle'); // Ensure this ID exists in HTML or remove this line

    let activeIndex = 0; // Start at the first card

    function update() {
        // 1. Calculate geometry
        const cardWidth = cards[0].offsetWidth + 40; // Card width + gap (approx)
        const viewport = track.parentElement.offsetWidth;
        const offset = (viewport / 2) - (cardWidth / 2);

        // 2. Apply movement
        track.style.transform = `translate3d(${offset - activeIndex * cardWidth}px, 0, 0)`;

        // 3. Update classes for styling (active, prev, next)
        cards.forEach((c, i) => {
            c.classList.toggle('active', i === activeIndex);
            c.classList.toggle('prev', i === activeIndex - 1);
            c.classList.toggle('next', i === activeIndex + 1);
        });

        // 4. Update Title if element exists
        if (titleEl) {
            titleEl.textContent = cards[activeIndex]?.dataset.title || '';
        }

        // 5. Update Button States (Disable left at start, right at end)
        leftBtn.disabled = activeIndex === 0;
        rightBtn.disabled = activeIndex === cards.length - 1;
    }

    // --- EVENT LISTENERS ---

    // Move Left
    leftBtn.addEventListener('click', () => {
        if (activeIndex > 0) {
            activeIndex--;
            update();
        }
    });

    // Move Right
    rightBtn.addEventListener('click', () => {
        if (activeIndex < cards.length - 1) {
            activeIndex++;
            update();
        }
    });

    // Handle Window Resize (re-center the active card)
    window.addEventListener('resize', () => {
        // Use requestAnimationFrame for smoother performance during resize
        requestAnimationFrame(update);
    });

    // Initial call to set positions
    update();
}