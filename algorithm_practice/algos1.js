// //Setting and Swapping
// myNumber = 42
// myName = "Bryan"
// function swap(){
//     myNumber = "Bryan";
//     myName = 42;
//     return myNumber, myName;
// }
// console.log(swap()); 

// //Print -52 to 1066
// function countup(){
//     for(var i = -52; i <= 1066; i++){
//         console.log(i);
//     }
// }
// console.log(countup());

// //Don't Worry, Be Happy
// function beCheerful(){
//     for(var i = 0; i < 98; i++){
//         console.log("good morning!");
//     }
// }
// console.log(beCheerful());

//Multiples of Three – but Not All
// function multi3(){
//     for(var i = -300; i <= 0; i += 3){
//         if(i == -3 || i == -6){
//             continue;
//         }
//         else(console.log(i));
//     }
// }
// console.log(multi3());

// //Printing Integers with While
// function whilecounting(){
//     var i = 1999;
//     while (i < 5280){
//         i++;
//         console.log(i);
//     }
// }
// console.log(whilecounting());

// //You Say it's your Birthday
// function birthday(m,d){
//     if (m === 7 && d === 2){
//         console.log("How did you know!?")
//     }
//     else{
//         console.log("Just another Day....")
//     }
// }
// console.log(birthday(9,18));

// //Leap Year
// function leap(y){
//     if (y % 4 !== 0 || y % 100 === 0){
//         console.log("Not a leap year");
//     }
//     else{
//         console.log("Issa leap year");
//     }
// }
// console.log(leap(1100));

// //Print and Count
// function printAndCount(){
//     var count = 0
//     for(var i = 512; i <= 4096; i++){
//         if (i % 5 === 0){
//            count += 1;
//            console.log(i); 
//         }
//     }
//     console.log(count);
// }
// console.log(printAndCount());

// //Multiples of Six
// function multiofsix(){
//     var i = 0
//     while(i <= 60000){
//         i++;
//         if(i % 6 === 0){
//             console.log(i);
//         }
//     }
// }
// console.log(multiofsix());

//Counting, the Dojo Way
function dojoCount(){
    for(var i = 0; i <= 100; i++){
        if(i % 10 === 0){
            console.log(" Dojo");
        }
        if(i % 5 === 0){
            console.log("Coding");
        }
        else(console.log(i));
    }
}
console.log(dojoCount());