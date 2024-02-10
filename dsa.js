// const factorial=(number)=>{
//      result=0;
//      for(const i of number){
//       result*=i;
//      }
//      return result;
// }
//   console.log(factorial([7]))


// const palindrome="levels"
// arr=palindrome.split("").reverse().join("");
// if(palindrome===arr){
//   console.log("this is a palindrome")
// }else{
//   console.log("this is not a palindrom")
// }

// const biggernumber=[9,2,3,4,5,6]
// let result=biggernumber[0]
// for(const i of biggernumber){
//   if(biggernumber[i]>result){
//     result=biggernumber[i]
//   }
// }
//   console.log(result)

//   function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();

// const array=[1,2,3,3,4,5,5,5]
// new_array=new set(array)
// console.log(new_array)
// const sentance="hy thr m sng cmptr"
// let vowel=0;
// for(const i of sentance){
//   if(i== "a" ||i=="e" ||i== "i" || i=="o" || i=="u"){
//     console.log(i+" :vowel")
//   }else{
//     console.log("consonant")
//   }

//   }\\

// const sentence = "hy thr m sng cmptr";
// let vowelCount = 0;

// for (const i of sentence) {
//   if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//     console.log(i + " :vowel");
//     vowelCount++;
//   } else {
//     console.log(i + " :consonant");
//   }
// }

// console.log("Total vowels:", vowelCount);


// function countVowelsAndConsonants(sentence) {
//   let vowelCount = 0;
//   let consonantCount = 0;

//   for (const i of sentence) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       vowelCount++;
//     } else {
//       consonantCount++;
//     }
//   }

//   return { vowels: vowelCount, consonants: consonantCount };
// }

// const sentence = "hy thr m sng cmptr";
// const result = countVowelsAndConsonants(sentence);
// console.log("Vowels:", result.vowels);
// console.log("Consonants:", result.consonants);




// // check if there is vowel in the number so increment vowel other wise increment consonant 
// const variable=(count)=>{
//      vowels=0;
//      consonant=0;
//      for(const i of count){
//       if(i==="a"|| i==="e" || i==="i" || i==="0" || i==="u"){
//         vowels++
      
//      }else{
//            consonant++
//      }
//     }return{vowels , consonant}
//    }
//       sentence="hey there am using whatsapp"
//      let  fun=variable(sentence)
//      console.log("vowels in sentence are :"+fun.vowels)
//      console.log("consonants in sentence are :"+fun.consonant)

// const amount_given = 1000;
// const amount_remaining = 222;
// let remain_amount = amount_given - amount_remaining;

// if (remain_amount >= 500) {
//   const five = Math.floor(remain_amount / 500);
//   console.log("Shopkeeper gave you PKR:", five, "500 notes");
//   remain_amount -= five * 500;
// }

// if (remain_amount >= 100) {
//   const one = Math.floor(remain_amount / 100);
//   console.log("Shopkeeper gave you PKR:", one, "100 notes");
//   remain_amount -= one * 100;
// }

// if (remain_amount >= 50) {
//   const fifty = Math.floor(remain_amount / 50);
//   console.log("Shopkeeper gave you PKR:", fifty, "50 notes");
//   remain_amount -= fifty * 50;
// }

// if (remain_amount >= 10) {
//   const ten = Math.floor(remain_amount / 10);
//   console.log("Shopkeeper gave you PKR:", ten, "10 notes");
//   remain_amount -= ten * 10;
// }

// if (remain_amount >= 5) {
//   const five = Math.floor(remain_amount / 5);
//   console.log("Shopkeeper gave you PKR:", five, "5 notes");
//   remain_amount -= five * 5;
// }

// if (remain_amount >= 2) {
//   const two = Math.floor(remain_amount / 2);
//   console.log("Shopkeeper gave you PKR:", two, "2 coins");
//   remain_amount -= two * 2;
// }

// if (remain_amount >= 1) {
//   console.log("Shopkeeper gave you PKR:", remain_amount, "1 coin");
// }


// write fibonacci number sequence


// let given_number = 9;
// let first = 0;
// let second = 1;
// let sum;

// for (let i = 2; i <= given_number; i++) {
//   sum = first + second;
//   first = second;
//   second = sum;
// }

// console.log(sum);




























