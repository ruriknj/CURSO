let varA = 'A'; //B
let varB = 'B';  //C
let varC = 'C';  //A   

/*
let varATemp = 'A';
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);
*/

// outra maneira:

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);