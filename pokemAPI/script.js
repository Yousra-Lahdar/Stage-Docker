

const zoroarkUrl = "https://pokeapi.co/api/v2/pokemon/zoroark";
fetch(zoroarkUrl)
    .then((response) => response.json())
    .then((pkmn) => {
        document.body.innerHTML = `
        <h2>${pkmn.name}</h2>
        <img src="${pkmn.sprites.front_shiny}" alt="c'est un pokemon" />;
        `
        console.log(pkmn)
    });

    const dittoUrl = "https://pokeapi.co/api/v2/pokemon/ditto";
    fetch(dittoUrl)
        .then((response) => response.json())
        .then((pkmn) => {
            document.body.innerHTML = `
            <h2>${pkmn.name}</h2>
            <img src = "${pkmn.sprites.front_default}" alt = "poke" />
            `
            console.log(pkmn)
        })

        //ca affiche que le dérnier 