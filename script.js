document.addEventListener("DOMContentLoaded", () => {
    const cards = Array.from(document.querySelectorAll(".card"));
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;

    shuffle(cards);

    cards.forEach(card => {
        card.addEventListener("click", () => {
            if (!card.classList.contains("flipped") && flippedCards.length < 2) {
                flipCard(card);
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    setTimeout(checkForMatch, 700);
                }
            }
        });
    });

    function flipCard(card) {
        card.classList.add("flipped");
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;

        if (card1.dataset.letter === card2.dataset.letter) {
            card1.classList.add("match");
            card2.classList.add("match");
            matchedPairs++;
            moves++;

            if (matchedPairs === 8) {
                setTimeout(() => {
                    alert("Congratulations!");
                }, 500);
            }
        } else {
            moves++;
            setTimeout(() => {
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
            }, 1000);
        }

        flippedCards = [];
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            array[j].style.order = i;
            array[i].style.order = j;
        }
    }
});
