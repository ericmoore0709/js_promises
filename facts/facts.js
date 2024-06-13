const BASE_URL = 'http://numbersapi.com';
const RAND_URL = BASE_URL + '/random';
const FORCE_JSON = '?json';
const SET_MINMAX = '&min=1&max=10000';

const doTheThing = (async (e) => {

    return await axios.get(RAND_URL + FORCE_JSON + SET_MINMAX)
        .then(async (result) => {
            const data = result.data;
            console.log(data);

            $('#num_h').text(data.number);
            $('#fact_p').text(data.text);

            const number = data.number;

            const newFact = (async (e) => {

                return await axios.get(BASE_URL + '/' + number + FORCE_JSON)
                    .then((result) => {
                        let actualFact = result.data.text;
                        $('body').append($('<p></p>').text(actualFact))
                    })
                    .catch((err) => {
                        console.error(err);
                    })
            });

            newFact();
            newFact();
            newFact();
            newFact();
        })
        .catch((err) => {
            console.error(err);
        });
})


doTheThing();