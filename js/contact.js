export function contact() {
    const form = document.querySelector('.contact-form');
    const btn = document.querySelector('.send-btn span');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        try {
            const response = await fetch(e.target.action, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                btn.innerText = "SUCCESS // RECEIVED";
                form.reset();
            } else {
                btn.innerText = "ERROR // INTERCEPTED";
            }
        } catch (error) {
            btn.innerText = "SYSTEM_FAILURE";
        }
        setTimeout(() => {
            btn.innerText = "SEND_MESSAGE";
        }, 3000);
    });
}