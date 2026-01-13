export function contact() {
    const btn = document.getElementById('direct-mail-btn');
    const btnText = btn.querySelector('.btn-text');

    btn.addEventListener('click', () => {
        btnText.innerText = "OPENING_SECURE_CHANNEL...";

        // Settings based on your request
        const destination = "bcd@gmail.com";
        const subject = "PORTFOLIO_CONTACT_LOG";

        setTimeout(() => {
            window.location.href = `mailto:${destination}?subject=${encodeURIComponent(subject)}`;
            btnText.innerText = "COMMUNICATION_ESTABLISHED";

            setTimeout(() => {
                btnText.innerText = "INITIALIZE_COMMUNICATION";
            }, 4000);
        }, 1200);
    });
}