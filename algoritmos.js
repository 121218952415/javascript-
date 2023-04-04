let str = "hello";
// invierte las letras
function reverseString(str) {
  return str.split("").reverse().join("");
}

let num = 5;
// 5 *4 *3 *2 *1
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}

let strr = "The quick brown fox jumped over the lazy dog";
function findLongestWordLength(str) {
  //palabra mas larga
  const palabras = str.split(" ");
  let longitudMaxima = 0;
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > longitudMaxima) {
      longitudMaxima = palabras[i].length;
    }
  }
  return longitudMaxima;
}

//recorre array de arrays y regresa el
// numero mas grande de cada uno
let arr = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
function largestOfFour(arr) {
  let largestNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    largestNumbers.push(largestNumber);
  }
  return largestNumbers;
}

let astr = "Bastian" 
let target =  "n"
// ultima letra se puede tambien con .endsWith()
function confirmEnding(astr, target) {
    let lastChars = str.substring(str.length - target.length);
    if (lastChars === target){
    return true;
    }else{ return false }
  }
  
  confirmEnding("Bastian", "n");

  // si es multiplo de cinco fizz y de 3 bazz 

  function FizzBuzz(){
    for(let i = 0 ; i <= 100 ; i ++){
    if (i % 15 === 0 ){return fizzBuzz}
    else if (i % 3 === 0){return fizz }
    else if (i % 5 === 0){return Buzz}
    else {console.log(i)}

  }
}


// recorta cadena chavo  , chav...
function truncateString(str, num) {
    if (str.length > num) { 
      let recortaCadena = str.slice(0,     num) + "...";
      return recortaCadena;
    } else {
      return str; 
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

//Primer letra mayuscula y las demas minusculas 

let stt = "I'm a little tea pot"
function titleCase(stt) {
    return str.toLowerCase().split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
  
  