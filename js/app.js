'use strict';

// LAB: SORTING AND CAMPY SCI-FI

// Be sure to read all the comments!
// That's where the instructions are!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

var allBlobs = [];
function Blob(blobName, consumptionRate, townName, population){
  this.blobName = blobName;
  this.consumptionRate = consumptionRate;
  this.townName = townName;
  this.population = population;
  allBlobs.push(this);
}

var remainingPeople = 1000;
var blob = new Blob('blob', 1, 'Dowington', 1000);
var hoursSpentInDowington = blobFinish();

function blobFinish(){
  for (var i = 0; i < remainingPeople ; i++){
    remainingPeople -= allBlobs[0].consumptionRate;
    allBlobs[0].consumptionRate += 1;
  } return allBlobs[0].consumptionRate;
}

// var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function (population, peoplePerHour) {
  if (population === 0){
    return 0;
  } else{
    for (var i = 0; i < population; i ++){
      population -= peoplePerHour;
      peoplePerHour += 1;
    } return population, peoplePerHour;
  };
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

// //*********************************************************
// // PROBLEM 2: Universal Translator
// //*********************************************************
// var allSpecies = [];
// var hello = {
//   klingon: 'nuqneH',  // home planet is Qo'noS
//   romulan: 'Jolan\'tru', // home planet is Romulus
//   'federation standard': 'hello' // home planet is Earth
// };
//
// // TODO: define a constructor that creates objects to represent
// // sentient beings. They have a home planet, a language that they
// // speak, and method (that you'll place on the prototype) called
// // sayHello.
//
// function SentientBeing (homePlanet, languageSpoken) {
//   this.homePlanet = homePlanet;
//   this.languageSpoken = languageSpoken;
//   allSpecies.push(this);
// }
// // TODO: specify a home planet and a language
// // you'll need to add parameters to this constructor
// var kling = new SentientBeing('Qo\'noS', 'klingon');
// var rom = new SentientBeing('Romulus', 'romulan');
// // sb is a SentientBeing object
// SentientBeing.prototype.sayHello = function (sb) {
//   console.log(hello.sb);
//   return hello.sb;
//     // TODO: say hello prints out (console.log's) hello in the
//     // language of the speaker, but returns it in the language
//     // of the listener (the sb parameter above).
//     // use the 'hello' object at the beginning of this exercise
//     // to do the translating
//
//     //TODO: put this on the SentientBeing prototype
// };
//
// // TODO: create three subclasses of SentientBeing, one for each
// // species above (Klingon, Human, Romulan).
//
// assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
//   'the klingon should hear nuqneH');
//
// // TODO: write five more assertions, to complete all the possible
// // greetings between the three types of sentient beings you created above.
//
// //*********************************************************
// // PROBLEM 3: Sorting
// //
// // Implement the following functions. Write at least 2
// // assertions for each one (the assertions are how you
// // will test your code)
// //*********************************************************

var stringArr = ['cat', 'hippo', 'dragon', 'zebra', 'apple'];

function lastLetterSort(stringArray) {
  function byLastLetter(a, b){
    if(a[a.length - 1] < b[b.length - 1]){
      return -1;
    } else if (b[b.length - 1] < a[a.length - 1]){
      return 1;
    } else {
      return 0;
    }
  }
    //TODO: Sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
  stringArray.sort(byLastLetter);
  console.log(stringArray);
}
var sum = 0;

var numberArray = [4, 6, 7];

numberArray.forEach(add);

function add(word){
  sum += word;
}

  // TODO: implement me using forEach

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(item) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
}
