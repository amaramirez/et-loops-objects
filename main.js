// Objects are like dictionaries, you can look up 'terms' (keys) and it will return a 'definition' (values)
const dictionary = {
    apple: "crunchy red fruit",
    bike: "transportation on two wheels",
    orange: "both a fruit and a color",
};

// eg. Looking up the definition for 'bike' in the dictionary
console.log(dictionary["bike"]);

// Should print -> "transportation on two wheels"

// array.map() explained:
// The map method is useful for taking an array and building a new one with the same amount of elements,
// however, this new data set can be formed using the values sent through each iteration
// The map method will set up the loop for us and give us a variable that represents the data of each element
// -- see after VS comment for comparison between map method and manual for loop
// We use the values from the first array to generate the data for the resulting array

// We start with an array and we would like to build a secondary array with 'ratings' of the cookies
const cookieBrands = ['Oreo'       , 'Chips Ahoy'       , 'Nabisco'     , 'Grandma\'s'];
// we want ->        ["I like them", "I don't like them", "My favorite!", "I like them" ]

// Create a function that will handle what information is returned for each element in the array
// The brand and index are two values always passed in by map, the order does matter
// The first argument represents the element data and the second represents its position in the array
function compareAndRate (brand /* the name of this parameter will change based on your specific use case */, index) {
    // See how the data is represented in the function
    console.log(`${brand} is at index ${index}`);
    // The data that populates the new array is determined by what data is returned from this function
    if (brand === "Chips Ahoy") {
        // If the brand is Chips Ahoy, that index in the new array will be "I don't like them"
        return "I don't like them"
    } else if (brand === 'Nabisco') {
        // If the brant is Nabisco, that index in the new array will be "My favorite!"
        return "My favorite!"
    } else {
        // Otherwise, the index in the new array will be "I like them"
        return "I like them"
    }
}

// Utilize our function inside of the map method, notice how it's not being called
// We are passing in the code for function itself and not the output of the function
// The map method RETURNS an array as opposed to mutating it, so it needs to be stored in a variable
const ratings = cookieBrands.map(compareAndRate);

// Check our results, notice how they correspond to the starting array
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