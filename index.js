// Building a dictionary website using Javascript and loops
// We start with an array of objects that has information pertaining to our site:
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

// First, grab the container element for all the dictionary terms
const root = document.getElementById("root");
// Make it something interesting to look at
root.innerText = "Loading terms...";

// Here, we are defining an anonymous function instead of creating it beforehand
// Anonymous functions won't have a name
const dictionaryHTML = dictionary.map(function(item) {
    // For every item in the dictionary,
    // -- create HTML elements that correspond to the item's different properties
    
    console.log(item); // See what properties we can access as a part of the item
    // Return them here 
    return `
        <div class="dictionary-term">
            <h2>${item.term}</h2>
            <p>${item.definition}</p>
            <img width='100px' src=${item.image} />
        </div>
        <hr />
    `
});

// This is an array and will not print properly if we leave it that way
// Web browsers generally don't know what to do with objects or arrays
// so the parser will do it's best to convert the array to a string
// resulting in our elements separated by commas, like in the array
console.log(dictionaryHTML);

// Use join to reduce all elements into a single string, suitable for sending to our DOM
root.innerHTML = dictionaryHTML.join("");

// console.log(dictionaryHTML.join(""))