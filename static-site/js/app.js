const cards = document.querySelectorAll(".card");
const filter = document.querySelector("#filter");

function showCategory(category) {
    for (const card of cards) {
        const matches = category === "" || card.dataset.category === category;
        card.hidden = !matches;
        if (matches) {
            card.classList.remove("is-entering");
            void card.offsetWidth;
            card.classList.add("is-entering");
        }
    }
}

if (filter) {
    filter.addEventListener("change", (event) => {
        showCategory(event.target.value);
    });
}

