//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

const fizz = 'Fizz'
const buzz = 'Buzz'


for (let i = 1; i <= 100; i++) {

  //Se multiplo di 3 e 5 il numero è sostituito da FizzBuzz
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(fizz + buzz);
  //Se multiplo di 3 il numero è sostituito da Fizz
  }  else if (i % 3 === 0) {
    console.log(fizz);
  //Se multiplo di 5 il numero è sostituito da Buzz  
  } else if (i % 5 === 0) {
    console.log(buzz);
  }  else
    console.log(i)    
}