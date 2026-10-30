const cards = document.querySelectorAll(".card");
const filter = document.querySelector("#filter");

function showCategory(category) {
    for (const card of cards) {
        const matches = category === "" || card.dataset.category === category;
        card.hidden = !matches;
    }
}

filter.addEventListener("change", (event) => {
    showCategory(event.target.value);
});

