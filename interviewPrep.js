Test;
// .length : String length method
// string[x] : Returns the character at location x of a string
// Characters in strings cannot be changed individualy because of string immutability
// To find the last character in a string, use str.length - 1
// Unlike strings, arrays are mutable
// array.push(x) appends a new value at the end of an array, and increases its length
// array.pop() removes the last member of an array, and it can be saved to a variable. ex. x = y.pop() => x = last member of the array
// array.shift() removes the first member of an array, and it can be saved to a variable as well
// array.unshift(x) adds a new element to the beggining of an array; The reverse of push
// function notation : function name(variables){}
// saznaj sta radi typeof
// variables declared in a function only have local scope
// varaibles which have a local scope take precident in the function they're in.
// The === (strict equal) opperator not only compares values, but it also compares types/ 3===3 is true, but 3 === '3' is false
// The !== (strict not equal) opperator also discriminates between types
// && means AND, || means or
// switch statements use strict equality opperator(===) when comparing cases with values
// default in switch statements adds a default value to the tested variable in case none of the switch cases are met
// when an object has a variable name that has a space i.e object.length and height, you have to write it as object["length and height"]
// when declaring variables inside of an object, use commas at the end of the line until the final line
/* you can find an object property by looking at the value as well. ie 
   var testobj = {
    16 : "not enough"
    20 : "enough"
   }
   var playerNumber = 16
   var player = testobj[playerNumber]
   
   This prints out "not enough"

*/
/* when adding properties to object, simply use dot notation
   example.
   var object = {
    "legth" : 12
    "width" : 12
   }
   object.height = 12 (this adds the parametar height and sets its value to 12)
   or you can use square bracket notation
   object[height] = 12
*/
// In order to remove a variable from an object, use the delete keyword
// eg. delete object.length;
// parseInt() converts string of numbers into an integer e.g. parseInt("20") will return 20.
// A map is an object that contains key value pairs eg. var zoo = new Map(); zoo.set('Zebra',5), In this case Zebra is the key, and 5 is the value.
// A map is more efficient than an array if when we know what we are looking for.
// myMap.set()
