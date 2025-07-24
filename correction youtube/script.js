const videos = [
    {
        title: "MATHUSALEM",
        date: "2023/03/09",
        timeVideo: "3:04",
        image: "one.avif",

    },
    {
        title: "How to Make Learning as Addictive as Social Media",
        date: "26/10/2023",
        timeVideo: "12:54",
        image: "two.avif",

    },
    {
        title: "Learn English With RATATOUILLE",
        date: "03/05/2023",
        timeVideo: "23:41",
        image: "three.avif",

    },
    {
        title: "MA ROUTINE DU SOIR 2025 dans ma nouvelle Maison ",
        date: "28/04/2025",
        timeVideo: "21:59",
        image: "four.avif",

    },
    {
        title: "Meant to Be Together",
        date: "05/06/2025",
        timeVideo: "3:28:56",
        image: "five.avif",

    },
    {
        title: "Bagjan Oktyabr-Soul Therapy",
        date: "19/09/2024",
        timeVideo: "18:31",
        image: "six.avif",

    },
]

// recupére la ref de ma section html
const cardsContainerRef = document.getElementById("yt-cards-container");


// je boucle sur mon tableau d'objects et pour chaque video je l'inject dans ma section 
function injectCard(array) {
    for (let i = 0; i < array.length; i++) {
        const video = array[i];
        cardsContainerRef.innerHTML += 
        `<div class ="card">
        <img src="${video.image}" alt= "${video.title}">
        <h2>${video.title}</h2>
        </div> `;

    }

}


// recupérer un element html 
const searchRef = document.getElementById("search");
searchRef.addEventListener("input", (elem) => {
    const searchedValue = elem.target.value;
    const videosFiltered = filterByTitle(videos, searchedValue);
    cardsContainerRef.innerHTML = "";
    injectCard(videosFiltered);
})



// filtre mon tableau
function filterByTitle(array,searchedValue) {
    return array.filter(vi => vi.title.toLowerCase().includes(searchedValue.toLowerCase()));
}

injectCard(videos);


