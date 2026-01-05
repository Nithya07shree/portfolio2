export function cursorPointer() {
    const dot = document.querySelector(".cursor-dot");
    const canvas = document.getElementById("cursor-trail");
    const ctx = canvas.getContext("2d");
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let trail = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    document.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        dot.style.left = `${mouse.x}px`;
        dot.style.top = `${mouse.y}px`;
    });

    function drawTrail() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        trail.push({ x: mouse.x, y: mouse.y });
        if (trail.length > 25) trail.shift();

        for (let i = 0; i < trail.length - 1; i++) {
            const p1 = trail[i];
            const p2 = trail[i + 1];

            const alpha = i / trail.length;

            // ===== OUTER GLOW =====
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 0, 0, ${alpha * 0.25})`;
            ctx.lineWidth = 8;
            ctx.shadowBlur = 40;
            ctx.shadowColor = "red";
            ctx.stroke();

            // ===== INNER GLOW =====
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 60, 60, ${alpha * 0.6})`;
            ctx.lineWidth = 6;
            ctx.shadowBlur = 25;
            ctx.shadowColor = "#ff3c3c";
            ctx.stroke();

            // ===== CORE (WHITE BLADE) =====
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255,255,255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.shadowBlur = 5;
            ctx.shadowColor = "white";
            ctx.stroke();
        }

        requestAnimationFrame(drawTrail);
    }


    drawTrail();

}
