export function contact() {
    document.querySelector('.contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.querySelector('.send-btn span');

        // Simulate sending
        btn.innerText = "TRANSMITTING...";

        setTimeout(() => {
            btn.innerText = "SUCCESS // RECEIVED";
            document.querySelector('.contact-form').reset();

            // Return to normal after 3 seconds
            setTimeout(() => {
                btn.innerText = "SEND_MESSAGE";
            }, 3000);
        }, 1500);
    });
}