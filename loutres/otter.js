const otters = [
    { name: "Luna", furColor: "brown", isAdult: true, hasRock: true },
    { name: "Nino", furColor: "grey", isAdult: false, hasRock: false },
    { name: "Zelda", furColor: "black", isAdult: true, hasRock: false },
    { name: "Milo", furColor: "brown", isAdult: false, hasRock: true },
    { name: "Sora", furColor: "grey", isAdult: true, hasRock: true },
    { name: "Tao", furColor: "black", isAdult: true, hasRock: true }
];

/**
 *  1. Combien y a-t-il de loutres dans le tableau ? De loutres adultes ? 
    2.	Filtrer uniquement les loutres adultes puis afficher leur nom et leur couleur de fourrure.
    3.	Filtrer les loutres adultes qui possèdent un caillou puis afficher leur nom.
    4.	Créer un nouveau tableau de chaînes de caractères contenant les noms des loutres suivis de la mention " (adulte)" ou " (jeune)" selon leur statut (en utilisant la méthode map).
 */

/**1. */

function nbLoutres(loutres) {
    const total = loutres.length;
    const adulte = loutres.filter(x => x.isAdult).length;
    return { total, adulte };

}

console.log("nbr de loutres =", nbLoutres(otters).total);
console.log("nbr de loutres adultes=", nbLoutres(otters).adulte);

/**2. */

function loutresAdultes(loutres) {
    return loutres.filter(x => x.isAdult).map(x => `${x.name}  a une fourrure  ${x.furColor}`);
}

console.log(loutresAdultes(otters));


/**3 */

function loutresAdulteRock(loutres) {
    return loutres.filter(x => x.isAdult && x.hasRock).map(x => `${x.name}`);
}
console.log(loutresAdulteRock(otters));

//**4 */

function statueLoutres(loutres) {
    return loutres.map(x => `${x.name}(${x.isAdult ? "adulte" : "jeune"})`);
}

console.log(statueLoutres(otters));


//correction prof

// Question 1
console.log("Nombre de loutres: ", otters.length);
const adultOtters = otters.filter((otter) => otter.isAdult);
console.log("Nb de loutres adultes: ", adultOtters.length);
// Question 2
// Q2 - for
for (let i = 0; i < adultOtters.length; i++) {
    const current = adultOtters[i];
    console.log(`Nom : ${current.name} et fourrure : ${current.furColor}`);
}
// Q2 - forEach
// adultOtters.forEach((otter) => console.log(`Nom : ${otter.name} et fourrure : ${otter.furColor}`))

// Question 3
// Q3 - sur le tableau initial
const adultOttersWithRock = otters.filter((otter) => otter.isAdult && otter.hasRock);
adultOttersWithRock.forEach((otter) => console.log(`Loutre adultes ayant un cailloux : ${otter.name}`))
// Q3 - sur le tableau de loutres adultes
const adultOttersWithRock2 = adultOtters.filter((otter) => otter.hasRock);
// adultOttersWithRock2.forEach((otter) => console.log(`Loutre adultes ayant un cailloux : ${otter.name}`))

// Question 4 
const otterStr = otters.map((otter) => `Loutre : ${otter.name}, ${otter.isAdult ? "(adulte)" : "(jeune)"}`);
console.log(otterStr);

// BONUS
const ages = [12, 48, 57, 61];
const mappedAges = ages.map((age) => age.toString());
console.log(mappedAges);