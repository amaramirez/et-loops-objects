const dictionary = [
    {
        term: "apple",
        definition: "red fruit",
        image: "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png"
    },
    {
        term: "orange",
        definition: "both a color and a fruit",
        image: "https://www.herbazest.com/imgs/f/e/0/925060/orange.jpg"
    },
    {
        term: "bike",
        definition: "two wheels, used for transportation",
        image: "https://www.statebicycle.com/cdn/shop/products/6061-eBikeCommuter-MatteBlack_1.jpg?v=1684443969"
    },
    {
        term: "phone",
        definition: "does a lot more than make calls these days!",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-pro-max-graphite-2023?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1679072989055"
    }
];

const root = document.getElementById("root");
root.innerText = "Loading terms...";

const dictionaryHTML = dictionary.map(function({
    term,
    definition,
    image,
    link
}) {
    
    return `
        <h2>${term}</h2>
        <p>${definition}</p>
        <img width='100px' src=${image} />
        <hr />
    `
});

console.log(dictionaryHTML);

root.innerHTML = dictionaryHTML.join("");

// console.log(dictionaryHTML.join(""))