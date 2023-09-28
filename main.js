const dictionary = {
    apple: "crunchy red fruit",
    bike: "transportation on two wheels",
    orange: "both a fruit and a color",
};

console.log(dictionary["bike"]);

const cookieBrands = ['Oreo', 'Chips Ahoy', 'Nabisco', 'Grandma\'s'];

function compareAndRate (brand, index) {
    console.log(`${brand} is at index ${index}`);
    // return "hello " + brand
    if (brand === "Chips Ahoy") {
        return "I don't like them"
    } else if (brand === 'Nabisco') {
        return "My favorite!"
    } else {
        return "I like them"
    }
}

const ratings = cookieBrands.map(compareAndRate);

console.log(cookieBrands);
console.log(ratings);

// VS

// const ratings = []
// for (let i = 0; i < cookieBrands.length; i++) {
//     const brand = cookieBrands[i];
//     console.log(`${brand} is at index ${i}`)
//     if (brand === "Chips Ahoy") {
//         ratings.push('I don\'t like them')
//     } else if (brand === 'Nabisco') {
//         ratings.push('My favorite!')
//     } else {
//         ratings.push('I like them')
//     }
// }