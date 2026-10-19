const articles = [
    {
        category: "DaiNieuws",
        title: "De wereld wordt steeds donkerder: 'Het is een nachtmerrie'",
        image: "images/donker.png",
        alt: "De wereld wordt steeds donkerder"
    },
    {
        category: "DaiNieuws",
        title: "Statue of Liberty staat al 139 jaar in New York, maar wist je dat het beeld eigenlijk een vrouw is?",
        image: "images/statue.png",
        alt: "Statue of Liberty"
    },
    {
        category: "DaiNieuws",
        title: "Steeds minder mensen eten groenten en fruit: 'Het lijkt wel alsof we teruggaan in de tijd'",
        image: "images/groente.png",
        alt: "Groenten en fruit"
    },
    {
        category: "DaiNieuws",
        title: "2 mensen gewond geraakt na val van dak zwembad.",
        image: "images/zwembad.jpg",
        alt: "2 mensen gewond geraakt na val van dak zwembad."
    },
    {
        category: "DaiNieuws",
        title: "Hoge vraag naar monteurs en technici: 'Mensen gaan te vaak richting software.'",
        image: "images/vraag.png",
        alt: "Hoge vraag naar monteurs en technici"
    },
    {
        category: "DaiNieuws",
        title: "De wereld droogt steeds meer uit: 'De droogte is een groot probleem voor de landbouw.'",
        image: "images/droog.png",
        alt: "De wereld droogt steeds meer uit"
    }
];

const articlesContainer = document.querySelector("#articles");

if (!articlesContainer) {
    throw new Error("#articles element niet gevonden");
}

function createNewsCard(articleInfo) {
    const card = document.createElement("article");
    card.className = "news-card";

    const image = document.createElement("img");
    image.src = articleInfo.image;
    image.alt = articleInfo.alt;
    image.loading = "lazy";
    image.decoding = "async";

    const content = document.createElement("div");
    content.className = "news-card__content";

    const category = document.createElement("p");
    category.className = "news-card__category";
    category.textContent = articleInfo.category;

    const title = document.createElement("h2");
    title.textContent = articleInfo.title;

    content.append(category, title);
    card.append(image, content);
    return card;
}

articles.forEach((articleInfo) => {
    articlesContainer.append(createNewsCard(articleInfo));
});