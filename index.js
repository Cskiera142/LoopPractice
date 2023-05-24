// const { disconnect } = require("process");
// const { arr1, arr2, isUser } = require("./functions");
// const { test } = require("node:test");

// /////////
// //Testing for workshop 17
// /////////

// /////////////
// // Test 1. Multiplication

// describe("multiplication:", () => {
//   test("product(7, 8): multiplying 7*8 should return 56", () => {
//     expect(calculations.product(7, 8)).toBe(56);
//   });

//   test("product(8, 7: multiplying 8*7 should NOT return 48", () => {
//     expect(calculations.product(8, 7)).toBe(48);

//     test("product(null, 7): multiplying null*7 should return 0", () => {
//       expect(calculations.product(8, 7)).toBe(0);

//       test("product(undefined, 7): multiplying undefined*7 should return NaN", () => {
//         expect(calculations.product(8, 7)).toBe(NaN);
//       });
//     });
//   });
// });

// // // /////////////
// // // //Test 2. concatOdds

// describe("concat arrays and return odds only in order:", () => {
//   test("concat arrs", () => {
//     expect((arr3 = arr1.concat(arr2).toBe([3, 2, 1, 9, 1, 1, 1, 4, 15, -1])));
//   });

//   test("filter odds only", () => {
//     expect(arr3.filter(num % -2 === 0).toBe([-1, 1, 1, 1, 1, 3, 15, 9]));
//   });

//   test("sort in numerical order", () => {
//     expect(
//       arr3
//         .sort(function (a, b) {
//           return a - b;
//         })
//         .toBe([-1, 1, 1, 1, 1, 3, 9, 15])
//     );
//   });
// });

// describe("check whether customer has account or not", () => {
//   test("is a user", () => {
//     expect(isUser === "user").toBeTruthy("user");
//   });
//   test("isnt a user", () => {
//     expect(isUser !== "user").toBeFalsy("user");
//   });
//   test("send alert", () =>
//     expect(isUser !== "user")
//       .alert("Would you like to sign up?")
//       .toBe(alert));
// });

const groceryList = ["milk", "eggs", "rice", "churros"];

const replacegroceriesWithCandy = (oneItem) => {
  return "Cheetos";
};

let newList = groceryList.map(replacegroceriesWithCandy);

console.log(newList);
