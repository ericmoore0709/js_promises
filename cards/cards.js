let gDeckId = 0;
let remaining = 0;

$('document').ready(async () => {
    await getNewShuffledDeck();

    // handle button click (draw and display card)
    $('#btn_draw').click(async (e) => {
        await getCardFromDeck(gDeckId);
    })
});

// get the shuffled deck
const getNewShuffledDeck = async () => {
    return await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/')
        .then((result) => {
            console.log(result);
            const data = result.data;
            if (data.success) {
                // log deck ID
                gDeckId = data.deck_id;
                remaining = data.remaining;
            }
        }).catch((err) => {
            console.error(err);
        });
}


// draw card from deck
const getCardFromDeck = async (deckId) => {
    return await axios.get('https://deckofcardsapi.com/api/deck/' + deckId + '/draw/')
        .then((result) => {
            console.log(result);
            const data = result.data;
            if (data.success) {
                data.cards.forEach((card) => {
                    $('#card_images').prepend($('<img></img>').attr('src', card.image))
                });
            }
        }).catch((err) => {
            console.error(err);
        });
}
