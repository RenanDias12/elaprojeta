document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("weare-modal");
    const btn = document.getElementById("weare-button");
    const span = document.getElementsByClassName("weare-close-button")[0];

    btn.onclick = () => {
        modal.style.display = "block";
    }

    span.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});