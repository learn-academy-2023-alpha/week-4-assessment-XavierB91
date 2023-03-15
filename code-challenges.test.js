// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron"
// ]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// pseudocode : (1:25 pm) 03.10.2023 I want to create an function.
// what does this function do ? : it takes in an array as an argument, removes the first item from the array and shuffles the remaining content.
// what will I call this function ? : colorShuffler 
// how do I make this function take in an array, remove the first item from the array and shuffle the remaining content ?  I can use the The arrayContaining matcher ?(1:34pm) 
describe('colorShuffler', () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron"
  ]
  ;
  it('it takes in an array, removes the first item from the array and shuffles the remaining content', () => {
    // invoking my function colorShuffler passing in the value of colors1 an array containing colors. 
    expect(colorShuffler(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"])); 
    expect(colorShuffler(colors2)).toEqual (expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  });
});

// test out put:
// ReferenceError: colorShuffler is not defined

// b) Create the function that makes the test pass.
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const colors2 = ["chartreuse", "indigo",  "periwinkle", "ochre", "aquamarine","saffron" ]

const colorShuffler = (arr) => {
  // (2:00pm) Start from the last element and swap
  // one by one. I don't need to run for
  // the first element that's why i > 0
  for (let i = arr.length - 1; i > 0; i--) {
    // pick a random index from 0 to i inclusive
    const j = Math.floor(Math.random() * (i + 1)); // at random index
    // Swap arr[i] with the element
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return  arr
  }
}

// new test out put :  PASS  ./code-challenges.test.js
//   colorShuffler
//   ✓ it takes in an array, removes the first item from the array and shuffles the remaining content (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.433 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.73s.
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("voteUpOrDown", () => {
  const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    expect(voteUpOrDown(votes1)).toEqual(11)
    expect(voteUpOrDown(votes2)).toEqual(-31)
  })
})
// test output FAIL  ./code-challenges.test.js
// voteUpOrDown
//   ✕ takes in an object that contains up votes and down votes and returns the end tally. (1 ms)

// ● voteUpOrDown › takes in an object that contains up votes and down votes and returns the end tally.

//   ReferenceError: voteUpOrDown is not defined

// const votes1 = { upVotes: 13, downVotes: 2 }
// // // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31
// b) Create the function that makes the test pass.
// Pseudocode: (2:39 pm) 03.10.2023 I want to create an function.
// what does this function do ? : takes in an object that contains up votes and down votes and returns the end tally.
// what will I call this function ? : voteUpOrDown
// how do I make this function take in an object that contains up votes and down votes and returns the end tally ?  
// inputs will be an object which contains two key value pairs.  For object votes1 it contains the key value pair named upVotes with a value of 13 and the key value pair named downVotes with a value of 2. 
// For object votes2 it contains the key value pair named upVotes with a value of 2 and the key value pair named downVotes with a value of 33. I want to take the values of each Upvote and Downvote and subtract the two to get the end tally. How do I do this ? /*
// Given an object containing counts of both upVotes and downVotes, return what vote count should be displayed. This is calculated by subtracting the number of downVotes from upVotes.

const voteUpOrDown = (votes) => {
  return votes.upVotes-votes.downVotes;
}

// new test output 
// PASS  ./code-challenges.test.js
// colorShuffler
//   ✓ it takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
// voteUpOrDown
//   ✓ takes in an object that contains up votes and down votes and returns the end tally.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.472 s, estimated 1 s
// Ran all test suites.


	

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("noDuplicates", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    // I only need one expect statement so I need the proper syntax 
    expect(noDuplicates(union)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]

// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
// test output : FAIL ● noDuplicates › takes in two arrays as arguments and returns one array with no duplicate values

    // ReferenceError: noDuplicates is not defined

// b) Create the function that makes the test pass.
//  pseudocode : (3:44 pm) 03.10.2023 I want to create an function.
// what does this function do ? :takes in two arrays as arguments and returns one array with no duplicate values.
// what will I call this function ? : noDuplicates
// how do I make this function takes in two arrays as arguments and returns one array with no duplicate values. ?  I could create a new variable called union  within the function to combine both arrays (?)
// make way to merge and remove duplicate value from an array
// function to merge two arrays and remove duplicates
var union = [...new Set([...dataArray1, ...dataArray2])];

// (final attempt)
const noDuplicates = () => {
return union
} 


// [...a, ...b] concatenates two arrays, you can use a.concat(b) as well. new Set() create a set out of it and thus your union. And the last [...x] converts it back to an array.


// (attempt 3) const noDuplicates = (dataArray1,dataArray2) => 
// {
//   if(!dataArray2.push || !dataArray2.length)
//  // if dataArray2 is not an array, or empty, then return dataArray1
//    return dataArray1;    
//  // if dataArray1 is empty, return dataArray2
//   if(!dataArray1.length) 
//    return dataArray2.concat();     
//   // iterate through all the elements of dataArray2
//   for(var i = 0; i < dataArray2.length; i++)
//   {
//       // if dataArray2 element is not present in dataArray1 only then add them to dataArray1
//       if(dataArray1.indexOf(dataArray2[i]) == -1) 
//       dataArray1.push(dataArray2[i]);
//   }
//   return dataArray1;
// }





// /  (attempt 2) first concatenating two arrays.
// var dataArray3 = dataArray1.concat(dataArray2);
// var length = dataArray3.length;
// // iterating the concatenated array to its length and removing the repeating element
// // from the final array.
// const noDuplicates = () => { 
//   while (length--) 
// {
//   var item = dataArray3[length];
//   if (newDataArray.indexOf(item) === -1) 
//   {
//     newDataArray.unshift(item);
//   }
// }
// }
// console.log(noDuplicates(dataArray3))



//  (first attempt )const noDuplicates = (dataArray1,dataArray2) => {
//     // merge two arrays
//     let arr = dataArray1.concat(dataArray2);
//     let newArr = [];
  
//     // loop through array
//     for(let i of arr) {
//         if(newArr.indexOf(i) === -1) {
//             newArr.push(i);
//         }
//     }
// }
//  the two array elements are merged together and the duplicate elements are removed.
// The two arrays are merged using the concat() method.
// The for...of loop is used to loop through all the elements of arr.
// The indexOf() method returns -1 if the element is not in the array.
// Hence, during each iteration, if the element equals -1, the element is added to the uniqueArr array using the push() method.
// test outputs :  PASS  ./code-challenges.test.js
//   colorShuffler
//   ✓ it takes in an array, removes the first item from the array and shuffles the remaining content (3 ms)
// voteUpOrDown
//   ✓ takes in an object that contains up votes and down votes and returns the end tally. (1 ms)
// noDuplicates
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.421 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.34s.