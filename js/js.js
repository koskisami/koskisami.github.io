const body = document.getElementById("body");
const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;

function themeSwitch () {
    if (prefersDarkMode == true) {
        body.setAttribute('data-bs-theme', 'dark');
    } else {
        body.setAttribute('data-bs-theme', 'light');
    }

    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', ({ matches }) => {
            if (matches) {
                body.setAttribute('data-bs-theme', 'dark');
            } else {
                body.setAttribute('data-bs-theme', 'light');
            }
        })

}

window.onload = themeSwitch();