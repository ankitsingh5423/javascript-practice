const cards = Array.from(document.getElementsByClassName("card"));  // Getting All The Cards

cards.forEach(function (card) {

    card.addEventListener("click", function () {
        card.classList.add("active");

        cards.forEach(function (value) {

            if (value != card) {
                value.classList.remove("active");
            }
        })
    })
})