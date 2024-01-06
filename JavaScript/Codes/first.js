// const profile = {
//     name: "shradhakhapra",
//     isFollow: false,
//     post: 195,
//     followers: 569000,
//     following: 4,
//     occupation: "Enterpreneur",
//     bio: "blah.. blah..."
// };



// let marks = prompt("Enter your marks:");

// if (marks >= 90) {
//     console.log("Your Grade: A");
// } else if (marks >= 70) {
//     console.log("Your Grade: B");
// } else if (marks >= 60) {
//     console.log("Your Grade: C");
// } else if (marks >= 50) {
//     console.log("Your Grade: D");
// } else {
//     console.log("Your Grade: F");
// }



// let name = prompt("Enter your name: ");
// let username = `@${name}${name.length}`;
// console.log(`Username: ${username}`);



// let arr = [101, 102, 105, 106, 107];
// console.log(arr);
// arr.splice(2, 0, 103, 104);
// console.log(arr);



// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies);

// companies.shift();
// console.log(companies);

// companies.splice(1, 1, "Ola");
// console.log(companies);

// companies.push("Amazon");
// console.log(companies);



// function vowelsCount(str){
//     let cnt = 0;
//     for(let x of str){
//         x = x.toLowerCase();
//         if(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u'){
//             cnt++;
//         }
//     }
//     return cnt;
// }

// const arrowVowelsCount = (str) => {
//     let cnt = 0;
//     for(let x of str){
//         x = x.toLowerCase();
//         if(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u'){
//             cnt++;
//         }
//     }
//     return cnt;
// };



// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// arr.forEach((val) => {
//     console.log(val ** 2);
// });



// let marks = [77, 56, 91, 82, 90, 95, 89, 64, 84];
// console.log(marks);

// let goodMarks = marks.filter((val) => {
//     return val >= 90;
// });
// console.log(goodMarks);




let n = prompt("Enter a number: ");
let arr = [];
for(let i = 1; i <= n; i++){
    arr.push(i);
}
console.log(arr);

let sum = arr.reduce((prev, val) => {
    return prev + val;
});
console.log(sum);

let mul = arr.reduce((prev, val) => {
    return prev * val;
});
console.log(mul);